import { test, expect } from '@playwright/test';
import HomePage from '../../pages/HomePage';
import JQueryUI_Menu from '../../pages/JQueryUI_Menu';


test.describe('JQueryUI - Menu Page Validation', () => {
    let homePage;
    let jQueryUI_MenuPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);

        await homePage.gotoHomePage();
        await homePage.navToJQueryUI_Menu();
    })

    test('Validate JQueryUI - Menu Page', async ({ page }) => {
        jQueryUI_MenuPage = new JQueryUI_Menu(page);

        await jQueryUI_MenuPage.valudateJQueryUI_Menu();
    })

    test('Validate Enabled Menus', async ({ page }) => {
        jQueryUI_MenuPage = new JQueryUI_Menu(page);

        await jQueryUI_MenuPage.validateEnabledMenus();
        //await jQueryUI_MenuPage.page.pause();
    })

    test('Validate Back to JQuery UI', async ({ page }) => {
        jQueryUI_MenuPage = new JQueryUI_Menu(page);

        await jQueryUI_MenuPage.validateBackToJQUI();

        //await jQueryUI_MenuPage.page.pause();
    })

})