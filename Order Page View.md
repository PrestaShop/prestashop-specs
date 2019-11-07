
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

Some new specifications for the new design are in progress but to avoid any features regressions. We need to specify the whole behaviour of this page to make it easier to compare the new scenario and avoid any new bugs and regressions.

**Related issue**:

[https://docs.google.com/spreadsheets/d/1wfwQRJ28cXQmhGDZcW05RpD12HZ2Em3_bVvR1r9_m_k/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1wfwQRJ28cXQmhGDZcW05RpD12HZ2Em3_bVvR1r9_m_k/edit?usp=sharing)

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

The user access to the order view page by either clicking on **the order’s row** or **the view button**.

**Generic page operation - Order view**

On the header, we have **the order’s reference, customer’s name, total price in black background, the date and the hour**.

## I. **Action panel**

**Bellow the panel’s header**, we have all the order's action button:

-   **Update the order status**
-   **Print order button**
-   **View invoice show button**
-   **View delivery slip button**
-   **Partial refund button**
-   **Standard Refund**
-   **Return products button**
-   **Resend confirmation order**
-   **Cancel button**

1.  **Update the order status**

The current status is displayed by default on the droplist. It can be changed by selecting the new order's status from the droplist after validating the confirmation button.

2.  **Print order button**

Opens the Print page of the browser with the order’s content.

[pdf file result 1/2](https://invis.io/YKTGGFZAMCB#/386350135_Order_Details_-_Print_Order_1)

[pdf file result 2/2](https://invis.io/YKTGGFZAMCB#/386350136_Order_Details_-_Print_Order_2)

3.  **View invoice show**

If the current or new order status as **the generation of the invoice activated,**  **the button is shown or** the user generates it manually.

When the user clicks on the button, it downloads the invoice.

4.  **View delivery slip**

If the current or new order status as **the generation of the delivery slip** then **the button to download the delivery slip is shown.**

5.  **Partial refund button**

If the current or new order status of order considered **as paid** then **the button is shown.** After clicking on the button, then the product table will take the full width of the page. The user can edit the refund amount by product and also the shipping cost. He must select the quantity of the product concerned for the refunded and then write refund amount chosen by product rows. The maximum refundable amount is written bellow all the amount input in tax included.

**Before the validating a partial refund,** the user can choose to re-stock or generate a voucher by checking the checkboxes.

When the status "Refunded" is applied to the order, the refund amount is decuted to the total spended by the customer since registration and the number of valid orders placed decreases by 1. 

[Partial Refund screen](https://invis.io/YKTGGFZAMCB#/385922519__Order_Details_-_Partial_Refund)

**After the validation a partial refund,** a new column is added with quantity previously selected and the amount entered.

6.  **Return products button**

If the current or new order status of order considered **as shipped and the merchandising return is activated,**  **the button is shown. If the user clicks the button** then table product change as for Partial Refund. The user can edit the product quantity to be returned by entering the number or by checking the checkbox to select all the quantity. If the user chooses the checkbox, the input is prefilled the quantity.

[Return Product screen]

**Before validating the return products**, the user can choose to re-stock generate, to generate a voucher or generate a credit slip by checking the checkboxes or Repay shipping costs.

7.  **Resend confirmation order**

By clicking on the button, it resends the email confirmation order after validating the confirmation popup.

1.  **Cancel products button**

Feature that is going to be removed
~~**The cancel products button on the order action** is shown when **the merchandise return** is activated and **the status is not on payment accepted.**~~

~~A new column is added to the product list to select which product will be cancelled Cancel products. On the bottom right of the products list, the button Products Cancels is available to cancel the selected products.~~

~~The **button deletes** the **selected products** and changes the status as **Cancelled**.~~

~~Below the order actions, the user can manage the order status on **the status tab**, the documents generation and information in **the document tab**, the shipping activities in **the shipping tab** and the returns on **the merchandise returns tab.**~~

~~**Each tab has a notification number of the row’s number of their table.**~~

## II. **Customer panel**

The customer panel displayed on the left of the product list has **the customer’s title, name, last name and customer reference.** To see the full customer description, you can click on **View full details** that redirect to his customer page on another page.

Customer panel is divided into 3 parts:

-   Customer card regrouping the customer’s information
-   Shipping and Invoice address
-   Private customer note

**Customer card** displays :

-   **the email on a “mailto” link**
-   **date of the account registered**
-   **valid orders placed on a black background**
-   **total spend since registration on a black background.**

**Shipping and Invoice address**

Each address has **a button** to update or change it. The button opens a list to select the user wants to edit or update it.

[Edit/Change adresse behaviours](https://invis.io/YKTGGFZAMCB#/386397109_Edit_Adress)

**The edit address redirects to the edit address page of the selected address**. After saving any edit of the fields of the address form, **the user is redirected on the order** that he was editing in the first place.

And **change address** opens the popin that allows the user to choose the new address form a droplist.

[Popin - Change address](https://invis.io/YKTGGFZAMCB#/382686482__Order_Details_-_Change_Adress)

**Private customer note** is closed by default when it is empty and open bu default when filled. To add a note when it is empty, the user has to click on the + button and has to press on the save button to save it.

[Customer private note](https://invis.io/YKTGGFZAMCB#/386397644_Private_Note_Behavior)

## III. **Messages panel**

Bellow the customer panel, you have the messages panel. **The total of the exchanged messages** is displayed next to the panel's title.

**Only the 4 last messages** private or public are displayed showing **the sender’s name, delivery’s date and the content’s message. The private message** is displayed with a dark background and a specific icon for the sender pic.

[Messages Panel](https://invis.io/YKTGGFZAMCB#/378991321__Order_Details)

Bellow the messages displayed, the user can **choose a standard message** to send. **all predefined messages** of the **order messages page** are available in a droplist to select the message to prefill **the message input text**. By default, there is no prefilled message so the droplist shows “-”. The link named **"configure predefined messages ->"** below the droplist is available to open on a new browser's tab **the order messages page** to access to the predefined messages.

After selecting the droplist selection, the prefilled text is still editable.

**A checkbox** is available to choose **to write a private message hidden from the customer.**

Customizing the prefilled message, writing the message from scratch or using the prefilled message, the user sends it by clicking on **Send message**. It sends the email and adds the message on the front-office on the message section of **the order historic page and an email** as presented on the screenshots below.

**To see all the past messages**, there is the possibility to click on the right of the send message button on **View full conversation** to open on a popup.

[Message History](https://invis.io/YKTGGFZAMCB#/386399527__Order_Details_-_Message_History)

## IV. **Product panel**

Bellow the action button on the right, the product panel displays **the order’s products into the table list** showing:

-   **the product’s image,**
-   **product name (composed of the name, combination name and reference),**
-   **stock location,** if one of the product has one
-   **base price with tax included,**
-   **quantity,**
-   **available quantity,**
-   **total with tax included,**
-   **and 2 action button edit and delete.**

**The list displays 20 products before starting the scrolling**
**The quantity** is coloured in a dark grey background if there are more than 2 quantities.

**The edit button** allows the user to edit the excluded and included base price and quantity. If the user edit an amount in the input without taxe it will insert the amount plus the product taxes in the input with taxe automatically. And vice versa, if the user edit an amount in the input with taxe it will insert the amount less the product taxes in the input without taxe.

The merchant is warn if he edits the price of product with a specific price or an catalog price rule.
![Warning on the edition of a product with specific price](/img/Warning_on_the_edition_product_specific_price_catalog.jpg)

**While editing the quantity, the total updates itself** to let know to the user impact price that it will have.
The **Update button** to save the modification or **Cancel button** to drop it.

**The Delete button removes the product for the list.**

**A confirmation pop-up appears after clicking on the Update button or the Delete button.**

At the end of the table list, there are **2 buttons**:

-   **Add a product:** add a row on the table list with a search bar on the product name column. If the desired product has combinations, a drop list can appear below the search bar. After selecting the product, the user can edit if needed the base price tax excluded or tax included and the quantity. The quantity input is an input type number that decreases the available quantity when the user increases the quantity. If the quantity selected is higher than the stocks, available quantity label becomes red. The product is added in the product table and to the order after **pressing on the add button** if the there is enough quantity otherwise a warning error is shown (except if the stock parameter allows to sell without stocks).

[Add a product old design but the same behaviours](https://github.com/PrestaShop/prestashop-specs/blob/master)

-   **Add a new discount**: opens a popin to create your new voucher between the Pourcentage, the Amount (taxes included) and Free shipping type.

[Popin add discount](https://invis.io/YKTGGFZAMCB#/381874231__Order_Details_-_Add_Discount)

The vouchers will be added on the table list displaying the discount name, value and the delete button on the top of the summary order. The new discount created is added with the status deactivated on cart rule page with zero quantity.

[Carts rules list](https://invis.io/YKTGGFZAMCB#/385922052__Order_Details_-_Discounts_Applied)

**If the order status is considered as paid**, either on adding a product or adding a discount adding, the user as to specify on **which generated invoices it will be applied.**

The bottom of the product panel resume in a list all the order:

-   **Products total with taxes excluded**
-   **Total shipping**
-   **Discount** if there is any cart rule applied 
-   **Wrapping** if there is wrapping option in the order
-   **Taxes**
-   **Total** in black background

Below the totals, a warning message is displayed to warn the user that **for this customer group, prices are displayed as HT** or **for this customer group, prices are displayed as TTC** depending on the customer group setting and also **that returns are disabled.** when the merchandise return is disabled on the merchandise returns page.

## V. Tabs panel

All the tabs are located in the same panel bellow the products list.

1.  **Status tab**

The table **list of the latest order status** is displayed composed:

-   **The status with associated coloured**
-   **date and hour**
-   **The editor**
-   **Button to resend the email to the customer**

On the bottom, a drop list of all the status available is shown to update the current status through the **button Update Status** next to it. Updating the order status will trigger all the actions set by the order status.

2.  **Documents tab**

The document tab **regrouped all the document** as invoices and delivery slips **in a table**. The table displays **the date, document type, reference and the amount.** The reference is a clickable link to download the document.

Each table’s rows as 2 possible **button actions**:

-   **Enter payment**: it redirects to the payment panel to fill the transaction with the invoice preselected.
-   **Add note/Edit note**: it displays a text input that can be saved or cancel. The saved note will be integrated into the related document.

**If there is no document**, **a button is available to generate an invoice** with all the information saved so far in the order.

3.  **Shipping tab**

The carrier table shows **the date, the carrier, the weight, the shipping cost, the tracking number and edit button.**

[Shipping tab](https://invis.io/YKTGGFZAMCB#/381874233__Order_Details_-_Shipping)

The edit shipping button on each row can edit the information in a popin. You can edit the text input the tracking number and in the drop list the carrier method.

[Edit shipping details](https://invis.io/YKTGGFZAMCB#/381874230__Order_Details_-_Shipping_-_Edit)

The label "Wrapping gift" and "Recycled packaging" are only shown when the feature are present in the order.
![Wrapping and recycled packing are included in the order](/img/wrapping_recycled_on.png)

4.  **Merchandising returns tab**

The merchandise return tab lists **the date, the tracking number, the type, Carrier (which is the return status) and the quantity**. When the merchandise return is disabled the tab displayed: "no merchandise returned yet".

5.  **Payment panel**

The payment section displays all the transactions made in the order from the payment’s module or the manual inputs.

The table shows **the date and hours, the payment method, the transaction ID, the amount with the currency and the button detail.**

To fill a payment transaction, the user has **to select the date, one payment method from a droplist, the amount and currency then press the add button. The amount** can be a **positive or negative value**.

**A red warning is shown** if the filled amount is inferior or superior of the order’s total comparing the total of the transactions and order’s total.

After adding, the user can display **all the details of the transaction by pressing the Detail button**. It will show below the arrow **the number, brand, expiration date and owner of the credit card** for any payment module.

**If the order’s status** is considered **as paid then before adding a transaction** the user has to specify in **which generated invoices from a droplist** it will be added.

When the status accepted (waiting for payment) you can change the currency of the order with a drop list.
