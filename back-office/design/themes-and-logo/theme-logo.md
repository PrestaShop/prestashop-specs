# SPECIFICATIONS -DESIGN > THEME & LOGO > THEME & LOGO


_As a merchant, I want to be able to set up my store's look._

This page refers to the issue: \#10576 

The page can have extra sections if I have many themes installed, if I enable multistore feature, if I have languages who needs RTL features or if I have MBO module installed.


## Header

There are 4 buttons: 

1) Add new theme bring to =&gt; Design &gt; Theme & Logo &gt; Add new theme 

2) Export current theme =&gt; Generate a zip of the current theme used at the root of theme file 

3) Recommended modules and services =&gt; this button is displayed only if MBO module is intalled. Clicking on it displays a pop up with recommended modules. 

4) Help =&gt; open the help section on the page \(this section appear on many different pages

## Menu

In the menu there are 3 tabs: 

- Theme and logo (current page) 
- "Pages configuration" and "advanced customization" who come from the module Theme customization. IMPROVEMENT to do : If the module is disabled, hide those 2 pages from the menu \(on 1.7.5 it’s hidden\) Configuration of home page Advanced Personnalisation

## Adaptation to Right-to-Left languages

This section appears if i have language who support RTL on my store \(like Arabic or Hebrew\) even if it’s not the language selected.

You can select a theme and generate a RTL stylesheet.

## Logo 

IMPROVEMENT to do : when i import a logo it’s not resized it must be to avoid the breaking of the page

**Header logo.** It should be displayed in the header, on all front office pages. PrestaShop's default theme uses the 'Classic' _my store_ logo. Once the image is saved, by clicking on the _Save_ button at the right bottom of this section, users should be able to have a preview of their logo.

**Mail & invoice logo.** PrestaShop's default theme uses the 'Classic' _my store_ logo. The mail logo should be displayed in emails' header. The invoice logo should be displayed in invoices' header. In both cases, if no mail nor invoice logo image is defined, the header logo (as the main logo image) is used. Once the image is saved, by clicking on the _Save_ button at the right bottom of this section, users should be able to have a preview of their logo.

**Favicons.** By default, the favicon is the PrestaShop logo. A light text is written below, _Use our favicon generator on PrestaShop Marketplace to boost your brand image!_, that redirects to the Addons' favicon generator - English page: https://addons.prestashop.com/en/create-favicon.php. Once the image is saved, by clicking on the _Save_ button at the right bottom of this section, users should be able to have a preview of their logo.

All logo images should be imported via the upload field, with the placeholder _Choose file(s)_ and the CTA _Browse_, all being clickable items opening the user's local files. Available logo images extensions are: .gif, .jpg, .jpeg, .jpe, .png, .svg.


### Multistore behavior

In a multistore context, the options listed above have [checkboxes](https://github.com/PrestaShop/PrestaShop/issues/19375) and [specific settings drop-down](https://github.com/PrestaShop/PrestaShop/issues/19327), take a look at the conditions and specs [here](https://github.com/PrestaShop/prestashop-specs/blob/master/back-office/multistoregeneralspecs.md)

The multistore yes / no toggle allowing to select all / unselect all checkboxes should be removed.

## My themes 

All the themes imported are displayed here with a preview.

A button "use this theme" is displayed for themes not currently used. After clicking on it, the current theme is switched with the one selected and "My current theme" is displayed for the theme used.

A button "delete" is displayed for themes not currently used. After clicking on it, a modal is didsplayed: "Delete this theme ?". A button "Cancel" and a "cross" allows to cancel the deletion. A button "Yes" allows to confirm the deletion. A message "Successful deletion." is displayed to confirm the deletion.

### Multistore behavior

The button "use this theme" is enabled only in a specific shop context.

If "all shops" or a group of shops is selected as context, this button is disabled.

### Visit the theme catalog 

The button “Visit the theme catalog” redirects to this link: https://addons.prestashop.com/en/3-templates-prestashop?utm_source=back-office&utm_medium=theme-button&utm_campaign=back-office-EN&utm_content=download

### Choose layouts 

After clicking on choose layouts button, we end up on a different page: Design &gt; Theme & Logo &gt; Choose layouts

### Reset to defaults

The button “reset to defaults” appear next to the “choose layouts” only if the debug mode is enabled.
It allows to rest all modifications made on the page choose layouts.

### Live from PrestaShop addons

If MBO module is installed, on the footer this section will appear. Always on the bottom of the page

