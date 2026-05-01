class CheckboxesPage {

    constructor(page){
        this.page = page;
        this.h_Checkboxes = page.getByRole('heading', { name: 'Checkboxes'});
        this.chk_checkbox = page.getByRole('checkbox');
        
    }

    async navToCheckboxes(i){
        await this.chk_checkbox.nth(i).click();
    }

}
export default CheckboxesPage;