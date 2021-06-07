---
title: Updates Page
weight: 1
---
# **SPECIFICATIONS - MODULE MANAGER > UPDATES PAGE**


_As a merchant, I want to be able to get the list of all the modules I need to update._

## Modules header

Upload a module. [TO BE COMPLETED]

If the module zip file is too big, the upload fails and the modal window notices the error:

![Module upload failed](/img/Module-upload-failed-modal.png)

Clicking on 'What happened?' should display `Your uploaded file might exceed the upload_max_filesize and the post_max_size directives in php.ini, please check your server configuration.` in `Admin.Notifications.Error`, cf. _to do_ #[16428](https://github.com/PrestaShop/PrestaShop/issues/16428) issue.


## Modules listing

[TO BE COMPLETED]

Among many actions, merchants can upgrade modules by clicking the CTA at the right end of each module line. A modal window should be displayed to warn users about the potential risk of doing an upgrade on production without a test. Here are the two identified cases:

1. the user is **already on maintenance mode**:

_Are you sure you want to upgrade this module?_

If yes, he/she should click _Upgrade_.</br>
If no, he/she should click _Cancel_.

2. the user is **not on maintenance mode**:

_Are you sure you want to upgrade this module? We strongly advise you to upgrade the modules on maintenance mode to avoid any cache issues._

If he/she wants to proceed, he/she should click _Upgrade anyway_.</br>
If he/she wants to enable the maintenance mode, he/she should click _Go to maintenance page_.</br>
If no, he/she should click _Cancel_.


## Upgrade in bulk action

Merchants can also upgrade in one click all the modules listed, using the 'Upgrade all' CTA on the top right-hand corner of the page. A modal window should be displayed to warn users about the potential risk of doing an upgrade on production without a test. Here are the two identified cases:

1. the user is **already on maintenance mode**:

_Are you sure you want to upgrade these modules?_

If yes, he/she should click _Upgrade_.</br>
If no, he/she should click _Cancel_.

2. the user is **not on maintenance mode**:

_Are you sure you want to upgrade these modules? We strongly advise you to upgrade the modules on maintenance mode to avoid any cache issues._

If he/she wants to proceed, he/she should click _Upgrade anyway_.</br>
If he/she wants to enable the maintenance mode, he/she should click _Go to maintenance page_.</br>
If no, he/she should click _Cancel_.



