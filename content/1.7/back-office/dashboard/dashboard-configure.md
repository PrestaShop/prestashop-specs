---
title: Dashboard Configure
weight: 1
---

# Dashboard configure

3 blocks are displayed on this page:

 - **Average bank fees per payment method**
 - **Average shipping fees per shipping method**
 - **Other settings**

## Demo mode

 - **Demo mode**: This toggle allows to enable or disable fake data. By default, it is disabled. When enabled, fake data are used. When disabled, the real store's data are used. The store's data are gathered by PrestaShop's statistics system.
The following tooltip is displayed: "This mode displays sample data so you can try your dashboard without real numbers."

## Average bank fees per payment method

4 default fields are displayed in this block, if more payment methods are added to the shop, they will be displayed additionally here:

 - **Bank transfer** - An help text is displayed under the field: "Choose a fixed fee for each order placed in USD% with Bank transfer." Only numbers are allowed in this field. On the right of this field, the default currency (defined in International > Localization) is displayed. If the field is invalid and when trying to save, the following error message is displayed: "The Bank transfer field is invalid."
 - **Bank transfer** - An help text is displayed under the field: "Choose a variable fee for each order placed in USD% with Bank transfer. It will be applied on the total paid with taxes." Only numbers are allowed in this field. On the right of this field, a percentage sign is displayed. If the field is invalid and when trying to save, the following error message is displayed: "The Bank transfer field is invalid.".
 - **Payments by check** - An help text is displayed under the field: "Choose a fixed fee for each order placed in USD% with Payments by check.". Only numbers are allowed in this field. On the right of this field, the default currency (defined in International > Localization) is displayed. If the field is invalid and when trying to save, the following error message is displayed: "The Payments by check field is invalid."
 - **Payments by check** - An help text is displayed under the field: "Choose a variable fee for each order placed in USD% with Payments by check. It will be applied on the total paid with taxes.". Only numbers are allowed in this field. On the right of the field, a percentage sign is displayed. If the field is invalid and when trying to save, the following error message is displayed: "The Payments by check field is invalid."


### Call to action

 - **Save** - When pressed and if there is no error, the following success message is displayed: "The settings have been successfully updated." and the form is saved.

## Average shipping fees per shipping method

The following information message is displayed: "Method: Indicate the percentage of your carrier margin. For example, if you charge $10 of shipping fees to your customer for each shipment, but you really pay $4 to this carrier, then you should indicate "40" in the percentage field."

2 fields with the name of the carrier and for each enabled carrier are displayed in this block:

 - **_Name of the carrier_** - An help text below the field is displayed: "For the carrier named _Name of the carrier_ indicate the domestic delivery costs in percentage of the price charged to customers.". On the right of this field, a percentage sign is displayed. Only numbers are allowed in this field. If the field is invalid and when trying to save, the following error message is displayed: "The _Name of the carrier_ field is invalid."
 - **_Name of the carrier_** - An help text below the field is displayed: "For the carrier named _name of the carrier_, indicate the overseas delivery costs in percentage of the price charged to customers.". On the right of this field, a percentage sign is displayed. Only numbers are allowed in this field. If the field is invalid and when trying to save, the following error message is displayed: "The _Name of the carrier_ field is invalid."

### Call to action

 - **Save** - When pressed and if there is no error, the following success message is displayed: "The settings have been successfully updated." and the form is saved.

## Other settings

 - **Average gross margin percentage** - An help text is displayed under the field: "You should calculate this percentage as follows: ((total sales revenue) - (cost of goods sold)) / (total sales revenue) * 100. This value is only used to calculate the Dashboard approximate gross margin, if you do not specify the wholesale price for each product.". On the right of the field, a percentage sign is displayed. Only numbers are allowed in this field. If the field is invalid and when trying to save, the following error message is displayed: "The Average gross margin percentage field is invalid."
 - **Other fees per order** - An help text is displayed under the field: "You should calculate this value by making the sum of all of your additional costs per order.". On the right of this field, the default currency (defined in International > Localization) is displayed. Only numbers are allowed in this field. If the field is invalid and when trying to save, the following error message is displayed: "The Other fees per order field is invalid."

#### Call to action

 - **Save** - When pressed and if there is no error, the following success message is displayed: "The settings have been successfully updated." and the form is saved.
