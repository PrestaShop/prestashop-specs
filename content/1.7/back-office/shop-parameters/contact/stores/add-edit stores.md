---
title: Add / Edit Stores
weight: 1
---

# Add / Edit Store

While adding or editing a store, the following fields/toggles/drop downs/parameters are displayed:

1) Name

This input field allows to fill the name of the store. It can be translated: When several languages are installed, a drop-down next to the field is displayed. It allows choosing in which language the field is displayed and customizing it according to the language. Disabled languages are displayed in the drop-down.

3) Address

This input field allows to fill the address of the store. This field is mandatory and can be translated: When several languages are installed, a drop-down next to the field is displayed. It allows choosing in which language the field is displayed and customizing it according to the language. Disabled languages are displayed in the drop-down.
If the save button is pressed and if this field is empty, the following error message is displayed: "The field address1 is required at least in _default language_"

5) Address (2)

This input field allows to fill the second address line of the store. This field can be translated: When several languages are installed, a drop-down next to the field is displayed. It allows choosing in which language the field is displayed and customizing it according to the language. Disabled languages are displayed in the drop-down.

7) Zip/Postal code

This input field allows to fill the zip/postal code of the store. The field is not marked as mandatory, but if the field is empty, and trying to save, shows the message: "A Zip/Postal code is required.". Also the postcode can't be too long, if it's too long, and trying to save shows the message: "The postcode field is too long (12 chars max).", also if the format isn't correct, when saving shows error: "The Zip/Postal code is invalid. It must be entered as follows: 00000"

9) City

This input field allows to fill the city of the store and is mandatory.
If the save button is pressed and if this field is empty, the following error message is displayed: "The city field is required."

11) Country

This drop-down allows to select the country of the store and is mandatory. While creating a new store, the default country (selected in International > Localization > Configuration) is selected by default.

13) State (only for the countries that have states, as defined in International > Locations > States.)

This drop-down allows to select the state of the store and is mandatory. If no state is selected, when trying to save, shows: "An address located in a country containing states must have a state selected."

15) Latitude/Longtitude

There are 2 separate input fields for the latitude and longitude of the store, they are both mandatory.
Only numbers are allowed for these fields. When trying to input characters that are not some numbers, an error message is displayed: "Latitude and longitude are required." The numbers in the fields are limited to 13, if there are more numbers than allowed, an error message is displayed: "The latitude field is too long (13 chars max)." and/or "The longitude field is too long (13 chars max)."

17) Phone

This input field allows to fill the phone number of the store.

19) Fax

This input field allows to fill the fax number of the store.

21) Email address

This input field allows to fill the email address of the store.

23) Note

This input field allows to fill a note for the store.

25) Active

This toggle can be on "yes" or "no" and allows to choose if the store is active or not.

27) Picture

Picture is shown that will be used for the store.
While editing a store with an existing picture, the size of the picture is displayed under the field.

29) Shop association

The shop association block is displayed when the multistore is enabled and if several shops are configured.

:point_right: See the [specs of the shop association block](../../../multistoregeneralspecs.md#shop-association-block)

31) Hours

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

- Save:
In the case of adding a new store, the store is added and a success message is displayed on the stores listing: "Successful creation.". In the case of editing a store, the store is edited and a success message is displayed on the stores listing: "Successful update.".
- Cancel:
The store is not added/edited and the stores listing is displayed.
