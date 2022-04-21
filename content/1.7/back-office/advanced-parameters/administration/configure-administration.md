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

Section title includes a grid icon.

- **Automatically check for module updates** - required toggle button - toggle switch, by default it is enabled - it initiates the automatic Prestashop module updates checking. If there will be a newer module released in Addons Marketplcace, the system will show the notifications, about the available module updates. The description says _Choose a stability level for the modules downloaded from the Addons Marketplace. All zips pushed on Addons are in stable state unless stated otherwise._ and that means, that updating the modules with the newest will impact the webshop stability to the greater.
- **Addons API stability channel** - required setting - it is a dropdown, with 3 available values - **Stable**, **Beta** and **Aplha**. By default, the Stable option is selected. Those values are set only from the Addons modules development side, as well especially useful for modules testing. Those channels are like development versioning branches. **Alpha** channel will contain the newest module updates, but mostly not tested, **Stable** will have the latest bug-fixed module changes and **Beta** will have a little tested and a little bug-fixed module API state - displayed as the middle type of the 3 channels. There is a small description below the dropdown field _New modules and updates are displayed on the modules page._
- **Check the cookie's IP address** - required toggle button - by default the feature is enabled. It is a security functionality, that checks the IP address from the cookie, that is being carried by the webshop visitor. Cookies can be stolen, with the useful information stored, so IP requirement and revealing would restrict the hacker-typed actions. Small description is telling _Check the IP address of the cookie in order to prevent your cookie from being stolen._
- **Lifetime of front office cookies** - required setting - by default the value is set to 480 hours. This field can set the hourly rate, after when the Prestashop will logg-off the Customer from Front-Office. It was made for security reasons to prevent stealing the Customers' information. Also, it is a good practice for Customers to change the password in some time, so that Prestashop checks for the new password. The small description after the input field says _Set the amount of hours during which the front office cookies are valid. After that amount of time, the customer will have to log in again._ If the field is submitted with invalid characters, the response _Lifetime of front office cookies is invalid. Please enter an integer greater than or equal to 0._ is prompted right after clicking Save CTA. 
- **Lifetime of back office cookie**s - required setting - by default the value is set to 480 hours. This field can set the hourly rate, after when the Prestashop will logg-off the Administrator from Back-Office. It was made for security reasons to prevent stealing the Administrators' information. Also, it is a good practice for Administrators to change the password in some time, so that Prestashop checks for the new password. The small description after the input field says _When you access your back office and decide to stay logged in, your cookies lifetime defines your browser session. Set here the number of hours during which you want them valid before logging in again._ If the field is submitted with invalid characters, the response _Lifetime of back office cookies is invalid. Please enter an integer greater than or equal to 0._ is prompted right after clicking Save CTA. 
- **Cookie SameSite** - required dropdown - by default the value is set to Lax. These settings sets the cookie sending information to the third-party or the first-party websites. The small description text says _Allows you to declare if your cookie should be restricted to a first-party or same-site context._ Additional information can be found in any browsers' [documentation page.](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite) 

There are the following SameSite cookie values:
  - **Lax** - Cookies are not sent on normal cross-site subrequests.
  - **Strict** - Cookies will only be sent in a first-party context.
  - **None** - Cookies will be sent in all contexts, i.e. in responses to both first-party and cross-origin requests. 

- **Save CTA** - saves the General section configuration, with the prompting green success notification _Update successful_.

## Upload quota section

Section title includes an upload icon.

- **Maximum size for attached files** - required input, by default the value is set to 8 megabytes. This field triggers the maximum size allowed for attachment. The size is valued in number of megabytes, additional block with the _megabytes_ is defined in the end of input element. Max file size is also defined in server configuration files. The description text is saying _Set the maximum size allowed for attachment files (in megabytes). This value has to be lower than or equal to the maximum file upload allotted by your server (currently: 8 MB)._
- **Maximum size for a downloadable product** - required input, by default the value is set to 2 megabytes. This field triggers the maximum size allowed for file uploading. The size is valued in number of megabytes, additional block with the _megabytes_ is defined in the end of input element. Max file uploading size is also defined in server configuration files. The description text is saying _Define the upload limit for a downloadable product (in megabytes). This value has to be lower or equal to the maximum file upload allotted by your server (currently: 2 MB)._
- **Maximum size for a product's image** - required input, by default the value is set to 2 megabytes. This field triggers the maximum size allowed for uploading product images. The size is valued in number of megabytes, additional block with the _megabytes_ is defined in the end of input element. Max product images uploading size is also defined in server configuration files. The description text is saying _Define the upload limit for an image (in megabytes). This value has to be lower or equal to the maximum file upload allotted by your server (currently: 2 MB)._

No invalid character notifications are prompted, after typing letters or symbols in those 3 felds. 

- **Save CTA** - saves the configuration in Upload quota section, by prompting the green success notification _Update successful_.

## Notifications

Section title includes an exclamation icon and a blue circle element. The circle element includes the text _Notifications are numbered bubbles displayed at the very top of your back office, right next to the shop's name. They display the number of new items since you last clicked on them._ once it is hovered.

### Notifications dropdown block

![Notifications dropdown block with new Order notification](static/img/notifications-dropdown-block.png)

![Notifications dropdown block with new Customer notification](static/img/new-customer.png)

![Notifications dropdown block with new Message notification](static/img/new-messages.png)

Notifications are displayed in the dropdown block once the bell icon is clicked. The block contains 3 following tabs, with the content rows:

  - **Orders tab** - title containing the total amount of newest Orders made, also displaying the **order number**, **order creator**, **country code**, **shop name** and **the amount** of the order with currency. After viewing the new Order notification for 2 minutes, the notification removes itself from the list. If the list is empty, the placeholder _No new order for now :( Have you checked your abandoned carts? Your next order could be hiding there!_ appears in the block, with the link to the Abandoned Carts.
  - **Customers tab** - title containing the total amount of newest Customers registered to the webshop. The displayed elements are - **Customer number**, **Name** and **Last name**, the date when the customer has registered from Front or Back Office - with the format MM/DD/YYY.
  - **Messages tab** - containing the total amount of newest Messages sent by client from Order details from Front Office side. The displayed elements are - **circle notification** element, **open** status indicator, **First** and **Last** name of the Customer, a **clock** icon and time, when the message has been sent - with the format MM/DD/YYY.
- **Show notifications for new orders** - required toggle button, by default it is enabled. This feature allows showing notifications on the top-right of the Prestashop UI. The new notifications will appear in the block.
