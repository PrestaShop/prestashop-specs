---
title: Quick access listing
weight: 1
---

# Quick access listing

PrestaShop has handy shortcuts to your most important pages, which can be accessed through the "Quick Access" menu, at the top right of every page of the PrestaShop back office (right next to the username).

## Call to action

A call to actions is displayed in the header of this page:

  - Add new quick access

👉  See the [specs of the add/edit quick access]({{<ref "add-edit-quick-access.md">}} "Add/edit quick access") 

## Settings wheel

When clicking on the settings wheel, the following options are displayed:

1. Add new

After clicking it, redirects to the add edit specs [specs of the add/edit quick access]({{<ref "add-edit-quick-access.md">}} "Add/edit quick access") 

2. Refresh list

After clicking on it, the page is reloaded. Sorts and searches are kept.

3. Show SQL query

After clicking on it, the SQL query is displayed in a modal. The SQL query takes into account filters and sorts that have been done.

There are two buttons:

- Close: After clicking on it, the modal is closed
- Export to SQL Manager: After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

4. Export to SQL Manager

After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

### Bulk actions

Clicking on the _Bulk actions_ button allows performing bulk actions for the selected quick accesses (using the checkboxes). A user can:

- Select all/Unselect all: this button will select/unselect all the checkboxes at the beginning of each row of the listing.
- Delete selected: This button will delete the selected quick access. 
After clicking on "Delete selected", a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?" (See issue [#14462](https://github.com/PrestaShop/PrestaShop/issues/14462)). The action can be canceled by clicking on the cross or on the cancel button.
After clicking on "Delete" button, the selected quick access will be removed, and a successful message is displayed "The selection has been successfully deleted."

## Columns

The page displays the quick access list with the following columns:

1. ID

It's possible to sort by id asc or desc and search by id.

2. Name

It's possible to sort by name of quick accesses asc or desc and search by name.

3. Link

It's possible to sort the links of the quick access by asc or desc .

4. New window

It's possible to sort the enabled/disabled quick accesses by asc or desc.

5. Actions

**Edit.** The attribute can be edited as often as necessary.

👉 See the [specs of the add/edit quick access]({{<ref "add-edit-quick-access.md">}} "Add/edit quick access") 

**Delete.** The quick access can be deleted by clicking on this button. After clicking on "Delete", a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?"
The action can be canceled by clicking on the cross or on the cancel button.
After clicking on "Delete" button, the quick access deleted, a successful message is displayed "Successful deletion."

#### Search
The search button is disabled as long as no search field has been filled. After clicking on "search", the "search" button is disabled and a "reset" button is displayed. If there is no results for the search done, the following message is displayed: "No records found". When clicking on "reset", the search is removed and all the results are displayed.
