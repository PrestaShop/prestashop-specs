---
title: Login into Back-Office
weight: 1
---
# LOGIN

![Login UI](static/login.png)

This page allows any authorized user to connect to the PrestaShop back-office. 

## Top UI Section

- The top section represents the Prestashop main title name and the Prestashop version, that the administrator is accessing.

## Middle UI Section

- **Logo** - PrestaShop's logo.
- **Shop name** - the shop name, that was defined during the installation process of Prestashop application.
- **Email address** - email input - Email from a SuperAdmin or Employees acount must be used to log-in. 
- **Password input** -  Password of the email account above from a SuperAdmin or Employees must be used to log-in. 
- **Login button** - Allows access to the back office after verifying that the user is authorized to log-in.
- **Stay logged in checkbox** - The browser will remember the logging-in status, and the administrator will not be required to input email and password in the next attempt of logging-in. The administrator will be authenticated and redirected to the dashboard instantly .
- **I forgot my password** - specific link, in case administrator forgets the Prestashop authentication password. Once clicked, the UI instantly flips to the new UI which contains the email input. 

### Send reset link form

After typing the email into the input, clicking the button _Send reset link_, a link will be generated and sent to the defined email. If the attempt is successful, the message will appear _Please, check your mailbox. A link to reset your password has been sent to you._

The email message will contain unique URL. Clicking that link will redirect to **Reset your password** form. The form will contain **New password** and **Confirm new password** inputs, and those fields are mandatory to fill. After filling the fields, _Reset password_ should be clicked. If attempt is successful, the UI will be prompted by success message.

## Bottom UI Section

- **Back to Front-Office** - the link, navigating to the Prestashop Front-Office parent home page.
- **Copyright** - Prestashop all rights declaration text.
- **Social networking** - official social networks of Prestashop: Twitter, Facebook, Github and their links.
