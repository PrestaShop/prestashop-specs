# **SPECIFICATIONS - DASHBOARD PAGE**


_As a user, I want to know when my PHP version is no longer supported._

Since 1.7.8, a yellow warning notification is displayed on the top of the Dashboard page when the PHP version detected is no longer supported, cf. issue #[20862](https://github.com/PrestaShop/PrestaShop/issues/20862).

It says `You are using a PHP version that is not supported and this can affect your store. Please check PHP requirements and change for the suitable PHP version.` in `Admin.Notifications.Warning`.

Users should be able to dismiss this warning notification when it pops up, but it will keep on appearing at each session until the PHP version is changed.

If, following this recommendation, the user updates the PHP version to use a supported one, when logging in again, he/she should be able to see a green success notification: `You are now running a supported PHP version.` in `Admin.Notifications.Success`.

[TO BE COMPLETED]
