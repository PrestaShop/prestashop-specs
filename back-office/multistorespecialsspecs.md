# MULTISTORE SPECIALS CASES SPECS

## WHAT

Thus, this project aims at specifying the current and expected behaviour when the multistore is enabled and when there are many stores.<br/>
Here is the specials behaviors. You can find general specs in back-office/multistoregeneralspecs.md

## SPECIFICATIONS

### List of specific cases

There are the 5 main specific cases:

1) “Add new” action is not possible (button disabled) in all shops or in a group context, this action is only enabled in a specific shop context.<br/>
Display a message when the user hovers the "add new" button: "You can use this feature in a single shop context only. Switch context to enable it."

2) Some “Add new” pages don’t have shop association block.<br/>
In this case, the element is added for all shops, no matter the context selected<br/>
Display an information message on these pages: "Note that this feature is available in all shops context only. It will be added to all your stores."

3) The page can be displayed only in all shops context, the others contexts are not displayed<br/>
If the user was on another page in a specific shop context or in a group context, the all shops context is automatically selected when he/she arrives on one of theses pages.<br/>
Display an information message on these pages: "Note that this page is available in all shops context only, this is why your context has just switched."

4)  If a group or a specific shop is selected, some fields are disabled and don’t have checkboxes allowing to enable them. <br/>
A message is displayed when the user hovers these fields: "You can modify this parameter in all shops context only. Switch context to enable it."

5) The page isn't displayed in all shops or in a group context.<br/>
The page is displayed only when a specific shop is selected<br/>
Display an information message on these pages: "Note that this page is available in a single shop context only. Switch context to work on it."

### List of pages for specific case 1) "Add new” actions only enabled in a specific shop context

- Order > Order > Add new order
- Customers > Customers > Add new customer

### List of pages for specific case 2) “Add new” pages without shop association block

- Customer service > Order message > Add new order message
- Design > Images settings > Add new image type
- International > Locations > States > Add new state
- International > Taxes > Taxes > Add new tax
- Shop parameters > Customer settings > Titles > Add new title
- Shop parameters > Traffic & SEO > SEO & URLs > Add new page
- Shop parameters > Traffic & SEO > Search engines > Add new search engine
- Shop parameters > Search > Search > Add new alias
- Shop parameters > Search > Tags > Add new tag
- Advanced parameters > Team > Profiles > Add new profile
- Advanced parameters > Database > SQL Manager > Add new SQL query
- Advanced parameters > Database > DB Backup > Create a new backup

### List of pages for specific case 3) The page can be displayed only in all shops context

- Shipping > Carriers > Add new carrier <br/>
But a carrier can be created for only one shop or a group with the shop association block.
- International > Localization > Languages <br/>
But a language can be created for only one shop or a group with the shop association block.
- Shop parameters > Order settings > Statuses
- Shop parameters > Order settings > Statuses > Add new order status & add new order return status
- Advanced parameters > Team > Profiles
- Advanced parameters > Team > Permissions
- Advanced parameters > Multistore > AdminShopGroup
- Advanced parameters > Multistore > AdminShop
- Advanced parameters > Multistore > AdminShopUrl
- Advanced parameters > Multistore > Add new shop group
- Advanced parameters > Multistore > Add new shop
- Advanced parameters > Multistore > Add new URL

### List of pages & fields for specific case 4) If a group or a specific shop is selected, some fields are disabled and don’t have checkboxes allowing to enable them

- Design > Images settings<br/>
List of these fields: 
  - Generate images based on one side of the source image
  - Maximum file size of product customization pictures
  - Product picture width
  - Product picture height
  - Generate high resolution images
  
- International > Localization > Localization<br/>
List of these fields: 
  - Time zone
  - Language identifier
  - Country identifier
  
- Shop parameters > General > General<br/>
List of these fields: 
  - Increase front-office security
  - Enable multistore
  
- Shop parameters > Traffic & SEO > Referrers<br/>
List of these fields: 
  - Save direct traffic?
  
- Advanced parameters > Administration<br/>
List of these fields: 
  - Automatically check for module updates
  - Check the coolie’s IP address
  - Lifetime of front office cookies
  - Lifetime of back office cookies
  
- Advanced parameters > Team > Employees<br/>
List of these fields: 
  - Memorize the language used in admin panel forms
  - Password regeneration
  
- Advanced parameters > Database > SQL Manager<br/>
List of these fields: 
  - Select your default file encoding
  
### List of pages for specific case 5) The page is displayed only when a specific shop is selected

- Design > Position
- Payment > Payment methods
- Payment > Preferences

### Other pages with specific behaviors

- International > Translations<br/>
Translations are not related to the shop and are changed for all shops, no matter the shop selected in the context.<br/>
When a language is added, it’s only for the shop(s) selected in the context.<br/>
When a language is exported, it’s not related to the shop selected as it’s for the theme selected<br/>
When a language is copied, it’s not related to the shop selected as it’s for the theme selected<br/>

- Shop parameters > Traffic & SEO > SEO & URLs > Pages listing<br/>
When all shops or a group is selected, the listing isn’t displayed and an information message is displayed: “Note that the list of your pages is available in a single shop context only. Switch context to work on it.”

- Shop parameters > Traffic & SEO > SEO & URLs > Set shop URL block<br/>
A message is displayed: “The multistore option is enabled. If you want to change the URL of your shop, you must go to the "Multistore" page under the "Advanced Parameters" menu.”

- Advanced parameters > Email > Test your email configuration block<br/>
If a group or a specific shop is selected, the field “Send a test email to” is enabled and don’t have checkbox.

