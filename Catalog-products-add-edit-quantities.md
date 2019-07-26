### Second tab

The second tab name changes depending on the type of product selected : 
- **Quantities** for a standard product without combinations or a pack
- **Virtual product** for a virtual product.
- **Combinations for** a standard product with combination


**As a merchant I want to be able to manage my products quantities.**

Here is the list of the elements of quantities tab:

- **Quantity**: When you update the field in quantities tab, the same field in basic settings tab is updated. The quantity is displayed in front-office if the option “Display available quantities on the product page” in Shop parameters > Product settings is set to yes. This value is decremented when an order is placed except if the order status is Payement error. This value is incremented when the order status is cancelled, when you make a partial refund and check “Re-stock products” and when you return products and check “Re-stock products”.

- **Minimum quantity for sale**: In front-office (product page & quick-view), this value is indicated in the quantity field. When this value is > 1, a message is displayed under the quantity field in front-office “The minimum purchase order quantity for the product is X.”

- **Stock location**: This field should not be displayed for a virtual product.

- **Low stock level**: You can define a value and choose or not to receive an email when the product quantity is <= to this value.

- **Send me an email when the quantity is below or equals this level**: Checkbox, when it’s checked an email is sent to all the employees who have at least the “view” right on the stock page when the quantity is below or equal to this value.

- **Pack quantities**: Dropdown with 4 options, displayed only when the product type is pack:
1) Decrement pack only: Only the pack quantity is decremented when you order it.
2) Decrement products in pack only: Only the products contained in the pack are decremented, the pack isn’t.
3) Decrement both: The pack and the products contained in the pack are decremented.
4) Default: Can be one of the 3 values above, it depends on what is selected in Shop parameters > Products > Default pack stock management.

- **Availability preferences, behavior when out of stock: 3 radios buttons**: 
1) Deny orders: when it’s checked and product quantity is <= 0, in front-office product page and quick view, the message filled in Shop parameters > Product settings > Label of out-of-stock products with denied backorders is displayed under the add to cart button, which is disabled.
2) Allow orders: when it’s checked and product quantity is <= 0, in front-office product page and quick view, the message filled in Shop parameters > Product settings > Label of out-of-stock products with allowed backorders is displayed under the add to cart button, which is enabled.
3) Use default behavior (Deny orders or Allow orders): the default behavior is set in Shop parameters > Product settings > Allow ordering of out-of-stock products: Yes or No. This value is checked when you create a new product.

- **Label when in stock**:  If completed and product quantity is > 0, it is displayed in front-office product page and quick view, instead of the message filled in Shop parameters > Product settings > Label of in-stock products.        

- **Label when out of stock (and back order allowed)**: If completed and product quantity is <= 0, it is displayed in front-office product page and quick view, instead of the message filled in Shop parameters > Product settings > Label of out-of-stock products with allowed backorders

- **Availability date**: Date field. The date should be displayed in front-office in the product details part, no matter the availability of the product.
