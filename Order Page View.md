**Specifications for the order view page for 1.7.7 - 2019**

# **User Story:**

# As a merchant, I need to be able to manage all my orders online and manual one.

As merchant managing order is essential for my e-commerce, I need to be able to:

-   Check the order’s product to prepare it
-   Manage the order’s progress,
-   Edit the customer information or send him messages,
-   To print his invoice,
-   Handle payment methods,
-   to follow my shipping through activities,
-   Returns and refunds

**WHY**

The Add order page _(Orders > Orders > View button)_ is expected to be migrated to Symfony for the 1.7.7 version and will be reworked for better user experience.

Some new specifications for the new design is in progress but to avoid any features regressions. We need to specify the whole behaviour of this page to make it easier to compare the new scenario and avoid any new bugs and regressions.

**Related issue**:

[](https://docs.google.com/spreadsheets/d/1wfwQRJ28cXQmhGDZcW05RpD12HZ2Em3_bVvR1r9_m_k/edit?usp=sharing)[https://docs.google.com/spreadsheets/d/1wfwQRJ28cXQmhGDZcW05RpD12HZ2Em3_bVvR1r9_m_k/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1wfwQRJ28cXQmhGDZcW05RpD12HZ2Em3_bVvR1r9_m_k/edit?usp=sharing)

**WHAT**

Thus, this project aims at specifying the new behaviours for every scenario a merchant could be dealing with the order management. This specification should specifically define :

-   Order (order status, invoices, cancellation)
-   Customer (customer card and addresses)
-   Paiement
-   Messages
-   Refund
-   Product & voucher

**SPECIFICATIONS**

**Orders > Orders > View order**

The user access to the order view page by either clicking on **the order’s row** or on **the view button**.

**Generic page operation - Order view**

On the header, we have **the order’s reference, customer’s name, total price in black backgorund, the date and the hour**.

## I.  **Action panel**

**Bellow the panel’s header**, we have all the order's action button:

-   **Print order button**
-   **View invoice show button**
-   **View delivery slip button**
-   **Partial refund button**
-   **Standard Refund**
-   **Return products button**
-  **Resend confirmation order**
-   **Cancel button**

1. **Print order button**

Opens the Print page of the browser with the order’s content.

2. **View invoice show**

If the current or new order status as **the generation of the invoice activated** then **the button is shown or** the user generates it manually.

When the user clicks on the button, it downloads the invoice.

3.  **View delivery slip**

If the current or new order status as **the generation of the delivery slip** then **the button to download the delivery slip is shown.**

4.  **Partial refund button**

If the current or new order status of order considered **as paid** then **the button is shown.** After clicking on the button, then the product table will take the full width of the page. The user can edit the refund amount by product and also the shipping cost.
He must select the quantity of the product conserned for the refunded and then write refund amount choosed by product rows.
The maximun refundable amount is writen bellow all the amount input in tax included.

**Before the validating a partial refund,** the user can choose to re-stock or generate a voucher by checking the checkboxes.

[Partial Refund screen](https://invis.io/YKTGGFZAMCB#/385922519__Order_Details_-_Partial_Refund)

**After the validation a partial refund,** a new column is added with quantity previously selected and the amound entered.

  5.  **Return products button**

If the current or new order status of order considered **as shipped and the merchandising return is activated** then **the button is shown. If the user clicks the button** then table product change to edit the return product quantity individually by entering the number or the checkbox if it is for all the quantity.

![](https://lh3.googleusercontent.com/1tZQSo2RP1YBj-YjnIPJtZLmydPdkfk5Z2sBszmwdJ71P9fFJLNCv05jayLzto7CVl0HOIojdpRZ5CbtPG6GrYRRqbvctNteM30uw4A5T6ctjSHBGoTxdn7JYKxwd4Q0Im4ldWZ1)

**Before validating the return products**, the user can choose to re-stock generate a voucher generate a credit slip by checking the checkboxes or Repay shipping costs.

6.  **Resend confirmation order**

By clicking on the button, it resends the email confirmation order.

7.  **Cancel products button**

**The cancel products button on the order action** is shown when **the merchandise return** is activated and **the status is not on payment accepted.**

A new column is added to the product list to select which product will be cancelled Cancel products. On the bottom right of the products list, the button Products Cancels is available to cancel the selected products.

The **button deletes** the **selected products** and changes the status as **Cancelled**.

Below the order actions, the user can manage the order status on **the status tab**, the documents generation and information in **the document tab**, the shipping activities in **the shipping tab** and the returns on **the merchandise returns tab.**

**Each tab has a notification number of the row’s number of their table.**

## II.  **Customer panel**

The customer panel displayed on the left of the product list has **the customer’s title, name, last name and customer reference** . To se the full customer description, you can click on **View full details** that redirects to his customer page in an other page.

Customer panel is divided into 2 parts:

-   Customer card regrouping the customer’s information
-   Shipping and Invoice address
-  Private customer note

**Customer card** displays :
-  **the email on a “mailto” link**
- **date of the account registered**
- **valid orders placed on a black background**
-  **total spend since registration on a black background.**

**Shipping and Invoice address**

Each adress has **button** to update or change it. The button opens a popin where the information can be edit.

Below the drop list, **the selected address** is displayed with an Edit **button.**

**The button redirects to the edit address page of the selected address**. After saving any edit of the fields of the address form, **the user is redirected on the order** that he was editing in the first place.

**Private customer note**  is displayed on the **plus button**. It shows the private customer note, that can be edited.

## III.  **Messages panel**

Bellow the customer panel, you have the messages panel.

**Only the 4 last messages** private or public are displayed showing **the sender’s name, delivery’s date and the content’s message. The private message** is labelled with **“Private”** next to the sender’s name.

Bellow the messages diplayed, the user can **Chosose a standard message** to send. **all predefined messages** of the **order messages page** is available to select the message to prefill **the message input text**. By default, there is no prefilled message so the droplist shows “-”. The link named **"configure predefined messages ->"**  below the droplist is available to open on a new browser's tab **the order messages page** to access to the predefined messages.

After selecting the droplist selection, the prefilled text is still editable.

**A checkbox** is available to choose **between sending a message to the customer or write a private message hidden from the customer.**

After customizing the prefilled message, writing the message from scratch or using the prefilled message, the user can send it by clicking on **Send message**. It sends the email and adds the message on the front-office on the message section of **the order historic page and an email** as presented on the screenshots below.

![](https://lh4.googleusercontent.com/0-nVYTWDyxyHarwOhYdNldXQuFqEmeQZSOPCTDQlKGZUE61MMNAdzWTr9OfwTuVpHo96HFrolW5fqFW3wMATHcr5D8DWheqA_XtSw8f1sj5WufOvoWTBvHFxgH3yZdxcXbuqXTu2)

![](https://lh5.googleusercontent.com/NwxZQo_IdH-k4wS-e3xc2H53psP1v0buHPw4GUUoA9PomLHRz21y6XoWSdjj5YwPF_Zd6zIYWmrRj15Ro8FmRke99LvatL2PgFcmTFcL-eMmL-VCsZXAdTsxuXuJb2nZXtkPtDSO)

**To see all the past messages**, there is the possibility to click on the left of the send message button on **View full conversation** to open on a new browser's tab **the customer service page of the customer**.

## IV.  **Product panel**

Bellow the action button on the right, the product panel displays **the order’s products into the table list** showing:
-  **the product’s image,**
- **product name (composed of the name, combination name and reference),**
- **stock location,** if one of the product has one
- **base price with tax included,**
- **quantity,**
- **available quantity,**
- **total with tax included,**
- **and 2 action button edit and delete.**

**The quantity** is coloured in a dark grey background if there are more than 2 quantities.

**The edit button** allows the user to edit the excluded and included base price and quantity by pressing the **Update button** to save the modification or **Cancel button** to drop it.

**While editing the quantity, the total updates itself** to let know to the user impact price that it will have.

**The Delete button removes the product for the list.**

**A confirmation pop-up appears after clicking on the Update button or on the Delete button.**

At the end of the table list, there are **2 buttons**:

-   **Add a product:** add a row on the table list with a search bar on the product name column with all the fields editable. A drop list can appear below the search bar if the desired product has combinations as on the screenshot below.

![](https://lh5.googleusercontent.com/zQGyJBUOj-VxbicWWn2aUOOJNQuoUkoQLVgNi-rMLUAyd4zLTHaN1IBvDIReBByLX8jeCQxx0E2MgE6l_lo3InD07IXHFI4JDmxmsCOA85rCkVgCAStlfAvsb-OcQ6KkFA1Y1lXc)

-   **Add a new discount**: opens a popin to create your new voucher between the Pourcentage, the Amount (taxes included) and Free shipping type. The vouchers will be added on the table list displaying the discount name, value and the delete button on the top of the summary order. The new discount created is added with the status deactivated on cart rule page with zero quantity.**

[INSERT SCREEN]

**If the order status is considered as paid**, eitheir on adding a product or adding a discount adding, the user as to specify on **which generated invoices it will be applied.**

The bottom of the product panel resume in a list all the order:

-   **Products total with taxes excluded**
-   **Total shipping**
-   **Taxes**
-   **Total** in black background

On the left, a warning is displayed to warn the user that **for this customer group, prices are displayed as Tax excluded** and **that Merchandise returns are disabled.**

## V. Tabs panel

All the tabs are located in the same panel bellow the products list.

1.  **Status tab**
    

The table **list of the latest order status** is displayed composed:

-   **The status with associated colored**
-   **date and hour**
-   **The editor**
-   **Button to resend the email to the customer**

On the bottom, a drop list of all the status available is shown to update the current status through the **button Update Status** next to it. Updating the order status will trigger all the actions set by the order status as invoice generation.

2.  **Documents tab**

The document tab **regrouped all the document** as invoices and delivery slips **in a table**. The table displays **the date, document type, reference and the amount.** The reference is a clickable link to download the document.

Each table’s rows as 2 possible **button actions**:

-   **Enter payment: it redirects to the payment panel to fill the transaction.**
-   **Add note/Edit note: it displays a text input that can be saved or cancel. The saved note will be integrated into the related document.**

**If there is no document**, **a button is available to generate an invoice** with all the information saved so far in the order.


3.  **Shipping tab**

The carrier table shows **the date, the carrier, the weight, the shipping cost, the tracking number and edit button.**

The edit shipping button on each row can edit the information in a popin. You can edit the text input the tracking number and in the drop list the carrier method.

4.  **Merchandising returns tab**

The merchandise return tab lists the date, the tracking number, the type, Carrier (which is the return status) and the quantity.
When the merchandise return is disable the tab displayed: "no merchandise returned yet"

5.  **Payment panel**

The payment section displays all the transactions made in the order from the payment’s module or the manual inputs.

The table shows **the date and hours, the payment method, the transaction ID, the amount with the currency and the button detail.**

To fill a payment transaction, the user has **to select the date, one payment method from a droplist, the amount and currency then press the add button. The amount** can be a **positive or negative value**.

**A red warning is shown** if the filled amount is inferior or superior of the order’s total comparing the total of the transactions and order’s total.

After adding, the user can display **all the details of the transaction by pressing Detail button**. It will show below the arrow **the number, brand, expiration date and  owner of the credit card** for any payment module.

**If the order’s status** is considered **as paid then before adding a transaction** the user has to specify in **which generated invoices from a droplist** it will be added.

When the status accepted (waiting for payment) you can change the currency of the order with a drop list.
