import { Locator, Page } from "@playwright/test";
import { JQueryCustomerLookupPopup } from "./JQueryCustomerLookupPopup";

/** Represents the Shipment Details Other Party tab. */
export class ShipmentDetailsPageOtherPartyTab {
    readonly page: Page;
    readonly tabHeader: Locator;
    readonly customerLookupButton: Locator;
    readonly roleInput: Locator;
    readonly englishNameInput: Locator;
    readonly englishAddressLine1Input: Locator;
    readonly englishAddressLine2Input: Locator;
    readonly englishAddressLine3Input: Locator;
    readonly englishCityInput: Locator;
    readonly englishStateInput: Locator;
    readonly englishPostcodeInput: Locator;
    readonly englishCountryInput: Locator;
    readonly englishFirstNameInput: Locator;
    readonly englishLastNameInput: Locator;
    readonly englishNationalityInput: Locator;
    readonly englishLanguageCodeInput: Locator;
    readonly englishTelInput: Locator;
    readonly englishFaxInput: Locator;
    readonly englishMobileInput: Locator;
    readonly englishEmailInput: Locator;
    readonly englishFloorInput: Locator;
    readonly englishBuildingNameInput: Locator;
    readonly englishStreetNumberInput: Locator;
    readonly englishStreetNameInput: Locator;
    readonly englishDistrictNameInput: Locator;
    readonly englishContactInput: Locator;
    readonly englishBusinessPartyTraderTypeInput: Locator;
    readonly isDefaultInput: Locator;
    readonly localNameInput: Locator;
    readonly localAddressLine1Input: Locator;
    readonly localAddressLine2Input: Locator;
    readonly localAddressLine3Input: Locator;
    readonly localCityInput: Locator;
    readonly localStateInput: Locator;
    readonly localContactNameInput: Locator;
    readonly localCountryInput: Locator;
    readonly localTelInput: Locator;
    readonly localFaxInput: Locator;
    readonly localMobileInput: Locator;
    readonly localEmailInput: Locator;
    readonly localFirstNameInput: Locator;
    readonly localLastNameInput: Locator;
    readonly localNationalityInput: Locator;
    readonly dhlAccountInput: Locator;
    readonly vatInput: Locator;
    readonly customsIdInput: Locator;
    readonly customsReferenceInput: Locator;
    readonly importedIdInput: Locator;
    readonly instructionsInput: Locator;
    readonly customerLookup: JQueryCustomerLookupPopup;

    constructor(page: Page) {
        this.page = page;
        this.tabHeader = page.locator('text=Other Prty');
        this.roleInput = page.locator('select[name="ctl00\$cp2\$ddlOtherPartyRole"]');
        this.isDefaultInput = page.locator('select[name="ctl00\$cp2\$ddlOtherPartyRole"]');
        this.englishNameInput = page.locator('input[name="ctl00\$cp2\$txtOtherPartyName"]');
        this.englishAddressLine1Input = page.locator('input[name="ctl00\$cp2\$txtOtherPartyAddress1"]');
        this.englishAddressLine2Input = page.locator('input[name="ctl00\$cp2\$txtOtherPartyAddress2"]');
        this.englishAddressLine3Input = page.locator('input[name="ctl00\$cp2\$txtOtherPartyAddress3"]');
        this.englishCityInput = page.locator('input[name="ctl00\$cp2\$txtOtherPartyCity"]');
        this.englishStateInput = page.locator('input[name="ctl00\$cp2\$txtOtherPartyState"]');
        this.englishPostcodeInput = page.locator('input[name="ctl00\$cp2\$txtOtherPartyPostalCode"]');
        this.englishCountryInput = page.locator('input[name="ctl00\$cp2\$txtOtherPartyCountry"]');
        this.englishFirstNameInput = page.locator('input[name="ctl00\$cp2\$txtOtherPartyFirstName"]');
        this.englishLastNameInput = page.locator('input[name="ctl00\$cp2\$txtOtherPartyLastName"]');
        this.englishNationalityInput = page.locator('input[name="ctl00\$cp2\$txtOtherPartyNationality"]');
        this.englishLanguageCodeInput = page.locator('input[name="ctl00\$cp2\$txtOtherPartyLanguageCode"]');
        this.englishTelInput = page.locator('input[name="ctl00\$cp2\$txtOtherPartyPhone"]');
        this.englishFaxInput = page.locator('input[name="ctl00\$cp2\$txtOtherPartyFax"]');
        this.englishMobileInput = page.locator('input[name="ctl00\$cp2\$txtOtherPartyMobile"]');
        this.englishEmailInput = page.locator('input[name="ctl00\$cp2\$txtOtherPartyEmail"]');
        this.englishFloorInput = page.locator('input[name="ctl00\$cp2\$txtOtherPartyFloor"]');
        this.englishBuildingNameInput = page.locator('input[name="ctl00\$cp2\$txtOtherPartyBuilding"]');
        this.englishStreetNumberInput = page.locator('input[name="ctl00\$cp2\$txtOtherPartyStreetNumber"]');
        this.englishStreetNameInput = page.locator('input[name="ctl00\$cp2\$txtOtherPartyStreetName"]');
        this.englishDistrictNameInput = page.locator('input[name="ctl00\$cp2\$txtOtherPartyDistrict"]');
        this.englishContactInput = page.locator('input[name="ctl00\$cp2\$txtOtherPartyContactName"]');
        this.englishBusinessPartyTraderTypeInput = page.locator('select[name="ctl00\$cp2\$ddlOtherPartyBusinessPartyTraderType"]');
        this.localNameInput = page.locator('input[name="ctl00\$cp2\$txtOtherPartyLocalName"]');
        this.localAddressLine1Input = page.locator('input[name="ctl00\$cp2\$txtOtherPartyLocalAddress1"]');
        this.localAddressLine2Input = page.locator('input[name="ctl00\$cp2\$txtOtherPartyLocalAddress2"]');
        this.localAddressLine3Input = page.locator('input[name="ctl00\$cp2\$txtOtherPartyLocalAddress3"]');
        this.localCityInput = page.locator('input[name="ctl00\$cp2\$txtOtherPartyLocalCity"]');
        this.localStateInput = page.locator('input[name="ctl00\$cp2\$txtOtherPartyLocalState"]');
        this.localContactNameInput = page.locator('input[name="ctl00\$cp2\$txtOtherPartyLocalContactName"]');
        this.localCountryInput = page.locator('input[name="ctl00\$cp2\$txtOtherPartyLocalCountry"]');
        this.localTelInput = page.locator('input[name="ctl00\$cp2\$txtOtherPartyLocalPhone"]');
        this.localFaxInput = page.locator('input[name="ctl00\$cp2\$txtOtherPartyLocalFax"]');
        this.localMobileInput = page.locator('input[name="ctl00\$cp2\$txtOtherPartyLocalMobile"]');
        this.localEmailInput = page.locator('input[name="ctl00\$cp2\$txtOtherPartyLocalEmail"]');
        this.localFirstNameInput = page.locator('input[name="ctl00\$cp2\$txtOtherPartyLocalFirstName"]');
        this.localLastNameInput = page.locator('input[name="ctl00\$cp2\$txtOtherPartyLocalLastName"]');
        this.localNationalityInput = page.locator('input[name="ctl00\$cp2\$txtOtherPartyLocalNationality"]');
        this.dhlAccountInput = page.locator('input[name="ctl00\$cp2\$txtOtherPartyAccountDetailsDhlAcc"]');
        this.vatInput = page.locator('input[name="ctl00\$cp2\$txtOtherPartyAccountDetailsVatNo"]');
        this.customsIdInput = page.locator('input[name="ctl00\$cp2\$txtOtherPartyCustomsID"]');
        this.customsReferenceInput = page.locator('input[name="ctl00\$cp2\$txtOtherPartyAccountDetailsCustRef"]');
        this.importedIdInput = page.locator('input[name="ctl00\$cp2\$txtOtherPartyAccountDetailsImporterId"]');
        this.instructionsInput = page.locator('textarea[name="ctl00\$cp2\$txtOtherPartyAccounDetailsInstructions"]');
        this.customerLookupButton = page.locator('button[role="button"]:has-text("Click to select a list of related party.")');
        this.customerLookup = new JQueryCustomerLookupPopup(page.locator('#OtherPartyCustomerLookup'));
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