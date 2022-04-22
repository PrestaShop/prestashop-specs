---
title: View group
weight: 1
---

In this page 3 separate blocks are shown:

## Group information

Displays the group section, below that:

 - Discount: displays the discount number in percentages.
 - Price display method: displays if the VAT is included or excluded.
 - Show prices: displays id the prices is shown or not.

## Current category discount

Displays the discounts possible for this group, if there are no discount will show: "None".

### Settings wheel

1) Refresh list

After clicking on it, the page is reloaded. Sorts and searches are kept.

2) Show SQL query

After clicking on it, the SQL query is displayed in a modal. The SQL query takes into account filters and sorts that have been done.

There are two buttons:

- Close: After clicking on it, the modal is closed
- Export to SQL Manager: After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

3) Export to SQL Manager

After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager


## Members of this customer group

Limited to the first 100 customers. Please use filters to narrow your search.

## Columns 

The page displays the groups list with the following columns:

1) ID

It's possible to sort by id asc or desc and search by id.

2) Social title

It's possible to sort by social title asc or desc and search by social title.

3) First name

It's possible to sort by first name asc or desc and search by first name.

4) Last name

It's possible to sort by last name asc or desc and search by last name.

5) Email address

It's possible to sort by email address asc or desc and search by email address.

6) Date of birth

It's possible to sort by date of birth asc or desc and search by selecting the "From" and "To" date in the tabs.

7) Registration date

It's possible to sort by date of registration  asc or desc and search by selecting the "From" and "To" date in the tabs.

8) Enabled

Shows if the group is enabled or not.

7) Actions

**Edit.** The user can edit a group as often as necessary, when pressed redirects to the [specs of the edit customer]({{<ref "edit-customer.md">}} "Edit customer") 

## Bulk actions

Bulk actions can only be used on custom created customers, when they are created, only then bulk actions will appear.

Clicking on the _Bulk actions_ button allows users to perform bulk actions for selected customers (using the checkboxes). A user can:

- Select all/Unselect all: this button will select/unselect all the checkboxes at the beginning of each row of the listing.
- Delete selected: This button will delete the selected customers. 
After clicking on "Delete selected", a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?" (See issue [#14462](https://github.com/PrestaShop/PrestaShop/issues/14462)). The action can be canceled by clicking on the cross or on the cancel button.
After clicking on "Delete" button, the selected customers are deleted, a successful message is displayed "The selection has been successfully deleted.".

### Call to action

 - Back to list, when pressed redirects to the [specs of the view groups]({{<ref "view-groups.md">}} "view groups") 
