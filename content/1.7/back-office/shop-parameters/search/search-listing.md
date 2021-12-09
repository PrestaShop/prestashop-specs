---
title: Search listing
weight: 1
---

# Search listing

The "Search" page allows configuring the shop's search features.

## Call to action
 
A call to actions is displayed in the header of this page:
 
  - Add new alias

👉 See the [specs of the add/edit alias]({{<ref "add-edit-alias.md">}} "Add/edit alias")

## Settings wheel

When clicking on the settings wheel, the following options are displayed:

1. Refresh list

After clicking on it, the page is reloaded. Sorts and searches are kept.

2. Import 

After clicking on it, the Advanced parameters > Import page is opened.

3. Show SQL query

After clicking on it, the SQL query is displayed in a modal. The SQL query takes into account filters and sorts that have been done.

There are two buttons:

- Close: After clicking on it, the modal is closed
- Export to SQL Manager: After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

4. Export to SQL Manager

After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

## Columns

 The page displays the aliases list with the following columns:

1. Aliases

Name of the aliases

2.  Search

Result of the alias 

3. Status

The alias can be enabled or disabled

4. Actions

- **Edit.** This is the main action and it can be performed by clicking on the line or on the button. 
👉 See the [specs of the add/edit alias]({{<ref "add-edit-alias.md">}} "Add/edit alias")

- **Delete.** The alias can be deleted by clicking on this button. After clicking on "Delete", a modal with the title "Delete selection" is opened asking to confirm or cancel the  action: "Are you sure you want to delete the selected item(s)?"
  The action can be canceled by clicking on the cross or on the cancel button.
After clicking on "Delete" button, the alias is deleted and a successful message is displayed "Successful deletion."

 ## Bulk actions
 
The Bulk actions button is enabled only if at least one row of the list is selected.

Clicking on the _Bulk actions_ button allows users to perform bulk actions for selected aliases (using the checkboxes). A user can:

- Select all/Unselect all: this button will select/unselect all the checkboxes at the beginning of each row of the listing.
- Enable selection. If an alias is selected, and "enable selection" is pressed, the selected alias is enabled, the status is changed to a green checkmark and a successful message is displayed: "The status has been successfully updated." 
- Disable selection. If an alias is selected, and "disable selection" is pressed, the selected alias is disabled, the status is changed to a red cross and a successful message is displayed: "The status has been successfully updated."
- Delete selected: This button will delete the selected alias. 
After clicking on "Delete selected", a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?" (See issue [#14462](https://github.com/PrestaShop/PrestaShop/issues/14462)). The action can be canceled by clicking on the cross or on the cancel button.
After clicking on "Delete" button, the selected aliases are deleted, a successful message is displayed "The selection has been successfully deleted."

 ## Search
 
The search button is disabled as long as there are less than 2 aliases in the list. 

A search can be done by aliases, search, and status (drop-down menu).
It's possible to sort the list by aliases or by search in an ascending or descending way.
After clicking on "search", the "search" button is disabled and a "reset" button is displayed.
If there is no results for the search done, the following message is displayed: "No records found".
When clicking on "reset", the search is removed and all the results are displayed.

## Multistore

While creating or editing an alias, it's added or edited for all shops (no matter the context selected). So, the list displays all the aliases, no matter the context selected.
👉 See the [specs]({{<ref "../../../broader-topics/multistorespecialsspecs.md#list-of-pages-for-specific-case-2-add-new-pages-without-shop-association-block">}})

  # Indexing
 
This section provides information on the number of products that can be searched through the shop's search bar of the front office, and compares it to the number of products present in the catalog.

Firstly, an explanation is displayed: "The "indexed" products have been analyzed by PrestaShop and will appear in the results of a front office search."
The number of products indexed and the number of products in the shop is displayed: "Indexed products 18 / 18." (the number depends on the products which are indexed and which are in the shop).

Below, the following message is displayed: "Building the product index may take a few minutes. If your server stops before the process ends, you can resume the indexing by clicking "Add missing products to the index"."

Below there are 2 links that performs the following actions when clicked:
 - "Add missing products to the index" : only the new products will be indexed. After clicking on it, the page is refreshed, and the following message is displayed: "Successful update."
 - "Re-build the entire index": when clicking on it, all the products are indexed (and not only the missing ones compared to the previous link)

Below, the following message is displayed : "You can set a cron job that will rebuild your index using the following URL:" 

A link to the AdminSearch controller is displayed: "http://localhost/presta1781/admin/index.php?controller=AdminSearch&action=searchCron&ajax=1&full=1&token=yruOjDwR&id_shop=1" (the link depends on the shop domain name and admin folder's name)

Below, a toggle "Indexing" allows to enable or disable the automatic indexing of the products.

The following help text is displayed under the toggle: "Enable the automatic indexing of products. By default the toggle is enabled. If you enable this feature, the products will be indexed in the search automatically when they are saved. If the feature is disabled, you will have to index products manually by using the links provided in the field set."

## Multistore

In a multistore context, the options listed above have [checkboxes](https://github.com/PrestaShop/PrestaShop/issues/19369) and [specific settings drop-down](https://github.com/PrestaShop/PrestaShop/issues/19321), take a look at the conditions and specs [here]({{<ref "../../multistoregeneralspecs.md#checkboxes">}} "checkboxes") 

 # Search
 
Firstly, an information message is displayed: "We are thrilled to introduce you to the fuzzy search, one of the new features from 1.7.7! Please note that it is still in beta version, so feel free to share improvement ideas on GitHub to have it enhanced."
Below there are 2 links:

 - [Signaler un problème sur GitHub](https://github.com/PrestaShop/PrestaShop/issues/new/choose)

 - [Proposer une idée d'amélioration sur GitHub](https://github.com/PrestaShop/PrestaShop/issues/new/choose)

Below, the following toggle and fields are displayed:

  - **Search within word**: This toggle can be enabled or disabled. By default, the toggle is disabled. 
 The following help text is displayed under the toggle: "By default, to search for “blouse”, you have to enter “blous”, “blo”, etc (beginning of the word) – but not “lous” (within the word). With this option enabled, it also gives the good result if you search for “lous”, “ouse”, or anything contained in the word.".  
The following tooltip is displayed: "Enable search within a whole word, rather than from its beginning only. By default the toggle is set to "No". It checks if the searched term is contained in the indexed word. This may be resource-consuming."

 - **Search exact end match**: This toggle can be enabled or disabled. By default, the toggle is disabled. 
The following help text is displayed below: "By default, if you search "book", you will have "book", "bookcase" and "bookend". With this option enabled, it only gives one result “book”, as exact end of the indexed word is matching." 
The following tooltip is displayed: "Enable more precise search with the end of the word. It checks if the searched term is the exact end of the indexed word."

 - **Fuzzy search**: This toggle, can be enabled or disabled. By default, this toggle is enabled. 
A help text is displayed below: "By default, the fuzzy search is enabled. It means spelling errors are allowed, e.g. you can search for "bird" with words like "burd", "bard" or "beerd". Disabling this option will require exact spelling for the search to match results."   
The following tooltip is displayed: "Enable approximate string matching".

 - **Maximum approximate words allowed by fuzzy search**: This is the limitation for how many words the "fuzzy search" can handle. 
Only numbers can be entered in this field. When trying to input characters that are not numbers and when saving, the following error message is displayed: "The Maximum approximate words allowed by fuzzy search field is invalid."
The following tooltip is displayed: "Note that this option is resource-consuming: the more you search, the longer it takes."

  - **Maximum word length (in characters)**: This field is mandatory and allows to define how many characters are allowed to run a fuzzy search query. 
 When trying to save and if the field is empty, the following error message is displayed: "field Maximum word length (in characters) is required." 
Only numbers can be entered in this field. When trying to input characters that are not numbers and when saving, the following error message is displayed: "The Maximum word length (in characters) field is invalid."
A help text is displayed below the field: "This parameter will only be used if the fuzzy search is activated: the lower the value, the more tolerant the search will be.".
Also, a tooltip is displayed: "Only words fewer or equal to this maximum length will be searched."

 - **Minimum word length (in characters)**: It is possible to choose the minimum size at which a word may be registered in the search index. 
Only numbers can be entered in this field. When trying to input characters that are not numbers and when saving, the following error message is displayed: "The Minimum word length (in characters) field is invalid." 
Also, a tooltip is displayed: "Only words this size or larger will be indexed."

 - **Blacklisted words**: It allows choosing the terms that must not be found by the shop visitors. 
A tooltip is displayed: "Please enter the index words separated by a".
This field can be translated: When several languages are installed, a drop-down next to the field is displayed. It allows choosing in which language the field is displayed and customizing it according to the language. Disabled languages are displayed in the drop-down. There is no drop-down button when only one language is defined.
The default value of this field is: "a|about|above|after|again|against|all|am|an|and|any|are|aren|as|at|be|because|been|before|being|below|between|both|but|by|can|cannot|could|couldn|did|didn|do|does|doesn|doing|don|down|during|each|few|for|from|further|had|hadn|has|hasn|have|haven|having|he|ll|her|here|hers|herself|him|himself|his|how|ve|if|in|into|is|isn|it|its|itself|let|me|more|most|mustn|my|myself|no|nor|not|of|off|on|once|only|or|other|ought|our|ours|ourselves|out|over|own|same|shan|she|should|shouldn|so|some|such|than|that|the|their|theirs|them|themselves|then|there|these|they|re|this|those|through|to|too|under|until|up|very|was|wasn|we|were|weren|what|when|where|which|while|who|whom|why|with|won|would|wouldn|you|your|yours|yourself|yourselves"

## Multistore

In a multistore context, the options listed above have [checkboxes](https://github.com/PrestaShop/PrestaShop/issues/19369) and [specific settings drop-down](https://github.com/PrestaShop/PrestaShop/issues/19321), take a look at the conditions and specs [here]({{<ref "../../multistoregeneralspecs.md#checkboxes">}} "checkboxes") 

 # Weight
 
 PrestaShop enables to prioritize certain data when a search is performed on the shop.
 
 The following information is displayed in this section:
 
 "The "weight" represents its importance and relevance for the ranking of the products when completing a new search."
"A word with a weight of eight will have four times more value than a word with a weight of two."

"We advise you to set a greater weight for words which appear in the name or reference of a product. This will allow the search results to be as precise and relevant as possible."

"Setting a weight to 0 will exclude that field from search index. Re-build of the entire index is required when changing to or from 0."

The following fields are displayed:

 - Product name weight: The default value for this field is 6
 - Reference weight: The default value for this field is 10
 - Short description weight: The default value for this field is 1
 - Description weight: The default value for this field is 1
 - Category weight: The default value for this field is 3
 - Brand weight: The default value for this field is 3
 - Tags weight: The default value for this field is 4
 - Attributes weight: The default value for this field is 2
 - Features weight: The default value for this field is 2

Only numbers can be entered in this field. When entering characters that are not numbers and when saving, the following error message is displayed: "The _name of the field_ field is invalid."

## Multistore
 
 In a multistore context, the options listed above have [checkboxes](https://github.com/PrestaShop/PrestaShop/issues/19369) and [specific settings drop-down](https://github.com/PrestaShop/PrestaShop/issues/19321), take a look at the conditions and specs [here]({{<ref "../../multistoregeneralspecs.md#checkboxes">}} "checkboxes") 
  
