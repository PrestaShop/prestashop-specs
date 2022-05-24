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

- **Name** - mandatory - text field for naming the specific Tax Rule. Once hovered, there is a tooltip text prompted - _Invalid characters: <>;=#{}_.
- **Enable** - toggle - allows to Enable or Disable tax rule. By default - Tax rule toggle is disabled.
- **Shop association** - a widget, that allows to select the desired Multistores or Shop Groups, where Tax Rules could be applied. The widget contains 4 CTA buttons:
  - **Collapse all** - subtracts the Multistores and Shop groups tree.
  - **Expand all** - expands the Multistores and Shop groups tree.
  - **Check all** - checkmarks all the Multistores and Shop groups items in tree.
  - **Uncheck all** - unchecks all the Multistores and Shop groups items in tree.
- **Cancel** - button cancels the Tax editing form.
- **Save and stay** - button saves the configured form and redirects to the same page.

## New Tax Rule panel (appears after submitting the Tax Rules main form)

- **Country** - dropdown, allows the selection of country for specific Tax Rule. By default it is set to All.
- **Zip/Postal code range** - input, defines the zip or postal code for Tax Rule.
- **Behavior** - dropdown, allows the Tax rule to have a specific behavior, when address matches multiple rules:
  - **This tax only** - rule applies only one current tax.
  - **Combine** - rule combines the current tax with another tax.
  - **One after another** - rule combines the current tax, and then after the combination result it combines the next rule.
- **Tax** - dropdown, allows to apply specific Tax from the list.
- **Description** - allows to type specific description of the Tax Rule.
- **Save and stay CTA** - button saves the configured form and redirects to the same page.

## Country panel

If there are specific countries added, after clicking **Save and stay**, the lower panel will appear with the countries list. The table has the following headers:
- **Country** - displays the country name.
- **State** - if defined country has a state, it can be displayed.
- **Zip/Postal code** - if there is available Zip or Postal code, it can be displayed here.
- **Behavior** - displays the Tax behavior selected for specific country.
- **Tax** - displays the Tax rule code.
- **Description** - displays the specific description for the Tax rule.
- **Edit** - redirects to the same page for editing the current Tax rule.
- **Dropdown > Delete** - deletes the specific country Tax rule from list. After clicking the **Delete**, there is a pop-up prompted with the exclamation error sign and text _Delete selected item?_ and possible values - **Yes** or **No**. No leads to closing the pop-up, Yes - deletes the country tax rule, with the page reloading and the success message _Successful update._
- **Bulk actions widget** - if there are more than 1 currency Tax rule in the list, some of them can be selected by checkboxes separately, or can be **Selected all** or **Unselected all**. After the selections, **Delete selected** will delete the selected Tax rules from the list (confirmation pop-up will be prompted as well).
