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

- Group name<br>
- Discount (%)<br>
- Members<br>
- Show prices<br>
- Creation date<br>

Searching fields are available for users to narrow down their search. 

At the beginning of each line is a checkbox while, at the end of each line, 3 actions can be selected: _Edit_, _View_, and _Delete_. Checkboxes play with the 'Bulk actions' selector that allows either to 'Select all', 'Unselect all', or 'Delete selected'.

PrestaShop's 3 default groups cannot be deleted so they have no checkbox nor _Delete_ actions.


## Default groups options

Users can select which group designates the 3 following customers profiles:

**Visitors group.** By default, it is 'Visitor' but merchants can use the dropdown selector to choose any group. A tooltip is available: `The group defined for your un-identified visitors.` in `Admin.Shopparameters.Help`.

**Guests group.** By default, it is 'Guest' but merchants can use the dropdown selector to choose any group. A tooltip is available: `The group defined for your identified guest customers (used in guest checkout).` in `Admin.Shopparameters.Help`.

**Customers group.** By default, it is 'Customer' but merchants can use the dropdown selector to choose any group. A tooltip is available: `The group defined for your identified registered customers.` in `Admin.Shopparameters.Help`.

Users should click 'Save' to update their default groups' settings.


## Add form

Clicking 'Add new group' redirects to a form.

[TO BE COMPLETED]


## Edit form

[TO BE COMPLETED]
