---
title: SQL Manager
weight: 1
---

# SPECIFICATIONS - ADVANCED PARAMETERS &gt; DATABASE &gt; SQL MANAGER

The SQL manager is a complex feature, which should be reserved for technical people who know how to explore a database using the SQL language. In return for this complexity, it can be extremely powerful and proves immensely useful to those who master it.

## 1.7.8.x version 

The page is going to be migrated into a module. The type of module is still to be defined, the most likely solution seems to be a not installed module.
The module will be downloadable for users who need it and have the required skills.
The feature to hide the password or the secure key into '************' when the password is in the query results will be removed since we can't fully hide them since with an alias the keys or passwords can be displayed.

## 1.7.7.x version

SQL Manager is a feature that allows users with technical skills to create and handle SQL queries.

For instance, using this tool allows the user to create a reusable query giving an updated list of the clients who are subscribed to your newsletter or get a list of products in HTML or CSV format.

For security reasons, some types of queries are not allowed: UPDATE, DELETE, CREATE TABLE, DROP, etc. In short, you can only read data (SELECT query).

At first, the SQL Manager page displays 2 messages:
- Information notification:

  "How do I create a new SQL query?
    - Click "Add new SQL query".
    - Fill in the fields and click "Save".
    - You can then view the query results by clicking on the Edit action in the dropdown menu
    - You can also export the query results as a CSV file by clicking on the Export button
"

- Warning notification:

"When saving the query, only the "SELECT" SQL statement is allowed."

### SQL Manager

#### Settings wheel

When clicking on it, three options are displayed:

1) Refresh list

After clicking on it, the page is reloaded. Sorts and searches are kept.

2) Show SQL query

After clicking on it, the SQL query is displayed in a modal. The SQL query takes into account filters and sorts that have been done.

There are two buttons:

- Close: After clicking on it, the modal is closed
- Export to SQL Manager: After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

3) Export to SQL Manager

After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

#### Bulk actions

Clicking on the _Bulk actions_ button allows users to perform bulk actions for selected SQL queries (using the checkboxes), or query - the button is clickable starting from one selected item. A user can:

- Select all/Unselect all: this button will select/unselect all the checkboxes beginning each row of the listing.
- Delete selected: This button will delete the selected sql queries. 
After clicking on "Delete selected", a modal with title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?" (See issue [#14462](https://github.com/PrestaShop/PrestaShop/issues/14462))

The action can be canceled by clicking on the cross or on the cancel button.

After clicking on "Delete" button, the selected webservice keys are deleted, a successful message is displayed "The selection has been successfully deleted."

#### Columns

The page displays the SQL Manager list with the following columns:

1) ID

It's possible to sort by id asc or desc and search by id.

2) SQL query name

It's possible to sort by SQL query name asc or desc and search by SQL query name.

3) SQL query 

It's possible to sort by SQL query asc or desc and search by SQL query.

4) Actions 

- Export. Executes the query, and downloaded the result in CSV format.
- View. Executes the query, and get the results displayed in an HTML table, right within the PrestaShop interface. This is the main action and it can be performed by clicking on the line.
When the user views the SQL request with no result, an information message is displayed: "This SQL query has no result."
- Edit. The user can edit a query as often as necessary, to refine it and get better results.
- Delete. Once a query is not used anymore (or simply because it does not work), you can delete it by clicking this button and confirming your choice.
After clicking on _Delete_, a modal with title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?" 

The action can be canceled by clicking on the cross or on the cancel button.

After clicking on "Delete" button, the message is deleted and a successful message is displayed "Successful deletion."

#### Multistore behavior

By default, a SQL query affects all shops. Since it can't be associated with any specific shop, all the SQL queries listed on this page are used in an all shops context.

### Settings

Select your default file encoding. You can configure the character encoding of the downloaded CSV file. The default, UTF-8, is recommended, but you can select ISO-8859-1 if need be through the drop-down.

#### Multistore behavior

In a specific shop context or in a group context, the "default file encoding" doesn't have checkbox and is disabled with an information message displayed when the user hovers the drop-down: "You can modify this parameter in all shops context only. Switch context to enable it." (see issue [#19356](https://github.com/PrestaShop/PrestaShop/issues/19356))

In an all shops context, the the "default file encoding" doesn't have specific settings drop-down.

:point_right: [Multistore specials cases: fields without checkboxes](../../../broader-topics/multistorespecialsspecs.md#list-of-pages--fields-for-specific-case-4-if-a-group-or-a-specific-shop-is-selected-some-fields-are-disabled-and-dont-have-checkboxes-allowing-to-enable-them)

### Add new SQL query

Creating a new query is divided into 3 sections: 

- The SQL form has 2 following input fields:

    - SQL query name. Users can type whatever name they need, there is no limitation in the number or the characters allowed.
    - SQL query. The SQL query itself. There is no restrictions on use of JOINs or other intricate selections (except for the unauthorized request types).

The cancel button redirects the user to the SQL Manager list without saving any information.
 
The save button saves the SQL query name, the SQL query, and redirects the user to the list adding the new SQL query saved with the success alert: "SQL query was successfully saved."

If the user saves a request that has not the authorized query type (defined in the list below), an error is displayed: "Error: only SELECT type queries are authorized.", the query is not saved and the user stays on the page with the error displayed.

The list of unauthorized request types:
'DELETE', 'ALTER', 'INSERT', 'REPLACE', 'CREATE', 'TRUNCATE', 'OPTIMIZE', 'GRANT', 'REVOKE', 'SHOW', 'HANDLER',
'LOAD', 'ROLLBACK', 'SAVEPOINT', 'UNLOCK', 'INSTALL', 'UNINSTALL', 'ANALZYE', 'BACKUP', 'CHECK', 'CHECKSUM', 'REPAIR', 'RESTORE', 'CACHE',
'DESCRIBE', 'EXPLAIN', 'USE', 'HELP', 'SET', 'DUPLICATE', 'VALUES', 'INTO', 'RENAME', 'CALL', 'PROCEDURE', 'FUNCTION', 'DATABASE', 'SERVER',
'LOGFILE', 'DEFINER', 'RETURNS', 'EVENT', 'TABLESPACE', 'VIEW', 'TRIGGER', 'DATA', 'DO', 'PASSWORD', 'USER', 'PLUGIN', 'FLUSH', 'KILL',
'RESET', 'START', 'STOP', 'PURGE', 'EXECUTE', 'PREPARE', 'DEALLOCATE', 'LOCK', 'USING', 'DROP', 'FOR', 'UPDATE', 'BEGIN', 'BY', 'ALL', 'SHARE',
'MODE', 'TO', 'KEY', 'DISTINCTROW', 'DISTINCT', 'HIGH_PRIORITY', 'LOW_PRIORITY', 'DELAYED', 'IGNORE', 'FORCE', 'STRAIGHT_JOIN',
'SQL_SMALL_RESULT', 'SQL_BIG_RESULT', 'QUICK', 'SQL_BUFFER_RESULT', 'SQL_CACHE', 'SQL_NO_CACHE', 'SQL_CALC_FOUND_ROWS', 'WITH'.
Each keywords are checked in the SQL query before saving it.

On the bottom left, the "List of MySQL Tables" gives the user a list of all the available database tables. He/she should select a table to make PrestaShop display all its attributes and types in the list on the right, then click "Add attribute to SQL query" or "Add table name to SQL query" to send its attribute name/table name into the SQL query field.

#### Multistore behavior

This page has no shop association block. By default, the SQL query is added for all shops, no matter the context selected.

To inform the merchants of this behavior, an information message is displayed on this page: "Note that this feature is available in all shops context only. It will be added to all your stores." (see issue [#19422](https://github.com/PrestaShop/PrestaShop/issues/19422))

:point_right: [Multistore special case: Add new pages without shop association block](../../../broader-topics/multistorespecialsspecs.md#list-of-pages-for-specific-case-2-add-new-pages-without-shop-association-block)
