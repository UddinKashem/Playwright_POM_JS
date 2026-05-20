import { expect, page } from '@playwright/test';

class InfiniteScrollPage {

    constructor(page) {
        this.page = page;
        this.hd_InfiniteScroll = page.getByRole('heading', { name: 'Infinite Scroll' });
        this.txt_Voluptatem = page.getByText('Voluptatem et aut reiciendis');
        this.txt_Aliquid = page.getByText('Aliquid vitae iusto quisquam');
        this.loc_Body = page.locator('body');
        this.loc_Div = page.locator('div');

    }

    async validateInfiniteScrollPage() {
        await expect(this.hd_InfiniteScroll).toBeVisible({ timeout: 15000 });
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/infinite_scroll');
        //await expect(this.txt_Voluptatem).toBeInViewport();
        // await expect(this.txt_Aliquid).toHaveText(/Aliquid vitae iusto quisquam/);
        await expect(this.loc_Body).toBeAttached();
        await expect(this.loc_Div).toBeDefined();
    }
}
export default InfiniteScrollPage;