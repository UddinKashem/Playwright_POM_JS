import { expect, page } from '@playwright/test';

class JavaScriptAlertsPage {

    constructor(page) {
        this.page = page;
        this.hd_JS_ALerts = page.getByRole('heading', { name: 'JavaScript Alerts' });
        this.txt_Examples = page.getByText('Here are some examples of');
        this.btn_Alert = page.getByRole('button', { name: 'Click for JS Alert' });
        this.btn_Confirm = page.getByRole('button', { name: 'Click for JS Confirm' });
        this.btn_Prompt = page.getByRole('button', { name: 'Click for JS Prompt' });
        this.hd_Result = page.getByRole('heading', { name: 'Result:' });
        this.txt_Successful = page.getByText('You successfully clicked an');
        this.txt_Cancel = page.getByText('You clicked: Cancel');
        this.txt_Null = page.getByText('You entered: null');
    }

    async validateJavaScriptAlerts() {
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/javascript_alerts');
        await expect(this.hd_JS_ALerts).toBeInViewport();
        await expect(this.btn_Alert).toBeEnabled();
        await expect(this.btn_Confirm).toBeEnabled();
        await expect(this.btn_Prompt).toBeEnabled();
        await expect(this.hd_Result).toBeVisible();
    }

    async valdidateAlertAction() {
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/javascript_alerts');
        await expect(this.hd_JS_ALerts).toBeInViewport();
        await expect(this.btn_Alert).toBeEnabled();
        await this.page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss().catch(() => { });
        });
        await this.btn_Alert.click();
        await expect(this.txt_Successful).toBeVisible();

    }

    async valdidateJSConfirmAction() {
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/javascript_alerts');
        await expect(this.hd_JS_ALerts).toBeInViewport();
        await expect(this.btn_Confirm).toBeEnabled();
        await this.btn_Confirm.click();
        await this.page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss().catch(() => { });
        });
        await expect(this.txt_Cancel).toBeVisible();

    }

    async valdidateJSPromptAction() {
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/javascript_alerts');
        await expect(this.hd_JS_ALerts).toBeInViewport();
        await expect(this.btn_Prompt).toBeEnabled();
        await this.btn_Prompt.click();
        await this.page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            // Validate the text message
            expect(dialog.message()).toBe('I am a JS prompt');
            expect(dialog.type()).toBe('confirm');

            dialog.dismiss().catch(() => { });
        });
        await expect(this.txt_Null).toBeVisible();

    }

    async valdidateJSPromptDialogText() {
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/javascript_alerts');
        await expect(this.hd_JS_ALerts).toBeInViewport();
        await expect(this.btn_Prompt).toBeEnabled();

        // 1. Setup the listener BEFORE the trigger
        await this.page.on('dialog', async dialog => {
            // Validate the text message
            await expect(dialog.message()).toBe('I am a JS prompt');

            // Validate the type (alert, confirm, prompt)
            await expect(dialog.type()).toBe('prompt');

            // 2. You MUST accept or dismiss to unblock the page
            await dialog.dismiss();
        });
        await this.btn_Prompt.click();
        await expect(this.txt_Null).toBeVisible();

    }


}
export default JavaScriptAlertsPage;