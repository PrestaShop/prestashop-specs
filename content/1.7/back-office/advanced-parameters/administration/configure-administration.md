---
title: Administration Page
weight: 1
---

## CONFIGURE > ADVANCED PARAMETERS > ADMINISTRATION

![Administration](static/img/configure-administration.png)

This UI is responsible for General, Upload, and Notifications settings of the webshop.

## Top UI section

- **Multishop switcher** - it is an ability to switch the available multistores while being on the current SEO editing page, and to view the shop Front-Office homepage by redirection.
- **Breadcrumbs, page title, Recommended modules and Help CTA's** - default Prestashop UI in the top position, helping administrators to improve the navigation - to view the current Title of the page, see the level of the navigation.

## General section

All the settings are marked as required. The following settings are:
- **Automatically check for module updates** - required setting - toggle switch, by default it is enabled - it initiates the automatic Prestashop module updates checking. If there will be a newer module released in Addons Marketplcace, the system will show the notifications, about the available module updates. The description says _Choose a stability level for the modules downloaded from the Addons Marketplace. All zips pushed on Addons are in stable state unless stated otherwise._ and that means, that updating the modules with the newest will impact the webshop stability to the greater.
- **Addons API stability channel** - required setting - it is a dropdown, with 3 available values - **Stable**, **Beta** and **Aplha**. By default, the Stable option is selected. Those values are set only from the Addons modules development side, as well especially useful for modules testing. Those channels are like development versioning branches. **Alpha** channel will contain the newest module updates, but mostly not tested, **Stable** will have the latest bug-fixed module changes and **Beta** will have a little tested and a little bug-fixed module API state - displayed as the middle type of the 3 channels. There is a small description below the dropdown field _New modules and updates are displayed on the modules page._
- **Check the cookie's IP address** - required setting - by default the feature is enabled. It is a security functionality, that checks the IP address from the cookie, that is being carried by the webshop visitor. Cookies can be stolen, with the useful information stored, so IP requirement and revealing would restrict the hacker-typed actions. Small description is telling _Check the IP address of the cookie in order to prevent your cookie from being stolen._
- **Lifetime of front office cookies** - required setting - by default the value is set to 480 hours. This field can set the hourly rate, after when the Prestashop will logg-off the Customer from Front-Office. It was made for security reasons to prevent stealing the Customers' information. Also, it is a good practice for Customers to change the password in some time, so that Prestashop checks for the new password. The small description after the input field says _Set the amount of hours during which the front office cookies are valid. After that amount of time, the customer will have to log in again._ If the field is submitted with invalid characters, the response is prompted _Lifetime of front office cookies is invalid. Please enter an integer greater than or equal to 0._ right after clicking Save CTA.
