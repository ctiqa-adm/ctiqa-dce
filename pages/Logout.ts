import { expect, Locator, Page } from "@playwright/test";

export class LogOut {
    readonly page: Page;
    readonly SignOutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.SignOutButton = page.locator('input[name="ctl00\\$SignOutDialogButton"]');
    }

    /** LogOut page. */
    async goto(): Promise<void> {
            // Click input[name="ctl00\$SignOutDialogButton"]
            await this.page.locator('input[name="ctl00\\$SignOutDialogButton"]').click();

            // Click button[role="button"]:has-text("Yes")
            await this.page.locator('button[role="button"]:has-text("Yes")').click();
            await expect(this.page).toHaveURL(`${process.env.BASE_URL}/Login.aspx`);
    }
}