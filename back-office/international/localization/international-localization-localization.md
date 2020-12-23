# GENERAL SPECS LOCALIZATION BACKOFFICE

As a merchant, I need to be able to manage my localizations to handle the importation packages, the language and the currency configuration of the Front-Office, the local units used by the shop.

## WHAT

In this page, we aim at describing the current and expected behaviors when we add, edit, or delete localizations.

## WHY

As a merchant, being able to manage localizations will help to have my own units, languages, and currencies for each country separately or adding and/or modifying my own states and zones for each country as well.

## SPECIFICATIONS



### Import a localization pack

Using this section will give the user the ability to import the desired country's localizations.
- If the user selects a country that is not already imported, it will import all localizations content selected.
- If the user selects a country that is already imported, it will update all localizations content selected.

**Localization pack you want to import**

The _Localization pack you want to import_ droplist displays a list of countries when clicking on it. It can be selected by: 
- Searching the list via the search input field by typing the complete country name or part of it (at least one word).
- Scrolling down the list and find the country - sorted by name (A-Z).

**Content to import**

The contents to import are listed as check-boxes to be selected:
- States (checked by default)
- Taxes (checked by default)
- Currencies (checked by default)
- Languages (checked by default)
- Units (e.g. weight, volume, distance) (checked by default)
- Change the behavior of the price display for groups (un-checked by default)
Checking this content affects the display of prices on both the back office (back-office/international/locations/Countries.md, back-office/shop-parameters/customer-settings/groups.md) and the front office (front-office/product-page.md, front-office/products/list.md, front-office/Discounts). This option will override the default behavior for the selected country if you already have it inside the shop.

**Download pack data**

The _Download pack data_ toggle displays a YES/NO toggle button which is set to 'YES' by default. If 'YES' is set, the localizations that are selected on 'Content to import' section will be downloaded from prestashop.com CLDR directory and override the local CLDR localizations. If set to 'NO' it will use the local CLDR localizations (localization/CLDR/core/common/main/country-code.xml, localization/CLDR/core/common/main/country-code_COUNTRY-ISO-CODE.xml). The local CLDR localizations can be modified manually by modifying the local files mentioned.

After any modifications applied to local CLDR files, the PrestaShop cache (back-office/advanced-parameters/performance/clear-cache.md) must be cleared to be shown.

**Import**

Pressing the _Import_ button applies the 'Import a localization pack' options. Clicking on it might affect both FrontOffice and BackOffice or change the default price behaviors based on options chose from 'Content to import' and 'Download pack data' fields.

#### Multistore behavior

States will be imported for all shops, no matter the context selected.
Taxes will be imported for all shops, no matter the context selected. Taxes rules will be imported for the selected shop(s) in the context.
Currencies will be imported for the selected shop(s) in the context.
Languages will be imported for all shops, no matter the context selected.

### Configuration

Using this section will give the user the ability to change default localization configuration such as default langiage, country, and currency. Changing this configuration will override the default behaviours.

**Default language**

The _Default language_ droplist displays the languages that are already imported to the shop by the user from 'Content to import' section. By default, it shows the language the user has defined during the PrestaShop installation process. Changing it will change the language that is selected by default on the front office.

**Set language from browser**

The _Set language from browser_ toggle displays a 'YES/NO' toggle button which is set to 'YES' by default. If 'YES' is set, the default language will be changed based on the user's default browser language automatically on FrontOffice (front-office).

**Default country**

The _Default country_ droplist displays the list of all countries. The user can select the default country selected on FrontOffice (front-office) from droplist or typing at least one word using the search field on the top of droplist.

**Set default country from browser language**

The _Set default country from browser language_ toggle displays a 'YES/NO' toggle button which is set to 'YES' by default. If 'YES' is set, the default country on FrontOffice (front-office) will be selected automatically based on the user's default browser language.

**Default currency**

The _Default currency_ droplist displays the currencies that are already imported to the shop by the user from 'Content to import' section. By default, it shows the currency based on the default country selected during the PrestaShop process. Changing it will change the currency that is selected by default on FrontOffice (front-office).

**Time zone**

The _Time zone_ droplist displays the full list of all standard time zones. The user can select the shop's default Time zone from droplist or typing at least one word using the search field on the top of droplist.

**Save**

Pressing the _Save_ button applies the 'Configuration' options. Clicking on it might affect both FrontOffice and BackOffice or change the default localization configuration based on options chose from 'Configuration' fields.
#### Multistore behavior

In a specific shop context or in a group context, the options listed above should have [checkboxes](https://github.com/PrestaShop/PrestaShop/issues/19370) except the "time zone" that doesn't have checkbox and that is disabled with an information message displayed when the user hovers the drop-down: "You can modify this parameter in all shops context only. Switch context to enable it."

In an all shops context, the options listed above should have [specific settings drop-down](https://github.com/PrestaShop/PrestaShop/issues/19322) except the "time zone".

:point_right: https://github.com/PrestaShop/prestashop-specs/blob/master/back-office/multistoregeneralspecs.md

:point_right: https://github.com/PrestaShop/prestashop-specs/blob/master/broader-topics/multistorespecialsspecs.md#list-of-pages--fields-for-specific-case-4-if-a-group-or-a-specific-shop-is-selected-some-fields-are-disabled-and-dont-have-checkboxes-allowing-to-enable-them
### Local units

Using this section will able the user to change the default local units such as weight, distance, volume, and dimension.

**Weight unit**

The _Weight unit_ provides a text field for the user to change the default weight unit for the shop. The user can type any local unit for weight such as 'kg' for kilograms, 'g' for grams, or unit in their own local country/language.

**Distance unit**

The _Distance unit_ provides a text field for the user to change the default distance unit for the shop. The user can type any local unit for distance such as 'km' for kilometers, 'mi' for miles, or unit in their own local country/language.

**Volume unit**

The _Volume unit_ provides a text field for the user to change the default volume unit for the shop. The user can type any local unit for volume such as 'L' for liter, 'gal' for gallon, or unit in their own local country/language.

**Dimension unit**

The Dimension unit_ provides a text field for the user to change the default dimension unit for the shop. The user can type any local unit for dimension such as 'cm' for centimeters, 'in' for inches, or unit in their own local country/language.

**Save**

Pressing the _Save_ button applies the 'Local units' options. Clicking on it might affect both FrontOffice and BackOffice or change the default units based on fields filled from 'Local units' section.
#### Multistore behavior
In a specific shop context or in a group context, the options listed above should have [checkboxes](https://github.com/PrestaShop/PrestaShop/issues/19370) 

In an all shops context, the options listed above should have [specific settings drop-down](https://github.com/PrestaShop/PrestaShop/issues/19322)

:point_right: https://github.com/PrestaShop/prestashop-specs/blob/master/back-office/multistoregeneralspecs.md
### Advanced

Using this section will define the local country and its language where the server is located.

**Language identifier**

The _Language identifier_ field allows the user to set the local language of the country where the server is located. This field must be filled with the language ISO code in lowercase using the 'ISO 639-1' standard.

**Country identifier**

The _Country identifier_ field allows the user to set the local country where the server is located. This field must be filled with the country ISO code in lowercase using the 'ISO 3166-1 alpha-2' standard.

**Save**

Pressing the _Save_ button applies the 'Advanced' options. Clicking on it might affect both FrontOffice and BackOffice or defines the default server's local language and country based on fields filled from 'Advanced' section.

#### Multistore behavior

In a specific shop context or in a group context, the options listed above doesn't have checkbox and are disabled with an information message displayed when the user hovers the fields: "You can modify this parameter in all shops context only. Switch context to enable it."

In an all shops context, the options listed above doesn't have specific settings drop-down

:point_right: https://github.com/PrestaShop/prestashop-specs/blob/master/broader-topics/multistorespecialsspecs.md
