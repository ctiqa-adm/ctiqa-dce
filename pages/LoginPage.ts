import { Locator, Page } from "@playwright/test";

export class LogInPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly countryInput: Locator;
    readonly moduleInput: Locator;
    readonly logInButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('input[name="txtUsername"]');
        this.passwordInput = page.locator('input[name="txtPassword"]');
        this.countryInput = page.locator('select[name="ddlCountry"]');
        this.moduleInput = page.locator('select[name="ddlModule"]');
        this.logInButton = page.locator('text=Sign In');
    }

    /** Log in to the DCE Website. */
    async login(
        userName: string,
        password: string,
        countryCode: string,
        moduleFlag: string,
    ): Promise<void> {
        await this.usernameInput.type(userName);
        // wait for the country and module dropdown to refresh from the username
        await this.countryInput.focus();
        await this.page.waitForTimeout(1000);
        if (await this.countryInput.isDisabled() == false) {
            await this.countryInput.selectOption(countryCode);
        }
        await this.moduleInput.selectOption(moduleFlag);
        // Enter the password last since the page refreshes whenever any other input is updated. 
        // This is probably a side effect on how the Login Page was coded.
        await this.page.waitForTimeout(500);
        await this.passwordInput.type(password);
        await this.logInButton.click();
        await this.page.waitForNavigation();
    }

    async loginDefault() {
        await this.login(
            process.env.DCE_USERNAME ?? '',
            process.env.DCE_PASSWORD ?? '',
            process.env.COUNTRY_CODE ?? '',
            process.env.MODULE_FLAG ?? '',
        );
    }

    /** Go to the Login page. */
    async goto(): Promise<void> {
        const url = `${process.env.BASE_URL}/Login.aspx`;
        await this.page.goto(url);
    }
}