---
title: Employees view
weight: 1
---

# Employees 

### Call to action

1 call to action button is present at the top of the page:

 - Add new employee, when pressed redirects to the [specs of the add/edit new employee]({{<ref "../team/add-edit.md">}} "Add/edit new employee") 

In this page 2 sections are present 

### Settings wheel

1) Refresh list

After clicking on it, the page is reloaded. Sorts and searches are kept.

2) Show SQL query

After clicking on it, the SQL query is displayed in a modal. The SQL query takes into account filters and sorts that have been done.

There are two buttons:

- Close: After clicking on it, the modal is closed
- Export to SQL Manager: After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

3) Export to SQL Manager

After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

### Bulk actions 

Clicking on the _Bulk actions_ button allows users to perform bulk actions for selected features (using the checkboxes). A user can:

- Enable selection: this button will enable all the checkboxes that are selected.
- Disable selection: this button will disable all the checkboxes that are selected.
- Delete selected: This button will delete the selected employees. 
After clicking on "Delete selected", a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?" (See issue [#14462](https://github.com/PrestaShop/PrestaShop/issues/14462)). The action can be canceled by clicking on the cross or on the cancel button.
After clicking on "Delete" button, the selected employee will be deleted, a successful message is displayed "The selection has been successfully deleted."

## Employees

7 rows are presented in this section:

1) ID

It's possible to sort by id asc or desc and search by id.

2) First name

It's possible to sort by first name asc or desc and search by first name.

3) Last name

It's possible to sort by last name asc or desc and search by last name.

4) Email address

It's possible to sort by email address asc or desc and search by email address.

5) Profile

This is a drop-down field, can be sorted by asc or desc, when pressed, by default the following options are:

 - SuperAdmin
 - Logistician
 - Translator
 - Salesman

6) Active

This is a drop-down field, can be sorted by asc or desc, when pressed the following options are:

 - Yes
 - No

7) Actions

**Edit.** The user can edit edit the employee as often as necessary.

👉 See the [specs of the add/edit new employee]({{<ref "../team/add-edit.md">}} "Add/edit new employee") 

**Delete.** An employee can be deleted by clicking this button. After clicking on Delete, a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?"
The action can be canceled by clicking on the cross or on the cancel button.
After clicking on "Delete" button, the employee is deleted, a successful message is displayed "Successful deletion."

## Employee options

In this section 2 fields are present:

1) Password regeneration

By default it is set to: 360. On the right from the field it is shown that the number is measured in: "Minutes".
A help text below is shown: "Security: Minimum time to wait between two password changes."

2) Memorize the language used in Admin panel forms 

This is a toggle switch, by default is set to: "No". 
A help text below is shown: "Allow employees to select a specific language for the Admin panel form.".

### Call to action

1 call to action is presented:

 - Save, when pressed, a message is shown: "Successful update.".
