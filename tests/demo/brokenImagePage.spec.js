import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/home';
import BrokenImagePage from '../../pages/brokenImagePage';

test('Validate Broken Image Page', async ({ page }) => {
    const homePage = new HomePage(page);
    const brokenImagePage = new BrokenImagePage(page);

    await homePage.gotoHomePage();
    await page.waitForURL('https://the-internet.herokuapp.com/');
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/');
    await expect(page.getByText('Welcome')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Available Examples' })).toBeVisible();
    await expect(homePage.lnk_Broken_Images).toBeEnabled();
    await homePage.lnk_Broken_Images.click();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/broken_images');
    await expect(page).toHaveTitle('The Internet');
    await expect(brokenImagePage.hd_BrokenImages).toBeVisible();
    await expect(brokenImagePage.img_BrokenImages.nth(1)).toBeInViewport();
    await expect(brokenImagePage.img_BrokenImages.nth(2)).toBeEnabled();
    await expect(brokenImagePage.img_BrokenImages.nth(3)).toBeVisible();

});