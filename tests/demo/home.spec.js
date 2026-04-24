import { test, expect } from '@playwright/test';
import {HomePage} from '../../pages/home'

test('test home page', async ({ page }) => {
  const Home = new HomePage(page)

  Home.gotoHomePage();
  //....
});