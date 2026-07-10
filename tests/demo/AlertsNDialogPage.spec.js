import { test, expect } from '@playwright/test';
import AlertsNDialogPage from '../../pages/AlertsNDialogPage';

test.describe('Validate Alert and Dialog Pages', () => {

    let alertsNDialogPage;

    test.beforeEach(async ({ page }) => {

        alertsNDialogPage = new AlertsNDialogPage(page);

        await alertsNDialogPage.navigateToAlertPage();

    });

    test('Alerts Page Validation', async ({ page }) => {

        alertsNDialogPage = new AlertsNDialogPage(page);

        await alertsNDialogPage.validateAlertsPage();

    });

    test('Validate Alert Action', async ({ page }) => {

        alertsNDialogPage = new AlertsNDialogPage(page);

        await alertsNDialogPage.valdidateAlertAction();
    });

    test('Validate Alert Timer Action', async ({ page }) => {

        alertsNDialogPage = new AlertsNDialogPage(page);

        await alertsNDialogPage.validateAlertTimer();

    });

    test('Validate Alert Confirm Action', async ({ page }) => {

        alertsNDialogPage = new AlertsNDialogPage(page);

        await alertsNDialogPage.validateAlertConfirm();

    });

    test('Validate Alert Prompt Action', async ({ page }) => {

        alertsNDialogPage = new AlertsNDialogPage(page);

        await alertsNDialogPage.validateAlertPrompt();

    });

});
