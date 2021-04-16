# **SPECIFICATIONS - CUSTOMERS SETTINGS > CUSTOMERS PAGE**


## General

_As a merchant, I want to be able to define my preferences to manage my customers._

**Re-display cart at login.** By default, this option is disabled. When enabled, **if a customer has left a cart unchecked-out, it displays it again when he/she logs back in**. It should even memorize at what step of the checkout the customer stops so that he/she can go back directly to where the checkout was stopped. A tooltip is available: `After a customer logs in, you can recall and display the content of his/her last shopping cart.` in `Admin.Shopparameters.Help`.

**Send an email after registration.** Enabled by default, the setting allows any newly-created customer to **receive by email a summary of his/her account information after registration**. It triggers the _account_ email, available for both email templates, _classic_ and _modern_, in the Design > Email Theme section of the back office. A tooltip is available: `Send an email with summary of the account information (email, password) after registration.` in `Admin.Shopparameters.Help`.

**Password reset delay.** Merchants can **prevent customers from generating new passwords too often**. It limits the frequency at which a customer can generate a new password for his/her account. By default, it is set at 360 minutes (= 6 hours). A tooltip is available: `Minimum time required between two requests for a password reset.` in `Admin.Shopparameters.Help`.

**Enable B2B mode.** It is disabled by default since supposed to be activated when selling to other companies. Here are the features this setting should trigger when enabled:

- New fields are available in the customer profile in the BO ('Company', 'SIRET', 'APE', 'Website', 'Allowed outstanding amount', 'Maximum number of payment days', and 'Risk rating') as well as in the FO, in both the _Information_ section of the personal account and the _Personal information_ step of the checkout funnel, as optional fields ('Company' and 'Identification number' standing for the 'SIRET' BO field);

- Any customer profile card to be selected when creating an order in the BO should display the 'Company' information, cf _to do_ #[22643](https://github.com/PrestaShop/PrestaShop/issues/22643) issue;

- A Customers > Outstanding page is available.

A tooltip is available: `Activate or deactivate B2B mode. When this option is enabled, B2B features will be made available.` in `Admin.Shopparameters.Help`.

**Ask for birth date.** By default, it is enabled, meaning the **customer's birth date is asked when he/she is checking out**. In the front-office, it displays a 'Birthdate' optional field in the very first step of the checkout funnel, the _Personal information_ step, and in the _Information_ section of the personal account. A tooltip is available: `Display or not the birth date field.` in  `Admin.Shopparameters.Help`.

**Enable partner offers.** It should be disabled by default. Merchants must have **agreed with their business partners to suggest their customers to subscribe their newsletters** in the meantime. It displays a 'Receive offers from our partners' checkbox in the very first step of the checkout funnel, the _Personal information_ step. A tooltip is available: `Optional check box for affiliate links` in  `Admin.Shopparameters.Help`.

A 'Save' button is available at the end of the page. When saving, the user is supposed to stay on this page and see a success notification: `Update successful` in `Admin.Notifications.Success`. If the value typed in the _Password reset delay_ field contains other characters than numbers, an error notification should be displayed: `The %s field is invalid.` (`%s` standing for `Password reset delay`) in `Admin.Notifications.Error`.


## Multistore behavior

### Specific shop or group context

In a specific shop context or in a group context, the options listed above should have [checkboxes](https://github.com/PrestaShop/PrestaShop/issues/19365).


### All shops context

In an all shops context, the options listed above should have [specific settings drop-down](https://github.com/PrestaShop/PrestaShop/issues/19317).

:point_right: [Multistore general specs](../../multistoregeneralspecs.md)
