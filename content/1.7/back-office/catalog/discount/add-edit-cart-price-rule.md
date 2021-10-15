---
title: Adding and Editing cart rules
weight: 1
---

# Cart Rule > Edit
When you enter the Cart rule editing UI, there are 3 separate tabs - Information, Conditions and Actions. Each of them are combined together with the general cart rules functionality. 

There are default values already stated in Information tab:
- Partial use toggle button is switched on by default
- Priority input field is stated with digital value 1 by default
- Status toggle button is switched on by default

The following information is stated by default in Conditions tab:
- Valid data picker widget is stated for the 1 month value by default
- Minimum amount is stated by digital value 0
- Default currency is stated by the default Prestashop currency
- Tax excluded dropdown is stated by default
- Shipping excluded dropdown is stated by default
- Total available input field is stated by digital value 1 by default
- Total available for each user is stated by digital value 1 by default

The Conditions tab values are all set up to disabled by default.

The explanations of the input fields, dropdowns, switch toggle buttons and text fields are stated below:<br>

## Information tab

[image](https://github.com/PrestaShop/prestashop-specs/blob/355b25180bb99fae1592d62eeed7a286c884148f/static/img/cart-rules-information-tab.png)

- Name - it is a mandatory field, it can be set as unique rule name.
- Description - it can be described where is the cart rule used for in more details.
- Code - unique cart rule code can be set here, or simply by clicking Generate and Prestashop will generate the rule automatically with unique code name. It will become as voucher from front end side.
- Highlight switch toggle button - this option can be enabled, then the cart rule voucher will be displayed in cart summary. When there is no Voucher Code set, the Highlight switch toggle button is hidden.
- Partial use switch toggle button - this option can be enabled, when the total cart sum is smaller than the voucher sum. If Partial usage is switched off, voucher value will be lovered to the total order amount. If it will be enabled, new voucher will be created in the Cart, as a reminder.
- Priority - priority of Cart rules can be set here, in what order to show the rules for the customers of the webshop. For example, setting 1 for the most importand cart rule.
- Status switch toggle button - enabling this button will enable the rule, disabling it will deactivate the rule and vouchers for customers.

**Multilanguaging**<br>

There is a widget at the right of Name input field with multiple languages. You can set the different language to the rule names for this certain Information tab form.

## Conditions tab
One of the most important tab, where you can describe the certain conditions, how the Cart rule should be appearing as a voucher in the Prestashop Cart and what circumstances will be affecting the rule.

[image](static/img/cart-rules-conditions-tab.png)

- Limit to a single customer input field - you can start typing the customer name or email in order to set the Cart rule condition for certain customer.
- Valid - simple date picker form, where you can set the existance time of the rule condition
- Minimum amount field - set the minimum amount from which the customers will see the Cart rule. As well, you can set the currency, if prices should affected with taxes or without taxes and if shipping is affected too.
- Total available - this filed describes the quantity of the cart rules - vouchers available for certain conditions.
- Total available for each user field - you can set the price rules amount for certain users separately.
- Restrictions - also you can set certain conditions for the main cart rule condition.
- Carrier selection - you can set certain carriers, that could be affected by the rule condition.
- Customer group selection - it can be restricted by a Prestashop customers group - by default - Customer, Visitor or Guest.
- Compatibility with other cart rules - you can include what cart rules can be combined with another cart rules.
- Product selection - this is kind of important condition for cart rule - you can select specific products from whole webshop, that can have the cart rule.

## Actions tab
Here you can set the actions that can be executed after correct conditions are set.

[image](static/img/cart-rules-actions-tab.png)

- Free shipping switch toggle button - set if you want that cart rule will initiate a free shipping method for customer in checkout form.
- Apply a discount - there are 3 options that can be set - Percentage, Amount and None. Percentage can be set, and the cart price will be affected by certain amount of percentage discount, after executing the voucher. When you set the certain Amount - the user will get a discount of a certain amount of price. Also you can set Currency and the Taxes conditions here. And you can set the action to None - in that case user of the checkout will not get any discounting at all.
- Send a free gift switch toggle button - this option enables you to set an additional free product for the customer, or every customers, who accepted the cart rule / voucher.
- Search a product field  - will appear and will let you search the certain product.
- Matching products dropdown - will appear when there will be some characters typed in the "Search a product" field.

## Multistore 
All these Cart rule settings are separately managed by Multistore functionality in Prestashop. [Learn more.](https://github.com/PrestaShop/prestashop-specs/blob/master/content/1.7/back-office/shop-parameters/general/maintenance.md#multistore-behavior)
