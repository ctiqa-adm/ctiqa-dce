import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

try {
  await page.goto('https://win2k16-vm/dce4x/');
} catch (error) {
  console.log("Continue...")
  // Click text=Proceed to win2k16-vm (unsafe)
  await page.locator('text=Advanced').click();

  await page.locator('text=Proceed to win2k16-vm (unsafe)').click();
}
  await expect(page).toHaveURL('https://win2k16-vm/dce4x/Login.aspx?ReturnUrl=%2fdce4x%2fmodules%2fshipmentcenter.aspx');
  // Click input[name="txtUsername"]
  await page.locator('input[name="txtUsername"]').click();

  // Fill input[name="txtUsername"]
  await page.locator('input[name="txtUsername"]').fill('app-admin');

  // Press Tab
  await page.locator('input[name="txtUsername"]').press('Tab');

  // Fill input[name="txtPassword"]
  await page.locator('input[name="txtPassword"]').fill('password');

  // Press Enter
  await page.locator('input[name="txtPassword"]').press('Enter');
  await expect(page).toHaveURL('https://win2k16-vm/dce4x/modules/shipmentcenter.aspx');

  // Click input[name="ctl00\$SignOutDialogButton"]
  await page.locator('input[name="ctl00\\$SignOutDialogButton"]').click();

  // Click button[role="button"]:has-text("Yes")
  await page.locator('button[role="button"]:has-text("Yes")').click();
  await expect(page).toHaveURL('https://win2k16-vm/dce4x/Login.aspx');

});