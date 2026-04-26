class AddRemoveElementsPage {
  constructor(page) {
    this.page = page;
    this.btn_AddElement = page.getByRole('button', { name: 'Add Element' }); 
    this.btn_Delete = page.getByRole('button', { name: 'Delete' });
   
  }
}
export default AddRemoveElementsPage;