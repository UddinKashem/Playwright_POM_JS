import { test, expect } from '@playwright/test';
import HomePage from '../../pages/HomePage';
import InputsPage from '../../pages/InputsPage';


test.describe('Inputs Page Validation', () => {
    let homePage;
    let inputPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);

        await homePage.gotoHomePage();
        await homePage.navToInputsPage();
    })

    test('Validate Inputs Page', async ({ page }) => {
        inputPage = new InputsPage(page);

        await inputPage.validateInputsPage();
    })

    test('Validate Input Values', async ({ page }) => {
        inputPage = new InputsPage(page);

        await inputPage.validateInputFields();
        await inputPage.page.pause();
    })
})