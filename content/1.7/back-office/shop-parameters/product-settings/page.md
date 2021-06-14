---
title: Product Settings Page
weight: 1
---
# **SPECIFICATIONS - PRODUCT SETTINGS PAGE**

**Mockups**: https://www.figma.com/file/aCBf2HlypjT0ZxP2XcsT68/Core-Github-issues?node-id=207%3A4875

## Products (general)

**Catalog mode.** A switch button allows the merchant to enable or disable the catalog mode. By default, it is disabled. Enabling this catalog mode **disables the shopping cart on the front office** and displays another field right below, labeled 'Show prices'.

It also impacts the customer account on the front office, turning off the 'Order history and details', 'Credit slips', and 'Merchandise returns' pages.

**Show prices.** It should be displayed only when the catalog mode is enabled. By default, it is disabled and prices are not mentioned on the front office. Enabling this option **adds the products' price and keeps the shopping cart unavailable in the front office**.

**Number of days for which the product is considered 'new'.** Currently, **a product is considered new starting from its creation date** but day 0 should be based on its activation date, cf. _to do_ issue #[18823](https://github.com/PrestaShop/PrestaShop/issues/18823). By default, it is set to 20 days.

Only numbers can be typed in the field, or added by using the arrows at the end of the field. It cannot be set to less than 0 either, otherwise the field goes back to the previous valid value and an error notification is displayed: _The Number of days for which the product is considered 'new' field is invalid._

**Max size of short description.** Merchants can **modify the size of their product's short description (= summary), available in the 'Basic Settings' tab of the product page**. By default, it is limited to 800 characters. Changing the number of limited characters will update the help text in the bottom right-hand corner of the summary field in the Catalog > Products page, e.g. _76 of 900 characters allowed_.

Only numbers should be typed in the field. If the input contains specific characters, an error notification is displayed: _The Max size of short description field is invalid_.

**Quantity discounts based on.** It is a dropdown selector containing two options: **the merchant can decide to base all his quantity discounts per-product or per-combination**. By default, the 'Products' option is selected, allowing quantity discounts based on several products. 

If 'Products' is selected, then the discount (specific price or catalog price rule) is applied when the cart contains X products no matter the combinations added to the cart.

If 'Combinations' is selected, then the discount (specific price or catalog price rule) is applied when the cart contains X products of the same combination.

For example, the merchant has set a discount for 4 purchased items:

With quantity discounts based per-product: the customer can buy 2 white and 2 black tee-shirts to benefit from the discount.
 
With quantity discounts based per-combination: the customer needs to buy 4 blue tee-shirts to benefit from the discount. 

**Force update of friendly URL.** A friendly URL is generated from the product name. By default, it is disabled. Enabling this option will **automatically regenerate it every time the merchant modifies and saves a product name** - and automatically update the friendly URL field in the 'SEO' tab of the product page.

**Default activation status.** By default, it is disabled. If enabled, this option will **turn online the products the merchant creates** manually in the Catalog > Products page. As a consequence, manually created products will be set as active in the 'Status' column in the Catalog > Products listing.

As mentioned by the tooltip, _Enable this option if you want to activate by default all your manually created new products._, it does not apply to the products added via the import feature in Advanced Parameters > Import, cf. _to do_ issue #[13841](https://github.com/PrestaShop/PrestaShop/issues/13841).


## Product page

_As a merchant, I want to be able to manage my unavailable product combinations._

**Display unavailable attributes on the product page.** By default, it is enabled. And the tooltip should be _If an attribute is not available in every product combination, it will not be displayed._, cf. _1.7.8_ issue #[17447](https://github.com/PrestaShop/PrestaShop/issues/17447).

**When this option is enabled, unavailable products' combinations remain visible in the shop**. A message on the FO product page indicates the product is no longer available in the chosen option and invites customers to choose another combination: _Product available with different options_. 

**When this option is enabled as well as the 'Allow ordering out-of-stock products' option**, customers are able to add unavailable combinations to their cart.
 
**When this option is disabled and if the products have one single attribute**, their combinations are no longer available and the attribute is hidden.
 
For example, the XS attribute and the related product are not displayed in the following case:

| Size  |  In stock |
|---|---|
| XS  | No  |
| S  | Yes  |
| M  | Yes  |
| L  | Yes  |

but the S, M, and L attributes remain displayed.
 
Also, **when this option is disabled and if the value of an attribute has no product in all possible combinations**, the combination of the products that are no longer available is hidden.
 
For example, the white attribute and the related product are not displayed in the following case:

| Size  | Color | In Stock |
|---|---|---|
| S  | White  | No |
| S | Black | Yes  |
| M | White | No |
| M | Black | Yes |

but the S, M, and black attributes remain displayed.


_As a merchant, I want to be able to parameter my products' attributes._

**Display the "Add to cart" button when a product has attributes.** Important note: this feature does not work with the Classic default theme. It has been removed from the front office in 1.7.x because many users added products to their cart without selecting a combination. A help text under the switch button notices users about it, `Note that this setting does not work with the default theme anymore.` in `Admin.Shopparameters.Help`.

It is still in the back office since it might work with other themes. By default, it sould be disabled. Display or hide the 'Add to cart' button on category pages for products that have attributes forcing customers to see product details.

**Separator of attribute anchor on the product links.** When a product has many attributes, the merchant can **select a separator between the hyphen (-) and the comma (,)**. By default, it is the hyphen. It appears on shopping carts in the front office, invoices, merchandise returns, and order details pages, cf. issue #[19636](https://github.com/PrestaShop/PrestaShop/issues/19636).


_As a merchant, I want to be able to display the discounted price or the discount itself on my product pages._

**Display discounted price.** By default, it is disabled.
When it's enabled, in the volume discounts board, the new product price with the applied discount is displayed
When it's disabled, in the volume discounts board, the discount is displayed


## Products stock

_As a merchant, I want to be able to manage my product pages according to the available stock._

**Enable stock management.** It allows basic stock management options and features: merchants can set the current quantity of a product and let PrestaShop lower it for each order, or re-stock it for each canceled or returned order. By default, this feature is enabled.

When setting this option to 'No':

- it automatically enables the 'Allow ordering of out of stock products' feature above and prevents the user from switching this feature again, cf. _1.7.8_ issue #[21037](https://github.com/PrestaShop/PrestaShop/issues/21037);</br>
- the 'Quantity' column is not displayed in the product listing (Catalog > Products);</br>
- the 'Quantity' field is not displayed in the product page (Catalog > Products);</br>
- the 'Available' column is not displayed in the order details page (Orders > Orders > View).

**Default pack stock management.** In case they sell packs of products, merchants can **select how to update the stock** among 3 different possibilities:

- _Decrement pack only._ When a pack is sold, only the stock for the pack is impacted.</br>
- _Decrement products in pack only._ When a pack is sold, only the stock for each product is impacted.</br>
- _Decrement both._ When a pack is sold, both the stock for the pack and the stock for each product are impacted.

Note: this parameter can also be set for each pack in the 'Quantities' tab of their own product page.

**Display available quantities on the product page.** By default, it is enabled, **displaying in the front office how many items are in stock** in the product page, just before the delivery time:
X in stock (in stock here is the "label of in stock product" defined by the merchant)

The number of available items should be based on the selected product and attributes (= combination).

**Display remaining quantities when the quantity is lower than.** Merchants can **display a small alert in the front office when the stock for a product gets below a certain level**. It adds the following message, _Only X left in stock_, right before the 'Add to cart' button in the product page and before the delivery time label: 
Availability: Only X left in stock - Delivered under 48 hours
If the product has combinations, this message is based on the selected attributes (= combinations) according to the quantity in stock.

Only numbers can be typed in the field, or added by using the arrows at the end of the field. By default, it is set to 3 - typing 0 disables this feature. It cannot be set to less than 0, otherwise the field goes back to the previous valid value and an error notification is displayed: _The Display remaining quantities when the quantity is lower than field is invalid._

**Allow ordering of out-of-stock products.** By default, it is disabled. It means that, **when a product is not available in stock, the 'Add to cart' button on the product page is unclickable** with the following message just below:

1. :no_entry_sign: _Product available with different options_ if the product has combinations. 

2. :no_entry_sign: _Out-of-Stock_ (or any message typed in the 'Label of out-of-stock products with denied backorders' field) if this is a standard product.
 
 On the contrary, enabling this option allows customers to order both in-stock and out-of-stock products.

**Label of in-stock products.** Merchants can **add a label to all in-stock products**. It should be displayed in green #5A9166 in different places of the front-office:
- just below the price in product listings
- just above the quantity input and the 'Add to cart' button of the product page. 
- If the product has only one attribute and its values are displayed in a drop-down, then the availability will also be displayed next to each value in the drop-down of the product page.
- in the shopping cart, below the combinations if there are, otherwise under the product name

Leaving this field empty disables the feature. Merchants can localize the label according to the store's available languages.

**Label of out-of-stock products with allowed backorders.** Merchants can **add a label to all out-of-stock products when the 'Allow ordering of out-of-stock products' option is enabled**. It should be displayed in orange #E19E00 in different places of the front-office:
- just below the price in product listings
- just above the quantity input and the 'Add to cart' button of the product page. 
- If the product has only one attribute and its values are displayed in a drop-down, then the availability will also be displayed next to each value in the drop-down of the product page.
- in the shopping cart, below the combinations if there are, otherwise under the product name

Leaving this field empty disables the feature. Merchants can localize the label according to the store's available languages.

**Label of out-of-stock products with denied backorders.** Merchants can **add a label to all out-of-stock products when the 'Allow ordering of out-of-stock products' option is disabled**. By default, it is _Out-of-Stock_ (or its translation for other languages). It should be displayed in red #C3362B in different places of the front-office:
- just below the price in product listings
- just above the quantity input and the 'Add to cart' button of the product page. 
- If the product has only one attribute and its values are displayed in a drop-down, then the availability will also be displayed next to each value in the drop-down of the product page.
- in the shopping cart, below the combinations if there are, otherwise under the product name

If the product has combinations and if the default combination is out of stock with denied backorder and if other combinations are available for order (in stock or out of stock with allowed backorder), then we should display “Product available with different options” in the product listings and product page instead of the "label of out-of-stock products with denied backorders".

Leaving this field empty disables the feature. Merchants can localize the label according to the store's available languages.

**Delivery time of in-stock products.** Merchants can indicate the delivery time of in-stock products. 
It should be displayed  in green #5A9166 in different places of the front-office if the 'Default delivery time' is checked in the 'Shipping' tab of the product page (Catalog > Products):
- just above the quantity input and the 'Add to cart' button of the product page, after the stock label. 
- If the product has only one attribute and its values are displayed in a drop-down, then the delivery time will also be displayed next to each value in the drop-down of the product page, after the stock label. 
- in the shopping cart, below the combinations if there are, otherwise under the product name, after the stock label. 

By default the field is empty. Leaving this field empty disables the feature. Merchants can localize the label according to the store's available languages.

**Delivery time of out-of-stock products with allowed backorders.** Merchants can indicate the delivery time of out-of-stock products with allowed backorders.
It should be displayed in orange #E19E00 in different places of the front-office if the 'Default delivery time' is checked in the 'Shipping' tab of the product page (Catalog > Products):
- just above the quantity input and the 'Add to cart' button of the product page, after the stock label. 
- If the product has only one attribute and its values are displayed in a drop-down, then the delivery time will also be displayed next to each value in the drop-down of the product page, after the stock label. 
- in the shopping cart, below the combinations if there are, otherwise under the product name, after the stock label. 

By default, the field is empty. Leaving this field empty disables the feature. Merchants can localize the label according to the store's available languages.

## Pagination

_As a merchant, I want to be able to set my pagination preferences._

**Products per page.** It defines the **number of products displayed per page** - category or product pages, e.g. the 'New Products' page. By default, it is set to 12.

Only numbers can be typed in the field, or added by using the arrows at the end of the field. It cannot be set to less than 0, otherwise the field goes back to the previous valid value and an error notification is displayed: _The Products per page field is invalid._

**Default order by.** Merchants can **select the criterion based on what their products should be listed** on category or product pages, e.g. the 'New Products' page: product name, product price, product creation date, product last modification date, position inside category, brand, product quantity, product reference. By default, it is by position inside category - see the 'Position' column in the Catalog > Categories page.

**Default order method.** It **defines if products should be listed following an ascending (`.asc` in the URL) or a descending (`.desc` in the URL) order** on category or product pages, e.g. the 'New Products' page, cf. issue #[21312](https://github.com/PrestaShop/PrestaShop/issues/21312). By default, it is in ascending order.
