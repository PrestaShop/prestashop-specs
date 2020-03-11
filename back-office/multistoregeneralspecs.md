# SPECS GENERAL MULTISTORE BACK-OFFICE

As a merchant I need to be able to correctly manage all my stores

## WHAT

Thus, this project aims at specifying the current and expected behaviour when the multistore is enabled and when there are many stores. It's the general behavior. Some pages can have specific behavior, you can find this specific cases in the specifications of each back-office pages

## SPECIFICATIONS

### Shop association block

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
When checkboxes are not selected, the fields or toggles are disabled.

Checkboxes allow:
- to select one or many fields / toggles
- to enabled selected fields / toggles
- to apply a different configuration for the selected store or group
- to submit only the selected fields / toggles
- the merchant to see which parameters have a different value for the selected store or group

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
