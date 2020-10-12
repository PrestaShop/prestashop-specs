# Order settings specs

## General

### Enable final summary

This toggle is on No by default. 

When enabled, a summary is displayed in the Front-Office during the checkout, at the payment step:

![order final summary](https://github.com/PrestaShop/prestashop-specs/blob/marionf-patch-2/img/Order_final_summary.png)


This way, the customer can verify before the payment all the informations: the delivery address, the invoice address, the selected shipping method & its cost, the products in the cart, the unit price of each product, the quantity of each product, the total for each product line, the subtotal, the shipping cost and the order total.

### Enable guest checkout

This toggle is on Yes by default.

**When enabled**, guest visitors are allowed to place an order without creating an account

During the checkout in front-office, at the first step (personal information), a tab "order as a guest" is displayed with the following form:

![order as a guest](https://github.com/PrestaShop/prestashop-specs/blob/marionf-patch-2/img/Order%20as%20a%20guest.png)

As the creation of an account is optional, the password field is also optional.

**When disabled**, guest visitors are not allowed to place an order without creating an account.

During the checkout in front-office, at the first step (personal information), a tab "Create an account" is displayed with the following form:

![order create an account](https://github.com/PrestaShop/prestashop-specs/blob/marionf-patch-2/img/Order_create_account.png)

As the creation of an account is not optional, the password field is required.

### Disable reordering option

This toggle is on No by default.

When enabled, a "reorder" link is displayed in the order history page of the customer account and in the order detail:

![reorder list](https://github.com/PrestaShop/prestashop-specs/blob/marionf-patch-2/img/Reorder.png)

![reorder detail](https://github.com/PrestaShop/prestashop-specs/blob/marionf-patch-2/img/Reorder_detail.png)

### Minimum purchase total required in order to validate the order

By default this field is set to 0.00

The merchant can enter the minimum value (taxes excluded) required in the cart for the customer to be able to make an order

If the value is > 0.00 and not reached in the shopping cart front-office, then a message is displayed in the shopping cart: "A minimum shopping cart total of XX (tax excl.) is required to validate your order. Current cart total is XX (tax excl.)." and the "Proceed to checkout" button is disabled.

![minimum order value](https://github.com/PrestaShop/prestashop-specs/blob/marionf-patch-2/img/minimum_order_value.png)

**Please note this value is not taken into account for an order created in the back-office:** the merchant is allowed to create an order with an amount < to the value defined. 

### Recalculate shipping costs after editing the order

This toggle is on Yes by default.

When enabled, the shipping costs are automatically updated when the merchant edit an order and when the price of the order exceeds the carrier's range.

### Delayed shipping

This toggle is on No by default.

This option isn't working, see issue https://github.com/PrestaShop/PrestaShop/issues/9781

### Terms of service

This toggle is on Yes by default.

When enabled, the terms and conditions are displayed in front-office during the checkout at the payment step.
To validated the order the customer has to check the box. Otherwise, the "place order" button is disabled.

When disabled, the terms and conditions are not displayed in front-office at the payment step.

### Page for terms and conditions

This drop-down is enabled if the terms of service is enabled, and is disabled (not clickable) if the terms of service is disabled.
When enabled, the merchant can select the page corresponding to the terms and conditions.
All the enabled CMS pages are listed in the drop-down.

## Gift

### Offer gift wrapping

This toggle is on No by default.

When enabled, a checkbox "I would like my order to be gift wrapped" is displayed in front-office during the checkout at the shipping step.
A checkbox "gift" is also displayed during the order creation in back-office at the shipping step, see the [specs here](https://github.com/PrestaShop/prestashop-specs/blob/master/back-office/orders/orders/Order%20Add/Add%20new%20Order.md#v-shipping)

### Gift-wrapping price

By default this field is set to 0.00

The merchant can enter the gift wrapping price (taxes excluded).

If the value is > 0.00, it's displayed in front-office during the checkout at the shipping step:"(additional cost of €X.XX tax incl.)"

### Gift-wrapping tax

This drop-down lists all the enabled tax rules and allows the merchant to select the tax rule that will be applied on the gift wrapping price.

### Offer recycled packaging

This toggle is on No by default.

When enabled, a checkbox "I would like to receive my order in recycled packaging." is displayed in front-office during the checkout at the shipping step.
A checkbox "Recycled packaging" is also displayed during the order creation in back-office at the shipping step, see the [specs here](https://github.com/PrestaShop/prestashop-specs/blob/master/back-office/orders/orders/Order%20Add/Add%20new%20Order.md#v-shipping)
