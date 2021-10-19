# SPECIFICATIONS - CATALOG > ATTRIBUTES & FEATURES > FEATURES


![Feature](prestashop-specs/static/img/Features.png)

## HOW FEATURES WORK

Features must first be registered on the shop using this "Features" tab under the "Attributes & Features" page from the "Catalog" menu.

Features are configured on a per-product basis, from the "Product" page under the "Catalog" menu, but they must first be registered on your shop using the tool on the "Features" tab under the "Attributes & Features" page from the "Catalog" menu.

Then, they can be configured on a per-product basis, from the "Product" page under the "Catalog" menu, see [the specs of the add/edit product page](.../products/add-edit.md).

Once configured on a per-product basis, the features and values of the products are displayed on the front-office product page, in the "Product Details" tab.

## FEATURES

### Call to action
1 call to actions are displayed in the header of this page:
1) Add new feature
👉 See the [specs of the add/edit feature](./add-edit-feature.md) 
2) Add new feature value
👉 See the [specs of the add/edit feature value](./add-edit-feature-value.md) 
### Columns
The page displays the features list with the following columns:

Each feature has it's own ID, Name, Value, and Position where it is placed in the list.

There is a search bar which has inputs of "ID", "Name", "Position" which will help to find a specific feature if there are a lot of them created.

### Settings wheel
When clicking on the settings wheel, three options are displayed:

1) Refresh list

After clicking on it, the page is reloaded. Sorts and searches are kept.
2) Show SQL query

After clicking on it, the SQL query is displayed in a modal. The SQL query takes into account filters and sorts that have been done.

There are two buttons:

- Close: After clicking on it, the modal is closed
- Export to SQL Manager: After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager
3) Export to SQL Manager
After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager
 
### Bulk actions
Clicking on the _Bulk actions_ button allows users to perform bulk actions for selected features (using the checkboxes). A user can:

- Select all/Unselect all: this button will select/unselect all the checkboxes beginning each row of the listing.
- Delete selected: This button will delete the selected features. 
After clicking on "Delete selected", a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?" (See issue [#14462](https://github.com/PrestaShop/PrestaShop/issues/14462))

The action can be canceled by clicking on the cross or on the cancel button.

After clicking on "Delete" button, the selected features and all their values are deleted, a successful message is displayed "The selection has been successfully deleted."
  - Delete (delete the feature)
## Multishop

In the back office, products tab, when a product is selected, a line for features is shown, where all of the features are listed.

In there the following options will appear:

 - Feature (drop down list to select feature by it's name)
 - Pre-defined value (drop down list to select values assigned to the feature)
 - OR Customized value (blank tab for custom value that is not added)
 - Trash can button at the very right side for deleting the feature
 

Also, there is a button below the features row called "Add a feature".

This button adds a new row for a new feature for the selected product, creates identical row to the first one, can be customized the same way.


 
 



 
 
 
