---
title: Add / View stores
weight: 1
---

# View stores

In this interface, all the stores are listed in a handy list, giving every store's information as well as an indicator telling whether the store is currently active or not –  it's possible to for instance want to gather the information for a new store in advance, in order to have its page ready for the launch.

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

Close: After clicking on it, the modal is closed
Export to SQL Manager: After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

3. Export to SQL Manager

After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

## Columns

The page displays the features list with the following columns:

1. ID

It's possible to sort by id asc or desc and search by id.

2. Name

It's possible to sort by name asc or desc and search by name.

3. Address

It's possible to sort the addresses, they asc or desc.

4. City

It's possible to sort the cities to asc or desc by the city.

5. Zip/Postal code

It's possible to sort the ZIP code by asc or desc.

7. State

It's possiblre to sort the state list by asc or desc.

9. Country

It's possible to sort the countries list by asc or desc.

11. Phone

It's possible to list the phone numbers list by asc or desc.

13. Fax

It's possible to list the fax numbers list by asc or desc.

15. Enabled

When pressed, shows a drop-down, where selections are: 
 -
 Yes
 No
 
When selected either "yes" or "no", refreshes the list, and lists by the selection. When selected one of the options, additional button appears near the "search" button called "reset".
Pressing "reset" will remove the selected search option.

### Bulk actions

Clicking on the _Bulk actions_ button allows users to perform bulk actions for selected stores (using the checkboxes). A user can:

- Select all/Unselect all: this button will select/unselect all the checkboxes at the beginning of each row of the listing.
- Enable/Disable selection: this button will either enable or disable the selected shops.
When trying to press enable/disable selection without any checkboxes marked, will show the message: "You must select at least one item to perform a bulk action." If pressing enable/disable for selected stores, will show a green message: "The status has been successfully updated."
- Delete selected: This button will delete the selected shops. 
After clicking on "Delete selected", a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?" (See issue [#14462](https://github.com/PrestaShop/PrestaShop/issues/14462)). The action can be canceled by clicking on the cross or on the cancel button.
After clicking on "Delete" button, the selected shop is deleted, a successful message is displayed "The selection has been successfully deleted."

## Contact details

This section enables the option to give the main details of the company, rather than those of a specific shop.

The following fields are shown in this section:

1. Multistore selection (toggle for yes or no)
A message below the toggle option is shown: "Check / Uncheck all
You are editing this page for a specific shop or group. Click "Yes" to check all fields, "No" to uncheck all.
If you check a field, change its value, and save, the multistore behavior will not apply to this shop (or group), for this particular parameter."
When the toggle is switched to "no" - all fields below are not possible to edit, until the field is selected by a checkbox on the left.
When the toggle is switched to "yes" - all fields get automatically selected with the checkboxes, and are possible to edit.

Every field listed below has a checkbox possible on the left from the field.

 2. Shop name 

This field is mandatory, when hovered on the "Shop name" shows the message: "Displayed in emails and page titles."

 3. Shop email

This field is mandatory, when hovered on the "Shop email" shows the message: "Displayed in emails sent to customers."

 5. Registration number



 7. Shop address line 1



 9. Shop address line 2



 11. Zip/Postal code



 13. City



 15. Country



- State



 19. Phone



- Fax

## Multistore

In a multistore context, the options listed above have [checkboxes](https://github.com/PrestaShop/PrestaShop/issues/19367) and [specific settings drop-down](https://github.com/PrestaShop/PrestaShop/issues/19319), take a look at the conditions and specs [here](https://github.com/PrestaShop/prestashop-specs/blob/master/content/1.7/back-office/multistoregeneralspecs.md#checkboxes)
