# SPECIFICATIONS - ADVANCED PARAMETERS &gt; DATABASE &gt; SQL MANAGER

The SQL manager is a complex feature, which should be reserved for technical people who know how to explore a database using the SQL language. In return for this complexity, it can be extremely powerful and proves immensely useful to those who master it.

## 1.7.8 Version 

The page is going to be migrated into a module. The type of module is still to be defined, the most likely solution seems to be an not installed module.
The module will be downloadable for merchants who need it and have the required skills.
The feature to hide the password or the secure key will be removed since we can't fully hide them since with an alias the keys or passwords can be displayed.

## 1.7.7.0 Version

This tool enables you to perform SQL queries directly on the PrestaShop database, and save them for use at any later time. 

For instance, using this tool and your knowledge of SQL, you could create a reusable query giving you an updated list of the clients who are subscribed to your newsletter or get a list of products in HTML or CSV format.

For security reasons, some types of queries are not allowed: UPDATE, DELETE, CREATE TABLE, DROP, etc. In short, you can only read data (SELECT query).

At first, the SQL Manager page displays 2 messages:
- Alert info:

  "How do I create a new SQL query?
    - Click "Add New".
    - Fill in the fields and click "Save".
    - You can then view the query results by clicking on the Edit action in the dropdown menu
    - You can also export the query results as a CSV file by clicking on the Export button
"

- Alert warning:

"When saving the query, only the "SELECT" SQL statement is allowed."

### SQL Manager List

Below the messages, the page displays the SQL Manager list with the request's ID, SQL query name, SQL query and actions columns.
The request's actions allow us to download the request's result into a CSV file, view the request's result on the page, delete the request, and edit it.
To summarize the actions cab be:
- Export. Performs the query, and have it downloaded by you in CSV format.
- View. Performs the query, and has it displayed in an HTML table, right within the PrestaShop interface.
- Edit. You can edit a query as often as necessary, to refine it and get better results.
- Delete. Once a query is not used anymore (or simply because it does not work), you can delete it by clicking this button and confirming your choice.
When the user views the SQL request with no result, a warning is displayed: "This SQL query has no result."

### Settings

Select your default file encoding. You can configure the character encoding of the downloaded CSV file. The default, UTF-8, is recommended, but you can select ISO-8859-1 if need be.

### Add new SQL query

Creating a new query is divided into 3 sections: 

- The SQL form with 2 following inputs : 

    - SQL query name. Make the name as long and descriptive as necessary.
    - SQL query. The SQL query itself. You are free to perform JOINs or other intricate selections.
 The cancel button redirects the user to the SQL Manager list without saving any information.
 
 The save button saves the SQL name and request and redirects the merchant to the list with the new request saved. If the merchant saves a request that has not the authorized querie type, a error is displayed : "Your request is not authorised, please try a SELECT type request", the query is not saved and the user stays on the page with the displayed error.


On the bottom left, the "List of MySQL Tables" gives the user a list of all the available database tables. Select a table to make PrestaShop display its attributes and types on the list of attributes for this MySQL table, then click "Add attribute to SQL query" or "Add table name to SQL query" to send its attribute name or table name into the SQL query field.
