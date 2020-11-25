# **SPECIFICATIONS - MAINTENANCE PAGE**


_As a merchant, I want to be able to turn my store offline to perform maintenance._

## General

**Enable store.** Merchants have the **possibility to temporarily disable their shop**. It should only disable the front office, the back office is still accessible during maintenance. A help text is available: `We recommend that you deactivate your store while performing maintenance. Note that it will not disable the webservice.` in `Admin.Shopparameters.Help`.

During maintenance, the webservice remains enabled. Users with a key can still retrieve data. If need be, the webservice is to disable in Advanced Parameters > Webservice.

**Enable store for logged-in employees.** By default, this setting is enabled. When an employee is logged in, his/her **IP address should automatically be allowed to access the front office**, even if the shop is disabled. A help text is available: `Allow logged in employees to access the store, even in maintenance mode.` in `Admin.Shopparameters.Help`.

**Maintenance IP.** It **allows specific IP addresses to access the store even if it is disabled**. Clicking `Add my IP` should automatically fetch the IP address of the current computer. Users can add as many IP addresses as they need as long as separated with commas (,).

A help text is available: `IP addresses allowed to access the front office even if the shop is disabled. Please use a comma to separate them (e.g. 42.24.4.2,127.0.0.1,99.98.97.96).` in `Admin.Shopparameters.Help`.

**Custom maintenance text.** Users can **display a message on the maintenance page**. By default, it is limited to 21844 characters. If the input contains more than 21844 characters, an error notification should be displayed when saving: `%1$s is too long. Maximum length: %2$d` in `Admin.Notifications.Error`.

Leaving this field empty disables the feature. Merchants can localize the label according to the store's available languages.

No help text available, the placeholder indicates users why to fill this field: `Write a customized message for the customers to read when the store is disabled.` in `Admin.Shopparameters.Help`.

Clicking 'Save', users are expected to stay on this page and see a success notification, `Update successful` in `Admin.Notifications.Success`.


## Multistore behavior

[TO BE COMPLETED]
