---
title: Adding and Editing cart rules
weight: 1
---

# Cart Rule > Edit
When you enter the Cart rule editing UI, there are 3 separate tabs - Information, Conditions and Actions. Each of them are combined together with the general cart rules functionality.

The explanations of the input fields, dropdowns, switch toggle buttons and text fields are stated below:<br>

## Information tab

![Cart Rules: Information tab](/static/img/cart-rules-information-tab.png)

- **Name** - text field - it is a mandatory field with a language selector
- **Description** - text field - to describe the cart rule in more details.
- **Code** - text field - 
If the user decide to use a Code for the cart rule then the code has to be unique to validate the form otherwise a error is thrown: "This cart rule code is already used (conflict with cart rule %Id of the cart rule%).
By clicking Generate, a code is generated automatically with unique code name.
If the code is left empty then the cart rule will automatically be applied to customers' cart that matches the cart rule conditions.
- **Highlight** - switch toggle button - If enabled, the cart rule will be displayed in cart summary. 
When there is no Code set, the Highlight switch toggle button is hidden.
- **Partial use switch toggle button** - this option can be enabled, when the total cart sum is smaller than the voucher sum. If Partial usage is disabled, voucher value will be lovered to the total order amount. If it will be enabled, new voucher will be created in the Cart, as a reminder. Partial use toggle button is switched on by default.
- **Priority** - Numeric field - By default the priority is set to 1. This field defines the calculation priority of the cart rules at the checkout process. A cart rule with the priority set to 1 will be applied before the cart rule set to 2. The lower the priority value, the higher the priority of the cart rule.
If there are multiple cart rules applied at the checkout with the identical priority value, the priority will be defined between the cart rule by their Cart Rule ID, the lower is the cart rule ID, the higher the priority .
- **Status** - switch toggle button -  Status toggle button is enabled by default. Disabling the toggle will disable the cart rule and won't be useable.

## Conditions tab
The condition tab, allows the ability to specify cart rule conditions to determine how the cart rule will be used in the Prestashop. 

[Cart Rules: Conditions Tab](/static/img/cart-rules-conditions-tab.png)

- **Limit to a single custome** - search input - the user can search by customer name or email in order to set the Cart rule condition for one customer.
- **Valid** - simple date picker form, where date existance can be set. Valid data picker widget is stated for the 1 month value by default.
- **Minimum amount field** - this field sets minimum amount from which the customers will see the Cart rule. As well, the currency can be set, if prices should affected with taxes or without taxes and if shipping is affected too. Minimum amount is stated by digital value 0. Default currency is stated by the default Prestashop currency. Tax excluded dropdown is stated by default. Shipping excluded dropdown is stated by default.
- **Total available** - this filed describes the quantity of the cart rules - vouchers available for certain conditions. Total available input field is stated by digital value 1 by default.
- **Total available for each user field** - this field sets the price rules amount for certain users separately. Total available for each user is stated by digital value 1 by default.
### Restrictions
Certain conditions can be set for the main cart rule condition. <br>
Once the first restriction checkbox is marked, the external options will expand. Those are the following:<br>
- **Carrier selection** - this field can set certain carriers, that could be affected by the rule condition. Once checkboxed, there will be 2 fields prompted in UI - Selected or Unselected text field values. The values can be transferred to appropriate inputs with the buttons Add or Remove. By default, it is set as uncheckboxed condition.
- **Customer group selection** - it can be restricted by a Prestashop customers group - by default - Customer, Visitor or Guest. Once checkboxed, there will be 2 fields prompted in UI - Selected or Unselected text field values. The values can be transferred to appropriate inputs with the buttons Add or Remove. By default, it is set as uncheckboxed condition.
- **Compatibility with other cart rules** - this option sets the including of what cart rules can be combined with another cart rules. By default, it is set as uncheckboxed condition, and this option is hidden, when there are no rules created, at least 1 rule should be created in list.
- **Product selection** - this is kind of important condition for cart rule - it can be selected with specific products from whole webshop, that can have the cart rule. By default, it is set as uncheckboxed condition. 

[Product Selection from Cart Rule Conditions tab](/static/img/cart-rules-restriction-product-select.png)

- Once the **Product selection** checkbox is marked, the UI will additioinally extend with the appropriate options to adjust. The CTA button with "(+) Product selection" will appear. Clicking the button will show additional operating values - "Number of products required in the cart to enjoy the discount", "Add a rule concerning", "The product(s) are matching one of these" list, Add (+), Remove (X), Choose, Product selection buttons and appropriate text input fields.
- **Number** of products required in the cart to enjoy the discount - defines the oparating value, how many products should be added to the cart in Prestashop application in order to get the ability to get a discount. There is a numeric value input field near, which can be set.
- **Add a rule concerning** - defines the operating value, which will be included in creating the rule conditions for certain product (s). By default the dropdown option will be as null value --Choose--. The default values, that are installed by Prestashop are Products, Attributes, Categories, Brands and Suppliers. Choosing, for example, Products, as the value, clicking the (+) Add button will extend the UI with the Product list below. By default, there will be no products added. Once clicking the Choose button, pop-up will appear, and there will be a possibility to add the certain products from left section to the right and backwards. It can be adjusted by clicking the Add or Remove buttons. After closing the popup, the new products will be added to the list. There are options to add additional value once again, modify the existing one or deleting the value from the list.

- **Shop selection** - this selection sets the shop in Prestashop, where to apply the Cart Rule. By default, this field is hidden, if there is no Multistores configured. Once the Shop selection checkbox is marked, the addition UI part will extend with the 2 input area fields. There will be field with Selected shops and Unselected shops. The Multistore Shops can be transferred to the Selected or Unselected fields by appropriate needs. Add or Remove buttons are performing the actioins here.

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
Once the Multistores are configured in Prestashop, Cart Rules can be applied for certain shop. Applying the Cart Rule for certain shop can be configured by navigating to Cart Rules > Edit section > Configure Tab. There is a checkbox in Restriction option. Clicking the checkbox of **Shop selection** option, enables switching the appropriate Prestashop shop to the "Selected shops" area. This enables applying the Cart Rule for certain Prestashop Multistore.

All these Cart rule settings are separately managed by Multistore functionality in Prestashop. [Learn more.](https://github.com/PrestaShop/prestashop-specs/blob/master/content/1.7/back-office/shop-parameters/general/maintenance.md#multistore-behavior)
