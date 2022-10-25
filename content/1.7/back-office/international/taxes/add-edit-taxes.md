---
title: Taxes Editing page
weight: 1
---

# INTERNATIONAL > Taxes > Add or Edit Taxes

![Taxes](static/img/international-add-edit-taxes.png)

This inteface provides the ability to add customized tax or edit the existing tax of the Prestashop tax list.

## Navigating to the Add or Edit Taxes form

The form can be accessed in 2 ways:

- Adding a new Tax, Add new tax button must be clicked.
- Clicking on the Edit button of an item in the list

## Tax Editing form

If the webshop is on All shops context, there will be a blue notification message _Note that this feature is available in all shops context only. It will be added to all your stores._

- **Name** - mandatory - text field for naming the specific Tax with a Language selector. The help text is _Tax name to display in carts and on invoices (e.g. "VAT"). Invalid characters: <>;=#{}_. If the webshop has multiple languages installed, the language dropdown switcher will appear. Different Names can be saved on the different languages, by changing the dropdown value, and clicking Save. If the Name field is left empty after submission, there will be an error below the Name field - _The field name is required at least in your default language._ If the Name is typed with more than 32 characters, the interface will be prompted with the error - _This field cannot be longer than 32 characters - Language: {the language of the name}_. If the invalid characters are typed, the interface will prompt _{invalid string} is invalid - Language: {the language of the name}_.
- **Rate** - numeric input field, allows setting the Rate of the tax. The help text is - _Format: XX.XX or XX.XXX (e.g. 19.60 or 13.925)_. Range must be typed as a single numbers or single numbers with decimals. If there is an empty Rate field after submission, there will be a browser error notification, requesting to fill the empty field. If the Rate is typed with more than 6 characters, the interface will be prompted with the error - _This field cannot be longer than 6 characters_. If the field is typed with character letters, the error will be _This field is invalid, it must contain numeric values_. 
- **Enable** - toggle - allows to Enable or Disable tax. By default - Tax toggle is enabled.
- **Cancel** - button cancels the Tax editing form.
- **Save** - button saves the configured form. Notification will be prompted _Successful update._

## Notifications after submissions

If there are some invalid characters typed in the name after submission, there will be an error below the Name field - _"{invalid character}" is invalid - Language: {the language of the name}_.
