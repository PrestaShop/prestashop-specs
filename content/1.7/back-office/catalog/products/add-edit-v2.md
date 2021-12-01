## Add a new product <a name="addproduct"></a>

As a merchant, when I create a new product, I want to select the type of product before.

When I press add new product button, a modal is displayed.


The modal lists all the PrestaShop product types (simple product, combination product, virtual product, and products’ pack).
A simple product is selected by default.

Each product type has its shorts' description. Selecting a product type displays its description.

Modules can hook into the modal to add a new product type, with its description and icon/image.
The module is allowed to add any image or icon at the same size as the icon of the product type of PrestaShop.


## Add/Edit product page <a name="add-edit-product"></a>

After selecting the product type, the product page is opened 

### Product header <a name="product-header"></a>

The product header displays the product’s :
- name
- Cover image
- price tax excluded 
- price tax included 
- quantity
- product type and product type’s icon
- References

And 3 buttons:
- Open another product, the button displays a list of product
- View statistics redirected to the stats page 
- Help button



**Quantity
**
The quantity background colors change depending on the quantity.
If the quantity is strictly superior to the low stock level
Then the color background is green

If the quantity is inferior or equal to the low stock level
Then the color background is orange

If the quantity is inferior or equal to 0
Then the color background is red

**Change of product type
**
When clicking on the product type, a modal is displayed to change the product type. The current type and the button “Change product type” are disabled. By default, none of the product type are preselected.


Once the user selects a product different from the current product type, then the button “Change product type” becomes enabled.
Pressing the button opens closes the current modal to open the confirmation modal.

If the user changes the product type, only the common data between the product type will be saved.

List the common data  
How a prestashop product type can switch to another module product, how can they surcharge the feature

If the user cancels the confirmation modal, then the modal is closed and the user remains with the product type


**References
**
When there is no more space in the header after the reference, the other references start a new line below the first one.
