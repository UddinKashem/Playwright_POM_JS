import {test, expect} from '@playwright/test'


test.only('Test the sample test', async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/");
   
    await expect(page.getByRole('heading', { name: 'Welcome to the-internet' })).toBeVisible();
    await expect(page.getByText('Welcome')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Available Examples' })).toBeVisible();

    await expect(page.getByRole('link',{ name: 'A/B Testing'})).toBeEnabled();
    //await expect(page.locator('ul > li')).toContainText(['A/B Testing', 'Add/Remove Elements']);
    await page.getByRole('link', { name: 'A/B Testing' }).click();
    await expect(page.getByText('A/B Test')).toBeVisible()
    //await expect(page.getByRole('heading', { name: 'A/B Test Variation 1' })).toBeVisible();


   await page.goto("https://the-internet.herokuapp.com/");

   await expect(page.getByRole('link', { name: 'Add/Remove Elements'})).toBeInViewport();
   await expect(page.getByText('Add/Remove Elements')).toHaveCount(1);
   await page.getByText('Add/Remove Elements').click();

   await expect(page.getByRole('heading', { name: 'Add/Remove Elements'})).toHaveText('Add/Remove Elements');
   await expect(page.getByRole('button', { name: 'Add Element'})).toBeEnabled();
   await page.getByRole('button', { name: 'Add Element'}).click();
   await expect(page.getByRole('button', { name: 'Delete' })).toBeVisible();
   await page.getByRole('button', { name: 'Delete' }).click();
   await expect(page.getByRole('button', { name: 'Delete' })).toBeHidden();
   //getByRole('button', { name: 'Delete' })
   //getByRole('button', { name: 'Delete' }).first()
   //getByRole('link', { name: 'Basic Auth' })
    await page.pause();
});

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  await page.pause();
});