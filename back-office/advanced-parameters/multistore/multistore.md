# SPECS TO SETUP THE MULTISTORE

As a merchant I need to be able to create as many stores as I need with a single back office.
The main uses cases of the mutistore are: 
- B2B/B2C shop, 
- international shop (many languages, many currencies), 
- several brands

## WHAT

Thus, this project aims at specifying the current and expected behaviour to setup many stores

## SPECIFICATIONS

### Enable the multistore

The multistore is disabled by default and can be enabled in Shop parameters > General <br/>
Once enabled, a new "Multistore" menu is displayed in Advanced parameters > Multistore <br/>
There are two types of main actions in this page :
- create a group of shops - to be able to share certain characteristics between the shops in that group and to manage a set of shops as easily as you would a single shop, while still being able to fine-tune the details of each shop manually. 
- create a new shop - to be able to have different shops administered by the same back office


### Shop group

A shop group can contain many stores. <br/>
By default there is a "default" group and it contains the default shop (the one created when PrestaShop was installed) <br/>
But the default shop can be changed when there is more than one shop.

When a shop group is created, many fields are displayed:
- Shop group name
- Shop group color: colorpicker **only from 1.7.8**<br/>
There is tooltip for this colorpicker: ‘Choose a color with the color picker, or enter an HTML color (e.g. "lightblue", "#CC6600").’ in Admin.Catalog.Help <br/>
"It will only apply to this group of shops, each store keeps its individual color."
- Share customers: Yes / No <br/>
Once this option is enabled, the shops in this group will share customers. <br/>
If a customer registers in any one of these shops, the account will automatically be available in the others shops of this group.<br/>
This option can't be disabled once customers are registered.
- Share available quantities to sell: Yes / No <br/>
This option allows to share available quantities between shops of this group. <br/>
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
- Shop color: colorpicker **only from 1.7.8**
There is tooltip for this colorpicker: "Choose a color with the color picker, or enter an HTML color (e.g. "lightblue", "#CC6600")’ in Admin.Catalog.Help<br/>
"It will apply to the multistore header to underline your shop context."
- Shop group: Allow to select the shop group of the shop
- Category root: Allow to select the root category of the shop.
- Associated categories: Allow to select the categories that will be associated with the store <br/>
- Theme: Allow to select the front-office theme of the store among the themes available in the back office

When a shop is created, data can be imported:
- Import data: Yes / No <br/>
Allow to choose if you want to import data from another shop or not
- Choose the source shop: Allow to choose the shop from which the data will be imported
- Choose data to import: Select the data to import

### URL

A shop must have at least one URL and can have many URLs but only one main URL. <br/>
All URLs set for a shop will be redirected to the main URL. <br/>

To add a URL to a shop, select the shop in the "Multistore tree" selector, and then click on the "Add new URL" button.<br/> PrestaShop will load a screen with two sections and eight options:

- Shop: A reminder of the shop to which you are adding a URL. You may also simply switch to another shop.
- Main URL. By enabling this, you indicate that you want all the other URLs for this shop to redirect to this main URL (this will swtch any other main URL to be a normal URL).
- Status: You can disable and enable a URL at any time.

- Domain: The shop's domain name itself. It does not have to be limited to the domain name: you can indicate a sub-domain if you need to. Just make sure to not add 'http://', or any '/'. Example: www.example.com or kids.example.com.
- Domain SSL: If your SSL domain is different from your main domain, be sure to indicate it in that field. Example: www.example.com or kids.example.com.
- Physical URL: Here you must set the physical path to your actual installation on your server. If the shop is at the root of the domain or subdomain, leave this field empty. Example: / or /kids/.
- Virtual URL: You can make the shop transparently available to customers using this option: through the power of URL rewriting, you can have your shop be displayed without the need to create a sub-folder. Of course, URL rewriting must be enabled in PrestaShop (meaning Friendly URLs, see the "SEO & URLs" page of the "Traffic" menu, in "Shop Parameters"). Example: /shoes/. Note that this only works for subfolder shops, not subdomain shops.
- Final URL: Gives you the impact that your URL settings above will have on the complete web address to your shop.
