---
title: Link Widget (Link List)
weight: 1
---

## IMPROVE > DESIGN > Link Widget (Link List)

![Link Widget](static/img/link-widget.png)

This UI shows the Link Widget management UI. It helps to manage and edit various webshop links, that are shown in static Front-Office pages, as well as in Pages section in Back-Office. By default, there is a single Footer widget with the links already installed in the webshop.

## Top UI elements

- **Multishop switcher** - it is an ability to switch the available multistores while being on the current Widget List (Link List) editing page, and to view the shop Front-Office homepage by redirection.
- **Breadcrumbs, Page title, Help CTA** - default Prestashop UI in the top position, helping administrators to improve the navigation - to view the current Title of the page, see the level of the navigation. Page title is **Widget List (Link List)**.
- **(+) New block CTA** - initiates adding a new Widget List (Link List) to the listing.

The widgets are displayed as 2 in a one row. Each widget has its specific UI elements.

## Widget UI elements

### Header of the table

- **Header of the widget table** - it contains the hook name and the table functionality name together, with the numbers in brackets, containing, how much entries are there in the single widget.

### Table column headers

- **ID** - shows all the unique numeric values of the block.
- **Name of the block** - shows all the names of the blocks in a single widget.
- **Shop** - shows all the webshop shop names, separated in comma, if there are multpile.

### Content of the widget

- **Number** - value, indicating the ID.
- **Name of the block** - unique alphabetic value.
- **Shop name** - alphabetic value of the shop names, that are maintained in the webshop.
- **Pen icon** - redirects to the block editing form page.
- **Three-dot menu** - clicking on the dots, the UI shows a dropdown with a **Delete** value. 

### Bottom of the widget

Pagination stands in the bottom of the sections, if there are more than 10 entries, it helps to edit and navigate through the enormous amount of entries in the table. 

- **First page number value 1** - when there is the 1st page of the table displayed, the number will be greyed, once the user navigates to the further pages, the first number value becomes active.
- **Left arrow (<)** - initiates navigation through pages backwards.
- **Input field** - setting the desired number of page, clicking Enter or somewhere blank on UI, initiates the page changing.
- **Right arrow (>)** - initiates navigation through pages forward.
- **Biggest page number value** - displays the biggest number of pages in table.
- **Viewing {value}-{value} out of {value} (page {value} / {value})** - displays the current indication in page navigation.
- **Items per page** - displays possibility to change the maximum entries to show in one page - **10**, **20**, **50**, **100**.

## Multistores functionality

All the Widget block entries and hooks are displayed the same for all the Multistores. 
