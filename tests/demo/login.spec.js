import { test, expect } from '@playwright/test';
import {LoginPage} from '../../pages/login'

test('test login page', async ({ page }) => {
  const Login = new LoginPage(page)

  Login.gotoLoginPage();
  Login.login('tomsmith', 'SuperSecretPassword!');

  await expect(page.getByRole('heading', { name: 'Welcome to the Secure Area.' })).toBeInViewport();
  await expect(page.getByRole('link', { name: 'Logout' })).toBeEnabled();
  // await page.goto('https://the-internet.herokuapp.com/login');
  // await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  // await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  // await page.getByRole('button', { name: ' Login' }).click();
  await page.pause();
  // getByRole('heading', { name: 'Secure Area', exact: true })

});