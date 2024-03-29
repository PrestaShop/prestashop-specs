---
title: Taxes Rules Editing page
weight: 1
---

# INTERNATIONAL > Taxes > Tax Rules > Add or Edit Tax Rule

![Adding or Editing Tax Rules](static/img/international-add-edit-tax-rules.png)

This page interface allows to edit existing or add a brand new Tax Rule to the Prestashop Tax system.

## Top elements

- **Add New or Edit:{edited Tax Rule name}** - page title.
- **Add new tax rule button** - toggles the expanding or subtracting the Tax rule creating and editing section below.
- **Help** - a side-bar with the helpful information, how to navigate in this page.
- **Tabs: Taxes and Tax Rules** - navigation tabs for taxes and tax rules.

## Navigating to the Add or Edit Tax Rules form

The form can be accessed in 2 ways:

- Add new Tax Rules group button must be clicked from the Tax Rules listing.
- Clicking on the Edit button of a Tax Rules item in the listing.

## Tax Rules Editing form

- **Name** - mandatory - text field for naming the specific Tax Rule. Once hovered, there is a tooltip text prompted - _Invalid characters: <>;=#{}_.
- **Enable** - toggle - allows to Enable or Disable tax rule. By default - Tax rule toggle is disabled.
- **Shop association** - a widget, that allows to select the desired Multistores or Shop Groups, where Tax Rules could be applied. The widget contains 4 buttons:
  - **Collapse all** - subtracts the Multistores and Shop groups tree.
  - **Expand all** - expands the Multistores and Shop groups tree.
  - **Check all** - checkmarks all the Multistores and Shop groups items in tree.
  - **Uncheck all** - unchecks all the Multistores and Shop groups items in tree.
- **Cancel** - button cancels the Tax editing form.
- **Save and stay** - button saves the configured form and redirects to the same page.

## New Tax Rule panel (appears after submitting the Tax Rules main form)

- **Country** - dropdown, allows the selection of country for specific Tax Rule. By default it is set to All.
- **Zip/Postal code range** - input, defines the zip or postal code for Tax Rule.
- **Behavior** - dropdown, allows the Tax rule to have a specific behavior, when address matches multiple rules. Once hovered, there is an explanation prompted:

_You must define the behavior if an address matches multiple rules:<br>
This tax only: Will apply only this tax<br>
Combine: Combine taxes (e.g.: 10% + 5% = 15%)<br>
One after another: Apply taxes one after another (e.g.: 100 + 10% =&gt; 110 + 5% = 115.5)_

The Behavior dropdown values are the following: **This tax only** - rule applies only one current tax. **Combine** - rule combines the current tax with another tax. **One after another** - rule combines the current tax, and then after the combination result it combines the next rule.

- **Tax** - dropdown, allows to apply specific Tax from the list. Once hovered, there will be a text promted _(Total tax: 9%)_.
- **Description** - allows to type specific description of the Tax Rule.
- **Save and stay** - button saves the configured form and redirects to the same page with the green success notification _Successful update._

## Country panel

If there are specific countries added, after clicking **Save and stay**, the lower panel will appear with the countries list. The table has the following headers:
- **Country** - displays the country name.
- **State** - if defined country has a state, it can be displayed.
- **Zip/Postal code** - if there is available Zip or Postal code, it can be displayed here. If the field is typed with the invalid characters, there will be an error notification prompted:

    _There are 2 errors. 
    The Zip/Postal code is invalid. It must be typed as follows: 0000 for Afghanistan.
    zipcode_from is invalid._

- **Behavior** - displays the Tax behavior selected for specific country.
- **Tax** - displays the Tax rule code.
- **Description** - displays the specific description for the Tax rule.
- **Edit** - redirects to the same page for editing the current Tax rule.
- **Dropdown > Delete** - deletes the specific country Tax rule from list. After clicking the **Delete**, there is a pop-up prompted with the exclamation error sign and text _Delete selected item?_ and possible values - **Yes** or **No**. No leads to closing the pop-up, Yes - deletes the country tax rule, with the page reloading and the success message _Successful update._
- **Bulk actions widget** - if there are more than 1 currency Tax rule in the list, some of them can be selected by checkboxes separately, or can be **Selected all** or **Unselected all**. After the selections, **Delete selected** will delete the selected Tax rules from the list (confirmation pop-up will be prompted as well).
