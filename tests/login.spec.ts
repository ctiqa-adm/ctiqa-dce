import { test, expect } from '@playwright/test';
import { LogInPage } from '../pages/LoginPage';
import { LogOut } from '../pages/Logout';

test('login_logout', async ({ page }) => {
  const logInPage = new LogInPage(page);
  const signOut = new LogOut(page);

    await logInPage.goto();
    await logInPage.loginDefault(); 
    await page.waitForTimeout(500);
    await signOut.goto();
});