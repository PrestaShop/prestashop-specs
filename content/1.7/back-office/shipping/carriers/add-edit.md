---
title: Add / Edit
weight: 1
---
# Shipping-Carriers-add-edit

## SPECIFICATIONS - SHIPPING &gt; CARRIERS &gt; Add new/Edit

## What

The Add new/Edit Carrier page allows users to create and edit carriers.

## Specifications

As of Sept 9th 2019 Version : 1.7.6.1

### Elements in the page

#### Logo Block

Logo block: There is a logo block on the left of the page. The title is TITLE. It contains a thumbnail of the image uploaded as logo. Once an image has been uploaded a button with a trashcan icon is available in the block top right corner. When clicking on the button the logo image is deleted. _Default status - Add New: a placeholder icon of a truck is displayed as default._ _Default status - Edit: WIP_

#### Elements in the tabs

There 4 tabs in this page, following the carrier creation process.

**Tab \#1 General Settings**

**Carrier name:** Text field. Required field. Tooltip on Label hover. _Default status - Add New: field is empty_ _Default status - Edit: WIP_

**Transit time:** Text field. Required field in at least one language.Tooltip on Label hover. This field is localized, it has a dropdown on the right side to select the language. _Default status - Add New: Field is empty_ _Default status - Edit: WIP_

**Speed Grade:** Text field. Tooltip on Label hover. Input should be 1 char max, integer between 0 and 9. _Default status - Add New: Field is empty_ _Default status - Edit: WIP_

**Logo:** Upload file field. Helper text below field. Valid formats : .jpg, .gif .png. Max size : 8Mo. _Default status - Add New: Field is empty. When an image is uploaded it is displayed in the logo block on the top left part of the screen._ _Default status - Edit: WIP_

**Tracking URL:** Text field. Tooltip on Label hover. Helper text below field. The text entered should be a URL and contains http:// or https:// to be valid. Default status - Add New: Field is empty. The text entered should be a URL to be valid. _Default status - Edit: WIP_

**Tab \#2 Shipping locations and costs**

**Add handling costs:** Switch YES/NO. Tooltip on Label hover. Default status - Add New: Set on NO _Default status - Edit: WIP_

When set to YES, the handling costs set in Shipping &gt; Preferences must be included in the finale carrier price.

**Free Shipping:** Switch YES/NO. When switching to YES the “Ranges” table’s field are hidden. Switching back to NO displays the fields. _Default status - Add New: Set on NO_ _Default status - Edit: WIP_

**Billing:** Radio buttons. 2 options:

* According to total price
* According to total weight

_Default status - Add New: “According to total price” is selected_ _Default status - Edit: WIP_

When selecting an option it adapts the text and the unit of measure in the “Ranges” table. When “according to total price”, text in the first two columns is “Will be applied when the price is selected” and the unit of the fields is the default currency used symbol \(ex: €, $, ¥\) When “according to total weight”, text in the first two columns is “Will be applied when the weight is selected” and the unit of the fields is the default weight unit used \(ex: kg, lbs, etc.\).

**Tax:** Dropdown list. The options displayed are the tax rules existing in International &gt; Taxes &gt; Tax Rules plus an option “No tax”. It set the tax rule to apply to the carrier price. _Default status - Add New: set to “No tax”_ _Default status - Edit: WIP_

**Out-of-range behavior:** Dropdown list. Tooltip on Label hover. 2 options : Apply the cost of the highest defined range Disable carrier This option defines the behavior when no defined range matches the customer’s cart _Default status - Add New: set to “Apply the cost of the highest defined range”_ _Default status - Edit: WIP_

**Ranges:** Table. Table to create and configure ranges according to the order’s weight or price \(set in Billing field above\)

_Default status - Add New: Only one column/range is displayed. All fields are empty. The field on the “All” row is not visible, it appears when the row’s checkbox is checked. If unchecked the field remains visible but is disabled._ _Default status - Edit: WIP_

First row is used to set the minimum limit of a range. The value of the min input is included in the range “&gt;=”. The second row is used to set the maximum limit of a range. The value of the max input is strictly excluded from the range “&lt;”. For example, to create one range from 0kg to 5kg you have to type 0 in the first row and 5 in the second row. Be careful, because of the include/exclude rule, an order that weights 5kg will be considered out of this range. The unit associated to theses fields \(currency or weight\) correspond to the default currency and weight units set for the shop.

Then there are rows to enable/disable the carrier for each geographical zone and set the price applied to the range according to a geographical zone. The zones are the ones configured in International &gt; Locations. The first row is named “All” and allows the user to enable/disable in bulk and to set a price for all zones at the same time Each following row has the zone name on the left, a checkbox to enable or disable the range for this zone, and an input field to set the price for this range and this zone.

A button “ Add a new range” below the table allows creating a new range. When clicking on the button a column is added o the right side of the table with inputs for ranges limit and zone prices. A button “Delete” is displayed as well below each additional column.

Input must be a float. When a row is disabled \(box unchecked\), the field is disabled, it is not possible to type in. Zone inputs are disabled If the 2 first rows’ inputs \(min/max range limit\) are not filed, it is not possible to type in. Zones are ordered in alphabetical order. Inactive zones are displayed after the active ones, in alphabetical order with a “\(inactive\)” label added to the zone name.

A minimum range limit value must be equal or higher than the maximum range limit of the previous range. If not, in the two ranges impacted, the range limit fields are highlighted in red and zone price fields are disabled, it is not possible to type in. A zone is enabled/disabled for all ranges: you can’t enable only one range in a zone. When you enable several zones and set a price in the “All” field, this price is set to the enabled zones. The price remains the same for disabled zones.

**Tab \#3 Size, weight, and group access**

**Maximum package width :** Text field. Tooltip on Label hover. The value must be an integer, 0 or empty is considered ignored. Default status - Add New: empty field _Default status - Edit: WIP_

**Maximum package height :** Text field. Tooltip on Label hover. The value must be an integer, 0 or empty is considered ignored. Default status - Add New: empty field _Default status - Edit: WIP_

**Maximum package depth \(default unit\):** Text field. Tooltip on Label hover. The value must be an integer, 0 or empty is considered ignored. Default status - Add New: empty field _Default status - Edit: WIP_

**Maximum package weight \(defaut unit\):** Text field. Tooltip on Label hover. The value must be an integer, 0 or empty is considered ignored. Default status - Add New: empty field _Default status - Edit: WIP_

**Group access:** Table. Mark the groups that are allowed to access this carrier. Tooltip on Label hover. 3 columns: Checkbox to enable/disable access to a group Group ID number Group name Groups are ordered by their ID numbers. _Default status - Add New: All groups are enabled \(boxes are checked\)._ _Default status - Edit: WIP_

**Tab \#4 Summary**

**Block header:** Displays the carrier name asset in the first tab. The name must be in uppercase. \(ex: for carrier called DelliveryBoss, we have “CARRIER NAME: DELIVERYBOSS” in the block header.

**Text:** a long text summarizes all the information about the carrier. The text is the following: “ This carrier is  and the transit time is .

Shipping costs are calculated according to the  and the tax rule  will be applied.

This carrier can deliver orders from  to . If the order is out of range, the behavior is to .

This carrier will be proposed for those delivery zones: 

And it will be proposed for those client groups: 

**Enabled:** Switch YES/NO. Tooltip on Label hover. Used to enable or disable the carrier.

**Navigation and Finish buttons**

**Buttons:** There are 3 buttons at the bottom of the page: Previous, Next and Finish. Previous and Next are used to navigate from a tab to another. The finish button is used to save the carrier.

If the required fields have not been completed on all the tabs the button “Finish” should not be clickable. When on the first tab, the button “Previous” should not be clickable. When on the last tab, the button “Previous” should not be clickable.

**Navigation through tabs:** WIP

## Errors on the page

WIP

## Hooks

WIP

## MultiStore behaviors

WIP

## Behaviors / User stories

When you edit a carrier, a new carrier is created and the carrier id changes. A link is saved in the carrier table to the original id with the id_reference.

![id_reference Carrier](/img/id_reference_carrier.png)
