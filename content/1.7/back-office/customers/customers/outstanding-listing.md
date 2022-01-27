---
title: Outstanding
weight: 1
---

# SELL > CUSTOMERS > Outstanding

![Outstanding page](static/img/customers-outstanding.png)

This UI is shown after Enabling the _Enable B2B mode_ toggle switch in _CONFIGURE > Customer Settings_ and it allows to track the B2B customer behavior. 

## Configuration of the new B2B input fields in Customer edit page

Once the B2B mode is enabled, new input fields are displayed in the Customer edit page by navigating to _Customers > Customers_ and editing the desired Customer. Customer must be registered in Prestashop himself, of added by Administrator. New input fields are the following:
- **Allowed outstanding amount** - input can be filled with valid characters: 0-9 only. Default value is 0. If characters are typed as latin letters, input erases the wrong text automatically. If there are more than 19 characters in the field, the instant error is displayed below the field - exclamation mark and message _This field is invalid._ 
- **Maximum number of payment days** - limit for Customer purchases in days. Default value is 0.
- **Risk rating** - dropdown with the Risk values. The values appear as labels in the Outstanding listing table in the Risk column. The risk values are the following:
  - None - label appearance is with black text and the green outlined color.
  - Low - label appearance is with the black text and the orange outlined color.
  - Medium - label appearance is with the white text and the red outlined color.
  - High - label appearance is with the white text and the red outlined color.

## Top UI elements of the Outstanding page

- **Outstanding** - page title.
- **Help** - a side-bar with the helpful information, how to navigate in this page.

## Main UI elements of the Outstanding page

### Top table elements

- **Outstanding** - table title with the total sum of outstanding entries.

### Filtering of the Outstanding page

- **Search ID** - input for searching certain entry with ID.
- **Date widget** - allows to filter the entries for certaind time range.
- **Customer** - ability to search and filter the customers.
- **Company** - ability to search and filter the company.
- **Risk** - dropdown element, allowing to arrange the risk priority values, and show only risk-prioritized Outstanding entries.
- **Outstanding allowance** - input for arranging appropriate entries for customers with the Outstanding amount.
- **Current outstanding, Invoice, Actions** - has no filtering function, only titles are displayed.
- **Search CTA button** - once there are no entries from none of the filtering fields, the Search CTA button is disabled, once there are at least one filtering value managed, the button becomes enabled.
- **Reset (X)** - after submission of the Filtering, there are the results shown in the table, together with the Reset and X icon. After pressing X, It resets the Filtering form.

### Table row elements of the Outstanding page

- **ID** - numeric ID value.
- **Date** - input with YYYY-MM-DD HH-MinMin-SecSec format.
- **Company** - customer with the company name.
- **Risk label** - the text with colorized outlined label, defining the Risk level of the entry.
- **Outstanding amount** - the value with the numeric amount and currency prefix.
- **Current outstanding amount** - the value with the numeric amount and currency prefix.
- **Invoice sheet icon** - clicking initiates the download of the PDF invoice file.
- **View lasso icon** - clicking initiates redirection to the Order in Back-Office, that customer has made.

### Pagination of the Outstanding page

- **Page number input** - function that displays the desired page number of the listing, after inputting the number and pressing Enter.
- **Viewing indicator text** - text, indicating what pages the user is seeing.
- **Items per page** - dropdown with the numeric values, how many items can be shown in listing:
  - 10
  - 20
  - 50
  - 100

## Multistores of the Outstanding page

Multistores configuration is affected separately, while using different multistores. The Outstanding adjustments, that are made on 1st Multistore, will not affect the 2nd Multistore. Each Oustanding entries are stored in different Multistores databases.
