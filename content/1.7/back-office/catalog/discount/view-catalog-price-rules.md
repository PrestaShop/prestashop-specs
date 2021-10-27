---
title: Catalog Price Rules
weight: 1
---

# Catalog > Discounts > Catalog Price Rules

![Catalog Price Rules](static/img/view-catalog-price-rules.png)

This page is the main User Interface (UI) page, of all the Prestashop's Catalog Price Rules in a one list-type of block. 

## User Story
As a merchant I need to be able to correctly create and edit discounts to my customers based on specific conditions, such as product quantity or category, combinations or brands.

## Why
The Add/edit catalog price rule page (Catalog > Discounts > Catalog price rules) is expected to be migrated to Symfony for the 1.7.7 version, but many behaviours (especially for complex rules) are not well specified which may introduce regressions and bugs. We need to specify the whole behaviour of this page to make it easier to test every scenario and avoid any new bugs.

Furthermore, we have identified different issues and bugs related to this page that we should fix during the migration :

#9881 : not reproduced so far<br>
#13791 : should be fixed with the migration<br>
#9977<br>
#9867<br>

## What

Thus, this project aims at specifying the current and expected behaviour for every scenario a merchant could be dealing with when creating a specific type of discount for his/her customers. This specification should specifically define : 
- Condition groups behaviour and compatibility 
- Compatibility between rules 
- Discounts display on front office

## Multistore 
Prestashop can be set with different **Shop Groups**. Each Shop Group can have certain Cart Rule specified. Each Multistore Shop can have a certain Cart Rule specified. Certain Cart Rule can be specified conditionally in Conditions tab, once the new Cart Rule is being created or edited.

The Cart Rule can be specified directly on any Shop Group or Multistore Shop in Prestashop selected. The application enables the rules on every Shop Group or Multistore Shop by default. The rule could be executed for all Groups and Shops in Front-Office by default. 
 
The behavior of the Cart Rules on different Shop Groups and Multistore Shops can be set separately in Conditions tab and under the Restrictions setting.

If the Cart Rules Restrictions are set, for example, for only 1 Shop Group and Multistore Shop out of 4, the customer of the Prestashop application will be forbidden to input Voucher code on the other 3 Multistore Shops. The customer will be notified with error message, once inputting the Voucher text field in Prestashop checkout. The message is specified as exclamation sign and error notification text "You cannot use this voucher."

All these settings and input fields can be separately managed by Multistore functionality in Prestashop. [Learn more.](https://github.com/PrestaShop/prestashop-specs/blob/master/content/1.7/back-office/shop-parameters/general/maintenance.md#multistore-behavior)
