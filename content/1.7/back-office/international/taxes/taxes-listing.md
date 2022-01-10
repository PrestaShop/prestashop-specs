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
- **Recommended Modules and Services** - redirects to recommended modules and services page.
- **Help** - a side-bar with the helpful information, how to navigate in this page.
- **Tabs: Taxes and Tax Rules** - navigation tabs for taxes and tax rules.

## Middle elements - Tax table

- **Taxes** - table title with the total taxes in the list.
- **Numeric value** - total sum of shopping taxes identified.
- **Export icon** - when clicked, a file is generated with all **displayed** taxes from the data list in CSV format.
- **Refresh** - once clicked, the whole page reloads to display the latest data.

### Bulk Actioning

Bulk action dropdown is disabled by default. Once some of the tax items are selected in the listing, bulk action dropdown becomes active. Dropdown actionis are containing:<br>

- **Enable selection** - enables the certain Tax 
- **Disable selection** - disables the certain Tax
- **Delete selected** - deletes the certain Tax

### Filtering

- **ID** - inpud field, for searching and filtering specific Tax by ID
- **Name** - input field, for searching and filtering specifig Tax by name
- **Rate** - input field, for searching and filtering specifig Tax by rate
- **Enabled** - dropdown element, for arranging the Taxes by enabled or disabled
- **Search button** - executes the filtering action, shows the results
- **Reset** - resets the filtering, shows all the unfiltered Taxes

### Tax listing

- **Number** - specific Tax ID in numeric value
- **Name** - specific Tax ID
- **Rate** - specific Tax rate in numeric value
- **Enabled or Disabled switch toggle button** - switching the toggle button Enables or Disables specific Tax 
- **Edit (pen icon)** - allows to edit specific Tax properties, after redirercting to the Edit interface
- **Three-dot menu** - Tax deletion

### Pagination

- **Page number input** - function that displays the desired page number of the listing, after inputting number and pressing Enter.
- **Vewing indicator text** - text, indicating what pages the user is seeing
- **Items per pag**e - dropdown with the numeric values, how much items can be shown in listing:
  - 10
  - 20
  - 50
  - 100

## Tax options

- **Enable tex** - toggle switch button, enabling or disabling Tax showing and calculations on the market in Prestashop items. By default it is enabled.
- **Display tax in the shopping cart** - toggle switch button, enabling or disabling Tax showing in the Cart. By default ir is disabled.
- **Based on** - dropdown element to choose from where and what location should the Taxes calculate. Possible values are **Invoice Address** and **Delivery Address**. By default, there is Invoice address value selected.
- **Use ecotax** - toggle switch button, controling the ecotaxes availability. Enabling the ecotaxes, creates additional field in Pricing area in Product Page editing. By default, the ecotaxes are disabled.
- **Ecotax** - if _Use ecotax_ is enabled, this _Ecotax_ dropdown field appears. There can be certain ecotax and range set from the dropdown. This field becomes mandatory.
- **Save** - CTA button saving the Tax configuration
