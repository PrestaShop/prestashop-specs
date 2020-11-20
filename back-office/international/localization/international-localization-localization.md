# GENERAL SPECS LOCALIZATION BACKOFFICE

As a merchant I need to be able to manage my owl localization.

## WHAT

Thus, in this project we aim at the current and expected behaviours when we add, edit or delete localizations.

## WHY

As a merchant, being able to manage localizations will help to have my own units, languages, and currencies for each country separately or adding and/or modifying my own states and zones for each country as well.

## SPECIFICATIONS

### Help button

Clicking 'Help' button on the top right-hand corner of the page should open a dialog box containing help and guides regarding importing a localization pack, configuring localizations, modifying local units, and advanced parameters.

### Import a localization pack

Using this section will give you the ability to import the desired country's localizations.</br>
- If you select a country that you do not already have it inside your shop, it will import all localizations you selected for it.
- If you select a country that you already have it inside your shop, it will update the localizations you selected for it.

**Localization pack you want to import**

The list of countries will show up on clicking on it. It can be selected by:
- Searching the list via the search input field by typing the complete country name or part of it (at least one word).
- Scrolling down the list and find the country which are sorted by their name (a-z).

**Content to import**

The contents to import are listed as check-boxes to be selected:
- States (checked by default)
- Taxes (checked by default)
- Currencies (checked by default)
- Languages (checked by default)
- Units (e.g. weight, volume, distance) (checked by default)
- Change the behavior of the price display for groups (un-cheked by default)
By checking the 'Change the behavior of the price display for groups' the behaviour of displaying prices will be affected on both BackOffice (back-office/international/locations/Countries.md, back-office/shop-parameters/customer-settings/groups.md) and FrontOffice (front-office/product-page.md, front-office/products/list.md, front-office/Discounts). This option will override the default behaviour for selected country if you already have it inside your shop.

**Download pack data**

Shows a YES/NO toggle button which is set to 'YES' by default. If 'YES' is set, the localizations that are selected on 'Content to import' section will be downloaded from prestashop.com CLDR directory and override the local CLDR localizations. If set to 'NO' it will use the local CLDR localizations (localization/CLDR/core/common/main/country-code.xml, localization/CLDR/core/common/main/country-code_COUNTRY-ISO-CODE.xml). The local CLDR localizations can be modified manually by modifying the local files mentioned.</br>
After any modifications applied on local CLDR files, the PrestaShop cache (back-office/advanced-parameters/performance/clear-cache.md) must be cleared to be shown.

**Import**

The import button is shown to apply the 'Import a localization pack' options. Clicking on it might affect both FrontOffice and BackOffice or change the default price behaviours based on options chose from 'Content to import' and 'Download pack data' fields.
