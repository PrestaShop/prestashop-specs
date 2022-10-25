---
title: Dashboard 
weight: 1
---

# Dashboard

The dashboard is the default homepage of the back office, it gives a summary of the shop's daily activities and main statistics at a glance.
The dashboard is divided into 4 main areas: a horizontal bar, and three columns.

## Demo mode

 - **Demo mode**: This toggle allows to enable or disable fake data. By default, it is disabled. When enabled, fake data are used. When disabled, the real store's data are used. The store's data are gathered by PrestaShop's statistics system.
The following tooltip is displayed: "This mode displays sample data so you can try your dashboard without real numbers."

## Horizontal bar

At the top of the Dashboard, a single bar allows choosing the period of time for the currently displayed dashboard statistics. The following options are available:

 - **Day**: The current day
 - **Month**: The current month
 - **Year**: The current year (selected by default)
 - **Day-1**: The previous day
 - **Month-1**: The previous month
 - **Year-1**: The previous year

Choosing an option updates all the blocks that are on the Dashboard, so they display data for the chosen period of time only. Blocks that are not stats-based do not change.

### Date range selection

On the right, a date picker allows selecting a precise date range. By default, the date range depends on which time frame is selected. 

After the calendar is extended, 2 fields "from" and "to" for date ranges are displayed. In order to choose a period of time, you can either click the first and last date of that period in the calendar or type the dates in the YYYY-MM-DD format in the fields.

Two periods of time can be compared together by checking the "Compare to" box. 
Once checked, the second period can be selected either through the same 2 fields "from" and "to" or through the drop-down allowing to select:
 - Previous period
 - Previous year
 - Custom

If a personalized range is indicated in the "from" and "to" fields, then the option "custom" is automatically selected in the drop-down.

When comparing two periods, the blocks on the Dashboard are updated to indicate the evolution of the data.

If the selected dates are incorrect, the following error message is displayed: "The selected date range is not valid."

### Call to action

2 buttons are located at the bottom:
 
 - **Cancel** - Closes the tab and keeps the previous selection.
 - **Apply** - Closes the tab and displays the results for the selection.

## Columns

There are 3 columns in the dashboard: 

- the left column: this column presents the data from the Dashboard Activity module
- the central column: there are three blocks in this column, which are handled by modules
- the right column: this column presents a "PrestaShop upgrade" block 

## Central column

### Forecast (Dashboard Goals module)

This block presents the goals defined for the coming months, and how the shop is doing as compared to them. When hovering the graphic with the mouse, the details are displayed.

#### Call to action

Firstly, 2 buttons to navigate between years are displayed:
     
 - **Previous arrow** - when pressed, the forecast of the previous year is displayed.
 - **Next arrow** - when pressed, the forecast of the following year is displayed.

On the right of the block, 2 buttons are displayed: 

 - **Configure** - Depending on the monthly results, the user can update his forthcoming goals by clicking on this button. When pressed, the forecast graph disappears and a configuration table with the following 5 columns is displayed:
- Months: The 12 months of the year are displayed
- Traffic: The user can update his forthcoming traffic in this field.
- Conversion rate (%): The user can update his forthcoming conversion rate in this field.
- Average cart value (default currency): The user can update his forthcoming average cart value (in the default currency) in this field.
- Sales: This column will be updated according to the goals set in the other columns (for instance, for a 1000 visitors with a 2% conversion rate and a $10 average cart, you would get 1000*(2/100)*10 = $200).
  
 - **Save** -  When this button is pressed, the configuration is saved and the forecast stats are displayed.
 - **Refresh** - refreshes the graphic of the Forecast block.

#### Tabs

4 tabs that can be selected to display the wanted graphic:

 - **Traffic**
 - **Conversion**
 - **Average Cart Value**
 - **Sales**

### Dashboard (Dashboard Trends module)

#### Call to action

On the top right of this block, 2 buttons are displayed:

 - **Configure** - opens a new page where various expenses of the store can be configured, in order to better indicate the trends. [dashboard-configure]({{<ref "dashboard-configure.md">}} "dashboard configure")
 - **Refresh** - refreshes the stats of the shop.

#### Tabs

The following tabs are displayed and can be selected to display the evolution.

 - **Sales** - displays the sales amount in the default currency tax excluded within the date range. A tooltip is displayed: "Sum of revenue (excl. tax) generated within the range by orders considered validated.".
 - **Orders** - displays the number of orders within the date range. A tooltip is displayed: "Total number of orders received within the date range that are considered validated.".
 - **Cart Value** - displays the average cart value in the default currency tax excluded within the date range. A tooltip is displayed: "Average Cart Value is a metric representing the value of an average order within the date range. It is calculated by dividing Sales by Orders.".
 - **Visits** - displays the number of visits within the date range. A tooltip is displayed: "Total number of visits within the date range. A visit is the period of time a user is actively engaged with your website.".
 - **Conversion Rate** - displays the conversion rate in percentage. A tooltip is displayed: "Ecommerce Conversion Rate is the percentage of visits that resulted in an validated order.".
 - **Net Profit** - displays the net profit in the default currency tax excluded. A tooltip is displayed: "Net profit is a measure of the profitability of a venture after accounting for all Ecommerce costs. You can provide these costs by clicking on the configuration icon right above here.".

After selecting a tab, the corresponding graphic is displayed. When hovering the graphic with the mouse, the details are displayed.
Additionally, when comparing two time periods, it displays the evolution of each figure in percentages.

### Products and Sales (Dashboard Products module)

This block presents a table of the latest orders and a ranking of the products: bestsellers, most viewed, and top searches (as searched in the shop's search form, not from search engines).

#### Call to action

   - **Configure** - The user can set the number of items to display in each by clicking on this button.
When pressed, the stats disappear, and 4 dropdowns are displayed:
   - **Number of "Recent Orders" to display** - drop down with the following options: 5, 10, 20, 50. By default the number is set to 10.
   - **Number of "Best Sellers" to display** - drop down with the following options: 5, 10, 20, 50. By default the number is set to 10.
   - **Number of "Most Viewed" to display** - drop down with the following options: 5, 10, 20, 50. By default the number is set to 10.
   - **Number of "Top Searches" to display** - drop down with the following options: 5, 10, 20, 50. By default the number is set to 10.
   - **Refresh** - refreshes the stats of the Products and Sales block.
   - **Save** -  When this button is pressed, the configuration is saved and the product and sales stats are displayed.

#### Tabs

4 tabs can be selected:

 - **Recent orders** - when this tab is selected, a table with the last X orders is displayed (X depends to the number of Recent Orders to display selected in the configuration of this block).
 
In this table, the following columns are displayed:
    - **Customer name** - After clicking on the name, the customer's view page is displayed.
    - **Products** - Displays the number of products of the order
    - **Total Tax excl.** of the order
    - **Date** of the order
    - **Status** of the order
    - A search button at the right of every line is displayed. When pressed, the order detail page of this order is displayed.
   
 - **Best sellers** - when this tab is selected, a table with the following columns are displayed:
    - **Image**
    - **Product** 
    - **Category** 
    - **Total sold**
    - **Sales**
    - **Net profit**
 
 - **Most viewed** - when this tab is selected and if the "Save global page views" option from the "Data mining for statistics" module is disabled, the following message is displayed: "You must enable the "Save global page views" option from the "Data mining for statistics" module in order to display the most viewed products, or use the Google Analytics module."
 
 The following columns are displayed:
 
    - **Image** - The image of the product is displayed.
    - **Product** - The product's name and price is displayed.
    - **Views** - The number of times the product has been viewed is displayed.
    - **Added to cart** - The number of times the product has been added to the cart is displayed.
    - **Purchased** - The number of times the product has been purchased is displayed.
    - **Percentage** - The percentage of how many times the product was bought is displayed.

 - **Top searches** - when this tab is selected, a table with the following columns are displayed:
 
    - **Term**
    - **Search**
    - **Results**

## Left column

### Activity overview (Dashboard Activity module)

#### Call to action 

On the top right of this block there are 2 buttons:

 - **Configure** - when pressed, the activity overview is changed to a configuration block with the following parameters:
    - **Active cart** - drop down with the following options: 15, 30, 45, 60, 90, 120. By default it is set to 30. The tooltip displays: "How long (in minutes) a cart is to be considered as active after the last recorded change (default: 30 min)."
    - **Online visitors** - drop down field with options: 15, 30, 45, 60, 90, 120. By default it is set to 30. The tooltip displays: "How long (in minutes) a visitor is to be considered as online after their last action (default: 30min)."
    - **Abandoned cart (min)** - input field measured by "hrs". By default it is set to 24 mins. The tooltip displays: "How long (in hours) after the last action a cart is to be considered as abandoned (default: 24 hrs)."
    - **Abandoned cart (max)** - input field measured by "hrs". By default it is set to 48 hours. The tooltip displays: "How long (in hours) after the last action a cart is no longer to be considered as abandoned (default: 24 hrs)."
    - "Save" - When this button is pressed, the configuration is saved and the Dashboard Activity is displayed.
 - **Refresh** - refreshes the stats of the Activity Overview block.

Below in a table, these shop parameters are listed below:

 - **Online visitors**
 - **Active shopping carts**
 - **Currently Pending**
    - **Orders** - when pressed, redirects to the Orders list page.
    - **Return/Exchanges** - when pressed, redirects to the Merchandise Returns page.
    - **Abandoned Carts** - when pressed, redirects to the Shopping Carts list page.
    - **Out of stock products** - when pressed, redirects to the Monitoring page.
    
 - **Notifications**
    - **New Messages** - when pressed, redirects to the Customer Service page.
    - **Product Reviews** - It's displayed only if the module product comments is installed and enabled. When pressed, redirects to the Configuration page of the product comments module
    
 - **Customers & Newsletters (Displays the time frame which is enabled)**
    - **New customers** - when pressed, redirects to the Customers list page.
    - **New subscriptions** - when pressed, redirects to the Stats > Newsletter page.
    - **Total subscribers** - when pressed, redirects to the configuration's page of the ps_emailsubscription module
    
 - **Traffic (Displays the time frame which is enabled)**
    - **Link to your Google Analytics account** - when pressed, redirects to the Module manager page.
    - **Visits** - when pressed, redirects to the Stats > Stats dashboard page.
    - **Unique visitors** - when pressed, redirects to the Stats > Visits and visitors page.
    - **Traffic Sources** - the sources from which the shop is reached are displayed in a circle graph below the statistics.
