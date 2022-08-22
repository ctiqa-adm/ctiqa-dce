import { test, expect } from '@playwright/test';
import { LogInPage } from '../pages/LoginPage';

test('login', async ({ page }) => {
  const logInPage = new LogInPage(page);
  await logInPage.goto();
  await logInPage.loginDefault();
});