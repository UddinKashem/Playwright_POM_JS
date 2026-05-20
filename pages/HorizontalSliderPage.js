import { page, expect } from '@playwright/test';

class HorizontalSiderPage{

    constructor(page){
        this.page = page;
        this.hd_HorizontalSlider = page.getByRole('heading', { name: 'Horizontal Slider' });
        this.hd_SetFocus = page.getByRole('heading', { name: 'Set the focus on the slider (' });
        this.loc_Slider = page.getByRole('slider');

    }

    async validateHorizontalSlider(){
        await expect(this.hd_HorizontalSlider).toBeVisible();
        await expect(this.hd_SetFocus).toBeInViewport();
        await expect(this.loc_Slider).toBeEnabled();
    }
}
export default HorizontalSiderPage;