As a merchant I want to be able to manage the prices of my products

Here is the list of the elements of pricing tab:

- **Retail price tax excl**: When a value is filled, the price tax incl field is calculated automatically according to the tax rule chosen. To separate decimals a dot or a comma can be used, both should work no matter the language. When you change it, the same field in basic settings tab is also updated.

- **Retail price tax incl**: When a value is filled, the price tax excl field is calculated automatically according to the tax rule chosen. To separate decimals a dot or a comma can be used, both should work no matter the language. When you change it, the same field in basic settings tab is also updated. 

- **Tax rule**: Drop-down with all tax rules enabled and a “no tax” option. When you change it, the price tax incl is updated. And the “tax rule” field in Pricing tab is also changed. If you select an United States tax rule, price tax incl = price tax excl because it is a tax per state and we can not say in which state is the shop. When you change it, the same field in basic settings tab is also updated.

- **Manage tax rule**: Open in a new browser tab International > Taxes

- **Display the "On sale!" flag on the product page, and on product listings**: When the checkbox is checked,, it displays a banner "PROMO !" (not linked to a possible promotion in progress) on the image of the product in the product listing and on the product page in front-office. 

- **Final retail price banner**: Displays the final prices tax excl and tax incl. Prices are updated when they are modified above.

- **Price per unit tax excl**: By default, it’s set to 0.000000 You can fill the unit price if you sell products per unit. To separate decimals a dot or a comma can be used, both should work no matter the language. Displayed in the product page in front-office.

- **Unity field**: There is a placeholder: “Per kilo, per litre”. You can fill the name of the unit. Displayed in the product page in front-office next to the unit price

- **Ecotax tax incl**: WIP

- **Cost price tax excl**: By default, it’s set to 0.000000 It’s used for margin calculations. To separate decimals a dot or a comma can be used, both should work no matter the language. 

- **Add a specific price**: Button that opens a form with the following fields :

  - **Currencies**: Drop down with all the currencies enabled. You can select one currency or select “all currencies”, so that the specific price is available in all currencies. By default, “all currencies” is selected.

  - **Countries**: Drop down with all the countries enabled & disabled. You can select one country or select “all countries”, so that the specific price is available in all countries. By default, “all countries” is selected.
  
  - **Groups**: Drop down with all customers groups. You can select one group or select “all groups”, so that the specific price is available for all customers groups.. By default, “all groups” is selected.

  - **Customers**: There is a placeholder: “All customers”. If no customer is selected, the specific price is available for all customers. You can search a customer by name, lastname or email. Enabled customers with corresponding name, lastname or email address are displayed under the field. If you enter something and no results are found, when you click outside the field, what has been entered is deleted. You can click, to select it. You can select only one customer. You can remove it by clicking on the cross. When you click on it, you have a modal to cancel or confirm the action.

  - **Combinations**: This drop down is displayed only for a product with combinations. All the combinations are listed. You can select one combination or select “apply to all combinations”, so that the specific price is available for all combinations. By default, “Apply to all combinations” is selected.

  - **Available from**: Datefield. The specific price is applied only from the selected date and hour. When you click on the field a calendar is displayed and you can choose a date and also hour and minutes (improvement 11329). If you enter a wrong value (numbers or letter), when you click outside the field, the date previously selected (when you opened the calendar) is completed.

  - **Available to**: Datefield. The specific price is applied until the selected date and hour.. When you click on the field a calendar is displayed and you can choose a date and also hour and minutes (improvement 11329). If you enter a wrong value (numbers or letter), when you click outside the field, the date previously selected (when you opened the calendar) is completed.

  - **Starting at**: Quantity from which the specific price is applied. By default, it’s set to 1. In front-office the specific price isn’t displayed if this quantity isn’t reached.

  - **Product price tax excl**: To separate decimals a dot or a comma can be used, both should work no matter the language. This value change the original product price tax excl. In front-office, this price is displayed instead of the other.

  - **Leave initial price**: If the checkbox is not checked,  you can fill the product price tax excl field. Otherwise, the product price tax excl field is disabled. By default the checkbox is checked.

  - **Apply a discount of**: By default, it’s set to 0.000000 You can fill the discount amount or percent. To separate decimals a dot or a comma can be used, both should work no matter the language. 

  - **Apply a discount in**: Drop down allowing to choose if the specific price is in amount or in percent. There are 2 options: Default currency symbol & %. By default the default currency symbol is selected.

  - **Apply a discount**: Drop down with 2 options: tax included and tax excluded. It’s not displayed if you select a reduction in percent.

  - **Apply**: When you click on it, the specific price is created and you have a success message “Settings updated”. 

  - **Cancel**: If you click on Cancel, the form with all specific prices fields is closed. If you click again on Add a specific price, every fields are reseted to their default values.

- **List of specific prices & catalog price rules**: You see the specific price with all the details: rule, combination, currency, country, group, customer, fixed price, impact, period, from, actions (delete, update). Rule column contains “--” for a specific price. Here are also listed the catalog prices rules. Rule column contains the name of the catalog price rule. Actions edit & delete are not displayed for a catalog price rule.

- **Edit a specific price**: You can edit an existing specifice price. It opens a modal with all the fields described above. You can close the modal by clicking on the cross, on cancel or pushing ESC key. You can save your changes by clicking on Apply. A success message “Settings updated” is displayed.

- **Delete a specific price**: You can delete a specific price by clicking on the trash. When you click on it, you have a modal to cancel or confirm the action.

- **Priorities**: 4 dropdown with the same 4 options: Shop, Currency, Country, Group. By default, “group” is selected for the first dropdown, “currency” for the second, “country” for the third and “shop” for the last. Allow to define which specific price is applied first if a customer fit into multiple specific price conditions.

- **Apply to all products**:	Checkbox to apply the same priorities for all products.
