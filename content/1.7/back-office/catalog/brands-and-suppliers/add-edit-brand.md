---
title: Add edit brand
weight: 1
---

In this page brand can be added or existing edited.

## Brands 

9 Fields below are presented:

1) Name

This field is mandatory, when trying to ssave it without entering the name, it will show the following message: "please fill out this field.". Below a helpt text is presented: "Invalid characters:<>;=#{}". When trying to save with invalid characters entered, will show the following error: " "*invalid characters that were input*" is invalid. 

2) Short description

This is a text input block, here it's possible select in which language the text will be written, all the imported languages to the shop will be shown. Below the allowed characters limit is shown: "0 of 21844 characters allowed", when trying to save with an exceeded number of characters entered (See issue [#27782](https://github.com/PrestaShop/PrestaShop/issues/27782)).
Above the text field there is a text editor with the following options:
 - **Source code**
 - **Color picker**
 - **Bold**
 - **Italic**
 - **Underline**
 - **Strikethrough**
 - **Blockquote**
 - **Insert/edit link**
 - **Allign selections**
 - **Bullet list**
 - **Numbered list**
 - **Table**
 - **Insert/edit image**
 - **Insert/edit video**
 - **Paragraph**

3) Description

This is a text input block, here it's possible select in which language the text will be written, all the imported languages to the shop will be shown. Below the allowed characters limit is shown: "0 of 21844 characters allowed", when trying to save with an exceeded number of characters entered (See issue [#27782](https://github.com/PrestaShop/PrestaShop/issues/27782)).
Above the text field there is a text editor with the following options:
 - **Source code**
 - **Color picker**
 - **Bold**
 - **Italic**
 - **Underline**
 - **Strikethrough**
 - **Blockquote**
 - **Insert/edit link**
 - **Allign selections**
 - **Bullet list**
 - **Numbered list**
 - **Table**
 - **Insert/edit image**
 - **Insert/edit video**
 - **Paragraph**

4) Logo

Field for uploading the logo, has a button on the right "Browse", when pressed, opens new window for uploading the logo. Below a help text is presented: "Upload a brand logo from your computer."

5) Meta title

Input for the meta title, can be translated: When several languages are installed, a drop-down next to the field is displayed. It allows choosing in which language the field is displayed and customizing it according to the language. Enabled languages are displayed in the drop-down. Help text below is presented: "Invalid characters:<>={}". When trying to save with invalid characters entered, will show the following error: " "*invalid characters that were input*" is invalid, and shows the language that they were saved with. 

6) Meta description

Input for the meta description, can be translated: When several languages are installed, a drop-down next to the field is displayed. It allows choosing in which language the field is displayed and customizing it according to the language. Enabled languages are displayed in the drop-down. Help text below is presented: "Invalid characters:<>={}" When trying to save with invalid characters entered, will show the following error: " "*invalid characters that were input*" is invalid, and shows the language that they were saved with. 

7) Meta keywords

Input for the meta keywords, can be translated: When several languages are installed, a drop-down next to the field is displayed. It allows choosing in which language the field is displayed and customizing it according to the language. Enabled languages are displayed in the drop-down. 
When a keyword is entered, and "Enter" is pressed, the keyword becomes blue in the input field, gets a delete "x" button in it as well for removing it.
Help text below is presented: "To add tags, click in the field, write something, and then press the "Enter" key. Invalid characters:<>={}". When trying to save with invalid characters entered, will show the following error: "adsdsa, dsadsa, <>" is invalid - Language: "

8) Enabled

This is a toggle switch that can be turned to "Yes" or "No", by default it is set to "Yes"

9) Shop association

The shop association block is displayed when the multistore is enabled and if several shops are configured.

👉 See the [specs of the shop association block]({{<ref "../../../multistoregeneralspecs.md#shop-association-block">}} "Shop association block") 

### Call to action

 - Cancel, when pressed redirects back to the [specs of the brands]({{<ref "brands-and-suppliers-brands.md">}} "brands") 

 - Save, when pressed redirects back to the [specs of the brands]({{<ref "brands-and-suppliers-brands.md">}} "brands") shows the following message: "Successful creation.".
