import { test, expect } from '@playwright/test';
import { LogInPage } from '../pages/LoginPage';
import { ShipmentGridPage } from '../pages/ShipmentGridPage';

test.describe('shipment details consignee tab', () => {
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
    await shipmentDetailsPage.consigneeTab.selectTab();
    await shipmentDetailsPage.consigneeTab.openCustomerLookup();
    // check if the filters are type="search"
    expect(await shipmentDetailsPage.consigneeTab.customerLookupPopup.nameInput.getAttribute('type')).toBe('search');
    expect(await shipmentDetailsPage.consigneeTab.customerLookupPopup.addressLine1Input.getAttribute('type')).toBe('search');
    expect(await shipmentDetailsPage.consigneeTab.customerLookupPopup.dutyAccountNumberInput.getAttribute('type')).toBe('search');
    expect(await shipmentDetailsPage.consigneeTab.customerLookupPopup.vatInput.getAttribute('type')).toBe('search');
    expect(await shipmentDetailsPage.consigneeTab.customerLookupPopup.postalCodeInput.getAttribute('type')).toBe('search');
    expect(await shipmentDetailsPage.consigneeTab.customerLookupPopup.countryInput.getAttribute('type')).toBe('search');
    expect(await shipmentDetailsPage.consigneeTab.customerLookupPopup.customsIdInput.getAttribute('type')).toBe('search');
  });
});