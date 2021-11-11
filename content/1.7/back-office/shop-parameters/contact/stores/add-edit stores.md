---
title: Add / Edit Stores
weight: 1
---

# Add / Edit Store

When entered the add or editing current store the following fields are displayed:

1) Name

Input field for the name of the store. Can be translated: When several languages are installed, a drop-down next to the field is displayed. It allows choosing in which language the field is displayed and customizing it according to the language. Disabled languages are displayed in the drop-down.

3) Address

Input field for the address of the shop. This field is mandatory and can be translated: When several languages are installed, a drop-down next to the field is displayed. It allows choosing in which language the field is displayed and customizing it according to the language. Disabled languages are displayed in the drop-down.
If there is no address input, when trying to save shows the message: "The field address1 is required at least in English (English)."

5) Address (2)

Second input field for the address of the shop. This field can be translated: When several languages are installed, a drop-down next to the field is displayed. It allows choosing in which language the field is displayed and customizing it according to the language. Disabled languages are displayed in the drop-down.

7) Zip/Postal code

Input field for the zip/postal code of the shop.

9) City

Input field for the city of the shop, this field is mandatory.
When trying to save without a city entered, shows the message: "The city field is required."

11) Country

Drop-down menu for the country of the shop, this is a mandatory selection field.

13) State (is shown only when the country is selected as "United states")

Drop-down menu for the state of the shop, this is a mandatory selection field.

15) Latitude/Longtitude

These are 2 separate input fields for the lattitude and longtitude of the shop, this field is mandatory.
Only numbers are allowed for these fields. When trying to input anything but not numbers, a message is shown: "Latitude and longitude are required." Also, the numbers in the fields are limited, if there are more numbers than allowed, messaged are shown: 
"There are 2 errors.
The latitude field is too long (13 chars max).
The longitude field is too long (13 chars max)."

17) Phone

Input field for the phone of the shop.

19) Fax

Input field for the fax of the shop.

21) Email address

Input field for the email of the shop.

23) Note

Input field for the notes of the shop.

25) Active

Toggle switch for "yes" or "no"

27) Picture

Picture is shown that will be used for the store.
Below the size of the picture is shown.
Below that there is a field for picture name input, and a button "add file" for adding a picture.

29) Shop association

The shop association block is displayed when the multistore is enabled and if several shops are configured.

:point_right: See the [specs of the shop association block](../../../multistoregeneralspecs.md#shop-association-block)

31) Hours

Firstly an example is shown: "e.g. 10:00AM - 9:30PM"
All the fields below have separate inputs for working hours. By default all of them are fields have already inputs "09:00AM - 07:00PM" that can be changed. These fields can be translated: When several languages are installed, a drop-down next to the field is displayed. It allows choosing in which language the fields are displayed and customizing it according to the language. Disabled languages are displayed in the drop-down.

 - Monday
 - Tuesday
 - Wednesday
 - Thursday
 - Friday
 - Saturday
 - Sunday

## Call to action

- Cancel:
In the case of adding a new store, the store is added and a success message is displayed on the stores listing: "Successful creation.". In the case of editing a store, the store is edited and a success message is displayed on the stores listing: "Successful update.".
- Save:
The store is not added/edited and the stores listing is displayed.
