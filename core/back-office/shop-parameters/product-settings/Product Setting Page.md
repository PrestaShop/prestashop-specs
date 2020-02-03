## **Specification of the Product Setting Page**

## Grid

_CustomerGridDefinitionFactory.php_ Default action in the button: Edit Other available actions in the menu: View, Delete Row action: View
Row action does not apply to the ID's checkbox column and to columns with enable/disable actions.

### **Display unavailable product attributes on the product page.**

**If this preference active, the product's combination will remain visible in the shop.** A message will indicate that the product is no longer available in the chosen option, and invite customers to choose another combination. 

Example: The "iPod Shuffle" is no longer available in "Blue" in our shop. 

**If this preferenc is active and you enabled the "Allow ordering of out-of-stock products" option**, then they will be able to add the unavailable combination to their carts.
 
**If the preferentce is disable and if the product has a single attribute**, the combination of the products no longer available and the attribute will be hidden 
 
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
