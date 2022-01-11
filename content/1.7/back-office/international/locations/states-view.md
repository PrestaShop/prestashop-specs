---
title: States
weight: 1
---

# States

#### Call to action

A call to action buttont at the top right is displayed:

 - **Add new state** - See the [specs of the add/edit new state]({{<ref "add-edit-new-state.md">}} "Add/edit new state") 

# Settings wheel

When clicking on the settings wheel, the following options are displayed

1. Add new

When pressed redirects to the [specs of the add/edit new state]({{<ref "add-edit-new-state.md">}} "Add/edit new state") 

2. Refresh list

After clicking on it, the page is reloaded. Sorts and searches are kept.

3. Show SQL query

After clicking on it, the SQL query is displayed in a modal. The SQL query takes into account filters and sorts that have been done.

There are two buttons:

Close: After clicking on it, the modal is closed
Export to SQL Manager: After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

4. Export to SQL Manager

After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

The count of the states currently added is displayed on the left - "States - (current number of states added in the shop)"

### Columns

1. ID

It's possible to sort by id asc or desc and search by id.

3. Name

It's possible to sort by name asc or desc and search by name.

5. ISO code

It's possible to sort by ISO code asc or desc and search by ISO code.

7. Zone

This is a drop-down list of the continents that can be selected, and searched in the list.

9. Country

This is a drop-down list of the countries that can be searched.

11. Enabled

This is a drop-down list for selecting either "yes" or "no" can be searched.

13. Actions

 - **Search** - Button for searching in the list.
 - **Edit** - When pressed redirects to the edit page of the selected state.
 - **Delete** - Deletes the selected state, after deletion shows the message: "Successful deletion.".

### Bulk actions

Clicking on the _Bulk actions_ button allows performing bulk actions for the selected states (using the checkboxes). A user can:

- Select all/Unselect all: this button will select/unselect all the checkboxes at the beginning of each row of the listing.
- Enable selection - enables the selected state
- Disable selection - disables the selected state
- Delete selected: This button will delete the selected state. 
After clicking on "Delete selected", a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?" (See issue [#14462](https://github.com/PrestaShop/PrestaShop/issues/14462)). The action can be canceled by clicking on the cross or on the cancel button.
After clicking on "Delete" button, the selected state gets deleted, a successful message is displayed "The selection has been successfully deleted."
- Assign to a new zone - Selected states are assigned to a new zone.
