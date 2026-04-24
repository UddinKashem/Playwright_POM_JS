export class PlaywrightDevPage{

    constructor(page){
        this.page = page;
        this.getStandardLink = page.locator('a',{ hasText: 'Get Started' });
        this.getStartedHeader = page.locator('h1', { hasText: 'Installation' });
        this.pomLink = page.locator('li', { 
            hasText: 'Guides',
        }).locator('a', {
            hasText: 'Page Object Model',
        });
        this.tocList = page.locator('article div.markdown ul > li a');

    }

    async gotoHomePage() {
        await this.page.goto('https://playwright.dev');
    }

    async getStarted(){
        await this.getStandardLink.first().click();
        await expect(this.getStartedHeader).toBeVisible();
    }

    async pageObjectModel(){
        await this.getStarted();
        await this.pomLink.click();
    }

}