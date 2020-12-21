# **SPECIFICATIONS - CUSTOMERS SETTINGS > GROUPS PAGE**


_As a merchant, I want to be able to group my customers._

## Information notification

By default, a blue information notification is displayed on the top of the page:

PrestaShop has three default customer groups:<br>
**Visitor** - All persons without a customer account or customers that are not logged in.<br>
**Guest** - All persons who placed an order through Guest Checkout.<br>
**Customer** - All persons who created an account on this site.

Clicking on the close icon in the top right-hand corner disables this notification for the time spent on this page. If the user goes to another page and back to this one, the notification is displayed again.


## Groups listing

As usual, four tables options are displayed on the top-right hand corner as icons: 

- Add new<br>
- Refresh list<br>
- Show SQL query<br>
- Export to SQL manager<br>

By default, the table is divided into the following columns:

- ID<br>
- Group name<br>
- Discount (%)<br>
- Members<br>
- Show prices<br>
- Creation date<br>

To allow users to narrow down their search, searching and/or sorting options are available according to the columns:

Input searching fields are available for ID, Group name, Discount (%), Members
Drop-down with 2 selectable options (Yes, No) is available for Show prices column
Date pickers (From and to) are available for Creation date column
Sorting ASC & DESC are available for ID, Group name, Discount (%), Members and Creation date columns

At the beginning of each line is a checkbox while, at the end of each line, 3 actions can be done: _Edit_, _View_, and _Delete_. The main action is _Edit_. The _View_ action can be performed by clicking on the line.
Checkboxes play with the 'Bulk actions' selector that allows either to 'Select all', 'Unselect all', or 'Delete selected'.

PrestaShop's 3 default groups cannot be deleted so they have no checkbox nor _Delete_ actions.


## Default groups options

Users can select which group designates the 3 following customers profiles:

**Visitors group.** By default, it is 'Visitor' but merchants can use the dropdown selector to choose any group. A tooltip is available: `The group defined for your un-identified visitors.` in `Admin.Shopparameters.Help`.

**Guests group.** By default, it is 'Guest' but merchants can use the dropdown selector to choose any group. A tooltip is available: `The group defined for your identified guest customers (used in guest checkout).` in `Admin.Shopparameters.Help`.

**Customers group.** By default, it is 'Customer' but merchants can use the dropdown selector to choose any group. A tooltip is available: `The group defined for your identified registered customers.` in `Admin.Shopparameters.Help`.

Users should click 'Save' to update their default groups' settings. If all settings are properly saved, then a successful message is displayed: `The settings have been successfully updated.` in `Admin.Notifications.Success`.

In a specific shop context or in a group context, the options listed above should have [checkboxes](https://github.com/PrestaShop/PrestaShop/issues/19366)
In all shops context, the options listed above should have [specific settings drop-down](https://github.com/PrestaShop/PrestaShop/issues/19318)

Take a look at the specs [here](https://github.com/PrestaShop/prestashop-specs/blob/b912faba2d354ec41851fd37b5c97e89350a3b79/back-office/multistoregeneralspecs.md)
## Add form

Clicking 'Add new group' redirects to a form.

**Name.** Users must **type the name of the customers group**. By default, it is limited to 32 characters. If the merchant tries to save a name exceeding this number, then he should stay on this page and get an error notification right below the field: `This field cannot be longer than %limit% characters (incl. HTML tags).` in `Admin.Notifications.Error`.

A help text is available: `Invalid characters:` in `Admin.Shopparameters.Help`. It applies to the following characters, _<>={}_. If the input contains one of those specific characters, an error notification is displayed: `The %s field is invalid.` in `Admin.Notifications.Error`.

A drop-down next to the field is displayed when there are several languages installed (disabled languages are displayed in the drop-down). It allows choosing in which language the field is displayed and customizing the title according to the customer's language.

**Discount.** With this option, merchants can **set a discount for all group members**. A discount in the context of a customers group is expected to apply to all the store's catalog. A help text is available: `Automatically apply this value as a discount on all products for members of this customer group.` in `Admin.Shopparameters.Help`.

Only numbers can be typed in the field. If the merchant tries to save letters or a negative value, then he should stay on this page and get an error notification right below the field: `The discount value is incorrect (must be a percentage).` in `Admin.Shopparameters.Notification`.

**Price display method.** A drop-down selector allows users to **create a group of customers who can buy products with ('Tax included') or without taxes ('Tax excluded')**. By default, prices are displayed tax included. A help text is available: `How prices are displayed in the order summary for this customer group.` in `Admin.Shopparameters.Help`.

**Show prices.** By default, all **customers can view the prices**. If set to 'No', it activates the catalog mode for this group of customers: they should not be able to get the prices when browsing the front office nor have any shopping cart. It also impacts the customer account on the front office, turning off the 'Order history and details', 'Credit slips', and 'Merchandise returns' pages. A help text is available: `Need to hide prices for all groups? Save time, enable catalog mode in Product Settings instead.` in `Admin.Shopparameters.Help`.

**Shop association.** The shop association block is displayed when the multistore is enabled and if several shops are configured.

:point_right: https://github.com/PrestaShop/prestashop-specs/blob/master/back-office/multistoregeneralspecs.md#shop-association-block


## Edit form

Users can also set per-category and per-module settings. Once the customers group saved, clicking 'Edit' in the groups listing should load the same form with 2 extra options:

### Category discount

Merchants can **set a discount per-category for this given group of customers**. Clicking 'Add a category discount' displays a modal window entitled 'New group category discount' that shows the categories arborescence of the shop, clickable through radio buttons. Only one category can be selected.

Two buttons at the top right-hand corner allow to 'Expand all' or 'Collapse all'. Clicking on 'Expand all' deploys all categories and subcategories and turns this button into 'Collapse all'. Clicking 'Collapse all' displays only the parent category, 'Home' by default.

Only products that have the selected category as their default category should be affected by the discount. The expected behavior of a category discount works as followed: it prevails over any discount a member of this group could benefit from in this category. See notifications below.

An information notification id displayed: `Caution: The discount applied to a category does not stack with the overall reduction but instead replaces it.` in `Admin.Shopparameters.Notification`. Right below is a warning notification displayed: `Only products that have this category as the default category will be affected.` in `Admin.Shopparameters.Notification`.

**Discount (%).** Only numbers can be typed in the field. If the merchant tries to save letters or a negative value, then he should stay on this modal window and get an error notification right below the field: `The discount value is incorrect (must be a percentage).` in `Admin.Shopparameters.Notification`.

Clicking 'Add' saves preferences. It displays the category discount(s) in the 'Edit' form, just below the 'Category discount' field, with the following information: route to the category, discount value, and a 'Delete' button. If a user deletes a discount, the line simply disappears.
Clicking on the close icon or anywhere outside the modal cancels the action.

### Authorized modules

With this setting, **merchants can authorize or prevent members of this group to access and use some of the shop's modules**. A list of all the store's installed modules is displayed with a switch button to enable or disable each module. By default, all modules are enabled.

Two actions are available at the end of the page: _Save_ and _Cancel_. When saving, the user gets redirected to the Shop Parameters > Customer Settings > Groups page with a success notification: 'Successful update.'.


## View form

A summary of the preferences set for a customers group is accessible through the 'View' action or just by clicking on the line in the groups listing. It opens a new page divided into three parts:

### Group information

Merchants can find all settings in this part:

- Name of the group of customers<br>
- Discount<br>
- Price display method<br>
- Show prices


### Current category discount

A warning notification, _None_, is displayed by default if the customers group has no category discount. If there is one or several, it takes the form of a listing displaying the following information:

- Category<br>
- Discount

 
### Members of this customer group

A wording is supposed to explicit how group members are displayed: `Limited to the first 100 customers.` and `Please use filters to narrow your search.` in `Admin.Shopparameters.Feature`.
As usual, four tables options are displayed on the top-right hand corner as icons: 

- Refresh list<br>
- Show SQL query<br>
- Export to SQL manager<br>
By default, the table is divided into the following columns:

- ID<br>
- Social title<br>
- First name<br>
- Last name<br>
- Email address<br>
- Date of birth<br>
- Registration date<br>
- Enabled

To allow users to narrow down their search, searching and/or sorting options are available according to the columns:

Input searching fields are available for ID, Social title, First name, Last name and Email address columns
Date pickers are available (from and to) for Date of birth and Registration date columns
Sorting ASC & DESC are available for ID, Social title, First name, Last name, Email address, Date of birth and registration date columns

At the beginning of each line is a checkbox while, at the end of each line, an 'Edit' button can be clicked, redirecting to the Customer dedicated page in the Customers > Customers section of the back office. Checkboxes play with the 'Bulk actions' selector that allows either to 'Select all', 'Unselect all', 'Enable selection', or 'Disable selection'.

A 'Back to list' button is available at the end of the page for merchants to go back to the Shop Parameters > Customer Settings > Groups page.
