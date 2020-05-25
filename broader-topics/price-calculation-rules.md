# Price calculation specifications 

**Introduction**

This document aims at explaining in details how product and order prices should be calculated in every shop scenarios. 

This is a legal requirement, especially as it has an impact on invoices, so we must ensure prices are correctly calculated on PrestaShop websites.

Prices have impact on products, orders, but also on discounts, invoices, etc. so this document details the different behaviours for all pages according to the shop scenario.

**Context - the problem**
In PrestaShop, we store prices with 6 digits in order to have computations as accurate as possible, especially when applying discounts or tax rates where it is necessary to have more digits than what is stored (= for EUR, 2 digits are used so for accurate computations, more than 2 digits are needed)

The topic is about about tax amounts.

Tax incl. price = (tax excl. price ) x (tax rate)
Or
Tax incl. price = (tax excl. price ) + (tax amount)

When we need to display this tax amount, usually in PrestaShop we compute it by doing a substraction of tax incl. price minus tax excl. price .

The issue could arise when rounding is involved.

See the following situation:

| usecase  |  tax incl. |  price tax excl. |tax amount |
|---|---|---|---|
| stored in database, with 6 digits  | A1  | A2  | A3  |
| rounded for use | B1  | B2  | B3  |
| displayed | C1  | C2  | C3  |

- "Stored in database" is self-explanatory. In this line, A3 = A1 - A2

- "Rounded for use": let's say we want to send a payment gateway the data it needs, we are going to send at least B1 and B2, maybe B3 too. If the customer pays in EUR, we are going to use the numbers stored in database and round them to 2 digits.

- "Displayed": in PrestaShop we display these numbers to customers and merchants after rounding them for the currency used to display (for example in the invoice)

The issues could arise if, in the source code, we compute
C3 = C1 - C2
but
B3 = ps_round(A3)

@atomiix found at least 1 location in the code where this problem arises

The idea behind is that the rounded tax amount can be computed by 2 different ways:

- by substracting tax incl. by tax excl.
- or by rounding the stored tax amount

If the 2 numbers obtained by these 2 methods differ, then it's possible that the customer pays a tax amount different from what he was displayed (although very close, and probably accurate).

**Specifications**

Different rules are to be specified according to the chosen rounding option. This can be changed in the back office, in Shop Parameters > General. Merchants can choose both **round mode** (round up/down away from zero, when it's half way there / round down the next even/odd value / round up/down to the nearest value) and **round type** (round on each item, round on each line, round on the total). Only changes in rounding type will have an impact on how price should be calculated.

1. Generic rule - with round on each line type (default mode)

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

To prevent that, the solution is to start with the price tax excluded, then add the tax value (according to its percentage value). If the tax value contains more than 2 decimals, it should then be rounded according to the rounding configuration of the store.
Once the product price without tax and the tax value are defined, it is easy to get the final price with tax included by suming the price without tax and the tax value.
This will ensure the addition available on the invoice is always correct no matter how complex is the order. 

2. Specific rule - with round on each item type

