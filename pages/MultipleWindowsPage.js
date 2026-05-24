import { page, expect } from '@playwright/test';

class MultipleWindowsPage{

    constructor(page){
        this.page = page;
        this.hd_Opeaning = page.getByRole('heading', { name: 'Opening a new window' });
        this.lnk_ClickHere = page.getByRole('link', { name: 'Click Here' });
    }

    async validateMupleWindowsPage(){
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/windows');
        await expect(this.hd_Opeaning).toBeVisible();
        await expect(this.lnk_ClickHere).toBeEnabled();
        const page1Promise = this.page.waitForEvent('popup');
        await this.lnk_ClickHere.click({timeout: 10000 });
        const page1 = await page1Promise;
        await expect(page1).toHaveURL('https://the-internet.herokuapp.com/windows/new');
        await expect(page1.getByRole('heading', { name: 'New Window' })).toBeVisible(); 
    }
}
export default MultipleWindowsPage;