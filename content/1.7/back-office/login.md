---
title: Login into Back-Office
weight: 1
---
# PRESTASHOP AUTHENTICATION WINDOW

![Login UI](static/login.png)

This page allows any authorized user to connect to the PrestaShop back-office. 

## Top UI Section

- The top section represents the Prestashop main title name and the Prestashop version, that the administrator is accessing.
- Prestashop version - 1.7.8.0.

## Middle UI Section

- **Logo** - PrestaShop's logo.
- **Shop name** - the shop name, that was defined during the installation process of Prestashop application.
- **Email address** - email input - Email from a SuperAdmin or Employees acount must be used to log-in. 
- **Password input** -  Password of the email account above from a SuperAdmin or Employees must be used to log-in. 
- **Login button** - Allows access to the back office after verifying that the user is authorized to log-in.
- **Stay logged in checkbox** - The browser will remember the logging-in status, and the administrator will not be required to input email and password in the next attempt of logging-in. The administrator will be authenticated and redirected to the dashboard instantly .
- **I forgot my password** - specific link, in case administrator forgets the Prestashop authentication password. Once clicked, the UI instantly flips to the new UI which contains the email input. 

### Notifications UI of the main login form

If the email, that is being typed in the main login form, is incorrect, the UI will be prompted with the instant error message _Please enter a valid email address._

If the email or password, that is being typed in the main login form, is incorrect, the UI will be prompted with the error message _There is one error. The employee does not exist, or the password provided is incorrect._

If the password, that is being typed in the main login form, is incorrect, the UI will be prompted with the error message _There is one error. Invalid password._

### Flipped send reset link form UI

- **Logo** - PrestaShop's logo.
- **Prestashp version** - numeric value of the Prestashop version.
- **Forgot your password?** - questioin title.
- **Email address** - title of the input, for password resetting.
- **Input** - the place where the email is typed in. There is a placeholder defined in the input - email icon and example email variable _test@example.com_.
- **Cancel** - back-flips the UI to the main administration UI form.
- **Send reset link** - Call-to-action button that initiates the password resetting.

After typing the email into the input, clicking the button _Send reset link_, a link will be generated and sent to the defined email. The email message will contain unique URL. Clicking that unique URL from email, will redirect to **Reset your password** form. The form will contain **New password** and **Confirm new password** inputs, and those fields are mandatory to fill. After filling new password and retyping new password again in required fields, _Reset password_ button should be clicked. _Cancel_ button will back-flip the UI into the main login screen.

### Notifications UI of the flipped Send reset link form

If the email reset attempt is successful, the message will appear _Please, check your mailbox. A link to reset your password has been sent to you._

If users' email link clicking attempt is successful, there will be a redirection back to the Prestashop administration UI with the success message _Your password has been successfully changed. You will be redirected to the login page in a few seconds._ Then administrator will be able to login using the new password, in the main login form.



## Bottom UI Section

- **Back to Front-Office** - the link, navigating to the Prestashop Front-Office parent home page.
- **Copyright** - Prestashop all rights declaration text.
- **Social networking** - official social networks of Prestashop: Twitter, Facebook, Github and their links.
