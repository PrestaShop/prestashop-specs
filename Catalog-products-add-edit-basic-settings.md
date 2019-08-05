### Basic settings tab<a id="basicsettings"></a>

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
