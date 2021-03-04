# SPECIFICATIONS - SHOP PARAMETERS > ORDER SETTINGS > ORDER STATUSES

The statuses page has 2 lists for both the order statuses and the order return statuses.

## Order statuses

![Order statuses list](/img/list%20order%20statuses.png)

### Settings wheel

When clicking on it, three options are displayed:

1) Refresh list

After clicking ont it, the whole page is refreshed.

2) Show SQL query

After clicking on it, the SQL query is displayed in a modal. The SQL query takes into account filters and sorts that have been done.

There are two buttons:

- Close: After clicking on it, the modal is closed
- Export to SQL Manager: After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

3) Export to SQL Manager

After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

### Bulk actions drop-down

This dropdown is enabled only if at least one order status is selected, otherwise it's disabled.

There is 1 option:

1) Delete selection

After clicking on it, a modal is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?"

The action can be canceled by clicking on the cross or on the cancel button.

After clicking on "Delete" button, the selected order statuses are deleted, a successful message is displayed "The selection has been successfully deleted."

### Listing

The **order statuses** list displays all the order statuses.

#### Multistore behavior

The whole listing page can be displayed only in all shops context, the others contexts are not displayed in the header.

If the user was on another page in a specific shop context or in a group context, the all shops context is automatically selected when he/she arrives on the page.

An information message is displayed at the top of the page: "Note that this page is available in all shops context only, this is why your context has just switched." (_See issue [#19495](https://github.com/PrestaShop/PrestaShop/issues/19495)_)

:point_right: https://github.com/PrestaShop/prestashop-specs/blob/master/broader-topics/multistorespecialsspecs.md

#### Select all / unselect all checkbox

After checking the box, all the order statuses with a checkbox are selected or unselected.

#### Columns

1) Checkbox: The checkbox isn't displayed for the default order status and the status added by modules.

There are 8 columns in the grid:

1) Id

It's possible to sort by id asc or desc and search by id.

2) Name 

It's possible to sort by name asc or desc and search by name.

The order status names are displayed with their color in background.

3) Icon 

This should be removed during the migration since it is not used anymore.

4) Send email to the customer

The merchant can choose to send an email or not to the customer when the order status is applied to the order.

A search can be made by selecting "yes" or "no" through the drop-down.

5) Delivery

The merchant can choose to show the delivery PDF or not when the order status is applied to the order.

A search can be made by selecting "yes" or "no" through the drop-down.

6) Invoice

The merchant can choose to allow the customer to download and view PDF versions of his/her invoices or not when the order status is applied to the order.

A search can be made by selecting "yes" or "no" through the drop-down.

7) Email template

It's possible to sort by email template asc or desc and search by email template. If no email template is selected, then it's empty.

8) Actions

There are two actions:

- Edit, the main one:

After clicking on it, the order status is opened in the same tab.
This action can also be performed by clicking on the line.

- Delete, the second one:

This option isn't displayed for the default status and the status added by modules.

After clicking on it, a modal is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?"

The action can be canceled by clicking on the cross or on the cancel button.

After clicking on "Delete" button, the message is deleted and a successful message is displayed "Successful deletion."

#### Search

Below, the same behavior as others listing:

By default, the search button is disabled. It becomes enabled when something is filled in a search field.

After clicking on "Search", the search is applied and the order statuses matching with the search are displayed

If no results are found, then a message "No records found" is displayed.

After clicking on "Search", this button is disabled and a "Reset" button is displayed.

After clicking on "Reset", the search is removed and all order statuses are displayed.

#### Pagination

The pagination of the list starts when there are more than 20 order statuses.

The merchant can select the number of order statuses displayed through a drop-down: 20, 50, 300, 1000

When there are more results than the number selected, the merchant can navigate through pages.

If a sort and/or a search have been done, results should be kept when moving on to the next page.

### Add / edit order status

When **adding a new order status or editing an order status**, the user can fulfill the information below:
*   **Status name**, mandatory information
*   **Icon**. (to be removed after migration since it is not used anymore),
*   **Color** with a color picker or write the hexadecimal code

The user can customize the order status actions by checking the different options below:

*   **Consider the associated order as validated.** If enabled, this status marks all associated orders as "paid"
*   **Allow a customer to download and view PDF versions of their invoice.** If enabled, the invoice can be downloadable in the  Order History page in the Front Office.
*   **Hide this state in all customer orders.** If enabled, the status is hidden in the Order History page in the Front Office.
*   **Send an e-mail to the customer when his/her order status has changed**. 

When **enabled**, a **drop-down menu appears on the bottom of the option** to let you choose which mail template to use for the sending email. 

**A preview button** is available to preview the email that is going to be sent.

*   **Attach invoice PDF to an email**. Send an email to the customer with the invoice in PDF format attached.
*   **Attach a delivery slip PDF to an email**. Send an email to the customer with the delivery slip in PDF format attached.
*   **Set the order as shipped.** Be careful: once an order is set as "shipped", it cannot be set back to the previous status.
*   **Set the order as paid.** Same here: once an order is set as "paid", it cannot be set back to the previous status.
*   **Set the order as in transit.** Displays the delivery PDF.

Next to the label name and email template preview, there is a drop-down to select the language the user wants to edit or view the information.

The order statuses can be displayed on:
*   the Order List Page
*   the Order View Page
*   the Customer Thread Page in Orders and messages timeline block
*   the Order History Page

Note that it is not possible to delete default order statuses such as Payment accepted, Delivered, etc. These PrestaShop order statuses can only be modified.

![Order status form](/img/edit%20the%20order%20status.png)

#### Multistore behavior

As the Add/Edit form does not display any shop association block, **when merchants add or edit an order status, it is added to all shops or edited for all shops** - no matter the context selected. 

An information message should be displayed at the top of the page to inform the user of this behavior: "Note that this feature is available in all shops context only. It will be added to all your stores." (_See issue [#19496](https://github.com/PrestaShop/PrestaShop/issues/19496)_)

So all order status should be displayed in the listing, be it an all shops, a group, or a specific shop context.

:point_right: https://github.com/PrestaShop/prestashop-specs/blob/master/broader-topics/multistorespecialsspecs.md

## Return statuses

![Order statuses list](/img/list%20return%20statuses.png)

### Settings wheel

When clicking on it, three options are displayed:

1) Refresh list

After clicking ont it, the whole page is refreshed.

2) Show SQL query

After clicking on it, the SQL query is displayed in a modal. The SQL query takes into account filters and sorts that have been done.

There are two buttons:

- Close: After clicking on it, the modal is closed
- Export to SQL Manager: After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

3) Export to SQL Manager

After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

### Bulk actions drop-down

This dropdown is enabled only if at least one order return status is selected, otherwise it's disabled.

There is 1 option:

1) Delete selection

After clicking on it, a modal is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?"

The action can be canceled by clicking on the cross or on the cancel button.

After clicking on "Delete" button, the selected order return statuses are deleted, a successful message is displayed "The selection has been successfully deleted."

### Listing

#### Multistore behavior

The whole listing page can be displayed only in all shops context, the others contexts are not displayed in the header.

If the user was on another page in a specific shop context or in a group context, the all shops context is automatically selected when he/she arrives on the page.

An information message is displayed at the top of the page: "Note that this page is available in all shops context only, this is why your context has just switched." (_See issue [#19495](https://github.com/PrestaShop/PrestaShop/issues/19495)_)

:point_right: https://github.com/PrestaShop/prestashop-specs/blob/master/broader-topics/multistorespecialsspecs.md

#### Select all / unselect all checkbox

After checking the box, all the order return statuses with a checkbox are selected or unselected.

#### Columns

1) Checkbox: The checkbox isn't displayed for the default order return status.

There are 3 columns in the grid:

1) Id

It's possible to sort by id asc or desc and search by id.

2) Name 

It's possible to sort by name asc or desc and search by name.

The order return status names are displayed with their color in background.

3) Actions

There are two actions:

- Edit, the main one:

After clicking on it, the order return status is opened in the same tab.
This action can also be performed by clicking on the line.

- Delete, the second one:

This option isn't displayed for the default order return statuses and the order return statuses added by modules.

After clicking on it, a modal is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?"

The action can be canceled by clicking on the cross or on the cancel button.

After clicking on "Delete" button, the message is deleted and a successful message is displayed "Successful deletion."

#### Search

Below, the same behavior as others listing:

By default, the search button is disabled. It becomes enabled when something is filled in a search field.

After clicking on "Search", the search is applied and the order statuses matching with the search are displayed

If no results are found, then a message "No records found" is displayed.

After clicking on "Search", this button is disabled and a "Reset" button is displayed.

After clicking on "Reset", the search is removed and all order statuses are displayed.

#### Pagination

The pagination of the list starts when there are more than 20 order return statuses.

The merchant can select the number of order return statuses displayed through a drop-down: 20, 50, 300, 1000

When there are more results than the number selected, the merchant can navigate through pages.

If a sort and/or a search have been done, results should be kept when moving on to the next page.

#### Default order return statuses

By default, PrestaShop has the following order return statuses: 
- id 1:	Waiting for confirmation	
- id 2:	Waiting for package	
- id 3:	Package received	
- id 4:	Return denied	
- id 5:	Return completed	

![Return statuse list](/img/list%20return%20statuses.png)

**The first return status generated** in the return workflow is **“Waiting for confirmation”** when the customer creates a return demand in the Front Office. 

### Add / edit order return status

**Adding or Editing an order return status** allows the user to add or edit **the order return status name** input text on any back-office language and **the label color** with a color picker or directly into the input text with the hexadecimal code. 

![Add new return status](/img/creating%20an%20return%20status.png)

**The order return status can be displayed on:**
*   the Order Follow page in Front Office customer account,
*   the Order View page in Back-Office on merchandise return tab, 
*   the Merchandise Returns List Page,
*   the Merchandise Returns Edit Page.

**Adding new** return status will add new return status on the Merchandise Returns Edit Page return status droplist.

Note that it is not possible to delete default return statuses such as Waiting for confirmation, Package received, etc. These PrestaShop return statuses can only be modified.

#### Multistore behavior

As the Add/Edit form does not display any shop association block, **when merchants add or edit an order return status, it is added to all shops or edited for all shops** - no matter the context selected. 

An information message should be displayed at the top of the page to inform the user of this behavior: "Note that this feature is available in all shops context only. It will be added to all your stores." (_See issue [#19497](https://github.com/PrestaShop/PrestaShop/issues/19497)_)

So all order status should be displayed in the listing, be it an all shops, a group, or a specific shop context.

:point_right: https://github.com/PrestaShop/prestashop-specs/blob/master/broader-topics/multistorespecialsspecs.md

## Specific cases

When deleting an order status or a return status, there is currently no check on the order database, to ensure that there is no order currently using this status. This can provoke errors and exceptions (as described on the following issue : https://github.com/PrestaShop/PrestaShop/issues/19098), on several pages : 
  - the order history page in FO (exception)
  - the Order detail page in BO (exception)
  - the order listing page in BO (no exception, but the status is not displayed)
  - the customer page
  
 To prevent this situation, an improvement has been introduced (178 version) changing the order status hard delete into a soft delete, setting the "deleted" value to 1, so that the status can be retrieved in DB even after it has been deleted, preventing orders having this status to break.

For order listing and detail pages in B0, this means that when a user deletes a previously created order or return status, it will :
- flag the order status as deleted (soft delete) meaning that it will no longer be visible in the order statuses list but will still be available in database
- For orders with this status as their current status : leave it visible in the order status droplist (with (deleted) displayed) until another one is selected
- once another one is selected, remove it from the droplist so that it cannot be chosen or seen anymore

For the order history page in FO, it will stay transparent for the user, as the deleted status will still be displayed in the customer's order history.

For the customer page, this improvement fixes the exception while having no other impact on the page.

## MISSING PART OF SPECIFICATIONS TO BE COMPLETED

- Errors messages - In which cases there should be an error message ?
- Multilanguage - Which fields are multilingual ?
- Permissions - What should happen if I don’t have view, add, edit, delete right ?

ACCEPTANCE TESTS:
- check page on RTL
- check page with multistore
- check page with multilanguage
