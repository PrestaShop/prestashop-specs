---
title: Contacts listing
weight: 1
---
# Contacts listing

This page lists all the contacts of the store. The list of contacts is displayed in the contact form of the front office. The customer can choose the contact to send the message.
## Multistore

Only the contacts created in the selected store or store group (through the context) are displayed.

For example, let's say I have the following configuration:
- Group 1
  - Shop A
  - Shop B
- Group 2
  - Shop C

If I select group 1 as context, then the contacts created in Shop A and Shop B will be displayed.

If I select Shop A as context, then the contacts created in Shop A will be displayed.

If I select all shops as context, then the contacts created in Shop A, Shop B and Shop C will be displayed.
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

- Close: After clicking on it, the modal is closed
- Export to SQL Manager: After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

3. Export to SQL Manager

After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

## Bulk actions

Clicking on the _Bulk actions_ button allows users to perform bulk actions for selected contacts (using the checkboxes). A user can:

- Select all/Unselect all: this checkbox will select/unselect all the checkboxes at the beginning of each row of the listing.
- Delete selected: This button will delete the selected contacts. 
After clicking on "Delete selected", a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?" (See issue [#14462](https://github.com/PrestaShop/PrestaShop/issues/14462)). The action can be canceled by clicking on the cross or on the cancel button.
After clicking on "Delete" button, the selected contacts are deleted, a successful message is displayed "The selection has been successfully deleted."

## Columns

The page displays the contacts list with the following columns:
 
1. ID

It's possible to sort by id asc or desc and search by id.

2. Title

It's possible to sort by title asc or desc and search by title.

3. Email address

It's possible to sort by email address asc or desc and search by email address.

4. Description

It's possible to sort by description asc or desc and search by description.

5. Actions

**Edit.** This is the main action and it can be performed by clicking on the line. The user can edit a contact as often as necessary. 

👉 See the [specs of the add/edit contacts](./add-edit-contacts.md) 

**Delete.** The contact can be deleted by clicking this button. After clicking on Delete, a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?" The action can be canceled by clicking on the cross or on the cancel button. After clicking on "Delete" button, the contact is deleted, a successful message is displayed "Successful deletion."

