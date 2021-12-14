---
title: Add / Edit Store
weight: 1
---

# Add / Edit Store

While adding or editing a store, the following fields/toggles/drop downs/parameters are displayed:

1) Name

This input field allows to fill the name of the store. It can be translated: When several languages are installed, a drop-down next to the field is displayed. It allows choosing in which language the field is displayed and customizing it according to the language. Disabled languages are displayed in the drop-down. When the label is hovered, a tooltip is displayed "Store name (e.g. City Center Mall Store). Allowed characters: letters, spaces and %s"

2) Address

This input field allows to fill the address of the store. This field is mandatory and can be translated: When several languages are installed, a drop-down next to the field is displayed. It allows choosing in which language the field is displayed and customizing it according to the language. Disabled languages are displayed in the drop-down.
If the save button is pressed and if this field is empty, the following error message is displayed: "The field address1 is required at least in _default language_"

3) Address (2)

This input field allows to fill the second address line of the store. This field can be translated: When several languages are installed, a drop-down next to the field is displayed. It allows choosing in which language the field is displayed and customizing it according to the language. Disabled languages are displayed in the drop-down.

4) Zip/Postal code

This input field allows to fill the zip/postal code of the store. The field is mandatory, if the field is empty when trying to save, the following error message is displayed: "A Zip/Postal code is required.". If the postal code exceeds 12 characters when trying to save, the following error message is displayed: "The postcode field is too long (12 chars max).". If the format isn't correct when saving, the following error message is displayed: "The Zip/Postal code is invalid. It must be entered as follows: 00000". The format of the postal code is defined for each country in International > Locations > Countries > Add/edit country.

5) City

This input field allows to fill the city of the store and is mandatory.
If more than 64 chars are filled the following message is dislayed: "The city field is too long (64 chars max)." 
If invalid chars are filled the following message is displayed: "The city field is invalid."
If the save button is pressed and if this field is empty, the following error message is displayed "The city field is required."

6) Country

This drop-down allows to select the country of the store and is mandatory. While creating a new store, the default country (selected in International > Localization > Configuration) is selected by default.

7) State (displayed only for the countries that have states, as defined in International > Locations > States.)

This drop-down allows to select the state of the store and is mandatory. If no state is selected when trying to save, the following error message is displayed: "An address located in a country containing states must have a state selected."

8) Latitude/Longtitude

There are 2 separate input fields for the latitude and longitude of the store, they are both mandatory.
Only numbers are allowed for these fields. When trying to input a character that is not a number, an error message is displayed: "Latitude and longitude are required." The numbers in the fields are limited to 13, if there are more numbers than allowed, an error message is displayed: "The latitude field is too long (13 chars max)." and/or "The longitude field is too long (13 chars max)."
When the label is hovered, a tooltip is displayed: "Store coordinates (e.g. 45.265469/-47.226478).

9) Phone

This input field allows to fill the phone number of the store.
If more than 64 chars are filled the following message is dislayed: "The phone field is too long (16 chars max)."
Only numbers are allowed for these fields. When trying to input a character that is not a number, an error message is displayed: "The phone field is invalid."

10) Fax

This input field allows to fill the fax number of the store.
If more than 64 chars are filled the following message is dislayed: "The phone field is too long (16 chars max)."
Only numbers are allowed for these fields. When trying to input a character that is not a number, an error message is displayed: "The phone field is invalid."

11) Email address

This input field allows to fill the email address of the store.

12) Note

This input field allows to fill a note for the store. It can be translated: When several languages are installed, a drop-down next to the field is displayed. It allows choosing in which language the field is displayed and customizing it according to the language. Disabled languages are displayed in the drop-down.

13) Active

This toggle can be on "yes" or "no" and allows to choose if the store is active or not. By default, while creating a new store, this toggle is on "yes". If the toggle is set to "no", the "Stores" page of the front office will not be displayed or accessible.
When the label is hovered, a tooltip is displayed: "Whether or not to display this store".

14) Picture

This field allows to upload a picture for the store.
While editing a store with an existing picture, the size of the picture is displayed under the field. When the label is hovered, a tooltip is displayed: "Storefront picture."
When trying to upload an incorrect format file, the following error message is displayed: "Image format not recognized, allowed formats are: gif, jpg, jpeg, jpe, png, webp"

15) Shop association

The shop association block is displayed when the multistore is enabled and if several shops are configured.

👉 See the [specs of the shop association block]({{<ref "../../../multistoregeneralspecs.md#shop-association-block">}} "Shop association block")

16) Hours

Firstly an example is displayed: "e.g. 10:00AM - 9:30PM"
For each day of the week, there is an input field allowing to fill the working hours. These fields can be translated: When several languages are installed, a drop-down next to the field is displayed. It allows choosing in which language the fields are displayed and customizing it according to the language. Disabled languages are displayed in the drop-down.

 - Monday
 - Tuesday
 - Wednesday
 - Thursday
 - Friday
 - Saturday
 - Sunday

## Call to action

- **Save:**
In the case of adding a new store, the store is added and a success message is displayed on the stores listing: "Successful creation.". In the case of editing a store, the store is edited and a success message is displayed on the stores listing: "Successful update.".
- **Cancel:**
The store is not added/edited and the stores listing is displayed.
