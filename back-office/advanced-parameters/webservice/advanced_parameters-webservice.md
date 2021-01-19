# SPECIFICATIONS - ADVANCED PARAMETERS &gt; WEBSERVICE

The listing page is composed of the list of the webservice keys and the configuration section.

## The list of the webservice keys**

The list displays:

- Key (text);
- Key description (text);
- Status (yes or no). It can be edited from the list;

The bulk action can enable and disable the status of the selection or delete the selection. 

## Configuration

The configuration section is composed of 2 toggles:

- **Enable PrestaShop's webservice**: Toggle
When the toggle is disabled, the PrestaShop's webservice will be disabled for all the keys. The saved keys keep their current status even if they are enabled. 

_Help text_: 
Before activating the webservice, you must be sure to:
1. Check that URL rewriting is available on this server.
2. Check that the five methods GET, POST, PUT, DELETE, and HEAD are supported by this server.

- **Enable CGI mode for PHP**: Toggle

_Help text_: 
Before choosing "Yes", check that PHP is not configured as an Apache module on your server.

## Add new / Edit webservice key

The "Add new webservice key" or "Edit webservice key" buttons redirect the user to the webservice key creation form. The form is composed of:

- **Key***: A mandatory field limited to 32 characters long that has to be unique. The webservice key can't be saved if the key is already used by another webservice account.

_Help text_: "Webservice account key."

The user can fulfill the input or choose generated it by clicking the "Generate" button. Pressing the "Generate" button if a key is already entered will replace it with a new key generated.
Generated keys are most of the time safer because they are harder to guess.

- **Key description**: Text area

A reminder of who that key is for, and what it gives access to.

_Help text_: "Quick description of the key: who it is for, what permissions it has, etc."

- **Status**: Toggle (YES/NON)

The toggle enabled temporarily grant access to the data for anyone who has the right key.

On top of the table, an information notification is displayed: "Set the resource permissions for this key:".

- **Permissions**: A check table
the first axis is the resources and the second axis is the permission type.
The permission's type are View (GET), Modify (PUT), Add (POST), Delete (DELETE), and	Fast view (HEAD).
The resources are retrieved automatically.

The user can select an authorized access permission by selecting one resource and the authorized permission's type. 

The user can grant all the permission types for one resource by checking the checkbox "All". It will check automatically all the permission types.
The user can as well grant all resources for one permission type by clicking on the title of the column of the selected permission.


By clicking on the "Save" button if the key input is fulfilled, the information is saved and the user is redirected to the list.

The webservice key can't be saved if the key is already used by another key.

By clicking on the "Cancel" button, all the fulfilled information is aborted and the user is redirected to the list. 


### Multistore

The form adds the shop association mandatory field when the multistore is enabled.

- **Shop association**: 
All the group shop groups and their related shops are displayed in the checkbox choice tree. The user can choose by checking the checkbox on which shop or group of shops the key can give access to.

