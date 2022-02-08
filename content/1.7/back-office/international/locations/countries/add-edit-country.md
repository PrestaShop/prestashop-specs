---
title: Add edit country
weight: 1
---

# Add edit country

When adding or editing a country, the following fields / drop-down / toggles are displayed:

 - **Country** - This field is mandatory. When trying to save without filling this field, the following error message is displayed: "The field name is required at least in _default language_.". This field can be translated: When several languages are installed, a drop-down next to the field is displayed with the default language selected. It allows choosing in which language the field is displayed and customizing it according to the language. Disabled languages are displayed in the drop-down.
The following tooltip is displayed: "Country name - Invalid characters: <>;=#{}".

 - **ISO code** - This is a mandatory field, when trying to proceed without enetering this field, the following error message is displayed: "The iso_code field is required.". If the field input is invalid, the following error message is displayed: "The iso_code field is invalid." The following tooltip is displayed: "Two -- or three -- letter ISO code (e.g. "us" for United States).". If you try to add a country with an already existing ISO, the following error will show: "This ISO code already exists.You cannot create two countries with the same ISO code."

 - **Call prefix** - This is a mandatory field. The following tooltip is displayed: "Internation call prefix, (e.g. 1 for United States)". When trying to proceed without enetering this field, the following error message is displayed: "The Call prefix field is required.". 
 
 - **Default currency** - This is a drop-down field which allows to seect a currency from the ones that are enabled on the shop. BY default the drop-down is set to: "Default store currency".
 
 - **Zone** - This drop-down allows selecting a zone. All the zones are listed (both enabled and disabled ones). The following tooltip is displayed: "Geographical region.".
 
 - **Does it need Zip/Postal code?** - This toggle indicates whether a user living in this country must give a zip code or not when signing up to the shop. The toggle can be put on "yes" or "no". By default, it is set to "yes". 

 - **Zip/Postal code format** - This field is mandatory.
The following help text is displayed: "Indicate the format of the postal code: use L for a letter, N for a number, and C for the country's ISO 3166-1 alpha-2 code. For example, NNNNN for the United States, France, Poland and many other; LNNNNLLL for Argentina, etc. If you do not want PrestaShop to verify the postal code for this country, leave it blank."

 - **Address format** - Firstly a box is displayed with the following default inputs: firstname lastname, company, address1, address2, city, State:name postcode, Country:name, phone. On the right a helptext is displayed: "Some countries require different elements than others. Click on the button below to get the valid default address format for this country."
Under the help text, the 5 following helper links are displayed and can be selected.  You can click on the various helper links on the side of the text-field in order to add more fields to the address format.
     - **Customer** -  the following parameters can be added to the address format: lastname, firstname, birthday, email, website, company, siret, reset_password_token, htmlFields. 
      - **Warehouse** - the following parameters can be added to the address format: reference, name, management_type, htmlFields
     - **Country** - the following parameters can be added to the address format: iso_code, name, zip_code_format, htmlFields
     - **State** - the following parameters can be added to the address format: iso_code, name, htmlFields 
     - **Address** - ithe following parameters can be added to the address format: company, lastname, firstname, address1, address2, postcode, city, other, phone, phone_mobile, vat_number, dni, htmlFields.
     
 Below there are 4 buttons with different actions:
 
     - **Use the last registered format** - When this button is pressed, the following modal is displayed: "Are you sure you want to restore the default address format for this country?", the options are: "ok", "cancel".
When pressed "ok" will input the address format box with the last registered formats.
     - **Use the default format** - When this button is pressed, the following modal is displayed: "Are you sure you want to restore the default address format for this country?", the options are: "ok", "cancel".
When pressed "ok" will input the address format box with the default address formats.
     - **Use my current modified format** - When pressed, prompts a message asking: "Are you sure you want to restore the default address format for this country?", the options are: "ok", "cancel".
     - **Clear format** - When pressed, prompts a message asking: "Are you sure you want to restore the default address format for this country?", the options are: "ok", "cancel". When "ok" is pressed, all the fields are removed from the address format.
     
 - **Active** - This toggle can be turned to "Yes" or "No" to enable or not the country. By default, it is set to "yes". A disabled country will not be suggested as an option when a visitor wants to register and create a new account. The tooltip displays: "Display this country to your customers (the selected country will always be displayed in the Back Office).
 - **Contains states** - This toggle indicates whether the country has "states" or not. It can be turned to "Yes" or "No". By default is set to "no". If set on "yes", this adds a new field to the address format.
 - **Do you need a tax identification number?** - This toggle can be turned to "Yes" or "No". By default, it is set to "no".
 - **Display tax label (e.g. "Tax incl.")** - This toggle allows choosing whether the tax status (included or excluded) should be displayed next to the prices or not. It can be turned to "Yes" or "No". By default, it is set to "yes".

## Call to action

- **Save:**
In the case of adding new country and if there is no error, the country is added and a success message is displayed on [countries listing]({{<ref "countries-listing.md">}} "countries listing") : "Creation successful". In the case of editing a country, the country is edited and a success message is displayed on [country listing]({{<ref "countries-listing.md">}} "countries listing") : "Successful update".
- **Cancel:**
The country is not added/edited and [country listing]({{<ref "countries-listing.md">}} "countries listing") is displayed.

## Multistore

The shop association block is displayed when the multistore is enabled and if several shops are configured.

👉 See the [specs of the shop association block]({{<ref "../../../multistoregeneralspecs.md#shop-association-block">}} "Shop association block") 
