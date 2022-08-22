import { Locator, Page } from "@playwright/test";

export class ShipmentDetailsPageShipperTab {
    readonly page: Page;
    readonly englishNameInput: Locator;
    readonly englishAddressLine1Input: Locator;
    readonly englishAddressLine2Input: Locator;
    readonly englishAddressLine3Input: Locator;
    readonly englishCityInput: Locator;
    readonly englishStateInput: Locator;
    readonly englishPostalCodeInput: Locator;
    readonly englishCountryCodeInput: Locator;
    readonly englishContactFirstNameInput: Locator;
    readonly englishContactLastNameInput: Locator;
    readonly englishContactNationalityInput: Locator;
    readonly englishContactFaxInput: Locator;
    readonly englishPhoneInput: Locator;
    readonly englishEmailInput: Locator;
    readonly englishMobileInput: Locator;
    readonly englishBuildingInput: Locator;
    readonly englishFloorInput: Locator;
    readonly englishStreetNameInput: Locator;
    readonly englishStreetNumberInput: Locator;
    readonly englishContactInput: Locator;
    readonly englishDistrictInput: Locator;
    readonly englishBusinessPartyTraderTypeInput: Locator;
    readonly dhlAccountInput: Locator;
    readonly vatInput: Locator;
    readonly customsIdInput: Locator;
    readonly roleTypeInput: Locator;
    readonly customerReferenceNumberInput: Locator;
    readonly instructionsInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.englishNameInput = page.locator('input[name="ctl00\$cp2\$txtShipperInfoEnglishName"]');
        this.englishAddressLine1Input = page.locator('input[name="ctl00\$cp2\$txtShipperInfoEnglishAddress1"]');
        this.englishAddressLine2Input = page.locator('input[name="ctl00\$cp2\$txtShipperInfoEnglishAddress2"]');
        this.englishAddressLine3Input = page.locator('input[name="ctl00\$cp2\$txtShipperInfoEnglishAddress3"]');
        this.englishCityInput = page.locator('input[name="ctl00\$cp2\$txtShipperInfoEnglishCity"]');
        this.englishStateInput = page.locator('input[name="ctl00\$cp2\$txtShipperInfoEnglishState"]');
        this.englishPostalCodeInput = page.locator('input[name="ctl00\$cp2\$txtShipperInfoEnglishPostal"]');
        this.englishCountryCodeInput = page.locator('input[name="ctl00\$cp2\$txtShipperInfoEnglishCountry"]');
        this.englishContactFirstNameInput = page.locator('input[name="ctl00\$cp2\$txtShipperInfoEnglishContactFirstName"]');
        this.englishContactLastNameInput = page.locator('input[name="ctl00\$cp2\$txtShipperInfoEnglishContactLastName"]');
        this.englishContactNationalityInput = page.locator('input[name="ctl00\$cp2\$txtShipperInfoEnglishContactNationality"]');
        this.englishContactFaxInput = page.locator('input[name="ctl00\$cp2\$txtShipperInfoEnglishFax"]');
        this.englishPhoneInput = page.locator('input[name="ctl00\$cp2\$txtShipperInfoEnglishPhone"]');
        this.englishEmailInput = page.locator('input[name="ctl00\$cp2\$txtShipperInfoEnglishEmail"]');
        this.englishMobileInput = page.locator('input[name="ctl00\$cp2\$txtShipperInfoEnglishMobile"]');
        this.englishBuildingInput = page.locator('input[name="ctl00\$cp2\$txtShipperInfoEnglishBuildingName"]');
        this.englishFloorInput = page.locator('input[name="ctl00\$cp2\$txtShipperInfoEnglishFloor"]');
        this.englishStreetNameInput = page.locator('input[name="ctl00\$cp2\$txtShipperInfoEnglishStreetName"]');
        this.englishStreetNumberInput = page.locator('input[name="ctl00\$cp2\$txtShipperInfoEnglishStreetNumber"]');
        this.englishContactInput = page.locator('input[name="ctl00\$cp2\$txtShipperInfoEnglishContact"]');
        this.englishDistrictInput = page.locator('input[name="ctl00\$cp2\$txtShipperInfoEnglishDistrictName"]');
        this.englishBusinessPartyTraderTypeInput = page.locator('select[name="ctl00\$cp2\$ddlShipperBusinessPartyTraderType"]');
        this.dhlAccountInput = page.locator('input[name="ctl00\$cp2\$txtShipperInfoShipperDHLAccount"]');
        this.vatInput = page.locator('input[name="ctl00\$cp2\$txtShipperInfoShipperVATNumber"]');
        this.customsIdInput = page.locator('input[name="ctl00\$cp2\$txtShipperInfoShipperCustomerID"]');
        this.roleTypeInput = page.locator('select[name="ctl00\$cp2\$ddlShipperInfoShipperRoleType"]');
        this.customerReferenceNumberInput = page.locator('input[name="ctl00\$cp2\$txtShipperInfoCustomerReferenceNumber"]');
        this.instructionsInput = page.locator('textarea[name="ctl00\$cp2\$txtShipperInfoShipperInstructions"]');
    }
}