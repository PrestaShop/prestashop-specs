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
