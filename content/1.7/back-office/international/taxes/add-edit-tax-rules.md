---
title: Taxes Rules Editing page
weight: 1
---

# INTERNATIONAL > Taxes > Tax Rules > Add or Edit Tax Rule

![Adding or Editing Tax Rules](static/img/international-add-edit-tax-rules.png)

This page UI allows to edit existing or add a brand new Tax Rule to the Prestashop Tax system.

## Top elements

- **Add New or Edit:{edited Tax Rule name}** - page title.
- **Add new tax rule CTA button** - toggles the expanding or subtracting the Tax rule creating and editing section below.
- **Help** - a side-bar with the helpful information, how to navigate in this page.
- **Tabs: Taxes and Tax Rules** - navigation tabs for taxes and tax rules.

## Navigating to the Add or Edit Tax Rules form

The form can be accessed in 2 ways:

- Add new Tax Rules group CTA button must be clicked from the Tax Rules listing.
- Clicking on the Edit button of a Tax Rules item in the listing.

## Tax Rules Editing form

- **Name** - mandatory - text field for naming the specific Tax Rule.
- **Enable** - toggle - allows to Enable or Disable tax rule. By default - Tax rule toggle is disabled.
- **Shop association** - a widget, that allows to select the desired Multistores or Shop Groups, where Tax Rules could be applied. The widget contains 4 CTA buttons:
  - **Collapse all** - subtracts the Multistores and Shop groups tree.
  - **Expand all** - expands the Multistores and Shop groups tree.
  - **Check all** - checkmarks all the Multistores and Shop groups items in tree.
  - **Uncheck all** - unchecks all the Multistores and Shop groups items in tree.
- **Cancel** - button cancels the Tax editing form.
- **Save** - button saves the configured form.

## New Tax Rule table (appears after submitting the Tax Rules main form)

- **Country** - dropdown, allows the selection of country for specific Tax Rule. By default it is set to All.
- **Zip/Postal code range** - input, defines the zip or postal code for Tax Rule.
- **Behavior** - dropdown, allows the Tax rule to have a specific behavior:
  - **This tax only** - rule applies only one current tax.
  - **Combine** - rule combines the current tax with another tax.
  - **One after another** - rule combines the current tax, and then after the combination result it combines the next rule.
