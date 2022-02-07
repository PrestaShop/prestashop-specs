---
title: Add new Image type
weight: 1
---

# Design > Image Settings > Add new Image type

## Adding or editing Image type UI

![Adding or editing Image type panel](static/img/image-settings-add-edit-image-type.png)

This configuration UI is about adding the new Image type into the Image type listing.

During default Image type configuration, the notification is prompted as error: <br>
_By default, all images settings are already installed in your store. Do not delete them, you will need it!_

There are the following input text fields, that can be set:

- **Name for the image type**  - this is a required field, that describes the main name of the image type. The image type name should be used with underscores and hyphens only. Fore example, that could be _small_custom_, _large_, _custom-modified_small_. By default this input text field is empty. Tooltip: Letters, underscores and hyphens only (e.g. "small_custom", "cart_medium", "large", "thickbox_extra-large").
- **Width** - this is a required field, that sets the numeric value of Image type width in pixels. By default, this input text field is empty. Tooltip: Maximum image width in pixels.
- **Height** - this is a required field, that sets the numeric value of Image type height in pixels. By default, this input text field is empty. Tooltip: Maximum image height in pixels.
- **Products** - this toggle switch button can be set for using images type for Prestashop Products. By default, the button is disabled. Tooltip: This type will be used for Product images.
- **Categories** - this toggle switch button can be set for using images type for Prestashop Categories. By default, the button is disabled. Tooltip: This type will be used for Category images.
- **Brands** - this toggle switch button can be set for using images type for Prestashop Brands. By default, the button is disabled. Tooltip: This type will be used for Brand images.
- **Suppliers** - this toggle switch button can be set for using images type for Prestashop Suppliers. By default, the button is disabled. Tooltip: This type will be used for Supplier images.
- **Stores** - this toggle switch button can be set for using images type for Prestashop Stores. By default, the button is disabled. Tooltip: This type will be used for Store images.

After the invalid set of the configuration in this page, for all the input text fields, the UI is prompting the error: <br>
_There are 3 errors.<br>
The name field is invalid.<br>
The width field is invalid.<br>
The height field is invalid._<br>

After leaving the required fields empty in this page, for all the input text fields, the UI is prompting the error: <br>
_There are 3 errors.<br>
The name field is required.<br>
The width field is required.<br>
The height field is required._<br>

After setting up the Image type configuration, the UI prompts the warning notification: <br>
_After modification, do not forget to regenerate thumbnails_

 ## Call to action 
 There are 2 buttons at the bottom of this page: 
 - **Cancel**: The image type is not added/edited and the image settings page is displayed
 - **Save**: In the case of adding an image type and if there is no error, the image type is added and a success message is displayed on the top of image settings page : "Successful creation.". In the case of editing an image type, the image is edited and a success message is displayed on the top of the image settings page : "Successful update.".

## Multistore behavior

The fields listed above don't have checkboxes and are available in all contexts (all shops, group, single store).
Images types are set for all shops, no matter the context selected.
