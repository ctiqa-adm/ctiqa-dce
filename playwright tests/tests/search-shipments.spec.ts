import { test, expect } from '@playwright/test';
import { LogInPage } from '../pages/LoginPage';
import { ShipmentDetailsPage } from '../pages/ShipmentDetailsPage';
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

  test('search shipments', async ({ page }) => {
    const shipmentGridPage = new ShipmentGridPage(page);
    await shipmentGridPage.search();
    await shipmentGridPage.gotoShipmentDetailsByIndex(0);
  });


  test('sort search shipment results', async ({ page }) => {
    const shipmentGridPage = new ShipmentGridPage(page);
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