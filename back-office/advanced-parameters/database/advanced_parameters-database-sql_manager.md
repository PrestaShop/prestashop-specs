# SPECIFICATIONS - ADVANCED PARAMETERS &gt; DATABASE &gt; SQL MANAGER

The SQL manager is a complex feature, which should be reserved for technical people who know how to explore a database using the SQL language. In return for this complexity, it can be extremely powerful and proves immensely useful to those who master it.

## 1.7.8 Version 
The page is going to be migrated into a module. The module will be downloadable for merchants who need it.

## 1.7.7.0 Version

This tool enables you to perform SQL queries directly on the PrestaShop database, and save them for use at any later time. 

For instance, using this tool and your knowledge of SQL, you could create a reusable query giving you an updated list of the clients who are subscribed to your newsletter, or get a list of products in HTML or CSV format.

For security reasons, some types of queries are not allowed: UPDATE, DELETE, CREATE TABLE, DROP, etc. In short, you can only read data (SELECT query).

<!--- Historicly, the secure keys or passwords was hidden (***********). but it can be fully done since with an alias the keys and passwords can be displayed --->

The SQL Manager page displays 2 messages:
- Alert info:

  "How do I create a new SQL query?
    - Click "Add New".
    - Fill in the fields and click "Save".
    - You can then view the query results by clicking on the Edit action in the dropdown menu
    - You can also export the query results as a CSV file by clicking on the Export button
"

- Alert warning:

"When saving the query, only the "SELECT" SQL statement is allowed."

### Add new SQL query

Creating a new query
As usual, the "Add new SQl query" button leads to the creation form. It has two main fields:

SQL query name. Make the name as long and descriptive as necessary.
SQL query. The SQL query itself. You are free to perform JOINs or other intricate selections.


Additionally, the "List of MySQL Tables" section helps you explore the database, and makes it easier for you to build your queries. It gives you a handy and clickable selector of all the currently available database tables. Select a table to make PrestaShop display its attributes and types, then click "Add attribute to SQL query" to send its name into the "Request" field.

### SQL Manager List

Saving the form sends you back to the main page, with its list of queries.

Starting a query
Each saved query in the table has four icons to the right of its row:

Export. Performs the query, and has it downloaded by you in CSV format.
View. Performs the query, and has it displayed in an HTML table, right within the PrestaShop interface.
Edit. You can edit a query as often as necessary, in order to refine it and get better results.
Delete. Once a query is not used anymore (or simply because it does not work), you can delete it by clicking this button and confirming your choice.

### Settings

Select your default file encoding. You can configure the character encoding of the downloaded CSV file. The default, UTF-8, is recommended, but you can select ISO-8859-1 if need be.
