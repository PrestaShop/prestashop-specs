# SPECIFICATIONS - CATALOG > ATTRIBUTES & FEATURES > FEATURES


![Feature](prestashop-specs/static/img/Features.png)


Features are configured on a per-product basis, from the "Product" page under the "Catalog" menu, but they must first be registered on the shop that is using the tool on the "Features" tab under the "Attributes & Features" page from the "Catalog" menu.

It's possible to set the features' order using the arrows in the "Position" column. The "Actions" column gives an Edit action, a Delete action and a View action which can be clicked on to display the available values for this feature. From there, it can be sorted, edited and deleted values if needed.

Each feature has it's own ID, Name, Value, and Position where it is placed in the list.

There is a search bar which has inputs of "ID", "Name", "Position" which will help to find a specific feature if there are a lot of them created.

Also there are buttons at the right hand which are:

 - Add new (for adding a new feature)
 - Refresh list (for updating the list)
 - Show SQL query (Opens a popup showing SQL code for the page)
 - Export to SQL Manager (redirects to the SQL manager in the back office)
 
 
 All of the features have a selecting field on the left, as well as bulk actions at the bottom left for selecting/unselecting all and deleting the selected fields.
 
 On the right side, for each feature there are the options to:
 
  - View (view the feature in details)
  - Edit (edit the feature)
  - Delete (delete the feature)
 
 
 ## View feature - Composition (name of the feature, can be different)
 
 By viewing the feature, the name of the selected feature at the top should be seen.
 
 Inside there is the option to change the ID's of the values that the feature offers. Any of the fields can be deleted by bulk actions or selecting the field and deleting the selected.
 
 In the same page there are alse the buttons at the right:
 
  - Add new (for adding a new feature)
  - Refresh list (for updating the list)
  - Show SQL query (Opens a popup showing SQL code for the page)
  - Export to SQL Manager (redirects to the SQL manager in the back office)
 
 By pressing "edit" on a selected value, the following fields are prompted:
 
  - Feature (can be selected from different features that are created)
  - Value (edit the value of the feature)
  - URL (when faceted module is enabled allows to search for the value more precisely, also can be in different languages)
  - Meta title (when faceted module is enabled allows to search for the value more precisely, also can be in different languages)
  
After the changes are made either "save then add another value" or "save".

---


## Multilanguage

All of the fields within Features are translated to other selected language apart from the "Position" section.


---

## Multishop

Different features are allocated for different shops, meaning that 2 different shops can have different features, or they can be created for all shops.

When selecting multishop, adding a new feature will open a new tab allowing to select which shop will have the created feature, a box with containing options should appear:

 - Shops (Allows to select all the shops, or just 1 specific)
 - Collapse all (closes the options for possible shops)
 - Expand all (opens the options to select needed shops)
 - Check all (allows to check all the possible shops)
 - Uncheck all (unchecks all the selected shops)
 
 
 
---

## Front office

Features appear in the product's "Product Details" tab at the right side of the product.

From left to right firstly the name of the feature is shown. On the right from the feature name the value of it is displayed.

Different features added and values allows the merchant to specify his product details in the front office.


![FeaturesFO](prestashop-specs/static/img/FeaturesFO.png)




---

## Back office

### Products tab - Features


In the back office, products tab, when a product is selected, a line for features is shown, where all of the features are listed.

In there the following options will appear:

 - Feature (drop down list to select feature by it's name)
 - Pre-defined value (drop down list to select values assigned to the feature)
 - OR Customized value (blank tab for custom value that is not added)
 - Trash can button at the very right side for deleting the feature
 

Also, there is a button below the features row called "Add a feature".

This button adds a new row for a new feature for the selected product, creates identical row to the first one, can be customized the same way.


 
 



 
 
 
