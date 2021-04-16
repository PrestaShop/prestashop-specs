# SPECIFICATIONS - DESIGN > IMAGE SETTINGS

## IMAGE SETTINGS

[TO BE COMPLETED]

## IMAGE GENERATION OPTIONS

**Image format**

- Use JPEG.<br>
- Use PNG only if the base image is in PNG format.<br>
- Use PNG for all images.<br>
- Use WEBP only if the base image is in WEBP format.<br>
- Use WEBP for all images.<br>

**JPEG Compression**

**PNG Compression**

**Generate images based on one side of the source image**

**Maximum file size of product customization pictures**

**Product picture width**

**Product picture height**

**Generate high resolution images**

### Multistore behavior

In a specific shop context or in a group context, the options listed above should have [checkboxes](https://github.com/PrestaShop/PrestaShop/issues/19370) except the ones listed below that doesn't have checkbox and that is disabled with an information message displayed when the user hovers the drop-down: "You can modify this parameter in all shops context only. Switch context to enable it." (see issue [#19356](https://github.com/PrestaShop/PrestaShop/issues/19356))

In an all shops context, the options listed above should have [specific settings drop-down](https://github.com/PrestaShop/PrestaShop/issues/19322) except the ones listed below:

- Generate images based on one side of the source image
- Maximum file size of product customization pictures
- Product picture width
- Product picture height
- Generate high resolution images

:point_right: [Multistore general specs](../../../multistoregeneralspecs.md)

:point_right: [Multistore special case: fields without checkboxes](../../../../broader-topics/multistorespecialsspecs.md#list-of-pages--fields-for-specific-case-4-if-a-group-or-a-specific-shop-is-selected-some-fields-are-disabled-and-dont-have-checkboxes-allowing-to-enable-them)


## REGENERATE THUMBNAILS

**Information message**

Regenerate thumbnails might be a touchy operation for the user.

In order to emphasize the irreversibility of this action, a yellow warning notification should be displayed before the feature's two options:

_Be careful! Depending on the options selected, former manually uploaded thumbnails might be erased and replaced by automatically generated thumbnails._<br/>
_Also, regenerating thumbnails for all existing images can take several minutes, please be patient._, localized in Admin.Design.Notification

**Select an image**

[TO BE COMPLETED]

**Erase previous images**

In order to avoid the user to delete his previous work to by mistake, the switch button should be set to 'No' by default.

Also, when clicking on 'Regenerate thumbnails', a pop up modal window should display the following message:

`title` = _Regenerate thumbnails_ in Admin.Actions<br/>
`confirm_message` = _Are you sure you want to regenerate thumbnails for the selected images? With the erase option enabled, the previous thumbnails of your selection will be deleted._ in Admin.Design.Notification

`confirm_button_label` = _Regenerate_ in Admin.Actions<br/>
`close_button_label` = _Cancel_ in Admin.Actions

### Multistore behavior

The fields listed above don't have checkboxes and are available in all contexts (all shops, group, single store).
Images are regenerated for all shops, no matter the context selected.


