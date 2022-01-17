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
- Or clicking the Edit pen icon on the right side of the Tax row in listing.

## Top elements of Add or Edit Taxes

There is an information notification with the text _Note that this feature is available in all shops context only. It will be added to all your stores_ meaning that tax editing will be aligned the same with the all multistores and shop groups.

## Tax Editing form

- **Name** - mandatory input field for naming the specific Tax
- **Language dropdown** - enables to trigger the appropriate language for the Name of tax. There can different tax names set for different languages.
- **Rate** - numeric input field, allows setting the Range of the tax. Range must be typed as a single numbers or single numbers with decimals.
- **Enable or Disable switch toggle button** - allows to Enable or Disable tax.
- **Cancel** - button cancels the Tax editing form.
- **Save** - button saves the configured form.

## Notifications after submissions

If there is an empty Range field after submission, there will be a browser error notification, requesting to fill the empty field.

If there are some invalid characters typed in the name after submission, there will be an error below the Name field - _"{invalid character}" is invalid - Language: {the language of the name}_.

If the Name field is left empty after submission, there will be an error below the Name field - _The field name is required at least in your default language._

If the Range is typed with more than 6 characters, the UI will be prompted with the error - _This field cannot be longer than 6 characters_.

If the Name is typed with more than 32 characters, the UI will be prompted with the error - _This field cannot be longer than 32 characters - Language: {the language of the name}_. 
