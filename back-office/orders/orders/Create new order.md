Orders > Orders > Add new / edit order

As a merchant, when I want to add an Order manually in my Shop.
Creating a new order is divided in 6 steps:

- Customer selection with his/her old orders and carts
- Order cart
- Vouchers
- Address
- Payment and status configuration

## I. Customer selection

To selected the customer, the merchant has to type any character chain that is contained in customer's first name, last name or email. 

If you don’t find a customer on the search, **a warning notification “No customers found” is displayed**.  

**Add new customer button** next to search input opens the page **Add new customer** in case the customer does not exist in the merchant database.

The search can return multiples customer.
Each matching customer is **displayed on a card** with the customer's :

- first name,
- last name,
- ID, 
- email, 
- date of birth.

The card's footer has 2 buttons: 

- **Details button** that redirected the customer page. 
- **Choose button** that allow the merchant to proceed to the next step. It selects the customer for the Order and highlight his/her card in green. **The search bar and "Add new customer" button** are not displayed anymore. **Choose button** is changed into **Change button**.

**Choose button** displays the **50 lastest orders and carts** into 2 tabs. The tabs are displayed by default and can be not displayed by pressing the **arrow**.

**Carts tab** displays table with the customer's cart ID, date and total tax included sorted by ID in descending order.

**Orders tab** displays table with the customer's order ID, date, total paid tax included or excluded (depending of group configuration), payment method and status sorted by ID in descending order.

Each olds carts and orders can be previewed by pressing on the **Details button** or used as a base for the new order by pressing the button **Use**. The **Use button** clears all fulfilled inputs and selected options to replace them with the data from the old cart or order.

!!!!ADD SPECIFIC ON WHAT IS CLEARED AND REPLACED!!!!

**Change button** can be press at anytime in the order creation. It displays **the search bar and "Add new customer" button** to select an new customer in a new blank order (clears all fulfilled inputs and selected options).

## II. The order cart

After selectiong the customer, the merchand can configure his customer cart.
A serach bar is displayed to add product in the cart. The search returns one product that is the closest to the product name or reference.

If the product has combintaion, it displays **all the combination available into a droplist**. 
Before adding the product in a cart, the user has to fulfill the quantity wanted (by default the quantity is set to 1). 

Below the input, a label displays the product stock.

Pressing the button **"Add to cart" button**, add into the prodcut table below the button.

**The product table** displays for each product, the product image, description, reference, base price without tax, quantity and total price without tax.
Each product line has a **"Remove button"** to delete the product from the cart.

**Warning "price are without taxes" is displayed** below the product table.

**The base price and the quantity are editeable.** 

The base price modification edits in the last configured currency and updates the total multipliant

If the quantity fulfilled is higher than the stock quantity, an error warning is displayed: "There are not enough products in stock". 
If the edited values is negative, it displays an error: "Positive product quantity is required".

A edition in base price or quantity updates the total by multiplying the base price by the quantity.

**In the cart block, the marchant can configure the order currency and language. By default, the language and the currency are set from the shop default language and the shop default currency.**

The currency dropdown converts the base price and the total price in the product table in the new currency. If the base price was edited before converting the currency, it converts the base price from the edited base price.

## III. Voucher

search bar
add new voucher
voucher tabe (nae, description value and delete button)

## IV. Order's Addresses 

- Dropdown 
- Edit 
Add new address
Here you can define addresses for delivery and invoice  
And even create a new address thanks to an iframe of the page addresses>add new 

3) Add a customer
You can add a customer if you click on the button add a customer. It will open an iframe. If you create a customer here then you will have a page to create an order where the customer created is selected (check step The customer that you choosed is highlighted in green )
