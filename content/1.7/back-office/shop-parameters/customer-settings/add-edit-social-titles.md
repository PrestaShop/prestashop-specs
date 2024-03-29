---
title: Add edit social titles
weight: 1
---

# Social titles

In this section 5 fields are presented:

1) Social title

This is a mandatory input field, the field is multi language, can be translated to a selected language that is installed on the shop. Has a tooltip: "Invalid characters: 0-9!<>,;?=+()@#"{}_$%:". Trying to save with the field empty will show an error: "The field name is required at least in *default shop language*".
Trying to save with invalid characters, should show an error but is not (See issue [#28320](https://github.com/PrestaShop/PrestaShop/issues/28320)).
The social title has a limit of 20 characters, if any more will be entered, when trying to save will show an error: "Your entry in field name exceeds max length 20 chars ( language () (incl. HTML tags). Trying to save in other languages selected 

2) Gender

In this section there are 3 options for selection (only 1 can be selected):

 - Male
 - Female
 - Neutral

3) Image

In this section, a button: "Add file" is presented, when pressed, a pop-up appears for uploading an image. When uploading a wrong format, an error is shown: "The image format is not recognized. The allowed formats are: .gif, .jpg, .png ".

4) Image width

Input field for the image width, by default has an input: "16". Only numbers are allowed in this section, when entering any other symbol, will show an error: "Width and height must be numeric values.".
Has a tooltip: "Image width in pixels. Enter "0" to use the original size.

5) Image height 

Input field for the image height, by default has an input: "16". Only numbers are allowed in this section, when entering any other symbol, will show an error: "Width and height must be numeric values.".
Has a tooltip: "Image height in pixels. Enter "0" to use the original size.

### Call to action

 - Cancel, when pressed redirects back to [specs of the view titles]({{<ref "view-titles.md">}} "view titles"), shows a message: "Successful update.". When an error is shown after trying to save, pressing "cancel" will cancel the error, after pressing again, the redirection to [specs of the view titles]({{<ref "view-titles.md">}} "view titles") will happen.
 - Save, when pressed redirects back to [specs of the view titles]({{<ref "view-titles.md">}} "view titles"), shows a message: "Successful update." Unless any of the fields have incorrect input, then the according error will be shown, and it will not allow to save until the error is fixed.
