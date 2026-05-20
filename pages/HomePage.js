import { expect } from '@playwright/test';
import { ADDRGETNETWORKPARAMS } from 'node:dns';

class HomePage {

  constructor(page) {

    this.page = page;
    this.lnk_A_B_Testing = page.getByRole('link', { name: 'A/B Testing' }); // Best practice: use getByRole for links
    this.lnk_Add_Remove_Elements = page.getByRole('link', { name: 'Add/Remove Elements' });
    this.lnk_Basic_Auth = page.getByRole('link', { name: 'Basic Auth' });
    this.lnk_Broken_Images = page.getByRole('link', { name: 'Broken Images' });
    this.lnk_Challenging_DOM = page.getByRole('link', { name: 'Challenging DOM' });
    this.lnk_Checkboxes = page.getByRole('link', { name: 'Checkboxes' });
    this.lnk_Context_Menu = page.getByRole('link', { name: 'Context Menu' });
    this.lnk_Digest_Authentication = page.getByRole('link', { name: 'Digest Authentication' });
    this.lnk_Disappearing_Elements = page.getByRole('link', { name: 'Disappearing Elements' });
    this.lnk_Drag_and_Drop = page.getByRole('link', { name: 'Drag and Drop' });//--
    this.lnk_Dropdown = page.getByRole('link', { name: 'Dropdown' });
    this.lnk_Dynamic_Content = page.getByRole('link', { name: 'Dynamic Content' });
    this.lnk_Dynamic_Controls = page.getByRole('link', { name: 'Dynamic Controls' });
    this.lnk_Dynamic_Loading = page.getByRole('link', { name: 'Dynamic Loading' });
    this.lnk_Entry_Ad = page.getByRole('link', { name: 'Entry Ad' });
    this.lnk_Exit_Intent = page.getByRole('link', { name: 'Exit Intent' });
    this.lnk_File_Download = page.getByRole('link', { name: 'File Download', exact: true });
    this.lnk_File_Upload = page.getByRole('link', { name: 'File Upload' });
    this.lnk_Floating_Menu = page.getByRole('link', { name: 'Floating Menu' });
    this.lnk_Forgot_Password = page.getByRole('link', { name: 'Forgot Password' });
    this.lnk_Form_Authentication = page.getByRole('link', { name: 'Form Authentication' });
    this.lnk_Frames = page.getByRole('link', { name: 'Frames', exact: true });
    this.lnk_Geolocation = page.getByRole('link', { name: 'Geolocation' });
    this.lnk_Horizontal_Slider = page.getByRole('link', { name: 'Horizontal Slider' });
    this.lnk_Hovers = page.getByRole('link', { name: 'Hovers' });
    this.lnk_Infinite_Scroll = page.getByRole('link', { name: 'Infinite Scroll' });
    this.lnk_Inputs = page.getByRole('link', { name: 'Inputs' });
    this.lnk_JQuery_UI_Menus = page.getByRole('link', { name: 'JQuery UI Menus' });
    this.lnk_Multiple_Windows = page.getByRole('link', { name: 'Multiple Windows' });
    this.lnk_Key_Presses = page.getByRole('link', { name: 'Key Presses' });
    this.lnk_Nested_Frames = page.getByRole('link', { name: 'Nested Frames' });
    this.lnk_Notification_Messages = page.getByRole('link', { name: 'Notification Messages' });
    this.lnk_Shadow_DOM = page.getByRole('link', { name: 'Shadow DOM' });
    this.lnk_Shifting_Content = page.getByRole('link', { name: 'Shifting Content' });
    this.lnk_Slow_Resources = page.getByRole('link', { name: 'Slow Resources' });
    this.lnk_Sortable_Data_Tables = page.getByRole('link', { name: 'Sortable Data Tables' });
    this.lnk_Status_Codes = page.getByRole('link', { name: 'Status Codes' });
    this.lnk_Typos = page.getByRole('link', { name: 'Typos' });
    this.lnk_WYSIWYG_Editor = page.getByRole('link', { name: 'WYSIWYG Editor' });

  }

  async gotoHomePage() {
    // Adding waitUntil: 'domcontentloaded' can sometimes stabilize flaky environments//, { waitUntil: 'domcontentloaded' }
    await this.page.goto("https://the-internet.herokuapp.com/");
    await this.page.waitForURL("https://the-internet.herokuapp.com/");
  }

  async navToChangengingDOMPage() {
    await this.page.waitForURL("https://the-internet.herokuapp.com/");
    await expect(this.lnk_Challenging_DOM).toBeEnabled();
    await this.lnk_Challenging_DOM.click();
    await this.page.waitForURL("https://the-internet.herokuapp.com/challenging_dom")
    await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/challenging_dom');
  }

  async navGeolocationPage(){
    //await this.page.waitForURL("https://the-internet.herokuapp.com/");
    await expect(this.lnk_Geolocation).toBeEnabled();
    await this.lnk_Geolocation.click();
    await this.page.waitForURL('https://the-internet.herokuapp.com/geolocation');
    await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/geolocation');
  }

  async navToHorizontalSliderPage(){
    await expect(this.lnk_Horizontal_Slider).toBeEnabled();
    await this.lnk_Horizontal_Slider.click();
    await this.page.waitForURL('https://the-internet.herokuapp.com/horizontal_slider');
    await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/horizontal_slider');
  }

  async navToHoversPage(){
    await expect(this.lnk_Hovers).toBeEnabled();
    await this.lnk_Hovers.click({ timeOut: 15000 });
    await this.page.waitForURL('https://the-internet.herokuapp.com/hovers');
    await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/hovers');
  }

  async navToInfiniteScrollPage(){
    await expect(this.lnk_Infinite_Scroll).toBeEnabled();
    await this.lnk_Infinite_Scroll.click({timeout: 15000});
    await this.page.waitForURL('https://the-internet.herokuapp.com/infinite_scroll');
    await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/infinite_scroll');
  }

}
export default HomePage; 

