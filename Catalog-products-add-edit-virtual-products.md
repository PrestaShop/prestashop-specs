### Second tab

The second tab name changes depending on the type of product selected : 
- **Quantities** for a standard product without combinations or a pack
- **Virtual product** for a virtual product.
- **Combinations for** a standard product with combination

**As a merchant I want to be able to manage my virtual products.**

Here is the list of the elements of virtual product tab:

- **Quantity**: When you update the field in virtual product tab, the same field in basic settings tab is updated. The quantity is displayed in front-office if the option “Display available quantities on the product page” in Shop parameters > Product settings is set to yes. This value is decremented when an order is placed except if the order status is Payement error. This value is incremented when the order status is cancelled, when you make a partial refund and check “Re-stock products” and when you return products and check “Re-stock products”.

- **Minimum quantity for sale**: In front-office (product page & quick-view), this value is indicated in the quantity field. When this value is > 1, a message is displayed under the quantity field in front-office “The minimum purchase order quantity for the product is X.”

- **Stock location**: This field should not be displayed for a virtual product (issue 9323)

- **Low stock level**: You can define a value and choose or not to receive an email when the product quantity is <= to this value.

- **Send me an email when the quantity is below or equals this level**: Checkbox, when it’s checked an email is sent to all the employees who have at least the “view” right on the stock page when the quantity is below or equal to this value.

- **Associated files ?**: There is two radio buttons: Yes & No. By default No is checked. If you check Yes, new fields are displayed:
  - **Browse file**: You can search and upload a file. This field disappears after uploading a file and clicking on save. It’s replaced by “Download file” and “Delete this file” actions, so you can upload only one associated file.

  - **File name**: This field is automatically completed with the name of the file  uploaded, but you can edit it. 

  - **Number of allowed download**: Once this number reaches, the customer can’t download the file anymore. If you try to download it, a message is displayed “You have reached the maximum number of downloads allowed.” The number of downloads allowed is displayed in the mail download_product sent to the customer.

  - **Expiration date**: Date field. After this date, the customer can’t download the file anymore. If you try to download it, a message is displayed “Expiration date has passed, you cannot download this product.”. The expiration date is displayed in the mail download_product sent to the customer.

  - **Number of days**: Once this number reaches, the customer can’t download the file anymore. If you try to download it, a message is displayed “The product deadline is in the past.”

  - **Delete file**: Once the file uploaded and clicking on Save, you can delete the file. When you click on “delete this file”, a modal is displayed to cancel or confirm the action. If you confirm the deletion, the file is deleted and “delete file” and “download file” actions are replaced by the browse file field.

  - **Download file**: Once the file uploaded and clicking on Save, you can download your file.

- **Availability preferences, behavior when out of stock**: 3 radios buttons: 
1) Deny orders: when it’s checked and product quantity is <= 0, in front-office product page and quick view, the message filled in Shop parameters > Product settings > Label of out-of-stock products with denied backorders is displayed under the add to cart button, which is disabled.
2) Allow orders: when it’s checked and product quantity is <= 0, in front-office product page and quick view, the message filled in Shop parameters > Product settings > Label of out-of-stock products with allowed backorders is displayed under the add to cart button, which is enabled.
3) Use default behavior (Deny orders or Allow orders): the default behavior is set in Shop parameters > Product settings > Allow ordering of out-of-stock products: Yes or No. This value is checked when you create a new product.

- **Label when in stock**:  If completed and product quantity is > 0, it is displayed in front-office product page and quick view, instead of the message filled in Shop parameters > Product settings > Label of in-stock products. 

- **Label when out of stock (and back order allowed)**: If completed and product quantity is <= 0, it is displayed in front-office product page and quick view, instead of the message filled in Shop parameters > Product settings > Label of out-of-stock products with allowed backorders

- **Availability date**: Date field. The date should be displayed in front-office in the product details part, no matter the availability of the product.
