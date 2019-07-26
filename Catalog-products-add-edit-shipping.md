**As a merchant I want to be able to manage carriers information for my products.**

This tab is not displayed for a virtual product.

Here is the list of the elements of shipping tab:

- **Width**: By default it’s filled with 0. I set the width, carriers that does not accept products greater than this width are not displayed in front-office. The dimension unit displayed next to the field is the one defined in International > Localization. To separate decimals a dot or a comma can be used, both should work no matter the language. 

- **Height**: By default it’s filled with 0. I set the height, carriers that does not accept products greater than this height are not displayed in front-office. The dimension unit displayed next to the field is the one defined in International > Localization. To separate decimals a dot or a comma can be used, both should work no matter the language.

- **Depth**: By default it’s filled with 0. I set the depth, carriers that does not accept products greater than this depth are not displayed in front-office. The dimension unit displayed next to the field is the one defined in International > Localization. To separate decimals a dot or a comma can be used, both should work no matter the language.

- **Weight**: By default it’s filled with 0. I set the weight, carriers that does not accept products greater than this weight are not displayed in front-office. The weight unit displayed next to the field is the one defined in International > Localization. To separate decimals a dot or a comma can be used, both should work no matter the language.

- **Delivery time**: 3 radio buttons: 
  1) None: No delivery time is displayed on the product page in front-office
  2) Default delivery time: If the product is in stock, the value filled in Shop parameters > Products settings > “Delivery time of in-stock products” is displayed on the product page in front-office. If the product is out of stock but orders are allowed, the value filled in Shop parameters > Products settings > “Delivery time of out-of-stock products with allowed backorders” is displayed on the product page in front-office. There is an “edit” link that opens Shop parameters > Products settings in a new browser tab next to the radio button label. 
  3) Specific delivery time to this product: If the product is in stock, the value filled in “Delivery time of in-stock products” is displayed on the product page in front-office. If the product is out of stock but orders are allowed, the value filled in “Delivery time of out-of-stock products with allowed orders” is displayed on the product page in front-office.

- **Delivery time of in-stock products**: There is a placeholder: “Delivered within 3-4 days” and a subtitle under the field: “Leave empty to disable.”

- **Delivery time of out-of-stock products with allowed orders**: There is a placeholder: “Delivered within 5-7 days” and a subtitle under the field: “Leave empty to disable.”

- **Additional shipping fees**: By default, it’s filled with 0.000000 The amount is added to the total shipping cost according to the carrier selected in front-office. 

- **Available carriers**: Checkbox with all carriers with the id of the carrier, the name and the delay (issue 11379) Only the selected carriers can be displayed in FO. There is an information message under all the checkboxes: “If no carrier is selected then all the carriers will be available for customers orders”
