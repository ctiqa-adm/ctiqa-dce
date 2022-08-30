import { Locator, Page } from "@playwright/test";

export class JQueryCustomerLookupPopup {
    readonly page: Page;
    readonly nameInput: Locator;
    readonly addressLine1Input: Locator;
    readonly dutyAccountNumberInput: Locator;
    readonly vatInput: Locator;
    readonly postalCodeInput: Locator;
    readonly countryInput: Locator;
    readonly customsIdInput: Locator;
    readonly roleInput: Locator;

    constructor(container: Locator) {
        this.nameInput = container.locator('input.filter-name');
        this.addressLine1Input = container.locator('input.filter-address');
        this.dutyAccountNumberInput = container.locator('input.filter-duty');
        this.vatInput = container.locator('input.filter-vat');
        this.postalCodeInput = container.locator('input.filter-postal');
        this.countryInput = container.locator('input.filter-country');
        this.customsIdInput = container.locator('input.filter-customsid');
        this.roleInput = container.locator('select.filter-role');
    }
}