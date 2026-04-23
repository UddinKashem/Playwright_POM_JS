import { test, expect } from '@playwright/test';
import {LoginPage} from '../../pages/login'

test('test', async ({ page }) => {
  const Login = new LoginPage(page)

  Login.gotoLoginPage();
  Login.login('tomsmith', 'SuperSecretPassword!')
  // await page.goto('https://the-internet.herokuapp.com/login');
  // await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  // await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  // await page.getByRole('button', { name: ' Login' }).click();
  await page.pause();
<<<<<<< HEAD
  await page.goto('https://demo.applitools.com/')
  await page.getByRole('textbox', { name: 'Enter your username' }).click();
  await page.getByRole('textbox', { name: 'Enter your username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('admin123');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.pause();

});
=======
});
>>>>>>> 33ce5675fe3d4513f86305648c1baf827664771b
