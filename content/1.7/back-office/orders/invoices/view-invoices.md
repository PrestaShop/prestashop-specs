---
title: View invoices
weight: 1
---

# Invoices

3 Sections are present in this page

## By date

2 Fields are present in this section:

1) From

This is a field for selecting a date for the invoice, when pressed a calendar appears for choosing the date. By default the current day is shown firstly in the field. Has a tooltip: "Format: 2011-12-31 (inclusive)."

2) To

This is a field for selecting a date for the invoice, when pressed a calendar appears for choosing the date. By default the current day is shown firstly in the field. Has a tooltip: "Format: 2011-12-31 (inclusive)."

### Call to action

 - Generate PDF file by date, when pressed generates the PDF file by date, if on the selected date there were no invoices, will show a message: "No invoice has been found for this period.".

## By order status

This section has a list:

 - Orders statuses, has a tooltip: "You can also export orders which have not been chardet yet.".

Below all the default order statuses are provided, the number count of the invoices for that order status. Every order status has a checkbox, by default none of them are selected, multiple ones can be selected.

### Call to action

 - Generate PDF file by date, when pressed generates the PDF file by status, if on the selected status there are no invoices, will show a message: "No invoice has been found for this status.".

## Invoice options 

12 Fields are present in this section:

1) Enable invoices

This is a toggle switch, by default is set: "Yes". Has a tooltip: "If enabled, your customers will receive an invoice for the purchase".

2) Enable tax breakdown 

This is a toggle switch, by default is set: "No". Has a tooltip: "If required, show the total amount per rate of the corresponding tax.".

3) Enable product image

This is a toggle switch, by default is set: "No". Has a tooltip: "Adds an image in front of the product name on the invoice".

4) Invoice prefix 

This is an input field for the invoice, by default has already an input: "#IN". The field is multinaguage, can be translated to any language that is installed on the shop. Has a tooltip: "Freely definable prefix for invoice number (e.g. #IN00001)."

5) Add current year to invoice number

This is a toggle switch, by default is set: "No". 

6) Reset sequential invoice number at the beginning of the year 

This is a toggle switch, by default is set: "No". 

7) Position of the year date

There are 2 selections in this section, and it's possible to choose only 1:

 - After the sequential number (chosen by default)
 - Before the sequential number

8) Invoice number

This is a number input, by default the input is: "0". Has a tooltip: "The next invoice will begin with this number, and then increase with each additional invoice. Set to 0 if you want to keep the current number (which is #1)."

9) Legal free text

A field for text input. The field is multinaguage, can be translated to any language that is installed on the shop. Has a tolltip: "Use this field to show additional information on the invoice, below the payment methods summary (like specific legal information)."

10) Footer text

Input field for the footer. The field is multinaguage, can be translated to any language that is installed on the shop. Has a tooltip: "This text will appear at the bottom of the invoice, below your company details."

11) Invoice model 

This is a drop-down list, the following options are:

 - Invoice
 - Invoice-b2b

Has a tooltip: "Choose an invoice model.".

12) Use the disk as cache for PDF invoices

This is a toggle switch, by default it is set to "No". Has a tooltip: "Saves memory but slows down the PDF generation.".

### Call to action

 - Save, when pressed, shows the following message: "Update successful".
