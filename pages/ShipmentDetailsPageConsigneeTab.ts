import { Locator, Page } from "@playwright/test";
import { ShipmentDetailsPageConsigneeCustomerLookupPopup } from "./ShipmentDetailsPageConsigneeCustomerLookupPopup";

/** Represents the Shipment Details Consignee tab. */
export class ShipmentDetailsPageConsigneeTab {
    readonly page: Page;
    readonly tabHeader: Locator;
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
    readonly englishFaxInput: Locator;
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
    readonly brokerIdInput: Locator;
    readonly brokerNameInput: Locator;
    readonly brokerClearanceRefInput: Locator;
    readonly paperworkReceivedByInput: Locator;
    readonly brokerReasonInput: Locator;
    readonly dhlAccountInput: Locator;
    readonly vatInput: Locator;
    readonly customsIdInput: Locator;
    readonly roleTypeInput: Locator;
    readonly importerIdInput: Locator;
    readonly importerCustomerReferenceInput: Locator;
    readonly relatedShipperInput: Locator;
    readonly instructionsInput: Locator;
    readonly customerLookupButton: Locator;
    readonly customerLookupPopup: ShipmentDetailsPageConsigneeCustomerLookupPopup;

    constructor(page: Page) {
        this.page = page;
        this.tabHeader = page.locator('text=Cnsgnee');
        this.englishNameInput = page.locator('input[name="ctl00\$cp2\$txtConsigneeInfoEnglishName"]');
        this.englishAddressLine1Input = page.locator('input[name="ctl00\$cp2\$txtConsigneeInfoEnglishAddress1"]');
        this.englishAddressLine2Input = page.locator('input[name="ctl00\$cp2\$txtConsigneeInfoEnglishAddress2"]');
        this.englishAddressLine3Input = page.locator('input[name="ctl00\$cp2\$txtConsigneeInfoEnglishAddress3"]');
        this.englishCityInput = page.locator('input[name="ctl00\$cp2\$txtConsigneeInfoEnglishCity"]');
        this.englishStateInput = page.locator('input[name="ctl00\$cp2\$txtConsigneeInfoEnglishState"]');
        this.englishPostalCodeInput = page.locator('input[name="ctl00\$cp2\$txtConsigneeInfoEnglishPostal"]');
        this.englishCountryCodeInput = page.locator('input[name="ctl00\$cp2\$txtConsigneeInfoEnglishCountry"]');
        this.englishContactFirstNameInput = page.locator('input[name="ctl00\$cp2\$txtConsigneeInfoEnglishContactFirstName"]');
        this.englishContactLastNameInput = page.locator('input[name="ctl00\$cp2\$txtConsigneeInfoEnglishContactLastName"]');
        this.englishContactNationalityInput = page.locator('input[name="ctl00\$cp2\$txtConsigneeInfoEnglishContactNationality"]');
        this.englishFaxInput = page.locator('input[name="ctl00\$cp2\$txtConsigneeInfoEnglishFax"]');
        this.englishPhoneInput = page.locator('input[name="ctl00\$cp2\$txtConsigneeInfoEnglishPhone"]');
        this.englishEmailInput = page.locator('input[name="ctl00\$cp2\$txtConsigneeInfoEnglishEmail"]');
        this.englishMobileInput = page.locator('input[name="ctl00\$cp2\$txtConsigneeInfoEnglishMobile"]');
        this.englishBuildingInput = page.locator('input[name="ctl00\$cp2\$txtConsigneeInfoEnglishBuildingName"]');
        this.englishFloorInput = page.locator('input[name="ctl00\$cp2\$txtConsigneeInfoEnglishFloor"]');
        this.englishStreetNameInput = page.locator('input[name="ctl00\$cp2\$txtConsigneeInfoEnglishStreetName"]');
        this.englishStreetNumberInput = page.locator('input[name="ctl00\$cp2\$txtConsigneeInfoEnglishStreetNumber"]');
        this.englishContactInput = page.locator('input[name="ctl00\$cp2\$txtConsigneeInfoEnglishContact"]');
        this.englishDistrictInput = page.locator('input[name="ctl00\$cp2\$txtConsigneeInfoEnglishDistrictName"]');
        this.englishBusinessPartyTraderTypeInput = page.locator('select[name="ctl00\$cp2\$ddlConsigneeBusinessPartyTraderType"]');
        this.brokerIdInput = page.locator('input[name="ctl00\$cp2\$txtConsigneeBrokerID"]');
        this.brokerNameInput = page.locator('input[name="ctl00\$cp2\$txtConsigneeBrokerName"]');
        this.brokerClearanceRefInput = page.locator('input[name="ctl00\$cp2\$txtConsigneeBrokerClearanceRef"]');
        this.paperworkReceivedByInput = page.locator('input[name="ctl00\$cp2\$txtConsigneePPWKReceivedBy"]');
        this.brokerReasonInput = page.locator('textarea[name="ctl00\$cp2\$txtConsigneeBrokerReason"]');
        this.dhlAccountInput = page.locator('input[name="ctl00\$cp2\$txtConsigneeInfoImporterDHLAccount"]');
        this.vatInput = page.locator('input[name="ctl00\$cp2\$txtConsigneeInfoImporterVATNumber"]');
        this.customsIdInput = page.locator('input[name="ctl00\$cp2\$txtConsigneeInfoImporterCustomerID"]');
        this.roleTypeInput = page.locator('select[name="ctl00\$cp2\$ddlConsigneeInfoImporterRoleType"]');
        this.importerIdInput = page.locator('input[name="ctl00\$cp2\$txtConsigneeInfoImporterID"]');
        this.importerCustomerReferenceInput = page.locator('input[name="ctl00\$cp2\$txtConsigneeInfoImporterCustomerReference"]');
        this.relatedShipperInput = page.locator('input[name="ctl00\$cp2\$txtRelatedShipper"]');
        this.instructionsInput = page.locator('textarea[name="ctl00\$cp2\$txtConsigneeInfoImporterInstructions"]');
        this.customerLookupButton = page.locator('#cp2_btnLookupConsignee');
        this.customerLookupPopup = new ShipmentDetailsPageConsigneeCustomerLookupPopup(page);
    }

    /** Open customer lookup. */
    async openCustomerLookup(): Promise<void> {
        await this.customerLookupButton.click();
    }

    /** Selects the Shipment Details Info tab. */
    async selectTab(): Promise<void> {
        await this.tabHeader.click();
    }
}