---
title: Listing Page - 8.0
weight: 1
---
# SPECS LISTING PRODUCT PAGE V2

## Empty state

The empty state card appears WHEN there is no product

## Header

- New product - Button - Opens the "Add new product modal"

If multistore is enabled then Shop-Selector-Modal (title: "Add new product") is opened before the "Add new product modal"

## Top of the listing

- **Settings wheel component**

- **Bulk actions** - Dropdown - When a product is selected, THEN the dropdown is enabled, otherwise it is disabled

The 4 options open the Progress Bar Modal while performing the options:

| Options | Actions | Progress-Bar-Modal  | alert-success | Confirmation Modal before applying the action |
| --- | --- | --- | --- | --- |
| Activate selection | The selected products are enabled | Activating %number_products% products | Product(s) successfully activated. |  |
| Deactivate selection | The selected products are disabled | Desactivating %number_products% products | Product(s) successfully deactivated. |  |
| Duplicate selection | The selected products are duplicated | Duplicating %number_products% products | Product(s) successfully duplicated. |  |
| Delete selection | The selected products are deleted | Deleting %number_products% products | Product(s) successfully deleted. | Yes |
- **Select all** - checkbox

After checking the box, all the products displayed on the page are selected or unselected.

- **Filter by categories (%Category_name%)** - drop-down

It's possible to click on each parent category to folds / unfold its subcategories.

There are 3 buttons in the dropdown:

1. Expand

After clicking on it, the whole category tree is opened

2. Collapse

After clicking on it, it folds the whole category tree

3. Unselect

After clicking on it, if a category was selected, it's no longer selected

When a category is selected:

- Products associated with this category and all the subcategories are displayed
- (%Category_name%) - The name of the selected category is displayed between brackets in the dropdown
- If a sort and/or search were done on a column, they are still applied after selecting a category
- A column position is added in the table between status and actions with a "Rearrange" button allowing to change the position of the products in the selected category.

1. Rearrange button:

After clicking on it:

- If a sort and/or search were done they are removed and products are sorted by position in the selected category.
- The rearrange button becomes a "Save & refresh" disabled button
- It's possible to change the position of the products in the category by clicking on the line or the icon

2. Changing the position of products:

After clicking on the icon or the line, the checkbox is checked and the product is selected (issue <a href="[https://github.com/PrestaShop/PrestaShop/issues/15291](https://github.com/PrestaShop/PrestaShop/issues/15291)">15291</a>)

When I change the position of one or many products:

- Products checkboxes are disabled
- Its new position is indicated in red in the listing
- The "Save & refresh" button is enabled

After clicking on "Save & refresh":

- New positions are saved and a confirmation message is displayed "Products successfully sorted"
- If search were done before changing positions, they are kept

## Listing

### Columns

There are 10 columns:

- ID product: it's possible to sort by id asc or desc and search by id min & max

If anything other than a number is filled in min or max field, the field becomes red and the value is removed (issue <a href="https://github.com/PrestaShop/PrestaShop/issues/11167"> 11167</a>)

- Image: it's not possible to sort or search on this column

The alt of the image is the caption saved on the product page, if the caption is empty the alt is the name of the product in the current language (issue <a href="[https://github.com/PrestaShop/PrestaShop/issues/10236](https://github.com/PrestaShop/PrestaShop/issues/10236)">10236</a>)

- Name: it's possible to sort by name asc or desc and search by name
- Reference: it's possible to sort by reference asc or desc and search by reference
- Category: it's possible to sort by category asc or desc and search by category
- Price tax excluded: it's possible to sort by price tax excluded asc or desc and search by price tax excluded
- Price tax included: it's not possible to sort by price tax included asc or desc and can't search by price tax included
- Quantity: it's possible to sort by quantity asc or desc and search by quantity min & max

If anything other than a number is filled in min or max field, the field becomes red and the value is removed (issue <a href="https://github.com/PrestaShop/PrestaShop/issues/11167"> 11167</a>)

- Status: it's possible to sort by status asc or desc and select a status in the dropdown
- Actions: it's possible to edit a product, preview, duplicate or delete

Sorts should work after duplicating products and changing page (isse <a href="[https://github.com/PrestaShop/PrestaShop/issues/14175](https://github.com/PrestaShop/PrestaShop/issues/14175) ">14175</a>)

### Search

By default, the search button is disabled. It becomes enabled when something is filled in a search field.

After clicking on "Search", the search is applied and the products matching with the search are displayed

After clicking on "Search", this button is disabled and a "Reset" button is displayed.

After clicking on "Reset", the search is removed and all products are displayed.

### Actions

- Edit: The BO product page is opened with all existing information already saved
- Preview: The product page in FO is opened
- Duplicate: The same product is created but it's disabled. The product page of the duplicated product is opened with a message "Product successfully duplicated"
- Delete: After clicking on it, a modal is opened asking to confirm or cancel the action

The action can be canceled by clicking on the cross or the close button.

After clicking on the "Delete now" button, the product is deleted

A message is displayed "Product successfully deleted"

### Links

- Image: Open the product in the same browser tab and on the basic settings tab
- Name: Open the product in the same browser tab and on the basic settings tab
- Price tax excluded: Open the product in the same browser tab on the pricing tab
- Price tax included: Open the product in the same browser tab on the pricing tab
- Quantity: If the product has combinations, open it in the same browser tab on the combinations tab

If the product is virtual, open it in the same browser tab on the virtual product tab

If the product is standard without combinations or a pack, open it in the same browser tab on the quantities tab

## Multistore

WHEN all shops or a group of shops is selected THEN the column of Stores(s) is added to the listing.

Each item in the product list displays the product with a list of the names of the stores associated with the product, the image, the reference, the price of the product without and with, the quantity of the product, the status and the actions.

The list of associated stores displays a maximum of 3 stores and then displays (...) the remaining stores.

The list of stores is displayed by id in ascending order. The first shop in the list is used to display the image, reference, price and quantity of the product. 
The first shop is displayed in bold.

When "all shops" is selected, lists all the products and groups the products associated with different shops together. When a group of shops is selected, only the products list all the products belonging to the shop group and groups products associated with different shops together.

A product associated with different shops:

- Can’t be disabled from the list - the list displays “-”
- Stores(s) - Dropdown button - List all the shops associated with the product. When the dropdown is clicked THEN it displays the selected product and all products associated with the product. The clicked product row is emptied, it only keeps the data concerning the store list and its product image.
- The store column displays the shop name and the color with which it is associated
- Actions button wording depending on the multistore context:

| Is the product row has more than one shop in the Store(s) column? | Duplicate | Enable | Disable | Delete | Preview |
| --- | --- | --- | --- | --- | --- |
| No | Duplicate from shop | Enable from shop | Disable from shop | Delete from shop | Not displayed |
| Yes | Duplicate on all shops/groups shops  | Duplicate on all shops/groups shops  | Duplicate on all shops/groups shops  | Duplicate on all shops/groups shops  | Preview |
- Actions button impact depending on the multistore context:

| Is the product row has more than one shop in the Store(s) column? | Shop contexts | Edit | Duplicate | Enable | Disable | Delete | Preview |
| --- | --- | --- | --- | --- | --- | --- | --- |
| No | Single shop | Opens the edit page in same shop context  | Duplicates the product in the same shop context | Enables the product in the same shop context | Disables the product in the same shop context | Deletes the product in the same shop context | Open a new tab the product page in FO  |
| No | All shops / Groups shops | Opens the edition page in the shop context associated with the product | Duplicates the product in the shop context associated with the product | Enables the product in the shop context associated with the product | Disables the product in the shop context associated with the product | Deletes the product n the shop context associated with the product | Open a new tab the product page in FO in the shop context associated with the product |
| Yes | All shops / Groups shops | Opens the Shop-Selector-Modal before the edit page. <br> Modal title: ‘Choose a Store’ | Duplicates the selected product and all products associated with the selected product with the same shops association | Enables the selected product and all products associated with the selected product from all shops/groups shops.  | Disables the selected product and all products associated with the selected product from all shops/groups shops.  | Deletes the selected product and all products associated with the selected product from all shops/groups shops.  | Not displayed |

When a specific shop is selected, only the products belonging to this shop are displayed.

After selecting another shop than the current, I should return to the first page (issue <a href="[https://github.com/PrestaShop/PrestaShop/issues/9612](https://github.com/PrestaShop/PrestaShop/issues/9612)">9612</a>)

If on the last page all products are deleted, I should return to the first page (issue <a href="[https://github.com/PrestaShop/PrestaShop/issues/14713](https://github.com/PrestaShop/PrestaShop/issues/14713)">14713</a>), it's the same behavior another listing

## Deleted categories and products associated

When I delete the main category of product A, then if product A is re-associated with category B, then category B must become the "default category" for product A (issue <a href="[https://github.com/PrestaShop/PrestaShop/issues/9811](https://github.com/PrestaShop/PrestaShop/issues/9811)">9811</a>)
