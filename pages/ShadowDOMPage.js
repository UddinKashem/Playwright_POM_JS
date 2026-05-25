import { page, expect } from '@playwright/test';

class ShadowDOMPage{
    constructor(page){
        this.page = page;
        this.hd_Simpletemplate = page.getByRole('heading', { name: 'Simple template' });
        this.loc_Paragraph = page.locator('my-paragraph').filter({ hasText: 'Let\'s have some different text! My default text' }).getByRole('paragraph');
        this.txt_different = page.getByRole('list').getByText('Let\'s have some different');
        this.img_GitHub = page.getByRole('img', { name: 'Fork me on GitHub' });
    }

    async validateShadowDOM(){
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/shadowdom');
        await expect(this.hd_Simpletemplate).toBeVisible();
        await expect(this.loc_Paragraph).toHaveText(/My default text/);
        await expect(this.txt_different).toBeAttached();
        await expect(this.img_GitHub).toBeEnabled();
    }

}
export default ShadowDOMPage;