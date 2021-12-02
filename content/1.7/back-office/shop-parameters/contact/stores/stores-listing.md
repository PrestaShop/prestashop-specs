---
title: Stores listing
weight: 1
---

# Stores listing

This page lists all the stores. The stores enabled are displayed in the corresponding "stores" page of the front office.

## Multistore

Only the stores created in the selected store or store group (through the context) are displayed.

For example, let's say I have the following configuration:
- Group 1
  - Shop A
  - Shop B
- Group 2
  - Shop C

If I select group 1 as context, then the stores created in Shop A and Shop B will be displayed.

If I select Shop A as context, then the stores created in Shop A will be displayed.

If I select all shops as context, then the stores created in Shop A, Shop B and Shop C will be displayed.
## Call to action
 
A call to actions is displayed in the header of this page:
 
  - Add new store

👉 See the [specs of the add/edit store](./add-edit-store.md) 

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

After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

## Columns

The page displays the stores list with the following columns:

1. ID

It's possible to sort by id asc or desc and search by id.

2. Name

It's possible to sort by name asc or desc and search by name.

3. Address

It's possible to sort by address asc or desc and search by address.

4. City

It's possible to sort by city asc or desc and search by city.

5. Zip/Postal code

It's possible to sort by zip code asc or desc and search by zip code.

6. State

It's possible to sort by state asc or desc and search by state.

7. Country

It's possible to sort by country asc or desc and search by country.

8. Phone

It's possible to sort by phone asc or desc and search by phone.

9. Fax

It's possible to sort by fax asc or desc and search by fax.

10. Enabled

A drop-down allows to select: 
- Yes
- No
 
When a search is performed with "yes" selected, only the stores enabled are displayed.
When a search is performed with "no" selected, only the stores disabled are displayed.

11. Actions

- **Edit.** This is the main action and it can be performed by clicking on the line or on the button. 
 👉 See the [specs of the add/edit store](./add-edit-store.md) 

- **Delete.** The store can be deleted by clicking on this button. After clicking on "Delete", a modal with the title "Delete selection" is opened asking to confirm or cancel the  action: "Are you sure you want to delete the selected item(s)?"
 The action can be canceled by clicking on the cross or on the cancel button.
 After clicking on "Delete" button, the store is deleted and a successful message is displayed "Successful deletion."

### Bulk actions
The Bulk actions button is enabled only if at least one row of the list is selected.
Clicking on the _Bulk actions_ button allows users to perform bulk actions for selected stores (using the checkboxes). A user can:

- Select all/Unselect all: this button will select/unselect all the checkboxes at the beginning of each row of the listing.
- Enable/Disable selection: this button will either enable or disable the selected stores.
After clicking on "enable"  or "disable", the selected store is enabled or disabled, and a successful message is displayed: "The status has been successfully updated."
- Delete selected: This button will delete the selected stores. 
When trying to delete the selection without any checkboxes checked, the following message is displayed: "You must select at least one item to perform a bulk action."
After clicking on "Delete selected", a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?" (See issue [#14462](https://github.com/PrestaShop/PrestaShop/issues/14462)). The action can be canceled by clicking on the cross or on the cancel button.
After clicking on "Delete" button, the selected store is deleted, a successful message is displayed "The selection has been successfully deleted."

## Search
The search button is disabled as long as no search field has been filled.
After clicking on "search", the "search" button is disabled and a "reset" button is displayed.
If there is no results for the search done, the following message is displayed: "No records found".
When clicking on "reset", the search is removed and all the results are displayed.
# Contact details

This section allows giving the main details of the company, rather than those of a specific shop.

The following fields are shown in this section:

- Shop name 

This field is mandatory. When the label is hovered, a tooltip is displayed: "Displayed in emails and page titles."
If the save button is pressed and if this field is empty, the following error message is displayed: "field Shop name is required"

- Shop email

This field is mandatory. When the label is hovered, a tooltip is displayed: "Displayed in emails sent to customers."
If the save button is pressed and if this field is empty, the following error message is displayed: "field Shop email is required."

- Registration number

When the label is hovered, a tooltip is displayed: "Shop registration information (e.g. SIRET or RCS)."

- Shop address line 1

Input field for the first address line of the store.

- Shop address line 2

Input field for the second address line of the store.

- Zip/Postal code

Input field for the zip code.

- City

Input field for the city.

- Country

This is a drop-down with all the countries that are existing in the International > Location > Countries page.

- State

This is a drop-down with all the states associated with the country selected above and existing in International > Location > States page.

- Phone

Input field for the phone.

- Fax

Input field for the fax.

## Multistore

In a multistore context, the options listed above have [checkboxes](https://github.com/PrestaShop/PrestaShop/issues/19367) and [specific settings drop-down](https://github.com/PrestaShop/PrestaShop/issues/19319), take a look at the conditions and specs [here](../../../multistoregeneralspecs.md#checkboxes)
