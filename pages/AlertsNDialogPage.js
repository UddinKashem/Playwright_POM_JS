import { expect, page } from '@playwright/test';

class AlertsNDialogPage {

    constructor(page) {
        this.page = page;
        this.hdAlerts = page.getByRole('heading', { name: 'Alerts' });
        this.txtSeeAlert = page.getByText('Click Button to see alert');
        this.txtAlertWill = page.getByText('On button click, alert will');
        this.txtConfirmBox = page.getByText('On button click, confirm box');
        this.txtPromptBox = page.getByText('On button click, prompt box');
        this.btnAlert = page.locator('#alertButton');
        this.btnTimerAlert = page.locator('#timerAlertButton');
        this.btnConfirm = page.locator('#confirmButton');
        this.btnPrompt = page.locator('#promtButton');
        this.txtAlertMSG = page.getByText('You clicked a button');

    }

    async navigateToAlertPage() {
        await this.page.goto("https://demoqa.com/alerts");
        await this.page.waitForURL("https://demoqa.com/alerts");
    }

    async validateAlertsPage() {
        await expect(this.page).toHaveURL('https://demoqa.com/alerts');
        await expect(this.hdAlerts).toBeInViewport();
        await expect(this.btnAlert).toBeEnabled();
        await expect(this.btnConfirm).toBeEnabled();
        await expect(this.btnTimerAlert).toBeEnabled();
        await expect(this.btnPrompt).toBeEnabled();
        await expect(this.txtSeeAlert).toBeInViewport();
        await expect(this.txtAlertWill).toBeAttached();
        await expect(this.txtConfirmBox).toBeVisible();
    }

    async valdidateAlertAction() {
        await expect(this.page).toHaveURL('https://demoqa.com/alerts');
        await expect(this.txtSeeAlert).toBeInViewport();
        await expect(this.btnAlert).toBeEnabled();
        await this.page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            // Validate the Alert text message
            expect(dialog.message()).toBe('You clicked a button');
            expect(dialog.type()).toBe('alert');
            dialog.dismiss().catch(() => { });
        });
        await this.btnAlert.click();
    }

    async validateAlertTimer() {
        await expect(this.page).toHaveURL('https://demoqa.com/alerts');
        await expect(this.txtAlertWill).toBeInViewport();
        await expect(this.btnTimerAlert).toBeEnabled();
        await this.page.once('dialog', dialog => {
            console.log('Dialog Message: ${dialog.message()}');
            expect(dialog.message()).toBe('This alert appeared after 5 seconds');
            expect(dialog.type()).toBe('alert');
            dialog.dismiss().catch(() => { });
        });
        await this.btnTimerAlert.click({ timeOut: 5000 });
    }

    async validateAlertConfirm() {
        await expect(this.page).toHaveURL('https://demoqa.com/alerts');
        await expect(this.txtConfirmBox).toBeInViewport();
        await expect(this.btnConfirm).toBeEnabled();
        await this.page.once('dialog', dialog => {
            console.log('Dialog Message: ${dialog.message()}');
            expect(dialog.message()).toBe('Do you confirm action?');
            expect(dialog.type()).toBe('confirm');
            dialog.dismiss().catch(() => { });
        });
        await this.btnConfirm.click();
    }

    async validateAlertPrompt() {
        await expect(this.page).toHaveURL('https://demoqa.com/alerts');
        await expect(this.txtPromptBox).toBeInViewport();
        await expect(this.btnPrompt).toBeEnabled();
        await this.page.once('dialog', dialog => {
            console.log('Dialog Message: ${dialog.message()}');
            expect(dialog.message()).toBe('Please enter your name');
            expect(dialog.type()).toBe('prompt');
            dialog.dismiss().catch(() => { });
        });
        await this.btnPrompt.click();
    }

}
export default AlertsNDialogPage;