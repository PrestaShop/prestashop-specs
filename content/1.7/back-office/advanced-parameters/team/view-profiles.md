---
title: View profiles
weight: 1
---

### Multistore

If multistore is enabled on the shop, firstly a message is presented: "Note that this page is available in all shops context only, this is why your context has just switched.".

## Settings wheel

1. Refresh list

After clicking on it, the page is reloaded. Sorts and searches are kept.

2. Show SQL query

After clicking on it, the SQL query is displayed in a modal. The SQL query takes into account filters and sorts that have been done.

There are two buttons:

Close: After clicking on it, the modal is closed
Export to SQL Manager: After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

3. Export to SQL Manager

## Bulk actions

- Delete selected: This button will delete the selected profiles. 
After clicking on "Delete selected", a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?" (See issue [#14462](https://github.com/PrestaShop/PrestaShop/issues/14462)). The action can be canceled by clicking on the cross or on the cancel button.
After clicking on "Delete" button, the selected pofile will be deleted, a successful message is displayed "The selection has been successfully deleted."

# Profiles

In this section 3 rows are presented:

1) ID

It's possible to sort by id asc or desc and search by id.

2) Name

It's possible to sort by name asc or desc and search by name.

3) Actions

**Edit.** The user can edit a profile as often as necessary. 

👉 See the [specs of the add/edit profile]({{<ref "add-edit-profile.md">}} "Add/edit profile")

**Delete.** A profile can be deleted by clicking this button. After clicking on Delete, a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?" The action can be canceled by clicking on the cross or on the cancel button. After clicking on "Delete" button, the profile is deleted, a successful message is displayed "Successful deletion."
