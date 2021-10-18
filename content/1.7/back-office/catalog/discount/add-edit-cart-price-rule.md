---
title: Adding and Editing cart rules
weight: 1
---

# Cart Rule > Edit
When you enter the Cart rule editing UI, there are 3 separate tabs - Information, Conditions and Actions. Each of them are combined together with the general cart rules functionality.

The explanations of the input fields, dropdowns, switch toggle buttons and text fields are stated below:<br>

## Information tab

![Cart Rules: Information tab](/static/img/cart-rules-information-tab.png)

- **Name** - it is a mandatory field, it can be set as unique rule name. There is a widget at the right of this field with multiple languages. The different languages can be set to the rule names for this certain Information tab form.
- **Description** - it can be described where is the cart rule used for in more details.
- **Code** - unique cart rule code can be set here, or simply by clicking Generate and Prestashop will generate the rule automatically with unique code name. It will become as voucher from front end side.
- **Highlight switch toggle button** - this option can be enabled, then the cart rule voucher will be displayed in cart summary. When there is no Voucher Code set, the Highlight switch toggle button is hidden.
- **Partial use switch toggle button** - this option can be enabled, when the total cart sum is smaller than the voucher sum. If Partial usage is disabled, voucher value will be lovered to the total order amount. If it will be enabled, new voucher will be created in the Cart, as a reminder. Partial use toggle button is switched on by default.
- **Priority** - priority of Cart rules can be set here, in what order to show the rules for the customers of the webshop. For example, setting 1 for the most importand cart rule. Priority input field is stated with digital value 1 by default.
- **Status switch toggle button** - enabling this button will enable the rule, disabling it will deactivate the rule and vouchers for customers. Status toggle button is enabled by default.

## Conditions tab
The condition tab, allows the user to specify cart rule conditions to determine how the cart rule will be use in the Prestashop. 

[Cart Rules: Conditions Tab](/static/img/cart-rules-conditions-tab.png)

- **Limit to a single customer input field** - this field sets the customer name or email in order to set the Cart rule condition for certain customer.
- **Valid** - simple date picker form, where date existance can be set. Valid data picker widget is stated for the 1 month value by default.
- **Minimum amount field** - this field sets minimum amount from which the customers will see the Cart rule. As well, the currency can be set, if prices should affected with taxes or without taxes and if shipping is affected too. Minimum amount is stated by digital value 0.
- **Total available** - this filed describes the quantity of the cart rules - vouchers available for certain conditions. Total available input field is stated by digital value 1 by default.
- **Total available for each user field** - this field sets the price rules amount for certain users separately. Total available for each user is stated by digital value 1 by default.
- **Restrictions** - also you can set certain conditions for the main cart rule condition. Default currency is stated by the default Prestashop currency. Tax excluded dropdown is stated by default. Shipping excluded dropdown is stated by default.
- **Carrier selection** - this field can set certain carriers, that could be affected by the rule condition.
- **Customer group selection** - it can be restricted by a Prestashop customers group - by default - Customer, Visitor or Guest.
- **Compatibility with other cart rules** - this option sets the including of what cart rules can be combined with another cart rules.
- **Product selection** - this is kind of important condition for cart rule - it can be selected with specific products from whole webshop, that can have the cart rule.

## Actions tab
The certain action can be set after cart rule is created. The Actions tab values are all set up to disabled by default.

[Cart Rules: Actions Tab](/static/img/cart-rules-actions-tab.png)

- **Free shipping switch toggle button** - this setting creates rule that will initiate a free shipping method for customer in checkout form.
- **Apply a discount** - there are 3 options that can be set - Percentage, Amount and None. Percentage can be set, and the cart price will be affected by certain amount of percentage discount, after executing the voucher. When the option is set with the certain Amount - the user will get a discount of a certain amount of price. Also the Currency can be set and the Taxes conditions as well. This option can set the action to None - in that case user of the checkout will not get any discounting at all.
- **Send a free gift switch toggle button** - this option enables ability to set an additional free product for the customer, or every customers, who accepted the cart rule / voucher.
- **Search a product field** - it will set the ability to search the certain product.
- **Matching products dropdown** - it will appear when there will be some characters typed in the "Search a product" field.

## Call-to-action (CTA) functionalities
**Cancel** - initiates the action to discard all the Cart rule changes that were before Saving action
**Save and Stay** - initiates the action to save the settings, and stay on the same tab after the saving. Usually if all appropriate fields are set correctly, you will get success notification displayed on the top of the interface right after the click of this button.
**Save** - initiates the action to save the settings, and stay on the Cart rules list after the saving. Usually if all appropriate fields are set correctly, you will get success notification displayed on the top of the interface right after the click of this button.

## Notifications
When navigating to Cart Rules editing and clicking the Save or Save and Stay buttons, while the form is completely empty, there will be instant response in the User Interface with error notification message. The default message will be:<br>

"There are 2 errors.<br>
An action is required for this cart rule.<br>
The field name is required at least in English (English)."<br>

When clicking the Save or Save and Stay buttons, while the form is correctly filled with at least mandatory fields and options, there will be instant response in the User Interface, with success notification message. The default message will be:<br>

"Successful update. "<br>

## Multistore 
All these Cart rule settings are separately managed by Multistore functionality in Prestashop. [Learn more.](https://github.com/PrestaShop/prestashop-specs/blob/master/content/1.7/back-office/shop-parameters/general/maintenance.md#multistore-behavior)
