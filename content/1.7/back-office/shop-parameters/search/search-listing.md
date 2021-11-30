---
title: Search listing
weight: 1
---

# Search listing

The "Search" page allows configuring the shop's search features.

## Call to action
 
A call to actions is displayed in the header of this page:
 
  - Add new alias

👉 See the [specs of the add/edit alias](./add-edit-alias.md) 

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

 The page displays the aliases list with the following columns:

1. Aliases

Name of the aliases

2.  Search

Result of the alias 

3. Status

The alias can be enabled or disabled

5. Actions

- **Edit.** This is the main action and it can be performed by clicking on the line or on the button. 
👉 See the [specs of the add/edit alias](./add-edit-alias.md) 

- **Delete.** The alias can be deleted by clicking on this button. After clicking on "Delete", a modal with the title "Delete selection" is opened asking to confirm or cancel the  action: "Are you sure you want to delete the selected item(s)?"
  The action can be canceled by clicking on the cross or on the cancel button.
  After clicking on "Delete" button, the alias is deleted and a successful message is displayed "Successful deletion."
  
 ## Bulk actions

Clicking on the _Bulk actions_ button allows users to perform bulk actions for selected aliases (using the checkboxes). A user can:

- Select all/Unselect all: this button will select/unselect all the checkboxes at the beginning of each row of the listing.
- Enable selection. Enables the selected alias, changes the status to a green check mark. If no alias is selected when pressing "enable selection" the message is shown: "You must select at least one item to perform a bulk action." If an alias is selected, and "enable" is pressed, the message is shown: "The status has been successfully updated." and the check mark is changed to a green one.
- Disable selection. Disables the selected alias, changes the status to a red cross mark. If no alias is selected when pressing "disable selection" the message is shown: "You must select at least one item to perform a bulk action." If an alias is selected, and "disable selection" is pressed, the message is shown: "The status has been successfully updated." and the check mark is changed to a red cross.
- Delete selected: This button will delete the selected alias. 
After clicking on "Delete selected", a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?" (See issue [#14462](https://github.com/PrestaShop/PrestaShop/issues/14462)). The action can be canceled by clicking on the cross or on the cancel button.
After clicking on "Delete" button, the selected aliases are deleted, a successful message is displayed "The selection has been successfully deleted."

 ## Search
 
The search button is disabled as long as there are less than 2 alias  in the list. A search can be done by aliases, search, and status.
It's possible to sort the list by aliases, search in an ascending or descending way.
After clicking on "search", the "search" button is disabled and a "reset" button is displayed.
If there is no results for the search done, the following message is displayed: "No records found".
When clicking on "reset", the search is removed and all the results are displayed.

 ## Indexing
 
This section provides information on the number of products that can be searched through shop's search function, and compares it to the number of products present in the catalog.

Firstly an explanation is shown: "The "indexed" products have been analyzed by PrestaShop and will appear in the results of a front office search.
Indexed products 18 / 18." (the number depends on the products which are in the shop, and are indexed).
Below folows: "Building the product index may take a few minutes. If your server stops before the process ends, you can resume the indexing by clicking "Add missing products to the index"."
Below there are 2 links that when pressed performs the following actions:
 -Add missing products to the index - only the new products will be indexed. Also when pressed, the page will be refreshed, and a message shown: "Successful update."
 -Re-build the entire index - the "Re-build entire index" process takes more time, but it is more thorough.
Below it is written: You can set a cron job that will rebuild your index using the following URL: (a full link of the shop and the directory you are in is shown)
Currently used shop URL which is shown: " http://localhost/presta1781/admin040gp2f9r/index.php?controller=AdminSearch&action=searchCron&ajax=1&full=1&token=yruOjDwR&id_shop=1"
Below there is a toggle switch for indexing, can be turned "on" or "off". Has an explanation for it: "Enable the automatic indexing of products. If you enable this feature, the products will be indexed in the search automatically when they are saved. If the feature is disabled, you will have to index products manually by using the links provided in the field set."

 ## Search
 
Firsly a message is presented: "We are thrilled to introduce you to the fuzzy search, one of the new features from 1.7.7! Please note that it is still in beta version, so feel free to share improvement ideas on GitHub to have it enhanced."
Below there are 2 links:
 - [Signaler un problème sur GitHub](https://github.com/PrestaShop/PrestaShop/issues/new/choose)
 - [Proposer une idée d'amélioration sur GitHub](https://github.com/PrestaShop/PrestaShop/issues/new/choose)
Below are the following:
 - "Search within word" toggle switch, can be turned to "yes" or "no". Has an explanation below: "By default, to search for “blouse”, you have to enter “blous”, “blo”, etc (beginning of the word) – but not “lous” (within the word). With this option enabled, it also gives the good result if you search for “lous”, “ouse”, or anything contained in the word.". When hovered on the field, a message is shown: "Enable search within a whole word, rather than from its beginning only. It checks if the searched term is contained in the indexed word. This may be resource-consuming.
 - "Search exact end match" toggle switch, can be turned to "yes" or "no". Has an explanation below: "By default, if you search "book", you will have "book", "bookcase" and "bookend". With this option enabled, it only gives one result “book”, as exact end of the indexed word is matching." When hovered on the field, a message is shown: "Enable more precise search with the end of the word. It checks if the searched term is the exact end of the indexed word."
 - "Fuzzy search" toggle switch, can be turned to "yes" or "no". Has an explanation below: "By default, the fuzzy search is enabled. It means spelling errors are allowed, e.g. you can search for "bird" with words like "burd", "bard" or "beerd". Disabling this option will require exact spelling for the search to match results." When hovered on the field, a message is shown: "Enable approximate string matching".


