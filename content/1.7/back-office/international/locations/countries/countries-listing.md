---
title: Countries listing
weight: 1
---

# Countries listing

## Call to action 

A call to action buttont at the top right is displayed:

 - **Add new country** - See the [specs of the add edit country]({{<ref "add-edit-country.md">}} "Add edit country") 

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

## Columns

1. ID

It's possible to sort by id asc or desc and search by id.

2. Country

It's possible to sort by country asc or desc and search by country.

3. ISO code

It's possible to sort by ISO code asc or desc and search by ISO code.

4. Call prefix

It's possible to sort by call prefix asc or desc and search by a call prefix.

5. Zone

It's possible to sort zones by asc or desc and search by zones.

6. Enabled

It's possible to search for enabled or disabled countries by selecting either "yes" or "no" in the drop-down.

7. Actions

 - **Edit** - This is the main action and it can be performed by clicking on the line. After clicking on it, the edit country page is displayed.
 - **Delete** - After clicking on it, the country is deleted and the following success message is displayed: "Successful deletion.".

## Bulk actions

Clicking on the _Bulk actions_ button allows performing bulk actions for the selected countries (using the checkboxes). A user can:

- Select all/Unselect all: this button will select/unselect all the checkboxes at the beginning of each row of the listing.
- Enable selection - enables the selected country.
- Disable selection - disables the selected country.
- Delete selected: This button will delete the selected country. 
After clicking on "Delete selected", a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?" (See issue [#14462](https://github.com/PrestaShop/PrestaShop/issues/14462)). The action can be canceled by clicking on the cross or on the cancel button.
After clicking on "Delete" button, the selected country gets deleted, a successful message is displayed "The selection has been successfully deleted."
- Assign to a new zone - Selected countries are assigned to a new zone.

# Country options

The toggle: "Restrict country selections in front office to those covered by active carriers", can be turned to "yes" or "no".

## Call to action

- **Save** - the status of the toggle is saved and a success message is displayed: "The settings have been successfully updated.". 
