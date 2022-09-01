import { Locator, Page } from "@playwright/test";

/** Represents the Shipment Details Info tab. */
export class ShipmentsDetailPageInfoTab {
    readonly page: Page;
    readonly tabHeader: Locator;
    readonly hawbInput: Locator;
    readonly movementNumberInput: Locator;
    readonly consigneeName: Locator;
    readonly tdocInput: Locator;
    readonly movementDepartureDateInput: Locator;
    readonly movementArrivalDateInput: Locator;
    readonly originServiceCodeInput: Locator;
    readonly originCountryCodeInput: Locator;
    readonly destinationServiceCodeInput: Locator;
    readonly destinationCountryCodeInput: Locator;
    readonly grossWeightInput: Locator;
    readonly sdPiecesInput: Locator;
    readonly manifestPiecesInput: Locator;
    readonly arrivedPiecesInput: Locator;
    readonly productCodeInput: Locator;
    readonly dhlUniqueIdInput: Locator;
    readonly shipmentReferenceInput: Locator;
    readonly shipmentDutyAccount: Locator;
    readonly shipmentDecValCurrencyCode: Locator;
    readonly shipmentDecValAmount: Locator;
    readonly shipmentInvValCurrencyCode: Locator;
    readonly shipmentInvValAmount: Locator;
    readonly shipmentHawbValCurrencyCode: Locator;
    readonly shipmentHawbValAmount: Locator;
    readonly shipmentInsValCurrenyCode: Locator;
    readonly shipmentInsValAmount: Locator;
    readonly shipmentCustInsValCurrencyCode: Locator;
    readonly shipmentCustInsValAmount: Locator;
    readonly shipmentFreightValCurrencyCode: Locator;
    readonly shipmentFreightValAmount: Locator;
    readonly shipmentCustFreightValCurrencyCode: Locator;
    readonly shipmentCustFreightValAmount: Locator;
    readonly shipmentOthDutiableValCurrencyCode: Locator;
    readonly shipmentOthDutiableValAmount: Locator;
    readonly shipmentOthNonDutiableValCurrencyCode: Locator;
    readonly shipmentOthNonDutiableValAmount: Locator;
    readonly shipmentMonAmountValCurrencyCode: Locator;
    readonly shipmentMonAmountValAmount: Locator;
    readonly incotermInput: Locator;
    readonly incotermPLInput: Locator;
    readonly dhlServiceInput: Locator;
    readonly packageTypeInput: Locator;
    readonly categoryInput: Locator;
    readonly statusInput: Locator;
    readonly entryTypeInput: Locator;
    readonly entryStatusInput: Locator;
    readonly manifestStatus: Locator;
    readonly tradingTransType: Locator;
    readonly shipTradingType: Locator;
    readonly postClearanceInput: Locator;
    readonly btoInput: Locator;
    readonly readyForEntryInput: Locator;
    readonly papwerworkInput: Locator;
    readonly trsInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.tabHeader = page.locator('#cp2_ShipmentInfoTabHeader');
        this.hawbInput = page.locator('input[name="ctl00\$cp2\$txtShipmentIDHawb"]');
        this.movementNumberInput = page.locator('input[name="ctl00\$cp2\$txtMovement"]');
        this.consigneeName = page.locator('input[name="ctl00\$cp2\$txtConsigneeConsignorName"]');
        this.tdocInput = page.locator('input[name="ctl00\$cp2\$txtShipmentInfoTDoc"]');
        this.movementDepartureDateInput = page.locator('input[name="ctl00\$cp2\$txtShipmentInfoDeparture"]');
        this.movementArrivalDateInput = page.locator('input[name="ctl00\$cp2\$txtShipmentInfoArrival"]');
        this.originServiceCodeInput = page.locator('input[name="ctl00\$cp2\$txtShipmentInfoOrg"]')
        this.originCountryCodeInput = page.locator('input[name="ctl00\$cp2\$txtShipmentInfoCountryOrg"]');
        this.destinationServiceCodeInput = page.locator('input[name="ctl00\$cp2\$txtShipmentInfoDest"]');
        this.destinationCountryCodeInput = page.locator('input[name="ctl00\$cp2\$txtShipmentInfoCountryDest"]');
        this.grossWeightInput = page.locator('input[name="ctl00\$cp2\$txtShipmentInfoGrsWt"]');
        this.sdPiecesInput = page.locator('input[name="ctl00\$cp2\$txtShipmentInfoSD"]');
        this.manifestPiecesInput = page.locator('input[name="ctl00\$cp2\$txtShipmentInfoMan"]');
        this.arrivedPiecesInput = page.locator('input[name="ctl00\$cp2\$txtShipmentInfoArr"]');
        this.productCodeInput = page.locator('input[name="ctl00\$cp2\$txtShipmentInfoProductCode"]');
        this.dhlUniqueIdInput = page.locator('input[name="ctl00\$cp2\$txtShipmentInfoDhlUniqueId"]');
        this.shipmentReferenceInput = page.locator('textarea[name="ctl00\$cp2\$txtShipmentInfoReference"]');
        this.shipmentDutyAccount = page.locator('input[name="ctl00\$cp2\$txtShipmentInfoDutyAccount"]');
        this.shipmentDecValCurrencyCode = page.locator('input[name="ctl00\$cp2\$txtShipmentInfoLCYValCurrency"]');
        this.shipmentDecValAmount = page.locator('input[name="ctl00\$cp2\$txtShipmentInfoLCYValValue"]');
        this.shipmentInvValCurrencyCode = page.locator('input[name="ctl00\$cp2\$txtShipmentInfoInvCurrency"]');
        this.shipmentInvValAmount = page.locator('input[name="ctl00\$cp2\$txtShipmentInfoInvCurrency"]');
        this.shipmentHawbValCurrencyCode = page.locator('input[name="ctl00\$cp2\$txtShipmentInfoInvCurrency"]');
        this.shipmentHawbValAmount = page.locator('input[name="ctl00\$cp2\$txtShipmentInfoHwbValue"]');
        this.shipmentInsValCurrenyCode = page.locator('input[name="ctl00\$cp2\$txtShipmentInfoInsCurrency"]');
        this.shipmentInsValAmount = page.locator('input[name="ctl00\$cp2\$txtShipmentInfoInsValue"]');
        this.shipmentCustInsValCurrencyCode = page.locator('input[name="ctl00\$cp2\$txtShipmentInfoCustomerInsuranceCurrency"]');
        this.shipmentCustInsValAmount = page.locator('input[name="ctl00\$cp2\$txtShipmentInfoCustomerInsuranceValue"]');
        this.shipmentFreightValCurrencyCode = page.locator('input[name="ctl00\$cp2\$txtShipmentInfoFrtCurrency"]');
        this.shipmentFreightValAmount = page.locator('input[name="ctl00\$cp2\$txtShipmentInfoFrtValue"]');
        this.shipmentCustFreightValCurrencyCode = page.locator('input[name="ctl00\$cp2\$txtShipmentInfoCustFrtCurrency"]');
        this.shipmentCustFreightValAmount = page.locator('input[name="ctl00\$cp2\$txtShipmentInfoCustFrtValue"]');
        this.shipmentOthDutiableValCurrencyCode = page.locator('input[name="ctl00\$cp2\$txtShipmentInfoOtherDutiableCurrency"]');
        this.shipmentOthDutiableValAmount = page.locator('input[name="ctl00\$cp2\$txtShipmentInfoOtherDutiableValue"]');
        this.shipmentOthNonDutiableValCurrencyCode = page.locator('input[name="ctl00\$cp2\$txtShipmentInfoOtherNonDutiableCurrency"]');
        this.shipmentOthNonDutiableValAmount = page.locator('input[name="ctl00\$cp2\$txtShipmentInfoOtherNonDutiableValue"]');
        this.shipmentMonAmountValCurrencyCode = page.locator('input[name="ctl00\$cp2\$txtShipmentInfoMonAmtCurrency"]');
        this.shipmentMonAmountValAmount = page.locator('input[name="ctl00\$cp2\$txtShipmentInfoMonAmtValue"]');
        this.incotermInput = page.locator('select[name="ctl00\$cp2\$ddlShipmentInfoIncoterms"]');
        this.incotermPLInput = page.locator('input[name="ctl00\$cp2\$txtShipmentInfoIncotermsPl"]');
        this.dhlServiceInput = page.locator('select[name="ctl00\$cp2\$ddlShipmentInfoDhlServices"]');
        this.packageTypeInput = page.locator('select[name="ctl00\$cp2\$ddlShipmentInfoPkgType"]');
        this.categoryInput = page.locator('select[name="ctl00\$cp2\$ddlShipmentInfoCat"]');
        this.statusInput = page.locator('select[name="ctl00\$cp2\$ddlShipmentInfoStatus"]');
        this.entryTypeInput = page.locator('select[name="ctl00\$cp2\$ddlShipmentInfoEntryType"]');
        this.entryStatusInput = page.locator('select[name="ctl00\$cp2\$ddlShipmentInfoEntryStatus"]');
        this.manifestStatus = page.locator('input[name="ctl00\$cp2\$txtShipmentInfoManifestStatus"]');
        this.tradingTransType = page.locator('select[name="ctl00\$cp2\$ddlShipmentInfoTradingTransType"]');
        this.shipTradingType = page.locator('select[name="ctl00\$cp2\$ddlShipmentInfoShipTradingType"]');
        this.postClearanceInput = page.locator('text=Post Clrnce');
        this.btoInput = page.locator('text=BTO');
        this.readyForEntryInput = page.locator('text=Ready for Entry');
        this.papwerworkInput = page.locator('text=PPWK');
        this.trsInput = page.locator('text=TRS');
    }

    /** Selects the Shipment Details Info tab. */
    async selectTab(): Promise<void> {
        await this.tabHeader.click();
    }
}