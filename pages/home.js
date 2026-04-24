exports.HomePage = class HomePage{

  constructor(page) {

    this.page = page;
    this.lnk_A_B_Testing = page.getByText('A/B Testing')
    this.Checkboxes = page.getByLabel('Checkboxes')
  }
  async gotoHomePage(){
    await this.page.goto("https://the-internet.herokuapp.com/");
  }  
}
