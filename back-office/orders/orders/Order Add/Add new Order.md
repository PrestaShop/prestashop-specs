Orders > Orders > Add new order

As a merchant, I want to be able to manually add an order to my back-office.
Creating a new order is divided into 6 steps:

- Customer selection with his/her old orders and carts
- Order cart
- Vouchers
- Address
- Payment and status configuration

## I. Customer selection

To select the customer, the merchant has to type any character chain that is contained in the customer's first name, last name, or email. 

If there is no match between the search and the results, **a warning notification “No customers found” is displayed**.  

**Add new customer button** next to search input opens the page **Add new customer** in case the customer does not exist in the merchant database.

The search can return multiple customers.
Each matching customer is **displayed on a card** with the customer's :

- first name,
- last name,
- ID, 
- email, 
- date of birth.

The card's footer has 2 buttons: 

- **Details button** that redirects the merchant to the customer page. 
- **Choose button** that allows the merchant to proceed to the next step. It selects the customer for the Order and highlights his/her card in green. **The search bar and "Add new customer" button** are not displayed anymore. **Choose button** is changed into **Change button**.

**Choose button** displays the **50 latest orders and carts** into 2 tabs. The tabs are displayed by default and can be hidden by pressing the **arrow**.

**Carts tab** displays a table with the customer's cart ID, date, and total tax included sorted by ID in descending order.

**Orders tab** displays a table with the customer's order ID, date, total paid tax included or excluded (depending on group configuration), payment method, and status sorted by ID in descending order.

Each old cart and order can be previewed by pressing on the **Details button** or used as a base for the new order by pressing the button **Use**. The **Use button** clears all fulfilled inputs and selected options to replace them with the data from the old cart or order.

ADD SPECIFIC ON WHAT IS CLEARED AND REPLACED

**Change button** can be pressed at any time in the order creation. It displays **the search bar and "Add new customer" button** to select a new customer in a new blank order (clears all fulfilled inputs and selected options).

## II. The order cart

After selecting the customer, the merchant can configure his customer cart.
A search bar is displayed to add a product to the cart. The search returns one product that is the closest to the product name or reference.

If the product has combinations, it displays **all the combinations available into a droplist**. 
Before adding the product to a cart, the user has to fulfill the desired quantity (by default the quantity is set to 1). 

Below the input, a label displays the product stock.

Pressing the button **"Add to cart" button**, adds the product to the product table below the button.

**The product table** displays for each product, the product image, description, reference, base price without tax, quantity, and total price without tax.
Each product line has a **"Remove button"** to delete the product from the cart when the product is added through the add to cart button.

**Warning "prices are without taxes" is displayed** below the product table.

**The base price and the quantity are editable.** 

If the quantity fulfilled is higher than the stock quantity, an error warning is displayed: "There are not enough products in stock". 
If the edited value is negative, it displays an error: "Positive product quantity is required".

An edition of the base price or the quantity updates the total by multiplying the base price by the quantity.

**In the cart block, the merchant can configure the order currency and language. By default, the language and the currency are set from the shop default language and the shop default currency.**

The currency dropdown converts the base price and the total price in the product table in the new currency. If the base price was edited before converting the currency, it converts the base price from the edited base price.

## III. Voucher

When creating a manual order in the back-office, the merchant can :
- Add products to sell or product already sold 
- Add cart rules associated with the cart 
- Define all elements of the order (address, order status, type of payment, etc.)

Some specific cases can occur and need to be detailed, especially when gift products included in cart rules are added to the cart.

Below are listed all different behaviors:


**- Adding a cart rule with conditions that the cart does not reach**

When trying to add a cart rule to the manually created order, there should be a check on the conditions of this cart rule. If the current cart does not reach the expected conditions, there should be an error message stating that the order does not reach the required amount to use this voucher.


**- Adding a cart rule with a classic discount (amount or percentage or free shipping)**

When adding a cart rule with a discount or free shipping voucher, there is no impact on the cart but a new line is added in the Cart rule block with information about the voucher :
- The voucher name
- The voucher description
- The value of the discount (tax included)

 
**- Adding a cart rule with a gift product (different than products already in the cart)**

When adding a cart rule with a free product that is different than products already available in the cart, the newly created cart rule is displayed in the voucher block with a few information :
- The voucher name
- The voucher description
- The initial price of the product (tax included)

The gifted product is also automatically added to the cart with base price and price replaced with “Gift”. 
It is not possible to remove it directly from the cart. There is no “Remove” button for gift products. It is only possible to remove it by removing the associated cart rule.

 
**- Adding a cart rule with a gift product + discount on the cart**

When a voucher effect is "Free Gift" + something else (Free shipping, Amount discount, or percent discount), the voucher should be displayed only once, with the value information adding all discounts together. For instance, if the voucher offers a 10€ discount (tax included) + a free product with a 5€ unit value (tax included), then the value column of the voucher should display 15€.

In the meantime, the gifted product is automatically added to the cart with base price and price replaced with “Gift” (just as in the scenario above). 

It is not possible to remove it directly from the cart. There is no “Remove” button for gift products. It is only possible to remove it by removing the associated cart rule.

 
**- Adding several cart rules with always the same gift product**

In the same manual order, when adding several vouchers that offer the same product (with the same combinations) as a gift, there should be only one line for the product with the quantity updated with all gifted products. It works the same way as in the cart details (when choosing an already existing cart)
 
Base price and prices are replaced with “Gift”. 

When removing a voucher, it should remove one quantity from the products.
It is not possible to remove the product directly from the cart. There is no “Remove” button for gift products. It is only possible to remove it by removing the associated cart rule.

It is not possible to change the quantity (increase/decrease) of a product when all units are gift products. 

 
**- Adding a gift product which is already available as a paid product in the cart**

Example: adding the "Best is yet to come Mug" once as a paid item, and four times as a gift (with 4 different vouchers). 
Current situation (bug): There is one line for each mug in the cart, with a quantity set to "5" each time, instead of being set to "1" for each. When I create the order, the total quantity for the mug is OK (5 products, and not 25).

All identical products (same product with the same ID with the same combinations) should be put together even though some are paid, some others are free. In the end, when transforming the cart in order, all products are grouped together. 

In the cart when reducing the quantity it should remove only paid products. It means if for a product there are 3 quantities in the cart with 1 product being paid and 2 offered as gifts, the merchant should only be able to reduce one quantity related to the paid product. To remove free products, he should remove the related vouchers. 

There is no remove button for products that have both paid and gift units. To remove the product, the merchant has to remove all cart rules related to gift products and then remove the paid product.

The price should be calculated by summing all values from the paid products together. For example, if there is one product being paid (price 10€), and 2 products offered, then the final indicated price should be 10€.
 
 
**- Adding a paid product which is already available as a gift product in the cart**

Example: If I already have a gifted product in my cart (with quantity "1"), and I want to add the same product but paid this time. This scenario can only occur if I already had a product in my cart.
Current bugs : 
- when I try to add the same product but paid, an error is displayed "Same product quantity is already in cart" and nothing is added.
- If I have two gifted products (same product), and then I try to add the same product but paid, the two gifted products are replaced by only one gifted product (and no paid product).

Expected behavior: the same behavior as above should occur:” All identical products (same product with the same ID and the same combinations) should be put together even though some are paid, some others are free. In the end, when transforming the cart in order, all products are grouped together.”

This means that when adding a product that is already in the cart, this should add one quantity to the product, and change the price accordingly.

Same scenarios when removing products/vouchers and changing quantities.
 
**- Adding a cart rule with free shipping**

If I add to the order a free shipping cart rule (with code) limited to a specific carrier, then the cart rule should be automatically removed if the specific carrier isn't selected anymore.

If I select a carrier associated with a free shipping cart rule without code, then the voucher should be added automatically to the order when the carrier is selected. And should be automatically removed when the carrier isn't selected anymore.

The value of the voucher should be the same as the value of the carrier (if the carrier is concerned by the cart rule). 
Example:
Carrier A = 10€
Carrier B = 15€
Cart rule = free shipping for if carrier A or carrier B is selected
If I select carrier A, then the voucher value is 10€
If I select carrier B, the voucher value is 15€
 
**- Deleting a paid product**

Deleting a paid product is very easy, a Remove button is available to remove one or several quantities of a paid product. 
Current bug: if I delete the paid product, it will also delete the gifted product (the voucher is still displayed). The deletion should only delete the paid product.

If I have a paid product, and the same product, but gifted, in my cart, I should not have a Remove button available on the product line. The remove button only appears when there are no longer gift products on the same product line.
 
 
**- Deleting a gift product**

You are not allowed to delete a gift product from the cart, it’s only possible by removing the associated cart rule.

## IV. Order's Addresses 

The Addresses block displays 2 droplists: for the delivery address and for the invoice.
The droplist displays all the addresses related to the customer. 

**Editing an address**

Once an address has been associated with a completed order (created by the user from the Back-Office or the Front-Office), the association can never be changed. If a customer decides to change the address for his new order while in his old orders the invoice was addressed to his old address, then changing it will potentially change the address of these old orders while the destination was correct at that time. To avoid impacting the old addresses when editing the address, the software will follow the following rules:

- When the user edits an address, PrestaShop checks if it has been associated yet with an order, if it's not the address is regularly edited. 

- If the merchant tries to edit an address (invoice or delivery) already associated with an order, PrestaShop detects that and instead of editing directly the existing address, it copies the existing address, applies the new modification, and reassigns the order's delivery or invoice address with the newly created address, while the former one is saved and soft-deleted (marked as "deleted" in the database). The soft-delete will allow old orders to keep the old address meanwhile the new order will only see the new defined address.

- When delivery and invoice addresses are the same and the merchant edits one of them, both of them will be edited.

**Add new address**

Below the addresses, there is a button “add new address” that allows the user through pop-in of the address to add a new address. Once the new address is saved, the address is added into the addresses droplist for the address of the delivery and the invoice. 

## V. Shipping 

The merchant can select the carrier through the drop-down. 
The shipping price is displayed according to the carrier selected and the free shipping toggle. 
A free shipping toggle is displayed. By default free shipping is disabled. If it's enabled then, the shipping price is set 0,00. 

If the gift wrapping option is enabled in Shop parameters > Order settings, then a toggle "Gift wrapping" and a field "Gift wrapping message" are displayed.
If the recycled packaging option is enabled in Shop parameters > Order settings, then a toggle "Recycled packaging" is displayed.

Enabling the gift wrapping or the recycled packaging will display the corresponding label on the order view page (cf V. Tabs panel).

## VI. Order's Summary

### Total summary 

This final section shows you all the final product price (the sum of the product prices only tax excluded), total vouchers (the sum of the discounts accorded to the order tax excluded), total shipping (total shipping price taxes excluded), total taxes, total with taxes excluded and the total with taxes included.

### Order message
The merchant can add a message to the order. After the creation, the message is displayed in the "Messages" panel of the order detail page as a private message: with a dark background and the specific icon for the sender pic.

Invalid characters are: <>{}
When you save, if your order message contains an invalid character, an error notification should be displayed “The order message given is invalid”.

### Send an email to the customer with the link to process the payment

This button allows sending an email to the customer with the link to process the payment
It's not related to the payment method selected.
The link opens the front-office with the cart corresponding to the order created.

### Payment and order status

The default value of the payment method and the status drop list in the droplist is "-- Choose --". 

So to create the order, the user must select an order status and a payment method. An error message is thrown if the user has not chosen a status or payment method: "PLease, select an item in the list".
