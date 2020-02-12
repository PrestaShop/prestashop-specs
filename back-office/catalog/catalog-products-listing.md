# SPECS LISTING PRODUCT PAGE

## 1.    Header

In the header, there is "New product" button allowing to open the form to create a new product

## 2.    Top of the listing

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

### Filter by categories drop-down

I can click on each parent category to folds / unfolds its subcategories.

There is a radio button allowing to select a category. 

When a category is selected, only products belonging to this category or to a subcateogry of this one are displayed. And the name of the selected category is displayed between brackets in the dropdown.

There are 3 links in the dropdown:
1) Expand

When I click on it, the whole category tree is opened

2) Collapse

When I click on it, it folds the whole category tree

3) Unselect

When I click on it, if a category was selected, it's no longer selected

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

### Select all checkbox

When I check the box, all the products displayed on the page are selected.
