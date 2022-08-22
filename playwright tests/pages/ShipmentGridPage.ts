import test, { expect, Locator, Page } from "@playwright/test";
import { ShipmentDetailsPage } from "./ShipmentDetailsPage";

export class ShipmentGridPage {
    readonly page: Page;
    readonly readyForEntryInput: Locator;
    readonly categoryInput: Locator;
    readonly statusInput: Locator;
    readonly movementNumberInput: Locator;
    readonly arrivalDateInput: Locator;
    readonly tdocNumberInput: Locator;
    readonly hawbInput: Locator;
    readonly userIdInput: Locator;
    readonly gatewayInput: Locator;
    readonly consigneeNameInput: Locator;
    readonly customsIdInput: Locator;
    readonly filter1Input: Locator;
    readonly filter1Operator: Locator;
    readonly filter2Input: Locator;
    readonly filter2Operator: Locator;
    readonly searchButton: Locator;
    readonly clearButton: Locator;
    readonly searchResultsHeaderRow: Locator;
    readonly searchResultsRows: Locator;

    constructor(page: Page) {
        this.page = page;
        this.readyForEntryInput = page.locator('select[name="ctl00\$cp2\$SearchFilter\$ddlReadyForEntry"]');
        this.categoryInput = page.locator('select[name="ctl00\$cp2\$SearchFilter\$ddlCategories"]');
        this.statusInput = page.locator('select[name="ctl00\$cp2\$SearchFilter\$ddlStatus"]');
        this.movementNumberInput = page.locator('input[name="ctl00\$cp2\$SearchFilter\$txtMovementNumber"]');
        this.arrivalDateInput = page.locator('input[name="ctl00\$cp2\$SearchFilter\$txtArrivalDate"]');
        this.tdocNumberInput = page.locator('input[name="ctl00\$cp2\$SearchFilter\$txtTDoc"]');
        this.hawbInput = page.locator('input[name="ctl00\$cp2\$SearchFilter\$txtHawbNumbers"]');
        this.userIdInput = page.locator('input[name="ctl00\$cp2\$SearchFilter\$txtUserID"]');
        this.gatewayInput = page.locator('select[name="ctl00\$cp2\$SearchFilter\$ddlGateway"]');
        this.consigneeNameInput = page.locator('input[name="ctl00\$cp2\$SearchFilter\$txtCustomerName"]');
        this.customsIdInput = page.locator('input[name="ctl00\$cp2\$SearchFilter\$txtCustomsID"]');
        this.filter1Input = page.locator('select[name="ctl00\$cp2\$SearchFilter\$ddlFilter1"]');
        this.filter1Operator = page.locator('select[name="ctl00\$cp2\$SearchFilter\$ddlOperation1"]');
        this.filter2Input = page.locator('select[name="ctl00\$cp2\$SearchFilter\$ddlFilter2"]');
        this.filter2Operator = page.locator('select[name="ctl00\$cp2\$SearchFilter\$ddlOperation2"]');
        this.searchButton = page.locator('button:has-text("Show")');
        this.clearButton = page.locator('button:has-text("Clear")');
        this.searchResultsHeaderRow = page.locator('table.DHLGridViewDefault >> tr >> nth=0');
        this.searchResultsRows = page.locator('table.DHLGridViewDefault >> tr[data-shipmentid]');
    }

    /** Clicks the Clear button. */
    async clear(): Promise<void> {
        await this.clearButton.click();
    }

    /** Find the position of the column. */
    async findColumnIndex(columName: string) {
        const columnCount = await this.getColumnCount();
        for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
            const cell = this.searchResultsHeaderRow.locator('th').nth(columnIndex);
            const textContent = await cell.textContent() ?? ''
            if (textContent.trim() === columName) {
                return columnIndex;
            }
        }
        return -1;
    }

    /** Get the number of columns of the search grid. */
    async getColumnCount(): Promise<number> {
        return await this.searchResultsHeaderRow.locator('th').count();
    }

    getSearchResultRow(index: number): Locator {
        return this.searchResultsRows.nth(index);
    }

    /** Get the number of rows of the search grid. */
    async getSearchResultRowCount(): Promise<number> {
        return await this.searchResultsRows.count() ?? 0;
    }

    /**
     * Go to the Shipment Details Page.
     * @param index 
     */
    async gotoShipmentDetailsByIndex(index: number): Promise<ShipmentDetailsPage> {
        await this.getSearchResultRow(index).locator('a .actionLinks-View').click();
        return new ShipmentDetailsPage(this.page);
    }

    async readColumnValues(columnName: string): Promise<string[]> {
        const rowCount = await this.searchResultsRows.count() ?? 0;
        if (rowCount > 0) {
            const columnIndex = await this.findColumnIndex(columnName);
            if (columnIndex == -1) {
                return [];
            }

            const values: string[] = [];
            for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
                const value = await this.getSearchResultRow(rowIndex).locator('td').nth(columnIndex).textContent();
                values.push(value?.trim() ?? '');
            }
            return values;
        }

        return [];
    }

    /** Clicks the Search button. */
    async search(): Promise<void> {
        await this.searchButton.click();
        test.setTimeout(120000)
        await this.searchResultsHeaderRow.waitFor();
    }

    /** Sorts the shipment grid. */
    async sort(columnName: string): Promise<void> {
        // click the column header
        await this.searchResultsHeaderRow.locator('a', { hasText: columnName }).click();
        // wait for the column header to have the sorted icon
        const columnIndex = await this.findColumnIndex(columnName);
        this.searchResultsHeaderRow.locator(`th.sortascheaderstyle >> nth=${columnIndex}`).waitFor();
    }
}