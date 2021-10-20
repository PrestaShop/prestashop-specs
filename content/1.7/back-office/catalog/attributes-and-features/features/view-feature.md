# View feature
 
 When viewing a feature, the name of the selected feature is displayed as the name of the block.
 
## Call to action
 
1 call to actions is displayed in the header of this page:
 
  - Add new feature value (for creating new value for this feature)
 
## Settings wheel

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

Clicking on the _Bulk actions_ button allows users to perform bulk actions for selected feature values (using the checkboxes). A user can:

- Select all/Unselect all: this button will select/unselect all the checkboxes at the beginning of each row of the listing.
- Delete selected: This button will delete the selected features. 
After clicking on "Delete selected", a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?" (See issue [#14462](https://github.com/PrestaShop/PrestaShop/issues/14462)). The action can be canceled by clicking on the cross or on the cancel button.
After clicking on "Delete" button, the selected feature values are deleted, a successful message is displayed "The selection has been successfully deleted."

## Columns

The page displays the feature values list with the following columns:
 
1. ID

It's possible to sort by id asc or desc and search by id.

2. Value

It's possible to sort by value asc or desc and search by value.

3. Actions

**Edit.** The user can edit a feature value as often as necessary. 
👉 See the [edit feature value spec](../features/add-edit-feature-value.md)

**Delete.** A feature value can be deleted by clicking this button. After clicking on Delete, a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?" The action can be canceled by clicking on the cross or on the cancel button. After clicking on "Delete" button, the feature value is deleted, a successful message is displayed "Successful deletion."

### Search

The search button is disabled as long as no search field has been filled.
After clicking on "search", the "search" button is disabled and a "reset" button is displayed.
If there is no results for the search done, the following message is displayed: "No records found".
When clicking on "reset", the search is removed and all the results are displayed.

## Back to the list

The "Back to the list" button redirects to the features lisitng.
