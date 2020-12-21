# **SPECIFICATIONS - CUSTOMERS SETTINGS > TITLES PAGE**


_As a merchant, I want to be able to define my customers._

## Listing

As usual, four tables options are displayed on the top-right hand corner as icons: 

- Add new<br>
- Refresh list<br>
- Show SQL query<br>
- Export to SQL manager<br>

By default, the table is divided into the following columns:

- ID<br>
- Social title<br>
- Gender<br>
- Image<br>

To allow users to narrow down their search, searching and/or sorting options are available according to the columns:

Input searching fields are available for ID, Social title columns
Drop-down with 3 selectable options (Male, Female, Neutral) is available for Gender column
Sorting ASC & DESC are available for ID and title columns

At the beginning of each line is a checkbox while, at the end of each line, two actions can be done: _Edit_ and _Delete_. The main action is _Edit_ and it can be performed by clicking on the line.
Checkboxes play with the 'Bulk actions' selector that allows either to 'Select all', 'Unselect all', or 'Delete selected'.


## Add/Edit form

Clicking 'Add new social title' and editing an existing social title redirects to a form.

**Social title.** Required field to **create or modify a social title**. Input is limited to 20 characters, otherwise an error notification is displayed: `Your entry in field %fieldname% (language %languagename%) exceeds max length %charsnumber% chars (incl. HTML tags).` in `Admin.Notifications.Error`.

If the input contains specific characters (<>;=#{}_), an error notification is displayed: `Invalid characters:` in `Admin.Global`.

A drop-down next to the field is displayed when there are several languages installed (disabled languages are displayed in the drop-down). It allows choosing in which language the field is displayed and customizing the title according to the customer's language.

**Gender.** As titles may apply to both male and female customers, or neither, three radio buttons allow merchants to **specify to which category the title applies**. By default, the 'Male' gender is selected.

- Male<br>
- Female<br>
- Neutral<br>

**Image.** Users can **illustrate social titles with a picture**. Clicking 'Add file' should allow merchants to browse their files and pick the right image. Classic gender symbols are the Mars and Venus ones (♂ and ♀) and apply to the 'Mr.' and 'Mrs.' default titles.

Allowed formats are: .gif, .jpg, .png., .svg, and .webp. If a different file format is uploaded and attempted to be saved, an error notification is displayed: `Image format not recognized, allowed formats are: .gif, .jpg, .png., .svg, .webp.` in `Admin.Notifications.Error`.

**Image width.** Merchants can **define the image's width size**. By default, it is set to 16 pixels since PrestaShop works best with 16x16 pixels image. Images are expected to be resized if they are uploaded bigger. If merchants want to use bigger pictures, this option enables them to set the exact size required. Entering '0' makes PrestaShop use the image's original width size. A tooltip is available: `Image width in pixels. Enter "0" to use the original size.` in `Admin.Shopparameters.Help`.

Only numbers should be typed in the field. If the input contains specific characters, an error notification is displayed: `Width and height must be numeric values.` in `Admin.Shopparameters.Notification`.

Leaving this field empty sets the default value.

**Image height.** Merchants can **define the image's height size**. By default, it is set to 16 pixels since PrestaShop works best with 16x16 pixels image. Images are expected to be resized if they are uploaded bigger. If merchants want to use bigger pictures, this option enables them to set the exact size required. Entering '0' makes PrestaShop use the image's original height size. A tooltip is available: `Image height in pixels. Enter "0" to use the original size.` in `Admin.Shopparameters.Help`.

Only numbers should be typed in the field. If the input contains specific characters, an error notification is displayed: `Width and height must be numeric values.` in `Admin.Shopparameters.Notification`.

Leaving this field empty sets the default value.


## Multistore behavior

As the Add/Edit form does not display any shop association block, **when merchants add a social title, it is added to all shops** - no matter the context selected. So all social titles should be listed here, be it an all shops, a group, or a specific shop context.

:point_right: https://github.com/PrestaShop/prestashop-specs/blob/master/back-office/multistoregeneralspecs.md
