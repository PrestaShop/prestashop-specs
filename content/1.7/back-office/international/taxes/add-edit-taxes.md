---
title: Taxes Editing page
weight: 1
---

# INTERNATIONAL > Taxes > Add or Edit Taxes

![Taxes](static/img/international-add-edit-taxes.png)

This UI provides the ability to add customized tax or edit the existing tax of the Prestashop tax list.

## Navigating to the Add or Edit Taxes form

The form can be accessed in 2 ways:

- Adding a new Tax, Add new tax CTA button must be clicked.
- Clicking on the Edit button of an item in the list

## Tax Editing form

- **Name** - mandatory - text field for naming the specific Tax with a Language selector
- **Range** - numeric input field, allows setting the Range of the tax. Range must be typed as a single numbers or single numbers with decimals.
- **Enable** - toggle - allows to Enable or Disable tax. By default - Tax toggle is enabled.
- **Cancel** - button cancels the Tax editing form.
- **Save** - button saves the configured form.

## Notifications after submissions

If there is an empty Range field after submission, there will be a browser error notification, requesting to fill the empty field.

If there are some invalid characters typed in the name after submission, there will be an error below the Name field - _"{invalid character}" is invalid - Language: {the language of the name}_.

If the Name field is left empty after submission, there will be an error below the Name field - _The field name is required at least in your default language._

If the Range is typed with more than 6 characters, the UI will be prompted with the error - _This field cannot be longer than 6 characters_.

If the Name is typed with more than 32 characters, the UI will be prompted with the error - _This field cannot be longer than 32 characters - Language: {the language of the name}_. 
