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

## Screw icon and Invoice options section

- **Enable invoices and tooltip _i_ icon** - Enables or disables Invoices, once the tooltip is hovered, there is a text in the dark box _If enabled, your customers will receive an invoice for the purchase._
- **Enable tax breakdown and tooltip _i_ icon** - Enables or disables showing the Tax details in the Invoice, once the tooltip is hovered, there is a text in the dark box _If required, show the total amount per rate of the corresponding tax._
- **Enable product image and _i_ icon** - Enables or disables showing the product image in the Invoice, once the tooltip is hovered, there is a text in the dark box _Adds an image in front of the product name on the invoice_.
- **Invoice prefix and tooltip _i_ icon** - input field where specific prefix, for Invoice can be set. The prefix will be displayed in the first characters of the Invocie file name and in the beginning of the Invoice number displayed. Once the tooltip is hovered, there is a text in the dark box _Freely definable prefix for invoice number (e.g. #IN00001)._ There is a dropdown with the arrow-down icon, where the prefix can be set for different languages.
- **Add current year to invoice number** - adds a year to the Invoice number.
- **Position of the year date** - and two radiobutton positions **After the sequential number** and **Before the sequential number** triggers the year date position display in Invoices.
- **Invoice number and tooltip _i_ icon** - input field, where the numeric value can be typed. The typed number will indicate the beginning number of the Invoces numbers arrangement. Once the tooltip is hovered, there is a text in the dark box _If the value is 0, then the arrangement will remain the default. The next invoice will begin with this number, and then increase with each additional invoice. Set to 0 if you want to keep the current number (which is #25)._
- **Legal free text and tooltip _i_ icon** - input field where additional fee explanation text can be added. Once the tooltip is hovered, there is a text in the dark box _Use this field to show additional information on the invoice, below the payment methods summary (like specific legal information)._ Also, different texts for different languages can be saved, by using the language dropdown.
- **Footer text and tooltip _i_ icon** - input field, where footer text can be displayed. Once the tooltip is hovered, there is a text in the dark box _Use this field to show additional information on the invoice, below the payment methods summary (like specific legal information)._ Also, different texts for different languages can be saved, by using the language dropdown.
- **Invoice model and tooltip _i_ icon** - dropdown field, where 2 types of Invoces can be selected - **invoice** or **invoice-b2b**. Once the tooltip is hovered, there is a text in the dark box _Choose an Invoice model._
- **Use the disk as cache for PDF invoices and _i_ icon** - Enable or Disable the function, to use the host capacity to cache the PDF invoices. Once the tooltip is hovered, there is a text in the dark box _Once the tooltip is hovered_Saves memory but slows down the PDF generation._

## Multistores functionality

Each Multistore has its separate webshop databases. It means, one configuration on one Multistore or Shop group will not affect the other Multistore or Shop group.
