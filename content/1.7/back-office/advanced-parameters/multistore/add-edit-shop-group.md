---
title: Add/edit shop group
weight: 1
---

## Multistore tree

In this section firstly 2 buttons are presented:

 - Collapse all, when pressed, shows all the directories for the stores.
 - Expand all, when pressed, hides all the directories for the stores.

By default the folder in which the stores are kept is shown, it can be pressed, and a redirection to the folder will happen.
Below the stores that are kept within the folder can also be pressed, when any of the are pressed, the options are set to be made on the shop which was last pressed.

## Shop group

Firstly a message is shown: "Warning: Enabling the "share customers" and "share orders" options is not recommended. Once activated and orders are created, you will not be able to disable these options. If you need these options, we recommend using several categories rather than several shops.".

Below there are 6 fields:

 - Shop group name, this is a mandatory input field for the name, when trying to save with the field empty, will show the following message: " The name field is required.".

 - Colour, this is an input field for the color number, and a button on the right is present, when pressed, a color palette is shown, where it is possible to choose the needed color, or enter the color number for it to appear. When a color is selected, the input field for the code of the color will be painted in that color. Has a tooltip: "Choose a colour with the colour picker, or enter an HTML colour (e.g. "lightblue", "#CC6600").
A text below is shown: "It will only be applied to this group of shops, each store will keep its individual color.".

 - Share customers, this is a mandatory toggle switch, which ny default is set to "No". A text below is shown: "Once this option is enabled, the shops in this group will share customers. If a customer registers in any one of these shops, the account will automatically be available in the others shops of this group.
Warning: you will not be able to disable this option once you have registered customers.".

 - Share available quantities for sale, this is a mandatory toggle switch, which ny default is set to "No". A text below is shown: "Share available quantities between shops of this group. When changing this option, all available products quantities will be reset to 0.".

 - Share orders, this is a mandatory toggle switch, which ny default is set to "No". A text below is shown: Once this option is enabled (which is only possible if customers and available quantities are shared among shops), the customer's cart will be shared by all shops in this group. This way, any purchase started in one shop will be able to be completed in another shop from the same group.
Warning: You will not be able to disable this option once you've started to accept orders. 

 - Status, this is a mandatory toggle switch, which ny default is set to "Yes". A text below is shown: Enable or disable this shop group? 

### Call to action

 - Cancel, closes the add new/edit shop group table, the multistore settings are shown.
 - Save, when pressed closes the add new/edit shop group table, a message is shown: "Successful creation.".
