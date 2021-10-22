---
title: Cart Price Rules listing
weight: 1
---

# Catalog > Discounts > Cart Rules
It is an UI (user interface) where the user can view all the cart rules that has been created.<br>
![Cart Rules](/static/img/cart-rules-listing.png)

## The UI elements of the listing page and Filtering funcionalities
By default, text input fields and date picker widgets are set to empty statuses.

- **New cart rule** can be added by clicking the (+) Add new cart rule, or smaller (+) in the listing table
- **Cart rules and numbering** - indication, how many rules are there in this listing.
- **ID field** - field is set for cart rule ID number, in order to find the appropriate rule and filter it out.
- **Name** - input field option, in order to find the appropriate cart rule name and filter it out.
- **Priority** - this option can manage the priority of the cart rule that can be used. For example, it can be set by the higher priority rule with 1 and less higher priority rule by typing 2.
- **Code** - unique indicator of the cart rule. Prestashop can generate the rule by automatic generator, by clicking the Generate button, or it can be typed with the code as you like. So it can be filtered by typing the cart rule code here.
- **Quantity** - it can be managed by the number of the cart rules in total, that customers can use.
- **Expiration date** - it can be managed by the expiration dates from starting till begining, if there is need to filter the existance time for your cart rule.
- **Status** - it can be filtered like the Enabled - Yes or Disabled - No - cart rule statuses. Additionaly, there is a shortcut as the statuses can be triggered on the Cart rules table by clicking on green checkbox, for example, if it is Enabled - the status will become Disabled, and once it is clicked again - status becomes Enabled.
- **Search** - it is execution of the search action in filtering
- **Checkboxes** can be used, if there is need to manage rules separately and use for example Bulk Actions for adjusting the rule.

## Bulk Actions
![Bulk Actions](/static/img/bulk-actions.png)

When there are multiple cart rules created, you can manage them and configure the main actions by using Bulk Actions button. <br>

- **Select All** - option to select all the listing items in Cart rules list
- **Unselect All** - option to unselect all the listing items in Cart rules list
- **Enable selection** - after selection of the specific multiple Cart rules, it can be enabled by one click
- **Disable selection** - after selection of the specific multiple Cart rules, it can be disabled by one click
- **Delete selected** - after selecting the specific multiple Cart rules, it can be a deletion from the listing by one click

## Edit
- **Edit** - cart rule can be edited separately by clicking Edit, and then deleting it by clicking the arrow button near Edit > Delete.

## Notifications
When navigating to Cart Rules listing page, there will be Bulk Action cklickable options. If there is nothing selected in Bulk Actions, and action is executed, there will be an instant response in User Interface with the error notification message. The default message will be:<br>

"You must select at least one item to perform a bulk action. "

If deletion of the one of the Cart Rules are executed, there is an instant response in the User Inteface. The default message will be:<br>

"Successful deletion."

And if multiple selections were executed, the default message would be:<br>

"The selection has been successfully deleted. "

## Multistore 
All these settings and input fields can be separately managed by Multistore functionality in Prestashop. [Learn more.](https://github.com/PrestaShop/prestashop-specs/blob/master/content/1.7/back-office/shop-parameters/general/maintenance.md#multistore-behavior)
