# SPECS GENERAL MULTISTORE BACK-OFFICE

As a merchant I need to be able to correctly manage all my stores

## WHAT

Thus, this project aims at specifying the current and expected behaviour when the multistore is enabled and when there are many stores. It's the general behavior. Some pages can have specific behavior, you can find these specials cases in back-office/multistorespecialsspecs.md

## SPECIFICATIONS

### Shop & shop group color

While creating a shop or a group, the user can select a color as described in the specs to setup the multistore<br/>
This color will be displayed in the multistore header for the selected shop or shop group.<br/>
It will be also displayed before the name of each shop / group in the context drop-down.

### Multistore header

On each pages, when the multistore feature is enabled and if many shops are created, a multistore header is displayed.<br/>
The multistore header contains many things listed below:

**Color**

This header takes the color of the selected context:<br/>
- The all shops context is blue and this color can't be changed by the user.<br/>
- The shop group color can be configured while creating or editing the group<br/>
- The shop color can be configured while creating or editing the shop.

If the shop or the group selected doesn't have yet a color configured, the default color is grey.<br/>
In this case, an information message is displayed on the page to prompt the user to define a color with a link opening the store's or group's page edition.<br/>
The user can close the information message. The message is closed only for the selected context and it will not be redisplayed if the user refresh or return on this page later.

**Name of the selected context**

The name of the selected context is displayed, it can be:
- All shops
- A shop group name
- A shop name

**View my shop link**

When a shop is selected, a link "view my shop" is displayed and opens the front-office of the shop.

**Context drop-down**

In the multistore header, there is a context drop-down allowing to select the context.

In the drop-down there is a search bar with auto-completion allowing to search and select a shop or a group quickly.<br/>
There is a placeholder: "Search shop name"<br/>
As soon as a user types a character in the field, a search is immediately performed and returned.<br/>
The results are displayed in a frame below the search field. <br/>
The displayed results can then be browsed, either by the arrow keys on the keyboard, or by the mouse cursor.<br/>
If the user choose one of the listed results, it is automatically written in the search field and selected as context.

The options listed in this drop-down are:
- All shops with a link to select it as context
- The shop groups names with a link to select the group as context
- The shops names with a link to select the shop as context

The colors of each shops and groups are displayed before each options.<br/>
When the user hovers the color, a tooltip is displayed "edit color"<br/>
The user can click on the color to change it<br/>
It opens the store's or group's page edition.

If the shop URL is configured, a "view my shop" link is displayed after each shop name.<br/>
It opens the front-office of the corresponding shop.

If the shop URL isn't configured, a "configure shop URL" link is displayed after each shop name.<br/>
It opens the store's page edition.


### Shop association block

The shop association block is displayed when you add or edit something.<br/>
The shop association block displays all groups and all shops.<br/>
Checkboxes allows to select / unselect groups and shops.<br/>
It's possible to expand / collapse the wall tree and expand / collapse each group<br/>
If you select / unselect a group, all shops of this groups are selected / unselected

The shop association block allows to choose for which store(s) you want associate or disassocate something.

When you add something, the shop(s) selected in the context are automatically checked in the shop association block.<br/>
But it's possible to select / uncelect shops, no matter the context selected.

When you edit something, you can unselect shops previously selected and therefore disassocate it from these shops.<br/>
And you can also, select shops not previously selected and therefore associate it with these shops.

Example:
You want to add a category in all shops. You select all shops context and click on add category.<br/>
In the shop association block, all stores are selected.<br/>
You create the category. It will be associated with all stores.<br/>
Finally you want this category in only one store.<br/>
You edit the category (no matter the context) and you select only one store in the shop association block.<br/>
The category will be associated only with the shop selected.

**Add / edit pages with shop association block**

- Catalog > Categories > Add / edit category
- Catalog > Attributes > Attributes group > Add / edit
- Catalog > Attributes > Attributes value > Add / edit
- Catalog > Features > Feature > Add / edit feature
- Catalog > Brands > Add / edit brand
- Catalog > Suppliers > Add / edit supplier
- Design > Pages > Add / edit page
- Design > Pages > Add / edit category page
- Shipping > Carriers > Add / edit carrier
- International > Localization > Languages > Add / edit
- International > Localization > Currencies > Add / edit
- International > Locations > Zones > Add / edit
- International > Locations > Countries > Add / edit
- International > Taxes > Taxes rules > Add / edit
- Shop parameters > Customer settings > Groups > Add / edit
- Shop parameters > Contact > Contacts > Add / edit
- Shop parameters > Contact > Stores > Add / edit
- Shop parameters > Traffic & SEO > Referrers > Add / edit
- Advanced parameters > Webservice > Add / edit


### Checkboxes

Checkboxes are displayed in a specific shop context and in a group context <br/>
They are not displayed in all shops context <br/>
They are displayed before each fields / toggles / parameters unless if an exception is defined in the specs of the page<br/>
When checkboxes are not selected, the fields or toggles are disabled.

Checkboxes allow:
- to select one or many fields / toggles
- to enabled selected fields / toggles
- to apply a different configuration for the selected store or group
- to submit only the selected fields / toggles
- the merchant to see which parameters have different(s) value(s) for the selected store or group

A bulk checkbox allows to select / unselect all checkboxes.

An information message is displayed on all pages where there are checkboxes, to indicate what they are used for.<br/>
This information message can be closed and will not be displayed again after.<br/>
"If you want to apply specific settings to a store or a group of shops, you need to select the parameter to modify, bring your modifications and then save."

**Configurations pages with checkboxes**

-  Advanced Parameters > Administration
-  Advanced Parameters > Email
-  Advanced Parameters > Team > Employees
-  Advanced Parameters > Database > SQL Manager
-  Advanced Parameters > Database > Backup
-  Advanced Parameters > Logs
-  Advanced Parameters > Webservice
-  Shop Parameters > General > Preferences
-  Shop Parameters > General > Maintenance
-  Shop Parameters > Order Setting
-  Shop Parameters > Product Settings
-  Shop Parameters > Customer Settings > Customers
-  Shop Parameters > Customer Settings > Groups
-  Shop Parameters > Contact > Stores
-  Shop Parameters > Traffic & SEO > SEO & URLs
-  Shop Parameters > Search
-  International > Localization > Localization
-  International > Localization > Geolocation
-  International > Location > Countries
-  International > Taxes > Taxes
-  Shipping > Preferences
-  Design > Theme & Logo > Theme & Logo
-  Design > Email Theme 
-  Design > Image Settings
-  Customer Service > Customer Service
-  Customer Service > Merchandise Returns
-  Catalog > Products > Add / edit product
-  Orders > Invoices
-  Orders > Credit Slips
-  Orders > Delivery Slips


### Specific settings drop-down

This drop-down is displayed only in all shops context and only for parameters that have been customized in one or many specific shops.

**Search bar**

In the specific settings drop-down there is a search bar with auto-completion allowing to search and select a shop or a group quickly.<br/>
There is a placeholder: "Search shop name"<br/>
As soon as a user types a character in the field, a search is immediately performed and returned.<br/>
The results are displayed in a frame below the search field. <br/>
The displayed results can then be browsed, either by the arrow keys on the keyboard, or by the mouse cursor.<br/>
If the user choose one of the listed results, it is automatically written in the search field and selected as context.

In the specific settings drop-down there are:
- The shop groups names with a link to select it as context
- The shops names with a link to select it as context

Next to each shop name, there is a mention:
- Inherited if the parameter has the same value as in all shops
- Customized if the parameter has a different value in a shop
