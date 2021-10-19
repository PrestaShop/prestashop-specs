 # View feature - Composition (name of the feature, can be different)
 
 By viewing the feature, the name of the selected feature at the top should be seen.
 
 Buttons on the top right corner in this page:
 
  - Add new feature value (for creating new value for the feature)
  - Recommended modules and services

 Lower row (left to right):
 
  - Name of the Feature and number of values it contains.
  - Add new (for adding a new feature)
  - Refresh list (for updating the list)
  - Show SQL query (Opens a popup showing SQL code for the page)
  - Export to SQL Manager (redirects to the SQL manager in the back office)

 Row below (left to right):
 
  - Column for checkmarking (selecting) the values;
  - ID column with a possibility to change the sorting of the list;
  - Value column also with a possibility to change the sorting of the list;

 Row below (left to right):
 
  - Input field for ID search;
  - Value input field search;
  - Search button to search, when either ID or value is input in the search field. 
     - If the search is initiated without entering anything, a message in a yellow field should appear "Please fill at least one field to perform a search in this list."
     - If the search is entered with a non existant value, all values disappear, a new button near "search" appears, in a yellow frame named "reset" which resets the search, brings back to show all the possible values.

Every row from the values list when hovered on, changes the whole value row color to blue.

Every row of all the values has it's own "edit" button + drop down with an option to delete the value.

  - When pressed on "edit" redirect to [edit feature value](../features/add-edit-feature-value.md)
  - When pressed on "delete", prompts with a message "delete selected item?" and 2 selections are available "yes" or "no"
    - If pressed "yes" returns to the same page, shows message "Successful deletion."
    - If pressed "no" returns to the same page, nothing changes.

Below there are 2 more buttons in the same collumn "Bulk actions" drop down (going up), and "Back to the list" button which redirects to the features window.
 

 FROM MARION
 
 1. ID
It's possible to sort by id asc or desc and search by id.

2. Name
It's possible to sort by name asc or desc and search by name.

3. Values

It indicates the number of values for each feature.
4. Position
The position of each feature can be changed by clicking on this column and by moving it up or down.
After changing the position, the message "Successful update." is displayed.

5. Actions

**View.** The values of the feature are displayed in a table. This is the main action and it can be performed by clicking on the line. When the feature has no value, the following message is displayed: "No records found"
**Edit.** The user can edit a feature as often as necessary.
**Delete.** A feature can be deleted by clicking this button. After clicking on Delete, a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?"

The action can be canceled by clicking on the cross or on the cancel button.
After clicking on "Delete" button, the feature and all its values are deleted, a successful message is displayed "Successful deletion."

