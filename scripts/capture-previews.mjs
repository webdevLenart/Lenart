/**
 * Captures real screenshots of each project's live website and saves them as
 * optimized WebP images in public/projects/<slug>/.
 *
 * Runs in GitHub Actions (see .github/workflows/capture-previews.yml), or
 * locally after installing the tools it needs:
 *
 *   npm install --no-save playwright sharp
 *   npx playwright install chromium
 *   node scripts/capture-previews.mjs [slug ...]
 */
import { mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import sharp from 'sharp';
import { projects } from '../src/data/projects.js';

const publicDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');
const onlySlugs = process.argv.slice(2);

const devices = {
  desktop: { deviceScaleFactor: 2, isMobile: false, hasTouch: false },
  mobile: { deviceScaleFactor: 2, isMobile: true, hasTouch: true },
};

const targets = projects.filter(
  (project) =>
    project.url && project.preview && (onlySlugs.length === 0 || onlySlugs.includes(project.slug)),
);

if (targets.length === 0) {
  console.error('No matching projects with a url and preview to capture.');
  process.exit(1);
}

const browser = await chromium.launch();

try {
  for (const project of targets) {
    for (const [kind, device] of Object.entries(devices)) {
      const preview = project.preview[kind];
      if (!preview) continue;

      const context = await browser.newContext({
        ...device,
        viewport: preview.viewport,
        colorScheme: 'light',
        reducedMotion: 'reduce',
        locale: 'en-US',
      });
      const page = await context.newPage();
      const response = await page.goto(project.url, { waitUntil: 'networkidle', timeout: 60_000 });

      if (!response || !response.ok()) {
        throw new Error(`${project.url} responded with ${response?.status() ?? 'no response'}`);
      }

      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(1500);

      if (kind === 'desktop') {
        // Log what the page contains, so descriptions can be checked against the real site.
        const summary = await page.evaluate(() => ({
          title: document.title,
          lang: document.documentElement.lang,
          description: document.querySelector('meta[name="description"]')?.content ?? null,
          alternates: [...document.querySelectorAll('link[rel="alternate"][hreflang]')].map(
            (link) => link.hreflang,
          ),
          navigation: [...document.querySelectorAll('header a, header button')]
            .map((el) => (el.innerText || el.getAttribute('aria-label') || '').trim())
            .filter(Boolean),
          headings: [...document.querySelectorAll('h1, h2, h3')].map((h) => h.innerText.trim()),
        }));
        console.log(`\n${project.slug} page summary:\n${JSON.stringify(summary, null, 2)}`);
      }

      const screenshot = await page.screenshot({ type: 'png' });
      const outputDir = join(publicDir, dirname(preview.src));
      await mkdir(outputDir, { recursive: true });

      for (const width of preview.widths) {
        const file = join(publicDir, `${preview.src}-${width}.webp`);
        await sharp(screenshot).resize({ width }).webp({ quality: 82, effort: 6 }).toFile(file);
        console.log(`Saved ${file}`);
      }

      await context.close();
    }
  }
} finally {
  await browser.close();
}
