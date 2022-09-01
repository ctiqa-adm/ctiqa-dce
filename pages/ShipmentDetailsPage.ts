import { Locator, Page } from "@playwright/test";
import { ShipmentDetailsPageConsigneeTab } from "./ShipmentDetailsPageConsigneeTab";
import { ShipmentsDetailPageInfoTab as ShipmentsDetailsPageInfoTab } from "./ShipmentDetailsPageInfoTab";
import { ShipmentDetailsPageOtherInfoTab } from "./ShipmentDetailsPageOtherInfoTab";
import { ShipmentDetailsPageOtherPartyTab } from "./ShipmentDetailsPageOtherPartyTab";
import { ShipmentDetailsPageShipperTab } from "./ShipmentDetailsPageShipperTab";

/** Represents the Shipment Details Page. */
export class ShipmentDetailsPage {
    readonly page: Page;
    readonly doneButton: Locator;
    readonly saveButton: Locator;
    readonly cancelButton: Locator;
    readonly prevButton: Locator;
    readonly nextButton: Locator;
    readonly infoTab: ShipmentsDetailsPageInfoTab;
    readonly otherInfoTab: ShipmentDetailsPageOtherInfoTab;
    readonly shipperTab: ShipmentDetailsPageShipperTab;
    readonly consigneeTab: ShipmentDetailsPageConsigneeTab;
    readonly otherPartyTab: ShipmentDetailsPageOtherPartyTab;

    constructor(page: Page) {
        this.page = page;
        this.infoTab = new ShipmentsDetailsPageInfoTab(page);
        this.otherInfoTab = new ShipmentDetailsPageOtherInfoTab(page);
        this.shipperTab = new ShipmentDetailsPageShipperTab(page);
        this.consigneeTab = new ShipmentDetailsPageConsigneeTab(page);
        this.otherPartyTab = new ShipmentDetailsPageOtherPartyTab(page);
        this.doneButton = page.locator('#btnDone');
        this.saveButton = page.locator('#btnSave');
        this.cancelButton = page.locator('#cp2_btnCancel');
        this.prevButton = page.locator('#btnPrevious');
        this.nextButton = page.locator('#btnNext');
    }

    /** Clicks the Cancel button. */
    async cancel() {
        await this.cancelButton.click();
        await this.page.waitForNavigation();
    }

    /** Clicks the Done button. */
    async done() {
        await this.doneButton.click();
        await this.page.waitForNavigation();
    }

    /** Clicks the Next button. */
    async next() {
        await this.nextButton.click();
        await this.page.waitForNavigation();
    }

    /** Clicks the Prev button. */
    async prev() {
        await this.prevButton.click();
        await this.page.waitForNavigation();
    }
}