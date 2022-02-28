---
title: Delivery Slips Configuration
weight: 1
---

# SELL > ORDERS > Delivery Slips

![Delivery Slips UI](static/img/orders-delivery-slips.png)

This UI allows to configure the Delivery Slips - download the PDF or manage the additional options.

## Delivery Slips meaning

Delivery Slip is a PDF-typed document in Prestashop, where the delivery information about order is being printed in. 

## Creation of the Delivery Slip

Once the Order is being entered to the Shipped status, the PDF of the Delivery Slip is generated, and it can be downloaded in the Order page. 

## Top UI elements

- **Multistore switching dropdown** - allows navigating through the available Multistores.
- **View my shop and icon** - allows opening the Front-Office in the blank new page by clicking this eye icon link. Redirection leads to the homepage of the Mulsitstore.
- **Breadcrumbs navigation** - identifies the page level.
- **Delivery Slips** - H1 class title for the page.
- **Help ghost CTA** - a side-bar with the helpful information, how to navigate in this page.

## Printer icon and Print PDF block

This block allows to set the desired date range and to download the Delivery Slips one after one in single PDF file.

- **From and _i_ tooltip icon** - setting the date range using the date widget. When the icon is hovered, the tooltip text is _Format: 2011-12-31 (inclusive)_.
- **To and _i_ tooltip icon** - setting the date range using the date widget. When the icon is hovered, the tooltip text is _Format: 2011-12-31 (inclusive)_.
- **Generate PDF Call-to-action** - clicking the button initiates the PDF download process.

## Delivery Slip PDF structure

- **Logo** - top-right logo of the shop.
- **DELIVERY, date and the Delivery Slip name** - delivery slip title, timestamp and factual delivery name, containing latin letters and numbers with hashtag (#) prefix.
- **Shop name**
- **Billing & Delivery Address and the address**
- **Order Reference**
- **Order Date**
- **Carrier**
- **Reference**
- **Product **
- **Qty** - meaning Quantity.
- **Payment Method** - the name payment method.
- **Price amount with the currency symbol**

## Screw icon and Delivery slip options block

- **Delivery prefix with _i_ tooltip icon** - input field, where cusom Delivery Slip charecter prefix can be modified or added. It can be managed with the different languages, using the dropdown with the language list installed in the system. Once hovered on tooltip icon, the text is prompted _Prefix used for delivery slips._
- **Delivery number with _i_ tooltip icon** - input field, where cusom Delivery Slip number can be modified or added. The number entered will mark the beginning number of all Delivery Slip numbers further. Once hovered on tooltip icon, the text is prompted _The next delivery slip will begin with this number and then increase with each additional slip._ Max 19 characters allowed to input.
- **Enable product image with _i_ tooltip icon** - Enable or Disable toggle button, that Enables or Disables displaying product image, in the PDF file. Once hovered on tooltip icon, the text is prompted _Add an image before product name on delivery slip_. By default, the toggle switch is Disabled.
- **Save CTA** - executes the settings saving process.

If the settings update is successful, there will be green notification with the checkmark icon and text _Update successful_.

If the settings update is not successful, because the Delivery number is typed with latin letters or up to 19 characters, there will be an error with red exclamation mark and the text with _This value is not valid._

## Multistores functionality

All the configuration inputs and PDF downloads are separately maintained by separate Multistores, because these settings are saved in different databases. It means, that settings saved in one Multistore will not be reflected in the other ones.
