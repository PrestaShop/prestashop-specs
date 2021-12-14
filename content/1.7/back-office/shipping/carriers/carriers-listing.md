---
title: Carriers listing
weight: 1
---

# Carriers listing

The "Carriers" page displays a list of all the current carriers. From here, it's possible to directly change their status, indicate if shipping is free or not, and change their position in the front office.

## Call to action

A call to actions is displayed in the header of this page:
 
  - Add new carrier

👉  See the [specs of the add/edit carrier]({{<ref "add-edit-carrier.md">}} "Add/edit carrier") 

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

After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

## Columns

The page displays the carriers list with the following columns:

1. ID

It's possible to sort by id asc or desc and search by id.

2. Name

It's possible to sort by name of carriers asc or desc and search by name.

3. Logo

The logo of the carrier is displayed if there is any

4. Delay

The delay of the shipping method is displayed. It's possible to search by delay.

5. Status

The carrier can be enabled or disabled. If it's enabled, a green checkmark is displayed. If it's disabled, a red cross is displayed. It's possible to search by status by clicking on the dropdown and by selecting one of the two options: "yes" or "no". If "yes" is selected, only the carriers enabled are displayed. If "no" is selected, only the disabled carriers are displayed.

6. Free shipping

The carrier can be free or not. If it's free, a green checkmark is displayed. If it's not free, a red cross is displayed. It's possible to search by free shipping by clicking on the dropdown and by selecting one of the two options: "yes" or "no". If "yes" is selected, only the free carriers are displayed. If "no" is selected, only paying carriers are displayed.

7. Position

The position of each carrier can be changed by clicking on this column and by moving it up or down.
After changing the position, the message "Successful update." is displayed. It's possible to sort by position asc or desc and search by position.

8. Actions

- **Edit.** This is the main action and it can be performed by clicking on the line or on the button. 
 👉  See the [specs of the add/edit carrier]({{<ref "add-edit-carrier.md">}} "Add/edit carrier") 

- **Delete.** The carrier can be deleted by clicking on this button. After clicking on "Delete", a modal with the title "Delete selection" is opened asking to confirm or cancel the  action: "Are you sure you want to delete the selected item(s)?"
 The action can be canceled by clicking on the cross or on the cancel button.
 After clicking on "Delete" button, the carrier is deleted and a successful message is displayed "Successful deletion."
 
 ### Search
 
The search button is disabled as long as there are less than 2 carriers in the list. 

A search can be done by ID, name, delay, status (drop-down menu), free shipping (drop-down) and position.
After clicking on "search", the "search" button is disabled and a "reset" button is displayed.
If there is no results for the search done, the following message is displayed: "No records found".
When clicking on "reset", the search is removed and all the results are displayed.
 
 ### Bulk actions

The Bulk actions button is enabled only if at least one row of the list is selected.
Clicking on the _Bulk actions_ button allows users to perform bulk actions for selected carriers (using the checkboxes). A user can:

- Select all/Unselect all: this button will select/unselect all the checkboxes at the beginning of each row of the listing.
- Enable/Disable selection: this button will either enable or disable the selected carriers.
After clicking on "enable"  or "disable", the selected carriers is enabled or disabled, and a successful message is displayed: "The status has been successfully updated."
- Delete selected: This button will delete the selected carriers. 
When trying to delete the selection without any checkboxes checked, the following message is displayed: "You must select at least one item to perform a bulk action."
After clicking on "Delete selected", a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?" (See issue [#14462](https://github.com/PrestaShop/PrestaShop/issues/14462)). The action can be canceled by clicking on the cross or on the cancel button.
After clicking on "Delete" button, the selected carrier is deleted, a successful message is displayed "The selection has been successfully deleted."

 ### Multistore

 
Only the carriers created in the selected store or store group (through the context) are displayed.
For example, let's say there's the following configuration made:
- Group 1
  - Shop A
  - Shop B
- Group 2
  - Shop C
If the group 1 is selected as context, then the attributes created in Shop A and Shop B will be displayed.
If the Shop A is selected as context, then the attributes created in Shop A will be displayed.
If "all shops" is selected as context, then the attributes created in Shop A, Shop B, and Shop C will be displayed.
