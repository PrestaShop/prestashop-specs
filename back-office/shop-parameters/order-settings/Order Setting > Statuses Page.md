## **Specification of the Statuses Page**
The Statuses page has:

- **2 lists for both the order statuses and the return statuses,**
-   **the add new order status button,**
-   **the add new return status button.**


# **Order statuses**

The **order statuses** list displays all the order statuses with their :



*   **Id,**
*   **name with their color label,**
*   **icon (to be removed after migration since it is not used anymore),**
*   **send email to the customer,**
*   **in transit,**
*   **invoice,**
*   **email template,**
*   **edit button.**

![Order statuses list](/img/list%20order%20statuses.png)

The default status or the status added by modules can’t be deleted.

When **adding a new order status or editing an order status**, the user can fulfill the information below:
*   **Status name**, mandatory information
*   **Icon**. (to be removed after migration since it is not used anymore),
*   **Label color** with a color picker or write the hexadecimal code

The user can customize the order status actions by checking the different options below:


*   **Consider the associated order as validated.** If enabled, this status marks all associated orders as "paid"
*   **Allow a customer to download and view PDF versions of their invoice.** If enabled, the invoice can be downloadable in the  Order History page in the Front Office.
*   **Hide this state in all customer orders.** If enabled, the status is hidden in the Order History page in the Front Office.
*   **Send an e-mail to the customer when his/her order status has changed**. 

When **enabled**, a** drop-down menu appears on the bottom of the option** to let you choose which mail template to use for the sending email. 

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

# **Return status**

The **return statuses** list displays all the return statuses with their **id, name with their color label and edit button**. 

By default, PrestaShop has the following return statuses: 
*   id:1	Waiting for confirmation	
*   id:2	Waiting for package	
*   id:3	Package received	
*   id:4	Return denied	
*   id:5	Return completed	

The default status or the status added by modules can’t be deleted.

It is possible to research the return status by ID or Name.

![Return statuse list](/img/list%20return%20statuses.png)

**The first return status generated** in the return workflow is **“Waiting for confirmation”** when the customer creates a return demand in the Front Office. 

**Adding or Editing a return status** allows the user to add or edit **the status name** input text on any back-office language and **the label color** with a color picker or directly into the input text with the hexadecimal code. 

![Add new return status](/img/creating%20an%20return%20status.png)

**The return status can be displayed on:**
*   the Order Follow page in Front Office customer account,
*   the Order View page in Back-Office on merchandise return tab, 
*   the Merchandise Returns List Page,
*   the Merchandise Returns Edit Page.

**Adding new** return status will add new return status on the Merchandise Returns Edit Page return status droplist.

Note that it is not possible to delete default return statuses such as Waiting for confirmation, Package received, etc. These PrestaShop return statuses can only be modified.


# **Specific cases**

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





**MISSING PART OF SPECIFICATIONS TO BE COMPLETED**



- Errors messages - In which cases there should be an error message ?
- Multilanguage - Which fields are multilingual ?
- Multistore - How should it work when multistore is enabled ?
- Permissions - What should happen if I don’t have view, add, edit, delete right ?


ACCEPTANCE TESTS
check page on RTL
check page with multistore
check page with multilanguage

