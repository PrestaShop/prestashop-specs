---
title: Add new country
weight: 1
---

# Add new country

When adding a new country, these are the fields shown below:

 - **Country** - This is a mandatory field, when trying to proceed without enetering this field, the following error message is displayed: "The field name is required at least in English (English).". This field can be translated: When several languages are installed, a drop-down next to the field is displayed with default language selected. It allows choosing in which language the field is displayed and customizing it according to the language. Disabled languages are displayed in the drop-down.
The following tooltip is displayed: "Country name - Invalid characters: <>;=#{}".

 - **ISO code** - This is a mandatory field, when trying to proceed without enetering this field, the following error message is displayed: "The iso_code field is required.". If the field input is invalid, the following error message is displayed: "The iso_code field is invalid." The following tooltip is displayed: "Two -- or three -- letter ISO code (e.g. "us" for United States).".

 - **Call prefix** - This is a mandatory field. The following tooltip is displayed: "Internation call prefix, (e.g. 1 for United States)".
 
 - **Default currency** - This is a drop-down field which allows to seect a currency from the ones that are enabled on the shop.
 
 - **Zone** - This is a drop-down field with all the zones that can be selected. The following tooltip is displayed: "Geographical region.".
 
 - **Does it need Zip/Postal code?** - Toggle switch for either "yes" or "no". By default is set to "yes".

 - **Zip/Postal code format** - This is a mandatory field.
The following helptext below is displayed: "Indicate the format of the postal code: use L for a letter, N for a number, and C for the country's ISO 3166-1 alpha-2 code. For example, NNNNN for the United States, France, Poland and many other; LNNNNLLL for Argentina, etc. If you do not want PrestaShop to verify the postal code for this country, leave it blank."

 - **Address format** - Firstly a box is displayed with the following default inputs: firstname lastname, company, address1, address2, city, State:name postcode, Country:name, phone. On the right a helptext is displayed: "Some countries require different elements than others. Click on the button below to get the valid default address format for this country."
Under the helptext there are 5 fields that can be pressed, and when pressed on any of the selections will be added to the address format input box:
     - **Customer** -  in this section it's possible to press the "+" sign to add to the format the following inputs: lastname, firstname, birthday, email, website, company, siret, reset_password_token, htmlFields. 
     - **Warehouse** - in this section it's possible to press the "+" sign to add to the format the following inputs: reference, name, management_type, htmlFields
     - **Country** - in this section it's possible to press the "+" sign to add to the format the following inputs: iso_code, name, zip_code_format, htmlFields
     - **State** - in this section it's possible to press the "+" sign to add to the format the following inputs: iso_code, name, htmlFields 
     - **Address** - in this section it's possible to press the "+" sign to add to the format the following inputs: company, lastname, firstname, address1, address2, postcode, city, other, phone, phone_mobile, vat_number, dni, htmlFields.
     
 Below there are 4 buttons with different actions:
     - **Use the last registered format** - When pressed, prompts a message asking: "Are you sure you want to restore the default address format for this country?", the options are: "ok", "cancel".
When pressed "ok" will input the address format box with the last registered formats.
     - **Use the default format** - When pressed, prompts a message asking: "Are you sure you want to restore the default address format for this country?", the options are: "ok", "cancel".
When pressed "ok" will input the address format box with the default address formats.
     - **Use my current modified format** - When pressed, prompts a message asking: "Are you sure you want to restore the default address format for this country?", the options are: "ok", "cancel".
When pressed "ok" will input the address format box with the current modified formats.
     - **Clear format** - When pressed, prompts a message asking: "Are you sure you want to restore the default address format for this country?", the options are: "ok", "cancel".
When pressed "ok" will remove all the formats.
     
 - **Active** - Toggle switch that can be turned to "Yes" or "No". By default is set to "yes".
 - **Contains states** - Toggle switch that can be turned to "Yes" or "No". By default is set to "no".
 - **Do you need a tax identification number?** - Toggle switch that can be turned to "Yes" or "No". By default is set to "no".
 - **Display tax label (e.g. "Tax incl.")** - Toggle switch that can be turned to "Yes" or "No". By default is set to "yes".

## Call to action

- **Save:**
In the case of adding new country and if there is no error, the country is added and a success message is displayed on [countries listing]({{<ref "countries-listing.md">}} "countries listing") : "Creation successful". In the case of editing a country, the country is edited and a success message is displayed on [country listing]({{<ref "country-listing.md">}} "country listing") : "Successful update".
- **Cancel:**
The country is not added/edited and [country listing]({{<ref "country-listing.md">}} "country listing") is displayed.

