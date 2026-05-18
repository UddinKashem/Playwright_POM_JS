import { expect, page } from "@playwright/test";

class Challenging_DOMPage {

    constructor(page) {
        this.page = page;
        this.hd_ChallengingDOM = page.getByRole('heading', { name: 'Challenging DOM' });
        this.txt_part = page.getByText('The hardest part in automated');
        this.lnk_qux = page.getByRole('link', { name: 'qux', exact: true });
        this.lnk_bar = page.getByRole('link', { name: 'bar' });
        this.colH_Lorem = page.getByRole('columnheader', { name: 'Lorem' });
        this.colH_Ipsum = page.getByRole('columnheader', { name: 'Ipsum' });
        this.colH_Dolor = page.getByRole('columnheader', { name: 'Dolor' });
        this.colH_Sit = page.getByRole('columnheader', { name: 'Sit' });
        this.colH_Amet = page.getByRole('columnheader', { name: 'Amet' });
        this.colH_Diceret = page.getByRole('columnheader', { name: 'Diceret' });
        this.colH_Action = page.locator("//th[text()='Action']");
        //page.getByRole('columnheader', { name: 'Action' });
        this.cell_Iuvaret0 = page.getByRole('cell', { name: 'Iuvaret0' });
        this.lnk_Edit = page.getByRole('link', { name: 'edit' });
        this.lnk_Delete = page.getByRole('link', { name: 'delete' });
    }

    async validateChallengingDOM() {
        await this.page.waitForURL("https://the-internet.herokuapp.com/challenging_dom");
        await expect(this.hd_ChallengingDOM).toBeInViewport();
        await expect(this.txt_part).toBeInViewport();
        await expect(this.page).toHaveTitle(/The Internet/);
        // await expect(this.lnk_qux).toBeEnabled();
        // await expect(this.lnk_bar).toBeEnabled();
        await expect(this.colH_Lorem).toBeVisible();
        await expect(this.colH_Ipsum).toBeVisible();
        await expect(this.colH_Dolor).toBeVisible();
        await expect(this.colH_Sit).toBeVisible();
        await expect(this.colH_Amet).toBeVisible();
        await expect(this.colH_Diceret).toBeVisible();
        await expect(this.colH_Action).toBeVisible();
        await expect(this.cell_Iuvaret0).toBeVisible();
        await expect(this.cell_Iuvaret0).toHaveCount[1];
    }

    async ValidateNavToEditURL() {
        await this.page.waitForURL("https://the-internet.herokuapp.com/challenging_dom");
        await expect(this.lnk_Edit.first()).toBeEnabled();
        await this.lnk_Edit.first().click();
        await this.page.waitForURL('https://the-internet.herokuapp.com/challenging_dom#edit');
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/challenging_dom#edit');
    }

    async validateNavToDeleteURL() {
        await this.page.waitForURL("https://the-internet.herokuapp.com/challenging_dom");
        await expect(this.lnk_Delete.first()).toBeEnabled();
        await this.lnk_Delete.first().click();
        await this.page.waitForURL('https://the-internet.herokuapp.com/challenging_dom#delete');
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/challenging_dom#delete');

    }
}
export default Challenging_DOMPage;