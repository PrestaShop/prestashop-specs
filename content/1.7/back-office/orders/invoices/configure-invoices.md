---
title: Invoices Configuration
weight: 1
---

# SELL > ORDERS > INVOICES

![Invoices](static/img/orders-invoices.png)

This UI displays the Invoices configuration page and allows to generate the appropriate PDF invoices.

## Top UI elements

- **Multistore switching dropdown** - allows navigating through the available Multistores.
- **View my shop and icon** - allows opening the Front-Office in the blank new page by clicking this eye icon link. Redirection leads to the homepage of the Mulsitstore.
- **Breadcrumbs navigation** - identifies the page level.
- **Invoices** - H1 class title for the page.
- **Help ghost CTA** - a side-bar with the helpful information, how to navigate in this page.

## By date section

This UI block provides ability to download the PDF invoices of the selected range of time. After the download, the invoices are displayed page by page in single document, if there are multiple PDF invoices.

- **Calendar icon and title By date** - title of the UI block
- **From and tooltip _i_ icon** - once hovered, the tooltip is with the white-colored text in the dark box _Format: 2011-12-31 (inclusive)_.
- **To and tooltip _i_ icon** - once hovered, the tooltip is with the white-colored text in the dark box _Format: 2011-12-31 (inclusive)_.
- **Date picking widget inputs with the calendar icons** - once clicked on the date numbers, there will be a date picking widget pop-up.
- **Generate PDF file by date CTA** - once clicked, the PDF download will be executed.

## By order status section

This UI block provides ability to download the PDF invoices of the selected order statuses. After the download, the invoices are displayed page by page in single document, if there are multiple PDF invoices.

- **Clock icon and title By date** - title of the UI block
- **From and tooltip _i_ icon** - once hovered, the tooltip is with the white-colored text in the dark box _You can also export orders which have not been charged yet._
- **Checkboxes, square icons with red or green backgrounds, and numeric values in the squares, Order status names** - the square background color indicates if there are some invoices in total counted for the certain Order status - square with green background. Or there are no incvoices in total for the certain Order status - red square. The **total number of the invocies** are displayed in the squares.
