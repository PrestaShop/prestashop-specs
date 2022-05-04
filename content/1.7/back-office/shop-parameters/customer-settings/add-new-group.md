---
title: Add new group
weight: 1
---

# Customer group

In this section 5 sections are presented:

1) Name

This is a mandatory input field, also it is multi language, so can be translated to any language which is enabled on the shop. When trying to save with the field empty, will show a message: "The field name is required at least in (language)". Has a tooltip: "Forbidden characters:0-9!&lt;&gt;,;?=+()@#"{}_$%:".
When trying to save with forbidden characters input will show an error: "The name field is invalid.".

2) Discount

The field is measured in percentages, only numbers can be entered, when saving with any other inputs, will show an error: "The discount value is incorrect (must be a percentage).". Has a tooltip: "Automatically apply this value as a discount on all products for members of this customer group.". see issue [28415](https://github.com/PrestaShop/PrestaShop/issues/28415)

3) Price display method

This is a drop-down menu, from the menu it's possible to select the following:

 - VAT excluded (default selection)
 - VAT included

Has a tooltip: "How prices are displayed in the order summary for this customer group.".

4) Show prices

This is a toggle switch, by default it is set to: "Yes". Has a help text below: "Need to hide prices for all groups? Save time, enable catalog mode in Product Settings instead."

Has a tooltip: "Customers in this group can view prices".

5) Shop association

The shop association block is displayed when the multistore is enabled and if several shops are configured.

👉 See the [specs of the shop association block]({{<ref "../../multistoregeneralspecs.md#shop-association-block">}} "Shop association block") 
