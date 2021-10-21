# SPECIFICATIONS - CATALOG > ATTRIBUTES & FEATURES > ATTRIBUTES

![Attribute](/static/img/Attribute.png)

## HOW ATTRIBUTES WORK

Attributes are the basis of product variations (or "combinations" in PrestaShop's interface): you can only create variations of a product if at least one of its attributes changes. You should think of attributes as properties of a product that may change between variations while still keeping the same product name: color, capacity, size, weight, etc. You can use anything that varies between versions of the same product, except the price.

This page presents a list of all your currently registered attributes. You can edit or delete each one using the actions on the right of the table, or display their values by clicking on the "View" action, which opens a new table.

### Call to action

2 call to actions are displayed in the header of this page:
1) Add new attribute

👉 See the [specs of the add/edit attribute](./add-edit-attribute.md) 

2) Add new value

👉 See the [specs of the add new value](./add-edit-attribute-value.md) 

### Settings wheel

When clicking on the settings wheel, the following options are displayed:

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

- Select all/Unselect all: this button will select/unselect all the checkboxes at the beginning of each row of the listing.
- Delete selected: This button will delete the selected features. 
After clicking on "Delete selected", a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?" (See issue [#14462](https://github.com/PrestaShop/PrestaShop/issues/14462)). The action can be canceled by clicking on the cross or on the cancel button.
After clicking on "Delete" button, the selected features and all their values are deleted, a successful message is displayed "The selection has been successfully deleted."

### Columns

The page displays the attribue list with the following columns:

1. ID

It's possible to sort by id asc or desc and search by id.

2. Name

It's possible to sort by name asc or desc and search by name.

3. Values

It indicates the number of values for each feature.

4. Position

The position of each feature can be changed by clicking on this column and by moving it up or down.
After changing the position, the message "Successful update." is displayed.

5. Actions

**View.** This is the main action and it can be performed by clicking on the line. 

👉 See the [specs of the view attribute](./view-attribute.md) 

**Edit.** The user can edit the attribute as often as necessary.

👉 See the [specs of the add/edit feature](./add-edit-attribute.md) 

**Delete.** The attribute can be deleted by clicking this button. After clicking on Delete, a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?"
The action can be canceled by clicking on the cross or on the cancel button.
After clicking on "Delete" button, the feature and all its values are deleted, a successful message is displayed "Successful deletion."
