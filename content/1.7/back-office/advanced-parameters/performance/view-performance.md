---
title: View performance
weight: 1
---

In this section the performance for the shop is configured.

# Performance

### Call to action

Button at the top is presented:
 
 - Clear cache, when pressed, the page refreshes, and a message will appear: "All caches cleared successfully".

## Smarty

In this section 5 settings are visible:

 - Template compilation, a drop-down menu with the following options:
    - Never recompile templates files (default selection)
    - Recompile templates if the files have been updated
    - Force compilation
    
 - Cache, this is a toggle switch, by default it is set to "Yes". Has a help text below: "Should be enabled except for debugging."
 
 - Multi-front optimizations, this is a toggle switch, by default it is set to "No". Has a help text below: "Should be enabled if you want to avoid to store the smarty cache on NFS."
 
 - Caching type, this is a drop-down menu, with the following options:
    - File system (default selection)
    - MySQL
    
 - Clear cache, this is a drop-down menu with the following options:
    - Clear cache everytime something has been modified (default selection)
    - Never clear cache files

### Call to action

 - Save, when pressed the settings are saved, a message is displayed: "Update successful".

## Debug mode

3 settings are in this section:

 - Disable non PrestaShop modules, a toggle switch, by default is set to "No". Has a help text below: "Enable or disable non PrestaShop Modules."
 - Disable all overrides, a toggle switch, by default is set to "No". Has a help text below: "Enable or disable all classes and controllers overrides."
 - Debug mode, a toggle switch, by default is set to "Yes". Has a help text below: "Enable or disable debug mode."

### Call to action

 - Save, when pressed the settings are saved, a message is displayed: "Update successful".

## Optional features

The name of the section has a information bubble, when hovered on shows the following information: "Some features can be disabled in order to improve performance."

 - Combinations, manditory toggle switch which is disabled if combinations for products are used. By default is set to: "Yes". Has a help text below: "Choose "No" to disable Product Combinations.
You cannot set this parameter to No when combinations are already used by some of your products"
 - Features, manditory toggle switch, by default is set to: "Yes". Has a help text below: "Choose "No" to disable Product Features."
 - Customer groups, manditory toggle switch, by default is set to: "Yes". Has a help text below: "Choose "No" to disable Customer Groups."

### Call to action

 - Save, when pressed the settings are saved, a message is displayed: "Update successful".

## CCC (Combine, Compress and Cache)

The name of the section has a information bubble, when hovered on shows the following information: "CCC allows you to reduce the loading time of your page. With these settings, you will gain performance without even touching the code of your theme. Make sure, however, that your theme is compatible with PrestaShop 1.7 +, Otherwise, CCC will cause problems.

3 settings are in this section:

 - Smart cache for CSS, a mandatory toggle switch, which by default is set to: "No".
 - Smart cache for JavaScript, a mandatory toggle switch, which by default is set to: "No". 
 - Apache optimization, a mandatory toggle switch, which by default is set to: "No". Has a help text below: "This will add directives to your .htaccess file, which should improve caching and compression."

### Call to action  

 - Save, when pressed the settings are saved, a message is displayed: "Update successful".

## Media servers (use only with CCC) 

The name of the section has a information bubble, when hovered on shows the following information: "You must enter another domain, or subdomain, in order to user cookieless static content."

3 input fields are in this section:

 -  Media server #1, input field for the domain of the shop, has a help text below: "Name of the second domain of your shop, (e.g. myshop-media-server-1.com). If you do not have another domain, leave this field blank."
 
 -  Media server #2 input field for the domain of the shop, has a help text below: "Name of the third domain of your shop, (e.g. myshop-media-server-2.com). If you do not have another domain, leave this field blank."
 
 -  Media server #3 input field for the domain of the shop, has a help text below: "Name of the fourth domain of your shop, (e.g. myshop-media-server-3.com). If you do not have another domain, leave this field blank."

### Call to action  

 - Save, when pressed the settings are saved, a message is displayed: "Update successful".

## Caching

1 toggle switch is displayed in this section:

 - Use cache, this toggle is mandatory, by default is set to: "No".

### Call to action  

 - Save, when pressed the settings are saved, a message is displayed: "Update successful".
