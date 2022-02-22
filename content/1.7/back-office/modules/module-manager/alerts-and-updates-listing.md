---
title: Alerts Page
weight: 1
---
# MODULES > MODULE MANAGER > ALERTS AND UPDATES

![Alerts tab](static/img/alerts-listing.png)

![Updates tab](static/img/updates-listing.png)

These UI, displayed in separate Alerts and Updates tabs, indicate the modules, that should be with full configuration in order to make module fully operational, or to upgrade the module to the newest version.

## Top UI elements for Alerts and Updates tabs

- **Multistore switching dropdown** - allows to navigate through the available Multistores. Note, that the notifications and alerts indications appear in All of Mulstistores or Shop groups also simultaneously.
- **View my shop and icon** - allows to open the Front-Office in the blank new page by clicking this eye icon link. Redirection leads to the homepage of the Mulsitstore.
- **Breadcrumbs navigation** - identifies the page level.
- **Module notifications** - H1 class title for the page.
- **Upload a module Call-to-action (CTA) button with the cloud-style icon with the arrow pointed up** - allows to upload and install the module to the store. Once the mouse pointer is hovered this button, additional tooltip is visible with the advicible text _Upload a module_. After the button is clicked, a pop-up will appear (more details in the next paragraph _Upload pop-up_).
- **Help ghost CTA** - a side-bar with the helpful information, how to navigate in this page.
- **Tabs** - navigation tabs for Modules menu. The editing tab is indicated as highlighted:
  - **Modules**
  - **Alerts** - yellow notification circle with white number in the top-right place of tab, indicating, how many modules can be triggered for alerts or updates.
  - **Updates** - yellow notification circle with white number in the top-right place of tab, indicating, how many modules can be triggered for alerts or updates.

## Alerts 

- **Balded title with the tooltip** - {modules number in total} modules to configure and a hover tooltip. A tooltip is displayed as blue information _i_ icon, and when hovered, the text _Modules to configure. These modules require your attention: you need to take some action to ensure they are fully operational._ appears in dark box.

### Module row blocks for Alerts tab

Module row block for Alerts tab is displayed the same as in other Module Manager or Module Selections listings. More information - please navigate to ![Modules listing specification](/modules-listing.md).

Each Module block is displayed as a separate row and with the following elements:

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

## Updates tab

- **Balded title with the tooltip** - {modules number in total} modules to update and a hover tooltip. A tooltip is displayed as blue information _i_ icon, and when hovered, the text _Modules to update. Update these modules to enjoy their latest versions._ appears in dark box.
- **Ghost button CTA Upgrade All** - initiates the Bulk action for upgrading all the available modules at the same time. The next actions are specified in the next topic.

### Upgrade All Pop-up UI

Once the **Ghost CTA Upgrade All** or single **Upgrade** button is clicked, the pop-up is prompted in UI with the following displayed elements:
- **_Are you sure you want to upgrade this module?_**
- **X icon** - for closing the pop-up.
- **_We strongly advise you to upgrade the modules on maintenance mode to avoid any cache issues._**
- **Cancel** - closes the pop-up.
- Go to maintenance page CTA - clicking this will redirect to the Maintenance page, to enable the maintenance mode, so that the webshop visitors will get the notification in homepage, that something in the webshop is being updated, in case something would fail in code during upgrade process.
- **Upgrade anyway** - initiates the upgrade action instantly and ignores the suggestions from this pop-up.

After the upgrade action, the pop-up will close automatically, and the spinner will be loading instead of the module CTA button place. Once the spinner finishes the interaction, it will become as **Disabled CTA**, and there will be a success message _Upgrade action on module {module name} succeeded._ in the top-right of the whole page UI. If there are some failures in the module upgrading process, the UI will prompt the same error messages like in the ![Modules listing specification page](/modules-listing.md).

### Module row blocks for Updates tab

- **Icon**
- **Module title**
- **Versions from the current {arrow to the right symbol} to the newest numeric expression** - it helps visually to orientate, which is the current outdated module version and what will be the next module version after the upgrade finishes.
- **Changelog** - displays the log of the newest version module release. Sometimes, if module has no changelog in the newest version, there will be _No changelog provided_ placeholder texted.
- **CTA Upgrade button** - If the module is outdated, the CTA button can be shown as _Upgrade_. Clicking Upgrade will update the module to the latest version according to the latest module release. There is a **dropdown arrow** near the button - clicking on the arrow, shows additional functions for the certain module:

  - **Uninstall** - uninstalls selected module.
  - **Disable** - disables selected module.
  - **Enable** - enables selected module.
  - **Reset** - resets selected module.
  - **Enable Mobile** - enables the Mobile view for the module.
  - **Disable Mobile** - disables the Mobile view for the module.

## Multistores functionality

The modules, that are displayed in Alerts and Updates tabs, are not maintained and managed separately in different Multistores or Shop groups. All the actions for one module in one Multistore or Shop group will result the same outcome in the other Multistore or Shop group.
