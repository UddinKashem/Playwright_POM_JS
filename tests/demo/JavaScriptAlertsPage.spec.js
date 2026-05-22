import { test, expect } from '@playwright/test';
import HomePage from '../../pages/HomePage';
import JavaScriptAlertsPage from '../../pages/JavaScriptAlertsPage';

test.describe('JavaScript Alerts Page Validation', () => {

    let homePage;
    let javaScriptAlertsPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);

        await homePage.gotoHomePage();
        await homePage.navToJavaScriptAlerts();

    });

    test('Validate JavaScript Alerts', async ({ page }) => {
        javaScriptAlertsPage = new JavaScriptAlertsPage(page);

        await javaScriptAlertsPage.validateJavaScriptAlerts();
    });

    test('Validate Alerts Action', async ({ page }) => {
        javaScriptAlertsPage = new JavaScriptAlertsPage(page);

        await javaScriptAlertsPage.valdidateAlertAction();
    });

    test('Validate JS Confirm Action', async ({ page }) => {
        javaScriptAlertsPage = new JavaScriptAlertsPage(page);

        await javaScriptAlertsPage.valdidateJSConfirmAction();
        //await javaScriptAlertsPage.page.pause();
    });

    test('Validate JS Prompt Action', async ({ page }) => {
        javaScriptAlertsPage = new JavaScriptAlertsPage(page);

        await javaScriptAlertsPage.valdidateJSPromptAction();
        //await javaScriptAlertsPage.page.pause();
    });

    test('Validate JS Prompt Dialog Text', async ({ page }) => {
        javaScriptAlertsPage = new JavaScriptAlertsPage(page);

        await javaScriptAlertsPage.valdidateJSPromptDialogText();
        //await javaScriptAlertsPage.page.pause();
    });


});