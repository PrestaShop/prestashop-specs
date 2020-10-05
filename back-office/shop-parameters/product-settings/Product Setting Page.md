# **Specification of the Product Setting Page**

## Grid

_CustomerGridDefinitionFactory.php_ Default action in the button: Edit Other available actions in the menu: View, Delete Row action: View
Row action does not apply to the ID's checkbox column and to columns with enable/disable actions.

## Product page

### **Display unavailable product attributes on the product page.**

**When this option is enabled, unavailable products' combinations remain visible in the shop.** A message indicates that the product is no longer available in the chosen option, and invites customers to choose another combination. 

Example: the product "iPod Shuffle" is no longer available in the "Blue" attribute in our shop. 

**When this option is enabled as well as the "Allow ordering out-of-stock products" option**, the customers are able to add unavailable combinations to their cart.
 
**When this option is disabled and if the products have one single attribute**, their combinations are no longer available and the attribute is hidden.
 
For example, the "XS" attribute and the related product are not displayed in the following case:

| Size  |  In stock |
|---|---|
| XS  | No  |
| S  | Yes  |
| M  | Yes  |
| L  | Yes  |

but the "S", "M", and "L" attributes remain displayed.
 
Also, **when this option is disabled and if the value of an attribute has no product in all possible combinations**, the combination of the products that are no longer available is hidden.
 
For example, the "White" attribute and the related product are not displayed in the following case:

| Size  | Color | In Stock |
|---|---|---|
| S  | White  | No |
| S | Black | Yes  |
| M | White | No |
| M | Black | Yes |

but the "S", "M", and "Black" attributes remain displayed.

## Products stock

**Enable stock management & Allow ordering of out-of-stock products**

When I set "enable stock management" to "NO", then "Allow ordering of out of stock products" activates itself automatically if it was not and being not clickable.
