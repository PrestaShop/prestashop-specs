# SPECIFICATIONS - CORE - FRONT OFFICE - CART RULE AMOUNT CALCULATIONS

A cart rule can contain 1 or many cart actions. The amount of a cart rule is the sum of amounts resulting from each action


The possible cart actions are:
* Free shipping reduction
* Percent reduction
* Amount reduction
* Free gift reduction

## Free Shipping action

[TODO]

## Percent reduction action
If the cart rule contains "Percent reduction", the amount of this reduction depends on 4 types:

* Percent from cheapest product.
* Percent from whole order.
* Percent from specific product.
* Percent from selection of products.


### Percent from cheapest product

The reduction amount is the unit price tax included of the cheapest product in cart. In other words, if multiple products has the cheapest price or quantity of product with cheapest price is more than 1, the reduction is the price of one product(quantity=1). 

reduction amount = (unit price of cheapest product tax inc) * percent / 100


#####Example of cart:
product1 10$ qty=10<br>
product2 20$ qty=1<br>
product3 10$ qty=1<br>

Then the amount of reduction is 10$.



### Percent from specific product

The reduction amount is calculated based on the unit price tax included of the selected product in cart. The principle is the same as in the cheapest product.

reduction amount = (unit price of specific product tax inc) * percent / 100

#####Example of cart:
product_1 10$ qty=10<br>
selectedproduct_1 20$ qty=5<br>
product_3 10$ qty=1<br>

Then the amount of reduction is 20$.

### Percent from selection of products


The reduction amount is calculated based on the sum of unit prices, tax included, of the selected products.

reduction amount = (sum of unit prices tax inc of selected products) * percent / 100

#####Example of cart:<br>
product_1  10$ qty=10<br>
selectedproduct_1 20$ qty=5<br>
product_2 10$ qty=1<br>
selectedproduct_2 20$ qty=20<br>

Then the amount of reduction is 40$.

### Percent from whole order

The reduction amount is calculated based of the whole order total tax included.
<br>
reduction amount = (whole order products total tax inc ) * percent / 100

## Amount reduction action

Reduction amount of this action is a fixed amount. The reduction of this action can be applied either on order or on specific product. 

### order(without shipping)

[TODO]

### specific product


[TODO]

## Free Gift action
[TODO]