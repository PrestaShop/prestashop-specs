---
title: Cart Price Rules listing
weight: 1
---

# Catalog > Discounts > Cart Rules
It is an UI (user interface) where the user can view all the cart rules that has been created.<br>
![image](https://github.com/PrestaShop/prestashop-specs/blob/355b25180bb99fae1592d62eeed7a286c884148f/static/img/cart-rules-listing.png)

## The UI elements of the listing page
- You can add new cart rule by clicking the (+) Add new cart rule, or smaller (+) in the listing table
- Cart rules and numbering - indication, how many rules are there in this listing.
- ID field - you can type the cart rule ID number, in order to find the appropriate rule and filter it out.
- Name - input field that you can type in, in order to find the appropriate cart rule name and filter it out.
- Priority - you can manage the priority of the cart rule that can be used. For example, you can set the higher priority rule with 1 and less higher priority rule by typing 2.
- Code - unique indicator of the cart rule. If you want, Prestashop can generate the rule by automatic generator, by clicking the Generate button, or you can type and name the cart rule with the code as you like. So you can filter by typing the cart rule code here.
- Quantity - you can manage the number of the cart rules in total, that customers can use.
- Expiration date - you can manage the expiration dates from starting till begining, if you want to filter the existance time for your cart rule.
- Status - you can filer the Enabled - Yes or Disabled - No cart rule statuses.
- Search - execution of the search action in filtering
- You can use checkboxes, if you manage to select the rule separately and use for example Bulk Actions for managing the rule.

## Bulk Actions
![image](https://github.com/PrestaShop/prestashop-specs/blob/355b25180bb99fae1592d62eeed7a286c884148f/static/img/bulk-actions.png)

When there are multiple cart rules created, you can manage them and configure the main actions by using Bulk Actions button. <br>

- Select All - you can manage to select all the listing items in Cart rules list
- Unselect All - you can manage to unselect all the listing items in Cart rules list
- Enable selection - after you selected the specific multiple Cart rules, you can enable them by one click
- Disable selection - after you selected the specific multiple Cart rules, you can disable them by one click
- Delete selected - after you selected the specific multiple Cart rules, you can delete them from the listing by one click

## Edit
- Edit - You can edit the cart rule separately by clicking Edit, and then if you like to delete it just click the arrow button near Edit > Delete.

## Multistore 
All these settings can be separately managed by Multistore functionality in Prestashop. [Learn more.](https://github.com/PrestaShop/prestashop-specs/blob/master/content/1.7/back-office/shop-parameters/general/maintenance.md#multistore-behavior)


## Multistore 
All these settings and input fields can be separately managed by Multistore functionality in Prestashop. [Learn more.](https://github.com/PrestaShop/prestashop-specs/blob/master/content/1.7/back-office/shop-parameters/general/maintenance.md#multistore-behavior)
