import { test, expect } from '@playwright/test';
import HomePage from '../../pages/HomePage';
import HoversPage from '../../pages/HoversPage';


test.describe('Hovers Page Validation', () => {
    let homePage;
    let hoversPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);

        await homePage.gotoHomePage();
        await homePage.navToHoversPage();

    })

    test('Validate Hovers Page', async ({ page }) => {
        hoversPage = new HoversPage(page);

        await hoversPage.validateHoversPage();
    })

    test('Validate Hovers User1', async ({ page }) => {
        hoversPage = new HoversPage(page);

        await hoversPage.validateHoversUser1();
    })

    test('Validate Hovers User2', async ({ page }) => {
        hoversPage = new HoversPage(page);

        await hoversPage.validateHoversUser2();
    })

    test('Validate Hovers User3', async ({ page }) => {
        hoversPage = new HoversPage(page);

        await hoversPage.validateHoversUser3();
        //await hoversPage.page.pause();
    })
})