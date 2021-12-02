---
title: View Shopping Cart listing
weight: 1
---

# SELL > Orders > Shopping Carts > View

[View Shopping Cart](static/img/orders-shopping-carts-view-shopping-cart.png)

This dashboard is displaying the information about the Shopping Cart initiator - the customer, visitor or guest visitor who generated the Cart in Prestashop. It can be accessed by selecting the Shopping Cart row and clicking on View CTA button on the right of the row.

## The elements of the page UI

### Registered customer in Prestashop

- **Total Cart** - the numeric value, that describes the total amount that single customer has so far.
- **Customer information** - a section, that describes the customer first name, last name, account registration date, valid orders placed, total spent since registration, and the customer email. The customer name and last name contains a link, that directs to the Customer Account page in Prestashop. Email link is also implemented with a link, once clicked initiates the email composing.
- **Order information** - if the Order is made, then the link appears with the Order number with the hashtag near. This link is clickable, it redirets to the specific order of the Customer has made.
- **Made on** - the exact timestamp registered when the Order was made.
- **Cart summary** - The whole section table, where the orders of the customer are displayed. The elements of UI are basic: product image, product name with the link into the product editing, unit price, quantity, stock and total cart sum.

Tax included or Tax ecluded yellow warning notification is displayed _For this particular customer group, prices are displayed as: Tax included_ or _For this particular customer group, prices are displayed as: Tax excluded_ in the end of the Cart summary list.

### Unregistered customer in Prestashop

- **Total Cart** - the numeric value, that describes the total amount that single customer has so far.
- **Customer information** - the indication that _Guest is not registered_, so none of the additional information available.
- **Order information** - the indication that _No order was created from this cart_.
- **Made on** - the exact timestamp registered when the Order was made.
- **Cart summary** - The whole section table, where the orders of the customer are displayed. The elements of UI are basic: product image, product name with the link into the product editing, unit price, quantity, stock and total cart sum.

Tax included or Tax ecluded yellow warning notification is displayed _For this particular customer group, prices are displayed as: Tax included_ or _For this particular customer group, prices are displayed as: Tax excluded_ in the end of the Cart summary list.

## Multistore functionality

There is a Multistore switcher in the top-middle of the page, however the View Shopping Cart page is not impacted by any of the Multistore in Prestashop.
