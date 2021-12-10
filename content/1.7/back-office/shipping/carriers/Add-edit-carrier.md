---
title: Add/edit carrier
weight: 1
---

# General settings (1st step)

## Call to action
 
A call to action button at the top right is displayed:

 - Cancel 
Pressing the button redirects to the [carriers listing]({{<ref "carriers-listing.md">}} "Carriers listing") page.

## Columns

Firstly on the left the logo is displayed. Whena  logo is uploaded, a trash can icon appears on the right of the logo. When trying to delete the logo, message appears: "Are you sure you want to delete the logo?". Pressing "Ok" will remove the uploaded logo, and the default van logo will re-appear in the same place.

On the right side, from left to the right, the steps of adding/editing a carrier are displayed: 

 - 1 General settings
 - 2 Multistore (If multistore is enabled)
 - 3 Shipping locations and costs
 - 4 Size, weight, and group access
 - 5 Summary

Below there 5 fields:

 - Carrier name. This is a mandatory field, when trying to proceed to the next step without inputting this field, shows the message: "The name field is required." When trying to enter invalid symbols to this field, and trying to proceed to the next step, will show the message: "The name field is invalid".
A tooltip is displayed: "Allowed characters: letters, spaces and "().-". The carrier's name will be displayed during checkout. For in-store pickup, enter 0 to replace the carrier name with your shop name."

 - Transit time. This field is mandatory, when trying to proceed to the next step without inputting this field, shows the message: "The field delay is required at least in English (English).". This field can be translated: When several languages are installed, a drop-down next to the field is displayed. It allows choosing in which language the field is displayed and customizing it according to the language. Disabled languages are displayed in the drop-down.
A tooltip is displayed: "The delivery time will be displayed during checkout.".

 - Speed grade. Only one number from 0 to 9 is allowed in this field. Entering an incorrect symbol, shows the message: "The grade field is invalid.". Entering more than 1 symbol in the field will show the following: "The grade field is too long (1 chars max).".
A tooltip is displayed: "Ënter "0" for a longest shipping delay, or "9" for the shortest shipping delay"

 - Logo. A field for uploading the logo. To upload a logo, there is a button on the right of the field named ""Choose a file". Has an explanation below the field: "Format: JPG, GIF, PNG. Filesize: 8.00 MB max. Current size: undefined.". When trying to upload a wrong format, a message will appear: "*Your shop name* says Cannot upload file".
When an image is uploaded, it will appear in the logo field on the left, as well as in every panel of the Carrier Wizard.

 - Tracking URL. Has an explanation below the field: "For example: 'http://example.com/track.php?num=@' with '@' where the tracking number should appear.". 
A tooltip is displayed: "Delivery tracking URL: Type '@' where the tracking number should appear. It will be automatically replaced by the tracking number." The URL should be as displayed in the explanation below, if it's not entered by the explanation, and trying to save will show the message: "The url field is invalid.".

## Call to action
 
 - Previous. If any mandatory field was failed to enter, the button becomes non-pressable. If mandatory fields are correct, takes to the previous page. When in general settings, the button does not take anywhere.
 - Next. If any mandatory field was failed to enter, the button becomes non-pressable. If mandatory fields are correct, takes to he next page.
 - Finish. Non pressable until all the pages mandatory fields are input correctly. When all mandatory fields are input correctly, takes to the [carriers listing]({{<ref "carriers-listing.md">}} "Carriers listing") page.

# Multistore (2nd step, if multistore is enabled)

This tab is shown when multistore is enabled.

The shop association block is displayed when the multistore is enabled and if several shops are configured.

👉 See the [specs of the shop association block]({{<ref "../../multistoregeneralspecs.md#shop-association-block">}} "Shop association block") 

### Call to action
 
 - Previous. If any mandatory field was failed to enter, the button becomes non-pressable. If mandatory fields are correct, takes to the previous page. When in general settings, the button does not take anywhere.
 - Next. If any mandatory field was failed to enter, the button becomes non-pressable. If mandatory fields are correct, takes to he next page.
 - Finish. Non pressable until all the pages mandatory fields are input correctly. When all mandatory fields are input correctly, takes to the [carriers listing]({{<ref "carriers-listing.md">}} "Carriers listing") page.

# Shipping locations and costs (3rd step)
 
### Call to action

A call to action button at the top right is displayed:

 - Cancel 
Pressing the button redirects to the [carriers listing]({{<ref "carriers-listing.md">}} "Carriers listing") page.

## Columns

Firstly on the left the logo is displayed. Whena  logo is uploaded, a trash can icon appears on the right of the logo. When trying to delete the logo, message appears: "Are you sure you want to delete the logo?". Pressing "Ok" will remove the uploaded logo, and the default van logo will re-appear in the same place.

On the right side, from left to the right, the steps of adding/editing a carrier are displayed: 

 - 1 General settings
 - 2 Multistore (If multistore is enabled)
 - 3 Shipping locations and costs
 - 4 Size, weight, and group access
 - 5 Summary

Below there are 6 fields:

 1. Add handling costs. A toggle switch, can be turned to "yes" or "no". By default is set to "no".
A tooltip is displayed: "Include the handling costs (as set in Shipping > Preferences) in the final carrier price."
 2. Free shipping. A toggle switch, can be turned to "yes" or "no". By default is set to "no". When switched to "yes", automatically switches "Add handling costs" to "no", and disables all the input fields for "ranges".
 3. Billing. 2 Checkboxes are present for this section: "According to total price.""and "According to total weight.". 
 4. Tax, this is a drop-down menu, shows all the possible tax rates depending on the countries installed on the shop.
 5. Out-of-range behavior, this is a drop-down menu with the possible options: "Apply the cost of the highest defined range" and "Disable carrier".
A tooltip is displayed: "Out-of-range behavior occurs when no defined range matches the customer's cart (e.g. when the weight of the cart is greater than the highest weight limit is defined by the weight ranges)."

 6. Ranges, this is a table with the tables in this section:
    - "Will be applied when the weight is	>= Kg *by default the input is 0.0000*"
    - "Will be applied when the weight is	< Kg, *by default the input is empty*"
    - "All", has a checkbox, and input field for the currency selected by the shop's default currency. The field is disabled if the checkbox is not marked. When the checkbox is marked, all the currency fields below become checkmarked and enabled."
 
All fields below have checkboxes allowing to enable and complete the fields (only numbers are allowed, inputting any other symbol will result in the field being marked in red). The zones displayed below are the ones that are existing in International > Locations > Zones.

### Call to action 

There is a button below the table "Add new range". When the button is pressed, a new row near the "ranges" appear, the table is the same as 6th field, only the "All" row is not duplicated. With the duplicate table a button "Delete" also appears below it.

 - Previous. If any mandatory field was failed to enter, the button becomes non-pressable. If mandatory fields are correct, takes to the previous page. When in general settings, the button does not take anywhere.
 - Next. If any mandatory field was failed to enter, the button becomes non-pressable. If mandatory fields are correct, takes to he next page.
 - Finish. Non pressable until all the pages mandatory fields are input correctly. When all mandatory fields are input correctly, takes to the [carriers listing]({{<ref "carriers-listing.md">}} "Carriers listing") page.

# Size, weight, and group access (4th step)

## Call to action
 
A call to action button at the top right is displayed:

 - Cancel 
Pressing the button redirects to the [carriers listing]({{<ref "carriers-listing.md">}} "Carriers listing") page.

## Columns

Input fields only accept numbers, when trying to add any other symbols, and trying to proceed to next page, an alert is prompted showing:
"TECHNICAL ERROR:
Details:
Error thrown: [object Object]
Text status: error"
And an option to press "Ok".

 - Maximum package width (cm) an input field, has a tooltip: "Mazimum width managed by this carrier. Set the value to "0", or leave this field blank to ignore. The value must be an integer."
 - Maximum package height (cm) an input field, has a tooltip: "Maximum height managed by this carrier. Set the value to "0", or leave this field blank to ignore. The value must be an integer."
 - Maximum package depth (cm) an input field, has a tooltip: "Maximum height managed by this carrier. Set the value to "0", or leave this field blank to ignore. The value must be an integer."
 - Maximum package weight (Kg) an input field, has a tooltip: "Maximum height managed by this carrier. Set the value to "0", or leave this field blank to ignore."
 - Group access, displays the ID and group name in a table, all of them have a checkmark on the left, by default Vistor, guest and customer has checkmarks checked.
A tooltip is displayed: "Mark the groups that are allowed access to this carrier."
     - Group name, if this field id checkmarked, all the fields get checkmarked or checkmark gets removed.
     - Visitor
     - Guest
     - Customer

## Call to action

 - Previous. If any mandatory field was failed to enter, the button becomes non-pressable. If mandatory fields are correct, takes to the previous page. When in general settings, the button does not take anywhere.
 - Next. If any mandatory field was failed to enter, the button becomes non-pressable. If mandatory fields are correct, takes to he next page.
 - Finish. Non pressable until all the pages mandatory fields are input correctly. When all mandatory fields are input correctly, takes to the [carriers listing]({{<ref "carriers-listing.md">}} "Carriers listing") page.
