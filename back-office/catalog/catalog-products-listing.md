# SPECS LISTING PRODUCT PAGE


## 1.    When there is 0 products

The empty state card appears ONLY when there is no value (by default or created). It can also reappear IF the merchant decides to remove every existing value in the table.

https://projects.invisionapp.com/share/5FRLCBENAS4#/screens/358670592

## 2.    Header

In the header, there is "New product" button allowing to open the form to create a new product

## 3.    Top of the listing

### Settings wheel
When clicking on it, 4 options are displayed:
1) Export

After clicking on it, the list is exported in CSV format.
The export takes into account filters and sorts that have been done

2) Import

After clicking on it, the is a redirection to the import page in advanced parameters

3) Show SQL query

After clicking on it, the sql query is displayed in a modal. The SQL query takes into account filters and sorts that have been done.

There are two buttons:
- Close: After clicking on it, the modal is closed
- Export to SQL Manager: After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

4) Export to SQL Manager

After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

### Bulk actions drop-down

This dropdown is enabled only if many products are selected, otherwise it's disabled.

There are 4 options:

1) Activate selection

After clicking on it, a modal is opened with a progress bar

The modal can be closed with the cross or the close button. If the modal is closed during the process, the action is still done

The selected products are enabled

2) Deactivate selection

After clicking on it, a modal is opened with a progress bar

The modal can be closed with the cross or the close button. If the modal is closed during the process, the action is still done

The selected products are disabled

3) Duplicate selection

After clicking on it, a modal is opened with a progress bar

The modal can be closed with the cross or the close button. If the modal is closed during the process, the action is still done

The selected products are duplicated

4) Delete selection

After clicking on it, a modal is opened asking to confirm or cancel the action

The action can be canceled by clicking on the cross or on the close button. 

After clicking on it on "Delete now" button, a modal is opened with a progress bar

The modal can be closed with the cross or the close button. If the modal is closed during the process, the action is still done

The selected products are deleted, a message is displayed "Product(s) successfully deleted"


### Select all checkbox

After checking the box, all the products displayed on the page are selected or unselected.


### Filter by categories drop-down

It's possible to click on each parent category to folds / unfolds its subcategories.

There are 3 links in the dropdown:
1) Expand

After clicking on it, the whole category tree is opened

2) Collapse

After clicking on it, it folds the whole category tree

3) Unselect

After clicking on it, if a category was selected, it's no longer selected

-----

There is a radio button allowing to select a category. 

When a category is selected:
- Only products belonging to this category or to a subcateogry of this one are displayed 

- The name of the selected category is displayed between brackets in the dropdown

- If a sort and / or searchs were done on a column, they are still applied after selecting a category

- A column position is added in the table between status and actions with a "Rearrange" button (issue <a href="https://github.com/PrestaShop/PrestaShop/issues/17412">17412</a>) allowing to change the position of the products in the selected category.


## 4. Rearrange button

After clicking on it:

- If sort and / or searchs were done they are removed and products are sorted by position in the selected category.

- The rearrange button becomes a "Save & refresh" disabled button

- It's possible to change the position of the products in the category by clicking on the line or on the icon


## 5. Changing the position of products

After clicking on the icon or on the line, the checkbox is checked and the product is selected (issue <a href="https://github.com/PrestaShop/PrestaShop/issues/15291">15291</a>)

When I change the position of one or many products:

- Products checkboxes are disabled

- Its new position is indicated in red in the listing

- The "Save & refresh" button is enabled

After clicking on "Save & refresh":

- New positions are saved and a confirmation message is displayed "Products successfully sorted"

- If searchs were done before changing positions, they are keeped

## 6. Deleting products

If on the last page all products are deleted, I should return to the first page (issue <a href="https://github.com/PrestaShop/PrestaShop/issues/14713">14713</a>), it's the same behavior as other listing

## 7. Listing

### Columns

There are 10 columns:
- ID product: it's possible to sort by id asc or desc and search by id min & max 

- Image: it's not possible to sort or search on this column

- Name: it's possible to sort by name asc or desc and search by name

- Reference: it's possible to sort by reference asc or desc and search by reference

- Category: it's possible to sort by category asc or desc and search by category

- Price tax excluded: it's possible to sort by price tax exluded asc or desc and search by price tax exluded

- Price tax included: it's not possible to sort by price tax included asc or desc and can't search by price tax included

- Quantity: it's possible to sort by quantity asc or desc and search by quantity min & max

- Status: it's possible to sort by status asc or desc and select a status in the dropdown

- Actions: it's possible to edit a product, preview, duplicate or delete

Below, the same behavior as others listing:

By default, the search button is disabled. It becomes enabled when something is filled in a search field.

After clicking on "Search", the search is applied and the products matching with the search are displayed

After clicking on "Search", this button is disabled and a "Reset" button is displayed.

After clicking on "Reset", the search is removed and all products are displayed.

### Actions

- Edit: The BO product page is opened with all existing informations already saved

- Preview: The product page in FO is opened

- Duplicate: The same product is created but it's disabled. The product page of the duplicated product is opened with a message "Product successfully duplicated"

- Delete: After clicking on it, a modal is opened asking to confirm or cancel the action

The action can be canceled by clicking on the cross or on the close button. 

After clicking on "Delete now" button, the product is deleted

A message is displayed "Product successfully deleted"

### Links

- Name: Open the product in the same browser tab and on the basic settings tab

- Price tax excluded: Open the product in the same browser tab on the pricing tab

- Price tax included: Open the product in the same browser tab on the pricing tab

- Quantity: If the product has combinations, open it in the same browser tab on the combinations tab

If the product is virtual, open it in the same browser tab on the virtual product tab

If the product is standard without combinations or a pack, open it in the same browser tab on the quantities tab

## 8. Multistore

When "all shops" is selected, all the products should be displayed (issue <a href="https://github.com/PrestaShop/PrestaShop/issues/9613">9613</a>)

When a group of shops is selected, only the products belonging to the shops of this group are displayed

When a specific shop is selected, only the products belonging of this shop are displayed

After selecting another shop than the current, I should return to the first page (issue <a href="https://github.com/PrestaShop/PrestaShop/issues/9612">9612</a>)
