import { expect, page } from '@playwright/test';

class KeyPressesPage {

    constructor(page) {
        this.page = page;
        this.hd_KeyPresses = page.getByRole('heading', { name: 'Key Presses' });
        this.txt_Key_to = page.getByText('Key presses are often used to');
        this.loc_Target = page.locator('#target');
        this.txt_Tab = page.getByText('You entered: TAB');
        this.txt_ENTER = page.getByText('You entered: ENTER');
        this.loc_Content = page.locator('#content');
        this.loc_footer = page.locator('#page-footer');
        this.txt_SHIFT = page.getByText('You entered: SHIFT');
        this.txt_CONTROL = page.getByText('You entered: CONTROL');
        this.txt_ALT = page.getByText('You entered: ALT');
        this.txt_UP = page.getByText('You entered: UP');
        this.txt_DOWN = page.getByText('You entered: DOWN');
        this.txt_RIGHT = page.getByText('You entered: RIGHT');
        this.txt_LEFT = page.getByText('You entered: LEFT');
        this.txt_WIN = page.getByText('You entered: WIN');
    }

    async ValidateKeyPresses() {
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/key_presses');
        await expect(this.hd_KeyPresses).toBeInViewport();
        await expect(this.txt_Key_to).toBeVisible();
        await expect(this.loc_Target).toBeEditable();
    }

    async ValidateTabKey() {
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/key_presses');
        await expect(this.loc_Target).toBeEditable();
        await this.loc_Target.click({ timeout: 10000 });
        await this.loc_Target.press('Tab');
        await expect(this.txt_Tab).toBeVisible({ timeout: 7000 });
    }

    async ValidateENTERKey() {
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/key_presses');
        await expect(this.loc_Target).toBeEditable();
        await this.loc_Target.click({ timeout: 10000 });
        await this.loc_Target.press('Enter');
        //await expect(this.txt_ENTER).toBeAttached({ timeout: 7000 });
        await expect(this.loc_Content).toBeAttached({ timeout: 7000 });
        await expect(this.loc_footer).toBeAttached();
    }

    async ValidateSHIFTKey() {
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/key_presses');
        await expect(this.loc_Target).toBeEditable();
        await this.loc_Target.click({ timeout: 10000 });
        await this.loc_Target.press('Shift');
        await expect(this.txt_SHIFT).toBeVisible({ timeout: 7000 });
    }

    async ValidateCONTROLKey() {
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/key_presses');
        await expect(this.loc_Target).toBeEditable();
        await this.loc_Target.click({ timeout: 10000 });
        await this.loc_Target.press('Control');
        await expect(this.txt_CONTROL).toBeVisible({ timeout: 7000 });
    }
    async ValidateALTKey() {
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/key_presses');
        await expect(this.loc_Target).toBeEditable();
        await this.loc_Target.click({ timeout: 10000 });
        await this.loc_Target.press('Alt');
        await expect(this.txt_ALT).toBeVisible({ timeout: 7000 });
    }

    async ValidateUPArrowKey() {
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/key_presses');
        await expect(this.loc_Target).toBeEditable();
        await this.loc_Target.click({ timeout: 10000 });
        await this.loc_Target.press('ArrowUp');
        await expect(this.txt_UP).toBeVisible({ timeout: 7000 });
    }

    async ValidateDOWNArrowKey() {
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/key_presses');
        await expect(this.loc_Target).toBeEditable();
        await this.loc_Target.click({ timeout: 10000 });
        await this.loc_Target.press('ArrowDown');
        await expect(this.txt_DOWN).toBeVisible({ timeout: 7000 });
    }

    async ValidateRIGHTArrowKey() {
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/key_presses');
        await expect(this.loc_Target).toBeEditable();
        await this.loc_Target.click({ timeout: 10000 });
        await this.loc_Target.press('ArrowRight');
        await expect(this.txt_RIGHT).toBeVisible({ timeout: 7000 });
    }

    async ValidateLEFTArrowKey() {
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/key_presses');
        await expect(this.loc_Target).toBeEditable();
        await this.loc_Target.click({ timeout: 10000 });
        await this.loc_Target.press('ArrowLeft');
        await expect(this.txt_LEFT).toBeVisible({ timeout: 7000 });
    }

    async ValidateWINDOWKey() {
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/key_presses');
        await expect(this.loc_Target).toBeEditable();
        await this.loc_Target.click({ timeout: 10000 });
        await this.loc_Target.press('WIN');
        await expect(this.txt_WIN).toBeVisible({ timeout: 7000 });
    }

}
export default KeyPressesPage;