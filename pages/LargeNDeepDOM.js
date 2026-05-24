import { page, expect } from '@playwright/test';

class LargeNDeepDOM {

    constructor(page) {
        this.page = page;
        this.hd_LargeNDeepDOM = page.getByRole('heading', { name: 'Large & Deep DOM' });
        this.txt_Large = page.getByText(/Some pages have very large/);
        this.hd_No_Siblings = page.getByRole('heading', { name: 'No Siblings' });
        this.txt_NoSiblings = page.getByText(/No Siblings/);
        this.hd_Siblings = page.getByRole('heading', { name: 'Siblings', exact: true });
        this.txt_pageContent1_1_3 = page.getByText('1.1 1.2 1.3 2.1 2.2 2.3 3.1 3');
        this.txt_pageContent7_1_9 = page.getByText('7.1 7.2 7.3 8.1 8.2 8.3 9.1 9');
        this.hd_Table = page.getByRole('heading', { name: 'Table' });
        this.colHd1 = page.getByRole('columnheader', { name: '1', exact: true });
        this.colHd25 = page.getByRole('columnheader', { name: '25' });
        this.colHd50 = page.getByRole('columnheader', { name: '50' });
        this.cell_1_1 = page.getByRole('cell', { name: '1.1', exact: true });
        this.cell_1_25 = page.getByRole('cell', { name: '1.25', exact: true });
        this.cell_1_50 = page.getByRole('cell', { name: '1.50', exact: true });
        this.cell_1_1 = page.getByRole('cell', { name: '1.1', exact: true });
        this.cell_1_25 = page.getByRole('cell', { name: '1.25', exact: true });
        this.cell_1_50 = page.getByRole('cell', { name: '1.50', exact: true });
        this.cell_50_1 = page.getByRole('cell', { name: '50.1', exact: true });
        this.cell_50_25 = page.getByRole('cell', { name: '50.25', exact: true });
        this.cell_50_50 = page.getByRole('cell', { name: '50.50', exact: true });

    }

    async ValidateLargeNDeepDOMPage() {
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/large');
        await expect(this.hd_LargeNDeepDOM).toBeInViewport();
        await expect(this.txt_Large).toBeVisible();
        await expect(this.hd_No_Siblings).toBeAttached();
        await expect(this.txt_NoSiblings).toBeVisible();
        await expect(this.hd_Siblings).toBeInViewport();
        await expect(this.txt_pageContent1_1_3).toBeAttached();
    }

    async validateDOMTable() {
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/large');
        await expect(this.hd_Table).toBeAttached({ timeout: 10000 });
        await expect(this.colHd1).toHaveCount(1);
        await expect(this.colHd25).not.toBeNull();
        await expect(this.colHd50).toHaveText('50');
        await expect(this.cell_1_1).toHaveText('1.1');
        await expect(this.cell_1_25).toHaveText('1.25');
        await expect(this.cell_1_50).toHaveText('1.50');
        await expect(this.cell_50_1).toHaveText('50.1');
        await expect(this.cell_50_25).toHaveText('50.25');
        await expect(this.cell_50_50).toHaveText('50.50');
    }

}
export default LargeNDeepDOM;