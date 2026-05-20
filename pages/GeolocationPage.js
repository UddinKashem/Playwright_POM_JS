import { expect, page } from '@playwright/test';

class GeolocationPage{

    constructor(page){
        this.page = page;
        this.hd_Geolocation = page.getByRole('heading', { name: 'Geolocation' });
        this.txt_get = page.getByText('Click the button to get your');
        this.btn_Where = page.getByRole('button', { name: 'Where am I?' });

    }

    async validateGeolocation(){
        await this.page.waitForURL("https://the-internet.herokuapp.com/geolocation");
        await expect(this.hd_Geolocation).toBeVisible();
        await expect(this.txt_get).toBeInViewport();
        await expect(this.btn_Where).toBeEnabled();
    }

}
export default GeolocationPage;

/*
test('test', async ({ page }) => {
  await page.getByRole('heading', { name: 'Geolocation' }).click();
  await page.getByText('Click the button to get your').click();
  await page.getByRole('button', { name: 'Where am I?' }).click();
  await page.locator('html').click();
});
*/