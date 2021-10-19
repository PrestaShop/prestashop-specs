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
 - Export to SQL Manager (redirects to the SQL manager in the back office)
 
 
 All of the features have a selecting field on the left, as well as bulk actions at the bottom left for selecting/unselecting all and deleting the selected fields.
 
  - View (view the feature in details)
  - Edit (edit the feature)
  - Delete (delete the feature)
 

---


## Multishop


 - Shops (Allows to select all the shops, or just 1 specific)
 - Collapse all (closes the options for possible shops)
 - Expand all (opens the options to select needed shops)
 - Check all (allows to check all the possible shops)
 - Uncheck all (unchecks all the selected shops)
 
 
![FeaturesFO](prestashop-specs/static/img/FeaturesFO.png)
 

---

### Products tab - Features


In the back office, products tab, when a product is selected, a line for features is shown, where all of the features are listed.

In there the following options will appear:

 - Feature (drop down list to select feature by it's name)
 - Pre-defined value (drop down list to select values assigned to the feature)
 - OR Customized value (blank tab for custom value that is not added)
 - Trash can button at the very right side for deleting the feature
 

Also, there is a button below the features row called "Add a feature".

This button adds a new row for a new feature for the selected product, creates identical row to the first one, can be customized the same way.


 
 



 
 
 
