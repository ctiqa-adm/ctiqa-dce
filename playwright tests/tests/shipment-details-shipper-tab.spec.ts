import { test, expect } from '@playwright/test';
import { LogInPage } from '../pages/LoginPage';
import { ShipmentGridPage } from '../pages/ShipmentGridPage';

test.describe('shipment details shipper tab', () => {
  test.beforeEach(async ({ page }) => {
    const logInPage = new LogInPage(page);
    await logInPage.goto();
    await logInPage.loginDefault();
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('customer search lookup filters - DCEGBL-46642', async ({ page }) => {
    const shipmentGridPage = new ShipmentGridPage(page);
    await shipmentGridPage.setFilter1('Status', 'Not Equals', 'RLSE');
    await shipmentGridPage.search();
    // go to shipment details page
    const shipmentDetailsPage = await shipmentGridPage.gotoShipmentDetailsByIndex(0);
    // open shipper customer lookup popup
    await shipmentDetailsPage.shipperTab.selectTab();
    await shipmentDetailsPage.shipperTab.openCustomerLookup();
    // check if the filters are type="search"
    expect(await shipmentDetailsPage.shipperTab.customerLookupPopup.nameInput.getAttribute('type')).toBe('search');
    expect(await shipmentDetailsPage.shipperTab.customerLookupPopup.addressLine1Input.getAttribute('type')).toBe('search');
    expect(await shipmentDetailsPage.shipperTab.customerLookupPopup.dutyAccountNumberInput.getAttribute('type')).toBe('search');
    expect(await shipmentDetailsPage.shipperTab.customerLookupPopup.vatInput.getAttribute('type')).toBe('search');
    expect(await shipmentDetailsPage.shipperTab.customerLookupPopup.postalCodeInput.getAttribute('type')).toBe('search');
    expect(await shipmentDetailsPage.shipperTab.customerLookupPopup.countryInput.getAttribute('type')).toBe('search');
    expect(await shipmentDetailsPage.shipperTab.customerLookupPopup.customsIdInput.getAttribute('type')).toBe('search');
  });
});