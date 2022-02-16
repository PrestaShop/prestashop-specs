---
title: Product Page
weight: 1
---
# SPECS PRODUCT PAGE V2

## Add a new product <a name="addproduct"></a>

As a merchant, when I create a new product, I want to select the type of product before.

When I press add new product button, a modal is displayed.


The modal lists all the PrestaShop product types (simple product, combination product, virtual product, and products’ pack).
A simple product is selected by default.

Each product type has its shorts' description. Selecting a product type displays its description.

- Simple product → A physical product that needs to be shipped.
- Product with combination → A product with different variations (size, color, etc.) from which customers can choose.
-  Pack of products → A collection of products from your catalog.
- Virtual product → An intangible product that doesn't require shipping. You can also add a downloadable file.

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

## Description tab

## Details/Specification tab

## Stock tab

Delta Quantity

## Virtual tab

## Pack tab

## Combination  tab

### Combination generation

- **Generate combinations** - Button
When the Generate combinations is clicked
THEN the modal to generates combinations opens

- **Generate combinations** - Modal

	* **Search for attributes** - Search bar - Search by attributs or attributs value
	WHEN the user searchs by attributs or attributs value
	THEN the results displays a list of matching "attributs : attributs value".
	
		WHEN a attributs is typed
	THEN all the attributs value are listed

	- **Attribute** - Block: 
		- Attribute name - Checkbox - Header of the block
		- Attributes value - List of attribut value of the attribut clickable - By default, the list is collapsed.
		
		WHEN the block's header is collasped and the users click on it
		THEN the Attributes value is displayed/extended.	
		
		WHEN the block's header is displayed and the users click on it
		THEN the Attributes value is hidden/collapsed.		
		
		WHEN the Attribute name is checked 
		THEN all the attribut value from the Attribute are added to the selected list.
		
		WHEN the Attribute name is checked 
		THEN all the attribut value from the Attribute are added to the selected list.
		
		WHEN the Attribute name is unchecked 
		THEN all the attribut value from the Attribute are removed from the selected list.

		WHEN the Attribute value is clicked 
		THEN the attribut value from the Attribute is added to the selected list.
		
		WHEN the Attribute value is clicked 
		THEN the attribut value from the Attribute is removed from the selected list.

* **Generate combinations** - Button
	IF there is no attribut selected 
	THEN the button is disabled
	
	WHEN the generated combinations already exists
	THEN "The combinations already exists."

WHEN combinations have been selected on the list and the user click to the bulk action 
THEN it opens the bulk action modal 

- **Bulk action** - Modal
	The all section by default are collasped. Press them to collaspse and collapse them.
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
		* **ISBN code** -  Numerc input
		* **EAN-13 or JAN barcode** - Numerc input   
		* **UPC barcode** - Numerc input 
		* **MPN** - Numerc input   


	- **Supplier** - Section - (is displayed is the supplier are configured in the Option tab)
		-  **List the suppliers with their input** - same component on the Option tab

	- **Apply changes to % combinations** - Button 
	WHEN pressing the Apply button
	THEN all edited input are apply to the selected combination  
	- **Cancel** - Button
	WHEN pressing the Cancel button
	THEN the modal is closed

### Combination listing

- **Filter by** - List of Attributes
	* Attributes - Dropdown - List of Attributes values
		* Attributes values - Checkbox
	
	WHEN attributes value are checked
	THEN the listing displays all the combination containing thes attributs values

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
	
		WHEN pressing the "Save" Button on the footer
		THEN all the input above are saved

		* Actions edit - Button 

		WHEN the edit button is clicked
THEN it opens the edition combination's modal
		
		* Delete action - Button 
		
		WHEN the delete button is clicked
		THEN the combination is deleted

	WHEN the list of items exceed 10 combinations 
		THEN The list is paginated 

	- Pagination: 
		* First Page - Label 
		* Previous Page - Button - Go to the previous page if the page exits
		* Current Page - Input number
	
		WHEN a number is typed 
		THEN the listing displays the corresponding page IF the page doesn't exist THEN listing stays on the page before the typing.
		* Next page - Button - Go to the next page if the page exits
		* Last Page  - Label
		* Items per page - Dropdown - Lists 10, 20, 50 and 100
	
		WHEN the dropdown is updated
		THEN its regroups combination by the new value selected.
		
		WHEN some inputs has beed edited and the users changes of page before saving
		THEN a modal is displayed to confirm the action. The users can accepts to Continue & Save the data or Continue & lose the date

### Edit combinations

Edit combination now opens a modal, see mockups here: 
* **Combination name** - 
* **Images**: All the images uploaded in basic settings tab are displayed.       
The cover image chosen in basic settings tab is automatically selected as default image when the combination is created.     
The user can choose another default image for the combination. You can have only one "default" image per combination.
When the user hovers an image, the caption configured in basic settings tab should be displayed.
* **Stocks** - Delta Quantity input
* **Stock location** - Text input
* **Low stock level** - Number input
* **Receive a low stock alert by email** - Checkbox
WHEN the product reaches the low stock level and Receive a low stock alert by email is checked
THEN a email is sent to all the employees who have at least the “view” right on the stock page when the quantity is below or equal to this value.
* **Availability date** - Date field - The date should be displayed in front-office in the product details part (as long as it is not passed), no matter the availability of the product.
* **Min. quantity for sale**: In front-office \(product page & quick-view\), this value is indicated in the quantity field. When this value is &gt; 1, a message is displayed under the quantity field in front-office “The minimum purchase order quantity for the product is X.”
* **Référence**: The reference of the combination is displayed in the product details part in front-office, according to the selected combination.
* **Cost price**: It’s used for margin calculations. To separate decimals a dot or a comma can be used, both should work no matter the language.
* **Impact on price (tax excl.)**- Price input -

WHEN Impact on price (tax excl.) is updated
THEN the Impact on price tax excl field is calculated automatically according to the tax rule chosen 
AND is added to the Final Price (tax excl.)

* **Impact on price (tax incl.)** - Price input -     

WHEN the Impact on price (tax incl.) is updated
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

IF a product with combination has an ecotax set and the user adds a new ecotax price to the combination superior than the ecotax of the product
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
This amount is added to the additional shipping fees configured in Shipping tab for the product.       
The total is added to the total shipping cost according to the carrier selected in front-office.
* **ISBN code**: Only numbers are accepted.       
The International Standard Book Number \(ISBN\) is used to identify books and other publications.      
The ISBN is displayed in product details tab of the front-office and change accordingly to the selected combination.
* **EAN-13 or JAN barcode**: Only numbers are accepted.      
This type of product code is specific to Europe and Japan, but is widely used internationally. It is a superset of the UPC code: all products marked with an EAN will be accepted in North America.      
The EAN is displayed in product details tab of the front-office and change accordingly to the selected combination.
* **UPC barcode**: Only numbers are accepted.      
This type of product code is widely used in the United States, Canada, the United Kingdom, Australia, New Zealand and in other countries.     
The UPC is displayed in product details tab of the front-office and change accordingly to the selected combination.
* **MPN**: Numbers and characters are accepted.      
The Manufacturer Part Number is used to identify a specific product of a given manufacturer.
- **Suppliers**  - Same component from the Option tab

- **Save** - Button 
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

IF a input has been edited without be saved and the users presses Next combination OR Previous combination OR Cancel buttin
THEN a modal is displayed to confirm the action 

- **Discard changes** - Modal:
	* Content: All unsaved modifications made on the combination %combination_name%  will be lost.
	* **Cancel** - Close the modal 
	* **Discard** - Close the modal and the edition modal

### Availability preferences

**Availability preferences, behavior when out of stock**: This part is not displayed if stock management is disabled in Shop parameters &gt; Products settings. Instead there is a message “Stock management is disabled”
* **3 radios buttons**:      

  1\) Deny orders: when it’s checked and product quantity is &lt;= 0, in front-office product page and quick view, the message filled in Shop parameters &gt; Product settings &gt; Label of out-of-stock products with denied backorders is displayed under the add to cart button, which is disabled.     
  2\) Allow orders: when it’s checked and product quantity is &lt;= 0, in front-office product page and quick view, the message filled in Shop parameters &gt; Product settings &gt; Label of out-of-stock products with allowed backorders is displayed under the add to cart button, which is enabled.      
  3\) Use default behavior \(Deny orders or Allow orders\): the default behavior is set in Shop parameters &gt; Product settings &gt; Allow ordering of out-of-stock products: Yes or No. This value is checked when you create a new product.

* **Label when in stock**: If completed and product quantity is &gt; 0, it is displayed in front-office product page and quick view, instead of the message filled in Shop parameters &gt; Product settings &gt; Label of in-stock products.      
A drop-down next to the field is displayed when there are several languages installed \(disabled languages are diplayed in the drop-down\). It allows to choose in which language the field is displayed. Also, in the case of multilanguage, if an error occurs, then I must be warned in the message which language is problematic \([improvement 16299](https://github.com/PrestaShop/PrestaShop/issues/16299)\)
* **Label when out of stock \(and back order allowed\)**: If completed and product quantity is &lt;= 0, it is displayed in front-office product page and quick view, instead of the message filled in Shop parameters &gt; Product settings &gt; Label of out-of-stock products with allowed backorders.       
A drop-down next to the field is displayed when there are several languages installed \(disabled languages are diplayed in the drop-down\). It allows to choose in which language the field is displayed. Also, in the case of multilanguage, if an error occurs, then I must be warned in the message which language is problematic \([improvement 16299](https://github.com/PrestaShop/PrestaShop/issues/16299)\)

## Pricing tab

**As a merchant, I want to be able to manage the prices of my products**

 ### Retail price

Tool tip: This is the net sales price for your customers. The retail price (tax incl.) will automatically be calculated using the selected tax rate.

* **Retail price (tax excl.)** - Price input - By default, it’s set to 0.000000
* **Retail price (tax incl.)** - Price input - By default, it’s set to 0.000000

WHEN the Retail price (tax incl.) is edited
THEN the retail price (tax excl.) field is calculated automatically according to the tax rule chosen.

WHEN the Retail price (tax excl.) is edited
THEN the retail price (tax incl.) field is calculated automatically according to the tax rule selected.

* **Tax rule** - Dropdown list - Displays all tax rules enabled and a “no tax” option. 

WHEN the user changes the tax rules 
THEN the price (tax incl.) is updated and the tax's label. 

IF there are several taxes rules with the same name
THEN the ID of the tax rule is displayed before its name.

IF the tax rule doesn't include a tax of the shop's country
THEN it displays on the Tax label 0% next to the country ISO code.

IF the shop's country has states configured with different tax per states
THEN it displays the tax of the first state configured.

* **Tax** - Label - Tax %ISO_code%: %tax_value% % - Displays the country ISO code of the shop's country and the tax corresponding shop's country and the tax rule selected.

* **Manage tax rule** - Link - Open in a new browser tab International > Taxes  
  
* **Ecotax (tax incl.)** - Price input - the input is hidden - By default, it’s set to 0.000000

WHEN Use eco tax is enabled (option is enabled in International > Taxes. Except) and the product is not a virtual product
THEN the input Ecotax (tax incl.) is displayed

WHEN the users edit the field 
THEN the amount of the Ecotax (tax excl.) is deducted from the Retail price (tax excl.). The Retail price (tax incl.) remains the same amount.

WHEN Ecotax is enabled
THEN 
Retail price (tax incl.) =  Retail price (tax excl.) * (1 + Tax) + Ecotax (tax incl.)
Retail price (tax excl.) =  Retail price (tax incl.) / (1 + Tax) - Ecotax (tax excl.)

WHEN the Retail price (tax excl.) OR Retail price (tax excl.) OR Ecotax (tax incl.) is edited
THEN All the ennumrated field are automatically updated according the calculation rule describe above.

 ### Cost price

* **Cost price (tax excl.)** - Price input - By default, it’s set to 0.000000
* **Supplier Label** - Label - Displays the label "This value matches the price of default supplier: %default_supplier_name%" when a default supplier is configured.

WHEN a product has a default supplier
THEN the cost price is synchronized with cost price of the default supplier (cf. Option tab > Supplier > Default supplier).  

IF the user edit the Cost price (tax excl)
THEN it updates the Cost price (tax excl) in the Option Tab

IF the user edit the Cost price (tax excl) in the Option Tab
THEN it updates the Cost price (tax excl) in the Princing Tab

### Display retail price per unit 

* **Retail price per unit (tax excl.)** - Price input - By default, it’s set to 0.000000
* **Retail price per unit (tax incl.)** - Price input - By default, it’s set to 0.000000

WHEN Retail price per unit (tax incl.) is edited
THENRetail price per unit (tax excl.) field is calculated automatically according to the tax rule chosen.

WHEN Retail price per unit (tax excl.) is edited
THEN Retail price per unit (tax incl.) field is calculated automatically according to the tax rule selected.

* **Unity field** - Text 
Placeholder: “Per kilo, per litre”.

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
	- %Cost Price% cost price

Ex with fake data:
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
THEN it displays a banner "PROMO !"  on the image of the product in the product listing and on the product page in front-office.

### Specific prices

* **Add a specific price** - Button - Opens Specific price modal

This button opens a form with the following fields :

* **All store** - Dropdown - Lists all the store from the multistore and "All store" - By default, "All store" is selected.
* **All currencies** - Dropdown - Lists all the currencies enabled and "All store" - By default, "All currencies" is selected.
* **All countries** - Dropdown - Lists all the countries enabled and "All countries" - By default, "All countries" is selected.
* **All groups** - Dropdown - Lists all the groups enabled and "All groups" - By default, "All groups" is selected.

* **Customers** -  There is a placeholder: “All customers”.
- **Apply to all customers** - Switch button - By default, the switch button is enabled
WHEN the switch is disabled
THEN the user can search for a specific customer by name, last name or email.

IF the modal is saved and no specific customer is selected then
THEN error message 

* **All Combinations** - Dropdown - Lists all the combinations enabled and "All combinations" - By default, "All combinations" is selected.

- **Warning information** - "Note that if you want to base a quantity discount on a product, it will apply to all of its combinations. Go in Shop Parameters &gt; Product Settings to modify it" \([issue 12363](https://github.com/PrestaShop/PrestaShop/issues/12363)\).

* **Available from** - Datefield
* **Available to** - Datefield 

IF the user types a wrong value (numbers or letter) and clicks outside the datefield
THEN the date previously selected (when you opened the calendar) is completed.

- **Unlimited** - Checkbox - By default, it is unchecked.

* **Minimum number of units purchased** - Numeric input - By default, it’s set to 1.

* **Apply a discount to the initial price** - Switch button - by default, it's enable.

WHEN enabled
THEN the user can set percentage or amount of Discount tax included or tax excluded
- **Discount** 
	-  Price - By default, it’s set to 0.000000
	-  Dropdown - 2 option: % (percentage) and € (amount) - By default, amount is selected
	- Dropdown - 2 options: tax included and tax excluded - By default, tax included is selected


* **Set specific price**:  Switch button - by default, it's disable.

WHEN enabled
THEN the user can set Retail price (tax excl.) to the product
* **Retail price (tax excl.)** - Price

- **Preview**

* **Save and Publish** - Button 

WHEN the users click on it
THEN the specific price is created and you have a success message “Settings updated”.

The specific price is applied to the product when the user matches the all the conditions.

When the same specific price with same conditions twice
THEN an error message “A specific price already exists for these parameters.” and the second specific price isn’t created.

* **Cancel** - Button

IF the users clicks on Cancel
THEN the modal with all specific prices fields is closed. 

IF the users clicks again to Add a specific price
THEN all fields are reseted to their default values.

* **List of specific prices & catalog price rules**: Lists the specific price with all the details: 
ID, Rule, Combination, Currency, Country, Group, Customer, Specific price (tax excl.), Discount, Duration, Units, actions (delete, edit). Rule column contains “--” for a specific price.

Here are also listed the catalog prices rules that apply to this product. Rule column contains the name of the catalog price rule.

* **Edit a specific price** - Button 
WHEN the user edits a specific price
THEN  It opens a modal with all the fields completed with the specific price data. 

* **Edit a catalog prices rule**- Button 
WHEN the user edits a catalog prices rule
THEN It opens an iframe of the catalog price rule edition page 

* **Delete a specific price** - Button
WHEN the user clicks on it
THEN a modal opens to cancel or confirm the action.

* **Delete a catalog prices rule** - Button
WHEN the user clicks on it
THEN a modal opens to cancel or confirm the action.

### Priorities

**Priorities** - Option selector 
2 options:
* Default (Displays the configuration set from the Product Setting page)
* Specific to this product

When Specific to this product is selected
THEN the user can select the order of the condition and displays 4 dropdown with the 4 options: Shop, Currency, Country, Group. 

By default, “Group” is selected for the first dropdown, “Currency” for the second, “Country” for the third and “Shop” for the last.

## SEO tab

**As a merchant I want to be able to manage my SEO information for my products.**

Here is the list of the elements of SEO tab:

* **SEO preview**: It is a preview of your search engine result, it allows to see how your product page will appear in search engines results.        
If the meta title field is empty, the product name is displayed.          
If I edit the product name and if there is nothing in the meta title field, it’s displayed directly in the preview.        
If I change the name of the product, the preview will not change until the meta title field is complete.         
If the meta description field is empty, the product description is displayed.           
If I click on Basic Settings, change the description, save, refresh the page and return to SEO, the description of the preview has changed.             
When you start to complete meta title, meta description and friendly URL fields, it’s displayed directly in the preview.     
The preview is displayed in the selected language. \([Issue 14984](https://github.com/PrestaShop/PrestaShop/issues/14984)\)
* **Meta title**: There is a placeholder: “To have a different title from the product name, enter it here.”     
This data is displayed in the code of the page in the tag.        
If the field is empty, the product name will be used. A counter indicates the number of characters used on 70 characters recommended.        
A drop-down next to the field is displayed when there are several languages installed \(disabled languages are diplayed in the drop-down\). It allows to choose in which language the field is displayed. Also, in the case of multilanguage, if an error occurs, then I must be warned in the message which language is problematic \([improvement 16299](https://github.com/PrestaShop/PrestaShop/issues/16299)\)
* **Meta description**: There is a placeholder: “To have a different description than your product summary in search results pages, write it here.”         
This data is displayed in the code of the page in the tag.         
If the field is empty, the product description will be used. A counter indicates the number of characters used on 160 characters recommended.           
A drop-down next to the field is displayed when there are several languages installed \(disabled languages are diplayed in the drop-down\). It allows to choose in which language the field is displayed. Also, in the case of multilanguage, if an error occurs, then I must be warned in the message which language is problematic \([improvement 16299](https://github.com/PrestaShop/PrestaShop/issues/16299)\)
* **Friendly URL**: This field is automatically field when you enter the product name.      
The spaces are replaced by dashes.         
A drop-down next to the field is displayed when there are several languages installed \(disabled languages are diplayed in the drop-down\). It allows to choose in which language the field is displayed. Also, in the case of multilanguage, if an error occurs, then I must be warned in the message which language is problematic \([improvement 16299](https://github.com/PrestaShop/PrestaShop/issues/16299)\)          
When many languages are installed, if I fill the product name only for the default language, I want the friendly-url field to be automatically filled in other languages with the same content as in default language \([improvement 15936](https://github.com/PrestaShop/PrestaShop/issues/15936)\)
* **Indexation by search engines**: Yes / No toggle. When set on Yes, the product is indexed. Otherwise it's not.
* **Reset URL**: This buttons allows to reset the friendly URL field as it was before the last change.
* **Information message**: Friendly URLs are currently disabled. To enable it, go to SEO and URLs.             
Friendly URLs are currently enabled. To disable it, go to SEO and URLs.          
SEO and URLs link is opened in a new tab.
* **Indexation by search engines**: Yes / No. By default it should be on “Yes”. If set on “Yes”, the product URL is indexed. If set on “No”, product URL isn’t indexed. \([improvement 14317](https://github.com/PrestaShop/PrestaShop/issues/14317)\)
* **Redirection when offline**: Dropdown with 5 options:                
1\) **Permanent redirection to a category \(301\)**: When my product is offline, I choose a category to redirect to.      
This is a "definitive" redirection and therefore this parameter is saved in the browser cache and even when I reactivate the product, the redirection can still be effective until the browser cache is cleared.       
2\) **Temporary redirection to a category \(302\)**: When my product is offline, I can choose a category to which my current product is redirected.             
The new category will only be displayed when my product is offline, it is not saved in the browser cache      
3\) **Permanent redirection to a product \(301\)**: When my product is offline, I choose another product to redirect to. This is a "definitive" redirection and therefore this parameter is saved in the browser cache and even when I reactivate the product, the redirection can still be effective until the browser cache is cleared.         
4\) **Temporary redirection to a product \(302\)**: When my product is offline, I can choose a product to which my current product is redirected.            
The new product sheet will only be displayed when my product is offline, it is not saved in the browser cache           
5\) **No redirection \(404\)**: When my product is offline, if I try to accede to the product in font-office a message is displayed: “This product is no longer available.” and the product isn’t displayed.        
If I click on Preview, I can see the product but a message is displayed “This product is not visible to your customers.”
* **Target category**: This search field is displayed if you select in the dropdown Permanent redirection to a category or Temporary redirection to a category.        
There is a placeholder: “To which category the page should redirect ?”           
If no category is selected, the Main Category is used.         
You can search by category name. When you start typing, if there are results, they are displayed under and you can click on it. Then, the selected category is displayed under the field.
* **Target product**: This search field is displayed if you select in the dropdown Permanent redirection to a product or Temporary redirection to a product.          
There is a placeholder: “To which product the page should redirect ?”              
You can search by product name or reference. When you start typing, if there are results, they are displayed under and you can click on it. Then, the selected product is displayed under the field.           
Delete selected category or product: You can remove the selected product or category by clicking on the cross. When you click on it, you have a modal to cancel or confirm the action.
* **Information message**: No redirection \(404\) = Do not redirect anywhere and display a 404 "Not Found" page.     
Permanent redirection \(301\) = Permanently display another product or category instead.     
Temporary redirection \(302\) = Temporarily display another product or category instead.   

* **Tags**: There is a placeholder: “Use a comma to create separate tags. E.g.: dress, cotton, party dresses.” To validate a tag, you can push Enter or comma key. The tags appears in Shop parameters &gt; Search &gt; Tags and are associated to the product. You can remove a tag by clicking on the cross. The tag is also removed in Shop parameters &gt; Search &gt; Tags. A drop-down next to the field is displayed when there are several languages installed \(disabled languages are diplayed in the drop-down\). It allows to choose in which language the field is displayed. Also, in the case of multilanguage, if an error occurs, then I must be warned in the message which language is problematic \([improvement 16299](https://github.com/PrestaShop/PrestaShop/issues/16299)\) 

* **Information message**: “Tags facilitate the product search for customers using the search bar” There is a read more link to open the following info: “Choose terms and keywords which your potential customers commonly would search for when looking for this product. Make sure that they are consistent with the tags you may have already defined. You can manage tag aliases in the Search section. If you add new tags, you have to rebuild the index.”

## Options tab

**As a merchant I want to be able to manage the options for my products.**

Here is the list of the elements of options tab:

### Product display

* **Visibility**: Option selector -  4 options. By default, everywhere is selected.       
	- **Everywhere**: The product is displayed in the catalog \(categories\) and can be found if you search for it.  
	- **Catalog only**: The product is displayed in the catalog \(categories\) and can’t be found if you search for it.    
	- **Search only**: The product is not displayed in the catalog \(categories\) and can be found if you search for it.  
	- **Nowhere**: The product is not displayed in the catalog \(categories\) and can’t be found if you search for it.     

### Availability

* **Available for order** - Switch button - Checkbox checked by default. 
IF you uncheck it
THEN the add to cart button is disabled in the product page in front-office and the “Show price” checkbox is displayed (checked).
* **Show price**  - Switch button  
IF the user unchecks it
THEN the product price isn’t displayed on the product page and product lists in front-office. For a pack, the price of the pack and the prices of the products contained in the pack are not displayed.

* **Web only**  - Switch button -  Checkbox not checked by default. 
WHEN checked AND “available for order” OR “show price” is checked
THEN a label “Online only” is displayed on the product page and product lists in front-office.

### Supplier

WHEN at least one supplier is enabled
THEN this section is displayed 

  * **Information message about suppliers** - Information message - “This interface allows you to specify the suppliers of the current product and its combinations, if any. You can specify supplier references according to previously associated suppliers.” Click on read more link to display the following information: “When using the advanced stock management tool \(see Shop Parameters &gt; Products settings\), the values you define \(price, references\) will be used in supply orders.”
  
  * **Choose the suppliers associated with this product**: All enabled suppliers are displayed with a checkbox before their names. If it’s checked, the product is associated to the supplier and displayed on the supplier page in front-office.
WHEN several suppliers are associated with a product
THEN uncheking one of them should delete the related data while keeping the values of the other suppliers intact.

  * **Default supplier**: 
IF all suplier checked
THEN it can set as default supplier by selecting the radio 

WHEN there is only one supplier checked
THEN the default supplier radio button is automatically checked for the supplier

WHEN there are many suppliers checked, you can change the default supplier. 

WHEN a default supplier is used
THEN the product's cost price is set by the default supplier's cost price. 

WHEN the user changes the cost price in the Price tab
THEN the value of the default supplier's cost price is also updated by the new changed value. And vice versa, when the user changes the default supplier cost price, the product cost price on the Price tab is updated with the new value filled in.

WHEN the user saves the product form
THEN the default supplier's cost price and the product's cost price should always be equal.

IF  at least one supplier is associated to the product 
THEN Supplier references is displayed

  * **Supplier reference\(s\)**  - Information message - "You can specify product reference(s) for each associated supplier. Click "Save" after changing selected suppliers to display the associated product references."

  * **Supplier dropdown**: A dropdown list appears to select the supplier for which the user wants to change supplier costs for his products.
  * **Products list**:
    * **The product name** - Text - Display the product name
    * **Supplier reference**: - Text - Field to specify the product reference for each supplier. 
    * **Cost price \(tax excl.\)** - Price - Field to specify the product's cost price for each supplier.
    * **Currency**: Dropdown with all installed and enabled currencies. If there are many currencies, the default one is selected by default. Allow to specify the product currency for each supplier.
