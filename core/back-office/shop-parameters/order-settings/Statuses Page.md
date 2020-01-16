## **Specification of the Statuses Page**
The Statuses page has:

- **2 lists for the order statuses for the return statuses,**
-   **the add new order status button,**
-   **the add new return status button.**


# **Order statuses**

The **order statuses** list displays all the order statuses with their :



*   **Id,**
*   **name with their color label,**
*   **icon (to be removed after migration since it is not used anymore),**
*   **send email to the customer,**
*   **delivery,**
*   **invoice,**
*   **email template,**
*   **edit button.**

![Order statuses list](img/list order statuses.png)

The default status or the status added by modules can’t be deleted.

When **adding a new order status or editing an order status**, the user can fulfill the information below:
*   **Status name**, mandatory information
*   **Icon**. (to be removed after migration since it is not used anymore),
*   **Label color** with a color picker or write the hexadecimal code

The user can customize the order status actions by checking the differents option bellow:



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
*   **Show delivery PDF.** Displays the delivery PDF. **(Need an investigation of the impact on the core, the wording seems wrong. The option is more telling that the label impact the product location,as to say that the product is out of the stock)**

Next to the label name and email template preview, there is a drop-down to select the language the user want to edit or view the information.

The order statuses can be displayed on:
*   Order List Page
*   Order View Page
*   Customer Thread Page in Orders and messages timeline block
*   Order History Page

![Order status form](img/edit the order status.png)

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

![Return statuse list](img/list return statuses.png)

**The first return status generated** in the return workflow is **“Waiting for confirmation”** when the customer creates return demand in the Front Office. 

**Adding or Editing a return status** allows the user to add or edit **the status name** input text on any back-office language and **the label color** with a color picker or directly into the input text with the hexadecimal code. 

![Add new return status](img/creating an return status.png)

**The return status can be displayed on:**
*   the Order Follow page in Front Office customer account,
*   the Order View page in Back-Office on merchandise return tab, 
*   the Merchandise Returns List Page,
*   the Merchandise Returns Edit Page.

**Adding new** return status will add new return status on the Merchandise Returns Edit Page return status droplist.
