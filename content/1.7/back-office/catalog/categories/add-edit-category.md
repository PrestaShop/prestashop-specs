---
title: Add/edit category
weight: 1
---

# Add new/edit category

In this page 13 fields are shown:

1) Name

Mandatory input field for the name. Below a text is displayed: "Invalid characters: <>;=#{}". When trying to save with the field empty, a message is shown: "The field name is required at least in your default language.". When trying to save with invalid characters, the following message is shown: ""*input characters displayed*" is invalid. - Language: *displays the language the filed is in*". This field can be translated: When several languages are installed, a drop-down next to the field is displayed. It allows choosing in which language the field is displayed and customizing it according to the language. Enabled languages are displayed in the drop-down.

2) Displayed

Toggle switch, which by default is set to "Yes". A tooltip for this toggle switch is shown: "Click on "Displayed" to index the category on your shop.". Below a help text is shown: "If you want a category to appear in the menu of your shop, go to Modules > Module Manager and configure your menu module.".

3) Parent category

This is a mandatory field. It displays the category from which the item is located. It's possible to press "expand", when pressed, all the categories are shown, including the category which by default is selected: "Stationery". It's impossible to unselect a category, one must be selected.

4) Description

This is a text input block, here it's possible select in which language the text will be written, all the imported languages to the shop will be shown. Below the allowed characters limit is shown: "0 of 21844 characters allowed", when trying to save with an exceeded number of characters entered (See issue [#27782](https://github.com/PrestaShop/PrestaShop/issues/27782)).
bove the text field there is a text editor with the following options:

 - **Source code** - when pressed, the source code pop up shows up, and can be edited.

 - **Color picker** - when pressed a color picker pop-up appears, in there i'ts possible to choose a color from the color palette. There's also input for "HEX", as well as FOR "R:", "G:" and "B:". Also there are 3 call to action buttons: 
    - Cancel - when pressed, closes the pop-up.
    - Back color - when pressed, uses the the selected color for the background.
    - Text color - when pressed, uses the selected color for the text.

 - **Bold** - when pressed, makes the text bold.

 - **Italic** - when pressed, makes the text fromat italic.

 - **Underline** - when pressed, underlines the text.

 - **Strikethrough** - when the text gets crossed with a line.

 - **Blockquote** - when pressed, moves the text aside as a quote.

 - **Insert/edit link** - when pressed, a pop-up appears for entering the "URL", "text to display", below there are 3 drop-downs:
    - Rel - when pressed, can select "None" or "nofollow"
    - Target - when pressed, can select "None" or "New window"
    - button style - when pressed, can select "None" or "button"
Call to action buttons are: "Ok" and "cancel"

 - **Allign selections** - Drop-down menu, from it can select:
    - Allign left - alligns text to the left.
    - Alligh right - alligns text to the right.
    - Allign center - alligns text to the center.
    - Justify - alligns the text evenly.

 - **Bullet list** - Drop-down menu, possible selections:
    - Default
    - Circle
    - Disc
    - Square

 - **Numbered list** - Drop-down menu, possible selections:
    - Default
    - Lower Alpha
    - Lower Greek
    - Lower Roman
    - Lower Alpha
    - Upper Roman
    
 - **Table** - Drop-down menu, possible selections:
    - Insert table, when pressed, a 10x10 active table selection appears that can input a selected table to the description.
    - Table properties
    - Delete table
    - Cell, when pressed 3 more options appear: Cell properties, Merge cells, Split cells
    - Row - when pressed 8 more options appear: Insert row before, Insert row after, Delete row, Row properties, Cut row, Copy row, Paste row before, Paste row after
    - Column - when pressed 3 more options appear: Insert column before, Insert column after, Delete column
    
 - **Insert/edit image** - when pressed, a pop-up appears for:
    - Source
    - Image description
    - Dimensions (2 tables have a check mark on the right for "Constrain proportions" by default it is checked).
    - 2 call to action buttons are displayed: "Ok" and "Cancel".
    
 - **Insert/edit video** - when pressed 2 sections are available: General (default) and Embed
    - When General is selected the following options appear: Source input, Alternative source input, Poster input, dimensions input (2 tables have a check mark on the right for "Constrain proportions" by default it is checked).
    - 2 call to action buttons are displayed: "Ok" and "Cancel".
When Embed is pressed, the following text is shown: "Paste your embed code below:" and an input field below is displayed.
    - 2 call to action buttons are displayed: "Ok" and "Cancel".
     
 - **Paragraph** - when pressed 8 selections are offered: Paragraph, Heading 1, Heading 2, Heading 3, Heading 4, Heading 5, Heading 6, Preformatted

A limit below the field is shown: "0 of 21844 characters allowed".

Below text is shown: "Invalid characters: <>;=#{}".

5) Category cover image

This field has a placeholder: "Choose file(s)", and a button on the right "Browse", when pressed, you can upload a file for the cover image. Help text below is shown: "This is the main image for your category, displayed in the category page. The category description will overlap this image and appear in its top-left corner.".

6) Category thumbnail

This field has a placeholder: "Choose file(s)", and a button on the right "Browse", when pressed, you can upload a file for the category thumbnail. Help text below is shown: "Displays a small image in the parent category's page, if the theme allows it.".

7) Menu thumbnails

This field has a placeholder: "Choose file(s)", and a button on the right "Browse", when pressed, you can upload a file for the menu thumbnail. Help text below is shown: "The category thumbnail appears in the menu as a small image representing the category, if the theme allows it.".

8) SEO preview

In this field the URL of the category is shown, and a text below is shown: "Here is a preview of how your page will appear in search engine results.".

9) Meta title

Input for the meta title, has a placeholder: "To have a different title from the category name, enter it here.". Has a tooltip: "Invalid characters: <>;=#{}". This field can be translated: When several languages are installed, a drop-down next to the field is displayed. It allows choosing in which language the field is displayed and customizing it according to the language. Enabled languages are displayed in the drop-down.
Below the characters are counted and updated live: "0 of 70 characters used (recommended)".

10) Meta description

Input for the meta description placeholder: "To have a different description than your category summary in search results". Has a tooltip: "Invalid characters: <>;=#{}". This field can be translated: When several languages are installed, a drop-down next to the field is displayed. It allows choosing in which language the field is displayed and customizing it according to the language. Enabled languages are displayed in the drop-down.
Below the characters are counted and updated live: "0 of 160 characters used (recommended).

11) Meta keywords

Input for the meta keywords placeholder: "Add tag". This field can be translated: When several languages are installed, a drop-down next to the field is displayed. It allows choosing in which language the field is displayed and customizing it according to the language. Enabled languages are displayed in the drop-down. Below a text is shown: "To add tags, click in the field, write something, and then press the "Enter" key. Invalid characters: <>;=#{}".
When a keyword is added, it will appear in the field, it will have an "x" mark for it to be removed.

12) Friendly URL

This is a mandatory field, has a text below: "Only letters, numbers, underscore (_) and the minus (-) character are allowed". When trying to save with the field empty, will show the error: "The field link_rewrite is required at least in your default language.".This field can be translated: When several languages are installed, a drop-down next to the field is displayed. It allows choosing in which language the field is displayed and customizing it according to the language. Enabled languages are displayed in the drop-down. Below a text is shown: "To add tags, click in the field, write something, and then press the "Enter" key. Invalid characters: <>;=#{}".

13) Group access

This is a mandatory table with the following table which contains the following options: 

 - Select all
 - Visitor
 - Guest
 - Customer

By default visitor, guest and customer are selected. Below a help text is shown: "Mark all of the customer groups which you would like to have access to this category."

Lower a table with the following information is shown: 

You now have three default customer groups.

Visitor - All people without a valid customer account.

Guest - Customer who placed an order with the guest checkout.

Customer - All people who have created an account on this site.

### Call to action

 - Cancel, redirects back to [specs of the categories]({{<ref "view-categories.md">}} "view categories")
 - Save, when pressed shows the following message: "Successful creation.", redirects back to [specs of the categories]({{<ref "view-categories.md">}} "categories").
