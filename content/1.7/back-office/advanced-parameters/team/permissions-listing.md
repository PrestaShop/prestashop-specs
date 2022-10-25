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

## Main UI elements

The UI is constructed with 2 panels - while navigating the left panel, the content of the menu is displayed in the right panel.

## Left panel

This UI shows the Permission names.

- **SuperAdmin** - the main administration profile, created during the first installation of the Prestashop app. By default, this profile is highlighted. 

There are similar administration profiles, defined with Menu and Module permissions. Those are default created:<br>
  - **Logistician** 
  - **Translator**

## Right panel

### SuperAdmin profile permissions

Has nothing to modify, because it is the top-layered profile in Prestashop. The notificatioin _Administrator permissions cannot be modified._ is displayed.

### Logistician profile Menu permissions

These permissions are listed as all Enabled by default:

|**Permission**|**View**|**Add**|**Edit**|**Delete**|
|--------------|:------:|:-----:|:------:|:--------:|
|Sell, Orders, Invoices, Credit Slips, Delivery Slips, Catalog, Products, Categories, Monitoring, Brands & Suppliers, Suppliers, Customers, Addresses, Customer Service, Merchandise Returns, Improve, Shipping, Carriers, Preferences.|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|

These permissions are listed as all Disabled by default:

|**Permission**|**View**|**Add**|**Edit**|**Delete**|
|--------------|:------:|:-----:|:------:|:--------:|
|Dashboard, Shopping Carts, Attributes & Features, Attributes, Features, Brands, Files, Discounts, Cart rules, Catalog Price Rules, Stock, Customers, Outstanding,  Customer Service, Order Messages, Stats, Prestashop Metrics, Stats, Modules, Module Manager, Modules, Alerts, Updates, Module Catalog, Module Catalog, Module Catalog, Module Selections, Module Selections, Wishlist Module, Configuration, Statistics, Design, Theme & Logo, Theme & Logo, Pages Configuration, Advanced Customization, Theme Catalog, Theme Catalog, Email Theme, Email Theme, Pages, Positions, Image Settings, Link List, Payment, Payment Methods, Preferences, International, Localization, Localization, Languages, Currencies, Geolocation, Locations, Zones, Countries, States, Taxes, Tax Rules, Translations, Marketing, Facebook, Configure, Shop Parameters, General, General, Maintenance, Order Settings, Statuses, Product Settings, Customer Settings, Groups, Titles, Contact, Contacts, Stores, Traffic & SEO, SEO & URLs, Search Engines, Referrers, Search, Search, Tags, Merchant Expertise, Advanced Parameters, Information, Performance, Administration, E-mail, Import, Team, Employees, Profiles, Permissions, Database, SQL Manager, DB Backup, Logs, Webservice, Multistore, Multistore, Experimental Features, More, Welcome, AdminBlockListing, PrestaShop Account (ajax), PrestaShop Account (debug).|:x:|:x:|:x:|:x:|:x:|

### Logistician profile Module permissions

There are **View**, **Configure** and **Uninstall** Permissions in the Module panel, and all the permissions are Disabled by default.

### Translator profile Menu permissions

These permissions are listed as all Enabled by default:

|**Permission**|**View**|**Add**|**Edit**|**Delete**|
|--------------|:------:|:-----:|:------:|:--------:|
|Sell, Catalog, Products, Categories, Improve, International, Localization, Localization, Translations, Configure, Shop Parameters, Search, Search.|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|

These permissions are listed as all Disabled by default:

|**Permission**|**View**|**Add**|**Edit**|**Delete**|
|--------------|:------:|:-----:|:------:|:--------:|
|Orders, Invoices, Credit Slips, Delivery Slips, Shopping Carts, Monitoring, Attributes & Features, Attributes, Features, Brands & Suppliers, Brands, Suppliers, Files, Discounts, Cart Rules, Catalog Price Rules, Stock, Customers, Customers, Addresses, Outstanding, Customer Service, Customer Service, Order Messages, Merchandise Returns, Stats, PrestaShop Metrics, Stats, Modules, Module Manager, Modules, Alerts, Updates, Module Catalog, Module Catalog, Module Catalog, Module Selections, Module Selections, Wishlist Module, Configuration, Statistics, Design, Theme & Logo, Theme & Logo, Pages Configuration, Advanced Customization, Theme Catalog, Theme Catalog, Email Theme, Email Theme, Pages, Positions, Image Settings, Link List, Payment, Payment Methods, Preferences, Languages, Currencies, Geolocation, Locations, Zones, Countries, States, Taxes, Tax Rules, Marketing, Facebook, General, General, Maintenance, Order Settings, Statuses, Product Settings, Customer Settings, Groups, Titles, Contact, Contacts, Stores, Traffic & SEO, SEO & URLs, Search Engines, Referrers, Tags, Merchant Expertise, Advanced Parameters, Information, Performance, Administration, E-mail, Import, Team, Employees, Profiles, Permissions, Database, SQL Manager, DB Backup, Logs, Webservice, Multistore, Multistore, Experimental Features, More, Welcome, AdminBlockListing, PrestaShop Account (ajax), PrestaShop Account (debug).|:x:|:x:|:x:|:x:|:x:|

### Translator profile Module permissions

There are **View**, **Configure** and **Uninstall** Permissions in the Module panel, and all the permissions are Disabled by default.

### Salesman profile Menu permissions

These permissions are listed as Enabled and Disabled by default:

|**Permission**|**View**|**Add**|**Edit**|**Delete**|
|--------------|:------:|:-----:|:------:|:--------:|
|Sell, Orders, Orders, Invoices, Credit Slips, Shopping Carts, Catalog, Products, Categories, Brands & Suppliers, Customers, Addresses, Customer Service, Order Messages, Configure, Shop Parameters, Traffic & SEO, Referrers, Advanced Parameters, Webservice. |:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|
|Brands, Search, Search|:white_check_mark:|:x:|:x:|:x:|:x:|

These permissions are listed as all Disabled by default:

|**Permission**|**View**|**Add**|**Edit**|**Delete**|
|--------------|:------:|:-----:|:------:|:--------:|
|Dashboard, Delivery Slips, Monitoring, Attributes & Features, Attributes, Features, Suppliers, Files, Discounts, Cart Rules, Catalog Price Rules, Stock, Customers, Outstanding, Customer Service, Merchandise Returns, Stats, PrestaShop Metrics, Stats, Improve, Modules, Module Manager, Modules, Alerts, Updates, Module Catalog, Module Catalog, Module Catalog, Module Selections, Module Selections, Wishlist Module, Configuration, Statistics, Design, Theme & Logo, Theme & Logo, Pages Configuration, Advanced Customization, Theme Catalog, Theme Catalog, Email Theme, Email Theme, Pages, Positions, Image Settings, Link List, Shipping, Carriers, Preferences, Payment, Payment Methods, Preferences, International, Localization, Localization, Languages, Currencies, Geolocation, Locations, Zones, Countries, States, Taxes, Taxes, Tax Rules, Translations, Marketing, Facebook, General, Maintenance, Order Settings, Order Settings, Statuses, Product Settings, Customer, Settings, Customer Settings, Groups, Titles, Contact, Contacts, Stores, SEO & URLs, Search Engines, Tags, Merchant Expertise, Information, Performance, Administration, E-mail, Import, Team, Employees, Profiles, Permissions, Database, SQL Manager, DB Backup, Logs, Multistore, Multistore, Experimental Features, More, Welcome, AdminBlockListing, PrestaShop Account (ajax), PrestaShop Account (debug).|:x:|:x:|:x:|:x:|:x:|

### Salesman profile Module permissions

There are **View**, **Configure** and **Uninstall** Permissions in the Module panel, and all the permissions are Disabled by default.

## Notifications interaction

Each checkbox has the interactions, once it is clicked. The clicking is initiated using Ajax request, and the response is instant, page is not reloading. If the checkbox marking or unmarking is successful, there will be green success notification _Update successful_ prompted, on the top right of the UI. 

### Select-all checkbox marking

Each Permission column has a select-all type of checkbox marking. Once the **View**, **Add**, **Edit**, **Delete** or **All** for Menu, and **View**, **Configure** or **Uninstall** for Modules permission is checked on the top of the column, the rest of column permissions are auto-checked for the all of permission values down the table.

## Multistores functionality

Multistores are not impacted in the permission UI. Multistores top-right widget is available only in All Shops context. 
