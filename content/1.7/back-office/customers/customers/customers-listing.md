---
title: Customers listing
weight: 1
---

# Customers listing

In this page, all of the shop customers registered are displayed.

### Call to action

 - **Add new customer** - redirects to the [specs of the add/edit customer]({{<ref "add-edit-customer.md">}} "Add/edit customer")

Below there is a table with the following metrics:

 - Customers all time
 - Average age all time
 - Orders per Customer all time
 - Newsletter Registrations all time

On the right of the table there is a refresh button, when pressed, updates the metrics.

## Settings wheel

When clicking on the settings wheel, the following options are displayed:

1) Import

After clicking on it, the Advanced parameters > Import page is opened.

2) Export

After clicking on it, the list is prompted to get saved on the device.

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

Clicking on the _Bulk actions_ button allows performing bulk actions for the selected attributes (using the checkboxes). A user can:

- Enable selection
- Disable selection
- Delete selected
After clicking on "Delete selected", a modal appears stating: "How do you want to delete the selected customers? There are two ways of deleting a customer. Please choose your preferred method.". Below there are 2 options:
   - I want my customers to be able to register again with the same email address. All data will be removed from the database. (selected by default)
   - I do not want my customer(s) to register again with the same email address. All selected customer(s) will be removed from this list but their corresponding data will be kept in the database.

#### Call to action

In the modal you can select:

 - Close: Closes the modal.
 - Delete: Deletes the selected customer, displays a message: "The selection has been successfully deleted.".

# Manage your customers

Below there is the customers list with the following columns

#### Columns

 - ID - Input for the search ID

 1) Social title 
 
 This is a drop-down selection, when pressed can choose: "Mr." or "Mrs.".
 
 2) First name 
 
 First name of the customer.
 
 3) Last name 

 Last name of the customer.
 
 4) Email address 

 Email address of the customer

 5) Sales 
 
 Number of sales that the customer made, displayed in a green.

 6) Enabled
 
 Drop-down selection for "yes" or "no".

 7) Newsletter 
 
 Drop-down selection for "yes" or "no".

 8) Partner offers

 Toggle switch, can be enabled or disabled. Drop-down selection for "yes" or "no".

 9) Registration 
 
 Displays the date when the customer registered. For the search there are 2 fields "from" and "to", when pressed, calendar appears which allows to select a date.

 10) Last visit

 Displays the last time the customer visited the shop.

 11) Actions 

 **View.** This is the main action and it can be performed by clicking on the line. 

👉 See the [specs of the view customer]({{<ref "view-customer.md">}} "View customer") 

**Edit.** The attribute can be edited as often as necessary.

👉 See the [specs of the add/edit customer]({{<ref "add-edit-customer.md">}} "Add/edit customer") 

**Delete.** The attribute can be deleted by clicking on this button. After clicking on "Delete", a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?"
The action can be canceled by clicking on the cross or on the cancel button.
After clicking on "Delete" button, the customer is deleted, a successful message is displayed "Successful deletion."

#### Search
The search button is disabled as long as no search field has been filled. After clicking on "search", the "search" button is disabled and a "reset" button is displayed. If there is no results for the search done, the following message is displayed: "No records found". When clicking on "reset", the search is removed and all the results are displayed.

### Call to action

 - Set required fields for this section: When pressed, a new table below appears:

 **Required fields**
 
Firstly an explanation is presented:

"Select the fields you would like to be required for this section.
 Please make sure you are complying with the opt-in legislation applicable in your country."

Below 2 checkboxes are available:

 - Select all (when pressed select all checkboxes)
 - Partner offers

#### Call to action

 - Save: When pressed, the additional table disappears, a message is shown: "Successful update.".
