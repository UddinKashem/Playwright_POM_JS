const { test, expect } = require('@playwright/test');
const { HomePage } = require('../../pages/HomePage');
const { A_B_TestingPage } = require('../../pages/A_B_TestingPage');


test('Validate A/B Testing Page', async ({ page }) => {
    const homePage = new HomePage(page);
    const a_B_TestingPage = new (A_B_TestingPage);

    await homePage.gotoHomePage();

    await expect(page.getByText('Welcome')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Available Examples' })).toBeVisible();
    await expect(homePage.lnk_A_B_Testing).toBeEnabled();
    await homePage.lnk_A_B_Testing.click();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/abtest');
    //await expect(a_B_TestingPage.h3_A_B_Test).toBeVisible();
    await expect(page.getByText('A/B Test')).toBeVisible();
    await page.pause();

})
