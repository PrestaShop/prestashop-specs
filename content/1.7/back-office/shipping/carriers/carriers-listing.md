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

1. Add new

When pressed redirects to the add/edit carrier page see the [specs of the add/edit carrier](./add-edit-carrier.md) 

2. Refresh list

After clicking on it, the page is reloaded. Sorts and searches are kept.

3. Show SQL query

After clicking on it, the SQL query is displayed in a modal. The SQL query takes into account filters and sorts that have been done.

There are two buttons:

- Close: After clicking on it, the modal is closed
- Export to SQL Manager: After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

4. Export to SQL Manager

After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

## Columns

The page displays the stores list with the following columns:

1. ID

It's possible to sort by id asc or desc and search by id.

2. Name

It's possible to sort by name of carriers asc or desc and search by name.

3. Logo

Displays the logo.

4. Delay

Displays the delay of the shipping method.

5. Status

Status if the carrier is active or not. If active - green check mark. If inactive - red cross

6. Free shipping

Status if the carrier provides free shipping. If active - green check mark. If inactive - red cross

7. Position

Position number, that can be dragged within the carriers. It's possible to sort by position asc or desc and search.

8. Actions

- **Edit.** This is the main action and it can be performed by clicking on the line or on the button. 
 👉  See the [specs of the add/edit carrier]({{<ref "add-edit-carrier.md">}} "Add/edit carrier") 

- **Delete.** The carrier can be deleted by clicking on this button. After clicking on "Delete", a modal with the title "Delete selection" is opened asking to confirm or cancel the  action: "Are you sure you want to delete the selected item(s)?"
 The action can be canceled by clicking on the cross or on the cancel button.
 After clicking on "Delete" button, the carrier is deleted and a successful message is displayed "Successful deletion."
 
 ### Bulk actions

The Bulk actions button is enabled only if at least one row of the list is selected.
Clicking on the _Bulk actions_ button allows users to perform bulk actions for selected stores (using the checkboxes). A user can:

- Select all/Unselect all: this button will select/unselect all the checkboxes at the beginning of each row of the listing.
- Enable/Disable selection: this button will either enable or disable the selected carriers.
After clicking on "enable"  or "disable", the selected carriers is enabled or disabled, and a successful message is displayed: "The status has been successfully updated."
- Delete selected: This button will delete the selected carriers. 
When trying to delete the selection without any checkboxes checked, the following message is displayed: "You must select at least one item to perform a bulk action."
After clicking on "Delete selected", a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?" (See issue [#14462](https://github.com/PrestaShop/PrestaShop/issues/14462)). The action can be canceled by clicking on the cross or on the cancel button.
After clicking on "Delete" button, the selected carrier is deleted, a successful message is displayed "The selection has been successfully deleted."
