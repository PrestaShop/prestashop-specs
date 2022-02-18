---
title: Modules
weight: 1
---

# MODULES > MODULE MANAGER > MODULES

![Modules UI](static/img/modules-listing.png)

This UI contains the listing management of all the Modules installed in webshop.

## Top UI elements

- **Multistore switching dropdown** - allows to navigate through the available Multistores. Note, that if the module is installed in one Multistores, it appears in the rest of Mulstistores or Shop groups also.
- **View my shop and icon** - allows to open the Front-Office in the blank new page by clicking this eye icon link. Redirection leads to the homepage of the Mulsitstore.
- **Breadcrumbs navigation** - identifies the page level.
- **Upload a module Call-toaction (CTA) button with the cloud-style icon with the arrow pointed up** - allows to upload and install the module to the store. Once the mouse pointer is hovered this button, additional tooltip is visible with the advicible text _Upload a module_. After the button is clicked, a pop-up will appear, containing:
  - **Upload a module** - pop-up title identifier.
  - **X icon** - closes the pop-up instantly.
  - **Dotted borders section area** - where the archive can be uploaded by draging and dropping the archive file right into this area.
  - **Cloud-style icon with the arrow pointed up** - visually identifies the upload function in pop-up.
  - **_Drop your module archive here or select file_** - describes the ability to drag and drop the archive in the area or by clicking the _select file_ link, choosing the appropriate archive by the Browse function of the browser.
  - **_Please upload one file at a time, .zip or tarball format (.tar, .tar.gz or .tgz). Your module will be installed right after that._** - additional advicible text indicating the all correct archive extensions, that can be validated and accepted by the webshop. As well, the archive will be executed to the installation phase right after the upload action. Once the installation execution starts, the UI will show spinning loader icon at the top, the text title _Installing module..._, the advicible text _It will close as soon as the module is installed. It won't be long!_. Once the installation process finishes, the spinning loader icon becomes a checkmark icon, text phrase _Module installed!_ appears, indicating that the archive installation was successful. **Configure** CTA button appears also, leading to the module configuration page, for instant module management.
- **Help ghost CTA** - a side-bar with the helpful information, how to navigate in this page.
- **Tabs** - navigation tabs for Modules listing menu:
  - **Modules** - highlighted tab.
  - **Alerts**
  - **Updates**

## The main UI elements

- **Search input** - a wide input field that helps to find desired module, by typing module name or a part of the module name. This search converts the texted words to tags with the X icons, suggesting to delete the word later. The search results are retrieved instantly, right after the word has been typed and mouse pointer clicked on Lasso icon search button. Alternatively, mouse clicking on other UI elements, pressing Tab button, or any other button on keyboard will initiate the search action as well. There is no limit of characters in the search field.
- **Category** - a dropdown that can segment the Modules displayed in this page by Categories. By default, if the dropdown is not clicked, it is named by _Categories_. All the Categories, except _Recentrly used_, contain names and numeric values of total modules. Note, that Categories are displayed as bolded titles and segmenting the module rows in listing. The Categories names are:

  - **Recently used**
  - **Administration**
  - **Design & Navigation**
  - **Promotions & Marketing**
  - **Product Page**
  - **Payment**
  - **Shipping & Logistics**
  - **Traffic & Marketplaces**
  - **Customers**
  - **Facebook & Social Networks**
  - **Specialized Platforms**
  - **Other**

Once the category value is selected, the UI arranges all the list according the Category. The arrangement results are retrieved instantly below the dropdown. If there are no modules in the Category, the notification box is prompted - _You do not have module in « {category name} ». Discover the best-selling modules of this category in the {category name link} page._ Once a Category is selected and managed, returning to the all modules list is called _All Categories_ dropdown menu link.
- **Status** - a dropdown that can segment the Modules in this page by Status. By default _Show all modules_ is as placeholder for dropdown. The Status names are:

  - **Show all modules** - shows all the modules in the listing.
  - **Enabled modules** - shows only Enabled modules in webshop.
  - **Disabled modules** - shows only Disabled modules in webshop.

The arrangement results are retrieved instantly below the dropdown.

- **Bulk actions** - by default the dropdown is disabled, but once there is a selection - checkbox marking - of a module in the list, the dropdown becomes active. When the dropdown is active, there are available values to click:

  - **Uninstall** - uninstalls selected module or modules.
  - **Disable** - disables selected module or modules.
  - **Enable** - enables selected module or modules.
  - **Reset** - resets selected module or modules.
  - **Enable Mobile** - enables the Mobile view for the module or modules.
  - **Disable Mobile** - disables the Mobile view for the module or modules.

Once the Bulk action pop-up is shown, there is a title _Bulk action confirmation_ and secondary confirmation text _You are about to the following modules:_ and the list of module names. As well as 2 CTA buttons - **Cancel** - closes the pop-up, discards further actions - or **Yes, I want to do it** - proceeds the selected Bulk action.

## Module row

Each Module listing UI is displayed as a separate row and with the following elements:

- **Icon** - specific module icon, that identifies the module in visual side.
- **Name** - full module name.
- **Numeric value with dots** - module version.
- **Bolded smaller text** - the name of the module developer.
- **Description paragraph** - description of the module. Sometimes there is huge paragraph, so a module row shows only excerpt of the description and the rest of the text is expanded under the _Read more_ link (more information about the Read more pop-up is in separate paragraph).
- **CTA button** - these buttons are used for module management. By default, once the module is installed in system, the CTA buttom becomes _Configure_ named. Clicking configure leads to module management dashboard page. If the module is outdated, the CTA button can be shown as _Upgrade_. Clicking Upgrade will update the module to the latest version according to the latest module release. There is a **dropdown arrow** near the button - clicking on the arrow, shows additional functions for the certain module (the same, as Bulk action functions):

  - **Uninstall** - uninstalls selected module.
  - **Disable** - disables selected module.
  - **Enable** - enables selected module.
  - **Reset** - resets selected module.
  - **Enable Mobile** - enables the Mobile view for the module.
  - **Disable Mobile** - disables the Mobile view for the module.

Once one of the functions are executed, the CTA button transforms to spinning loader. After the loader finishes the process, the green success notification will prompt in the top-right side of UI, with the message _{function name} action on module {module name} succeeded._

If one of the action responses as unsuccessful, the top-right side UI prompts the message _Cannot {action name} module {module name}. The module is invalid and cannot be loaded._

## Read More pop-up

This pop-up appears right after clicking the _Read more_ link and extends the information about the module. The pop-up contains:
- **Icon of the module**
- **Version of the module**
- **Developer of the module**
- **X icon for closing the pop-up**
- **Bigger image of the module UI or other screenshots**
- **Tabs for navigating through the information in pop-up** - sometimes in other modules tabs are few but usually the tabs are:
  - **Overview** - full description of the module.
  - **Additional information** - additional description of the module.
  - **Benefits** - listing the benefeits of the module.
  - **Features** - lists the features of the module.
  - **Changelog** - the list of module updates in version history.
- **Manufacturer icon**
- **Price**
- **Configure CTA button** - with the functions (like in Bulk actions and in separate module listing row):
  - **Uninstall** - uninstalls selected module.
  - **Disable** - disables selected module.
  - **Enable** - enables selected module.
  - **Reset** - resets selected module.
  - **Enable Mobile** - enables the Mobile view for the module.
  - **Disable Mobile** - disables the Mobile view for the module.

## Multistores functionality

Different module functions - **Disable**, **Enable**, **Disable Mobile**, **Enable Mobile** - can be set separately for each Shop group or Multistore. 
