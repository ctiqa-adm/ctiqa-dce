import { Locator, Page } from "@playwright/test";
import { ShipmentsDetailPageInfoTab as ShipmentsDetailsPageInfoTab } from "./ShipmentDetailsPageInfoTab";
import { ShipmentDetailsPageOtherInfoTab } from "./ShipmentDetailsPageOtherInfoTab";
import { ShipmentDetailsPageShipperTab } from "./ShipmentDetailsPageShipperTab";

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

    constructor(page: Page) {
        this.page = page;
        this.infoTab = new ShipmentsDetailsPageInfoTab(page);
        this.otherInfoTab = new ShipmentDetailsPageOtherInfoTab(page);
        this.shipperTab = new ShipmentDetailsPageShipperTab(page);
        this.doneButton = page.locator('#btnDone');
        this.saveButton = page.locator('#btnSave');
        this.cancelButton = page.locator('#cp2_btnCancel');
        this.prevButton = page.locator('#btnPrevious');
        this.nextButton = page.locator('#btnNext');
    }

    async cancel() {
        await this.cancelButton.click();
        await this.page.waitForNavigation();
    }

    async done() {
        await this.doneButton.click();
        await this.page.waitForNavigation();
    }

    async next() {
        await this.nextButton.click();
        await this.page.waitForNavigation();
    }

    async prev() {
        await this.prevButton.click();
        await this.page.waitForNavigation();
    }
}