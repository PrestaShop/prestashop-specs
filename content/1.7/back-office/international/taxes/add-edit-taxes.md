---
title: Taxes Editing page
weight: 1
---

# INTERNATIONAL > Taxes > Add or Edit Taxes

![Taxes](static/img/international-add-edit-taxes.png)

This UI provides ability to add costomized tax or edit the existing tax of the Prestashop tax list.

## Top elements of Add or Edit Taxes

There is an information notification with the text _Note that this feature is available in all shops context only. It will be added to all your stores._ meaning that tax editing will be aligned the same with the all multistores anr shop groups.

## Tax Editing form

- **Name** - mandatory input field for naming the specific Tax
- **Language dropdown** - enables to trigger the appropriate language for the Name of tax. There can different tax names set fro different languages.
- **Rate** - numeric input field, allows to set the Range of the tax. Range must be typed as a single numbers or single numbers with decimals.
- **Enable or Disable switch toggle button** - allows to Enable or Disable tax.

## Notifications after submissions

If there is an empty Range field after submission, there will be a browser error notification, requesting to fill the empty field.

If there is some invalid characters typed in name after submission, there will be an error below the Name field - _"{invalid character}" is invalid - Language: {the language of the name}_.

If the Name field is left empty after submission, there will be an error below the Name field - _The field name is required at least in your default language._
