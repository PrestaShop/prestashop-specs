---
title: Order Messages
weight: 1
---

## SELL > CUSTOMER SERVICE > Order Messages

![Order Messages](static/img/order-messages.png)

This UI shows the list of messages, that were sent by webshop customer, who created an Order.

## Top UI section

- **Multishop switcher** - it is an ability to switch the available multistores while being on the current Order messages editing page, and to view the shop Front-Office homepage by redirection.
- **Add new order message CTA button** - this button, with plus icon (+), initiates the redirection to a new page, where a separate Order message creation form is displayed.
- **Breadcrumbs, page title, Recommended modules and Help CTA's** - default Prestashop UI in the top position, helping administrators to improve the navigation - to view the current Title of the page, see the level of the navigation. 

## Top Order messages section elements

- **Title of the section** - includes the title and the total number of available entries - those are displayed in brackets.
- **Gear icon** - it is a Gear style icon in the corner - top-right position of the section. This icon has a short rotation animation once clicked. Clicking on this icon, leads to dropdown block:
  - **Refresh list** - the link with the rotation style icon. It refreshes the whole page.
  - **Show SQL query** - the link with double left-right arrows. It prompts the SQL query popup.
  - **Export to SQL Manager** - the link with server icon. It redirects to **Prestashop SQL Manager**.

- **Bulk actions dropdown** - it is disabled by default, once there is a Order message element selected, Bulk actions become enabled. The only action is **Delete** action, by clicking **Delete selected** dropdown. After clicking **Delete**, the pop-up with confirmation text will appear named _Delete selection Are you sure you want to delete the selected item(s)?_ and two buttons - one ghost button to **Cancel** the action and red CTA button to **Delete** the desired entry. Delete confirmation _Successful deletion._ appears right after clicking the **Delete**, and pop-up closes right after clicking the **Close** button.

## Arranging action in section

There are **ID**, **Name**, **Message** arragement column titles on the top row of the table. Once those column titles are clicked, the table column will arrange the information using the A-Z and 1-9 scheme, then Z-A and 9-1 method will be shown on second click. This functionality is not affecting **Actions** column title click.

- **ID** - unique indentificator of the entry. Arrange the list by ID.
- **Name** - entry name description text. Arrange the list by Name.
- **Message** - the message text content displayed.

## Filtering actions in section

- **Search ID field** - a text input field with the placeholder _Search ID_, inputting number, clicking Search CTA, will filtrate the numeric results.
- **Search name** - a text input field with the placeholder _Search name_, inputting letters, clicking Search CTA will filtrate the appropriate name result.
- **Search CTA** - by default the button is disabled. Once there is something typed in the Filtering fields, the button becomes active. After clicking the button, the search results will be returned in the table. If there are no results found, there will be a black triangle icon with with a white exclamation mark displayed in table, and a small description above _No records found_. X icon and _Reset_ near Search CTA indicates about resetting the search.

## The content element in section

- **Checkbox** - entry marking element.
- **Number** - unique number of the entry.
- **Name** - unique name displayed.
- **Message** - individual entry description or name text displayed.
- **Pen icon** - clicking redirects to the edition page of the element entry.
- **Three-dot menu** - clicking shows dropdown with the option **Delete**, which leads to the deletion action. After clicking **Delete**, the pop-up with confirmation text will appear named _Delete selection Are you sure you want to delete the selected item(s)?_ and two buttons - one ghost button to **Cancel** the action and red CTA button to **Delete** the desired entry. Delete confirmation _Successful deletion._ appears right after clicking the Delete, and pop-up closes right after clicking the Close button.
