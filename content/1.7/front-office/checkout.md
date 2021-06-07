---
title: Checkout
weight: 1
---
# **SPECIFICATIONS - CHECKOUT**


[TO BE COMPLETED]

## Personal information step

**Company.** Optional field displayed if the merchant has enabled the B2B mode in the Shop Parameters > Customers Settings section of the back office. It should **indicate the name of the company** processing the order.

**Identification number.** Optional field displayed if the merchant has enabled the B2B mode in the Shop Parameters > Customers Settings section of the back office. It **stands for the SIRET** of the company.

**Birthdate.** If the merchant has enabled the 'Ask for birth date' option in the Customer Settings > Customers page of the back office, then the customers should be able to see this optional date field during the checkout. A placeholder is here to help customers know how to fill in this field, 'MM/DD/YYYY', and a help text is displayed just below the field to give an example: `(E.g.: %date_format%)` (with the date '05/31/1970' taken as a model) in `Shop.Forms.Help`.

Only numbers and the slash (/) punctuation mark can be typed in the field. Month and day numbers cannot be reversed. Otherwise an error notification is displayed when attempting to save: `Format should be %s.` (with the same date '05/31/1970' taken as a model) in `Shop.Forms.Error`.

**Receive offers from our partners.** If the merchant has set the 'Enable partner offers' option to 'Yes' in the Customer Settings > Customers page of the back office, then the customers should be able to tick or not this checkbox during the checkout.


## Addresses step

[TO BE COMPLETED]


## Shipping method step

If the merchant has enabled the 'Offer recycled packaging' option in the Shop Parameters > Order Settings section of the back office, a checkbox should be displayed in the _Shipping Method_ block of the checkout: `I would like to receive my order in recycled packaging.` in `Shop.Theme.Checkout`. If checked, this information must be added to the final summary, the order confirmation, and the 'order_conf' and 'new_order' emails.


## Payment step

If the store has only one payment method available, this payment method should be selected by default.


## Final summary

If the merchant has enabled the 'Final summary' and 'Offer recycled packaging' options in the Shop Parameters > Order Settings section of the back office, and if the customer has decided to receive his/her order in recycled packaging, it should be mentioned in the _Shipping Method_ block of the final summary: `Recycled packaging` (localized in `Shop.Theme.Checkout`). Cf. _to do_ #[16348](https://github.com/PrestaShop/PrestaShop/issues/16348) issue.


## Order confirmation

If the merchant has enabled the 'Offer recycled packaging' option in the Shop Parameters > Order Settings section of the back office, and if the customer has decided to receive his/her order in recycled packaging, it should be mentioned on the order confirmation page in the front office: `Recycled packaging` (localized in `Shop.Theme.Checkout`) in the _Order Details_ section, just below the shipping method line. Cf. _to do_ #[16348](https://github.com/PrestaShop/PrestaShop/issues/16348) issue.
