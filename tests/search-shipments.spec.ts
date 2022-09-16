import { test, expect } from '@playwright/test';
import { LogInPage } from '../pages/LoginPage';
import { ShipmentGridPage } from '../pages/ShipmentGridPage';

test.describe('shipment grid tests', () => {
  test.beforeEach(async ({ page }) => {
    const logInPage = new LogInPage(page);
    await logInPage.goto();
    await logInPage.loginDefault();
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('default search shipment filters - DCEGBL-45598', async ({ page }) => {
    const shipmentGridPage = new ShipmentGridPage(page);
    expect(await shipmentGridPage.readyForEntryInput.inputValue()).toBe('');
    expect(await shipmentGridPage.categoryInput.inputValue()).toBe('');
    expect(await shipmentGridPage.statusInput.inputValue()).toBe('');
    expect(await shipmentGridPage.movementNumberInput.inputValue()).toBe('');
    expect(await shipmentGridPage.arrivalDateInput.inputValue()).toBe('');
    expect(await shipmentGridPage.tdocNumberInput.inputValue()).toBe('');
    expect(await shipmentGridPage.hawbInput.inputValue()).toBe('');
    expect(await shipmentGridPage.userIdInput.inputValue()).toBe('');
    expect(await shipmentGridPage.gatewayInput.inputValue()).toBe('All');
    expect(await shipmentGridPage.consigneeNameInput.inputValue()).toBe('');
    expect(await shipmentGridPage.customsIdInput.inputValue()).toBe('');
    // match to value Entry Status
    expect(await shipmentGridPage.filter1Input.inputValue()).toMatch(/Cormant.Dce.Shipments.Service.Searching.ShipmentEntryStatusField, Cormant.Dce/);
    expect(await shipmentGridPage.filter1OperatorInput.inputValue()).toBe('Equals');
    // match to value of Entry Liquidated
    expect(await shipmentGridPage.filter1DropdownInput.inputValue()).toBe('12');
    expect(await shipmentGridPage.filter2Input.inputValue()).toBe('');
    expect(await shipmentGridPage.filter2OperatorInput.inputValue()).toBe('');
  });

  test('search shipments', async ({ page }) => {
    const shipmentGridPage = new ShipmentGridPage(page);
    await shipmentGridPage.setFilter1('Status', 'Not Equals', 'RLSE');
    await shipmentGridPage.search();
    await shipmentGridPage.gotoShipmentDetailsByIndex(0);
  });


  test('sort search shipment results', async ({ page }) => {
    const shipmentGridPage = new ShipmentGridPage(page);
    await shipmentGridPage.setFilter1('Status', 'Not Equals', 'RLSE');
    await shipmentGridPage.search();
    await shipmentGridPage.sort('HWB');

    // check if the values of the column is sorted
    // read the values of the HWB column
    const hwbValues1 = await shipmentGridPage.readColumnValues('HWB');
    // check if the values in the grid are sorted
    const sortedValues = [...hwbValues1];
    sortedValues.sort();
    expect(hwbValues1).toEqual(sortedValues);

    // go to the details page of the 1st shipment
    const shipmentDetailsPage = await shipmentGridPage.gotoShipmentDetailsByIndex(0);
    await shipmentDetailsPage.cancel();

    // check if the values of the column is sorted
    const hwbValues2 = await shipmentGridPage.readColumnValues('HWB');
    expect(hwbValues2).toEqual(sortedValues);
  });
});