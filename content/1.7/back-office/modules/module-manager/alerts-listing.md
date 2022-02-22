---
title: Alerts Page
weight: 1
---
# MODULES > MODULE MANAGER > ALERTS

![Alerts tab](static/img/alerts-listing.png)

This UI displays the modules that are strongly recommended to update.

## Top UI elements

- **Multistore switching dropdown** - allows to navigate through the available Multistores. Note, that the notifications and alerts indications appear in All of Mulstistores or Shop groups also simultaneously.
- **View my shop and icon** - allows to open the Front-Office in the blank new page by clicking this eye icon link. Redirection leads to the homepage of the Mulsitstore.
- **Breadcrumbs navigation** - identifies the page level.
- **Module notifications** - H1 class title for the page.
- **Upload a module Call-to-action (CTA) button with the cloud-style icon with the arrow pointed up** - allows to upload and install the module to the store. Once the mouse pointer is hovered this button, additional tooltip is visible with the advicible text _Upload a module_. After the button is clicked, a pop-up will appear (more details in the next paragraph _Upload pop-up_).
- **Help ghost CTA** - a side-bar with the helpful information, how to navigate in this page.
- **Tabs** - navigation tabs for Modules menu:
  - **Modules**
  - **Alerts** - yellow notification circle with white number in the top-right place of tab, indicating, how many modules can be triggered for alerts or updates.
  - **Updates** - yellow notification circle with white number in the top-right place of tab, indicating, how many modules can be triggered for alerts or updates.

## Main UI elements

- **Balded title with the tooltip** - {modules number in total} modules to configure and a hover tooltip. A tooltip is displayed as blue information _i_ icon, and when hovered, the text _Modules to configure. These modules require your attention: you need to take some action to ensure they are fully operational._ appears in dark box. 

## Module row

Module row block is displayed the same as in other Module Manager or Module Selections listings. More information - please navigate to ![Modules listing specification](/modules-listing.md).

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
