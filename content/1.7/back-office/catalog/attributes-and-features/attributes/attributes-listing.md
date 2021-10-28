---
title: Attributes listing
weight: 1
---

# Attributes listing


![Attribute](/static/img/Attribute.png)

## HOW ATTRIBUTES WORK

Attributes are the basis of product combinations. Combinations can be created only if at least one of its attributes changes. Attributes are like the properties of a product that may change between combinations while still keeping the same product name: color, capacity, size, weight, etc. 

This page presents a list of all the registered attributes. They can be edited or deleted using the actions on the right of the table. Their values can be displayed by clicking on "View".

### Call to action

2 call to actions are displayed in the header of this page:
1) Add new attribute

👉 See the [specs of the add/edit attribute](./add-edit-attribute.md) 

2) Add new value

👉 See the [specs of the add/edit attribute value](./add-edit-attribute-value.md) 

### Settings wheel

When clicking on the settings wheel, the following options are displayed:
1) Import

After clicking on it, the Advanced parameters > Import page is opened.

2) Refresh list

After clicking on it, the page is reloaded. Sorts and searches are kept.

3) Show SQL query

After clicking on it, the SQL query is displayed in a modal. The SQL query takes into account filters and sorts that have been done.

There are two buttons:

- Close: After clicking on it, the modal is closed
- Export to SQL Manager: After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

4) Export to SQL Manager

After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

### Bulk actions

Clicking on the _Bulk actions_ button allows performing bulk actions for the selected attributes (using the checkboxes). A user can:

- Select all/Unselect all: this button will select/unselect all the checkboxes at the beginning of each row of the listing.
- Delete selected: This button will delete the selected attributes. 
After clicking on "Delete selected", a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?" (See issue [#14462](https://github.com/PrestaShop/PrestaShop/issues/14462)). The action can be canceled by clicking on the cross or on the cancel button.
After clicking on "Delete" button, the selected attributes and all their values are deleted, a successful message is displayed "The selection has been successfully deleted."

### Columns

The page displays the attribue list with the following columns:

1. ID

It's possible to sort by id asc or desc and search by id.

2. Name

It's possible to sort by name asc or desc and search by name.

3. Values

It indicates the number of values for each attribute.

4. Position

The position of each attribute can be changed by clicking on this column and by moving it up or down.
After changing the position, the message "Successful update." is displayed.

5. Actions

**View.** This is the main action and it can be performed by clicking on the line. 

👉 See the [specs of the view attribute](./view-attribute.md) 

**Edit.** The attribute can be edited as often as necessary.

👉 See the [specs of the add/edit attribute](./add-edit-attribute.md) 

**Delete.** The attribute can be deleted by clicking on this button. After clicking on "Delete", a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?"
The action can be canceled by clicking on the cross or on the cancel button.
After clicking on "Delete" button, the attribute and all its values are deleted, a successful message is displayed "Successful deletion."

#### Search
The search button is disabled as long as no search field has been filled. After clicking on "search", the "search" button is disabled and a "reset" button is displayed. If there is no results for the search done, the following message is displayed: "No records found". When clicking on "reset", the search is removed and all the results are displayed.

## Multistore

 Only the attributes created in the selected store or store group (through the context) are displayed.
For example, let's say there's the following configuration made:
- Group 1
  - Shop A
  - Shop B
- Group 2
  - Shop C
  
If the group 1 is selected as context, then the attributes created in Shop A and Shop B will be displayed.

If the Shop A is selected as context, then the attributes created in Shop A will be displayed.

If "all shops" is selected as context, then the attributes created in Shop A, Shop B, and Shop C will be displayed.
