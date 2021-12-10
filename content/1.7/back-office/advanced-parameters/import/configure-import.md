---
title: Import configuration page
weight: 1
---

# CONFIGURE > Advanced Parameters > Import

[Product Import](static/img/advanced-parameters-import.png)

This UI page and functionality is based on the product import actions of the Prestashop application. The listing is specified of all the visible sections in page.

## Top UI section

- **Multishop switcher** - it is an ability to switch the available multistores while beiing on the Import page, and to view the shop homepage by redirection.
- **Breadcrumbs, page title, Recommended modules and Help CTA's** - default Prestashop UI in the top position, helping administrators to improve the navigation.

## Import UI section

- **Blue information notification** - the segment with the useful links to the documentation about import and CSV format. The text is:<br>
_You can read information on import at: https://doc.prestashop.com/display/PS17/Import_ and _Read more about the CSV format at: https://en.wikipedia.org/wiki/Comma-separated_values_.
- **_What do you want to import?_ and Dropdown** - this functionality can be used for choosing the subjects that can be imported to Prestashop. The importing subjects are _Categories_, _Products_, _Combinations_, _Customers_, _Addressess_, _Brands_, _Suppliers_, _Alias_ and _Store contacts_. Only the Categories and Products import is associated with the following yellow type warnings - _Note that the Category import does not support having two categories with the same name._ and _Note that you can have several products with the same reference._ It is makred as required input field.
- **_Select a file to import_ and the import input** - the file input field, where CSV files can be browsed and imported to the Prestashop. There is a short explanation and description about the uploading file types and the text encoding. The message says _Allowed formats: .csv, .xls, .xlsx, .xlst, .ods, .ots <br> Only UTF-8 and ISO 8859-1 encodings are allowed <br>You can also upload your file via FTP to the following directory: {user directory path} ._ The CSV file can be uploaded directly through the FTP into the _/import/_ folder path
- **Choose from history / FTP** - by default this field is disabled, but becomes enabled, once the first CSV file is uploaded. After the first CSV upload, the history input becomes active with the upload history files. Then the chosen file can be selected, downloaded or deleted from the history list.
- **Language of the file** - the language must be set manualy for the products importing. This dropdown input is set to English by default, or in the other case - to the default Prestashops' installation language. The locale must be installed. The field is displayed as required. 
- **Field separator** - specific alphabetic symbol must be set, in order to separate the CSV data values. This field is displayed as required.
- **Multiple value separator** - if values are very similar-typed and should be separated, there should be a multiple value separator defined. This field is displayed as required.
- **Delete all categories before import** - enable or disable toggle switch button, that configures, if the old import entries will be erased before the new import execution. This button setting is displayed as required.
- **Skip thumbnails regeneration** - enable or disable toggle switch button, that configures, if the thumbnails regeneration should be executed aligned with the  product import. This button setting is displayed as required.
- **Force all ID numbers** - enable or disable toggle switch button, that configures, if to keep imported items’ ID number as is already, otherwise, PrestaShop will ignore them and create auto-incremented ID numbers during import process. This button setting is displayed as required.
- **Send notification email** - enable or disable toggle switch button, that configures the email sending, when the import is complete. It can be useful when handling large files, as the import may take some time. This button setting is displayed as required.
- **Next Step CTA** - clicking the CTA button, executes the redirection to the second part of the import process.

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
- Name*
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
- Warehouse
- Accessories (x,y,z...)
