---
title: Add edit state
weight: 1
---

# Add edit state

While adding or editing a state, the following fields / drop-down / toggle are displayed:

- **Name** - this field is mandatory. A tooltip for this field is displayed: "Provide the state name to be displayed in addresses and on invoices.". When trying to save and if the field is empty, the following error message is displayed: "The name field is required.".
When trying to save and if the field is invalid, the following error message is displayed: "The name field is invalid.".
 - **ISO code** - this field is mandatory. A tooltip for this field is displayed: "1 to 4 letter ISO code. You can prefix it with the country ISO code if needed.". When trying to save and if the field is empty, the following error message is displayed:  "The iso_code field is required."
 When trying to save and if the field exceeds 4 characters or contains invalid characters, the following error message is displayed:  "The iso_code field is invalid.".
 - **Country** - this drop-down is mandatory. A tooltip is displayed: "Country where the state is located. Only the countries with the option "contains state" enabled are displayed.
 - **Zone** - this drop-down is mandatory. A tooltip is displayed: "Geographical region where this state is located. Used for shipping". 
 - **Status** - this toggle is mandatory. It can be turned to "yes" or "no". By default it is set to: "yes".

## Call to action

 There are 2 buttons at the bottom of this page: 
 - Cancel: redirects to the previous page, cancels any changes.
 - Save: In the case of adding a state, the state is added and a success message is displayed on the listing: "Successful creation.". In the case of editing a state, the state is edited and a success message is displayed on the listing: "Successful update.".
 
## Multistore
 
This page doesn’t have a shop association block. So, the state is added/edited for all shops, no matter the context selected.
The following information message is displayed at the top of this page: "Note that this feature is available in all shops context only. It will be added to all your stores."
