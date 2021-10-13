---
title: Catalog Price Rules
weight: 1
---

# Catalog > Discounts > Catalog Price Rules

![image](static/img/view-catalog-price-rules.png)

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
All these settings and input fields can be separately managed by Multistore functionality in Prestashop. [Learn more.](https://github.com/PrestaShop/prestashop-specs/blob/master/content/1.7/back-office/shop-parameters/general/maintenance.md#multistore-behavior)
