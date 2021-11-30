---
title: Tags listing
weight: 1
---
# Tags listing

The tagging feature allows associating products with keywords. Customers can use the keywords to easily and quickly find the products they are looking for through the search bar in front office.

## Multistore

While creating or editing a tag, it's added or edited for all shops (no matter the context selected). So, the list displays all the tags, no matter the context selected.
👉 See [the specs](../../../../../../broader-topics/multistorespecialsspecs.md#list-of-pages-for-specific-case-2-add-new-pages-without-shop-association-block)

## Call to action
 
A call to actions is displayed in the header of this page:
 
  - Add new tag

👉 See the [specs of the add/edit tag](./add-edit-tag.md) 

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

After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager.

## Columns

The page displays the tag list with the following columns:

1. ID

ID of the tag.

2.  Language

Language of the tag.

3. Name

Name of the tag.

4. Products

Number of products that can be found with the tag.

5. Actions

- **Edit.** This is the main action and it can be performed by clicking on the line or on the button. 
👉 See the [specs of the add/edit tag](./add-edit-tag.md) 

- **Delete.** The tag can be deleted by clicking on this button. After clicking on "Delete", a modal with the title "Delete selection" is opened asking to confirm or cancel the  action: "Are you sure you want to delete the selected item(s)?"
  The action can be canceled by clicking on the cross or on the cancel button.
  After clicking on "Delete" button, the tag is deleted and a successful message is displayed "Successful deletion."
  
### Bulk actions
The Bulk actions button is enabled only if at least one row of the list is selected.
Clicking on the _Bulk actions_ button allows users to perform bulk actions for selected tags (using the checkboxes). A user can:

- Select all/Unselect all: this button will select/unselect all the checkboxes at the beginning of each row of the listing.
- Delete selected: This button will delete the selected tags. 
After clicking on "Delete selected", a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Delete the selected item(s)?" (See issue [#14462](https://github.com/PrestaShop/PrestaShop/issues/14462)). The action can be canceled by clicking on the cross or on the cancel button.
After clicking on "Ok" button, the selected tag is deleted, a successful message is displayed "The selection has been successfully deleted."

## Search
The search button is disabled as long as there are less than 2 tags in the list. A search can be done by ID, language, name, and Products.
It's possible to sort the list by ID, language, name or products in an ascending or descending way.
After clicking on "search", the "search" button is disabled and a "reset" button is displayed.
If there is no results for the search done, the following message is displayed: "No records found".
When clicking on "reset", the search is removed and all the results are displayed.
