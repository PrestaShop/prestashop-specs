---
title: Add / edit contact
weight: 1
---
# Add / edit contact

![Contact](/static/img/contacts.png)


While adding or editing a contact, the following fields / toggles / parameters are displayed:

 1) Title

This field is mandatory and can be translated: When several languages are installed, a drop-down next to the field is displayed. It allows choosing in which language the field is displayed and customizing it according to the language. Disabled languages are displayed in the drop-down.
The title is the name of the contact. For example, it can be either a person's name or the name of the service itself. There is a help-text under this field: "Contact name (e.g. Customer Support)."
If the save button is pressed and if this field is empty for the default language, the following error message is displayed: "The field title is required at least in your default language."
 
 2) Email address

There is a help-text under this field: "Emails will be sent to this address.".
 
 3) Save messages?

This toggle is mandatory and allows to choose if the messages are saved or not in the Customer Service page. By default, this toggle is disabled. There is a help-text under this toggle: "If enabled, all messages will be saved in the "Customer Service" page under the "Customer" menu."

 4) Description

This field can be translated: When several languages are installed, a drop-down next to the field is displayed. It allows choosing in which language the field is displayed and customizing it according to the language. Disabled languages are displayed in the drop-down. There is no drop-down button when only one language is defined

 5) Shop association

The shop association block is mandatory and is displayed when the multistore is enabled and if several shops are configured.
If the save button is pressed and if no shop is selected, the following error message is displayed: "The "Shop association" field is required." and the contact is not saved.

:point_right: See the [specs of the shop association block](../../../multistoregeneralspecs.md#shop-association-block)

 ## Call to action 
 There are 2 buttons at the bottom of this page: 
 - Cancel: The contact is not added/edited and the listing is displayed
 - Save: In the case of adding a contact and if there is no error, the contact is added and a success message is displayed on the listing: "Successful creation.". In the case of editing a contact, the contact is edited and a success message is displayed on the listing: "Successful update.".
