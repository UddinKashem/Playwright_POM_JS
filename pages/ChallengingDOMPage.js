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

    async navToEditURL(){
        await this.lnk_Edit.first().click();
    }

    async navToDeleteURL(){
        await this.lnk_Delete.first().click();
    }
}
export default Challenging_DOMPage;