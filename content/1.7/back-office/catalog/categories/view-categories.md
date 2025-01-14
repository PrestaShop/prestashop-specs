---
title: View categories
weight: 1
---

In this page the categories of the shop are shown.

# Categories

### Call to action

 - Add new category, when pressed redirects to the [specs of the add new edit category]({{<ref "add-edit-category.md">}} "Add edit category") 

Below there is a table with the following metrics:

 - Disabled categories
 - Empty categories (can be pressed, when pressed redirects to the [Monitoring page]({{<ref "../monitoring/monitoring-listing.md">}} "Monitoring Page")
 - Top categories
 - Average number of products per category

And a "refresh" button, when pressed refreshes the metrics.

Below Home category location is shown, and there is an: "Edit" button, when pressed redirects to the [specs of the add new edit category]({{<ref "add-edit-category.md">}} "Add edit category") 

### Settings wheel

When clicking on the settings wheel, the following options are displayed:

1) Import

After clicking on it, the Advanced parameters > Import page is opened.

2) Export

When pressed, a pop-up appears to export the categories to a csv file.

3) Refresh list

After clicking on it, the page is reloaded. Sorts and searches are kept.

4) Show SQL query

After clicking on it, the SQL query is displayed in a modal. The SQL query takes into account filters and sorts that have been done.

There are two buttons:

- Close: After clicking on it, the modal is closed
- Export to SQL Manager: After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

5) Export to SQL Manager

After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

### Bulk actions

Clicking on the _Bulk actions_ button allows performing bulk actions for the selected categories (using the checkboxes). A user can:

- Select all/Unselect all: this button will select/unselect all the checkboxes at the beginning of each row of the listing.
- Delete selected: This button will delete the selected categories. 
After clicking on "Delete selected", a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?" (See issue [#14462](https://github.com/PrestaShop/PrestaShop/issues/14462)). The action can be canceled by clicking on the cross or on the cancel button.
After clicking on "Delete" button, the selected category will be deleted, a successful message is displayed "The selection has been successfully deleted."

### Columns

1) ID

It's possible to sort by id asc or desc and search by id.

2) Name

It's possible to sort by name asc or desc and search by name.

3) Description

Description of the category, can be searched by description.

4) Position

It's possible to sort by position asc or desc and search by position.

5) Displayed

Drop-down menu, can be searched by "Yes" or "No". The toggle switch in every category can be turned on or turned off.

6) Actions

**View.** This is the main action and it can be performed by clicking on the line. 

Shows the same view categories page when clicked.

**Edit.** The category can be edited as often as necessary.

👉 See the [specs of the add/edit category]({{<ref "add-edit-category.md">}} "Add/edit category") 

**Delete.** The category can be deleted by clicking on this button. After clicking on "Delete", a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?"
The action can be canceled by clicking on the cross or on the cancel button.
After clicking on "Delete" button, the category will be deleted, a successful message is displayed "Successful deletion."
