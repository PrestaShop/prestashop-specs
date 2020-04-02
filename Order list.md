# SPECS LISTING ORDER PAGE


## 1.    When there is 0 commandes

The empty state card appears ONLY when there is no value (by default or created). It can also reappear IF the merchant decides to remove every existing value in the table.

https://projects.invisionapp.com/share/5FRLCBENAS4#/screens/358670592

## 2.    Header

In the header, there is "Add new order" button allowing to open the form to create a manual order.

## 3.    Top of the listing

### Settings wheel
When clicking on it, 4 options are displayed:
1) Export

After clicking on it, the list is exported in CSV format.
The export takes into account filters and sorts that have been done

2) Import

After clicking on it, the is a redirection to the import page in advanced parameters

3) Show SQL query

After clicking on it, the sql query is displayed in a modal. The SQL query takes into account filters and sorts that have been done.

There are two buttons:
- Close: After clicking on it, the modal is closed
- Export to SQL Manager: After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

4) Export to SQL Manager

After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

### Bulk actions drop-down

This dropdown is enabled only if many orders are selected, otherwise it's disabled.

There are 2 options:

1) **Change the order status**

After clicking on it, a modal opens and displays a drop-down list of order statuses.

Pressing the button "Updates status" will apply the status on the selected orders.

2) **Open in a new tabs**

Opens the selected order in new tabs.

### Select all checkbox

After checking the box, all the products displayed on the page are selected or unselected.

## 4. Listing

### Columns

There are 10 columns:
- **ID**: it's possible to sort by id asc or desc and search by id

When the mouse hovers over command, the symbol of the drop-down list is displayed on the right of the id. 

![image](https://user-images.githubusercontent.com/43613217/63580582-6feb4780-c595-11e9-92c1-50c534e91103.png)

 
When the user clicks only the down arrow, it will display the order preview. The order preview is composed of the invoice details information, shipping details, information, Carrier details information (Carrier name + Tracking ID when available) and the product list. 
The opened order line becomes blueish.

![Capture d’écran 2019-10-16 à 10 35 46](https://user-images.githubusercontent.com/27484094/66902352-d1152180-f000-11e9-8214-5a24c7cc8653.png)

The product list displays on each line the product name, reference, stock location, quantity, taxes price and total price for the product.
The total price follows the customer group configuration. If the customer group displays with or without tax will, it impacts the amount in the total column and add the related label "tax ecluded" or "tax included".

The list can only be displayed for a maximum of 10 products. 
If the order contains more than 10 products, the remaining products are counted and displayed in the "..." button (X more)" button at the end of the list. 
By pressing the button, the remaining products are displayed.

Clicking on another preview list will close the previous one to open the one selected.

The preview has to be easily customizable for modules and specifics development


- **Reference**: the merchant can only search on this column

- **New client (Yes/No)**: it's possible to filter between the new (Yes) and the old client (Yes)

- **Delivery**: it's possible to filter by Country

- **Customer (Customer First and Last name)**: it's possible search or to sort by alphabetic order

- **Total**: The total is diplayed with tax included in the currency paid by the customer. it's possible to sort it by asc or desc or to search a specfic amount.

- **Payment**: it's possible to sort by quantity asc or desc and search by quantity min & max

- **Status**: it's possible filter by the status.

When the mouse hovers over command, the symbol of the drop-down list is displayed in the label of the status of the command next to the status name.
When the user clicks anywhere on the label the drop-down list, all statuses is displayed.
Selecting one of the order statuses updates the order status with the one selected.

- **Date**: it's possible to sort the date by asc or desc or select a specific period.

- **Actions**: it's possible to view, download the invoice and delivery slip.

### Search

Below, the same behavior as others listing:

By default, the search button is disabled. It becomes enabled when something is filled in a search field.

After clicking on "Search", the search is applied and the products matching with the search are displayed

After clicking on "Search", this button is disabled and a "Reset" button is displayed.

After clicking on "Reset", the search is removed and all products are displayed.

### Actions

- View: Opens the order

- Invoice: Download the lastest order's invoice.

- Delivery Slip: Download the latest order's delivery slip

### Links

- Customer: clicking on the customer opens in a new tab the customer page. 

## 5. Multistore

When "all shops" is selected, all the orders should be displayed from all the shops.  A "shop" column is filled in by the shop where the order was made.

When a group of shops is selected, only the orders belonging to the shops of this group are displayed.

When a specific shop is selected, only the orders belonging of this shop are displayed.

