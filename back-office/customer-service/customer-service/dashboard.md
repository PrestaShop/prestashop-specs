# SPECIFICATIONS - CUSTOMERS SERVICE > CUSTOMERS SERVICE PAGE

## MOCKUPS
https://www.figma.com/proto/axasD3Kyg52okWHqvWPN1I/PrestaShop---Customer-Service-(migration)?node-id=12%3A4083&scaling=min-zoom
https://www.figma.com/proto/axasD3Kyg52okWHqvWPN1I/PrestaShop---Customer-Service-(migration)?node-id=12%3A5267&scaling=min-zoom
https://www.figma.com/proto/axasD3Kyg52okWHqvWPN1I/PrestaShop---Customer-Service-(migration)?node-id=12%3A9835&scaling=min-zoom
https://www.figma.com/proto/axasD3Kyg52okWHqvWPN1I/PrestaShop---Customer-Service-(migration)?node-id=12%3A8042&scaling=min-zoom
https://www.figma.com/proto/axasD3Kyg52okWHqvWPN1I/PrestaShop---Customer-Service-(migration)?node-id=12%3A11958&scaling=min-zoom

## MESSAGES NOTIFICATIONS

When a new message is sent by a customer or a visitor, then it's displayed in the notifications (bell) in the header.

If you click on it, the thread is opened (view page) and all the messages notifications are removed.

It could be a message written through:

- the order view page in the BO;
- the order details page in the customer account in the FO;
- or any message sent to the customer service via the store's contact form.

## STATS

There are 3 indicators displayed:

- Pending discussion threads
- Average response time for 30 days in hours
- Messages per thread for 30 days

Theses indicators can be refreshed by clicking on the refresh icon.

## CONTACTS BLOCKS

Each contact type added in Shop parameters > Contact > Contact has its own block if the 'Save messages?' setting is enabled.

With these blocks, the users can quickly see if there are new messages (that have not yet been read).

By default, there are two blocks matching the default contacts _Webmaster_ and _Customer service_. Adding more contacts will add more blocks.

For each block, the description filled for the contact (in Shop parameters > Contact > Contact) is displayed.

The number of **opened** messages for the contact are displayed: "X new message(s)" with a link opening the first message.

If there is no message, then "No new message" is displayed.

## MEANING OF STATUS

A simple reminder of the 4 status that can be applied to a discussion thread:

- Open
- Closed
- Pending 1
- Pending 2

## STATISTICS

An overview of the global activity of the customer service since the beginning with 5 indicators displayed:

- Total threads 
- Threads pending 
- Total number of customer messages 
- Unread threads 
- Closed threads 

## CUSTOMER SERVICE

### Settings wheel

When clicking on it, two options are displayed:

1) Show SQL query

After clicking on it, the SQL query is displayed in a modal. The SQL query takes into account filters and sorts that have been done.

There are two buttons:

- Close: After clicking on it, the modal is closed
- Export to SQL Manager: After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

2) Export to SQL Manager

After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

### Bulk actions drop-down

This dropdown is enabled only if at least one message is selected, otherwise it's disabled.

There is 5 options, see the improvement [#19197](https://github.com/PrestaShop/PrestaShop/issues/19197)

1) Mark as "opened"

After clicking on it, the status of the selected messages are changed for "opened" and a successfull message is displayed: "Update successful"

2) Mark as "closed"

After clicking on it, the status of the selected messages are changed for "closed" and a successfull message is displayed: "Update successful"

3) Mark as "pending 1"

After clicking on it, the status of the selected messages are changed for "pending 1" and a successfull message is displayed: "Update successful"

4) Mark as "pending 2"

After clicking on it, the status of the selected messages are changed for "pending 2" and a successfull message is displayed: "Update successful"

5) Delete selection

After clicking on it, a modal is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?"

The action can be canceled by clicking on the cross or on the cancel button.

After clicking on "Delete" button, the selected messages are deleted, a successfull message is displayed "The selection has been successfully deleted."

### Listing

**The messages sent through the contact form in front-office are only listed here if the contact has the "Save messages?" option enabled.**

This setting can be changed in Shop parameters > Contact > Contact, when editing the contacts.

If the option is disabled for the contact that the customer chooses, the message is simply sent to the contact's email address, and is not stored in PrestaShop.

#### Multistore

Only the messages created in the selected store or store group (through the context) are displayed.

Example, let's say I have the following confiuration:
- Group 1
  - Shop A
  - Shop B
- Group 2
  - Shop C
  
If I select group 1 as context, then the messages created in Shop A and Shop B will be displayed.

If I select Shop A as context, then the messages created in Shop A will be displayed.

If I select all shops as context, then the messages created in Shop A, Shop B and Shop C will be displayed.

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

The user can edit 2 options, which apply to all contacts:

1) **Allow file uploading**: This toggle allows the merchant to choose if he/she wants to allow his/her visitors to upload files through the contact form.

It's enabled by default.

When enabled, an optional field "Attachment" is displayed in the front-office's contact form and a "choose file" CTA allows to select a file.

A tooltip is available: "Allow customers to upload files using the contact page."

2) **Default message**: This field allows the merchant to enter a default message that will be pre-filled while responding to a message.

By default this field is filled with the following message: 

"Dear Customer,

Regards,
Customer service"

A tooltip is available: "Please fill out the message fields that appear by default when you answer a thread on the customer service page"

A drop-down next to the field is displayed when there are several languages installed (disabled languages are diplayed in the drop-down). It allows to choose in which language the field is displayed.

Also, in the case of multilanguage, if an error occurs, then the user must be warned in the message which language is problematic.

### Multistore

In a multistore context, the options listed above have [checkboxes](https://github.com/PrestaShop/PrestaShop/issues/19378) and [specific settings drop-down](https://github.com/PrestaShop/PrestaShop/issues/19330), take a look at the conditions and specs [here](https://github.com/PrestaShop/prestashop-specs/blob/master/back-office/multistoregeneralspecs.md)

## CUSTOMER SERVICE OPTIONS

This section enables the user to precisely configure PrestaShop's access to his/her email server through its IMAP interface. 
The user needs to properly configure his/her IMAP settings, so that PrestaShop can retrieve the customer's answers to emails that were sent from the customer service tool. 

**IMAP URL:** This fields allows to enter the IMAP Url.

A tooltip is available: "URL for your IMAP server (ie.:mail.server.com)."

**IMAP port:** This fields allows to enter the IMAP port.

A tooltip is available: "Port to use to connect to your IMAP server."

**IMAP user:** This fields allows to enter the IMAP user.

A tooltip is available: "User to use to connect to your IMAP server."

**IMAP password:** This fields is an input type password and allows to enter the IMAP password.

A tooltip is available: "Password to use to connect to your IMAP server."

**Delete messages:** If this toggle is enabled, messages on the server will be deleted as soon as PrestaShop has retrieved them. 

A tooltip is available: "Delete messages after synchronization. If you do not enable this option, the synchronization will take more time."

**Create new threads:** If this toggle is enabled, this will create new threads for unrecognized e-mails.

A tooltip is available: "Create new threads for unrecognized emails."

**IMAP options (/pop3):** If this toggle is enabled, POP3 will be used instead of IMAP.

A tooltip is available: "Use POP3 instead of IMAP."

**IMAP options (/norsh):** If this toggle is enabled, the connection to the email server will not pre-authenticated.

A tooltip is available: "Do not use RSH or SSH to establish a preauthenticated IMAP sessions."

**IMAP options (/ssl):**  If this toggle is enabled, the connection to the email server will not be encrypted. 

A tooltip is available: "Use the Secure Socket Layer (TLS/SSL) to encrypt the session."

**IMAP options (/validate-cert):** If this toggle is enabled, PrestaShop will force the validation of the server's TLS/SSL certificate.

A tooltip is available: "Validate certificates from the TLS/SSL server."

**IMAP options (/novalidate-cert):** If this toggle is enabled, PrestaShop will never try to validate the server's TLS/SSL certificate. This is essential for servers with self-signed certificates.

A tooltip is available: "Do not validate certificates from the TLS/SSL server. This is only needed if a server uses self-signed certificates."

**IMAP options (/tls):** If this toggle is enabled, PrestaShop will force the use of StartTLS to encrypt the connection. Servers that do not support StartTLS will be rejected.

A tooltip is available: "Force use of start-TLS to encrypt the seesion, and reject connection to servers that do not support it."

**IMAP options (/notls)** If this toggle is enabled, PrestaShop will not use StartTLS to encrypt the session, even with servers that support it.

A tooltip is available: "Do not user start-TLS to encrypt the session, even with servers that support it."

### Multistore

In a multistore context, the options listed above have [checkboxes](https://github.com/PrestaShop/PrestaShop/issues/19378) and [specific settings drop-down](https://github.com/PrestaShop/PrestaShop/issues/19330), take a look at the conditions and specs [here](https://github.com/PrestaShop/prestashop-specs/blob/master/back-office/multistoregeneralspecs.md)

### SAVE BUTTON

When clicking on save, if all settings have well been saved, then a successfull message is displayed: "The settings have been successfully updated."

If all IMAP fields are not filled and if you click on save, then the following information message is displayed: "IMAP configuration is not correct"

If all IMAP fields are filled and if IMAP is not installed on the server, then the following information message is displayed after clicking on Save: "imap is not installed on this server"

## Sync

This block is displayed if all IMAP fields are filled

**Run Sync** 

A tooltip is available: "Click to synchronize mail automatically"

**Run Sync button** This button allows to synchronize mail automatically
