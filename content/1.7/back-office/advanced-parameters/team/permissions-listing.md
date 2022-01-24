---
title: Permissions
weight: 1
---
# ADVANCED PARAMETERS > Team > Employees > Permissions

This UI allows to modify the permissions of the Prestashop application. Permissions lets or firbids the access to the certain elements of the application. The permissions can be ticked or unticked on the certain checkboxes, system saves the Premission status instantly after the ticking.

![Permissions](static/img/team-permissions.png)

## Top UI elements

- **Permissions** - page title.
- **Help** - a side-bar with the helpful information, how to navigate in this page.
- **Tabs** - navigation tabs for Team menu:
  - Employees.
  - Profiles.
  - Permissions.

## Main elements

The UI is constructed with 2 panels - while navigating the left panel, the content of the menu is displayed in the right panel.

### Left panel

This UI shows the Permission names.

- **SuperAdmin** - the main administration profile, created during the first installation of the Prestashop app. By default, this profile is highlighted. 

There are similar administration profiles, defined with Menu and Module permissions. Those are default created:<br>
  - **Logistician** 
  - **Translator**

### Right panel

#### SuperAdmin profile permissions

Has nothing to modify, because it is the top-layered profile in Prestashop. The notificatioin _Administrator permissions cannot be modified._ is displayed.

#### Logistician profile Menu permissions

These permissions are listed as Enabled by default:

|**Permission**|**View**|**Add**|**Edit**|**Delete**|
|--------------|:------:|:-----:|:------:|:--------:|
|Sell, Orders, Invoices, Credit Slips, Delivery Slips, Catalog, Products, Categories, Monitoring, Brands & Suppliers, Suppliers, Customers, Addresses, Customer Service, Merchandise Returns, Improve, Shipping, Carriers, Preferences.|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|

These permissions are listed as Disabled by default:

|**Permission**|**View**|**Add**|**Edit**|**Delete**|
|--------------|:------:|:-----:|:------:|:--------:|
|Dashboard, Shopping Carts, Attributes & Features, Attributes, Features, Brands, Files, Discounts, Cart rules, Catalog Price Rules, Stock, Customers, Outstanding,  Customer Service, Order Messages, Stats, Prestashop Metrics, Stats, Modules, Module Manager, Modules, Alerts, Updates, Module Catalog, Module Catalog, Module Catalog, Module Selections, Module Selections, Wishlist Module, Configuration, Statistics, Design, Theme & Logo, Theme & Logo, Pages Configuration, Advanced Customization, Theme Catalog, Theme Catalog, Email Theme, Email Theme, Pages, Positions, Image Settings, Link List, Payment, Payment Methods, Preferences, International, Localization, Localization, Languages, Currencies, Geolocation, Locations, Zones, Countries, States, Taxes, Tax Rules, Translations, Marketing, Facebook, Configure, Shop Parameters, General, General, Maintenance, Order Settings, Statuses, Product Settings, Customer Settings, Groups, Titles, Contact, Contacts, Stores, Traffic & SEO, SEO & URLs, Search Engines, Referrers, Search, Search, Tags, Merchant Expertise, Advanced Parameters, Information, Performance, Administration, E-mail, Import, Team, Employees, Profiles, Permissions, Database, SQL Manager, DB Backup, Logs, Webservice, Multistore, Multistore, Experimental Features, More, Welcome, AdminBlockListing, PrestaShop Account (ajax), PrestaShop Account (debug).|:x:|:x:|:x:|:x:|:x:|

#### Logistician profile Module permissions

There are **View**, **Configure** and **Uninstall** Permissions in the Module panel, and all the permissions are Disabled by default.

#### Translator profile Menu permissions

These permissions are listed as Enabled by default:

|**Permission**|**View**|**Add**|**Edit**|**Delete**|
|--------------|:------:|:-----:|:------:|:--------:|
|Sell, Catalog, Products, Categories, Improve, International, Localization, Localization, Translations, Configure, Shop Parameters, Search, Search.|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|

These permissions are listed as Disabled by default:

|**Permission**|**View**|**Add**|**Edit**|**Delete**|
|--------------|:------:|:-----:|:------:|:--------:|
|Orders, Invoices, Credit Slips, Delivery Slips, Shopping Carts, Monitoring, Attributes & Features, Attributes, Features, Brands & Suppliers, Brands, Suppliers, Files, Discounts, Cart Rules, Catalog Price Rules, Stock, Customers, Customers, Addresses, Outstanding, Customer Service, Customer Service, Order Messages, Merchandise Returns, Stats, PrestaShop Metrics, Stats, Modules, Module Manager, Modules, Alerts, Updates, Module Catalog, Module Catalog, Module Catalog, Module Selections, Module Selections, Wishlist Module, Configuration, Statistics, Design, Theme & Logo, Theme & Logo, Pages Configuration, Advanced Customization, Theme Catalog, Theme Catalog, Email Theme, Email Theme, Pages, Positions, Image Settings, Link List, Payment, Payment Methods, Preferences, Languages, Currencies, Geolocation, Locations, Zones, Countries, States, Taxes, Tax Rules, Marketing, Facebook, General, General, Maintenance, Order Settings, Statuses, Product Settings, Customer Settings, Groups, Titles, Contact, Contacts, Stores, Traffic & SEO, SEO & URLs, Search Engines, Referrers, Tags, Merchant Expertise, Advanced Parameters, Information, Performance, Administration, E-mail, Import, Team, Employees, Profiles, Permissions, Database, SQL Manager, DB Backup, Logs, Webservice, Multistore, Multistore, Experimental Features, More, Welcome, AdminBlockListing, PrestaShop Account (ajax), PrestaShop Account (debug).|:x:|:x:|:x:|:x:|:x:|

#### Translator profile Module permissions

There are **View**, **Configure** and **Uninstall** Permissions in the Module panel, and all the permissions are Disabled by default.
