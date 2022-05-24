---
title: Taxes Listing page
weight: 1
---
# IMPROVE > International > Taxes

![Taxes](static/img/international-taxes.png)

This page stores all the available Tax titles in Prestashop application.

## Top elements

- **Taxes** - page title.
- **Add new tax CTA button** - redirects to tax creating and editing page.
- **Help** - a side-bar with the helpful information, how to navigate in this page.
- **Tabs: Taxes and Tax Rules** - navigation tabs for taxes and tax rules.

## Middle elements - Tax table

- **Taxes** - table title with the total taxes in the list.
- **Numeric value** - total sum of shopping taxes identified.
- **Export icon** - when clicked, a file is generated with all **displayed** taxes from the data list in CSV format.
- **Refresh** - once clicked, the whole page reloads to display the latest data.

### Bulk Actioning

Bulk action dropdown is disabled by default. Once some of the tax items are selected in the listing, bulk action dropdown becomes active. Dropdown actions contain:<br>

- **Enable selection** - enables the selected taxes.
- **Disable selection** - disables the selected taxes.
- **Delete selected** - deletes the selected taxes.

### Filtering

- **ID** - input field, for searching and filtering specific Tax by ID.
- **Name** - input field, for searching and filtering specific Tax by name.
- **Rate** - input field, for searching and filtering specific Tax by rate.
- **Enabled** - dropdown element, for arranging the Taxes by enabled or disabled.
- **Search button** - executes the filtering action, shows the results.
- **Reset** - appears when a search has been executed. Resets the filtering, shows all the unfiltered Tax Rules.

### Tax listing

- **Number** - specific Tax ID in numeric value.
- **Name** - specific Tax ID.
- **Rate** - specific Tax rate in numeric value.
- **Enabled or Disabled switch toggle button** - switching the toggle button Enables or Disables specific Tax.
- **Edit button** - allows editing specific Tax properties, after redirecting to the Edit interface.
- **Three-dot menu** - Tax deletion.

### Pagination

- **Page number input** - function that displays the desired page number of the listing, after inputting the number and pressing Enter.
- **Viewing indicator text** - text, indicating what pages the user is seeing.
- **Items per page** - dropdown with the numeric values, how many items can be shown in listing:
  - 10
  - 20
  - 50
  - 100

## Tax options table

- **Enable tax** - toggle switch button, enabling or disabling Tax showing and calculations on the market in Prestashop items. By default the toggle is enabled. The tax calculations are not showed in Category page view, but the Taxes are displayed in:
  - Product page.
  - Quick View pop-up.
  - Add-to-cart pop-up.
  - All checkout steps in the top-right products summary panel.
  - Order confirmation page in Order details.

- **Display tax in the shopping cart** - toggle switch button, enabling or disabling Tax showing in the Cart. By default it is disabled.
- **Based on** - drop-down list item to choose from which address the tax should be calculated. Possible values are **Invoice Address** and **Delivery Address**. By default, there is Invoice address value selected.
- **Use ecotax** - toggle switch button, controlling the ecotaxes availability. Enabling the ecotaxes, creates additional field in Pricing area in Product Page editing. By default, the ecotaxes are disabled.
- **Ecotax** - if _Use ecotax_ is enabled, this _Ecotax_ dropdown field appears. There can be certain ecotax and range set from the dropdown. This field becomes mandatory. After enabling Ecotaxes, the new input with Ecotaxes becomes available in each product editing page in Back-Office. Also, the Ecotax numeric value is displayed in Product Page, between the Product title and Quantity with CTA Add to cart interface elements.
- **Save** - CTA button saving the Tax configuration.

## Multistores compatibility

There is an information notification in Add or Edit Taxes interface - with the text _Note that this feature is available in all shops context only. It will be added to all your stores_ meaning that tax editing will be aligned the same with the all multistores and shop groups.

Multistores are not affected separately, while managing the Tax properties in Tax listings. It means, that customizing Tax for one country will impact all the Taxes for other shop groups and multistores. 

But the Tax Options table works differently - the settings can be saved separately for different multistores and shop groups.
