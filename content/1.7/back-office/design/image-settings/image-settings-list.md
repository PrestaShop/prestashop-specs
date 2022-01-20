---
title: Image Settings
weight: 1
---
# SPECIFICATIONS - DESIGN > IMAGE SETTINGS

## Image Settings listing

![Image Settings listing](static/img/image-settings-image-settings.png)

|**Name**|**Width**|**Height**|**Products**|**Categories**|**Brands**|**Suppliers**|**Stores**|
|:------:|:-------:|:--------:|:----------:|:------------:|:--------:|:-----------:|:--------:|
|cart_default|125px|125px|:white_check_mark:|:x:|:x:|:x:|:x:|
|small_default|98px|98px|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|:x:|

During the first Prestashop installation process on the server, Prestashop installs 7 default image settings with the following default properties, that some are enabled and some are disabled.
- **cart_default** - Products is set to enabled, Categories is set to disabled, Brand is set to disabled, Suppliers is set to disabled, Stores is set to disabled.
- **small_default** - Products is set to enabled, Categories is set to enabled, Brand is set to enabled, Suppliers is set to enabled, Stores is set to disabled.
- **medium_default** - Products is set to enabled, Categories is set to disabled, Brand is set to enabled, Suppliers is set to enabled, Stores is set to disabled.
- **home_default** - Products is set to enabled, Categories is set to disabled, Brand is set to disabled, Suppliers is set to disabled, Stores is set to disabled.
- **large_default** - Products is set to enabled, Categories is set to disabled, Brand is set to enabled, Suppliers is set to enabled, Stores is set to disabled.
- **category_default** - Products is set to disabled, Categories is set to enabled, Brand is set to disabled, Suppliers is set to disabled, Stores is set to disabled.
- **stores_default** - Products is set to disabled, Categories is set to disabled, Brand is set to disabled, Suppliers is set to disabled, Stores is set to enabled.

## Image Settings table properties

- **Checkboxes** - each image setting can be checkboxed separately, if there is a need of Bulk Actions executions with certain image setting. By default, there is nothing selected.
- **ID** - value to describe the image setting unique operator. By default they are arranged automatically.
- **Name** - specific image setting value names. By default they are installed automatically.
- **Width** - describing the width of the image in pixels.
- **Height** - describing the height of the image in pixels.
- **Products** - indicating the enabled checkbox or the disabled cross operator, which can be clickable. Clicking these operators can toggle the enabling and disabling functionality directly from listing page.
- **Categories** - indicating the enabled checkbox or the disabled cross operator, which can be clickable. Clicking these operators can toggle the enabling and disabling functionality directly from listing page.
- **Brands** - indicating the enabled checkbox or the disabled cross operator, which can be clickable. Clicking these operators can toggle the enabling and disabling functionality directly from listing page.
- **Suppliers** - indicating the enabled checkbox or the disabled cross operator, which can be clickable. Clicking these operators can toggle the enabling and disabling functionality directly from listing page.
- **Stores** - indicating the enabled checkbox or the disabled cross operator, which can be clickable. Clicking these operators can toggle the enabling and disabling functionality directly from listing page.

## Image Settings table Filtering and UI action elements

- **ID text field** - it can be set as numeric value, before filtering execution.
- **Name field** - it can be set as text value, before filtering execution.
- **Width field** - it can be set as numeric value, before filtering execution.
- **Height field** - it can be set as numeric value, before filtering execution.
- **Products dropdown** - it can be set as selection of the dropdown values, by default the values are Enabled and Disabled. This should be done before filtering execution.
- **Categories dropdown** - it can be set as selection of the dropdown values, by default the values are Enabled and Disabled. This should be done before filtering execution.
- **Brands dropdown** - it can be set as selection of the dropdown values, by default the values are Enabled and Disabled. This should be done before filtering execution.
- **Suppliers dropdown** - it can be set as selection of the dropdown values, by default the values are Enabled and Disabled. This should be done before filtering execution.
- **Stores dropdown** - it can be set as selection of the dropdown values, by default the values are Enabled and Disabled. This should be done before filtering execution.
- **Search CTA button** - executes the filtering.
- **Edit CTA button** - executes the action of editing the specific image setting.
- **Arrow dropdown of Edit CTA button** - allows the functionality to execute Delete CTA with a deletion of the specific image setting.

## Bulk Actions

![Bulk Actions](static/img/image-settings-bulk-actions.png)

When there are multiple Image settings created, you can manage them and configure the main actions by using Bulk Actions button. <br>

- **Select All** - option to select all the listing items in Images settings list.
- **Unselect All** - option to unselect all the listing items in Images settings list.
- **Delete selected** - after selecting the specific multiple Image settings, it can be a deletion from the listing by one click.

## Image generation options

![Image generation options](static/img/image-settings-images-generation-options.png)

**Image format**

- Use JPEG.<br>
- Use PNG only if the base image is in PNG format.<br>
- Use PNG for all images.<br>
- Use WEBP only if the base image is in WEBP format.<br>
- Use WEBP for all images.<br>

**JPEG Compression**

This feature allows to change the JPEG files quality by compressing the images' quality. There is availability from 0 % - which is the worst quality to the 100 % - which is the best quality of the images. The recommended compression rate is 90 %. By default, the value is set to 90 %.

**PNG Compression**

This feature allows to change the PNG files quality by compressing the images' quality. There is availability from 0 - which is the worst quality to the 9 - which is the best quality of the images. The recommended compression rate is 7. By default, the value is set to 7.

**Generate images based on one side of the source image**

The feature allows to generate the images based on the one side of the source image. The default state is Automatic, and this value could take the biggest part of time in image generation process. The second 2 values are - Width or Height. The generation process will align to the value that is set.

**Maximum file size of product customization pictures**

The feature allows setting the maximum file size of product customization pictures that customers can upload to customize a product. The file size value is defined in bytes. The default value is set in the text field - 8388608 B (Bytes) which is 8.38 MB (Megabytes) - the default PHP file size upload limit.

**Product picture width**

This allows to set the max width pixels value of the customizable picture, that Prestashop customers can upload. The default width value is set to 64 px (Pixels).

**Product picture height**

This allows to set the max height pixels value of the customizable picture, that Prestashop customers can upload. The default height value is set to 64 px (Pixels).

**Generate high resolution images**

This functionality will get ability to generate high resolution images, which are of the best quality. When activating this, image duplicate will be generated. The duplicated image will contain bigger resolution and higher quality. In this case, total amount of images will be duplicated twice.

### Multistore behavior

In a specific shop context or in a group context, the options listed above should have [checkboxes](https://github.com/PrestaShop/PrestaShop/issues/19370) except the ones listed below that doesn't have checkbox and that is disabled with an information message displayed when the user hovers the drop-down: "You can modify this parameter in all shops context only. Switch context to enable it." (see issue [#19356](https://github.com/PrestaShop/PrestaShop/issues/19356))

In an all shops context, the options listed above should have [specific settings drop-down](https://github.com/PrestaShop/PrestaShop/issues/19322) except the ones listed below:

- Generate images based on one side of the source image
- Maximum file size of product customization pictures
- Product picture width
- Product picture height
- Generate high resolution images

:point_right: [Multistore general specs](../../multistoregeneralspecs.md)

:point_right: [Multistore special case: fields without checkboxes](../../../broader-topics/multistorespecialsspecs.md#list-of-pages--fields-for-specific-case-4-if-a-group-or-a-specific-shop-is-selected-some-fields-are-disabled-and-dont-have-checkboxes-allowing-to-enable-them)

## Regenerate thumbnails

![Thumbnails regeneration panel](static/img/image-settings-regenerate-thumbnails.png)

**Information message**

Regenerate thumbnails might be a touchy operation for the user.

In order to emphasize the irreversibility of this action, a yellow warning notification should be displayed before the feature's two options:

*Be careful! Depending on the options selected, former manually uploaded thumbnails might be erased and replaced by automatically generated thumbnails.
Also, regenerating thumbnails for all existing images can take several minutes, please be patient.*

[Learn more about all the defined notifications](#errors-and-notifications-in-ui) in Image settings page.

**Select an image**

There is a drop-down UI selection element, where certain value can be set for Images regeneration. By default, the value is set to "All" which means that the Images regeneration process will be applied to all the selections. Also, the **Select a format** drop-down values are hidden, by default. The selections are Categories, Brands, Suppliers, Products and Stores. After choosing one of the values from the drop-down, the Select a format drop-down will be displayed.<br>
- Categories format - category_default, small_default
- Brands format - large_default, medium_default, small_default
- Suppliers format - large_default, medium_default, small_default
- Products format - cart_default, home_default, large_default, medium_default, small_default
- Stores format - All or stores_default

**Erase previous images**

In order to avoid the user to delete his previous work to by mistake, the switch button should be set to 'No' by default.

Also, when clicking on 'Regenerate thumbnails', a pop up modal window should display the following message:

`title` = _Regenerate thumbnails_ in Admin.Actions<br/>
`confirm_message` = _Are you sure you want to regenerate thumbnails for the selected images? With the erase option enabled, the previous thumbnails of your selection will be deleted._ in Admin.Design.Notification

`confirm_button_label` = _Regenerate_ in Admin.Actions<br/>
`close_button_label` = _Cancel_ in Admin.Actions

## Errors and notifications in UI

The main important warning is once entering the Images setting page. It is specified as:<br>

*By default, all images settings are already installed in your store. Do not delete them, you will need it!*

Once the configuration is successfully saved, the UI prompts the following success notification:<br>

*The settings have been successfully updated.*

The Images generatioin options section is stated with information notification: <br>

*JPEG images have a small file size and standard quality. PNG images have a larger file size, a higher quality and support transparency. Note that in all cases the image files will have the .jpg extension.*

*WARNING: This feature may not be compatible with your theme, or with some of your modules. In particular, PNG mode is not compatible with the Watermark module. If you encounter any issues, turn it off by selecting "Use JPEG".*

Regenerate thumbnails warning notification:

*Be careful! Depending on the options selected, former manually uploaded thumbnails might be erased and replaced by automatically generated thumbnails.
Also, regenerating thumbnails for all existing images can take several minutes, please be patient.*

If the appropriate input text fields are not valid, the outcomming errors are:<br>

_There are 5 errors._<br>
_- The JPEG compression field is invalid._<br>
_- The PNG compression field is invalid._<br>
_- The Maximum file size of product customization pictures field is invalid._<br>
_- The Product picture width field is invalid._<br>
_- The Product picture height field is invalid._<br>

### Multistore behavior

The fields listed above don't have checkboxes and are available in all contexts (all shops, group, single store).
Images are regenerated for all shops, no matter the context selected.
