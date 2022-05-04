---
title: Edit group
weight: 1
---

# Customer group

In this section 6 sections are presented (when multistore is enabled the count is 7):

1) Name

This is a mandatory input field, also it is multi language, so can be translated to any language which is enabled on the shop. When trying to save with the field empty, will show a message: "The field name is required at least in (language)".Has a tooltip: "Forbidden characters:0-9!&lt;&gt;,;?=+()@#"{}_$%:".
When trying to save with forbidden characters input will show an error: "The name field is invalid.".

2) Discount

The field is measured in percentages, only numbers can be entered, when saving with any other inputs, will show an error: "The discount value is incorrect (must be a percentage).". Has a tooltip: "Automatically apply this value as a discount on all products for members of this customer group.".

3) Price display method

This is a drop-down menu, from the menu it's possible to select the following:

 - VAT excluded (default selection)
 - VAT included

Has a tooltip: "How prices are displayed in the order summary for this customer group.".

4) Show prices

This is a toggle switch, by default it is set to: "Yes". Has a help text below: "Need to hide prices for all groups? Save time, enable catalog mode in Product Settings instead."

Has a tooltip: "Customers in this group can view prices".

5) Category discount

This section is a button, which when pressed opens a new pop-up, in there the selections are:

- Expand all

Expands all the group categories from the shop, and they can be selected, by default only the Home folder is firstly shown.

2 messages are displayed below:

"Caution: The discount applied to a category does not stack with the overall reduction but instead replaces it."

"Only products that have this category as the default category will be affected."

- Discount (%)

This is an input for the discount, only numbers can be used, by default the input is: "0.00". When trying to save with anything other than numbers, an alert will show: "The discount value is incorrect (must be a percentage).

When a discount is added, it appears below the button, and has a "Delete" button, when pressed removes the 

6) Authorized modules:

In this section all the possible modules on the shop are listed, all of them have toggle switches, by default they are all set to: "Yes".

7) Shop association

The shop association block is displayed when the multistore is enabled and if several shops are configured.

👉 See the [specs of the shop association block]({{<ref "../../multistoregeneralspecs.md#shop-association-block">}} "Shop association block") 

### Call to action

- Cancel, when pressed redirect to [view group]({{<ref "view-group.md">}} "view group")
- Save, when pressed redirect to [view group]({{<ref "view-group.md">}} "view group"), shows a message: "Successful update."
