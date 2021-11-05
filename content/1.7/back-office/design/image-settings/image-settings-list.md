---
title: Generation Options
weight: 1
---
# SPECIFICATIONS - DESIGN > IMAGE SETTINGS

## Image Settings listing
During the first Prestashop installation process on the server, Prestashop installs 7 default image settings with the following default properties.
- **cart_default** - Products is set to enabled, Categories is set to disabled, Brand is set to disabled, Suppliers is set to disabled, Stores is set to disabled.
- **small_default** - Products is set to enabled, Categories is set to enabled, Brand is set to enabled, Suppliers is set to enabled, Stores is set to disabled.
- **medium_default** - Products is set to enabled, Categories is set to disabled, Brand is set to enabled, Suppliers is set to enabled, Stores is set to disabled.
- **home_default** - Products is set to enabled, Categories is set to disabled, Brand is set to disabled, Suppliers is set to disabled, Stores is set to disabled.
- **large_default** - Products is set to enabled, Categories is set to disabled, Brand is set to enabled, Suppliers is set to enabled, Stores is set to disabled.
- **category_default** - Products is set to disabled, Categories is set to enabled, Brand is set to disabled, Suppliers is set to disabled, Stores is set to disabled.
- **stores_default** - Products is set to disabled, Categories is set to disabled, Brand is set to disabled, Suppliers is set to disabled, Stores is set to enabled.

## Image Settings table properties
- **Checkboxes** - each image setting can be checkboxed separately, if there is a need of Bulk Actions executions with certain image setting. By default, there is nothing selected.
- **ID** - specific digital value to describe the image setting unique operator. By default they are arranged automatically.
- **Name** - specific image setting value names. By default they are installed automatically.
- **Width** - specific image setting value, describing the width of the image in pixels. By default the specific width is installed.
- **Height** - specific image setting value, describing the height of the image in pixels. By default the specific height is installed.
- **Products** - specific image setting value, indicating the enabled checkbox or the disabled cross operator, which can be clickable. Clicking these opeartors can toggle the enabling and disabling functionality directly from listing page.
- **Categories** - specific image setting value, indicating the enabled checkbox or the disabled cross operator, which can be clickable. Clicking these opeartors can toggle the enabling and disabling functionality directly from listing page.
- **Brands** - specific image setting value, indicating the enabled checkbox or the disabled cross operator, which can be clickable. Clicking these opeartors can toggle the enabling and disabling functionality directly from listing page.
- **Suppliers** - specific image setting value, indicating the enabled checkbox or the disabled cross operator, which can be clickable. Clicking these opeartors can toggle the enabling and disabling functionality directly from listing page.
- **Stores** - specific image setting value, indicating the enabled checkbox or the disabled cross operator, which can be clickable. Clicking these opeartors can toggle the enabling and disabling functionality directly from listing page.

## Image Settings table Filtering and UI elements
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

When there are multiple Image settings created, you can manage them and configure the main actions by using Bulk Actions button. <br>

- **Select All** - option to select all the listing items in Images settings list.
- **Unselect All** - option to unselect all the listing items in Images settings list.
- **Delete selected** - after selecting the specific multiple Image settings, it can be a deletion from the listing by one click.

## Image generation options

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

:point_right: [Multistore general specs](../../multistoregeneralspecs.md)

:point_right: [Multistore special case: fields without checkboxes](../../../broader-topics/multistorespecialsspecs.md#list-of-pages--fields-for-specific-case-4-if-a-group-or-a-specific-shop-is-selected-some-fields-are-disabled-and-dont-have-checkboxes-allowing-to-enable-them)
