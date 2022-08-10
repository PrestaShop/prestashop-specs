

---
title: Product Page - 8.0
weight: 1
---
# SPECS PRODUCT PAGE

## Add a new product <a name="addproduct"></a>

As a merchant, when I create a new product, I want to select the type of product before.

When I press add new product button, a modal is displayed.


The modal lists all the PrestaShop product types (standard product, combination product, virtual product, and products’ pack).
A simple product is selected by default.

Each product type has its shorts' description. Selecting a product type displays its description.

| Product type | Description |
| --- | --- |
| Standard product | A physical product that needs to be shipped. |
| Product with combination | A product with different variations (size, color, etc.) from which customers can choose. |
| Pack of products |  A collection of products from your catalog. |
| Virtual product | An intangible product that doesn't require shipping. You can also add a downloadable file. |

Modules can hook into the modal to add a new product type, with its description and icon/image.
The module is allowed to add any image or icon at the same size as the icon of the product type of PrestaShop.


## Add/Edit product page <a name="add-edit-product"></a>

After selecting the product type, the product page is opened 

### Product header <a name="product-header"></a>

The product header displays the product:
- **Name** - Text Input - Language-Selector 
- **Cover image** - Image
- **Price Tax Excluded**
- **Price Tax Included**
- **Tax** - Label

IF the tax rule has not a tax for the shop's country
THEN it displays on the Tax label 0% next to the country ISO code.

IF the shop's country has states configured with different tax per states
THEN it displays the tax of the first state configured.

IF the tax is disabled in BO > International > Taxes page
THEN the label is not displayed.

- **Quantity** - Label 
For product with combination, it displays the total of quantity from all the combination.

The quantity background colors change depending on the quantity.
If the quantity is strictly superior to the low stock level
Then the color background is green

If the quantity is inferior or equal to the low stock level
Then the color background is orange

If the quantity is inferior or equal to 0
Then the color background is red

- Product type and product type’s icon - Button
- References - List of labels 

And 3 buttons:
- Open another product, the button displays a list of product
- View statistics redirected to the stats page 
- Help button

### Change of product type

When clicking on the product type, a modal is displayed to change the product type. The current type and the button “Change product type” are disabled. By default, none of the product types are preselected.

Once the user selects a product different from the current product type, then the button “Change product type” becomes enabled.
Pressing the button opens closes the current modal to open the confirmation modal.

* Confirmation Modal - The modal displays the info-alert: “Changing the product type will immediately save the product and refresh the page.”
	* **Change product type** - Button - Save the new product type and refresh the page. If the user changes the product type, only the common data between the product type will be saved.

	* **Cancel** - Close the modal  
	If the user cancels the confirmation modal, then the modal is closed and the user remains with the product type.

| Changing the Product type from | Impact | warning-alert in the Confirmation modal |
| --- | --- | --- |
| Standard product | No impact, the data is common between the standard product and the others products. |  |
| Product with combination | Deletes the combination and reset the stock to 0. | This will delete all combinations. <br>IF the Stock Management is enabled THEN 'This will reset the stock of this product.' is displayed |
| Pack of products | Deletes the products associated with the packs. | This will delete the list of products in this pack. |
| Virtual product | Deletes the file associated with the virtual product. | This will delete the associated virtual file. |

| Changing the Product type to | Impact | warning-alert in the Confirmation modal |
| --- | --- | --- |
| Product with combination | Reset the stock to 0. | IF the Stock Management is enabled THEN 'This will reset the stock of this product.' is displayed |
| Product with virtual product | IF the ecotax is enabled THEN the ecotax is reset to 0. The new retail price tax excluded is equals to the ecotax excluded + old retail price tax. | 'This will reset the ecotax value and may impact your retail price tax included.’ |

WHEN the ecotax is enabled and the user changes the product from the virtual product to anther type

THEN It displays 'This will reset the ecotax value and may impact your retail price tax included.' in the changing type modal and the ecotax is rest to 0. The retail price tax excluded of the virtual product is equals to the ecotax excluded + old retail price tax excluded.


IF the user changes product type into a pack and the product is already associated to pack t
THEN the user is blocked in the process, and an error is displayed.

IF the product is already associated to a pack
THEN the user can’t change a product type to pack.

### **References**

List all the references fulfilled next to its label.  When there is no more space in the header after the reference, the other references start a new line below the first one.

## Description tab

**As a merchant I want to be able to complete the basic information of my products.**

### Image Manager

-   **Image upload**: Upload zone. When there is no image, you have the following message displayed “Drop images here or select files. Recommended size 800 x 800px for default theme. JPG, GIF or PNG format.”  
    You can click in the entire zone to open the selector or you can drop one or many images in the entire zone.  
    When there is already an image, you can click only on the frame with the “+” to open the selector.
    
-   **Image order**: You can move the images in the product sheet, the order is well changed in the front office.  
    The drag icon isn’t displayed when many images are selected and you can’t move many images
    
-   **Image caption** - Text input - Language-Selector - The user can click on an uploaded image and add a caption.  
    The caption is displayed in the front office when the customer hovers the thumbnail image according to the selected language.
    
-   **Cover image**: You can click on an uploaded image to assign it as a cover image. There is necessarily a cover image. There can be only one cover image.  
    If you upload many images, the first image selected is the cover image.  
    The cover image is displayed in the product list in the front office.  
    You can change the cover image by clicking on an image, checking the checkbox “cover image” and clicking on Save. If it was checked for another image, then it’s unchecked.
    
-   **Zoom**: You can zoom on an uploaded image by clicking on it and clicking on “Zoom”.  
    The image is open in its default size. You can close it by clicking on the cross, outside the image, or pressing ESC key. Merchants should be able to navigate between several images in zoom view to have an easy last check before saving the page.
    
-   **Delete**: You can click on an uploaded image to delete it. When you click on “delete”, you have a modal for canceling or confirming the action.
    
-   **Bulk actions**: ([issue #12773](https://github.com/PrestaShop/PrestaShop/issues/12773)) You can select many images with the checkboxes. After selecting more than one image, the frame on the right is opened with:
    
    -   The number of images selected
    -   An “Unselect all” link to unselect images and close the frame
    -   The “zoom” button to open the first image of the list zoomed
    -   A “delete all” button to delete all the product images. When you click on “delete all”, you have a modal for canceling or confirming the action.
        
    -   The cross to close the frame and unselect images
        
    -   Caption field: You can enter a caption that will be applied to all images. If some selected images already had captions, they are replaced when clicking on Save.
        
        If more than one image is selected the checkbox “cover” disappears

### Description & Description

-   **Summary** - Text input - Language-Selector - The text can be formatted thanks to the TinyMCE editor
  
-   **Description** - Text input - Language-Selector - The text can be formatted thanks to the TinyMCE editor
 
### Categories

- **Associated categories**:
The component displays all the associated categories as a list of tags. If categories have the same name, the tags display the parent’s path association until the parents are different. If 2 categories have the same complete tree structure then it displays its category IDs and all its parents categories.

EX:
Product: Comics
Categories 1: US comics > Best-sellers > Thor > Marvel
Categories 2 : Home > Classical > Thor > Marvel
If the product is associated with categories 1 and 2
then the tags will display:
Tag1: Best-sellers > Thor > Marvel
Tag2: Classical > Thor > Marvel

Deleting a tag, removes the tag of the list and deletes the association between the category and the product at the save.

- **Add categories:**
Below the tags’ lists is displayed the “Add categories” button. The button opens a modal with the search component and the category tree.

The user can search by category and the parent’s categories. The search result list displays the breadcrumb of the category.  
The list of categories associated is also displayed below the search component. 
If categories result from the search have the same name, the tags display the parent’s path association until the parents are different. If 2 categories have the same complete tree structure then it displays its category IDs and all its parents categories.

If the product is not associated with any category except the ‘Home’ branch, then ‘Home’’s child categories are displayed, just the first level of the tree is displayed/opened.

If the product is already associated with categories, then the categories branches are opened until the categories associated are displayed.

- **Main category** - Drop-list - It displays the full path of the associated categories. By default, at the creation of the product, the ‘Home’ category is selected as the main category. If categories have the same name, the tags display the parent’s path association until the parents are different. If 2 categories have the same complete tree structure then it displays its category IDs and all its parents categories.

The main category defines the product URL and the breadcrumb of the front office.

Below the drop-list is display the breadcrumb of the product. Updating the main category updates the breadcrumb displayed below the list and the breadcrumb of the front office.

### Brand
- **Brand** - Drop-down list - By default, the selected option is “No brand”, meaning there is no brand associated with the product.

All the brands enabled are displayed in the drop-down. If there are several brands with the same name, then the ID of the brand is displayed before its name. The brand is displayed on the product page in the front office in the product details tab. The logo of the brand is displayed if the brand has a logo, otherwise, the name of the brand is displayed. When you add a brand, it’s added in all languages enabled.

### Related product: 

- **Search product**:
	The user can search by product name or product reference. You can click on it to associate with the product. An associated product can only once be associated with the same product. You can't associate a product with itself.

	There is no limit to the number of associated products.

- **Delete a related product**:

	If you want to delete only one associated product, you can click on the delete icon.
	Add and delete actions are only saved when the users save the form.
	Once the product is added, It displays the product name with its reference and the product cover.

## Details tab

**As a merchant I want to be able to complete the basic information of my products.**

### References

-   **ISBN**: Field, numbers, spaces, hyphen and X are accepted. The International Standard Book Number \(ISBN\) is used to identify books and other publications.
    
-   **EAN-13 or JAN barcode** - Text input - only numbers are accepted. This type of product code is specific to Europe and Japan but is widely used internationally. It is a superset of the UPC code: all products marked with an EAN will be accepted in North America. The EAN is added at the end of the product URL in the front office.
    
-   **UPC barcode** - Text input - Field, only numbers are accepted. This type of product code is widely used in the United States, Canada, the United Kingdom, Australia, New Zealand, and other countries.
    
-   **MPN** - Text input - numbers and characters are accepted. The Manufacturer Part Number is used to identify a specific product of a given manufacturer.
    
### Features

-   **Add a feature**: By default, the selected option is “Choose a feature”. All the features are displayed in the drop-down and are sorted by position ASC. If there are several features with the same name, then the ID of the feature is displayed before its name If you have not yet selected a feature, the “pre-defined value” drop-down is disabled and the “customized value” fields should be also disabled ([issue 16306](https://github.com/PrestaShop/PrestaShop/issues/16306))  
    When you select a feature, both fields (pre-defined & customized value) are enabled.  
    The features and the associated values are displayed in the product details tab of the front office.
    
-   **Feature pre-defined value**: All the values of the selected feature are displayed in the drop-down and are sorted by name ASC.  
    If there are several features' values with the same name, then the ID of the feature’s value is displayed before its name If you select a pre-defined value, the customized value should be disabled because a feature can’t have both ([issue 16306](https://github.com/PrestaShop/PrestaShop/issues/16306))  
    When you add a feature with a pre-defined value, it’s added in all languages enabled.
    
-   **Feature customized value** - Text input - Language Selector - If you start to enter a customized value, the pre-defined value drop-down should be disabled because a feature can’t have both ([issue 16306](https://github.com/PrestaShop/PrestaShop/issues/16306))  
    When you add a feature with a customized value, the feature is added in all languages enabled but the customized value field stays empty in the other languages than the selected one.  
    
-   **Delete feature**: Button to delete the feature. When you click on it, you have a modal for canceling or confirming the action. When you delete a feature, it’s deleted in all languages.

### Attached files
    
-   **Search** - Search Bar - The user search for existing files
When selected, the file is added to the file list.
The list displays the title, file name, type, and the delete button to 
remove the file from the list.
-  **Add a new file**: Button allowing to add files to the product page. When clicked, it opens a modal.
**Modal:**
	-   **Filename**: Field with the title of the document, displayed in front-office
	-   **Description**: Field with the description of the document, displayed in front-office
	-   **Files** - Browse component - The user can browse and choose files from their file manager
	-   **Save and Publish**: Button to add the files and save the file 
	-   **Cancel**: Button to close the modal

### Display condition on product page

- **Display condition on product page** - Switch button - When enabled, it enables Condition dropdown, otherwise it is disabled

-   **Condition**: Drop-down with 3 options: New, Used, Refurbished. By default, New is selected.

### Allow customers to add a text or an image
Help text: You can use this file to personalize the customer's product.

 - **Field name** - Input text - Language Selector -  Enter the name of the field which is displayed on the product page in the front office. 
    
  -   **Type**: Drop-down with 3 options: text, file & numeric. By default text is selected. If you choose “text” in the front office you can complete the field with alphanumeric chars. If you choose “file”, you can upload a file. If you choose “numeric” you can enter only numbers ([improvement 11795](https://github.com/PrestaShop/PrestaShop/issues/11795))

  -   **Required** - Checkbox not checked by default. When checked the field is required in the front office and you can’t add the product to the cart while it’s not completed.
  - **Add customization field** - Button - 
When the button is pressed then add the item to a list

  -   **Delete** - Button - to remove the customization field
    
## Stock tab
The tab is displayed only if the product is a standard product

**As a merchant I want to be able to manage my products quantities.**

### Stocks

- **Edit quantity** - Number input - Decreases or Increases the physical stock by the specified quantity

- **Recent Stock Movements** - List the 5 last stock movements of Employee Edition with the Employee name and date. Between each stock movement, it is displayed a Grouped stock movements linked to the order
The employee name is saved , so if the employee name is changed or deleted

	- **Grouped stock movements linked to the order:** accumulation of all the stock movements related to an Order such as Customer Order and Product return.

-   **Minimum quantity for sale**: In the front-office (product page & quick-view), this value is indicated in the quantity field. When this value is > 1, a message is displayed under the quantity field in the front office “The minimum purchase order quantity for the product is X.”

This field is not displayed if stock management is disabled in Shop parameters > Products settings.

###   Availability preferences, 

**Behavior when out of stock**
3 radios buttons:  
1)  **Deny orders**: when it’s checked and product quantity is <= 0, in the front-office product page and quick view, the message filled in Shop parameters > Product settings > Label of out-of-stock products with denied backorders is displayed under the add to cart button, which is disabled.  
2)  **Allow orders**: when it’s checked and product quantity is <= 0, in the front-office product page and quick view, the message filled in Shop parameters > Product settings > Label of out-of-stock products with allowed backorders is displayed under the add to cart button, which is enabled.  
3)  **Use default behavior (Deny orders or Allow orders)**: the default behavior is set in Shop parameters > Product settings > Allow ordering of out-of-stock products: Yes or No. This value is checked when you create a new product.

-   **Label when in stock** - Text input - Language-Selector - If completed and product quantity is > 0, it is displayed on the front-office product page and quick view, instead of the message filled in Shop parameters > Product settings > Label of in-stock products.  
 
-   **Label when out of stock (and backorder allowed)** - Input Text - if completed and product quantity is <= 0, it is displayed in the front-office product page and quick view, instead of the message filled in Shop parameters > Product settings > Label of out-of-stock products with allowed backorders.  
  
-   **Availability date**: Date field. The date should be displayed in the front office in the product details part (as long as it is not passed), no matter the availability of the product.

## Virtual tab
The tab is displayed only if the product is a virtual product.

**As a merchant I want to be able to manage my virtual products.**

### Associated files ?

-   **Associated files ?** -Switch button - Yes / No  
    If you check Yes, new fields are ungreyed:
    -   **Browse file**: You can search and upload a file. This field disappears after uploading a file and clicking on save. It’s replaced by “Download file” and “Delete this file” actions, so you can upload only one associated file.
    -   **Filename**: This field is automatically completed with the name of the file uploaded, but you can edit it.
    -   **Number of allowed downloads**: Once this number reaches, the customer can’t download the file anymore. If you try to download it, a message is displayed “You have reached the maximum number of downloads allowed.” The number of downloads allowed is displayed in the mail download_product sent to the customer.
    -   **Expiration date**: Date field. After this date, the customer can’t download the file anymore. If you try to download it, a message is displayed “Expiration date has passed, you cannot download this product.”. The expiration date is displayed in the mail download_product sent to the customer.
    -   **Number of days**: Once this number reaches, the customer can’t download the file anymore. If you try to download it, a message is displayed “The product deadline is in the past.”
    -   **Delete file**: Once the file is uploaded and clicking on Save, you can delete the file. When you click on “delete this file”, a modal is displayed to cancel or confirm the action. If you confirm the deletion, the file is deleted, and “delete file” and “download file” actions are replaced by the browse file field.
    -   **Download file**: Once the file is uploaded and clicked on Save, you can download your file.
    - **Unlimited** - Checkbox - A checkbox next to the input Maximum number of downloads, Download link validity, and Expiration date. WHEN checked THE the input is disabled and the value of the fields becomes infinite.
  
  ### Stocks
The stock section is hiden if Enable stock management is disabled.

- **Edit quantity** - See the component on the stock page
- **Recent stock movements** - See the component on the stock page
-  **Quantity** - see the component on the stock page
-   **Minimum quantity for sale**  - see the component on the stock page

-   **Low stock level**  - see the component on the stock page
-   **Send me an email when the quantity is below or equals this level**  - see the component on the stock page


- **Availability preferences** -  see the Availability preferences component of the Stock page
- **Stock location**   -  see the Stock location component of the Stock page
- **Low stock level**   -  see the Low stock level component of the Stock page
 
## Pack tab
The tab is displayed only if the product is a pack of products.

**As a merchant I want to be able to manage my pack of products.**

### Stock 
The stock section is hiden if Enable stock management is disabled.
- **Edit quantity** - See the component on the stock page
- **Recent stock movements** - See the component on the stock page

### List of products for this pack
- **List of products for this pack** - List of products 
	- Product :
		* Product Image
		* Product Name
		* REF - Label - Displays the product reference (ex: "REF: demo_2)
		* Delete - Button - Deletes the product from the list
		* Quantity - Input - Edits the quanity of the product
		
### Add products to your pack
-   **Search for a product** - Search Bar - Lists all the products matching the product name or product reference.  

	WHEN the user selects a product from the list
	THEN The product is added to the list of the products 

The user can't add the same product multiple times from the Search Bar.  
A pack can add a product disabled or enabled, and can add a product without a name.


-   **Pack quantities** - Dropdown with 4 options: 
	* **Decrement pack only**
	* **Decrement products in pack only**
	* **Decrement both**
	* **Default**
	
Options | Impacts
-------- | -----
**Decrement pack only** | Only the pack quantity is impacted when the pack is ordered and shipped.   |
**Decrement products in the pack only** | The quantity of each pack's products is impacted when the pack is ordered and shipped.  |
**Decrement both** | The pack and the stocks of the products are impacted |
**Default** | Can be one of the 3 values above, it depends on what is selected in Shop parameters > Products > Default pack stock management.| 

- **Availability preferences** -  see the Availability preferences component of the Stock page
- **Stock location**   -  see the Stock location component of the Stock page
- **Low stock level**   -  see the Low stock level component of the Stock page

## Combination  tab

The tab is displayed only if the product is a combination product.

**As a merchant I want to be able to manage my products with combinations.**

### Combination generation

- **Generate combinations** - Button
When the Generate combinations are clicked
THEN the modal to generates combinations opens

- **Generate combinations** - Modal

	* **Search for attributes** - Search bar - Search by attributes or attribute value
	WHEN the user searches by attributes or attribute value
	THEN the results display a list of matching "attribute : attribute value".
	
		WHEN an attribute is typed
	THEN all the attribute values are listed

	- **Attribute** - Block: 
		- Attribute name - Checkbox - Header of the block
		- Attributes value - List of attribut value of the attribut clickable - By default, the list is collapsed.
		
		WHEN the block's header is collapsed and the users click on it
		THEN the Attributes value is displayed/extended.	
		
		WHEN the block's header is displayed and the users click on it
		THEN the Attributes value is hidden/collapsed.		
		
		WHEN the Attribute name is checked 
		THEN all the attribute values from the Attribute are added to the selected list.
		
		WHEN the Attribute name is checked 
		THEN all the attribute values from the Attribute are added to the selected list.
		
		WHEN the Attribute name is unchecked 
		THEN all the attribute values from the Attribute are removed from the selected list.

		WHEN the Attribute value is clicked 
		THEN the attribute value from the Attribute is added to the selected list.
		
		WHEN the Attribute value is clicked 
		THEN the attribute value from the Attribute is removed from the selected list.

* **Generate combinations** - Button
	IF there is no attribut selected 
	THEN the button is disabled
	
	WHEN the generated combinations already exist
	THEN "The combinations already exist."

WHEN combinations have been selected on the list and the user clicks to the bulk action 
THEN it opens the bulk action modal 

The bulk action is enabled when the user selects at one product combination from the list. 
- **Bulk action** - Dropdown - 
	- Edit %s combination - %s number of combination selected
	- Delete %s combinations - %s number of combination deleted
If the user clicks on Delete %s combinations then it displays the Progress-Bar- Modal (title: Deleting combinations), the product are deleted and the list refreshed.

If the user clicks on Edit %s combination then it displays Bulck actions Modal 
All sections by default are collapsed. Press them to collapse and collapse them.
- **Bulk action** - Modal: 
	- **Stock** - Section
		* **Stocks** - Delta Quantity input
		* **Stock location** - Text input
		* **Low stock level** - Number input
		* **Receive a low stock alert by email** - Checkbox
		* **Availability date** - Date field 
		* **Min. quantity for sale** - Numeric input

	- **Price and Impact** - Section
		* **Cost price** - Numeric input
		* **Impact on price (tax excl.)**- Price input
		* **Impact on price (tax incl.)** - Price input     
		* **Ecotax (tax incl.)** - Price input 
		* **Impact on price per unit (tax excl.)** - Price input
		* **Impact on price per unit (tax incl.)** - Price input
		* **Impact on weight** - Numeric input
		* **Impact on additional shipping fees** - Numerc input

	- **References** - Section
		* **Reference** - Text input
		* **ISBN code** -  Text input
		* **EAN-13 or JAN barcode** - Numerc input   
		* **UPC barcode** - Numerc input 
		* **MPN** - Numerc input   

	- **Supplier** - Section - (is displayed is the supplier are configured in the Option tab)
		-   **List the suppliers with their input** - same component on the Option tab

	- **Apply changes to % combinations** - Button 
		WHEN pressing the Apply button
		THEN Progress-Bar-Modal (title: Applying chages) is displayed all the edited input are saved to the selected combinations.  
	- **Cancel** - Button
		WHEN pressing the Cancel button
		THEN the modal is closed

### Combination listing

- **Filter by** - List of Attributes
	* Attributes - Dropdown - List of Attributes values
		* Attributes values - Checkbox
	
	WHEN attributes values are checked
	THEN the listing displays all the combinations containing the values of the attributes

* **Combinations list** - List all the combinations -
	*  Columns: 
		* Checkbox - Allow to select the combination for the bulks actions
		* ID - Label - ID's combination - Sort by acascending or descending order.
		* Combinations - Label - List the attributs of the combinationn
		* Reference - Text input - Sort by alpahbatics order
		* Impact on price (tax excl.) - Price input - Sort by acascending or descending order
		* Final price (tax excl.) - Label - Sort by acascending or descending order
		* Quantity - Delta Quantity input - Sort by acascending or descending order
		* Default combination - Checkbox - Sort by checked and unchecked
	
		WHEN pressing the "Save" button on the footer
		THEN all the input above are saved

		* Actions edit - Button 

		WHEN the edit button is clicked
THEN it opens the edition combination's modal
		
		* Delete action - Button 
		
		WHEN the delete button is clicked
		THEN the combination is deleted

	WHEN the list of items exceeds 10 combinations 
		THEN The list is paginated 

	- Pagination: 
		* First Page - Label 
		* Previous Page - Button - Go to the previous page if the page exits
		* Current Page - Input number
	
		WHEN a number is typed 
		THEN the listing displays the corresponding page IF the page doesn't exist THEN the listing stays on the page before the typing.
		* Next page - Button - Go to the next page if the page exits
		* Last Page  - Label
		* Items per page - Dropdown - Lists 10, 20, 50 and 100
	
		WHEN the dropdown is updated
		THEN its regroups combination by the new value selected.
		
		WHEN some inputs have been edited and the user changes of page before saving
		THEN a modal is displayed to confirm the action. The users can accept to Continue & Save the data or Continue & lose the date

### Edit combinations

Edit combination now opens a modal, see mockups here: 
* **Combination name** - 
* **Images**: All the images uploaded in the Detail tab are displayed.       
The cover image chosen in the description tab is automatically selected as the default image when the combination is created.     
The user can choose another default image for the combination. You can have only one "default" image per combination.
When the user hovers an image, the caption configured in the Description tab should be displayed.
* **Stocks** - Delta Quantity input
* **Stock location** - Text input
* **Low stock level** - Number input
* **Receive a low stock alert by email** - Checkbox
WHEN the product reaches the low stock level and Receive a low stock alert by email is checked
THEN an email is sent to all the employees who have at least the “view” right on the stock page when the quantity is below or equal to this value.
* **Availability date** - Date field - The date should be displayed in the front office in the product details part (as long as it is not passed), no matter the availability of the product.
* **Min. quantity for sale**: In front-office \(product page & quick-view\), this value is indicated in the quantity field. When this value is &gt; 1, a message is displayed under the quantity field in the front office “The minimum purchase order quantity for the product is X.”
* **Référence**: The reference of the combination is displayed in the product details part in the front office, according to the selected combination.
* **Cost price**: It’s used for margin calculations. To separate decimals a dot or a comma can be used, both should work no matter the language.
* **Impact on price (tax excl.)**- Price input -

WHEN Impact on price (tax excl.) is updated
THEN the Impact on price tax excl field is calculated automatically according to the tax rule chosen 
AND is added to the Final Price (tax excl.)

* **Impact on price (tax incl.)** - Price input -     

WHEN the Impact on the price (tax incl.) is updated
THEN the Impact on price tax excl field is calculated automatically according to the tax rule chosen. 
AND is added to the Final Price (tax incl.)
* **Final retail price**: Displays the final price tax excl and tax incl. 

Both final prices are updated when you modify the impact on price tax excl or tax incl.
* **Ecotax (tax incl.)** - Price input - This field is displayed if the “ecotax” option is enabled in International &gt; Taxes.             

The ecotax is displayed in FO under the product price: “Including €X.XX for ecotax”     

The eco-tax is an amount that is informative and doesn't impact the final price.
Editing the eco-tax on the product page reduces the retail price so the final price remains the same.

To keep the same behavior on the edition on the combination, editing the eco-tax on a combination doesn't impact the final price. The impact on price compensates for the changes.

IF a product with combination has an ecotax equal to 0 and the user adds a new ecotax price to the combination
THEN
The impact on the price of the combination is subtracted from the ecotax, so the final retail price is not impacted.

IF a product with combination has an ecotax set and the user adds a new ecotax price to the combination lower than the ecotax of the product
THEN
The impact on the price of the combination is increased from the ecotax combination, so the final retail price is not impacted.

IF a product with combination has an ecotax set and the user adds a new ecotax price to the combination superior to the ecotax of the product
THEN
The impact on the price of the combination is subtracted from the ecotax.
The final retail price is not impacted and the ecotax from the combination is displayed in the front office

The eco-tax from the combination is displayed in the front office

* **Impact on price per unit (tax excl.)** - Price input

WHEN Impact on price per unit (tax excl.) is updated
THEN the Impact on price per unit (tax incl.) field is calculated automatically according to the tax rule chosen. 
AND is added to the Final Impact on price per unit (tax excl.)

* **Impact on price per unit (tax incl.)** - Price input

WHEN Impact on price per unit (tax incl.) is updated
THEN the Impact on price per unit (tax excl.) field is calculated automatically according to the tax rule chosen. 
AND is added to the Final Impact on price per unit (tax incl.)

* **Impact on weight** - Numeric Input - The weight unit displayed next to the field is the one defined in International &gt; Localization.       

* **Impact on additional shipping fees**: \([Improvement 11305](https://github.com/PrestaShop/PrestaShop/issues/11305)\) By default, it’s filled with 0.000000       
This amount is added to the additional shipping fees configured in the Shipping tab for the product.       
The total is added to the total shipping cost according to the carrier selected in the front office.
* **ISBN code**: Numbers, spaces, hyphen and X are accepted.
The International Standard Book Number \(ISBN\) is used to identify books and other publications.      
The ISBN is displayed in the product details tab of the front office and changed accordingly to the selected combination.
* **EAN-13 or JAN barcode**: Only numbers are accepted.      
This type of product code is specific to Europe and Japan but is widely used internationally. It is a superset of the UPC code: all products marked with an EAN will be accepted in North America.      
The EAN is displayed in the product details tab of the front office and changed accordingly to the selected combination.
* **UPC barcode**: Only numbers are accepted.      
This type of product code is widely used in the United States, Canada, the United Kingdom, Australia, New Zealand, and other countries.     
The UPC is displayed in the product details tab of the front office and changed accordingly to the selected combination.
* **MPN**: Numbers and characters are accepted.      
The Manufacturer Part Number is used to identify a specific product of a given manufacturer.

- **List of all the supliers associated** - 
	 * **Supplier name** - Label 
	 * **Supplier reference** - Text - Field to specify the product reference for each supplier. 
    * **Cost price \(tax excl.\)** - Price - Field to specify the product's cost price for each supplier.
    * **Currency**: Dropdown with all installed and enabled currencies. If there are many currencies, the default one is selected by default. Allow specifying the product currency for each supplier. 

- **Save & Publish** - Button 
WHEN pressing the save button
THEN all edited input are saved
- **Cancel** - Button
WHEN pressing the Cancel button
THEN the modal is closed
- **Previous combination** - Button
WHEN pressing the Previous combination button
THEN the modal displays the next Combination
- **Next combination** - Button
WHEN pressing the Next combination button
THEN the modal displays the previous Combination

IF an input has been edited without being saved and the users press Next combination OR Previous combination OR Cancel button
THEN a modal is displayed to confirm the action 

- **Discard changes** - Modal:
	* Content: All unsaved modifications made on the combination %combination_name%  will be lost.
	* **Cancel** - Close the modal 
	* **Discard** - Close the modal and the edition modal

### Availability preferences

- **Behavior when out of stock**: This part is not displayed if stock management is disabled in Shop parameters &gt; Products settings. Instead, there is a message “Stock management is disabled”
* **3 radios buttons**:      

  1\) Deny orders: when it’s checked and product quantity is &lt;= 0, in the front-office product page and quick view, the message filled in Shop parameters &gt; Product settings &gt; Label of out-of-stock products with denied backorders is displayed under the add to cart button, which is disabled.     
  2\) Allow orders: when it’s checked and product quantity is &lt;= 0, in the front-office product page and quick view, the message filled in Shop parameters &gt; Product settings &gt; Label of out-of-stock products with allowed backorders is displayed under the add to cart button, which is enabled.      
  3\) Use default behavior \(Deny orders or Allow orders\): the default behavior is set in Shop parameters &gt; Product settings &gt; Allow ordering of out-of-stock products: Yes or No. This value is checked when you create a new product.

* **Label when in stock**: If completed and product quantity is &gt; 0, it is displayed in the front-office product page and quick view, instead of the message filled in Shop parameters &gt; Product settings &gt; Label of in-stock products.      
A drop-down next to the field is displayed when there are several languages installed \(disabled languages are displayed in the drop-down\). It allows choosing in which language the field is displayed. Also, in the case of multilanguage, if an error occurs, then I must be warned in the message which language is problematic \([improvement 16299](https://github.com/PrestaShop/PrestaShop/issues/16299)\)
* **Label when out of stock \(and backorder allowed\)**: If completed and product quantity is &lt;= 0, it is displayed on the front-office product page and quick view, instead of the message filled in Shop parameters &gt; Product settings &gt; Label of out-of-stock products with allowed backorders.       
A drop-down next to the field is displayed when there are several languages installed \(disabled languages are displayed in the drop-down\). It allows choosing in which language the field is displayed. Also, in the case of multilanguage, if an error occurs, then I must be warned in the message which language is problematic \([improvement 16299](https://github.com/PrestaShop/PrestaShop/issues/16299)\)

## Shipping tab

**As a merchant I want to be able to manage carriers' information for my products.**

This tab is not displayed for a virtual product.

### Package dimension

-   **Width** - Unit Input - By default it’s set to 0.     
-   **Height**- Unit Input - By default it’s set to 0.  
-   **Depth**- Unit Input - By default it’s set to 0.  
-   **Weight**- Unit Input - By default it’s set to 0.  
    
   
### Delivery time
 
 -   **Delivery time**  - Radio buttons - 
		- **None**: No delivery time is displayed on the product page in front-office  
		- **Default delivery time**: 
		
			If the product is in stock, the value filled in Shop parameters > Products settings > “Delivery time of in-stock products” is displayed on the product page in the front office. 
		
			If the product is out of stock but orders are allowed, the value filled in Shop parameters > Products settings > “Delivery time of out-of-stock products with allowed backorders” is displayed on the product page in the front office. 

			There is an “edit” link that opens Shop parameters > Products settings in a new browser tab next to the radio button label.  
	
		- **Specific delivery time to this product**

			If this option is used then Delivery time of in-stock products and Delivery time of out-of-stock products with allowed orders are enabled, otherwise, it is disabled
    
-   **Delivery time of in-stock products**- Text input - Placeholder: “Delivered within 3-4 days” - Language Selector
 
-   **Delivery time of out-of-stock products with allowed orders**- Text input - Placeholder: “Delivered within 5-7 days” - Language Selector 
    
-   **Additional shipping fees**: By default, it’s filled with 0.000000  
    The amount is added to the total shipping cost according to the carrier selected in the front office.
    
-   **Available carriers** - Radio buttons - 
	* All carriers -  All the carrier can delivered this product
	* Only selected carriers - Dropdown 

If Only selected carriers are selected then the dropdown is enabled otherwise it is disabled
	The dropdown lists all the carriers in checkboxes with the id of the carrier, the name, and the delay. The users check the carriers that can be delivered the product.
	The selected carriers are displayed below the dropdown.

## Pricing tab

**As a merchant, I want to be able to manage the prices of my products.**

 ### Retail price

Tooltip: This is the net sales price for your customers. The retail price (tax incl.) will automatically be calculated using the selected tax rate.

* **Retail price (tax excl.)** - Price input - By default, it’s set to 0.000000
* **Retail price (tax incl.)** - Price input - By default, it’s set to 0.000000

WHEN the Retail price (tax incl.) is edited
THEN the retail price (tax excl.) field is calculated automatically according to the tax rule chosen.

WHEN the Retail price (tax excl.) is edited
THEN the retail price (tax incl.) field is calculated automatically according to the tax rule selected.

WHEN the tax are disabled 
THEN the Retail price (tax incl.) equals the Retail price (tax excl.)


* **Tax rule** - Dropdown list - Displays all tax rules enabled and a “no tax” option. 

WHEN the user changes the tax rules 
THEN the price (tax incl.) is updated and the tax's label. 

IF there are several taxes rules with the same name
THEN the ID of the tax rule is displayed before its name.

* **Tax** - Label - Tax %ISO_code_country%: %tax_value% % - Displays the country ISO code of the shop's country and the tax corresponding shop's country and the tax rule selected. 

IF the tax rule has not a tax for the shop's country
THEN it displays on the Tax label 0% next to the country ISO code.

IF the shop's country has states configured with different tax per states
THEN it displays the tax of the first state configured and it displays the label: Tax %_country_country%-%ISO_code_State%

IF the tax is disabled in BO > International > Taxes page
THEN it displays "Tax feature is disabled, it will not affect price tax included." (final wording to define)

* **Manage tax rule** - Link - Open in a new browser tab International > Taxes  
  
* **Ecotax (tax incl.)** - Price input - the input is hidden - By default, it’s set to 0.000000

WHEN Use eco-tax is enabled (option is enabled in International > Taxes. Except) and the product is not a virtual product
THEN the input Ecotax (tax incl.) is displayed

WHEN the users edit the field 
THEN the amount of the Ecotax (tax excl.) is deducted from the Retail price (tax excl.). The Retail price (tax incl.) remains the same amount.

WHEN Ecotax is enabled
THEN 
Retail price (tax incl.) =  Retail price (tax excl.) * (1 + Tax) + Ecotax (tax incl.)
Retail price (tax excl.) =  Retail price (tax incl.) / (1 + Tax) - Ecotax (tax excl.)

WHEN the Retail price (tax excl.) OR Retail price (tax excl.) OR Ecotax (tax incl.) is edited
THEN All the enumerated fields are automatically updated according to the calculation rule described above.

 ### Cost price

* **Cost price (tax excl.)** - Price input - By default, it’s set to 0.000000
* **Supplier Label** - Label - Displays the label "This value matches the price of default supplier: %default_supplier_name%" when a default supplier is configured.

WHEN a product has a default supplier
THEN the cost price is synchronized with the cost price of the default supplier (cf. Option tab > Supplier > Default supplier).  

IF the user edit the Cost price (tax excl)
THEN it updates the Cost price (tax excl) in the Option Tab

IF the user edit the Cost price (tax excl) in the Option Tab
THEN it updates the Cost price (tax excl) in the Pricing Tab

### Display retail price per unit 

* **Retail price per unit (tax excl.)** - Price input - By default, it’s set to 0.000000
* **Retail price per unit (tax incl.)** - Price input - By default, it’s set to 0.000000

WHEN Retail price per unit (tax incl.) is edited
THEN Retail price per unit (tax excl.) field is calculated automatically according to the tax rule chosen.

WHEN Retail price per unit (tax excl.) is edited
THEN Retail price per unit (tax incl.) field is calculated automatically according to the tax rule selected.

* **Unity field** - Text 
Placeholder: “Per kilo, per liter”.

### Summary 

Displays all the prices of the product in two blocks.
- Block 1:
	- *Retail price (tax excl.)%* + *Ecotax (tax excl.)* 
	- *Retail price (tax incl.)%* (tax incl.)
	- *Retail price per unit (tax excl.)* per *Unity*
	- Including *Ecotax (tax incl.)*  for ecotax

- Block 2:
	-  *%Retail price (tax excl.)%* - *%Cost Price% margin*
	-  *%Cost Price%* * 100  / *%Retail price (tax excl.)%* % margin rate
	- *%Cost Price%* cost price

Ex with data:
If the tax is at 20%.
- Block 1:
	- 10€ (tax excl.)
	- 12€  (tax incl.)
	- 2€ per kilo
	- Including €10.00 for ecotax

- Block 2:
	- 5€ margin 
	- 50% margin rate
	- 5€ cost price


* **Display the "On sale!" flag on the product page, and on product listings** - checkbox - By default, it is unchecked.

WHEN the checkbox is checked
THEN it displays a banner "PROMO !"  on the image of the product in the product listing and on the product page in the front office.

### Specific prices

* **Add a specific price** - Button - Opens Specific price modal

This button opens a form with the following fields :

* **All store** - Dropdown - Lists all the stores from the multistore and "All store" - By default, "All store" is selected.
* **All currencies** - Dropdown - Lists all the currencies enabled and "All store" - By default, "All currencies" is selected.
* **All countries** - Dropdown - Lists all the countries enabled and "All countries" - By default, "All countries" is selected.
* **All groups** - Dropdown - Lists all the groups enabled and "All groups" - By default, "All groups" is selected.

* **Customers** -  There is a placeholder: “All customers”.
- **Apply to all customers** - Switch button - By default, the switch button is enabled
WHEN the switch is disabled
THEN the user can search for a specific customer by name, last name, or email.

IF the modal is saved and no specific customer is selected then
THEN error message 

* **All Combinations** - Dropdown - Lists all the combinations enabled and "All combinations" - By default, "All combinations" is selected.

- **Warning information** - "Note that if you want to base a quantity discount on a product, it will apply to all of its combinations. Go in Shop Parameters &gt; Product Settings to modify it" \([issue 12363](https://github.com/PrestaShop/PrestaShop/issues/12363)\).

* **Available from** - Datefield
* **Available to** - Datefield 

IF the user types a wrong value (numbers or letters) and clicks outside the date field
THEN the date previously selected (when you opened the calendar) is completed.

- **Unlimited** - Checkbox - By default, it is unchecked.

* **Minimum number of units purchased** - Numeric input - By default, it’s set to 1.

* **Apply a discount to the initial price** - Switch button - by default, it's enabled.

WHEN enabled
THEN the user can set percentage or amount of Discount tax included or tax excluded
- **Discount** 
	-  Price - By default, it’s set to 0.000000
	-  Dropdown - 2 option: % (percentage) and € (amount) - By default, amount is selected
	- Dropdown - 2 options: tax included and tax excluded - By default, tax included is selected


* **Set specific price**:  Switch button - by default, it's disabled.

WHEN enabled
THEN the user can set Retail price (tax excl.) to the product
* **Retail price (tax excl.)** - Price

- **Preview**

* **Save and Publish** - Button 

WHEN the users click on it
THEN the specific price is created and you have a success message “Settings updated”.

The specific price is applied to the product when the user matches all the conditions.

When the same specific price with same conditions twice
THEN an error message “A specific price already exists for these parameters.” and the second specific price isn’t created.

* **Cancel** - Button

IF the user clicks on Cancel
THEN the modal with all specifics prices fields are closed. 

IF the user clicks again to Add a specific price
THEN all fields are reset to their default values.  

* **List of specific prices**: Lists the specific price with all the details: 
ID, Rule, Combination, Currency, Country, Group, Customer, Specific price (tax excl.), Discount, Duration, Units, actions (delete, edit). Rule column contains “--” for a specific price.


* **Edit a specific price** - Button 
WHEN the user edits a specific price
THEN  It opens a modal with all the fields completed with the specific price data. 

* **Edit a catalog prices rule** - Button 
WHEN the user edits a catalog prices rule
THEN It opens a new tab the catalog price rule edit page

* **Delete a specific price** - Button
WHEN the user clicks on it
THEN a modal opens to cancel or confirm the action.


### Catalog price rules

* **Show catalog price rules** - Button 
IF the user press the button
THEN the catalog price rules is displayed and the button hidden.
IF the page is refreshed THEN the button is displayed and the button hidden.

* **List catalog price rules**: Lists the catalog price rules with all the details: 
ID, Name, Currency, Country, Group, Customer, Shop, Reduction, Reduction type, Units, From, To.

Here are also listed the catalog prices rules that impacts this product. Rule column contains the name of the catalog price rule.

* **Edit a catalog prices rule** - Button 
WHEN the user edits a catalog prices rule
THEN It opens a new tab the catalog price rule edit page

The user can't delete the catalog price rule.

* **Manage catalog price rules** - Link - Open in new tab the catalog price rules' list

### Priorities

**Priorities** - Option selector 
2 options:
* Default (Displays the configuration settings from the Product Setting page)
* Specific to this product
	- 4 dropdowns

By default, the Default option is selected. 
If the Default option is selected then the 4 dropdowns are disabled 

When Specific to this product is selected
THEN the user can select the order of the condition and  4 dropdowns are enabled with the 4 options: Shop, Currency, Country, Group pre-selected.


## SEO tab

**As a merchant I want to be able to manage my SEO information for my products.**

Here is the list of the elements of the SEO tab:

* **SEO preview**: It is a preview of your search engine result, it allows you to see how your product page will appear in search engines results.        
If the meta title field is empty, the product name is displayed.          
If I edit the product name and if there is nothing in the meta title field, it’s displayed directly in the preview.        
If I change the name of the product, the preview will not change until the meta title field is complete.         
If the meta description field is empty, the product description is displayed.           
If I click on Basic Settings, change the description, save, refresh the page and return to SEO, the description of the preview has changed.             
When you start to complete meta title, meta description, and friendly URL fields, it’s displayed directly in the preview.     
The preview is displayed in the selected language. \([Issue 14984](https://github.com/PrestaShop/PrestaShop/issues/14984)\)
* **Meta title** - Input Text - Language Selector -  There is a placeholder: “To have a different title from the product name, enter it here.”     
This data is displayed in the code of the page in the tag.        
If the field is empty, the product name will be used. A counter indicates the number of characters used on 70 characters recommended.        

* **Meta description** - Input Text - Language Selector -  There is a placeholder: “To have a different description than your product summary in search results pages, write it here.”         
This data is displayed in the code of the page in the tag.         
If the field is empty, the product description will be used. A counter indicates the number of characters used on 160 characters recommended.           

* **Friendly URL** - Input Text - Language Selector -  This field is automatically filled when you enter the product name.      
The spaces are replaced by dashes.         
    
When many languages are installed, if I fill the product name only for the default language, I want the friendly-URL field to be automatically filled in other languages with the same content as in default language \([improvement 15936](https://github.com/PrestaShop/PrestaShop/issues/15936)\)
* **Indexation by search engines**: Yes / No toggle. When set on Yes, the product is indexed. Otherwise, it's not.
* **Reset URL**: This button allows to reset the friendly URL field as it was before the last change.
* **Information message**: Friendly URLs are currently disabled. To enable it, go to SEO and URLs.             
Friendly URLs are currently enabled. To disable it, go to SEO and URLs.          
SEO and URLs link is opened in a new tab.
* **Indexation by search engines**: Yes / No. By default, it should be on “Yes”. If set on “Yes”, the product URL is indexed. If set on “No”, the product URL isn’t indexed. \([improvement 14317](https://github.com/PrestaShop/PrestaShop/issues/14317)\)
* **Redirection when offline**: Dropdown with 6 options:
1\) **Permanent redirection to a category \(301\)**: When my product is offline, I choose a category to redirect to.      
This is a "definitive" redirection and therefore this parameter is saved in the browser cache and even when I reactivate the product, the redirection can still be effective until the browser cache is cleared.       
2\) **Temporary redirection to a category \(302\)**: When my product is offline, I can choose a category to which my current product is redirected.             
The new category will only be displayed when my product is offline, it is not saved in the browser cache      
3\) **Permanent redirection to a product \(301\)**: When my product is offline, I choose another product to redirect to. This is a "definitive" redirection and therefore this parameter is saved in the browser cache and even when I reactivate the product, the redirection can still be effective until the browser cache is cleared.         
4\) **Temporary redirection to a product \(302\)**: When my product is offline, I can choose a product to which my current product is redirected.            
The new product sheet will only be displayed when my product is offline, it is not saved in the browser cache           
5\) **No redirection \(404\)**: When my product is offline, if I try to accede to the product in the front office a message is displayed: “This product is no longer available.” and the product isn’t displayed.        
If I click on Preview, I can see the product but a message is displayed “This product is not visible to your customers.”
6\) **No redirection \(410\)**: When my product is offline, if I try to accede to the product in font-office a message is displayed: “This product is no longer available yet.” and the product isn’t displayed.
* **Target category**: This search field is displayed if you select in the dropdown Permanent redirection to a category or Temporary redirection to a category.        
There is a placeholder: “To which category the page should redirect ?”           
If no category is selected, the Main Category is used.         
You can search by category name. When you start typing, if there are results, they are displayed under and you can click on it. Then, the selected category is displayed under the field.
* **Target product**: This search field is displayed if you select in the dropdown Permanent redirection to a product or Temporary redirection to a product.          
There is a placeholder: “To which product the page should redirect ?”              
You can search by product name or reference. When you start typing, if there are results, they are displayed under and you can click on it. Then, the selected product is displayed under the field.           
Delete selected category or product: You can remove the selected product or category by clicking on the cross. When you click on it, you have a modal to cancel or confirm the action.
* **Information message**: No redirection \(404\) = Do not redirect anywhere and display a 404 "Not Found" page.
No redirection \(410)\ = Do not redirect anywhere and display a 410 "Gone" page.     
Permanent redirection \(301\) = Permanently display another product or category instead.     
Temporary redirection \(302\) = Temporarily display another product or category instead.   

* **Tags**: There is a placeholder: “Use a comma to create separate tags. E.g.: dress, cotton, party dresses.”  - Input Tag - Language Selector -  To validate a tag, you can push Enter or comma key. The tags appear in Shop parameters &gt; Search &gt; Tags and are associated with the product. You can remove a tag by clicking on the cross. The tag is also removed in Shop parameters &gt; Search &gt; Tags. 

* **Information message**: “Tags facilitate the product search for customers using the search bar” There is a read more link to open the following info: “Choose terms and keywords which your potential customers commonly would search for when looking for this product. Make sure that they are consistent with the tags you may have already defined. You can manage tag aliases in the Search section. If you add new tags, you have to rebuild the index.”

## Options tab

**As a merchant I want to be able to manage the options for my products.**

Here is the list of the elements of the options tab:

### Product display

* **Visibility**: Option selector -  4 options. By default, everywhere is selected.       
	- **Everywhere**: The product is displayed in the catalog \(categories\) and can be found if you search for it. Help text: Customers can access the product  by browsing the catalog, using the search bar, or the link.
	- **Catalog only**: The product is displayed in the catalog \(categories\) and can’t be found if you search for it. Help text: Customers can access the product only by browsing the catalog. This is particularly useful to avoid displaying too many similar products in a search.   
	- **Search only**: The product is not displayed in the catalog \(categories\) and can be found if you search for it. Help text: Customers can access the product only by using the search bar.
	- **Nowhere**: The product is not displayed in the catalog \(categories\) and can’t be found if you search for it. Help text: Only customers with the link can access the product.   

### Availability

* **Available for order** - Switch button - by default, the switch is ON.
IF the user switches to OFF, THEN the add to cart button is disabled on the product page in the front office and the “Show price” switch input is enabled and set to ON.
IF the user switches to ON, THEN “Show price” switch input is disabled and set to ON.

* **Show price** - Switch button
IF the user switches to OFF, THEN the product price isn’t displayed on the product page and product lists in the front office. For a pack, the price of the pack and the prices of the products contained in the pack are not displayed.

* **Web-only**  - Switch button -  Checkbox not checked by default. 
WHEN checked AND “available for order” OR “show price” is checked
THEN a label “Online only” is displayed on the product page and product lists in the front office.

### Supplier

WHEN at least one supplier is enabled
THEN this section is displayed 

  * **Information message about suppliers** - Information message - “This interface allows you to specify the suppliers of the current product and its combinations, if any. You can specify supplier references according to previously associated suppliers.” Click on the read more link to display the following information: “When using the advanced stock management tool \(see Shop Parameters &gt; Products settings\), the values you define \(price, references\) will be used in supply orders.”
  
  * **Choose the suppliers associated with this product**: All enabled suppliers are displayed with a checkbox before their names. If it’s checked, the product is associated with the supplier and displayed on the supplier page in the front office.
WHEN several suppliers are associated with a product
THEN unchecking one of them should keep the related data while keeping the values of the other suppliers intact.

IF there are several suppliers with the same name, then the ID of all suppliers is displayed in front of their name.

  * **Default supplier**: 
IF more than one suppliers is checked
THEN it can be set as the default supplier by selecting the radio 

WHEN there is only one supplier checked
THEN the default supplier radio button is automatically checked for the supplier

WHEN there are many suppliers checked, you can change the default supplier. 

WHEN a default supplier is used
THEN the product's cost price is set by the default supplier's cost price. 

WHEN the user changes the cost price in the Price tab
THEN the value of the default supplier's cost price is also updated by the new changed value. And vice versa, when the user changes the default supplier cost price, the product cost price on the Price tab is updated with the new value filled in.

WHEN the user saves the product form
THEN the default supplier's cost price and the product's cost price should always be equal.

IF  at least one supplier is associated with the product 
THEN Supplier references are displayed

  * **Supplier reference\(s\)**  - Information message - "You can specify product reference(s) for each associated supplier. Click "Save" after changing selected suppliers to display the associated product references."

  * **Supplier dropdown**: A dropdown list appears to select the supplier for which the user wants to change supplier costs for his products.
  * **Products list**:
    * **The product name** - Text - Display the product name. If there are several suppliers with the same name, then the ID of all suppliers is displayed in front of their name.

    * **Supplier reference**: - Text - Field to specify the product reference for each supplier. 
    * **Cost price \(tax excl.\)** - Price - Field to specify the product's cost price for each supplier.
    * **Currency**: Dropdown with all installed and enabled currencies. If there are many currencies, the default one is selected by default. Allow specifying the product currency for each supplier.

## Buttons' Footer

WHEN the form has been edited
THEN the input ‘go to catalog”, ‘duplicate', 'preview' and 'new product' are disabled

IF the form has been edited and tha value saved 
THEN the input ‘go to catalog”, ‘duplicate', 'preview' and 'new product' are enabled and the button cancel and save are disabled.

WHEN the form has not been edited,
THEN the button 'cancel' and 'save'/'save and publish' are disabled.

- **Delete** - Button to delete the product. When you click on it, you have a modal to cancel or confirm the action.

- **Preview** - When you click on this button, it saves and opens a new browser tab with the product displayed in the front office.
If the product is disabled (offline), you have on the product page in the front office a message displayed: “This product is not visible to your customers.”

- **Online** - When you click on this button, it saves and makes the product visible in the front office.

- **Offline** - When you click on this button, it saves and makes the product invisible in the front office.

- **Save & Publish** - Button to save all changes made in all tabs.
Keyboard shortcut: ALT + SHIFT + S.
If it’s saved with success, there is a green success message “Settings updated”. Otherwise, there is an error message.
If the product is Offline then the button name change to "Save".

- **Duplicate** - When you click on this button, it saves and duplicates the current product (the duplicated product will be offline). 

- **Go to catalog** - When you click on this button, it saves and redirects to the catalog product list.

- **Add new product** - When you click on this button, it saves and opens a new empty product page.

## Multistore

### Multistore Header

It only displays stores associated with the product and stores that users can access.
- **Add to other stores** - Button - Open modal to select new stores to associate or dissociate with the product.
List of stores grouped by group shop with a checkbox
	- Cancel button 
	- Save Button - Displays the confirmation modal summarizing all the deleted and added stores
When a store is unchecked, it deletes the product related to the store.
When stores are checked, it duplicates the product related to the store offline.

	
### Multistore behavior

- **Apply changes to all stores** - Checkbox - It's displayed below each input compatible with the multistore.
Once checked and the product form is saved, the changes will be applied to all the stores.
	*  **Edit quantity** - Increases/Decreases with same amount the different shops

- **Save & Publish**: Button to save all changes made in all tabs.
If one checkbox **Apply changes to all stores** is checked then its opens a modal summarizing the changes.
Summarizing multistore changes:
Lists the input label applied to all the store
Lists all the associated shops impacted
Cancel button 
Save & Publish button

- **Manage images** - Open a modal with a table with all the images associated with the product from all the shops associated.
The columns are all the stores associated with the product
The rows are checkboxes
	- Cancel button
	- Save Button

When an image for a shop is unchecked then the image is not from the product, hidden in the image manager of the shop's product, and not displayed in the front office.

When an image for a shop is checked then the image is added to the product and displayed by the image manager of the shop's product and available in the front office.

The cover image from one shop can't be unchecked. An image that is unchecked to all the stores is deleted after the "Save and publish".


### Changement of multistore context

To avoid the user to save the product data in the wrong shop, a confirmation modal is displayed before saving.

When the user edits his product in a shop and saves his product while he has changed shop in another page then a confirmation modal is opened.

Confirmation modal - 
* title: "Are you sure ?"
* Description: "Your modifications will be saved in the *shop-name*"
* Choose a store  - Open Shop-Selector-Modal (title: Choose a store)
	* Save the product in the store context selected
* Continue - Save the product in the current store context


### Shared stocks

When the products shared the stocks with another store then it is displayed in a help text below the stock input "The stock is shared between the store in the %Group-Name%".

## Stock management is Disabled on BO > Shop Parameters > Product Settings

When Stock management is Disabled Then the fields listed bellow are not displayed:
- **Edit quantity**
- **Recent stock movements**
- **Pack quantities**
- **Behavior out of stocks**
- **Quantity** in the header.

**Behavior out of stocks** is replaced by the label "Stock management is disabled"

### Business rules

#### Product deletion

IF the user deletes a product or a specific combination associated with a pack
THEN the product is removed from the pack.

IF the user deletes a product standard associated with a pack
THEN the product is removed from the pack.

## 2.    Type of each field & errors message <a id="errors"></a>

**As a merchant I want to know if there are errors when I complete a field.**

### Elements in all tabs <a id="errorsalltabs"></a>

* **Errors in tabs behavior**: When one or several inputs are incorrect, an error message appears on top of the tabs and a red dot notification appears next to the name of the tabs containing errors. 


* **Product name**: If you try to enter more than 128 chars, an error message is displayed under the field: “This value is too long. It should have 128 character or less.” Prohibited characters are: ={}&lt;&gt;;\# If you enter an invalid character, an error message is displayed under the field: ”This value is not valid.” If it’s not filled in the default language, when you save, a message “This value should not be blank.” is displayed under the field 

### Basic settings tab <a id="basicsettings"></a>

* **Reference**: Alphanumeric field. Maximum 128 characters. Prohibited characters: ={}&lt;&gt;; They should be listed in the error message \(currently they are not\).
* **Summary**: Long text editor with tiny MCE. By default, maximum 800 characters \(can be changed in Shop parameters &gt; Products &gt; Max size of short description\). A counter indicates the number of characters remaining. If you enter more characters than the number allowed and save, an error is displayed “This value is too long. It should have XX characters or less.”
* **Description**: Long text editor with tiny MCE. Maximum 21844 characters. A counter indicates the number of characters remaining. If you enter more characters than the number allowed and save, an error is displayed “This value is too long. It should have 21844 characters or less.”
* **Quantity**: This field is not displayed for a standard product with combinations. Integer field, only integers are allowed. When there is more than 10 numbers, an error is displayed “This value is not valid”. If you enter a number with decimal \(ex 30,5 or 30.5\) and save, an error should be displayed “This value is not valid”. If you enter anything other than numbers and save an error is displayed under the field “This value is not valid.”
* **Price tax excl**: Decimal field. If you enter more than 10 numbers before the dot/comma and save, an error is displayed under the field “This value is not valid”. If you enter anything other than numbers and save, an error is displayed under the field “This value is not valid”. If you enter more than 6 numbers after the dot/comma and save, an error is displayed under the field “This value is not valid”.
* **Price tax incl**: Decimal field. If you enter more than 10 numbers before the dot/comma and save, an error is displayed under the field “This value is not valid”. If you enter anything other than numbers and save, an error is displayed under the field “This value is not valid”. If you enter more than 6 numbers after the dot/comma and save, an error is displayed under the field “This value is not valid”.
* **New category name**: Alphanumeric field. Maximum 128 characters. Invalid characters are: &lt;&gt;;=\#{} When you save, if your category name contains an invalid character, an error message under the field should be displayed “This value is not valid.”
* **Image upload**: If you try to upload another format than JPG, GIF or PNG, you have an error: “image\_name.ext: Image format not recognized, allowed format are: .gif, .jpg, .png”
* **Image caption**: When you click on “Save image settings” it shows at the top left a green message “Settings updated”. Alphanumeric field. Maximum 128 characters. Invalid characters are: ={}&lt;&gt; If you try to enter more than 128 chars, an error message is displayed under the field: “This value is too long. It should have 128 character or less.” When you save, if your image caption name contains an invalid char, an error message under the field should be displayed “This value is not valid.”
* **Feature customized value**: Alphanumeric field. Maximum 255 characters. Prohibited characters are: ={}&lt;&gt; If you try to enter more than 255 chars, an error message should be displayed under the field: “This value is too long. It should have 255 character or less.” When you save, if your customized value contains an invalid char, an error message under the field should be displayed “This value is not valid.”
* **Pack quantity**: Integer field, only integers are allowed. If you enter a number with decimal \(ex 1,5 or 1.5\) and click on add, an error should be displayed under the field “This value is not valid.”. If you try to enter anything other than numbers, it’s not filled in the field.
* **Minimum quantity for sale**: Integer field, only integers are allowed. By default it’s set to 1. I can’t order less, only equal or more. If you put nothing in this field and save, an error is displayed under the field “This value should not be blank.” If you enter anything other than numbers and save an error is displayed under the field “This value is not valid.” If you enter a number with decimal \(ex 30,5 or 30.5\) and save, an error is displayed under the field “This value is not valid.”.

### Quantities tab <a id="errorsquantities"></a>

* **Stock location**: Alphanumeric field. It should have maximum 64 characters. If you try to enter more than 64 chars, an error message should be displayed under the field: “This value is too long. It should have 64 character or less.” Prohibited characters are: ={}&lt;&gt;; If you enter an invalid character, an error message should be displayed under the field: ”This value is not valid.”
* **Low stock level**: Integer field, only integers are allowed. There is a placeholder “Leave empty to disable”. If you enter anything other than numbers and save an error is displayed under the field “This value is not valid.” If you enter a number with decimal \(ex 30,5 or 30.5\) and save, an error is displayed under the field “This value is not valid.”.
* **Label when in stock**: Alphanumeric field. It should have maximum 255 characters. If you try to enter more than 255 chars, an error message should be displayed under the field: “This value is too long. It should have 255 character or less.” Prohibited characters are: ={}&lt;&gt; If you enter an invalid character, an error message should be displayed under the field: ”This value is not valid.”
* **Label when out of stock \(and back order allowed\)**: Alphanumeric field. It should have maximum 255 characters. If you try to enter more than 255 chars, an error message should be displayed under the field: “This value is too long. It should have 255 character or less.” Prohibited characters are: ={}&lt;&gt; If you enter an invalid character, an error message should be displayed under the field: ”This value is not valid.”

### Virtual product tab <a id="errorsvirtualproduct"></a>

* **Low stock level**: Integer field, only integers are allowed. There is a placeholder “Leave empty to disable”. If you enter anything other than numbers and save an error is displayed under the field “This value is not valid.” If you enter a number with decimal \(ex 30,5 or 30.5\) and save, an error is displayed under the field “This value is not valid.”.
* **Associated files \(file name field\)**: Alphanumeric field. It should have maximum 255 characters. If you try to enter more than 255 chars, an error message should be displayed under the field: “This value is too long. It should have 255 character or less.” Prohibited characters are: ={}&lt;&gt; If you enter an invalid character, an error message should be displayed under the field: ”This value is not valid.”
* **Number of allowed download**: Integer field, only integers are allowed. When there is more than 10 numbers, an error should be displayed “This value is not valid”. If you enter a number with decimal \(ex 30,5 or 30.5\) and save, an error should be displayed “This value is not valid”. If you enter anything other than numbers and save an error is displayed “This value is not valid.”
* **Number of days**: Integer field, only integers are allowed. When there is more than 10 numbers, an error should be displayed “This value is not valid”. If you enter a number with decimal \(ex 30,5 or 30.5\) and save, an error should be displayed “This value is not valid”. If you enter anything other than numbers and save an error is displayed “This value is not valid.”
* **Label when in stock**: Alphanumeric field. It should have maximum 255 characters. If you try to enter more than 255 chars, an error message should be displayed under the field: “This value is too long. It should have 255 character or less.” Prohibited characters are: ={}&lt;&gt; If you enter an invalid character, an error message should be displayed under the field: ”This value is not valid.”
* **Label when out of stock \(and back order allowed\)**: Alphanumeric field. It should have maximum 255 characters. If you try to enter more than 255 chars, an error message should be displayed under the field: “This value is too long. It should have 255 character or less.” Prohibited characters are: ={}&lt;&gt; If you enter an invalid character, an error message should be displayed under the field: ”This value is not valid.”

### Combinations tab <a id="errorscombinations"></a>

**Bulk actions**

* **Quantity**: This field is not displayed for a standard product with combinations. Integer field, only integers are allowed. When there is more than 10 numbers, an error is displayed “This value is not valid”. If you enter a number with decimal \(ex 30,5 or 30.5\) and save, an error should be displayed “This value is not valid”. If you enter anything other than numbers and save an error is displayed under the field “This value is not valid.”
* **Cost price**: Decimal field. If you enter more than 10 numbers before the dot/comma and save, an error is displayed under the field “This value is not valid”. If you enter anything other than numbers and save, an error is displayed under the field “This value is not valid”. If you enter more than 6 numbers after the dot/comma and save, an error is displayed under the field “This value is not valid”.
* **Impact on weight**: Decimal field. When there is more than 15 numbers, an error should be displayed “This value is not valid”. If you enter anything other than numbers and save an error is displayed under the field “This value is not valid.” If you enter more than 3 numbers after the dot/comma and save, an error is displayed under the field “This value is not valid”.
* **Impact on price \(tax excl.\)**: Decimal field. If you enter more than 10 numbers before the dot/comma and save, an error is displayed under the field “This value is not valid”. If you enter anything other than numbers and save, an error is displayed under the field “This value is not valid”. If you enter more than 6 numbers after the dot/comma and save, an error is displayed under the field “This value is not valid”.
* **Impact on price \(tax incl.\)**: Decimal field. If you enter more than 10 numbers before the dot/comma and save, an error is displayed under the field “This value is not valid”. If you enter anything other than numbers and save, an error is displayed under the field “This value is not valid”. If you enter more than 6 numbers after the dot/comma and save, an error is displayed under the field “This value is not valid”.
* **Reference**: Alphanumeric field. Maximum 128 characters. Prohibited characters: ={}&lt;&gt;; They should be listed in the error message \(currently they are not\).
* **Minimum quantity**: Integer field, only integers are allowed. By default it’s set to 1. I can’t order less, only equal or more. If you put nothing in this field and save, an error is displayed under the field “This value should not be blank.” If you enter anything other than numbers and save an error is displayed under the field “This value is not valid.” If you enter a number with decimal \(ex 30,5 or 30.5\) and save, an error is displayed under the field “This value is not valid.”.
* **Low stock level**: Integer field, only integers are allowed. There is a placeholder “Leave empty to disable”. If you enter anything other than numbers and save an error is displayed under the field “This value is not valid.” If you enter a number with decimal \(ex 30,5 or 30.5\) and save, an error is displayed under the field “This value is not valid.”.

**Availability preferences**

* **Label when in stock**: Alphanumeric field. It should have maximum 255 characters. If you try to enter more than 255 chars, an error message should be displayed under the field: “This value is too long. It should have 255 character or less.” Prohibited characters are: ={}&lt;&gt; If you enter an invalid character, an error message should be displayed under the field: ”This value is not valid.”
* **Label when out of stock \(and back order allowed\)**: Alphanumeric field. It should have maximum 255 characters. If you try to enter more than 255 chars, an error message should be displayed under the field: “This value is too long. It should have 255 character or less.” Prohibited characters are: ={}&lt;&gt; If you enter an invalid character, an error message should be displayed under the field: ”This value is not valid.”

**Edit combination**

* **Quantity**: This field is not displayed for a standard product with combinations. Integer field, only integers are allowed. When there is more than 10 numbers, an error is displayed “This value is not valid”. If you enter a number with decimal \(ex 30,5 or 30.5\) and save, an error should be displayed “This value is not valid”. If you enter anything other than numbers and save an error is displayed under the field “This value is not valid.”
* **Min. quantity for sale**: Integer field, only integers are allowed. By default it’s set to 1. I can’t order less, only equal or more. If you put nothing in this field and save, an error is displayed under the field “This value should not be blank.” If you enter anything other than numbers and save an error is displayed under the field “This value is not valid.” If you enter a number with decimal \(ex 30,5 or 30.5\) and save, an error is displayed under the field “This value is not valid.”.
* **Référence**: Alphanumeric field. Maximum 128 characters. Prohibited characters: ={}&lt;&gt;; They should be listed in the error message \(currently they are not\).
* **Stock location**: Alphanumeric field. It should have maximum 64 characters. If you try to enter more than 64 chars, an error message should be displayed under the field: “This value is too long. It should have 64 character or less.” Prohibited characters are: ={}&lt;&gt;; If you enter an invalid character, an error message should be displayed under the field: ”This value is not valid.”
* **Low stock level**: Integer field, only integers are allowed. There is a placeholder “Leave empty to disable”. If you enter anything other than numbers and save an error is displayed under the field “This value is not valid.” If you enter a number with decimal \(ex 30,5 or 30.5\) and save, an error is displayed under the field “This value is not valid.”.
* **Cost price**: Decimal field. If you enter more than 10 numbers before the dot/comma and save, an error is displayed under the field “This value is not valid”. If you enter anything other than numbers and save, an error is displayed under the field “This value is not valid”. If you enter more than 6 numbers after the dot/comma and save, an error is displayed under the field “This value is not valid”.
* **Impact on price \(tax excl.\)**: Decimal field. If you enter more than 10 numbers before the dot/comma and save, an error is displayed under the field “This value is not valid”. If you enter anything other than numbers and save, an error is displayed under the field “This value is not valid”. If you enter more than 6 numbers after the dot/comma and save, an error is displayed under the field “This value is not valid”.
* **Impact on price \(tax incl.\)**: Decimal field. If you enter more than 10 numbers before the dot/comma and save, an error is displayed under the field “This value is not valid”. If you enter anything other than numbers and save, an error is displayed under the field “This value is not valid”. If you enter more than 6 numbers after the dot/comma and save, an error is displayed under the field “This value is not valid”.
* **Ecotax \(tax incl.\)**: Decimal field. If you enter more than 10 numbers before the dot/comma and save, an error is displayed under the field “This value is not valid”. If you enter anything other than numbers and save, an error is displayed under the field “This value is not valid”. If you enter more than 6 numbers after the dot/comma and save, an error is displayed under the field “This value is not valid”.
* **Impact on price per unit \(tax excl.\)**: Decimal field. If you enter more than 10 numbers before the dot/comma and save, an error is displayed under the field “This value is not valid”. If you enter anything other than numbers and save, an error is displayed under the field “This value is not valid”. If you enter more than 6 numbers after the dot/comma and save, an error is displayed under the field “This value is not valid”.
* **Impact on weight**: Decimal field. When there is more than 15 numbers, an error should be displayed “This value is not valid”. If you enter anything other than numbers and save an error is displayed under the field “This value is not valid.” If you enter more than 3 numbers after the dot/comma and save, an error is displayed under the field “This value is not valid”.
* **ISBN code**: Varchar field but only numbers are accepted. It should have maximum 32 characters. If you try to enter more than 32 chars, an error message should be displayed under the field: “This value is not valid.” If you enter anything other than numbers and save an error is displayed under the field “This value is not valid.”
* **EAN-13 or JAN barcode**: Varchar field but only numbers are accepted. It should have maximum 13 characters. If you try to enter more than 13 chars, an error message should be displayed under the field: “This value is not valid.” If you enter anything other than numbers and save an error is displayed under the field “This value is not valid.”
* **UPC barcode**: Varchar field but only numbers are accepted. It should have maximum 12 characters. If you try to enter more than 12 chars, an error message should be displayed under the field: “This value is not valid.” If you enter anything other than numbers and save an error is displayed under the field “This value is not valid.”
* **MPN**: Varchar field, numbers and characters are accepted. It should have maximum 40 characters. If you try to enter more than 40 chars, an error message should be displayed under the field: “This value is too long. It should have 40 characters or less.” .

### Shipping tab <a id="errorsshipping"></a>

* **Width**: Decimal field. When there is more than 15 numbers, an error should be displayed “This value is not valid”. If you enter anything other than numbers and save an error is displayed under the field “This value is not valid.” If you enter more than 3 numbers after the dot/comma and save, an error is displayed under the field “This value is not valid”.
* **Height**: Decimal field. When there is more than 15 numbers, an error should be displayed “This value is not valid”. If you enter anything other than numbers and save an error is displayed under the field “This value is not valid.” If you enter more than 3 numbers after the dot/comma and save, an error is displayed under the field “This value is not valid”.
* **Depth**: Decimal field. When there is more than 15 numbers, an error should be displayed “This value is not valid”. If you enter anything other than numbers and save an error is displayed under the field “This value is not valid.” If you enter more than 3 numbers after the dot/comma and save, an error is displayed under the field “This value is not valid”.
* **Weight**: Decimal field. When there is more than 15 numbers, an error should be displayed “This value is not valid”. If you enter anything other than numbers and save an error is displayed under the field “This value is not valid.” If you enter more than 3 numbers after the dot/comma and save, an error is displayed under the field “This value is not valid”.
* **Delivery time of in-stock products**: Alphanumeric field. It should have maximum 255 characters. If you try to enter more than 255 chars, an error message should be displayed under the field: “This value is too long. It should have 255 character or less.” Prohibited characters are: ={}&lt;&gt; If you enter an invalid character, an error message should be displayed under the field: ”This value is not valid.”
* **Delivery time of out-of-stock products with allowed orders**: Alphanumeric field. It should have maximum 255 characters. If you try to enter more than 255 chars, an error message should be displayed under the field: “This value is too long. It should have 255 character or less.” Prohibited characters are: ={}&lt;&gt; If you enter an invalid character, an error message should be displayed under the field: ”This value is not valid.”
* **Additional shipping fees**: Decimal field. If you enter more than 10 numbers before the dot/comma and save, an error is displayed under the field “This value is not valid”. If you enter anything other than numbers and save, an error is displayed under the field “This value is not valid”. If you enter more than 6 numbers after the dot/comma and save, an error is displayed under the field “This value is not valid”.

### Pricing tab <a id="errorspricing"></a>

* **Retail price (tax excl.)**: Decimal field. If you enter more than 10 numbers before the dot/comma and save, an error is displayed under the field “This value is not valid”. If you enter anything other than numbers and save, an error is displayed under the field “This value is not valid”. If you enter more than 6 numbers after the dot/comma and save, an error is displayed under the field “This value is not valid”.
* **Retail price (tax incl.)**: Decimal field. If you enter more than 10 numbers before the dot/comma and save, an error is displayed under the field “This value is not valid”. If you enter anything other than numbers and save, an error is displayed under the field “This value is not valid”. If you enter more than 6 numbers after the dot/comma and save, an error is displayed under the field “This value is not valid”.
* **Price per unit tax excl**: Decimal field. If you enter more than 10 numbers before the dot/comma and save, an error is displayed under the field “This value is not valid”. If you enter anything other than numbers and save, an error is displayed under the field “This value is not valid”. If you enter more than 6 numbers after the dot/comma and save, an error is displayed under the field “This value is not valid”.
* **Unity field**: Alphanumeric field. It should have maximum 255 characters. If you try to enter more than 255 chars, an error message should be displayed under the field: “This value is too long. It should have 255 character or less.” Prohibited characters are: &lt;&gt; If you enter an invalid character, an error message should be displayed under the field: ”This value is not valid.”
* **Ecotax tax incl**: Decimal field. If you enter more than 10 numbers before the dot/comma and save, an error is displayed under the field “This value is not valid”. If you enter anything other than numbers and save, an error is displayed under the field “This value is not valid”. If you enter more than 6 numbers after the dot/comma and save, an error is displayed under the field “This value is not valid”.
* **Cost price (tax excl.)**: Decimal field. If you enter more than 10 numbers before the dot/comma and save, an error is displayed under the field “This value is not valid”. If you enter anything other than numbers and save, an error is displayed under the field “This value is not valid”. If you enter more than 6 numbers after the dot/comma and save, an error is displayed under the field “This value is not valid”.
* **Add a specific price:**
  * **Starting at**: Integer field, only integers are allowed. When there is more than 10 numbers, an error should be displayed under the field “This value is not valid”. If you enter a number with decimal \(ex 30,5 or 30.5\) and save, an error should be displayed “This value is not valid”. If you enter anything other than numbers and save an error should be displayed “This value is not valid.”
  * **Impact on product price tax excl**: Decimal field. If you enter more than 10 numbers before the dot/comma and save, an error is displayed under the field “This value is not valid”. If you enter anything other than numbers and save, an error is displayed under the field “This value is not valid”. If you enter more than 6 numbers after the dot/comma and save, an error is displayed under the field “This value is not valid”.
  * **Apply a discount of**: Decimal field. If you enter more than 10 numbers before the dot/comma and save, an error is displayed under the field “This value is not valid”. If you enter anything other than numbers and save, an error is displayed under the field “This value is not valid”. If you enter more than 6 numbers after the dot/comma and save, an error is displayed under the field “This value is not valid”. If you don’t complete this field and click on Apply, you have an error message “No reduction value has been submitted”.

### SEO tab <a id="errorsseo"></a>

* **Meta title**: Alphanumeric field. It should have maximum 128 characters. If you try to enter more than 128 chars, an error message should be displayed under the field: “This value is too long. It should have 128 characters or less.” Prohibited characters are: &lt;&gt; If you enter an invalid character, an error message should be displayed under the field: ”This value is not valid.”
* **Meta description**: Alphanumeric field. It should have maximum 512 characters. If you try to enter more than 512 chars, an error message should be displayed under the field: “This value is too long. It should have 512 characters or less.” Prohibited characters are: &lt;&gt; If you enter an invalid character, an error message should be displayed under the field: ”This value is not valid.”
* **Friendly URL**: Alphanumeric field. It should have maximum 128 characters. If you try to enter more than 128 chars, an error message should be displayed under the field: “This value is too long. It should have 128 characters or less.” Prohibited characters are: &lt;&gt; If you enter an invalid character, an error message should be displayed under the field: ”This value is not valid.”

### Options tab <a id="errorsoptions"></a>

* **Tags**: Alphanumeric field. It should have maximum 32 characters. If you try to enter more than 32 chars, an error message should be displayed under the field: “This value is too long. It should have 32 characters or less.” Prohibited characters are: &lt;&gt;;=\#{} If you enter an invalid character, an error message should be displayed under the field: ”This value is not valid.”
* **ISBN**: Varchar field but only numbers are accepted. It should have maximum 32 characters. If you try to enter more than 32 chars, an error message should be displayed under the field: “This value is not valid.” If you enter anything other than numbers and save an error is displayed under the field “This value is not valid.”
* **EAN-13 or JAN barcode**: Varchar field but only numbers are accepted. It should have maximum 13 characters. If you try to enter more than 13 chars, an error message should be displayed under the field: “This value is not valid.” If you enter anything other than numbers and save an error is displayed under the field “This value is not valid.”
* **UPC barcode**: Varchar field but only numbers are accepted. It should have maximum 12 characters. If you try to enter more than 12 chars, an error message should be displayed under the field: “This value is not valid.” If you enter anything other than numbers and save an error is displayed under the field “This value is not valid.”
* **MPN**: Varchar field, numbers and characters are accepted. It should have maximum 40 characters. If you try to enter more than 40 chars, an error message should be displayed under the field: “This value is too long. It should have 40 characters or less.”
* **Add a customization field**:
  * **Label**: Alphanumeric field. It should have maximum 255 characters. If you try to enter more than 255 chars, an error message should be displayed under the field: “This value is too long. It should have 255 characters or less.” Prohibited characters are: &lt;&gt; If you enter an invalid character, an error message should be displayed under the field: ”This value is not valid.”
* **Attach a new file**:
  * **Browse file**: If you click on “Add” without selecting a file an error message is displayed under the field “Please select a file”
  * **Title:** Alphanumeric field. It should have maximum 32 characters. If you try to enter more than 32 chars, an error message should be displayed under the field: “This value is too long. It should have 32 characters or less.” Prohibited characters are: &lt;&gt;={} If you enter an invalid character, an error message should be displayed under the field: ”This value is not valid.”
  * **Description**: Alphanumeric field. There is no maximum characters. Prohibited characters are: &lt;&gt; If you enter an invalid character, an error message should be displayed under the field: ”This value is not valid.”
* **Table of suppliers**:
  * **Supplier reference**: Alphanumeric field. It should have maximum 65 characters. If you try to enter more than 64 chars, an error message should be displayed under the field: “This value is too long. It should have 65 characters or less.” Prohibited characters are: &lt;&gt;={}; If you enter an invalid character, an error message should be displayed under the field: ”This value is not valid.”
  * **Price \(tax excl.\)**: Decimal field. If you enter more than 20 numbers before the dot/comma and save, an error is displayed under the field “This value is not valid”. If you enter anything other than numbers and save, an error is displayed under the field “This value is not valid”. If you enter more than 6 numbers after the dot/comma and save, an error is displayed under the field “This value is not valid”.