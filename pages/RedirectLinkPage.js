import { page, expect } from '@playwright/test';

class RedirectLinkPage {
    constructor(page) {
        this.page = page;
        this.hd_Redirection = page.getByRole('heading', { name: 'Redirection' });
        this.txt_This_Separate = page.getByText('This is separate from');
        this.lnk_Here = page.getByRole('link', { name: 'here' });
        this.hd_StatusCodes = page.getByRole('heading', { name: 'Status Codes' });
        this.txt_HTTP_Status = page.getByText('HTTP status codes are a');
        this.lst_StatusCode = page.getByRole('listitem');
        this.lnk_StatusCode200 = page.getByRole('link', { name: '200' });
        this.txt_HTTP200 = page.getByText('This page returned a 200');
        this.lnk_StatusCode301 = page.getByRole('link', { name: '301' });
        this.txt_HTTP301 = page.getByText('This page returned a 301')
        this.lnk_StatusCode404 = page.getByRole('link', { name: '404' });
        this.txt_HTTP404 = page.getByText('This page returned a 404')
        this.lnk_StatusCode500 = page.getByRole('link', { name: '500' });
        this.txt_HTTP500 = page.getByText('This page returned a 500')
    }

    async validateRedirectLink() {
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/redirector');
        await expect(this.hd_Redirection).toBeVisible();
        await expect(this.txt_This_Separate).toBeInViewport();
        await expect(this.lnk_Here).toBeEnabled();
        await this.lnk_Here.click({ timeout: 10000 });
        await this.page.waitForURL('https://the-internet.herokuapp.com/status_codes');
        await expect(this.hd_StatusCodes).toBeAttached();
        await expect(this.txt_HTTP_Status).toBeVisible();
        await expect(this.lst_StatusCode).toHaveCount(4);
        await expect(this.lst_StatusCode).toHaveText(['200', '301', '404', '500']);
    }

    async validate_StatusCode200() {
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/redirector');
        await expect(this.hd_Redirection).toBeVisible();
        await expect(this.txt_This_Separate).toBeInViewport();
        await expect(this.lnk_Here).toBeEnabled();
        await this.lnk_Here.click({ timeout: 10000 });
        await this.page.waitForURL('https://the-internet.herokuapp.com/status_codes');
        await this.lnk_StatusCode200.click({ timeout: 10000 });
        await this.page.waitForURL('https://the-internet.herokuapp.com/status_codes/200');
        await expect(this.hd_StatusCodes).toBeVisible();
        await expect(this.lnk_Here).toBeEnabled();
        await expect(this.txt_HTTP200).toBeInViewport();
    }

    async validate_StatusCode301() {
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/redirector');
        await expect(this.hd_Redirection).toBeVisible();
        await expect(this.txt_This_Separate).toBeInViewport();
        await expect(this.lnk_Here).toBeEnabled();
        await this.lnk_Here.click({ timeout: 10000 });
        await this.page.waitForURL('https://the-internet.herokuapp.com/status_codes');
        await this.lnk_StatusCode301.click({ timeout: 10000 });
        await this.page.waitForURL('https://the-internet.herokuapp.com/status_codes/301');
        await expect(this.hd_StatusCodes).toBeVisible();
        await expect(this.lnk_Here).toBeEnabled();
        await expect(this.txt_HTTP301).toBeInViewport();
    }

    async validate_StatusCode404() {
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/redirector');
        await expect(this.hd_Redirection).toBeVisible();
        await expect(this.txt_This_Separate).toBeInViewport();
        await expect(this.lnk_Here).toBeEnabled();
        await this.lnk_Here.click({ timeout: 10000 });
        await this.page.waitForURL('https://the-internet.herokuapp.com/status_codes');
        await this.lnk_StatusCode404.click({ timeout: 10000 });
        await this.page.waitForURL('https://the-internet.herokuapp.com/status_codes/404');
        await expect(this.hd_StatusCodes).toBeVisible();
        await expect(this.lnk_Here).toBeEnabled();
        await expect(this.txt_HTTP404).toBeInViewport();
    }

    async validate_StatusCode500() {
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/redirector');
        await expect(this.hd_Redirection).toBeVisible();
        await expect(this.txt_This_Separate).toBeInViewport();
        await expect(this.lnk_Here).toBeEnabled();
        await this.lnk_Here.click({ timeout: 10000 });
        await this.page.waitForURL('https://the-internet.herokuapp.com/status_codes');
        await this.lnk_StatusCode500.click({ timeout: 10000 });
        await this.page.waitForURL('https://the-internet.herokuapp.com/status_codes/500');
        await expect(this.hd_StatusCodes).toBeVisible();
        await expect(this.lnk_Here).toBeEnabled();
        await expect(this.txt_HTTP500).toBeInViewport();
    }    
}
export default RedirectLinkPage;

/*
test('test', async ({ page }) => {
  await page.getByRole('link', { name: '500' }).click();
  await page.getByText('This page returned a 500').click();
});
*/