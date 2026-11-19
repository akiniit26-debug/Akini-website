const { test, expect } = require('@playwright/test');
const pages = [
  '/', '/index-bg.html','/index-hr.html','/index-cs.html','/index-da.html','/index-nl.html',
  '/index-et.html','/index-fi.html','/index-fr.html','/index-de.html','/index-el.html',
  '/index-hu.html','/index-ga.html','/index-it.html','/index-lv.html','/index-lt.html',
  '/index-mt.html','/index-pl.html','/index-pt.html','/index-ro.html','/index-sk.html',
  '/index-sl.html','/index-es.html','/index-sv.html',
  '/guides.html','/guides-it.html',
  '/dog-harness-fit-guide.html','/dog-harness-fit-guide-it.html',
  '/cat-litter-box-guide.html','/cat-litter-box-guide-it.html',
  '/pet-carrier-travel-guide.html','/pet-carrier-travel-guide-it.html',
  '/pet-grooming-tools-guide.html','/pet-grooming-tools-guide-it.html',
  '/small-space-storage-guide.html','/small-space-storage-guide-it.html',
  '/kitchen-essentials-guide.html','/kitchen-essentials-guide-it.html',
  '/home-cleaning-tools-guide.html','/home-cleaning-tools-guide-it.html',
  '/reusable-everyday-items-guide.html','/reusable-everyday-items-guide-it.html',
  '/home-office-setup-guide.html','/home-office-setup-guide-it.html',
  '/travel-organiser-guide.html','/travel-organiser-guide-it.html',
  '/about.html','/contact.html','/privacy-policy.html','/privacy-policy-it.html',
  '/terms.html','/terms-it.html','/cookie-policy.html','/cookie-policy-it.html',
  '/affiliate-disclosure.html','/affiliate-disclosure-it.html'
];
for (const path of pages) {
  test(`live page renders without horizontal overflow: ${path}`, async ({ page }) => {
    const response = await page.goto(path, { waitUntil: 'domcontentloaded' });
    expect(response, `No response for ${path}`).not.toBeNull();
    expect(response.status(), `HTTP status for ${path}`).toBeLessThan(400);
    await expect(page.locator('body')).toBeVisible();
    const title = await page.title();
    expect(title.trim().length, `Missing title on ${path}`).toBeGreaterThan(3);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 2);
    expect(overflow, `Horizontal overflow on ${path}`).toBe(false);
    await page.screenshot({ path: `test-results/screenshots/${path.replace(/[^a-z0-9]/gi, '_') || 'home'}.png`, fullPage: true });
  });
}
