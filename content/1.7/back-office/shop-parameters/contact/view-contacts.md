---
title: View attribute
weight: 1
---
# View contacts
The shop offers several points of contact for the customers, from a contact form to a list of physical stores \(if any\). These pages are where anything related to your contact details are configured.

## Call to action

A call to actions is displayed in the header of this page:
 
  - Add new contact
  
👉 See the [specs of the add/edit contact](./add-edit-contact.md) 

# Settings wheel

When clicking on the settings wheel, the following options are displayed:

1. Refresh list

After clicking on it, the page is reloaded. Sorts and searches are kept.

2. Show SQL query

After clicking on it, the SQL query is displayed in a modal. The SQL query takes into account filters and sorts that have been done.

There are two buttons:

Close: After clicking on it, the modal is closed
Export to SQL Manager: After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

3. Export to SQL Manager

After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

## Bulk actions

Clicking on the _Bulk actions_ button allows users to perform bulk actions for selected attribute values (using the checkboxes). A user can:

- Select all/Unselect all: this button will select/unselect all the checkboxes at the beginning of each row of the listing.
- Delete selected: This button will delete the selected attributes. 
After clicking on "Delete selected", a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?" (See issue [#14462](https://github.com/PrestaShop/PrestaShop/issues/14462)). The action can be canceled by clicking on the cross or on the cancel button.
After clicking on "Delete" button, the selected attribute values are deleted, a successful message is displayed "The selection has been successfully deleted."

## Columns

The page displays the attribute values list with the following columns:
 
1. ID

It's possible to sort by id asc or desc and search by id.

2. Title

It's possible to sort by value asc or desc and search by value.

3. Email address

The position of each attribute value can be changed by clicking on this column and by moving it up or down.
After changing the position, the message "Successful update." is displayed.

4. Description

**Edit.** The user can edit an attribute value as often as necessary. 

👉 See the [specs of the add/edit contacts](./add-edit-contacts.md) 

**Delete.** The contact can be deleted by clicking this button. After clicking on Delete, a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?" The action can be canceled by clicking on the cross or on the cancel button. After clicking on "Delete" button, the attribute value is deleted, a successful message is displayed "Successful deletion."

