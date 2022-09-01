import { test, expect } from '@playwright/test';
import { LogInPage } from '../pages/LoginPage';

test('login', async ({ page }) => {
  const logInPage = new LogInPage(page);

  try {
    await logInPage.goto();
  } catch (error) {
    console.log("Continue...")
    // Click text=Proceed to win2k16-vm (unsafe)
    await page.locator('text=Advanced').click();
  
    await page.locator('text=Proceed to').click();
  }
  
  await logInPage.loginDefault(); 
});