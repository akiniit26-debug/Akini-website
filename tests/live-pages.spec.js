const { test, expect } = require('@playwright/test');
const pages = [
  '/', '/index-bg.html','/index-hr.html','/index-cs.html','/index-da.html','/index-nl.html',
  '/index-et.html','/index-fi.html','/index-fr.html','/index-de.html','/index-el.html',
  '/index-hu.html','/index-ga.html','/index-it.html','/index-lv.html','/index-lt.html',
  '/index-mt.html','/index-pl.html','/index-pt.html','/index-ro.html','/index-sk.html',
  '/index-sl.html','/index-es.html','/index-sv.html',
  '/guides.html','/guides-it.html',
  '/air-fryer-comparison-guide.html','/air-fryer-comparison-guide-it.html',
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
  '/manage-products.html',
  '/about.html','/contact.html','/privacy-policy.html','/privacy-policy-it.html',
  '/terms.html','/terms-it.html','/cookie-policy.html','/cookie-policy-it.html',
  '/affiliate-disclosure.html','/affiliate-disclosure-it.html'
];
pages.push(
  '/dog-harness-fit-guide-bg.html',
  '/dog-harness-fit-guide-hr.html',
  '/dog-harness-fit-guide-cs.html',
  '/dog-harness-fit-guide-da.html',
  '/dog-harness-fit-guide-nl.html',
  '/dog-harness-fit-guide-et.html',
  '/dog-harness-fit-guide-fi.html',
  '/dog-harness-fit-guide-fr.html',
  '/dog-harness-fit-guide-de.html',
  '/dog-harness-fit-guide-el.html',
  '/dog-harness-fit-guide-hu.html',
  '/dog-harness-fit-guide-ga.html',
  '/dog-harness-fit-guide-lv.html',
  '/dog-harness-fit-guide-lt.html',
  '/dog-harness-fit-guide-mt.html',
  '/dog-harness-fit-guide-pl.html',
  '/dog-harness-fit-guide-pt.html',
  '/dog-harness-fit-guide-ro.html',
  '/dog-harness-fit-guide-sk.html',
  '/dog-harness-fit-guide-sl.html',
  '/dog-harness-fit-guide-es.html',
  '/dog-harness-fit-guide-sv.html',
  '/cat-litter-box-guide-bg.html',
  '/cat-litter-box-guide-hr.html',
  '/cat-litter-box-guide-cs.html',
  '/cat-litter-box-guide-da.html',
  '/cat-litter-box-guide-nl.html',
  '/cat-litter-box-guide-et.html',
  '/cat-litter-box-guide-fi.html',
  '/cat-litter-box-guide-fr.html',
  '/cat-litter-box-guide-de.html',
  '/cat-litter-box-guide-el.html',
  '/cat-litter-box-guide-hu.html',
  '/cat-litter-box-guide-ga.html',
  '/cat-litter-box-guide-lv.html',
  '/cat-litter-box-guide-lt.html',
  '/cat-litter-box-guide-mt.html',
  '/cat-litter-box-guide-pl.html',
  '/cat-litter-box-guide-pt.html',
  '/cat-litter-box-guide-ro.html',
  '/cat-litter-box-guide-sk.html',
  '/cat-litter-box-guide-sl.html',
  '/cat-litter-box-guide-es.html',
  '/cat-litter-box-guide-sv.html',
  '/pet-carrier-travel-guide-bg.html',
  '/pet-carrier-travel-guide-hr.html',
  '/pet-carrier-travel-guide-cs.html',
  '/pet-carrier-travel-guide-da.html',
  '/pet-carrier-travel-guide-nl.html',
  '/pet-carrier-travel-guide-et.html',
  '/pet-carrier-travel-guide-fi.html',
  '/pet-carrier-travel-guide-fr.html',
  '/pet-carrier-travel-guide-de.html',
  '/pet-carrier-travel-guide-el.html',
  '/pet-carrier-travel-guide-hu.html',
  '/pet-carrier-travel-guide-ga.html',
  '/pet-carrier-travel-guide-lv.html',
  '/pet-carrier-travel-guide-lt.html',
  '/pet-carrier-travel-guide-mt.html',
  '/pet-carrier-travel-guide-pl.html',
  '/pet-carrier-travel-guide-pt.html',
  '/pet-carrier-travel-guide-ro.html',
  '/pet-carrier-travel-guide-sk.html',
  '/pet-carrier-travel-guide-sl.html',
  '/pet-carrier-travel-guide-es.html',
  '/pet-carrier-travel-guide-sv.html',
  '/pet-grooming-tools-guide-bg.html',
  '/pet-grooming-tools-guide-hr.html',
  '/pet-grooming-tools-guide-cs.html',
  '/pet-grooming-tools-guide-da.html',
  '/pet-grooming-tools-guide-nl.html',
  '/pet-grooming-tools-guide-et.html',
  '/pet-grooming-tools-guide-fi.html',
  '/pet-grooming-tools-guide-fr.html',
  '/pet-grooming-tools-guide-de.html',
  '/pet-grooming-tools-guide-el.html',
  '/pet-grooming-tools-guide-hu.html',
  '/pet-grooming-tools-guide-ga.html',
  '/pet-grooming-tools-guide-lv.html',
  '/pet-grooming-tools-guide-lt.html',
  '/pet-grooming-tools-guide-mt.html',
  '/pet-grooming-tools-guide-pl.html',
  '/pet-grooming-tools-guide-pt.html',
  '/pet-grooming-tools-guide-ro.html',
  '/pet-grooming-tools-guide-sk.html',
  '/pet-grooming-tools-guide-sl.html',
  '/pet-grooming-tools-guide-es.html',
  '/pet-grooming-tools-guide-sv.html',
  '/small-space-storage-guide-bg.html',
  '/small-space-storage-guide-hr.html',
  '/small-space-storage-guide-cs.html',
  '/small-space-storage-guide-da.html',
  '/small-space-storage-guide-nl.html',
  '/small-space-storage-guide-et.html',
  '/small-space-storage-guide-fi.html',
  '/small-space-storage-guide-fr.html',
  '/small-space-storage-guide-de.html',
  '/small-space-storage-guide-el.html',
  '/small-space-storage-guide-hu.html',
  '/small-space-storage-guide-ga.html',
  '/small-space-storage-guide-lv.html',
  '/small-space-storage-guide-lt.html',
  '/small-space-storage-guide-mt.html',
  '/small-space-storage-guide-pl.html',
  '/small-space-storage-guide-pt.html',
  '/small-space-storage-guide-ro.html',
  '/small-space-storage-guide-sk.html',
  '/small-space-storage-guide-sl.html',
  '/small-space-storage-guide-es.html',
  '/small-space-storage-guide-sv.html',
  '/kitchen-essentials-guide-bg.html',
  '/kitchen-essentials-guide-hr.html',
  '/kitchen-essentials-guide-cs.html',
  '/kitchen-essentials-guide-da.html',
  '/kitchen-essentials-guide-nl.html',
  '/kitchen-essentials-guide-et.html',
  '/kitchen-essentials-guide-fi.html',
  '/kitchen-essentials-guide-fr.html',
  '/kitchen-essentials-guide-de.html',
  '/kitchen-essentials-guide-el.html',
  '/kitchen-essentials-guide-hu.html',
  '/kitchen-essentials-guide-ga.html',
  '/kitchen-essentials-guide-lv.html',
  '/kitchen-essentials-guide-lt.html',
  '/kitchen-essentials-guide-mt.html',
  '/kitchen-essentials-guide-pl.html',
  '/kitchen-essentials-guide-pt.html',
  '/kitchen-essentials-guide-ro.html',
  '/kitchen-essentials-guide-sk.html',
  '/kitchen-essentials-guide-sl.html',
  '/kitchen-essentials-guide-es.html',
  '/kitchen-essentials-guide-sv.html',
  '/home-cleaning-tools-guide-bg.html',
  '/home-cleaning-tools-guide-hr.html',
  '/home-cleaning-tools-guide-cs.html',
  '/home-cleaning-tools-guide-da.html',
  '/home-cleaning-tools-guide-nl.html',
  '/home-cleaning-tools-guide-et.html',
  '/home-cleaning-tools-guide-fi.html',
  '/home-cleaning-tools-guide-fr.html',
  '/home-cleaning-tools-guide-de.html',
  '/home-cleaning-tools-guide-el.html',
  '/home-cleaning-tools-guide-hu.html',
  '/home-cleaning-tools-guide-ga.html',
  '/home-cleaning-tools-guide-lv.html',
  '/home-cleaning-tools-guide-lt.html',
  '/home-cleaning-tools-guide-mt.html',
  '/home-cleaning-tools-guide-pl.html',
  '/home-cleaning-tools-guide-pt.html',
  '/home-cleaning-tools-guide-ro.html',
  '/home-cleaning-tools-guide-sk.html',
  '/home-cleaning-tools-guide-sl.html',
  '/home-cleaning-tools-guide-es.html',
  '/home-cleaning-tools-guide-sv.html',
  '/reusable-everyday-items-guide-bg.html',
  '/reusable-everyday-items-guide-hr.html',
  '/reusable-everyday-items-guide-cs.html',
  '/reusable-everyday-items-guide-da.html',
  '/reusable-everyday-items-guide-nl.html',
  '/reusable-everyday-items-guide-et.html',
  '/reusable-everyday-items-guide-fi.html',
  '/reusable-everyday-items-guide-fr.html',
  '/reusable-everyday-items-guide-de.html',
  '/reusable-everyday-items-guide-el.html',
  '/reusable-everyday-items-guide-hu.html',
  '/reusable-everyday-items-guide-ga.html',
  '/reusable-everyday-items-guide-lv.html',
  '/reusable-everyday-items-guide-lt.html',
  '/reusable-everyday-items-guide-mt.html',
  '/reusable-everyday-items-guide-pl.html',
  '/reusable-everyday-items-guide-pt.html',
  '/reusable-everyday-items-guide-ro.html',
  '/reusable-everyday-items-guide-sk.html',
  '/reusable-everyday-items-guide-sl.html',
  '/reusable-everyday-items-guide-es.html',
  '/reusable-everyday-items-guide-sv.html',
  '/home-office-setup-guide-bg.html',
  '/home-office-setup-guide-hr.html',
  '/home-office-setup-guide-cs.html',
  '/home-office-setup-guide-da.html',
  '/home-office-setup-guide-nl.html',
  '/home-office-setup-guide-et.html',
  '/home-office-setup-guide-fi.html',
  '/home-office-setup-guide-fr.html',
  '/home-office-setup-guide-de.html',
  '/home-office-setup-guide-el.html',
  '/home-office-setup-guide-hu.html',
  '/home-office-setup-guide-ga.html',
  '/home-office-setup-guide-lv.html',
  '/home-office-setup-guide-lt.html',
  '/home-office-setup-guide-mt.html',
  '/home-office-setup-guide-pl.html',
  '/home-office-setup-guide-pt.html',
  '/home-office-setup-guide-ro.html',
  '/home-office-setup-guide-sk.html',
  '/home-office-setup-guide-sl.html',
  '/home-office-setup-guide-es.html',
  '/home-office-setup-guide-sv.html',
  '/travel-organiser-guide-bg.html',
  '/travel-organiser-guide-hr.html',
  '/travel-organiser-guide-cs.html',
  '/travel-organiser-guide-da.html',
  '/travel-organiser-guide-nl.html',
  '/travel-organiser-guide-et.html',
  '/travel-organiser-guide-fi.html',
  '/travel-organiser-guide-fr.html',
  '/travel-organiser-guide-de.html',
  '/travel-organiser-guide-el.html',
  '/travel-organiser-guide-hu.html',
  '/travel-organiser-guide-ga.html',
  '/travel-organiser-guide-lv.html',
  '/travel-organiser-guide-lt.html',
  '/travel-organiser-guide-mt.html',
  '/travel-organiser-guide-pl.html',
  '/travel-organiser-guide-pt.html',
  '/travel-organiser-guide-ro.html',
  '/travel-organiser-guide-sk.html',
  '/travel-organiser-guide-sl.html',
  '/travel-organiser-guide-es.html',
  '/travel-organiser-guide-sv.html',
);

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


test.describe('homepage product interactions', () => {
  for (const locale of [{ path: '/', all: 'All' }, { path: '/index-it.html', all: 'Tutti' }]) {
    test(`product filters, search, cart and wishlist work on ${locale.path}`, async ({ page }) => {
      await page.goto(locale.path, { waitUntil: 'domcontentloaded' });
      // The Italian page hydrates product cards asynchronously from Supabase; wait
      // for that replacement before asserting filters to avoid testing stale fallback cards.
      if (locale.path === '/index-it.html') {
        await expect(page.locator('#productGrid')).toHaveAttribute('data-catalogue-loaded', 'true', { timeout: 20000 });
      }
      const cards = page.locator('#productGrid .product');
      await expect(cards.first()).toBeVisible();
      await expect(cards).not.toHaveCount(0);
      await expect(cards.first()).toBeVisible();

      await page.locator('[data-filter="Cat"]').click();
      await expect(page.locator('#productGrid .product:visible')).toHaveCount(2);
      await expect(page.locator('#productGrid .product:visible h3')).toContainText(['Catit', 'PETKIT']);

      await page.locator(`[data-filter="${locale.all}"]`).click();
      await page.locator('#searchInput').fill('catit');
      await expect(page.locator('#productGrid .product:visible')).toHaveCount(1);
      await expect(page.locator('#productGrid .product:visible h3')).toContainText('Catit');

      await page.locator('#searchInput').fill('');
      const furminatorCard = page.locator('#productGrid .product').filter({ hasText: 'FURminator' }).first();
      await expect(furminatorCard).toBeVisible();
      await furminatorCard.locator('.add-cart').click();
      await page.locator('.header-actions button').nth(1).click();
      await expect(page.locator('#cartDialog')).toBeVisible();
      await expect(page.locator('#cartItems')).toContainText('FURminator');

      await page.locator('#cartDialog button[onclick="closeCart()"]:visible').click();
      await furminatorCard.locator('.save').click();
      await page.locator('.header-actions button').first().click();
      await expect(page.locator('#wishlistDialog')).toBeVisible();
      await expect(page.locator('#wishlistItems')).toContainText('FURminator');
      await expect(page.locator('#wishlistItems img')).toHaveCount(1);
    });
  }
  test('Black Friday controls are hidden until verified offers exist', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    const blackFridayControls = page.locator('[data-filter="BlackFriday"]');
    await expect(blackFridayControls).toHaveCount(2);
    await expect(blackFridayControls.nth(0)).toBeHidden();
    await expect(blackFridayControls.nth(1)).toBeHidden();
  });
});

test('admin product form exposes price, rating and review count fields', async ({ page }) => {
  await page.goto('/manage-products.html', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('#authBox')).toBeVisible();
  await expect(page.locator('#price')).toHaveAttribute('maxlength', '30');
  await expect(page.locator('#rating')).toHaveAttribute('max', '5');
  await expect(page.locator('#review_count')).toHaveAttribute('type', 'number');
});
