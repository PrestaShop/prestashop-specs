---
title: View logs
weight: 1
---

## Severity levels

In this section the meaning of the logs is shown. 4 levels are presented

Meaning of severity levels:

 - Informative only, green coloured 
 - Warning - colored yellow
 - Error
 - Major issue (crash!)

# Settings wheel

1. Erase all

When clicking on the Erase all, a modal asks if you are sure to delete it, after clicking "OK" deletes all the logs, if pressed "Cancel", closes the modal.

2. Refresh list

After clicking on it, the page is reloaded. Sorts and searches are kept.

3. Show SQL query

After clicking on it, the SQL query is displayed in a modal. The SQL query takes into account filters and sorts that have been done.

There are two buttons:

Close: After clicking on it, the modal is closed
Export to SQL Manager: After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

4. Export to SQL Manager

After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

## Logs 

11 Rows are displayed in this section:

1) ID

It's possible to sort by id asc or desc and search by id.

2) Emplyee

It's possible to sort by employee asc or desc and search by employee.

3) Severity (1-4)

It's possible to sort by id asc or desc the severity, and search by the severity level.

4) Message

It's possible to sort by message asc or desc and search by message.

5) Object type

It's possible to sort by object type asc or desc and search by object type.

6) Object ID

It's possible to sort by object ID asc or desc and search by object ID.

7) Shop context

It's possible to sort by shop context asc or desc.

8) Language

It's possible to sort by language asc or desc.

9) Error code

It's possible to sort by error code asc or desc and search by error code.

10) Date

It's possible to sort by date asc or desc and search by selected date, as there are 2 fields, 1 for selecting "from" and the other "to" date.

11) Actions

Only "search" button is available, when any of the previous search fields are entered, it's possible to search, when the search is done, a button below: "reset" appears, when pressed it clears the search, and restores the previous view of all the logs.

At the bottom of this section, if there are more than 1 page of logs, all the possible pages will be shown that can be scrolled, there will be shown: " Viewing 1-10 out of 502 (page 1 / 51)"

Also, "Items per page:" in this drop-down field it's possible to select the display for: 10, 20, 50, 100.

## Logs by email 

In this section 2 fields are present:

1) Minimum severity level 

This is a drop-down field, has a help text below: "Click on "None" to disable log alerts by email or enter the recipients of these emails in the following field." the drop-down field has the possible options:

 - Major issue (crash)! (default option)
 - Error
 - Warning
 - Informative only
 - None

2) Send emails to 

This is a mandatory input field, by default it has the registered admin email input.
Has a help text below: "Log alerts will be sent to these emails. Please use a comma to separate them (e.g. pub@prestashop.com, anonymous@psgdpr.com)."
When trying to save with an incorrect email input, shows the following message: "Invalid email:"

### Call to action

 - Save, when pressed shows the following message: "Successful update."
