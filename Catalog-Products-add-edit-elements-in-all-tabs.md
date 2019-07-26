# SPECS PRODUCT PAGE

As a merchant I need to be able to correctly create, edit and delete my products.

## WHY

The add / edit product page (Catalog > Products) has already been migrated to Symfony for the 1.7.0 version, but many behaviours are not specified which have introduced regressions and bugs. We need to specify the whole behaviour of this page to make it easier to test and avoid any new bugs.

Furthermore, we have identified different issues related to this page that we should fix during the re-migration : https://github.com/PrestaShop/PrestaShop/issues/13891
 
 
## WHAT

Thus, this project aims at specifying the current and expected behaviour for every scenario a merchant could be dealing with when creating / editing a product for his/her customers. This specification should specifically define : 
Each field behavior
Type of each field & errors message
Multistore behavior


## SPECIFICATIONS

The first step is to detail the behavior of each field per tab.
The second step of this document is to detail the type of each fields and error messages per tab.
The third step is to detail the multistore behavior.

## 1.	Product creation / edition on Back office

### Elements in all tabs

As a merchant I want to always see some elements when I create or edit a product.
Some elements are displayed in all tabs. Here is the list of those elements :

- **Product name**: When you create a new product, this field is empty and there is a placeholder: “Enter your product name” 
Only the name in the default language must be filled, if the product name is not filled for all languages, then it must retrieve the product name in the default language. Also, in the case of multilanguage, if an error occurs, then I must be warned in the message which language is problematic.

- **Product type**: Drop-down with 3 options: Standard product, Pack of products, Virtual product. Please note, when editing a standard product with combinations, you can’t change the type, the drop-down is disabled.

- **Language**: This drop-down is displayed when there are several languages installed and enabled. It allows to choose in which language the product page is translated. If the content does not exist in a language, it must retrieve the content of the default language.

- **Sales**: Link opens in a new browser tab http://localhost/presta_176x/admin-dev/index.php?controller=AdminStats&module=statsproduct&id_product=6&token=92131e635ebd32af597a9aa6ca7e1c60

- **Product list**: Link that displays the list of all products filtered as in the catalog, with their id, name, price, quantity. If you click on the id or the name, you arrive on the product page in basic settings tab. If you click on the price, you arrive on the product page in pricing tab. If you click on the quantity, you arrive on the product page in the second tab which is: Quantities for a standard product without combinations or a pack, Combinations for a standard product with combination, Virtual product for a virtual product.

- **Help**: Link to display the help in the right menu.

- **Delete**: Button to delete the product. When you click on it, you have a modal to cancel or confirm the action.

- **Preview**: When you click on this button, it saves and open a new browser tab with the product displayed in front-office. If the product is disabled (offline), you have on the product page in front-office a message displayed: “This product is not visible to your customers.” Keyboard shortcut: ALT + SHIFT + V

- **Online**: When you click on this button, it saves and makes the product visible in front-office

- **Offline**: When you click on this button, it saves and makes the product invisible in front-office.

- **Save**: Button to save all changes made in all tabs. Keyboard shortcut: ALT + SHIFT + S

- **Duplicate**: When you click on this button, it saves and duplicate the current product (the duplicated product will be offline).  The duplicated product must be exactly the same. Keyboard shortcut: ALT + SHIFT + D 

- **Go to catalog**: When you click on this button, it saves and redirect to catalog product list. Keyboard shortcut: ALT + SHIFT + Q

- **Add new product**: When you click on this button, it saves and opens a new empty product page. Keyboard shortcut: ALT + SHIFT + P
