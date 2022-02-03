---
title: Add edit customer
weight: 1
---

In this page the customer details are input.

# Customer

 1) Social title 
 
 Can be selected: "Mr." or "Mrs."
 
 2) First name

 This field is mandatory, when trying to save with the field empty, will show a message: "please fill out this field.". Below has a help text: "Only letters and the dot (.) character, followed by a space, are allowed.". When trying to save with invalid characters entered, will show an error: "The "First name" field is invalid.".
 
 3) Last name

 This field is mandatory, when trying to save with the field empty, will show a message: "please fill out this field.". Below has a help text: "Only letters and the dot (.) character, followed by a space, are allowed.". When trying to save with invalid characters entered, will show an error: "The "First name" field is invalid.".
 
 4) Email

 This field is mandatory, when trying to save with the field empty, will show a message: "please fill out this field.".
 
 5) Password

 This field is mandatory, when trying to save with the field empty, will show a message: "please fill out this field.".

 6) Birthday

In this field there are 3 dorp-down fields for: year, month and day.

 7) Enabled

This is a toggle switch, can be turned to: "Yes" or "No", by default is set to "Yes". Has a help text below: "Enable or disable customer login.".
 
 8) Partner offers 

This is a toggle switch, can be turned to: "Yes" or "No", by default is set to "No". Has a help text below: "This customer will receive your ads via email.".

 9) Group access
 
This is a mandatory table with several check boxes:
 - Select all - when pressed, selects all the check boxes.
 - Visitor (selected by default)
 - Guest (selected by default)
 - Customer (selected by default)

When trying to save without no check boxes marked, shows the error: "A default customer group must be selected in group box.".

 10) Default customer group

This is a drop-down field, by defaul it is selected as "Customer":
 - Visitor
 - Customer
 - Guest

Has a help text below: "This group will be the user's default group. Only the discount for the selected group will be applied to this customer."

### Call to action

 - Cancel

When pressed, redirects back to [customers listing]({{<ref "customers-listing.md">}} "customers listing") 

 - Save

When pressed redirects back to [customers listing]({{<ref "customers-listing.md">}} "customers listing") and a message is displayed: "Successful update.".
