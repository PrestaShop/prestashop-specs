# SPECS LISTING PRODUCT PAGE


## 1.    When there is 0 products

The empty state card appears ONLY when there is no value (by default or created). It can also reappear IF the merchant decides to remove every existing value in the table.

https://projects.invisionapp.com/share/5FRLCBENAS4#/screens/358670592

## 2.    Header

In the header, there is "New product" button allowing to open the form to create a new product

## 3.    Top of the listing

### Settings wheel
When I click on it, you have 4 options:
1) Export

When I click on it, the list is exported in CSV format.
The export takes into account filters and sorts that have been done

2) Import

When I click on it you are redirected to the import page in advanced parameters

3) Show SQL query

When I click on it, the sql query is displayed in a modal. The SQL query takes into account filters and sorts that have been done.

There are two buttons:
- Close: When you click on it, the modal is closed
- Export to SQL Manager: When you click on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

4) Export to SQL Manager

When I click on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

### Bulk actions drop-down

This dropdown is enabled only if many products are selected, otherwise it's disabled.

There are 4 options:

1) Activate selection

When I click on it, a modal is opened with a progress bar

The modal can be closed with the cross or the close button. If the modal is closed during the process, the action is still done

The selected products are enabled

2) Deactivate selection

When I click on it, a modal is opened with a progress bar

The modal can be closed with the cross or the close button. If the modal is closed during the process, the action is still done

The selected products are disabled

3) Duplicate selection

When I click on it, a modal is opened with a progress bar

The modal can be closed with the cross or the close button. If the modal is closed during the process, the action is still done

The selected products are duplicated

4) Delete selection

When I click on it, a modal is opened asking to confirm or cancel the action

The action can be canceled if you click on the cross or on the close button. 

When I click on "Delete now" button, a modal is opened with a progress bar

The modal can be closed with the cross or the close button. If the modal is closed during the process, the action is still done

The selected products are deleted


### Select all checkbox

When I check the box, all the products displayed on the page are selected or unselected.


### Filter by categories drop-down

I can click on each parent category to folds / unfolds its subcategories.

There are 3 links in the dropdown:
1) Expand

When I click on it, the whole category tree is opened

2) Collapse

When I click on it, it folds the whole category tree

3) Unselect

When I click on it, if a category was selected, it's no longer selected

-----

There is a radio button allowing to select a category. 

When a category is selected:
- Only products belonging to this category or to a subcateogry of this one are displayed 

- The name of the selected category is displayed between brackets in the dropdown

- If a sort and / or searchs were done on a column, they are still applied after selecting a category

- A column position is added in the table between status and actions with a "Rearrange" button (issue <a href="https://github.com/PrestaShop/PrestaShop/issues/17412">17412</a>) allowing to change the position of the products in the selected category.


## 4. Rearrange button

When I click on it:

- If sort and / or searchs were done they are removed and products are sorted by position in the selected category.

- The rearrange button becomes a "Save & refresh" disabled button

- I can change the position of the products in the category by clicking on the line or on the icon


## 5. Changing the position of products

When I click on the icon or on the line, the checkbox is checked and the product is selected (issue <a href="https://github.com/PrestaShop/PrestaShop/issues/15291">15291</a>)

When I change the position of one or many products:

- Products checkboxes are disabled

- Its new position is indicated in red in the listing

- The "Save & refresh" button is enabled

When I click on "Save & refresh":

- New positions are saved and a confirmation message is displayed "Products successfully sorted"

- If searchs were done before changing positions, they are keeped

## 6. Deleting products

If on the last page I delete all products, I should return to the first page (issue <a href="https://github.com/PrestaShop/PrestaShop/issues/14713">14713</a>), it's the same behavior as other listing

## 7. Multistore
