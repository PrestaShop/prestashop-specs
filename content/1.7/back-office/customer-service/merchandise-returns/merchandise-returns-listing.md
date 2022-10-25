---
title: Merchandise Returns listing
weight: 1
---

# SELL > Customers Service > Merchandise Returns

[Merchandise Returns UI](static/img/merchandise-returns-listing.png)

This UI is listed as 2 sections - _Merchandise Returns_ and _Merchandise return (RMA) options_ .

## Merchandise Returns listing

### Filtering section
- **ID** - the unique numeric value, describing the each Return. By default, the field is empty.
- **Order ID** - the numeric value, describing the exact Order, from where the Return will be executed. By default, the field is empty.
- **Status** - the alphabetic vaule, describing the Return status. By default, the field is empty.
- **Date issued** - the date and time widget, where the _From_ and _To_ date stamps can be configured.
- **Search CTA** - executes the searching action after the fields are set.

### Body section
- **ID** - the unique numeric value, describing the each Return. 
- **Order ID** - the numeric value, describing the exact Order, from where the Return will be executed.
- **Status** - the alphabetic vaule, describing the Return status. Statuses can be created separately in Prestashop.
- **Date issued** - the date and time widget, where the _From_ and _To_ date stamps can be configured.

## Merchandise return (RMA) options 

- **Enable returns** - toggle switch, where Enabling or Disabling the Retuns can be set. The Returns will be available for the customers of the shop from their My Account page. By default the function is set to Disabled.
- **Time limit of validity** - input field, where customers can fill the numeric value, how many days after the delivery date does the customer have to return a product. By default the numeric value is set to 14.
- **Returns prefix** - specific alphabetic value, where prefix can be used for a return name in generated PDF. The prefix can be set for each different language in Prestashop. By default, it is set to _#RE_.

## Notifications messages after form submission in UI

After successful form savin attempt, Prestashop prompts:<br>
_The settings have been successfully updated._

## Multistores functionality

Merchandise Returns functionality is separately maintained by each separate multistore shop. It can be Enabled or Disabled in different multistores. It means, that all the Merchandise Returns and Orders are managed separately in each multistore, by switching the Multistore Switcher to the appropriate shop. All Shops view context is also available, it is comfortable to see all the Settings and Merchandise Returns in one list from all the shops.
