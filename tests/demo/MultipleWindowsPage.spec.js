import { test, expect } from '@playwright/test';
import HomePage from '../../pages/HomePage';
import MultipleWindowsPage  from '../../pages/MultipleWindowsPage';


test.describe('Multiple Windows Page Validation', () => {
    let homePage;
    let multipleWindowsPage;

    test.beforeEach(async({page}) => {
        homePage = new HomePage(page);

        await homePage.gotoHomePage();
        await homePage.navToMultipleWindowsPage();
    });

    test('Validate Multiple Windows', async({page}) => {
        multipleWindowsPage = new MultipleWindowsPage(page);

        await multipleWindowsPage.validateMupleWindowsPage();
        //await multipleWindowsPage.page.pause();
    });
});