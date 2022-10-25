---
title: Merchandise Returns edit
weight: 1
---

# SELL > Customer Service > Merchandise Returns > Edit

[Merchandise Returns Editing](static/img/customers-service-merchandise-returns-edit.png)

This functionality ables to make a return action of purchased goods via Prestashop. It is described as _Return Merchandise Authorization (RMA)_. All the Editing page UI elements are described below.

## Table contents UI and functionalities

- **Customer** - the details of the customer - first and last name, and link to the Customer profile.
- **Order** - the exact date when order was created by the customer, as well as link to the exact order in Order page.
- **Customer explanation** - input text area, where customer can provide big amount of text as explanation to the Prestashop administrators.
- **Status** - several statuses, used to give the udpate to the applying customer. All the statuses are mentioned below.
- **Products** - the list of products in the return package displayed in a listing UI. There are _Reference_, _Product name_, _Quantity_, and _Action_ listing column names. 
- **Returns form** - specific PDF invoice document, showing the details about the request of the return, appears for downloading, only when the customer requests for a return of the goods, and the Prestashop merchant sets the Status of return to _Waiting for package_. The PDF contains Billing and Delivery Address, message, that Prestashop has logged the return request, the deadline when the package must be returned, return number, date. Items to be returned list, reference, quantity, following conditions declarations, if the conditions are not met.

### Statuses

The statuses are the following: 
- **Waiting for confirmation** - the status is set by default at the first action, when customer requests a return. 
- **Waiting for package** - the status, indicating that the Prestashop merchant is waiting for the returning pack from the customer. Once the status is changed, the customer gets notificaiton about the status change.
- **Package received** - the status, indicating that the Prestashop merchant has received the returning pack from the customer. Once the status is changed, the customer gets notificaiton about the status change.
- **Return denied** - the status, indicating that the Prestashop merchant is denied the returning pack from the customer. Once changed, the customer gets notificaiton about the status change.
- **Return completed** - the status, indicating that the Prestashop merchant has completed the return case of the pack from the customer. Once changed, the customer gets notificaiton about the status change.

## CTA buttons

- **Cancel** - cancels all the Edit UI, redirects to the Merchandise Return list.
- **Save** - saves the single Merchandise Return Editing configuration.
- **Delete** - deletes the product from the return list package.

## Notifications messages after form submission in UI

- If the editing of the return is successful - once updating the return status - the UI will be prompted with the message:<br>
_Successful update._
- If there is a deletion attempt from the Return Package list, when only 1 item is in the list, the UI will be prompted with the message:<br>
_You need at least one product._

## Multistores compatibility

Merchandise Editing functionality is separately maintained by each separate multistore shop. It means, that all the Merchandise Returns and Orders are managed separately in each multistore, by switching the Multistore Switcher to the appropriate shop. _All Shops_ view context is also available, it is comfortable to see all the Merchandise Returns in one list from all the shops.
