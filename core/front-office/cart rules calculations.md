# CART RULES SPECS - DISCOUNT CALCULATIONS (till 1.7.6.3)

A cart rule can contain one or many cart rule actions. The final discount amount of a cart rule is the sum of amounts resulting from each action.

The possible cart rule actions are:
* Free shipping reduction.
* Percentage reduction.
* Amount reduction.
* Free gift reduction.

## Free Shipping action

[TODO]

## Percentage reduction
If the cart rule contains "Percentage reduction", the amount of this reduction depends on 4 types:

* Percentage from cheapest product.
* Percentage from whole order.
* Percentage from a specific product.
* Percentage from a selection of products.


### Percentage from the cheapest product

The reduction amount is calculated from the unit price tax included of the cheapest product in cart. In other words, if multiple products has the cheapest price, or quantity of product with cheapest price is more than 1,then the reduction is based on the price of one product(quantity=1). 

reduction amount = (unit price of cheapest product tax inc) * percent / 100

reference: https://github.com/PrestaShop/PrestaShop/issues/16842#issuecomment-582458637

##### Example of cart:-
<br>
Let's assume we have 1 active cart rule with percentage reduction 10% on the cheapest product.

and a cart like:<br>
product1 10$ qty=10<br>
product2 20$ qty=1<br>
product3 10$ qty=1<br>

Then the amount of reduction is 1$. 


### Percent from specific product
If a cart rule has percentage reduction on a specific product X, and the current cart contains X, then the percentage discount is applied.
The discount amount is calculated based on the final price tax included of the selected product in cart. In other words, if cart contains product_X with quantity n, then discount is on n items.

reduction amount = (n * unit price of specific product tax inc) * percent / 100

##### Example of cart:
<br>
Let's assume we have 1 active cart rule with percentage reduction 10% on specific product :product_X

and a cart like:<br>
product_1 10$ qty=10<br>
selected_X 20$ qty=5<br>
product_3 10$ qty=1<br>

Then the amount of reduction is 10$.


### Percent from selection of products


The reduction amount is calculated based on the sum of final prices, tax included, of the selected products.
Selected products means products that are selected in cart rule and exists in current cart. It can be seen as a  group of `specific product` s.  In other words, if product_X and product_Y exist in cart with n and m quantities respectively, then the reduction amount is based on n and m (n* unit price of product_X and m* unit price of product_X).

reduction amount = (sum of final prices tax inc of selected products) * percent / 100

##### Example of cart:
<br>
Let's assume we have 1 active cart rule with percent reduction 10% on selection of products. Products are: X, Y, Z.

and a cart like:<br>
product_A 10$ qty=10<br>
product_X 20$ qty=5<br>
product_B 10$ qty=1<br>
product_Z 10$ qty=20<br>

Then the amount of reduction is 30$.

### Percent from whole order

This one is simple. The reduction amount is calculated based of the whole order total, tax included.
<br>
reduction amount = (whole order products total tax inc ) * percent / 100

##### Example of cart:
Let's assume we have 1 active cart rule with percent reduction 1% on whole order.

and a cart like:<br>
product_1  10$ qty=10<br>
product_2 20$ qty=5<br>
product_3 10$ qty=1<br>
product_4 10$ qty=20<br>

Then the amount of reduction is 41$.

## Amount reduction action

Reduction amount of this action is a fixed amount. The reduction of this action can be applied either on order or on specific product. 

### order(without shipping)

[TODO]

### specific product


[TODO]

## Free Gift action
[TODO]


# Preparation for 1.7.8
https://github.com/PrestaShop/PrestaShop/issues/17665
1. What if customer choose big amount of specific product?
2. what if this specific product is only sold from X quantities ?
3. what if this specific product has a specific price per unit ?




