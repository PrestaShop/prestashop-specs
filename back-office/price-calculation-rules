# Price calculation specifications 

Introduction

This document aims at explaining in details how product and order prices should be calculated in every shop scenarios. 

This is a legal requirement, especially as it has an impact on invoices, so we must ensure prices are correctly calculated on PrestaShop websites.

Prices have impact on products, orders, but also on discounts, invoices, etc. so this document details the different behaviours for all pages according to the shop scenario.


**Generic rule**

Most shops sell and display their products with taxes. This rule applies to these shop scenarios.

Product price is calculated based on the price indicated by the merchant and the tax that is applied to the product. 
The merchant can either modify the product price without tax, or the product price with tax included. 
This will impact the other field by doing an automatic calculation.

For instance, if the merchant sells a product with a price at 19,99€ tax included, the tax being 20%, then the product price without tax will be automatically calculated and will display "16.658333€" in the dedicated field.
On the opposite, if the merchant decides to define the product price without tax at "12,69€", then the product price tax included will be automatically calculated and will display "15.228€" in the dedicated field.

On front office, the prices are usually not displayed with more than 2 decimals, so a rounding is done according to the rounding configuration done on the website (Shop Parameters > General).
This allows the merchant to display its product price with the expected format while being the closest price to the chosen one in the back office. 
But on some situations, there might be issues with sums and roundings.
For instance, if :
- two products are included in the order - one is sold at 10€ tax excluded with a 20% tax and the other one is sold at 10.55€ tax excluded with a 2.10% tax
- the order benefits from a 3% discount
--> this results in :
- a total price of 19,93€ without tax included
- a final price of 22,088404€ tax included (on the website the rounded value displayed is 22,09€)
- and a tax value of 2,154904€ being rounded to 2,15€.

The problems happens when these 2 values are rounded as 9,93 + 2,15 = 22,08 and not 22,09€ resulting in a 1 cent difference. There's a mistake here which makes the invoice incorrect (as all rounded values are displayed on it).

To prevent that, the solution is to start with the price tax excluded, then add the tax value (according the its percentage value). If the tax value contains more than 2 decimals, it should then be rounded according to the rounding configuration of the store.
Once the product price without tax and the tax value are defined, it is easy to get the final price with tax included by suming the price without tax and the tax value.
This will ensure the addition available on the invoice is always correct no matter how complex is the order. 
