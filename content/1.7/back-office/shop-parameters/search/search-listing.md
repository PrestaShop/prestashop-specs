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

1. Add new

After clicking it, redirects to the page for adding a new alias.

2. Refresh list

After clicking on it, the page is reloaded. Sorts and searches are kept.

3. Import 

After clicking it, redirects to advanced parameters > Import for importing files.

4. Show SQL query

After clicking on it, the SQL query is displayed in a modal. The SQL query takes into account filters and sorts that have been done.

There are two buttons:

- Close: After clicking on it, the modal is closed
- Export to SQL Manager: After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

5. Export to SQL Manager

After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

## Columns

 The page displays the aliases list with the following columns:

1. Aliases

Name of the aliases

2.  Search

Result of the alias 

3. Status

Checkmark if the alias is enabled or disabled

5. Actions

- **Edit.** This is the main action and it can be performed by clicking on the line or on the button. 
👉 See the [specs of the add/edit alias](./add-edit-alias.md) 

- **Delete.** The alias can be deleted by clicking on this button. After clicking on "Delete", a modal with the title "Delete selection" is opened asking to confirm or cancel the  action: "Are you sure you want to delete the selected item(s)?"
  The action can be canceled by clicking on the cross or on the cancel button.
  After clicking on "Delete" button, the tag is deleted and a successful message is displayed "Successful deletion."
  
 ## Bulk actions

Clicking on the _Bulk actions_ button allows users to perform bulk actions for selected feature values (using the checkboxes). A user can:

- Select all/Unselect all: this button will select/unselect all the checkboxes at the beginning of each row of the listing.
- Enable selection. Enables the selected alias, changes the status to green check mark. If no alias is selected when pressing "enable selection" the message is shown: "You must select at least one item to perform a bulk action." If an alias is selected, and "enable" is pressed, the message is shown: "The status has been successfully updated." and check mark is changed to a green one.
- Disable selection. Disables the selected alias, changes the status to red cross mark. If no alias is selected when pressing "disable selection" the message is shown: "You must select at least one item to perform a bulk action." If an alias is selected, and "disable selection" is pressed, the message is shown: "The status has been successfully updated." and check mark is changed to a red cross.
- Delete selected: This button will delete the selected alias. 
After clicking on "Delete selected", a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?" (See issue [#14462](https://github.com/PrestaShop/PrestaShop/issues/14462)). The action can be canceled by clicking on the cross or on the cancel button.
After clicking on "Delete" button, the selected feature values are deleted, a successful message is displayed "The selection has been successfully deleted."

 ## Search
 
The search button is disabled as long as there are less than 2 aliases in the list. A search can be done by aliases, search, and status (drop-down menu).
It's possible to sort the list by aliases, search in an ascending or descending way.
After clicking on "search", the "search" button is disabled and a "reset" button is displayed.
If there is no results for the search done, the following message is displayed: "No records found".
When clicking on "reset", the search is removed and all the results are displayed.

  # Indexing
 
This section provides information on the number of products that can be searched through the shop's search bar of the front office, and compares it to the number of products present in the catalog.

Firstly, an explanation is displayed: "The "indexed" products have been analyzed by PrestaShop and will appear in the results of a front office search."
The number of products indexed and the number of products in the shop is displayed: "Indexed products 18 / 18." (the number depends on the products which are indexed and which are in the shop).

Below, the following message is displayed: "Building the product index may take a few minutes. If your server stops before the process ends, you can resume the indexing by clicking "Add missing products to the index"."

Below there are 2 links that performs the following actions when clicked:
  -"Add missing products to the index" : only the new products will be indexed. After clicking on it, the page is refreshed, and the following message is displayed: "Successful  update."
 -Re-build the entire index - the "Re-build entire index", when clicking on it: all the products are indexed and not only the missing ones compared to the previous link
Below, the following message is displayed : "You can set a cron job that will rebuild your index using the following URL:" 

A link to the AdminSearch controller is displayed: "http://localhost/presta1781/admin/index.php?controller=AdminSearch&action=searchCron&ajax=1&full=1&token=yruOjDwR&id_shop=1" (the link depends on the shop domain name and admin folder's name)
Below, a toggle "Indexing" allows to enable or disable the automatic indexing of products.
The following help text is displayed: "Enable the automatic indexing of products. If you enable this feature, the products will be indexed in the search automatically when they are saved. If the feature is disabled, you will have to index products manually by using the links provided in the field set."
By default the toggle is set to "yes".

 # Search
 
Firstly, an information message is displayed: "We are thrilled to introduce you to the fuzzy search, one of the new features from 1.7.7! Please note that it is still in beta version, so feel free to share improvement ideas on GitHub to have it enhanced."
Below there are 2 links:
 - [Signaler un problème sur GitHub](https://github.com/PrestaShop/PrestaShop/issues/new/choose)
 - [Proposer une idée d'amélioration sur GitHub](https://github.com/PrestaShop/PrestaShop/issues/new/choose)
Below, the following toggle and fields are displayed:
  - "Search within word" : This toggle, can be enabled or disabled. The following help text is displayed: "By default, to search for “blouse”, you have to enter “blous”, “blo”, etc (beginning of the word) – but not “lous” (within the word). With this option enabled, it also gives the good result if you search for “lous”, “ouse”, or anything contained in the word.". 
The following tooltip is displayed: "Enable search within a whole word, rather than from its beginning only. It checks if the searched term is contained in the indexed word. This may be resource-consuming."
By default the toggle is set to "No".
 - "Search exact end match" toggle switch, can be turned to "yes" or "no". Has an explanation below: "By default, if you search "book", you will have "book", "bookcase" and "bookend". With this option enabled, it only gives one result “book”, as exact end of the indexed word is matching." 
The following tooltip is displayed: "Enable more precise search with the end of the word. It checks if the searched term is the exact end of the indexed word."
By default the toggle is set to "No".
 - "Fuzzy search": This toggle, can be enabled or disabled. Has an explanation below: "By default, the fuzzy search is enabled. It means spelling errors are allowed, e.g. you can search for "bird" with words like "burd", "bard" or "beerd". Disabling this option will require exact spelling for the search to match results." 
The following tooltip is displayed: "Enable approximate string matching".
By default this toggle is set to "Yes".
 - "Maximum approximate words allowed by fuzzy search". This is the limitation for how many words the "fuzzy search" can handle. Only numbers can be entered in this field. When trying to input anything that is not numbers, will show the message: "The Maximum approximate words allowed by fuzzy search field is invalid."
The following tooltip is displayed: "Note that this option is resource-consuming: the more you search, the longer it takes."
 - "Maximum word length (in characters)". This option defines how many characters you allow to run a fuzzy search query. This field is mandatory, when trying to fill it out when it is not filled out, shows the message: "field Maximum word length (in characters) is required." The field also can be filled only with characters, if any other symbol will be entered, when trying to save, will show the message: "The Maximum word length (in characters) field is invalid."
An explanation below is shown: "This parameter will only be used if the fuzzy search is activated: the lower the value, the more tolerant your search will be.".
Also a tooltip is displayed: "Only words fewer or equal to this maximum length will be searched."
 - "Minimum word length (in characters)". It is possible to choose the minimum size at which a word may be registered in the search index and found the customers. Field only accepts characters, if any other symbol is input, when trying to save, shows the following message: "The Minimum word length (in characters) field is invalid." 
Also has a tooltip: "Only words this size or larger will be indexed."
 - "Blacklisted words". It allows to choose the terms that must not be found by the shop visitors. Has a tooltip: "Please enter the index words seperated by a".
The field is multilanguage, can be translated to the needed languages which are in the shpo with a drop field on the right of the field.
By default this field has input in the field the following: "a|about|above|after|again|against|all|am|an|and|any|are|aren|as|at|be|because|been|before|being|below|between|both|but|by|can|cannot|could|couldn|did|didn|do|does|doesn|doing|don|down|during|each|few|for|from|further|had|hadn|has|hasn|have|haven|having|he|ll|her|here|hers|herself|him|himself|his|how|ve|if|in|into|is|isn|it|its|itself|let|me|more|most|mustn|my|myself|no|nor|not|of|off|on|once|only|or|other|ought|our|ours|ourselves|out|over|own|same|shan|she|should|shouldn|so|some|such|than|that|the|their|theirs|them|themselves|then|there|these|they|re|this|those|through|to|too|under|until|up|very|was|wasn|we|were|weren|what|when|where|which|while|who|whom|why|with|won|would|wouldn|you|your|yours|yourself|yourselves"

 # Weight
 
 PrestaShop enables to prioritize certain data when a search is performed on the shop.
 
 The following information is presented in this section:
 
 "The "weight" represents its importance and relevance for the ranking of the products when completing a new search.
A word with a weight of eight will have four times more value than a word with a weight of two.

We advise you to set a greater weight for words which appear in the name or reference of a product. This will allow the search results to be as precise and relevant as possible.

Setting a weight to 0 will exclude that field from search index. Re-build of the entire index is required when changing to or from 0.

First thing presented is a multistore toggle which can be turned "off" or "on".

Has an explanation below:
"Check / Uncheck all
You are editing this page for a specific shop or group. Click "Yes" to check all fields, "No" to uncheck all.
If you check a field, change its value, and save, the multistore behavior will not apply to this shop (or group), for this particular parameter."

Below these are the fields that are presented:

 - Product name weight
 - Reference weight
 - Short description weight
 - Description weight
 - Category weight
 - Brand weight
 - Tags weight
 - Attributes weight
 - Features weight

All these fields can only be filled with numbers, if any other character will be input, when trying to save it will show: "The Product name weight field is invalid."

 # Multistore
 
 When multistore is enabled, almost every field/toggle in the indexing/search/weight sections gets a checkbox on the left of the field. If the checkbox is not marked near the wanted field, it is unavailable for editing.
 
 By default Indexing and search has toggle switch for multistore which is set to "no".
 
 If the multistore toggle switch is set to "yes", then the toggle below "Indexing" is set to "yes", and the checkbox gets filled.
 
 Multistore toggle can be set to "no", if so, it's possible to enable only several wanted toggles by checking the checkboxes.
