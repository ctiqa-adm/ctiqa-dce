import { Locator, Page } from "@playwright/test";

export class ShipmentDetailsPageShipperCustomerLookupPopup {
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
        this.nameInput = page.locator('input[name="ctl00\$cp2\$ucShipperLookup\$txtName"]');
        this.addressLine1Input = page.locator('input[name="ctl00\$cp2\$ucShipperLookup\$txtAddress"]');
        this.dutyAccountNumberInput = page.locator('input[name="ctl00\$cp2\$ucShipperLookup\$txtAccount"]');
        this.vatInput = page.locator('input[name="ctl00\$cp2\$ucShipperLookup\$txtVat"]');
        this.postalCodeInput = page.locator('input[name="ctl00\$cp2\$ucShipperLookup\$txtPostalCode"]');
        this.countryInput = page.locator('input[name="ctl00\$cp2\$ucShipperLookup\$txtCountry"]');
        this.customsIdInput = page.locator('input[name="ctl00\$cp2\$ucShipperLookup\$txtId"]');
        this.roleInput = page.locator('select[name="ctl00\$cp2\$ucShipperLookup\$drpRoleModule"]');
    }
}