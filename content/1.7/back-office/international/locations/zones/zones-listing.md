---
title: Zones listing
weight: 1
---

# Zones listing

## Call to action

A call to actions is displayed in the header of this page:

 - Add new zone

👉  See the [specs of the add edit zone]({{<ref "add-edit-zone.md">}} "Add edit zone") 

## Settings wheel

When clicking on the settings wheel, the following options are displayed:

1. Refresh list

After clicking on it, the page is reloaded. Sorts and searches are kept.

2. Show SQL query

After clicking on it, the SQL query is displayed in a modal. The SQL query takes into account filters and sorts that have been done.

3. Export to SQL Manager

After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

# Bulk actions

Clicking on the _Bulk actions_ button allows performing bulk actions for the selected zones (using the checkboxes). A user can:

- Enable/Disable selection: these buttons will enable/disable all the zones that are selected.
- Delete selected: This button will delete the selected zone. 
After clicking on "Delete selected", a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?" (See issue [#14462](https://github.com/PrestaShop/PrestaShop/issues/14462)). The action can be canceled by clicking on the cross or on the cancel button.
After clicking on "Delete" button, the selected zone gets deleted, a successful message is displayed "The selection has been successfully deleted."

## Columns

1. ID

It's possible to sort by id asc or desc and search by id.

2. Zone

It's possible to search and sort by a zone.

3. Enabled

It's possible to search for enabled or disabled zones by selecting either "yes" or "no" in the drop-down.

When a search is performed with "yes" selected, only the zones that are enabled will be displayed.
When a search is performed with "no" selected, only the zones that are disabled will be displayed.

4. Actions

**Edit.** This is the main action and it can be performed by clicking on the line or on the button. 

👉 See the [specs of the add edit zone({{<ref "add-edit-zone.md">}} "Add edit zone") 

**Delete.** The zone can be deleted by clicking on this button. After clicking on "Delete", a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?" (See issue [#14462](https://github.com/PrestaShop/PrestaShop/issues/14462)).
The action can be canceled by clicking on the cross or on the cancel button.
After clicking on "Delete" button, the zone is deleted and a successful message is displayed "Successful deletion."

### Search
The search button is disabled as long as no search field has been filled. After clicking on "search", the "search" button is disabled and a "reset" button is displayed. If there is no results for the search done, the following message is displayed: "No records found". When clicking on "reset", the search is removed and all the results are displayed.
