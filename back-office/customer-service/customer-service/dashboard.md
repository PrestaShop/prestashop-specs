# SPECIFICATIONS - CUSTOMERS SERVICE > CUSTOMERS SERVICE PAGE

## MOCKUPS
https://projects.invisionapp.com/d/main?origin=v7#/console/20267309/425376946/preview?scrollOffset=0
https://projects.invisionapp.com/d/main?origin=v7#/console/20267309/425548149/preview?scrollOffset=0
https://projects.invisionapp.com/d/main?origin=v7#/console/20267309/425548150/preview?scrollOffset=0
https://projects.invisionapp.com/d/main?origin=v7#/console/20267309/425549455/preview?scrollOffset=0

## STATS

There are 3 indicators displayed:

- Pending discussion threads
- Average response time for 30 days in hours
- Message per thread for 30 days

Theses indicators can be refreshed by clicking on the refresh icon.

## CONTACTS BLOCKS

There are as many blocks as there are contacts in Shop parameters > Contact > Contact.

For each block, the description filled for the contact (in Shop parameters > Contact > Contact) is displayed.

The number of **opened** messages for the contact are displayed: "X new message(s)" with a link opening the first message.

If there is no message, then "No new messages" is displayed.

## MEANING OF STATUS

There are 4 status:

- Open
- Closed
- Pending 1
- Pending 2

## STATISTICS

There are 5 indicators displayed:

- Total threads 
- Threads pending 
- Total number of customer messages 
- Unread threads 
- Closed threads 

## CUSTOMER SERVICE

### Settings wheel

When clicking on it, two options are displayed:

1) Show SQL query

After clicking on it, the sql query is displayed in a modal. The SQL query takes into account filters and sorts that have been done.

There are two buttons:

- Close: After clicking on it, the modal is closed
- Export to SQL Manager: After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

2) Export to SQL Manager

After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manage

### Bulk actions drop-down

This dropdown is enabled only if at least one message is selected, otherwise it's disabled.

There is 5 options:

1) Mark as "opened"

After clicking on it, the status of the selected messages are changed for "opened" and a successfull message is displayed "The status of the selection has been successfully changed."

2) Mark as "closed"

After clicking on it, the status of the selected messages are changed for "closed" and a successfull message is displayed "The status of the selection has been successfully changed."

3) Mark as "pending 1"

After clicking on it, the status of the selected messages are changed for "pending 1" and a successfull message is displayed "The status of the selection has been successfully changed."

4) Mark as "pending 2"

After clicking on it, the status of the selected messages are changed for "pending 2" and a successfull message is displayed "The status of the selection has been successfully changed."

5) Delete selection

After clicking on it, a modal is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?"

The action can be canceled by clicking on the cross or on the cancel button.

After clicking on "Delete" button, the selected messages are deleted, a successfull message is displayed "The selection has been successfully deleted."

### Listing

#### Select all / unselect all checkbox

After checking the box, all the messages displayed on the page are selected or unselected.

#### Columns

There are 12 columns:

1) ID

It's possible to sort by id asc or desc and search by id.

2) Customer

The firstname and lastname are displayed if the customer was logged in while sending the message. Otherwise, "--" is displayed.

It's possible to sort by customer asc or desc and search by customer (firstname and/or lastname)

3) Email

The customer's email address is displayed.
It's possible to sort by email asc or desc and search by email

4) Type

The type of the messsage selected by the customer in the contact form is displayed.

It's possible to sort by type asc or desc and search by selecting the type through the drop-down, where all contacts' title are displayed.

5) Language

The language selected by the customer in front-office while sending the message is displayed.

It's possible to sort by language asc or desc and search by selecting the language through the drop-down, where all enabled languages are displayed.

6) Status

The status of the message is displayed.

It's possible to sort by status asc or desc and search by selecting the status through the drop-down, where all status are displayed.

7) Employee

The first letter of the employee's firstname and his/her lastname are displayed if the message is assigned to an employee. Otherwise, "--" is displayed.

It's possible to sort by employee asc or desc and search by employee's lastname.

8) Messages

The customer's message is displayed and truncated if it contains more than 40 chars.

It's possible to sort by message asc or desc and search by messages

9) Private

The customer's message is displayed and truncated if it contains more than 40 chars.

It's possible to sort by privacy asc or desc and search by selecting the privacy through the drop-down, where 2 options are listed: "yes" and "no".

10) Last message

The date and hour of the last customer's message is displayed.

It's possible to sort by date asc or desc and search by selecting a range of date through two datepicker: "from" and "to"

11) Shop

If the multistore is enabled and several shops have been configured, then this column is displayed.
The name of the shop where the message was sent is displayed.

It's not possible to sort or perform a search for this column.

12) Actions

There are two actions:

- View, the main one:

After clicking on it, the thread is opened in the same tab.
This action can also be performed by clicking on a line.

- Delete, the second one:

After clicking on it, a modal is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?"

The action can be canceled by clicking on the cross or on the cancel button.

After clicking on "Delete" button, the message is deleted and a successfull message is displayed "Successful deletion."

#### Search

Below, the same behavior as others listing:

By default, the search button is disabled. It becomes enabled when something is filled in a search field.

After clicking on "Search", the search is applied and the messages matching with the search are displayed

If no results are found, then a message "No records found" is displayed.

After clicking on "Search", this button is disabled and a "Reset" button is displayed.

After clicking on "Reset", the search is removed and all messages are displayed.

#### Pagination

The pagination of the list starts when there are more than 20 messages.

The merchant can select the number of messages displayed through a drop-down: 20, 50, 300, 1000

When there are more results than the number selected, the merchant can navigate through pages.

If a sort and/or a search have been done, they should be keeped after changing page.

## CONTACT OPTIONS

**Allow file uploading**: This toggle allows the merchant to choose if he/she wants to allow his/her visitors to upload files through the contact form.

It's enabled by default.

When enabled, an optional field "Attachment" is displayed in the front-office's contact form and a "choose file" CTA allows to select a file.

A tooltip is available: "Allow customers to upload files using the contact page."

**Default message**: This field allows the merchant to enter a default message that will be pre-filled while responding to a message.

By default this field is filled with the following message: 

"Dear Customer,

Regards,
Customer service"

A tooltip is available: "Please fill out the message fields that appear by default when you answer a thread on the customer service page"

A drop-down next to the field is displayed when there are several languages installed (disabled languages are diplayed in the drop-down). It allows to choose in which language the field is displayed.

Also, in the case of multilanguage, if an error occurs, then the user must be warned in the message which language is problematic.

## CUSTOMER SERVICE OPTIONS
