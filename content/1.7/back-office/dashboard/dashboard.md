---
title: Dashboard 
weight: 1
---

# Dashboard

The dashboard is the default homepage of the back office, it gives a summary of the shop's daily activities and main statistics at a glance.
The dashboard is divided into 4 main areas: a horizontal bar, and three columns.

## Demo mode

 - **Demo mode**: This toggle allows to enable or disable fake data. By default, it is disabled. When enabled,  fake data are used. When disabled, the real store's data are used. The store's data are gathered by PrestaShop's statistics system.
The following tooltip is displayed: "This mode displays sample data so you can try your dashboard without real numbers."

## Horizontal bar

At the top of the Dashboard, a single bar allows choosing the period of time for the currently displayed dashboard statistics. The following options are available:

 - **Day**: The current day
 - **Month**: The current month
 - **Year**: The current year (selected by default)
 - **Day-1**: The previous day
 - **Month-1**: The previous month
 - **Year-1**: The previous year

Choosing an option updates all the blocks of content that are on the Dashboard so that they display data for the chosen period of time only. Blocks that are not stats-based do not change.

### Date range selection

On the right, a date picker allows selecting a precise date range. By default, the date range depends on which time frame is selected. 

After the calendar is extended, 2 fields "from" and "to" for date ranges are displayed. In order to choose a period of time, you can either click the first and last date of that period in the calendar or type the dates in the YYYY-MM-DD format in the text boxes.

Two periods of time can be compared together by checking the "Compare to" box. 
Once checked, the second period can be selected either through the same 2 fields "from" and "to" or through the drop-down allowing to select:
 - Previous period
 - Previous year
 - Custom

If a personalized range is indicated in the "from" and "to" fields, then the option "custom" is automatically selected in the drop-down.

When comparing two periods, some of the content blocks will update to indicate the evolution of the data.

If the selected dates are incorrect, the following error message is displayed: "The selected date range is not valid."

### Call to action

2 buttons are located at the bottom:
 
 - **Cancel** - Closes the tab and keeps the previous selection.
 - **Apply** - Closes the tab and displays the result for the selection.

## Columns

By default there are 8 fields in the dashboard:
There are 2 columns in the dashboard: 

- the left column: this column presents the data from the Dashboard Activity module
- the central column: there are three blocks of content in this column, which are handled by modules
- the right column: this column presents a "PrestaShop upgrade" block 

## Central column

### Dashboard (Dashboard Trends module)

## Call to action

On the top right of this field there are 2 buttons:

 - **Configure** - redirects to the "Average bank fees per payment method" page.
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

## Left column

### Activity overview (Dashboard Activity module)

#### Call to action 

On the top right of this block there are 2 buttons:

 - **Configure** - when pressed, changes the activity overview to a configuration block with the following field:
    - **Active cart** - drop down field with options: 15, 30, 45, 60, 90, 120.
    - **Online visitors** - drop down field with options: 15, 30, 45, 60, 90, 120.
    - **Abandoned cart (min)** - input field measured by "d".
    - **Abandoned cart (max)** - input field measured by "d".
    - "Save" button, when pressed - reverts back to the dashboard activity block.
 - **Refresh** - refreshes the stats of the Activity Overview block.

Below the following metrics are displayed:

 - **Online visitors**
 - **Active shopping carts**
 - **Currently Pending**
    - **Orders** - when pressed reditrects to the Orders page.
    - **Return/Exchanges** - when pressed, redirects to the Merchandise Returns page.
    - **Abandoned Carts** - when pressed, redirects to the Shopping Carts page.
    - **Out of stock products** - when pressed, redirects to the Monitoring page.
 - **Notifications**
    - **New Messages** - when pressed, redirects to the Customer Service page.
    - **Product Reviews** - when pressed, redirects to the Configure page.
 - **Customers & Newsletters (Displays the time frame which is enabled)**
    - **New customers** - when pressed, redirects to the Manage your Customers page.
    - **New subscriptions** - when pressed, redirects to the Stats page.
    - **Total subscribers** - when pressed, redirects to the Configure page.
 - **Traffic (Displays the time frame which is enabled)**
    - **Link to your Google Analytics account** - when pressed, redirects to the Module manager page.
    - **Visits** - when pressed, redirects to the Stats page.
    - **Unique visitors** - when pressed, redirects to the Stats page.
    - **Traffic Sources** - below shows the sources by which the shop is reached, a circle graph below visualizes the statistics.

## Lower central column 

### Forecast

Displays the year that the forecast is showing.

#### Call to action

Firstly 2 buttons are displayed:
     
 - **Arrow to the left** - when pressed, displays the forecast one year back.
 - **Arrow to the right** - when pressed, displays the forecast one year up front.

On the right of the block there are 2 buttons: 

 - **Configure** - when pressed, the forecast graph turns to exact numbers of: year, traffic, conversion rate, average cart value, sales.
 - **Refresh** - refreshes the stats of the Forecast.

Below there are 4 different colors metric buttons that can be pressed to display the wanted graph accordingly below:

 - **Traffic**
 - **Convesrion**
 - **Average Cart Value**
 - **Sales**

Below the graph shows graph of data by month and numbers.

## Central column below 

### Products and Sales

#### Call to action

 - **Configure** - when pressed the tab changes to a configuration where it's possible to edit the view of the products and sales, 4 fields are displayed:
   - **Number of "Recent Orders" to display** - drop down field with the options: 5, 10, 20, 50.
   - **Number of "Best Sellers" to display** - drop down field with the options: 5, 10, 20, 50.
   - **Number of "Most Viewed" to display** - drop down field with the options: 5, 10, 20, 50.
   - **Number of "Top Searches" to display** - drop down field with the options: 5, 10, 20, 50.
   - "Save", when pressed, reverts to the previous product and sales dashboard.
 - **Refresh** - refreshes the stats of the Products and Sales.

Below there are 4 buttons that can be chosen:

 - **Recent orders** - when this option is selected, below the last 10 orders are displayed. Options displayed with this selection. Also every order has a search button at the right side of every field, when pressed redirects to the order.
    - **Customer name** - when pressed on a customers name, will redirect to the page - Manage your Customers.
    - **Products** 
    - **Total Tax excl.**
    - **Date**
    - **Status**
 - **Best sellers**
 - **Most viewed** - when this option is selected, by default it will show a message: "You must enable the "Save global page views" option from the "Data mining for statistics" module in order to display the most viewed products, or use the Google Analytics module."
 - **Top searches**

Below there is a button: "Add more dashboard modules", when pressed, redirects to a new page, the marketplace for modules.
