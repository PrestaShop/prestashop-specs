# SPECS PRODUCT PAGE

As a merchant I need to be able to correctly create, edit and delete my products.

## WHY

The add / edit product page (Catalog > Products) has already been migrated to Symfony for the 1.7.0 version, but many behaviours are not specified which have introduced regressions and bugs. We need to specify the whole behaviour of this page to make it easier to test and avoid any new bugs.

Furthermore, we have identified different issues related to this page that we should fix during the re-migration : https://github.com/PrestaShop/PrestaShop/issues/13891
 
 
## WHAT

Thus, this project aims at specifying the current and expected behaviour for every scenario a merchant could be dealing with when creating / editing a product for his/her customers. 


## SPECIFICATIONS

<a href="https://github.com/PrestaShop/prestashop-specs/blob/master/Catalog-products-add-edit.md#product-creation-edition">The first step is to detail the behavior of each field per tab when creating / editing a product.</a>

<a href="https://github.com/PrestaShop/prestashop-specs/blob/master/Catalog-products-add-edit.md#errors">The second step of this document is to detail the type of each fields and error messages per tab.</a>

The third step is to detail the multistore behavior.

<a id="product-creation-edition"></a>
## 1.	Product creation / edition on Back office

<a id="alltabs"></a>
### Elements in all tabs

**As a merchant I want to always see some elements when I create or edit a product.**

Some elements are displayed in all tabs. Here is the list of those elements :

- **Product name**: When you create a new product, this field is empty and there is a placeholder: “Enter your product name” 
Only the name in the default language must be filled, if the product name is not filled for all languages, then it must retrieve the product name in the default language. A drop-down next to the field is displayed when there are several languages installed and enabled. It allows to choose in which language the field is displayed. If the content does not exist in a language, it must retrieve the content of the default language. Also, in the case of multilanguage, if an error occurs, then I must be warned in the message which language is problematic. 

- **Product type**: Drop-down with 3 options: Standard product, Pack of products, Virtual product. Please note, when editing a standard product with combinations, you can’t change the type, the drop-down is disabled.

- **Sales**: This link redirect to Stats > product detail and is open in a new browser tab 

- **Product list**: Link that displays the list of all products filtered as in the catalog, with their id, name, price, quantity. If you click on the id or the name, you arrive on the product page in basic settings tab. If you click on the price, you arrive on the product page in pricing tab. If you click on the quantity, you arrive on the product page in the second tab which is: Quantities for a standard product without combinations or a pack, Combinations for a standard product with combination, Virtual product for a virtual product.

- **Help**: Link to display the help in the right menu.

- **Delete**: Button to delete the product. When you click on it, you have a modal to cancel or confirm the action.

- **Preview**: When you click on this button, it saves and open a new browser tab with the product displayed in front-office. If the product is disabled (offline), you have on the product page in front-office a message displayed: “This product is not visible to your customers.” Keyboard shortcut: ALT + SHIFT + V

- **Online**: When you click on this button, it saves and makes the product visible in front-office

- **Offline**: When you click on this button, it saves and makes the product invisible in front-office.

- **Save**: Button to save all changes made in all tabs. Keyboard shortcut: ALT + SHIFT + S.  If it’s saved with success, there is a green success message “Settings updated”. Otherwise, there is an error message.

- **Duplicate**: When you click on this button, it saves and duplicate the current product (the duplicated product will be offline).  The duplicated product must be exactly the same. Keyboard shortcut: ALT + SHIFT + D 

- **Go to catalog**: When you click on this button, it saves and redirect to catalog product list. Keyboard shortcut: ALT + SHIFT + Q

- **Add new product**: When you click on this button, it saves and opens a new empty product page. Keyboard shortcut: ALT + SHIFT + P

<a id="basicsettings"></a>
### Basic settings tab

**As a merchant I want to be able to complete the basic information of my products.**

Here is the list of the elements of basic settings tab:

- **Combinations**: If you have selected standard product in the drop-down, you have 2 radios buttons: simple product or product with combinations. If product with combination is selected, under the two radio buttons, there is a “combinations” link. When you click on it, you switch to combinations tab. If product with combinations was selected & combinations were generated,  when I change for simple product, a modal is displayed alerting all combinations will be deleted and ask to confirm or cancel the action. 

- **Reference**: The reference is displayed in the product details part in front-office.

- **Summary**: The text can be formatted thanks to the TinyMCE editor

- **Description**: The text can be formatted thanks to the TinyMCE editor

- **Quantity**: This field is not displayed for a product with combinations. If simple product is selected, under the quantity field, there is a “quantities” link. When you click on it, you switch to quantities tab (for a standard product) or to virtual product tab (for a virtual product). When you update the field in basic settings tab, the same field in quantities (for a standard product) / virtual product tab is updated. The quantity is displayed in front-office if the option “Display available quantities on the product page” in Shop parameters > Product settings is set to yes. This value is decremented when an order is placed except if the order status is Payement error. This value is incremented when the order status is cancelled, when you make a partial refund and check “Re-stock products” and when you return products and check “Re-stock products”.

- **Price tax excl**: When a value is filled, the price tax incl field is calculated automatically according to the tax rule chosen. To separate decimals a dot or a comma can be used, both should work no matter the language. When you change it, the same field in pricing tab is also updated.

- **Price tax incl**: When a value is filled, the price tax excl field is calculated automatically according to the tax rule chosen. To separate decimals a dot or a comma can be used, both should work no matter the language. When you change it, the same field in pricing tab is also updated.

- **Tax rule**: Drop-down with all tax rules enabled and a “no tax” option. When you change it, the price tax incl is updated. And the “tax rule” field in Pricing tab is also changed. If you select an United States tax rule, price tax incl = price tax excl because it is a tax per state and we can not say in which state is the shop. When you change it, the same field in pricing tab is also updated. Under the tax rule drop down, there is a “pricing” link. When you click on it, you switch to pricing tab. 

- **Search category**: Search field to search a category. You can search by category name. When you start typing, if there are results, they are displayed under and you can click on it. 

- **Select category**: Allows to associate categories to the product. A category is necessarily selected, it is impossible not to have one. When you create a new product, “Home” is selected.
When you search a category and click on the result, the category appears in “associated category” and is checked in the list. You can also select a category in the tree by clicking in the checkbox, then the category appears in “associated category”.

- **Unselect category**: You can unselect a category by unchecking the checkbox in the tree. Then, the category is removed in “associated category”. You can also click on the cross in “associated category”. Then, the checkbox for the corresponding category is unchecked. If you try to unselect all categories, you can’t do it for the last one.

- **Category tree**: When you create a new product, the tree is open for the first 2 levels of categories. I click on "collapse" it folds the whole tree. I can also click on each parent to folds / unfolds its subcategories. Categories are sorted by level and position:
Categ 1 level 1 position 1
Categ 3 level 1 position 2
Categ 2 level 1 position 3
   Categ 2-2 level 2 position 1
   Categ 2-1 level 2 position 2

- **Main category**: Radio button to select the main category of the product. There can only be one. The main category is the one that will be in the product URL, before the product name (http://domain_name/shop_folder/main_category/id-product_friendly_url.html) and in the breadcrumb in front-office you have all parent categories up to the main one.

- **Create a new category**: When you click on the button “Create a category”, this button disappears, a field “New category name” and a drop-down “parent of the category” are displayed with 2 buttons Cancel and Create.

- **New category name**: Allows to create quickly a new category. Alphanumeric field. Maximum 128 characters. Invalid characters are: <>;=#{} When you save, if your category name contains an invalid character, an error message under the field should be displayed “This value is not valid.”

- **Parent of the category**: Drop-down with all categories enabled, sorted by level and position:
Categ 1 level 1 position 1
Categ 3 level 1 position 2
Categ 2 level 1 position 3
   Categ 2-2 level 2 position 1
   Categ 2-1 level 2 position 2

- **Image upload**: Upload zone. When there is no image, you have the following message displayed “Drop images her or select files. Recommended size 800 x 800px for default theme. JPG, GIF or PNG format.” You can click in the entire zone to open the selector or you can drop one or many images in the entire zone. When there is already an image, you can click only on the frame with the “+” to open the selector. 

- **Image order**: You move the images in the product sheet, the order is well changed in front-office

- **Image caption**: You can click on an uploaded image and add a caption. You can put a caption by language. The caption is displayed in front-office when you hover the thumbnail image according to the selected language.  

- **Cover image**: You can click on an uploaded image to assign it as cover image. There is necessarily a cover image. There can be only one cover image. If you upload many images by pressing Ctrl, the first image selected is the cover image. It’s the image displayed in product list in front-office. You can change the cover image by clicking on an image, check the checkbox “cover image” and click on Save. If it was checked for another image, then it’s unchecked.

- **Zoom**: You can zoom on an uploaded image by clicking on it and click on “Zoom”. The image is open in its default size. You can close it by clicking on the cross, outside the image or pressing ESC key.

- **Delete**: You can click on an uploaded image to delete it. When you click on “delete”, you have a modal for cancel or confirm the action.

- **Bulk actions**: (issue #12773) You can press CTRL+Select many images. After selecting more than one image, the frame on the right is displayed with: 
caption field: You can enter a caption which will be applied to all images. If some selected images already had captions, they are replaced when clicking on Save. 
A “delete all” button to delete all the product images. When you click on “delete all”, you have a modal for cancel or confirm the action.

- **Add a feature**: Drop-down with all features. If you have not yet selected a feature, the “pre-defined value” drop-down is disabled and the “customized value” field should be also disabled (currently it’s not). When you select a feature, both fields (pre-defined & customized value) are enabled.

- **Feature pre-defined value**: Drop-down with all compositions of the selected feature. If you select a pre-defined value, the customized value should be disabled
because a feature can’t have both. When you add a feature with a pre-defined value, it’s added in all languages enabled.

- **Feature customized value**: If you start enter a customized value, the pre-defined value drop-down should be disabled because a feature can’t have both.
When you add a feature with a customized value, the feature is added in all languages enabled but the customized value field stays empty in the other languages than the selected one.

- **Delete feature**: Button to delete the feature. When you click on it, you have a modal for cancel or confirm the action. When you delete a feature, it’s deleted in all languages.

- **Add a brand**: Drop-down with all brands enabled. The brand is displayed in the product page in front-office in product details tab. When you add a brand, it’s added in all languages enabled.

- **Delete a brand**: Button to delete the brand. When you click on it, you have a modal for cancel or confirm the action. When you delete a brand, it’s deleted in all languages.

- **Add a related product**: Search field to search a product. You can search by product name or product reference. When you start typing, if there are results, they are displayed under and you can click on it. It should not be possible to associate the same product with itself. It should not be possible to associate a product already associated to this product. You can have many associated products.

- **Delete a related product**: The trash button is to delete all related products. When you click on it, you have a modal for cancel or confirm the action. If you want to delete only one associated product, you can click on the cross. When you click on it, you have a modal for cancel or confirm the action.

- **Pack search for a product**: Select Pack of products as product type in the drop-down. A search field to search a product is displayed. You can search by product name or product reference. When you start typing, if there are results, they are displayed under and you can click on it. Then, the product name is inserted in the search bar.

**Pack quantity**<a id="packqty"></a>
- **Pack add a product**: Button to add the product in the quantity specified to the pack.

- **Pack delete a product**: When you hover one of the pack products, a trash appears to remove the product from the pack. When you click on it, you have a modal for cancel or confirm the action.

### Second tab

The second tab name changes depending on the type of product selected : 
- **<a href="https://github.com/PrestaShop/prestashop-specs/blob/master/Catalog-products-add-edit.md#quantities-tab">Quantities</a>** for a standard product without combinations or a pack
- **<a href="https://github.com/PrestaShop/prestashop-specs/blob/master/Catalog-products-add-edit.md#virtual-product-tab">Virtual product</a>** for a virtual product.
- **Combinations** for a standard product with combination

<a id="quantities"></a>
### Quantities tab

**As a merchant I want to be able to manage my products quantities.**

Here is the list of the elements of quantities tab:

- **Quantity**: When you update the field in quantities tab, the same field in basic settings tab is updated. The quantity is displayed in front-office if the option “Display available quantities on the product page” in Shop parameters > Product settings is set to yes. This value is decremented when an order is placed except if the order status is Payement error. This value is incremented when the order status is cancelled, when you make a partial refund and check “Re-stock products” and when you return products and check “Re-stock products”.

- **Minimum quantity for sale**: In front-office (product page & quick-view), this value is indicated in the quantity field. When this value is > 1, a message is displayed under the quantity field in front-office “The minimum purchase order quantity for the product is X.”

- **Stock location**: This field should not be displayed for a virtual product.

- **Low stock level**: You can define a value and choose or not to receive an email when the product quantity is <= to this value.

- **Send me an email when the quantity is below or equals this level**: Checkbox, when it’s checked an email is sent to all the employees who have at least the “view” right on the stock page when the quantity is below or equal to this value.

- **Pack quantities**: Dropdown with 4 options, displayed only when the product type is pack:
 1) **Decrement pack only**: Only the pack quantity is decremented when you order it.
 2) **Decrement products in pack only**: Only the products contained in the pack are decremented, the pack isn’t.
 3) **Decrement both**: The pack and the products contained in the pack are decremented.
 4) **Default**: Can be one of the 3 values above, it depends on what is selected in Shop parameters > Products > Default pack stock management.

- **Availability preferences, behavior when out of stock: 3 radios buttons**: 
 1) **Deny orders**: when it’s checked and product quantity is <= 0, in front-office product page and quick view, the message filled in Shop parameters > Product settings > Label of out-of-stock products with denied backorders is displayed under the add to cart button, which is disabled.
 2) **Allow orders**: when it’s checked and product quantity is <= 0, in front-office product page and quick view, the message filled in Shop parameters > Product settings > Label of out-of-stock products with allowed backorders is displayed under the add to cart button, which is enabled.
 3) **Use default behavior (Deny orders or Allow orders)**: the default behavior is set in Shop parameters > Product settings > Allow ordering of out-of-stock products: Yes or No. This value is checked when you create a new product.

- **Label when in stock**:  If completed and product quantity is > 0, it is displayed in front-office product page and quick view, instead of the message filled in Shop parameters > Product settings > Label of in-stock products. A drop-down next to the field is displayed when there are several languages installed and enabled. It allows to choose in which language the field is displayed. Also, in the case of multilanguage, if an error occurs, then I must be warned in the message which language is problematic.        

- **Label when out of stock (and back order allowed)**: If completed and product quantity is <= 0, it is displayed in front-office product page and quick view, instead of the message filled in Shop parameters > Product settings > Label of out-of-stock products with allowed backorders. A drop-down next to the field is displayed when there are several languages installed and enabled. It allows to choose in which language the field is displayed. Also, in the case of multilanguage, if an error occurs, then I must be warned in the message which language is problematic.

- **Availability date**: Date field. The date should be displayed in front-office in the product details part, no matter the availability of the product.

<a id="virtualproduct"></a>
### Virtual product tab

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
 1) **Deny orders**: when it’s checked and product quantity is <= 0, in front-office product page and quick view, the message filled in Shop parameters > Product settings > Label of out-of-stock products with denied backorders is displayed under the add to cart button, which is disabled.
 2) **Allow orders**: when it’s checked and product quantity is <= 0, in front-office product page and quick view, the message filled in Shop parameters > Product settings > Label of out-of-stock products with allowed backorders is displayed under the add to cart button, which is enabled.
 3) **Use default behavior (Deny orders or Allow orders)**: the default behavior is set in Shop parameters > Product settings > Allow ordering of out-of-stock products: Yes or No. This value is checked when you create a new product.

- **Label when in stock**:  If completed and product quantity is > 0, it is displayed in front-office product page and quick view, instead of the message filled in Shop parameters > Product settings > Label of in-stock products. A drop-down next to the field is displayed when there are several languages installed and enabled. It allows to choose in which language the field is displayed. Also, in the case of multilanguage, if an error occurs, then I must be warned in the message which language is problematic.

- **Label when out of stock (and back order allowed)**: If completed and product quantity is <= 0, it is displayed in front-office product page and quick view, instead of the message filled in Shop parameters > Product settings > Label of out-of-stock products with allowed backorders. A drop-down next to the field is displayed when there are several languages installed and enabled. It allows to choose in which language the field is displayed. Also, in the case of multilanguage, if an error occurs, then I must be warned in the message which language is problematic.

- **Availability date**: Date field. The date should be displayed in front-office in the product details part, no matter the availability of the product.

<a id="shipping"></a>
### Shipping tab

**As a merchant I want to be able to manage carriers information for my products.**

This tab is not displayed for a virtual product.

Here is the list of the elements of shipping tab:

- **Width**: By default it’s filled with 0. I set the width, carriers that does not accept products greater than this width are not displayed in front-office. The dimension unit displayed next to the field is the one defined in International > Localization. To separate decimals a dot or a comma can be used, both should work no matter the language. 

- **Height**: By default it’s filled with 0. I set the height, carriers that does not accept products greater than this height are not displayed in front-office. The dimension unit displayed next to the field is the one defined in International > Localization. To separate decimals a dot or a comma can be used, both should work no matter the language.

- **Depth**: By default it’s filled with 0. I set the depth, carriers that does not accept products greater than this depth are not displayed in front-office. The dimension unit displayed next to the field is the one defined in International > Localization. To separate decimals a dot or a comma can be used, both should work no matter the language.

- **Weight**: By default it’s filled with 0. I set the weight, carriers that does not accept products greater than this weight are not displayed in front-office. The weight unit displayed next to the field is the one defined in International > Localization. To separate decimals a dot or a comma can be used, both should work no matter the language.

- **Delivery time**: 3 radio buttons: 
 1) **None**: No delivery time is displayed on the product page in front-office
 2) **Default delivery time**: If the product is in stock, the value filled in Shop parameters > Products settings > “Delivery time of in-stock products” is displayed on the product page in front-office. If the product is out of stock but orders are allowed, the value filled in Shop parameters > Products settings > “Delivery time of out-of-stock products with allowed backorders” is displayed on the product page in front-office. There is an “edit” link that opens Shop parameters > Products settings in a new browser tab next to the radio button label. 
 3) **Specific delivery time to this product**: If the product is in stock, the value filled in “Delivery time of in-stock products” is displayed on the product page in front-office. If the product is out of stock but orders are allowed, the value filled in “Delivery time of out-of-stock products with allowed orders” is displayed on the product page in front-office.

- **Delivery time of in-stock products**: There is a placeholder: “Delivered within 3-4 days” and a subtitle under the field: “Leave empty to disable.” A drop-down next to the field is displayed when there are several languages installed and enabled. It allows to choose in which language the field is displayed. Also, in the case of multilanguage, if an error occurs, then I must be warned in the message which language is problematic.

- **Delivery time of out-of-stock products with allowed orders**: There is a placeholder: “Delivered within 5-7 days” and a subtitle under the field: “Leave empty to disable.” A drop-down next to the field is displayed when there are several languages installed and enabled. It allows to choose in which language the field is displayed. Also, in the case of multilanguage, if an error occurs, then I must be warned in the message which language is problematic.

- **Additional shipping fees**: By default, it’s filled with 0.000000 The amount is added to the total shipping cost according to the carrier selected in front-office. 

- **Available carriers**: Checkbox with all carriers with the id of the carrier, the name and the delay (issue 11379) Only the selected carriers can be displayed in FO. There is an information message under all the checkboxes: “If no carrier is selected then all the carriers will be available for customers orders”

<a id="pricing"></a>
### Pricing tab

**As a merchant I want to be able to manage the prices of my products**

Here is the list of the elements of pricing tab:

- **(Retail) price tax excl ecotax included**: "ecotax included" is displayed only if the “ecotax” option is enabled in International > Taxes. Except for a virtual product. When a value is filled, the price tax incl field is calculated automatically according to the tax rule chosen. To separate decimals a dot or a comma can be used, both should work no matter the language. When you change it, the same field in basic settings tab is also updated.

- **(Retail) price tax incl ecotax included**: "ecotax included" is displayed only if the “ecotax” option is enabled in International > Taxes. Except for a virtual product. When a value is filled, the price tax excl field is calculated automatically according to the tax rule chosen. To separate decimals a dot or a comma can be used, both should work no matter the language. When you change it, the same field in basic settings tab is also updated. 

- **Tax rule**: Drop-down with all tax rules enabled and a “no tax” option. When you change it, the price tax incl is updated. And the “tax rule” field in Pricing tab is also changed. If you select an United States tax rule, price tax incl = price tax excl because it is a tax per state and we can not say in which state is the shop. When you change it, the same field in basic settings tab is also updated.

- **Manage tax rule**: Open in a new browser tab International > Taxes

- **Display the "On sale!" flag on the product page, and on product listings**: When the checkbox is checked,, it displays a banner "PROMO !" (not linked to a possible promotion in progress) on the image of the product in the product listing and on the product page in front-office. 

- **Final retail price banner**: Displays the final prices tax excl and tax incl. Prices are updated when they are modified above.

- **Price per unit tax excl**: By default, it’s set to 0.000000 You can fill the unit price if you sell products per unit. To separate decimals a dot or a comma can be used, both should work no matter the language. Displayed in the product page in front-office.

- **Unity field**: There is a placeholder: “Per kilo, per litre”. You can fill the name of the unit. Displayed in the product page in front-office next to the unit price

- **Ecotax tax incl**: This field is displayed if the “ecotax” option is enabled in International > Taxes. Except for a virtual product this field shouldn’t be displayed (issue 15038). The ecotax is displayed in FO under the product price: “Including €X.XX for ecotax” 

- **Net turnover excluding tax**: This information is displayed when the ecotax is enabled and if it is not a virtual product. It’s the amount of Price (tax excl.) - ecotax (tax incl.).
It is taken into account for the calculations instead of the field "Price (tax excl.)" when ecotax tax incl field is different from 0. This value is recalculated when the merchant will change one of the following fields: Price (tax excl.) ecotax included, Price (tax incl.) ecotax included & Ecotax (tax incl.) 

- **Cost price tax excl**: By default, it’s set to 0.000000 It’s used for margin calculations. To separate decimals a dot or a comma can be used, both should work no matter the language. 

- **Add a specific price**: You can’t add the same specific price with same conditions twice. If you try, you have an error message “A specific price already exists for these parameters.” and the second specific price isn’t created. 
This button opens a form with the following fields :

  - **Currencies**: Drop down with all the currencies enabled. You can select one currency or select “all currencies”, so that the specific price is available in all currencies. By default, “all currencies” is selected.

  - **Countries**: Drop down with all the countries enabled & disabled. You can select one country or select “all countries”, so that the specific price is available in all countries. By default, “all countries” is selected.
  
  - **Groups**: Drop down with all customers groups. You can select one group or select “all groups”, so that the specific price is available for all customers groups.. By default, “all groups” is selected.

  - **Customers**: There is a placeholder: “All customers”. If no customer is selected, the specific price is available for all customers. You can search a customer by name, lastname or email. Enabled customers with corresponding name, lastname or email address are displayed under the field. If you enter something and no results are found, when you click outside the field, what has been entered is deleted. You can click, to select it. You can select only one customer. You can remove it by clicking on the cross. When you click on it, you have a modal to cancel or confirm the action.

  - **Combinations**: This drop down is displayed only for a product with combinations. All the combinations are listed. You can select one combination or select “apply to all combinations”, so that the specific price is available for all combinations. By default, “Apply to all combinations” is selected.

  - **Available from**: Datefield. The specific price is applied only from the selected date and hour. When you click on the field a calendar is displayed and you can choose a date and also hour and minutes (improvement 11329). If you enter a wrong value (numbers or letter), when you click outside the field, the date previously selected (when you opened the calendar) is completed.

  - **Available to**: Datefield. The specific price is applied until the selected date and hour.. When you click on the field a calendar is displayed and you can choose a date and also hour and minutes (improvement 11329). If you enter a wrong value (numbers or letter), when you click outside the field, the date previously selected (when you opened the calendar) is completed.

  - **Starting at**: Quantity from which the specific price is applied. By default, it’s set to 1. In front-office the specific price isn’t displayed if this quantity isn’t reached.

  - **Product price tax excl**: To separate decimals a dot or a comma can be used, both should work no matter the language. This value change the original product price tax excl. In front-office, this price is displayed instead of the other.

  - **Leave initial price**: If the checkbox is not checked,  you can fill the product price tax excl field. Otherwise, the product price tax excl field is disabled. By default the checkbox is checked.

  - **Apply a discount of**: By default, it’s set to 0.000000 You can fill the discount amount or percent. To separate decimals a dot or a comma can be used, both should work no matter the language. 

  - **Apply a discount in**: Drop down allowing to choose if the specific price is in amount or in percent. There are 2 options: Default currency symbol & %. By default the default currency symbol is selected.

  - **Apply a discount**: Drop down with 2 options: tax included and tax excluded. It’s not displayed if you select a reduction in percent.

  - **Apply**: When you click on it, the specific price is created and you have a success message “Settings updated”. 

  - **Cancel**: If you click on Cancel, the form with all specific prices fields is closed. If you click again on Add a specific price, every fields are reseted to their default values.

- **List of specific prices & catalog price rules**: You see the specific price with all the details: rule, combination, currency, country, group, customer, fixed price, impact, period, from, actions (delete, update). Rule column contains “--” for a specific price. Here are also listed the catalog prices rules. Rule column contains the name of the catalog price rule. Actions edit & delete are not displayed for a catalog price rule.

- **Edit a specific price**: You can edit an existing specifice price. It opens a modal with all the fields described above. You can close the modal by clicking on the cross, on cancel or pushing ESC key. You can save your changes by clicking on Apply. A success message “Settings updated” is displayed.

- **Delete a specific price**: You can delete a specific price by clicking on the trash. When you click on it, you have a modal to cancel or confirm the action.

- **Priorities**: 4 dropdown with the same 4 options: Shop, Currency, Country, Group. By default, “group” is selected for the first dropdown, “currency” for the second, “country” for the third and “shop” for the last. Allow to define which specific price is applied first if a customer fit into multiple specific price conditions.

- **Apply to all products**:	Checkbox to apply the same priorities for all products.

<a id="seo"></a>
### SEO tab

**As a merchant I want to be able to manage my SEO information for my products.**

Here is the list of the elements of SEO tab:

- **SEO preview**: It is a preview of your search engine result, it allows to see how your product page will appear in search engines results. If the meta title field is empty, the product name is displayed. If I edit the product name and if there is nothing in the meta title field, it’s displayed directly in the preview. If I change the name of the product, the preview will not change until the meta title field is complete. 
If the meta description field is empty, the product description is displayed. If I click on Basic Settings, change the description, save, refresh the page and return to SEO, the description of the preview has changed. When you start to complete meta title, meta description  and friendly URL fields, it’s displayed directly in the preview. The preview is displayed in the selected language. Issue 14984

- **Meta title**: There is a placeholder: “To have a different title from the product name, enter it here.” This data is displayed in the code of the page in the <title> tag. If the field is empty, the product name will be used. A counter indicates the number of characters used on 70 characters recommended. A drop-down next to the field is displayed when there are several languages installed and enabled. It allows to choose in which language the field is displayed. Also, in the case of multilanguage, if an error occurs, then I must be warned in the message which language is problematic. 

- **Meta description**: There is a placeholder: “To have a different description than your product summary in search results pages, write it here.” This data is displayed in the code of the page in the <meta name="description"> tag. If the field is empty, the product description will be used. A counter indicates the number of characters used on 160 characters recommended. A drop-down next to the field is displayed when there are several languages installed and enabled. It allows to choose in which language the field is displayed. Also, in the case of multilanguage, if an error occurs, then I must be warned in the message which language is problematic. 

- **Friendly URL**: This field is automatically field when you enter the product name. The spaces are replaced by dashes. A drop-down next to the field is displayed when there are several languages installed and enabled. It allows to choose in which language the field is displayed. Also, in the case of multilanguage, if an error occurs, then I must be warned in the message which language is problematic. 

- **Reset URL**: This buttons allows to reset the friendly URL field as it was before the last change. 

- **Information message**: Friendly URLs are currently disabled. To enable it, go to SEO and URLs. Friendly URLs are currently enabled. To disable it, go to SEO and URLs. SEO and URLs link is opened in a new tab.

- **Indexation by search engines**: Yes / No. By default it should be on “Yes”. If seted on “Yes”, the product URL is indexed. If seted on “No”, product URL isn’t indexed.

- **Redirection when offline**: Dropdown with 5 options:
 1) **Permanent redirection to a category (301)**: When my product is offline, I choose a category to redirect to. This is a "definitive" redirection and therefore this parameter is saved in the browser cache and even when I reactivate the product, the redirection can still be effective until the browser cache is cleared.
 2) **Temporary redirection to a category (302)**: When my product is offline, I can choose a category to which my current product is redirected. The new category will only be displayed when my product is offline, it is not saved in the browser cache
 3) **Permanent redirection to a product (301)**: When my product is offline, I choose another product to redirect to. This is a "definitive" redirection and therefore this parameter is saved in the browser cache and even when I reactivate the product, the redirection can still be effective until the browser cache is cleared.
 4) **Temporary redirection to a product (302)**: When my product is offline, I can choose a product to which my current product is redirected. The new product sheet will only be displayed when my product is offline, it is not saved in the browser cache
 5) **No redirection (404)**: When my product is offline, if I try to accede to the product in font-office a message is displayed: “This product is no longer available.” and the product isn’t displayed.. If I click on Preview, I can see the product but a message is displayed “This product is not visible to your customers.”

- **Target category**: This search field is displayed if you select in the dropdown Permanent redirection to a category or Temporary redirection to a category. There is a placeholder: “To which category the page should redirect ?” If no category is selected, the Main Category is used. You can search by category name. When you start typing, if there are results, they are displayed under and you can click on it. Then, the selected category is displayed under the field. 

- **Target product**: This search field is displayed if you select in the dropdown Permanent redirection to a product or Temporary redirection to a product. There is a placeholder: “To which product the page should redirect ?” You can search by product name or reference. When you start typing, if there are results, they are displayed under and you can click on it. Then, the selected product is displayed under the field. 
Delete selected category or product: You can remove the selected product or category by clicking on the cross. When you click on it, you have a modal to cancel or confirm the action.

- **Information message**: No redirection (404) = Do not redirect anywhere and display a 404 "Not Found" page.
Permanent redirection (301) = Permanently display another product or category instead.
Temporary redirection (302) = Temporarily display another product or category instead.

<a id="options"></a>
### Options tab

**As a merchant I want to be able to manage the options for my products.**

Here is the list of the elements of options tab:

- **Visibility**: Drop-down with 4 options. By default, everywhere is selected. 
 1) **Everywhere**: The product is displayed in the catalog (categories) and can be found if you search for it.
 2) **Catalog only**: The product is displayed in the catalog (categories) and can’t be found if you search for it.
 3) **Search only**: The product is not displayed in the catalog (categories) and can be found if you search for it.
 4) **Nowhere**: The product is not displayed in the catalog (categories) and can’t be found if you search for it.

- **Available for order**: Checkbox checked by default. If you uncheck it, the add to cart button is disabled in the product page in front-office and the “show price” checkbox is displayed (checked).

- **Show price**: This checkbox appears when you unselect “available for order” checkbox and it’s checked. If you uncheck it, the product price isn’t displayed on the product page and product lists in front-office.

- **Web only**: Checkbox not checked by default. When checked and when the product is “available for order” OR “show price” is checked, a label “Online only” is displayed on the product page and product lists in front-office.

- **Tags**: There is a placeholder: “Use a comma to create separate tags. E.g.: dress, cotton, party dresses.” To validate a tag, you can push Enter or comma key. The tags appears in Shop parameters > Search > Tags and are associated to the product. You can remove a tag by clicking on the cross. The tag is also removed in Shop parameters > Search > Tags. A drop-down next to the field is displayed when there are several languages installed and enabled. It allows to choose in which language the field is displayed. Also, in the case of multilanguage, if an error occurs, then I must be warned in the message which language is problematic. 

- **Information message**: “Tags facilitate the product search for customers using the search bar” There is a read more link to open the following info: “Choose terms and keywords which your potential customers commonly would search for when looking for this product. Make sure that they are consistent with the tags you may have already defined. You can manage tag aliases in the Search section. If you add new tags, you have to rebuild the index.”

- **Condition**: Drop-down with 3 options: New, Used, Refurbished. By default, New is selected.

- **Display condition on product page**: Checkbox, by default it’s not checked. When checked, the condition is displayed on the product page in front-office.

- **ISBN**: Field, only numbers are accepted. The International Standard Book Number (ISBN) is used to identify books and other publications. 

- **EAN-13 or JAN barcode**: Field, only numbers are accepted. This type of product code is specific to Europe and Japan, but is widely used internationally. It is a superset of the UPC code: all products marked with an EAN will be accepted in North America.

- **UPC barcode**: Field, only numbers are accepted. This type of product code is widely used in the United States, Canada, the United Kingdom, Australia, New Zealand and in other countries. 

- **Add a customization field**: You can click several times on this button to add multiple customization fields. Fields are displayed on the product page in front-office. When you click on it that opens a form with the following fields:

  - **Label**: Enter the name of the field which is displayed on the product page in front-office. A drop-down next to the field is displayed when there are several languages installed and enabled. It allows to choose in which language the field is displayed. In the case of multilanguage, if an error occurs, then I must be warned in the message which language is problematic.       

  - **Type**: Drop-down with 2 options: text & file. By default text is selected.

  - **Delete**: Button to delete the field. When you click on it, you have a modal to cancel or confirm the action.

  - **Required**: Checkbox not checked by default. When checked the field is required in front-office and you can’t add the product to the cart while it’s not completed.

- **Attach a new file**: Button allowing to add files to the product page. When you click on it, a form is opened with the elements below. If you click a second time on it, the form is closed. If you want to add many files, you need to add the first one before adding another one.

  - **Choose files**: You can browse and choose files 

  - **Title**: Field with the title of the document, displayed in front-office

  - **Description**: Field with the description of the document, displayed in front-office

  - **Add**: Button to add the file. After clicking on it the file is displayed in a table with 3 columns: Checkbox Title, File name & Type. There is a checkbox allowing to check/uncheck all the files (issue 9790)
When the checkbox is checked, the file is displayed on the product page (attachments tab) in front-office. When the checkbox isn’t checked, the file isn’t displayed. If there is only 1 file and not checked, attachments tab isn’t displayed in front-office. The files uploaded through the product page in back-office are listed in Catalog > Files.

  - **Cancel**: Button to close the form
 
- **Suppliers**: This part is displayed only if you have created and enabled at least one supplier. Indicating the product's supplier is not really important for customers, but it may turn out to be an essential part for the merchant’s internal management, not least when managing stock: the merchant simply needs to know who he bought the product from.

  - **Information message about suppliers**: “This interface allows you to specify the suppliers of the current product and its combinations, if any. You can specify supplier references according to previously associated suppliers.” Click on read more link to display the following information: “When using the advanced stock management tool (see Shop Parameters > Products settings), the values you define (price, references) will be used in supply orders.”

  - **Choose the suppliers associated with this product**: All enabled suppliers are displayed with a checkbox before their names. If it’s checked, the product is associated to the supplier and displayed on the supplier page in front-office. 

  - **Default supplier**: When you check a supplier, a radio button allowing to choose the default supplier appears.
When there is only one supplier checked, the default supplier radio button is automatically checked (issue 9580)
When there are many suppliers checked, it’s not mandatory to select a default supplier. You can save without choosing a default supplier.

 - **Supplier reference(s)**: This part is displayed only if you have associated at least one supplier to the product. The supplier's section also features a table that enables you to set the precise reference and unit price/currency for each product combination, per supplier. If the product has more than one supplier, the table will display each supplier one after the other.

  - **Information message about supplier reference(s)**: “You can specify product reference(s) for each associated supplier. Click "Save" after changing selected suppliers to display the associated product references.”

  - **Table of suppliers**:
    - **The product name**: Display the product name
    - **Supplier reference**: Field to specify the product reference for each supplier. 
    - **Price (tax excl.)**: Field to specify the product price for each supplier.
    - **Currency**: Dropdown with all installed and enabled currencies. If there are many currencies, the default one is selected by default. Allow to specify the product currency for each supplier.

<a id="errors"></a>    
## 2.	Type of each field & errors message 

**As a merchant I want to know if there are errors when I complete a field.**
<a id="errorsalltabs"></a>
### Elements in all tabs

- **Product name**: Mandatory alphanumeric field. It should have minimum 3 characters and maximum 128. If you try to enter more than 128 chars, an error message is displayed under the field: “This value is too long. It should have 128 character or less.” Prohibited characters are: ={}<>;# If you enter an invalid character, an error message is displayed under the field: ”This value is not valid.”
If it’s not filled in the default language, when you save, a message “This value should not be blank.” is displayed under the field
<a id="errorsbasicsettings"></a>
### Basic settings tab

- **Reference**: Alphanumeric field. Maximum 128 characters. Prohibited characters: ={}<>; They should be listed in the error message (currently they are not).

- **Summary**: Long text editor with tiny MCE. By default, maximum 800 characters (can be changed in Shop parameters > Products > Max size of short description). A counter indicates the number of characters remaining. If you enter more characters than the number allowed and save, an error is displayed “This value is too long. It should have XX characters or less.”

- **Description**: Long text editor with tiny MCE. Maximum 21844 characters. A counter indicates the number of characters remaining. If you enter more characters than the number allowed and save, an error is displayed “This value is too long. It should have 21844 characters or less.”

- **Quantity**: This field is not displayed for a standard product with combinations. Integer field, only integers are allowed. When there is more than 10 numbers, an error is displayed “This value is not valid”. If you enter a number with decimal (ex 30,5 or 30.5) and save, an error should be displayed “This value is not valid”. If you enter anything other than numbers and save an error is displayed under the field “This value is not valid.”

- **Price tax excl**: Decimal field. If you enter more than 10 numbers before the dot/comma and save, an error is displayed under the field “This value is not valid”. If you enter anything other than numbers and save, an error is displayed under the field “This value is not valid”. If you enter more than 6 numbers after the dot/comma and save, an error is displayed under the field “This value is not valid”.

- **Price tax incl**: Decimal field. If you enter more than 10 numbers before the dot/comma and save, an error is displayed under the field “This value is not valid”. If you enter anything other than numbers and save, an error is displayed under the field “This value is not valid”. If you enter more than 6 numbers after the dot/comma and save, an error is displayed under the field “This value is not valid”.

- **New category name**: Alphanumeric field. Maximum 128 characters. Invalid characters are: <>;=#{} When you save, if your category name contains an invalid character, an error message under the field should be displayed “This value is not valid.”

- **Image upload**: If you try to upload another format than JPG, GIF or PNG, you have an error: “image_name.ext: Image format not recognized, allowed format are: .gif, .jpg, .png”

- **Image caption**: When you click on “Save image settings” it shows at the top left a green message “Settings updated”. Alphanumeric field. Maximum 128 characters. Invalid characters are: ={}<> If you try to enter more than 128 chars, an error message is displayed under the field: “This value is too long. It should have 128 character or less.” When you save, if your image caption name contains an invalid char, an error message under the field should be displayed “This value is not valid.”

- **Feature customized value**: Alphanumeric field. Maximum 255 characters. Prohibited characters are: ={}<> If you try to enter more than 255 chars, an error message should be displayed under the field: “This value is too long. It should have 255 character or less.” When you save, if your customized value contains an invalid char, an error message under the field should be displayed “This value is not valid.”

- **Pack quantity**: Integer field, only integers are allowed. If you enter a number with decimal (ex 1,5 or 1.5) and click on add, an error should be displayed under the field “This value is not valid.”. If you try to enter anything other than numbers, it’s not filled in the field.

- **Minimum quantity for sale**: Integer field, only integers are allowed. By default it’s set to 1. I can’t order less, only equal or more. If you put nothing in this field and save, an error is displayed under the field “This value should not be blank.” If you enter anything other than numbers and save an error is displayed under the field “This value is not valid.” If you enter a number with decimal (ex 30,5 or 30.5) and save, an error is displayed under the field “This value is not valid.”. 

<a id="errorsquantities"></a>
### Quantities tab

- **Stock location**: Alphanumeric field. It should have maximum 64 characters. If you try to enter more than 64 chars, an error message should be displayed under the field: “This value is too long. It should have 64 character or less.” Prohibited characters are: ={}<>; If you enter an invalid character, an error message should be displayed under the field: ”This value is not valid.”

- **Low stock level**: Integer field, only integers are allowed. There is a placeholder “Leave empty to disable”. If you enter anything other than numbers and save an error is displayed under the field “This value is not valid.” If you enter a number with decimal (ex 30,5 or 30.5) and save, an error is displayed under the field “This value is not valid.”.

- **Label when in stock**: Alphanumeric field. It should have maximum 255 characters. If you try to enter more than 255 chars, an error message should be displayed under the field: “This value is too long. It should have 255 character or less.” Prohibited characters are: ={}<> If you enter an invalid character, an error message should be displayed under the field: ”This value is not valid.”

- **Label when out of stock (and back order allowed)**: Alphanumeric field. It should have maximum 255 characters. If you try to enter more than 255 chars, an error message should be displayed under the field: “This value is too long. It should have 255 character or less.” Prohibited characters are: ={}<> If you enter an invalid character, an error message should be displayed under the field: ”This value is not valid.” 

<a id="errorsvirtualproduct"></a>
### Virtual product tab

- **Low stock level**: Integer field, only integers are allowed. There is a placeholder “Leave empty to disable”. If you enter anything other than numbers and save an error is displayed under the field “This value is not valid.” If you enter a number with decimal (ex 30,5 or 30.5) and save, an error is displayed under the field “This value is not valid.”.

- **Associated files (file name field)**: Alphanumeric field. It should have maximum 255 characters. If you try to enter more than 255 chars, an error message should be displayed under the field: “This value is too long. It should have 255 character or less.” Prohibited characters are: ={}<> If you enter an invalid character, an error message should be displayed under the field: ”This value is not valid.”

- **Number of allowed download**: Integer field, only integers are allowed. When there is more than 10 numbers, an error should be displayed “This value is not valid”. If you enter a number with decimal (ex 30,5 or 30.5) and save, an error should be displayed “This value is not valid”. If you enter anything other than numbers and save an error is displayed “This value is not valid.”

- **Number of days**: Integer field, only integers are allowed. When there is more than 10 numbers, an error should be displayed “This value is not valid”. If you enter a number with decimal (ex 30,5 or 30.5) and save, an error should be displayed “This value is not valid”. If you enter anything other than numbers and save an error is displayed “This value is not valid.”

- **Label when in stock**: Alphanumeric field. It should have maximum 255 characters. If you try to enter more than 255 chars, an error message should be displayed under the field: “This value is too long. It should have 255 character or less.” Prohibited characters are: ={}<> If you enter an invalid character, an error message should be displayed under the field: ”This value is not valid.”

- **Label when out of stock (and back order allowed)**: Alphanumeric field. It should have maximum 255 characters. If you try to enter more than 255 chars, an error message should be displayed under the field: “This value is too long. It should have 255 character or less.” Prohibited characters are: ={}<> If you enter an invalid character, an error message should be displayed under the field: ”This value is not valid.”

<a id="errorscombinations"></a>
### Combinations tab

**TO DO**

<a id="errorsshipping"></a>
### Shipping tab

- **Width**: Decimal field. When there is more than 15 numbers, an error should be displayed “This value is not valid”. If you enter anything other than numbers and save an error is displayed under the field “This value is not valid.” If you enter more than 3 numbers after the dot/comma and save, an error is displayed under the field “This value is not valid”.

- **Height**: Decimal field. When there is more than 15 numbers, an error should be displayed “This value is not valid”. If you enter anything other than numbers and save an error is displayed under the field “This value is not valid.” If you enter more than 3 numbers after the dot/comma and save, an error is displayed under the field “This value is not valid”.

- **Depth**: Decimal field. When there is more than 15 numbers, an error should be displayed “This value is not valid”. If you enter anything other than numbers and save an error is displayed under the field “This value is not valid.” If you enter more than 3 numbers after the dot/comma and save, an error is displayed under the field “This value is not valid”.

- **Weight**: Decimal field. When there is more than 15 numbers, an error should be displayed “This value is not valid”. If you enter anything other than numbers and save an error is displayed under the field “This value is not valid.” If you enter more than 3 numbers after the dot/comma and save, an error is displayed under the field “This value is not valid”.

- **Delivery time of in-stock products**: Alphanumeric field. It should have maximum 255 characters. If you try to enter more than 255 chars, an error message should be displayed under the field: “This value is too long. It should have 255 character or less.” Prohibited characters are: ={}<> If you enter an invalid character, an error message should be displayed under the field: ”This value is not valid.”

- **Delivery time of out-of-stock products with allowed orders**: Alphanumeric field. It should have maximum 255 characters. If you try to enter more than 255 chars, an error message should be displayed under the field: “This value is too long. It should have 255 character or less.” Prohibited characters are: ={}<> If you enter an invalid character, an error message should be displayed under the field: ”This value is not valid.” 

- **Additional shipping fees**: Decimal field. If you enter more than 10 numbers before the dot/comma and save, an error is displayed under the field “This value is not valid”. If you enter anything other than numbers and save, an error is displayed under the field “This value is not valid”. If you enter more than 6 numbers after the dot/comma and save, an error is displayed under the field “This value is not valid”. 

<a id="errorspricing"></a>
### Pricing tab

- **Price tax excl**: Decimal field. If you enter more than 10 numbers before the dot/comma and save, an error is displayed under the field “This value is not valid”. If you enter anything other than numbers and save, an error is displayed under the field “This value is not valid”. If you enter more than 6 numbers after the dot/comma and save, an error is displayed under the field “This value is not valid”.

- **Price tax incl**: Decimal field. If you enter more than 10 numbers before the dot/comma and save, an error is displayed under the field “This value is not valid”. If you enter anything other than numbers and save, an error is displayed under the field “This value is not valid”. If you enter more than 6 numbers after the dot/comma and save, an error is displayed under the field “This value is not valid”.

- **Price per unit tax excl**: Decimal field. If you enter more than 10 numbers before the dot/comma and save, an error is displayed under the field “This value is not valid”. If you enter anything other than numbers and save, an error is displayed under the field “This value is not valid”. If you enter more than 6 numbers after the dot/comma and save, an error is displayed under the field “This value is not valid”.

- **Unity field**: Alphanumeric field. It should have maximum 255 characters. If you try to enter more than 255 chars, an error message should be displayed under the field: “This value is too long. It should have 255 character or less.” Prohibited characters are: <> If you enter an invalid character, an error message should be displayed under the field: ”This value is not valid.”

- **Ecotax tax incl**: Decimal field. If you enter more than 10 numbers before the dot/comma and save, an error is displayed under the field “This value is not valid”. If you enter anything other than numbers and save, an error is displayed under the field “This value is not valid”. If you enter more than 6 numbers after the dot/comma and save, an error is displayed under the field “This value is not valid”.

- **Cost price tax excl**: Decimal field. If you enter more than 10 numbers before the dot/comma and save, an error is displayed under the field “This value is not valid”. If you enter anything other than numbers and save, an error is displayed under the field “This value is not valid”. If you enter more than 6 numbers after the dot/comma and save, an error is displayed under the field “This value is not valid”.

- **Add a specific price:**

  - **Starting at**: Integer field, only integers are allowed. When there is more than 10 numbers, an error should be displayed under the field “This value is not valid”. If you enter a number with decimal (ex 30,5 or 30.5) and save, an error should be displayed “This value is not valid”. If you enter anything other than numbers and save an error should be displayed “This value is not valid.”

  - **Impact on product price tax excl**: Decimal field. If you enter more than 10 numbers before the dot/comma and save, an error is displayed under the field “This value is not valid”. If you enter anything other than numbers and save, an error is displayed under the field “This value is not valid”. If you enter more than 6 numbers after the dot/comma and save, an error is displayed under the field “This value is not valid”.

  - **Apply a discount of**: Decimal field. If you enter more than 10 numbers before the dot/comma and save, an error is displayed under the field “This value is not valid”. If you enter anything other than numbers and save, an error is displayed under the field “This value is not valid”. If you enter more than 6 numbers after the dot/comma and save, an error is displayed under the field “This value is not valid”. 
If you don’t complete this field and click on Apply, you have an error message “No reduction value has been submitted”.

<a id="errorsseo"></a>
### SEO tab

- **Meta title**: Alphanumeric field. It should have maximum 128 characters. If you try to enter more than 128 chars, an error message should be displayed under the field: “This value is too long. It should have 128 characters or less.” Prohibited characters are: <> If you enter an invalid character, an error message should be displayed under the field: ”This value is not valid.”

- **Meta description**: Alphanumeric field. It should have maximum 512 characters. If you try to enter more than 512 chars, an error message should be displayed under the field: “This value is too long. It should have 512 characters or less.” Prohibited characters are: <> If you enter an invalid character, an error message should be displayed under the field: ”This value is not valid.”

- **Friendly URL**: Alphanumeric field. It should have maximum 128 characters. If you try to enter more than 128 chars, an error message should be displayed under the field: “This value is too long. It should have 128 characters or less.” Prohibited characters are: <> If you enter an invalid character, an error message should be displayed under the field: ”This value is not valid.”

<a id="errorsoptions"></a>
### Options tab

- **Tags**: Alphanumeric field. It should have maximum 32 characters. If you try to enter more than 32 chars, an error message should be displayed under the field: “This value is too long. It should have 32 characters or less.” Prohibited characters are: <>;=#{} If you enter an invalid character, an error message should be displayed under the field: ”This value is not valid.”

- **ISBN**: Varchar field but only numbers are accepted. It should have maximum 32 characters. If you try to enter more than 32 chars, an error message should be displayed under the field: “This value is not valid.” If you enter anything other than numbers and save an error is displayed under the field “This value is not valid.”

- **EAN-13 or JAN barcode**: Varchar field but only numbers are accepted. It should have maximum 13 characters. If you try to enter more than 13 chars, an error message should be displayed under the field: “This value is not valid.” If you enter anything other than numbers and save an error is displayed under the field “This value is not valid.”

- **UPC barcode**: Varchar field but only numbers are accepted. It should have maximum 12 characters. If you try to enter more than 12 chars, an error message should be displayed under the field: “This value is not valid.” If you enter anything other than numbers and save an error is displayed under the field “This value is not valid.”

- **Add a customization field**: 

  - **Label**: Alphanumeric field. It should have maximum 255 characters. If you try to enter more than 255 chars, an error message should be displayed under the field: “This value is too long. It should have 255 characters or less.” Prohibited characters are: <> If you enter an invalid character, an error message should be displayed under the field: ”This value is not valid.”

- **Attach a new file**:

  - **Browse file**: If you click on “Add” without selecting a file an error message is displayed under the field “Please select a file”

  - **Title:** Alphanumeric field. It should have maximum 32 characters.  If you try to enter more than 32 chars, an error message should be displayed under the field: “This value is too long. It should have 32 characters or less.” Prohibited characters are: <>={} If you enter an invalid character, an error message should be displayed under the field: ”This value is not valid.”

  - **Description**: Alphanumeric field. There is no maximum characters. Prohibited characters are: <> If you enter an invalid character, an error message should be displayed under the field: ”This value is not valid.”

- **Table of suppliers**:

  - **Supplier reference**: Alphanumeric field. It should have maximum 65 characters. If you try to enter more than 64 chars, an error message should be displayed under the field: “This value is too long. It should have 65 characters or less.” Prohibited characters are: <>={}; If you enter an invalid character, an error message should be displayed under the field: ”This value is not valid.”

  - **Price (tax excl.)**: Decimal field. If you enter more than 20 numbers before the dot/comma and save, an error is displayed under the field “This value is not valid”. If you enter anything other than numbers and save, an error is displayed under the field “This value is not valid”. If you enter more than 6 numbers after the dot/comma and save, an error is displayed under the field “This value is not valid”.

