# Specifications for Date of delivery module #

In 1.7, the dateofdelivery module has never been integrated with Classic Theme, which results in the module not being displayed in front-office (when using the $hookDisplayBeforeCarrier).
This specification aims at redefining available features with this module so that it is easier to make it work on PrestaShop 1.7.

**FRONT-OFFICE**
This module displays an approximate date of delivery during the checkout process.
It should be displayed in the "Shipping" section of the process, as shown on the mock up below.
![Date of Delivery module](/img/Dateofdeliverymodule.png.jpg)

**BACK-OFFICE**
The configuration page in BO has two sections:

- **Carrier configuration**. The module relies on indications from your carriers. You must therefore add rules for each of your carriers, by clicking on the "Add a new carrier rule" link.

- **Settings**:
    - Extra time when a product is out of stock. Estimate the time it might take for your team to re-stock products. This is only useful if customers can order out-of-stock products (the option for this is in the "Products" preference page, in the "Products stock" section).
    - Extra time for preparation of the order. Estimate the time it might take for your team to prepare an order.
    - Preparation option. If your packaging team also works on weekends, indicate it, as the module takes this into account.
    - Date format. The format in which the expected delivery date is displayed. It uses PHP date() format: each letter has a meaning, as explained in the indicated link. The default, "l j F Y", means the date will be displayed in the format "Saturday 21 January 2012". There are many more parameters that you can use to build the date format as you see fit: see http://www.php.net/manual/en/function.date.php.

Adding a new carrier rule is pretty straightforward:

- Carrier. Choose the carrier for which you want to add the rule. If the wanted carrier is not there, you must create it in the Shipping > Carriers page.
- Delivery between. Set the timeframe in which the chosen carrier promises to deliver products. You have to gather this information from the carrier itself.
- Preparation options. Some carriers also prepare their packages on weekend days, so as to send them first thing on Monday morning. Be sure to indicate it if so.

You should create as many carrier rules as necessary.
