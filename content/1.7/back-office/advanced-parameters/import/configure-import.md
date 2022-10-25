---
title: Import configuration page
weight: 1
---

# CONFIGURE > Advanced Parameters > Import

[Import](static/img/advanced-parameters-import.png)

This UI page and functionality is based on the import actions of the Prestashop application. The listing is specified of all the visible sections in page.

## Top UI section

- **Multishop switcher** - it is an ability to switch the available multistores while beiing on the Import page, and to view the shop homepage by redirection.
- **Breadcrumbs, page title, Recommended modules and Help CTA's** - default Prestashop UI in the top position, helping administrators to improve the navigation.

## Import UI section

- **Blue information notification** - the segment with the useful links to the documentation about import and CSV format. The text is:<br>
_You can read information on import at: https://doc.prestashop.com/display/PS17/Import_ and _Read more about the CSV format at: https://en.wikipedia.org/wiki/Comma-separated_values_.
- **_What do you want to import?_ and Dropdown** - this functionality can be used for choosing the subjects that can be imported to Prestashop. The importing subjects are _Categories_, _Products_, _Combinations_, _Customers_, _Addressess_, _Brands_, _Suppliers_, _Alias_ and _Store contacts_. Only the Categories and Products import is associated with the following yellow type warnings - _Note that the Category import does not support having two categories with the same name._ and _Note that you can have several products with the same reference._ It is makred as required input field.
- **_Select a file to import_ and the import input** - the file input field, where CSV files can be browsed and imported to the Prestashop. There is a short explanation and description about the uploading file types and the text encoding. The message says _Allowed formats: .csv, .xls, .xlsx, .xlst, .ods, .ots <br> Only UTF-8 and ISO 8859-1 encodings are allowed <br>You can also upload your file via FTP to the following directory: {user directory path} ._ The CSV file can be uploaded directly through the FTP into the _/import/_ folder path.  Once the file has been uploaded, the green success UI notification will appear, indicating, that the file has been attached. There will be a pen icon notification, indicating, that the file attached can be re-attached with other file.
- **Choose from history / FTP** - by default this field is disabled, but becomes enabled, once the first CSV file is uploaded through this interface or directly through FTP upload. After the first CSV upload, the history input becomes active with the upload history files. Then the chosen file can be selected, downloaded or deleted from the history list. Once the file has been uploaded, the green success UI notification will appear, indicating, that the file has been attached. There will be a pen icon notification, indicating, that the file attached can be re-attached with other file.
- **Language of the file** - the language must be set manualy for the importing. This dropdown input is set to English by default, or in the other case - to the default Prestashops' installation language. The locale must be installed. The field is displayed as required. 
- **Field separator** - specific alphabetic symbol must be set, in order to separate the CSV data values. This field is displayed as required.
- **Multiple value separator** - if values are very similar-typed and should be separated, there should be a multiple value separator defined. This field is displayed as required.
- **Delete all Categories (also available for Products, Combinations, Customers, Addresses, Brands, Suppliers, Alias) before import** - enable or disable toggle switch button, that configures, if the old import entries will be erased before the new import execution. This button setting is displayed as required. Note, that if this setting is enabled, there will be a pop-up notification from browser, with the confirmation of the deletion.
- **Use product reference as key (for Products and Combinations only)** - this option can be enabled, if there are possible Product ID duplications between the existing and the importing products. Prestashop sets the reference instead of Product ID to the product.
- **Skip thumbnails regeneration (for Categories, Products, Brands, Suppliers and Store contacts only)** - enable or disable toggle switch button, that configures, if the thumbnails regeneration should be executed aligned with the import. This button setting is displayed as required.
- **Force all ID numbers** - enable or disable toggle switch button, that configures, if to keep imported items’ ID number as is already, otherwise, PrestaShop will ignore them and create auto-incremented ID numbers during import process. This button setting is displayed as required.
- **Send notification email** - enable or disable toggle switch button, that configures the email sending, when the import is complete. It can be useful when handling large files, as the import may take some time. This button setting is displayed as required.
- **Next Step CTA** - clicking the CTA button, executes the redirection to the second UI of the import process. The second part process UI is described in the following topic ["Second part of Import process - Match your data UI specification"](#second-part-of-import-process---match-your-data-ui-specification).

## History of uploaded files UI

There is a history list to use already uploaded files. This widget is displayed once the _Choose from history / FT_ button is clicked. The list contains the actual file name with the file extension name, dropdown UI with the properties - use, download or delete the file.

## Available fields UI section

Fields listed, that are included into the import execution process.

### Categories

- ID
- Active 
- Name (required field)
- Parent category
- Root category - A category root is where a category tree can begin. This is used with multistore.
- Description
- Meta title
- Meta keywords
- Meta description
- Rewritten URL
- Image URL
- ID / Name of shop - Ignore this field if you don't use the Multistore tool. If you leave this field empty, the default shop will be used.

### Products

- ID
- Active
- Name (required)
- Categories (x,y,z...)
- Price tax excluded
- Price tax included
- Tax rule ID
- Cost price
- On sale (0/1)
- Discount amount
- Discount percent
- Discount from (yyyy-mm-dd)
- Discount to (yyyy-mm-dd)
- Reference #
- Supplier reference #
- Supplier
- Brand
- EAN13
- UPC
- MPN
- Ecotax
- Width
- Height
- Depth
- Weight
- Delivery time of in-stock products:
- Delivery time of out-of-stock products with allowed orders:
- Quantity
- Minimal quantity
- Low stock level
- Send me an email when the quantity is under this level
- Visibility
- Additional shipping cost
- Unit for base price
- Base price
- Summary
- Description
- Tags (x,y,z...)
- Meta title
- Meta keywords
- Meta description
- Rewritten URL
- Label when in stock
- Label when backorder allowed
- Available for order (0 = No, 1 = Yes)
- Product availability date
- Product creation date
- Show price (0 = No, 1 = Yes)
- Image URLs (x,y,z...)
- Image alt texts (x,y,z...)
- Delete existing images (0 = No, 1 = Yes)
- Feature (Name:Value:Position:Customized)
- Available online only (0 = No, 1 = Yes)
- Condition
- Customizable (0 = No, 1 = Yes)
- Uploadable files (0 = No, 1 = Yes)
- Text fields (0 = No, 1 = Yes)
- Action when out of stock
- Virtual product (0 = No, 1 = Yes)
- File URL
- Number of allowed downloads - Number of days this file can be accessed by customers. If setting configured to zero, it will be configured for unlimited access.
- Expiration date (yyyy-mm-dd)
- Number of days - Number of days this file can be accessed by customers. Set to zero for unlimited access.
- ID / Name of shop - Field can be ignored if Multishop is used. If this field is left empty, the default shop will be used.
- Advanced Stock Management - Enabling Advanced Stock Management on product (0 = No, 1 = Yes).
- Depends on stock - 0 = Using quantity set in product, 1 = Using quantity from warehouse.
- Warehouse - ID of the warehouse to set as storage.
- Accessories (x,y,z...)

### Combinations

- Product ID
- Product reference
- Attribute (Name:Type:Position)(required)
- Value (Value:Position)(required)
- Supplier reference
- Reference
- EAN13
- UPC
- MPN
- Cost price
- Impact on price
- Ecotax
- Quantity
- Minimal quantity
- Low stock level
- Send me an email when the quantity is under this level
- Impact on weight
- Default (0 = No, 1 = Yes)
- Combination availability date
- Choose among product images by position (1,2,3...)
- Image URLs (x,y,z...)
- Image alt texts (x,y,z...)
- ID / Name of shop - Field can be ignored if Multishop is used. If this field is left empty, the default shop will be used.
- Advanced Stock Management - Enabling Advanced Stock Management on product (0 = No, 1 = Yes).
- Depends on stock - 0 = Using quantity set in product, 1 = Using quantity from warehouse.
- Warehouse - ID of the warehouse to set as storage.

### Customers

- ID
- Active (0/1)
- Titles ID (Mr = 1, Ms = 2, else 0)
- Email (required)
- Password (required)
- Birth date (yyyy-mm-dd)
- Last name (required)
- First name (required)
- Newsletter (0/1)
- Partner offers (0/1)
- Registration date (yyyy-mm-dd)
- Groups (x,y,z...)
- Default group ID
- ID / Name of shop - Field can be ignored if Multishop is used. If this field is left empty, the default shop will be used.

### Addresses

- ID
- Alias (required)
- Active (0/1)
- Customer email (required)
- Customer ID
- Brand
- Supplier
- Company
- Last name (required)
- First name (required)
- Address (required)
- Address (2)
- Zip/Postal code (required)
- City (required)
- Country (required)
- State
- Other
- Phone
- Mobile Phone
- VAT number
- Identification number

### Brands

- ID
- Active (0/1)
- Name (required)
- Description
- Short description
- Meta title
- Meta keywords
- Meta description
- Image URL
- ID / Name of group shop - Field can be ignored if Multishop is used. If this field is left empty, the default shop will be used.

### Suppliers

- ID
- Active (0/1)
- Name (required)
- Description
- Short description
- Meta title
- Meta keywords
- Meta description
- Image URL
- ID / Name of group shop - Field can be ignored if Multishop is used. If this field is left empty, the default shop will be used.

### Alias

- ID
- Alias (required)
- Search (required)
- Active

### Store contacts

- ID
- Active (0/1)
- Name
- Address (required)
- Address (2)
- Zip/Postal code
- State
- City (required)
- Country (required)
- Latitude (required)
- Longitude (required)
- Phone
- Fax
- Email address
- Note
- Hours (x,y,z...)
- Image URL
- ID / Name of shop - Field can be ignored if Multishop is used. If this field is left empty, the default shop will be used.

## Download sample csv files UI section

This section helps to orientate, how is the CSV file structure made. Administrators can download the file examples, and to test the import actions and analyse what values and fields are managed by Prestashop. Those CSV files contain random dummy values. The following CSV templates names and the file sizes are:<br>
- **Sample Categories file** - 969 B
- **Sample Products file** - 4.6 KB
- **Sample Combinations file** - 5.8 KB
- **Sample Customers file** - 1.1 KB
- **Sample Addresses file** - 2.6 KB
- **Sample Brands file** - 17.4 KB
- **Sample Suppliers file** - 1.6 KB
- **Sample Aliases file** - 135 B
- **Sample Store Contacts file** - 1.3 KB

## Second part of Import process - Match your data UI specification

[Match your data](static/img/product-import-match-your-data.png)

This redirected interface contains the imported data matching table.

- **Please match each column of your source file to one of the destination columns.** - information message for the matching columns of the import process.
- **Load a data matching configuration** - if there is any data match configuration file saved, it will be displayed in the dropdown list. After choosing the configuration file, it can be Loaded, in order to load the configurational data, or Deleted - removing the configurational data from the saved list.
- **Save your data matching configuration** - alphabetic field where special data matching configuration can be saved for future import processes. By default, the field is empty. It can be saved by clicking CTA Save, after giving a name for the configuration.
- **Rows to skip** - numeric input field, that indicades how many of the first rows of the importing file should be skipped when importing the data. By default the field is set to 1.

## Matching table UI specification

There is a brief table listed, in order to do a final check of the importing elements. Each table column header has a dropdown, with the values of the import type. The purpose of this dropdown is to match the targeted values with the values that were stored in the importing CSV file. Note, that there is a value _Ignore this column_, which prevents the import process of the specific column values from the CSV file. 

After the table matching corrections, there are 2 CTA buttons to proceed further - Cancel - redirects back to Import page, and Import - finalizes the Import stage and initiates the import process.

## Notifications and messages after the import submission

[Notification pop-up](static/img/advanced-parameters-import-success-popup.png)

After the successful importing action, the interface prompts the pop-up element, where there is a success message _Data imported
Look at your listings to make sure it's all there as you wished._, progress bars with the percentage and numeric values of the processes - Validated and Imported - and the CTA button to perform the Close of the pop-up. 

If there is no CSV file attached to the Import submission form, the outcoming message will be prompted _Please upload a file in order to continue._

If the file is too large, the UI will be prompted with the error notification _File is too large_.

If the file is with the incorrect extension, the UI will be prompted with the error notification _The extension of your file should be .csv._

## Multistore functionality

Prestashop multistores maintaining the same configuration in the import page, for all the multistores and shop groups, as administrator switches them. All the data values from the import process in CSV will be directly transferred to the selected multistore independently. 
