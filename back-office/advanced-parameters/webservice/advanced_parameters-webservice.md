# SPECIFICATIONS - ADVANCED PARAMETERS &gt; WEBSERVICE

The listing page is composed of the list of the webservice keys and the configuration section.


## Webservice

### Add new webservice

A button "Add new webservice" allows to create a new webservice key and redirects to the add page.

### Information message

An information message is displayed: "It is preferable to use SSL (https:) for webservice calls, as it avoids the "man in the middle" type security issues."

### Settings wheel

Three tables options are displayed as icons on the top-right hand corner of the listing: 

- Refresh list<br>
- Show SQL query<br>
- Export to SQL manager<br>

### Bulk action

A checkbox allows to select all / unselect all keys.

There are 3 options in the bulk-action drop-down:
- Enable selection
- Disable selection
- Delete selected

### Lisitng

The list displays:

- Checkboxes (for bulk actions);
- Key (text);
- Key description (text);
- Enabled (yes or no). It can be edited from the list;
- Actions

To allow users to narrow down their search, searching and/or sorting options are available according to the columns:

- Input searching fields are available for the 'Key' and 'Key description' columns;
- A drop-down selector with 2 _Yes_ and _No_ options is available for 'Enabled' column;
- Sorting by ascending and descending order components are available for the 'Key' and 'Enabled' columns.

The main action is _Edit_ and it can be performed by clicking on the line.
The second action is _Delete_

#### Multistore

Only the keys created in the selected store or store group (through the context) are displayed.

For example, let's say I have the following configuration:
- Group 1
  - Shop A
  - Shop B
- Group 2
  - Shop C

If I select group 1 as context, then the keys created in Shop A and Shop B will be displayed.

If I select Shop A as context, then the keys created in Shop A will be displayed.

If I select all shops as context, then the keys created in Shop A, Shop B and Shop C will be displayed.

## Configuration

The configuration section is composed of 2 toggles:

- **Enable PrestaShop's webservice**: Toggle
When the toggle is disabled, the PrestaShop's webservice will disable for all the keys. The saved keys keep their current status even if they are enabled. 

_Help text_: 
Before activating the webservice, you must be sure to:
1. Check that URL rewriting is available on this server.
2. Check that the five methods GET, POST, PUT, DELETE, and HEAD are supported by this server.

- **Enable CGI mode for PHP**: Toggle

_Help text_: 
Before choosing "Yes", check that PHP is not configured as an Apache module on your server.

A 'Save' button is available at the end of the page. When saving, the user is supposed to stay on this page and see a success notification: `Update successful` in `Admin.Notifications.Success`.

### Multistore behavior

In a specific shop context or in a group context, the options listed above should have [checkboxes](https://github.com/PrestaShop/PrestaShop/issues/19359) 

In an all shops context, the options listed above should have [specific settings drop-down](https://github.com/PrestaShop/PrestaShop/issues/19312)

:point_right: https://github.com/PrestaShop/prestashop-specs/blob/master/back-office/multistoregeneralspecs.md

## Add new / Edit webservice key

The "Add new webservice key" or "Edit webservice key" buttons redirect the user to the webservice key creation form. The form is composed of:

- **Key***: A mandatory field limited to 32 characters long that has to be unique. The webservice key can't be saved if the key is already used by another webservice account.

_Help text_: "Webservice account key."

The user can fulfill the input or choose to generate it by clicking the "Generate" button. Pressing the "Generate" button if a key is already entered will replace it with a new key generated.
Most of the time, generating keys is safer because it is harder to guess.

- **Key description**: Text area

A reminder of who that key is for, and what it gives access to.

_Help text_: "Quick description of the key: who it is for, what permissions it has, etc."

- **Status**: Toggle (YES/NON)

The toggle enabled temporarily grant access to the data for anyone who has the right key.

On top of the table, an information notification is displayed: "Set the resource permissions for this key:".

- **Permissions**: A check table
the first axis is the resources and the second axis is the permission type.
The permission types are View (GET), Modify (PUT), Add (POST), Delete (DELETE), and	Fast view (HEAD).
The resources are retrieved automatically.

The user can select an authorized access permission by selecting one resource and the authorized permission type. 

The user can grant all the permission types for one resource by checking the checkbox "All". It will check automatically all the permission types.
The user can as well grant all resources for one permission type by clicking on the title of the column of the selected permission.


By clicking on the "Save" button if the key input is fulfilled, the information is saved and the user is redirected to the list. It displays a success notification: `Update successful` in `Admin.Notifications.Success`.

The webservice key can't be saved if the key is already used by another key. Users stays on the form and an error notification is displayed: `This key already exists.` in `Admin.Advparameters.Notification`.

By clicking on the "Cancel" button, all the fulfilled information is aborted and the user is redirected to the list. 


### Multistore behavior

**Shop association block**

The shop association block is displayed when you add or edit something.
The shop association block displays all groups and all shops.
Checkboxes allow to select / unselect groups and shops.
It's possible to expand / collapse the wall tree and expand / collapse each group
If you select / unselect a group, all shops of this group are selected / unselected

The shop association block allows to choose for which store(s) you want to associate or disassocate the current webservice key.

When you add a webservice key, the shop(s) selected in the context are automatically checked in the shop association block.
But it's possible to select / uncelect shops, no matter the context selected.

When you edit a webservice key, you can unselect shop(s) previously selected and therefore disassocate it from these shops.
And you can also, select shop(s) not previously selected and therefore associate it with these shops.

Selecting at least a shop is mandatory, if the merchant unselect all the checkboxes (all the shops), then an error message in red is displayed below the shop association block to inform of the obligation to have at least one shop checked: "You have to select at least one shop to associate this item with" + the save button is disabled. only from 1.7.8

:point_right: https://github.com/PrestaShop/prestashop-specs/blob/master/back-office/multistoregeneralspecs.md#shop-association-block

