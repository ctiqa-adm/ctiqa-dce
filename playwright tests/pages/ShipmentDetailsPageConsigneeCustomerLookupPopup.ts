import { Locator, Page } from "@playwright/test";

export class ShipmentDetailsPageConsigneeCustomerLookupPopup {
    readonly page: Page;
    readonly nameInput: Locator;
    readonly addressLine1Input: Locator;
    readonly dutyAccountNumberInput: Locator;
    readonly vatInput: Locator;
    readonly postalCodeInput: Locator;
    readonly countryInput: Locator;
    readonly customsIdInput: Locator;
    readonly roleInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameInput = page.locator('input[name="ctl00\$cp2\$ucConsigneeLookup\$txtName"]');
        this.addressLine1Input = page.locator('input[name="ctl00\$cp2\$ucConsigneeLookup\$txtAddress"]');
        this.dutyAccountNumberInput = page.locator('input[name="ctl00\$cp2\$ucConsigneeLookup\$txtAccount"]');
        this.vatInput = page.locator('input[name="ctl00\$cp2\$ucConsigneeLookup\$txtVat"]');
        this.postalCodeInput = page.locator('input[name="ctl00\$cp2\$ucConsigneeLookup\$txtPostalCode"]');
        this.countryInput = page.locator('input[name="ctl00\$cp2\$ucConsigneeLookup\$txtCountry"]');
        this.customsIdInput = page.locator('input[name="ctl00\$cp2\$ucConsigneeLookup\$txtId"]');
        this.roleInput = page.locator('select[name="ctl00\$cp2\$ucConsigneeLookup\$drpRoleModule"]');
    }
}