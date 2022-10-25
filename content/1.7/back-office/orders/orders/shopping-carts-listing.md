---
title: Shopping Carts listing
weight: 1
---

# ORDERS > SHOPPING CARTS

![Shopping Carts UI](static/img/orders-shopping-cart.png)

The page stores all shopping carts created by clients of the PrestaShop's user, that were generated during the checkout process.

## 4 KPI calculation UI

- **Conversion Rate** - it is an icon, title, date, and the number of days with the percentage displayed. It indicates, how many Shopping Carts were generated during specific time range. The value is displayed in percentage.
- **Abandoned Carts** - it is an icon, title, 2 and 3 days time range of passed days, and numeric value displayed. It indicates, how many Abandoned Shopping Carts were generated throught the period of time. Note, that clicking on this KPI indicator, Prestashop filters out and shows only Abandoned Carts in listing table.
- **Average Order Value** - it is an icon, title, date, and the average sum with the main currency displayed. It indicates, what is the average sum of Orders in the  specific period of time. The numeric result is displayed dividing total revenue by the total number of orders placed, at that period.
- **Net Profit per Visitor** - it is an icon, title, date and the average sum with the main currency displayed. It indicates the net profit per visitor numeric value, dividing the total revenue by the total number of visitors in site.

## Top of the table UI

- **Shopping Carts** 
- **Numeric value** - total sum of shopping carts identified.
- **Export icon** - when clicked, a file is generated with all **displayed** carts from the data list in CSV format.
- **Refresh** - once clicked, the whole page reloads to display the latest data.

## Table Filtering UI

- **ID** - input field, once validated, the shopping cart's ID matching the input will be displayed. If there is none then the table will not display any value. By default the input is blank empty.
- **Order ID** - input field, once validated, the Order's ID matching the input will be displayed. By default the input is blank empty.
- **Customer** - input field, once validated, the Customer's first name letter and full last name will be displayed. By default the input is blank empty.
- **Total** - text field, once validated, the value is displayed. It is displayed as a total sum of all the items in the appropriate currency, that is being purchased. By default, there are double dashes displayed.
- **Carrier** - input field, once validated, the Carrier's name matching the input will be displayed. By default the input is blank empty.
- **Date** - input form, once validated, the Date matching the input will be displayed. Setting the date "From" to "To", will retrieve the appropriate date range information of the Shopping Carts. By default, the date range is blank empty.
- **Online** - dropdown display, once validated, the Yes or No matching the input will be displayed. Once the Guest visitor is visiting the Prestashop Front-Office, and adding items to the Shopping Cart, the value then switches to Yes. By default, the indicator is in blank empty state.
- **Shop** - filtering is not available, but the whole column is listed with the Shop names for each Shopping Cart, if there are several multistores configured.
- **Search CTA button** - The search works either pressing the enter button or pressing this button. Once clicked, the filtering criteria is executed.
- **Reset CTA button** - Once the search has been executed, the return page shows the Reset button. Clicking this button removes the filtering function from the table.

## The body of the Table UI

The Shopping Cart entries in this table are generated while doing item purchasing steps both in Front-Office and Back-Office, after clicking the Add to Cart button in the Prestashop. The entries are generated using Visitor, Guest and Customer profiles.

- **ID of Shopping Cart** - Numeric field - Each time a cart is created, the ID is incremented by 1 from the last created ID.
- **Abandoned cart** - if the Cart is not validated through the last checkout step, and the Order is not created, the Cart is statused as Abandoned, and the status becomes _Abandoned Cart_ without any Order ID number.
- **Non ordered** - if the Cart is not validated through the last checkout step, and the Visitor, Customer or Guest had added item to cart recently, but did not finish to process the order, it becomes as _Non ordered_ labelled. 
- **Customer name and last name** - If the Cart is created by Guest User, there won't be first and last name in the Shopping Cart then the filed displays '--'.  If there is registered client then field displays the name and last name of the client.
- **Total sum of Cart** - Shows the total amount of the Shopping Cart in currency of the cart.
- **Carrier** - if the user has reached the Carrier step in the Checkout, then it displays the chosen Carrier in the Shopping Cart item. If not "--" is displayed.
- **Date** - the exact time stamp, when the Cart was created.
- **Online** - If the customer is online then it displays 'Yes', otherwise it displays 'No'.
- **Shop** - if multistores are enabled, it shows shop where the shopping cart was created.
- **Actions button** - If the cart is an "abandoned Cart" or an "non ordered" cart, then the cart can be displayed and deleted. If the cart has turned into an order, then the cart can only be displayed. 

## The bottom of the Table UI

### Bulk Actions UI

![Bulk Actions in Shopping Cart](static/img/orders-shopping-carts-bulk-actions.png)

Bulk Actions has the following functionalities:


- **Select All** - selects all the shopping carts, that are Abandoned or Non ordered only.
- **Unselect All** - Unselects all the shopping carts in the list.
- **Delete selected** - deletes the selected shopping carts.

### Pagination elements UI

The pagination can be selected both in showing the Shopping Carts listed in the table or navigating through the Shopping Cart pages. Shopping Cart lists can be displayed as 20, 50, 100, 300 and 1000 at one viewport screen.

## Export carts

**Export carts** - CTA button located in the top-right of the page. After clicking, it generates and downloadd a CSV file. This CSV file contains all the Shopping Cart data, except Multistore title, from the table UI.

## Notifications after form submissions

After deleting the single Shopping Cart row, using the dropdown View > Delete, the success notification is prompted:<br>
_Successful deletion._

After using the Bulk Actions successful Cart deletion, the success notification is prompted:<br>
_The selection has been successfully deleted._

After using the Bulk Actions unsiccessful Cart deletion, the failure notification is prompted:<br>
_You must select at least one element to delete._

## Multistore functionality in Shopping Carts

Shopping Carts are stored separately in separate Prestashop multistore databases, so the generated Carts are differently listed in other Multistores and Shop Groups.
