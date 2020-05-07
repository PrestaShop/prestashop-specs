Orders > Orders > Add new order

As a merchant, I want to be able to manually add an order on my back-office.
Creating a new order is divided in 6 steps:

- Customer selection with his/her old orders and carts
- Order cart
- Vouchers
- Address
- Payment and status configuration

## I. Customer selection

To selected the customer, the merchant has to type any character chain that is contained in customer's first name, last name or email. 

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

**Carts tab** displays table with the customer's cart ID, date and total tax included sorted by ID in descending order.

**Orders tab** displays table with the customer's order ID, date, total paid tax included or excluded (depending of group configuration), payment method and status sorted by ID in descending order.

Each old cart and order can be previewed by pressing on the **Details button** or used as a base for the new order by pressing the button **Use**. The **Use button** clears all fulfilled inputs and selected options to replace them with the data from the old cart or order.

ADD SPECIFIC ON WHAT IS CLEARED AND REPLACED

**Change button** can be pressed at anytime in the order creation. It displays **the search bar and "Add new customer" button** to select an new customer in a new blank order (clears all fulfilled inputs and selected options).

## II. The order cart

After selecting the customer, the merchant can configure his customer cart.
A search bar is displayed to add product in the cart. The search returns one product that is the closest to the product name or reference.

If the product has combintaions, it displays **all the combination available inside a droplist**. 
Before adding the product in a cart, the user has to fulfill the desired quantity (by default the quantity is set to 1). 

Below the input, a label displays the product stock.

Pressing the button **"Add to cart" button**, adds the product into the product table below the button.

**The product table** displays for each product, the product image, description, reference, base price without tax, quantity and total price without tax.
Each product line has a **"Remove button"** to delete the product from the cart, when the product is added through the add to cart button.

**Warning "price are without taxes" is displayed** below the product table.

**The base price and the quantity are editeable.** 

The base price modification edits in the last configured currency and updates the total multipliant

If the quantity fulfilled is higher than the stock quantity, an error warning is displayed: "There are not enough products in stock". 
If the edited value is negative, it displays an error: "Positive product quantity is required".

A edition in base price or quantity updates the total by multiplying the base price by the quantity.

**In the cart block, the marchant can configure the order currency and language. By default, the language and the currency are set from the shop default language and the shop default currency.**

The currency dropdown converts the base price and the total price in the product table in the new currency. If the base price was edited before converting the currency, it converts the base price from the edited base price.

## III. Voucher

When creating a manual order in the back-office, the merchant can :
- Add products to sell or product already sold 
- Add cart rules associated with the cart 
- Define all elements of the order (address, order status, type of payment, etc.)

Some specific cases can occur and need to be detailed, especially when gift products included in cart rules are added to the  cart.

Below are listed all different behaviours :


**- Adding a cart rule with conditions that the cart does not reach**

When trying to add a cart rule to the manually created order, there should be a check on the conditions of this cart rule. If the current cart does not reach the expected conditions, there should be an error message stating that the order does not reach the required amount to use this voucher.


**- Adding a cart rule with a classic discount (amount or percentage or free shipping)**

When adding a cart rule with a discoun or free shipping voucher, there is no impact on the cart but a new line is added in the Cart rule block with information about the voucher :
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

When a voucher effect is "Free Gift" + something else (Free shipping, Amount discount or percent discount), the voucher should be displayed only once, with the value information adding all discounts together. For instance, if the voucher offers a 10€ discount (tax included) + a free product with a 5€ unit value (tax included), then the value column of the voucher should display 15€.

In the meantime, the gifted product is automatically added to the cart with base price and price replaced with “Gift” (just as in the scenario above). 

It is not possible to remove it directly from the cart. There is no “Remove” button for gift products. It is only possible to remove it by removing the associated cart rule.

 
**- Adding several cart rules with always the same gift product**

In the same manual order, when adding several vouchers that offer the same product (with same combinations) as a gift, there should be only one line for the product with the quantity updated with all gifted products. It works the same way as in the cart details (when choosing an already existing cart)
 
Base price and prices are replaced with “Gift”. 

When removing a voucher, it should remove one quantity from the products.
It is not possible to remove the product directly from the cart. There is no “Remove” button for gift products. It is only possible to remove it by removing the associated cart rule.

It is not possible change the quantity (increase / decrease) of a product when all units are gift products. 

 
**- Adding a gift product which is already available as a paid product in the cart**

Example : adding the "Best is yet to come Mug" once as a paid item, and four times as a gift (with 4 different vouchers). 
Current situation (bug) : There is one line for each mug in the cart, with a quantity set to "5" each time, instead of being set to "1" for each. When I create the order, the total quantity for the mug is OK (5 products, and not 25).

All identical products (same product with same ID, exact same combinations) should be put together even though some are paid, some other are free. In the end, when transforming the cart in order, all products are grouped together. 

In the cart when reducing the quantity it should remove only paid products. It means if for a product there are 3 quantities in the cart with 1 product being paid and 2 offered as gifts, the merchant should only be able to reduce one quantity related to the paid product. To remove free products, he should remove the related vouchers. 

There is no remove button for products which have both paid and gift units. To remove the product, the merchant has to remove all cart rules related to gift products, and then remove the paid product.

The price should be calculated by summing all values together. For example if there is one product being paid (price 10€), and 2 products offered, then the final indicated price should be 10€.
 
 
**- Adding a paid product which is already available as a gift product in the cart**

Example : If I already have a gifted product in my cart (with quantity "1"), and I want to add the same product but paid this time. This scenario can only occurs if I already had a product in my cart.
Current bugs : 
- when I try to add the same product, but paid, an error is displayed "Same product quantity is already in cart" and nothing is added.
- If I have two gifted products (same product), and then I try to add the same product, but paid, the two gifted product are replaced by only one gifted product (and no paid product).

Expected behaviour : the same behaviour as above should occur :”All identical products (same product with same ID, exact same combinations) should be put together even though some are paid, some other are free. In the end, when transforming the cart in order, all products are grouped together.”

This means that when adding a product which is already in the cart, this should add one quantity to the product, and change the price accordingly.

Same scenarios when removing products / vouchers and changing quantities.
 
 
**- Deleting a paid product**

Deleting a paid product is very easy, a Remove button is available to remove one or several quantities of a paid product. 
Current bug : if I delete the paid product, it will also delete the gifted product (the voucher is still displayed). The deletion should only delete the paid product.

If I have a paid product, and the same product, but gifted, in my cart, I should not have a Remove button available on the product line. The remove button only appears when there is no longer gift products on the same product line.
 
 
**- Deleting a gift product**

You are not allowed to delete a gift product from the cart, it’s only possible by removing the associated cart rule.

## IV. Order's Addresses 

The Addresses block displays 2 droplists: for the delivery adress and for the invoice.
The droplist displays all the adresse related to the customer. 


3) Add a customer
You can add a customer if you click on the button "add a customer". It will open an iframe. If you create a customer here then you will have a page to create an order where the customer created is selected (check step The customer that you chose is highlighted in green)


## V. Payment and status configuration

#### Describe the bug

When the user chooses a payment method, the create order page assigns an automatic status defined by a hard-coded list in the code. When the payment module was not associated with a status in the create order page, the status "payment accepted" is assigned by default.

#### Expected behaviour


The default value of the payment method in the droplist is "Choose a payment method" or empty value (wording still to be defined). When the user selects a payment method, it does not affect the list. 
The default value of the status droplist is "Choose a status" or empty value (wording still to be defined). 
So to create the order, the user has to select an order status. An error message is thrown if the user has not chosen a status or payment method.


