 ## View feature - Composition (name of the feature, can be different)
 
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
 

 

