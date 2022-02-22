---
title: Brands and suppliers brands
weight: 1
---

In this page Brands are addresses are displayed.

### Call to action

2 call to actions are displayed in the header of this page:

 1) Add new brand

👉 See the [specs of the add/edit brand]({{<ref "add-edit-brand.md">}} "Add/edit brand") 

 3) Add new brand address

👉 See the [specs of the add/edit address]({{<ref "add-edit-address.md">}} "Add/edit address") 

### Settings wheel

When clicking on the settings wheel, the following options are displayed:
1) Import

After clicking on it, the Advanced parameters > Import page is opened.

2) Refresh list

After clicking on it, the page is reloaded. Sorts and searches are kept.

3) Show SQL query

After clicking on it, the SQL query is displayed in a modal. The SQL query takes into account filters and sorts that have been done.

There are two buttons:

- Close: After clicking on it, the modal is closed
- Export to SQL Manager: After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

4) Export to SQL Manager

After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager


### Bulk actions

Clicking on the _Bulk actions_ button allows performing bulk actions for the selected brands or addresses (using the checkboxes). A user can:

- Select all/Unselect all: this button will select/unselect all the checkboxes at the beginning of each row of the listing.
- Delete selected: This button will delete the selected brands or addresses. 
After clicking on "Delete selected", a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?" (See issue [#14462](https://github.com/PrestaShop/PrestaShop/issues/14462)). The action can be canceled by clicking on the cross or on the cancel button.
After clicking on "Delete" button, the selected brand or address is deleted, a successful message is displayed "The selection has been successfully deleted."

## Brands

All the brands are listed in this section, the following collumns are displayed:

1. ID

Id of the brand is displayed.

2. Logo

Logo of the brand is displayed.

3. Name

It's possible to sort by name asc or desc.

4. Addresses

5. Products

6. Enabled

This is a toggle switch that can be turned to "yes" or "no", by default all brands are turned to "yes". Can be sorted by "yes" or "no"

7. Actions

*View.** This is the main action and it can be performed by clicking on the line. 

👉 See the [specs of the view brand]({{<ref "view-brand.md">}} "View brand") 

**Edit.** The brand can be edited as often as necessary.

👉 See the [specs of the add/edit brand]({{<ref "add-edit-brand.md">}} "Add/edit brand") 

**Delete.** The brand can be deleted by clicking on this button. After clicking on "Delete", a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?"
The action can be canceled by clicking on the cross or on the cancel button.
After clicking on "Delete" button, the brand will be deleted, a successful message is displayed "Successful deletion."

## Addresses

1. ID

2. Brand

3. First name

4. Last name

5. Zip/Postal code

6. City

7. Country

Drop-down list of all the countries which can be selected and searched.

8. Actions

**Edit.** The brand can be edited as often as necessary.

👉 See the [specs of the add/edit address]({{<ref "add-edit-address.md">}} "Add/edit address") 

**Delete.** The address can be deleted by clicking on this button. After clicking on "Delete", a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?"
The action can be canceled by clicking on the cross or on the cancel button.
After clicking on "Delete" button, the address will be deleted, a successful message is displayed "Successful deletion."

#### Search
The search button is disabled as long as no search field has been filled. After clicking on "search", the "search" button is disabled and a "reset" button is displayed. If there is no results for the search done, the following message is displayed: "No records found". When clicking on "reset", the search is removed and all the results are displayed.
