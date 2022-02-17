---
title: Theme&logo add new theme
weight: 1
---

In this page theme for the shop can be uploaded.

### Call to action

 - **Add new theme** - does not redirect anywhere, refreshes the same page.
 - **Export current theme** - when pressed redirects to the [specs of the Theme&logo listing]({{<ref "Theme&logo-listing.md">}} "Theme&logo listing"), also shows the message: "Your theme has been correctly exported: "URL of the theme location in your files".

Below there are 3 tables:

## Import from your computer

In here field named "Zip file" is present, it has a button: "Browse", when pressed opens a window where a file can be chosen to upload. It also has a help text: "Browse your computer files and select the Zip file for your new theme."

Below a call to action button "Save" is presented, when a file is uploaded, and the button is pressed, theme will be uploaded.
If the format of the uploading file isn't correct, the following error will be shown: "Invalid file format.".
If no file is uploaded, when pressing "Save", the following message is shown: "Please select theme's import source.".

## Import from the web

In here an input field named "Archive URL" is present. It has a help text: "Indicate the complete URL to an online Zip file that contains your new theme. For instance, "http://example.com/files/theme.zip"."

Below it has a button "Save", when pressing the button with an empty field, a message at the top is shown: "Please select theme's import source.". If an incorrect URL is entered, when trying to save, will show the error (See issue [27713](https://github.com/PrestaShop/PrestaShop/issues/27713))

## Import from FTP

In this section there is a drop down field "Select the archive", when pressed, it will show the options of the already uploaded .zip files in the file directoty. 
Has a help text below: "This selector lists the Zip files that you uploaded in the '/themes' folder." If a theme that is already used is selected in the drop-down, when pressing save will show the following error: "There is already a theme classic in your themes folder. Remove it if you want to continue."

