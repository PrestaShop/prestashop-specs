# SPECS TO SETUP THE MULTISTORE

As a merchant I need to be able to create many stores

## WHAT

Thus, this project aims at specifying the current and expected behaviour to setup many stores

## SPECIFICATIONS

### Enable the multistore

The multistore is disabled by default and can be enabled in Shop parameters > General <br/>
Once enabled, a new "Multistore" menu is displayed in Advanced parameters > Multistore

### Shop group

A shop group can contains many stores. <br/>
By default there is a "default" group and it contains the default shop (the one created when PrestaShop was installed) <br/>
But the default shop can be changed when there is more than one shop.

When a shop group is created, many fields are displayed:
- Shop group name
- Shop group color: colorpicker<br/>
There is tooltip for this colorpicker: ‘Choose a color with the color picker, or enter an HTML color (e.g. "lightblue", "#CC6600").’ in Admin.Catalog.Help <br/>
"It will only apply to this group of shops, each store keeps its individual color."
- Share customers: Yes / No <br/>
Once this option is enabled, the shops in this group will share customers. <br/>
If a customer registers in any one of these shops, the account will automatically be available in the others shops of this group.<br/>
This option can't be disabled once customers are registered.
- Share available quantities to sell: Yes / No <br/>
Share available quantities between shops of this group. <br/>
When changing this option, all available products quantities will be reset to 0.
- Share orders: Yes / No <br/>
Once this option is enabled (which is only possible if customers and available quantities are shared among shops), the customer's cart will be shared by all shops in this group.<br/> 
This way, any purchase started in one shop will be able to be completed in another shop from the same group. <br/>
This option can't be disabled once orders are made.
- Status: Yes / No <br/>
To enable or disable the shop group.

### Shop

A shop must be in a group and can only be in one group.

When a shop is created, many fields are displayed:
- Shop name
- Shop color: colorpicker<br/>
There is tooltip for this colorpicker: "Choose a color with the color picker, or enter an HTML color (e.g. "lightblue", "#CC6600")’ in Admin.Catalog.Help<br/>
"It will apply to the multistore header to underline your shop context."
- Shop group: Allow to select the shop group of the shop
- Category root: Allow to select the root category of the shop.
- Associated categories: Allow to select the categories that will be associated with the store <br/>
- Theme: Allow to select the front-office theme of the store

When a shop is created, datas can be imported:
- Import data: Yes / No <br/>
Allow to choose if you want to import data from another shop or not
- Choose the source shop: Allow to choose the shop from which the data will be imported
- Choose data to import: Select the data to import

### URL

A shop must have at least one URL and can have many URLs but only one main URL. <br/>
All URLs set for a shop will be redirected to the main URL.

