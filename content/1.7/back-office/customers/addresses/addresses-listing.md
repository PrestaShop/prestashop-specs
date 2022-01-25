---
title: Addresses listing
weight: 1
---

# Addresses listing

## Call to action

A call to actions is displayed in the header of this page:

 - Add new zone

👉  See the [specs of the add new address]({{<ref "add-new-addresses.md">}} "Add new address") 

## Settings wheel

When clicking on the settings wheel, the following options are displayed:

1. Refresh list

After clicking on it, the page is reloaded. Sorts and searches are kept.

2. Show SQL query

After clicking on it, the SQL query is displayed in a modal. The SQL query takes into account filters and sorts that have been done.

3. Export to SQL Manager

After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

# Bulk actions

Clicking on the _Bulk actions_ button allows performing bulk actions for the selected addresses (using the checkboxes). A user can:

- Delete selected: This button will delete the selected address. 

## Columns

The page displays the addresses list with the following columns:

1. ID

It's possible to sort by id asc or desc and search by id.

2. First name

It's possible to search by the first name.

3. Last name

It's possible to search by the last name.

4. Address

It's possible to search by the address.

5. Zip/Postal code

It's possible to search by the Zip/Postal code.

6. City

It's possible to search by the City.

7. Country

Drop-down list of all the countries that it can be searched by.

8. Actions

**Search.**

**Edit.** This action can be performed by clicking on the line or on the button. 

👉 See the [specs of the add new address({{<ref "add-new-address.md">}} "Add new address") 

**Delete.** The zone can be deleted by clicking on this button. After clicking on "Delete", a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?"
The action can be canceled by clicking on the cross or on the cancel button.
After clicking on "Delete" button, the zone is deleted and a successful message is displayed "Successful deletion."

After clicking on "Delete selected", a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?" (See issue [#14462](https://github.com/PrestaShop/PrestaShop/issues/14462)). The action can be canceled by clicking on the cross or on the cancel button.
After clicking on "Delete" button, the selected zone will be removed, and a successful message is displayed "The selection has been successfully deleted."

## Call to action

**Set required fields for this section** - When pressed, additional section called "Required Fields" appears below.

Firstly a help text is presented: "Required fields apply to the customer's registration form, you should check the address formats in International > Locations > Countries before. "

Below there is a list with possible check boxes:

 - **Select all** - checkmarks all the selections below.
 - **Company**
 - **address2**
 - **postcode**
 - **other**
 - **phone**
 - **phone_mobile**
 - **vat_number**
 - **dni**

#### Call to action

 - **Save** - When pressed, shows the following: "Update successful", and closes the additional tab.
