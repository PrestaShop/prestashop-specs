---
title: Bank transfer
weight: 1
---

### Call to action

1) Back 

When pressed redirect back to the module manager [Modules > Module manager]({{<ref "../back-office/modules/module-manager/_index.md">}} "View module manager")).

2) Translate

When pressed, a pop-up opens with a drop-down, from which it is possible to select one of the languages installed on the shop to translate the module.

3) Check update

Checks for updates on the module.

4) Manage hooks

When pressed redirects to the [Design > Positions]({{<ref "../back-office/design/positions/view-positions.md">}} "View positions")).

The module has 3 sections for configurations:

# Account details

3 Fields are presented in this section:

1) Account owner

This is a mandatory input field for the name of the account owner. Leaving it blank, when trying to save will show an error: "Account owner is required.".

2) Account details

This is a mandatory input field for the name of the account owner. Leaving it blank, when trying to save will show an error: "Account details are required.".
Has a help text below: "Such as bank branch, IBAN, BIC/SWIFT code, etc.".

3) Bank address 

This is a mandatory input field for the name of the account owner. Leaving it blank, when trying to save, should show an error but is not (See issue [#28351](https://github.com/PrestaShop/PrestaShop/issues/28351)).

### Call to action

 - Save, if all the fields are entered correctly, will show a message: "Settings updated". If any of the fields are input incorrectly, the error message will show what is wrong when saving.

# Customisation

3 Fields are presented in this section:

1) Reservation period

Input field for the reservation period, has a help text below: "Number of days the items remain reserved". When saving with input as anything apart from numbers should show an error [#28354](https://github.com/PrestaShop/PrestaShop/issues/28354).

2) Customer information

Input field for the customer infomration. Has a help text below: "Information on the bank transfer (processing time, starting of the shipping...)".

3) Display the invitation to pay in the order confirmation page

This is a toggle switch, by default it is set to "Yes". Has a tooltip: "Your country's legislation may require you to send the invitation to pay by email only. Disabling the option will hide the invitation on the confirmation page.".

### Call to action

 - Save, if all the fields are entered correctly, will show a message: "Settings updated". If any of the fields are input incorrectly, the error message will show what is wrong when saving.
