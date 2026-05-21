import { expect, page } from '@playwright/test';

class JQueryUI_Menu {

    constructor(page) {
        this.page = page;
        this.hd_JQueryUI = page.getByRole('heading', { name: 'JQueryUI - Menu' });
        this.lnk_JQueryUI = page.getByRole('link', { name: 'JQuery UI Menus' });
        this.txt_Aspect = page.getByText('Another \'fun\' aspect is that');
        this.lnk_Disabled = page.getByRole('link', { name: 'Disabled' });
        this.lnk_Enable = page.getByRole('link', { name: 'Enabled' });
        this.lnk_Downloads = page.getByRole('link', { name: 'Downloads' });
        this.lnk_BackToJQuery = page.getByRole('link', { name: 'Back to JQuery UI' });
        this.lnk_PDF = page.getByRole('link', { name: 'PDF' });
        this.lnk_Excel = page.getByRole('link', { name: 'Excel' });
        this.lnk_CSV = page.getByRole('link', { name: 'CSV' });
        this.hd_JQ_UI = page.getByRole('heading', { name: 'JQuery UI' });
        this.lnk_JQ_UI = page.getByRole('link', { name: 'JQuery UI' });
        this.txt_JQ_UI = page.getByText('JQuery UI is many things, but');
        this.lnk_Menu = page.getByRole('link', { name: 'Menu' });

    }

    async valudateJQueryUI_Menu() {
        await expect(this.hd_JQueryUI).toBeVisible({ timeout: 15000 });
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/jqueryui/menu');
        await expect(this.hd_JQueryUI).toBeInViewport();
        await expect(this.lnk_JQueryUI).toBeEnabled();
        await expect(this.txt_Aspect).toBeVisible();
        await expect(this.lnk_Disabled).toBeDisabled();
        await expect(this.lnk_Enable).toBeVisible();
        await expect(this.lnk_Enable).toBeEnabled();

    }

    async validateEnabledMenus() {
        await expect(this.hd_JQueryUI).toBeVisible({ timeout: 15000 });
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/jqueryui/menu');
        await expect(this.lnk_JQueryUI).toBeEnabled();
        await this.lnk_Enable.hover();
        await expect(this.lnk_Downloads).toBeVisible({ timeout: 15000 });
        await expect(this.lnk_BackToJQuery).toBeVisible();
        await this.lnk_Downloads.hover();
        await expect(this.lnk_PDF).toBeVisible({ timeout: 15000 });
        await expect(this.lnk_CSV).toBeEnabled();
        await expect(this.lnk_Excel).toBeAttached();
    }

    async validateBackToJQUI() {
        await expect(this.hd_JQueryUI).toBeVisible({ timeout: 15000 });
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/jqueryui/menu');
        await expect(this.lnk_JQueryUI).toBeEnabled();
        await this.lnk_Enable.hover();
        await expect(this.lnk_Downloads).toBeEnabled();
        await expect(this.lnk_BackToJQuery).toBeVisible();
        await this.lnk_BackToJQuery.click();
        await this.page.waitForURL('https://the-internet.herokuapp.com/jqueryui');
        await expect(this.hd_JQ_UI).toBeVisible();
        await expect(this.lnk_JQ_UI).toBeEnabled();
        await expect(this.txt_JQ_UI).toBeInViewport();
        await expect(this.lnk_Menu).not.toBeDisabled();
    }
}
export default JQueryUI_Menu;