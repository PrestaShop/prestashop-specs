## **Specification of the Product Setting Page**

## Grid

_CustomerGridDefinitionFactory.php_ Default action in the button: Edit Other available actions in the menu: View, Delete Row action: View
Row action does not apply to the ID's checkbox column and to columns with enable/disable actions.

### **Display unavailable product attributes on the product page.**

**When this option is enabled, unavailable products' combinations remain visible in the shop.** A message indicates that the product is no longer available in the chosen option, and invites customers to choose another combination. 

Example: the product "iPod Shuffle" is no longer available in the "Blue" attribute in our shop. 

**When this option is enabled as well as the "Allow ordering out-of-stock products" option**, the customers are able to add unavailable combinations to their cart.
 
**When this option is disabled and if the products have one single attribute**, their combinations are no longer available and the attribute is hidden.
 
For example, the XS attribute and the related product won't be displayed in the following case:

| Size  |  Has stock |
|---|---|
| XS  | No  |
| S  | Yes  |
| M  | Yes  |
| L  | Yes  |

but S, M, and L  are still displayed:
 
Also, **if the preferentce is disable and the value of an attribute has no product in all possible combinations**, the combination of the products no longer available will be hidden.
 
For example, the 'White' attribute and the related product won't be displayed in the following case:

| Size  | Color | Has Stock |
|---|---|---|
| S  | White  | No |
| S | Black | Yes  |
| M | White | No |
| M | Black | Yes |

but S, M and Black are still displayed.
