---
title: Monitoring
weight: 1
---

## SELL > CATALOG > Monitoring

![Monitoring](static/img/catalog-monitoring-listing.png)

This UI shows the list of features, that needs the attention from administrator.

## Top UI section

- **Multishop switcher** - it is an ability to switch the available multistores while being on the current SEO editing page, and to view the shop Front-Office homepage by redirection.
- **Breadcrumbs, page title, Recommended modules and Help CTA's** - default Prestashop UI in the top position, helping administrators to improve the navigation - to view the current Title of the page, see the level of the navigation. 

## Commercial pop-up block

There is a 808×295.867 pixels pop-up block, right after the Top UI section. The block has a commercial message containing the elements:

- **Closing icon (X)** - once the icon is clicked, the system stores information to Cookies, and the pop-up block is not showing again.
- **Focus on your catalog** - insipartional title of the pop-up block. 
- **The text** says _Empty categories, disabled products, items that lack image or price... check the monitoring section to optimize your products management and make sure you forgot nothing._ 
- **Learn more CTA** - ghost button CTA, linking to a documentation page.

## The names of the sections

There are 7 sections for monitoring purposes. They are:

- **List of empty categories**
- **List of products with combinations but without available quantities for sale**
- **List of products without combinations and without available quantities for sale**
- **List of disabled products**
- **List of products without images**
- **List of products without description and summary**
- **List of products without price**

## Top section elements

- **Title of the section** - includes the title and the total number of available entries - those are displayed in brackets.
- **Gear icon** - it is a Gear style icon in the corner - top-right position of the section. This icon has a short rotation animation once clicked. Clicking on this icon, leads to dropdown **Refresh list** link with the rotation style icon. It refreshes the whole page.
- **Notification** - only List of empty categories section starts with informative blue-box notification with the information icon, with the text saying _An empty category is a category that has no product directly associated to it. An empty category may however contain products through its subcategories._. 

## Arranging actions in sections

There are **ID**, **Reference**, **Name**, **Status**, **Actions** (**ID**, **Name**, **Description**, **Displayed**, **Actions** in the **List of empty categories** section) arragement column titles on the top row of each table. Once those column titles are clicked, the table column will arrange the information using the A-Z and 1-9 scheme, then Z-A and 9-1 method will be shown on second click. This functionality is not affecting **Actions** column title click.

- **ID** - unique indentificator of the entry. Arrange the list by ID.
- **Reference** - unique entry reference. Arrange the list by Reference. (**Name** - in List of empty categories only)
- **Name** - entry name description text. Arrange the list by Name. (**Description** - in List of empty categories only)
- **Displayed** - Enabled toggle button or Disabled toggle button values arrangement. Arrange the list by shown or hidden entries. (**Status** - in List of empty categories only)

## Filtering actions in sections

- **Search ID field** - a text input field with the placeholder _Search ID_, inputting number, clicking Search CTA, will filtrate the numeric results.
- **Search reference** - a text input field with the placeholder _Search reference_, inputting letters, clicking Search CTA will filtrate the appropriate reference results (**Search name** - in List of empty categories only).
- **Search name** - a text input field with the placeholder _Search name_, inputting letters, clicking Search CTA will filtrate the appropriate name results (**Search description** - in List of empty categories only)
- **Blank dropdown** - a dropdown element, having Blank value by default, YES or NO value.
- **Search CTA** - by default the button is disabled. Once there is something typed in the Filtering fields, the button becomes active. After clicking the button, the search results will be returned in the table. If there are no results found, there will be a black triangle icon with with a white exclamation mark displayed in table, and a small description above _No records found_. X icon and _Reset_ near Search CTA indicates about resetting the search.

## The content elements in sections

- **Checkbox** - category marking element which appears if there are more than 1 entries in a list.
- **Number** - unique number of the category.
- **Reference or Name** - unique reference or name displayed.
- **Description or Name text** - individual entry description or name text displayed.
- **Enable or Disable toggle switch button** - by default, the button is Enabled on the entries. It enables showing or hiding the entry in Front-Office. Once the button is clicked, the notification will prompt in the top-right corner of the page UI - _The status has been successfully updated._
- **Pen icon** - clicking redirects to the edition of the element entry (**Magnifier icon** - redirects to the categories editing page - in the List of empty categories only).
- **Three-dot menu** - clicking shows dropdown with the options - **Edit**, which leads to entry editing page and **Delete**, which leads to the deletion action (only **Delete** - in List of empty categories section). After clicking **Delete**, the pop-up with confirmation text will appear named _Delete selection Are you sure you want to delete the selected item(s)?_ and two buttons - one ghost button to **Cancel** the action and red CTA button to **Delete** the desired entry. Delete confirmation _Successful deletion._ appears right after clicking the Delete, and pop-up closes right after clicking the Close button.

## Pagination

The element stands in the bottom of all the sections, if there are more than 10 entries, it helps to edit and navigate through the enormous amount of entries in the table. 

- **First page number value 1** - when there is the 1st page of the table displayed, the number will be greyed, once the user navigates to the further pages, the first number value becomes active.
- **Left arrow (<)** - initiates navigation through pages backwards.
- **Input field** - setting the desired number of page, clicking Enter or somewhere blank on UI, initiates the page changing.
- **Right arrow (>)** - initiates navigation through pages forward.
- **Biggest page number value** - displays the biggest number of pages in table.
- **Viewing {value}-{value} out of {value} (page {value} / {value})** - displays the current indication in page navigation.
- **Items per page** - displays possibility to change the maximum entries to show in one page - **10**, **20**, **50**, **100**.

## Multistores functionality

The listing is displayed separately from all the available Multistores in webshop, because of the separate databases in each Multistore. 
