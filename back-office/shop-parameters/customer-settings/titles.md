# **SPECIFICATIONS - CUSTOMERS SETTINGS > TITLES PAGE**


_As a merchant, I want to be able to define my customers._

## Listing

Table options:

- Add new<br>
- Refresh list<br>
- Show SQL query<br>
- Export to SQL manager<br>

checkbox
ID
Social title
Gender
Image

Search
Edit / Delete

## Add/Edit form

Clicking 'Add new social title' and editing an existing social title redirects to a form.

**Social title.** Required field to **create or modify a social title**. Input is limited to 20 characters, otherwise an error notification is displayed: `Your entry in field %fieldname% (language %languagename%) exceeds max length %charsnumber% chars (incl. HTML tags).` in `Admin.Notifications.Error`.

If the input contains specific characters (<>;=#{}_), an error notification is displayed: `Invalid characters:` in `Admin.Global`.

Merchants can localize the label according to the store's available languages.

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

