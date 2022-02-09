---
title: States listing
weight: 1
---

# States

## Call to action

A call to action button is displayed:

 - **Add new state** - See the [specs of the add edit state]({{<ref "add-edit-state.md">}} "Add edit state") 

## Settings wheel

When clicking on the settings wheel, the following options are displayed:

1. Refresh list

After clicking on it, the page is reloaded. Sorts and searches are kept.

2. Show SQL query

After clicking on it, the SQL query is displayed in a modal. The SQL query takes into account filters and sorts that have been done.

There are two buttons:

Close: After clicking on it, the modal is closed.
Export to SQL Manager: After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager.

3. Export to SQL Manager

After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager.

## Bulk actions

Clicking on the _Bulk actions_ button allows performing bulk actions for the selected states (using the checkboxes). A user can:

- Select all/Unselect all: this button will select/unselect all the checkboxes at the beginning of each row of the listing.
- Enable selection - enables the selected state.
- Disable selection - disables the selected state.
- Delete selected: This button will delete the selected state. 
After clicking on "Delete selected", a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?" (See issue [#14462](https://github.com/PrestaShop/PrestaShop/issues/14462)). The action can be canceled by clicking on the cross or on the cancel button.
After clicking on "Delete" button, the selected state gets deleted, a successful message is displayed "The selection has been successfully deleted."
- Assign to a new zone - This button is currently not working (See issue [#9971](https://github.com/PrestaShop/PrestaShop/issues/9971))

## Columns

1. ID

It's possible to sort by id asc or desc and search by id.

2. Name

It's possible to sort by name asc or desc and search by name.

3. ISO code

It's possible to sort by ISO code asc or desc and search by ISO code.

4. Zone

It's possible to sort by zone asc or desc and to search for a zone by selecting one in the drop-down.

5. Country

It's possible to sort by country asc or desc and search for a country by selecting one in the drop-down.

6. Enabled

It's possible to search for enabled or disabled states by selecting either "yes" or "no" in the drop-down.

7. Actions

 - **Edit** - This is the main action and it can be performed by clicking on the line. After clicking on it, the edit state page is displayed.
 
   👉 See the [specs of the add edit state]({{<ref "add-edit-state.md">}} "add edit state") 
   
 - **Delete** - After clicking on it, the state is deleted and the following success message is displayed: "Successful deletion.".
 
- **Delete**
The search button is disabled as long as no search field has been filled. After clicking on "search", the "search" button is disabled and a "reset" button is displayed. If there is no results for the search done, the following message is displayed: "No records found". When clicking on "reset", the search is removed and all the results are displayed.
