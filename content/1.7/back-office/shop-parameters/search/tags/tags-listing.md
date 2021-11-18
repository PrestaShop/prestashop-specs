---
title: Tags listing
weight: 1
---
# Tags listing

The tagging feature enables to associate products with keywords. Customers can use the keywords to easily and quickly find the products they are looking for.

## Multistore

Only the stores created in the selected store or store group (through the context) are displayed.

For example, let's say I have the following configuration:
- Group 1
  - Shop A
  - Shop B
- Group 2
  - Shop C

If I select group 1 as context, then the stores created in Shop A and Shop B will be displayed.

If I select Shop A as context, then the stores created in Shop A will be displayed.

If I select all shops as context, then the stores created in Shop A, Shop B and Shop C will be displayed.

## Call to action
 
A call to actions is displayed in the header of this page:
 
  - Add new tag

👉 See the [specs of the add/edit tag](./add-edit-tag.md) 

## Settings wheel

When clicking on the settings wheel, the following options are displayed:

1. Refresh list

After clicking on it, the page is reloaded. Sorts and searches are kept.

2. Show SQL query

After clicking on it, the SQL query is displayed in a modal. The SQL query takes into account filters and sorts that have been done.

There are two buttons:

- Close: After clicking on it, the modal is closed
- Export to SQL Manager: After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

3. Export to SQL Manager

After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager.

## Columns

The page displays the tag list with the following columns:

1. ID

ID number of the tag.

2.  Language

Language of the tag.

3. Name

Name of the tag.

4. Products

Number of products that can be found with the tag.

5. Actions

- **Edit.** This is the main action and it can be performed by clicking on the line or on the button. 
👉 See the [specs of the add/edit tag](./add-edit-tag.md) 

- **Delete.** The tag can be deleted by clicking on this button. After clicking on "Delete", a modal with the title "Delete selection" is opened asking to confirm or cancel the  action: "Are you sure you want to delete the selected item(s)?"
  The action can be canceled by clicking on the cross or on the cancel button.
  After clicking on "Delete" button, the store is deleted and a successful message is displayed "Successful deletion."


