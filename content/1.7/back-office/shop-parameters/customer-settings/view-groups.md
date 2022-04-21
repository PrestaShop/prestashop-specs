---
title: Groups
weight: 1
---

### Call to action

 - Add new group, redirects to the [specs of the add new group]({{<ref "add-new-group.md">}} "Add new group) 

Below an explanation is shown: 

    PrestaShop has three default customer groups:
    Visitor - All persons without a customer account or customers that are not logged in.
    Guest - All persons who placed an order through Guest Checkout.
    Customer - All persons who created an account on this site.

## Settings wheel

When clicking on the settings wheel, the following options are displayed:

1. Add new

When pressed redirects to the [specs of the add new group]({{<ref "add-new-group.md">}} "Add new group) 

2. Refresh list

After clicking on it, the page is reloaded. Sorts and searches are kept.

3. Show SQL query

After clicking on it, the SQL query is displayed in a modal. The SQL query takes into account filters and sorts that have been done.

There are two buttons:

Close: After clicking on it, the modal is closed
Export to SQL Manager: After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

4. Export to SQL Manager

After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

# Groups 

## Columns 

The page displays the groups list with the following columns:

1) ID

It's possible to sort by id asc or desc and search by id.

2) Group name

It's possible to sort by group name asc or desc and search by group name.

3) Discount (%)

It's possible to sort by discount (%) asc or desc and search by discount (%).

4) Members

It's possible to sort by members asc or desc and search by members.

5) Show prices

Can be searched by selecting "Yes" or "No" from the drop-down search. 

6) Creation date

It's possible to sort by date asc or desc and search by selecting the "From" and "To" date in the tabs.

7) Actions

**Edit.** The user can edit a group as often as necessary, when pressed redirects to the [specs of the edit group]({{<ref "edit-group.md">}} "Edit group") 

**View.** The user can view the group, when pressed redirects to the [specs of the view group]({{<ref "view-group.md">}} "view group") 

**Delete.** (default groups can't be deleted, only custom created ones) A group can be deleted by clicking this button. After clicking on Delete, a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?" The action can be canceled by clicking on the cross or on the cancel button. After clicking on "Delete" button, the group is deleted, a successful message is displayed "Successful deletion."

## Bulk actions

Bulk actions can only be used on custom created groups, when they are created, only then bulk actions will appear.

Clicking on the _Bulk actions_ button allows users to perform bulk actions for selected attribute values (using the checkboxes). A user can:

- Select all/Unselect all: this button will select/unselect all the checkboxes at the beginning of each row of the listing.
- Delete selected: This button will delete the selected groups. 
After clicking on "Delete selected", a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?" (See issue [#14462](https://github.com/PrestaShop/PrestaShop/issues/14462)). The action can be canceled by clicking on the cross or on the cancel button.
After clicking on "Delete" button, the selected groups are deleted, a successful message is displayed "The selection has been successfully deleted.".

# Default groups options

3 Drop-down fields are presented in this section:

1) Visitors group

The possible selections in this drop-down:

 - Visitor (selected by default)
 - Guest
 - Customer
 - All the custom added ones below

Has a help text below the field: "The group defined for your un-identified visitors."

2) Guests group

The possible selections in this drop-down:

 - Visitor (selected by default)
 - Guest
 - Customer
 - All the custom added ones below

Has a help text below the field: "The group defined for your identified guest customers (used in guest checkout)."

3) Customers group

The possible selections in this drop-down:

 - Visitor (selected by default)
 - Guest
 - Customer
 - All the custom added ones below

Has a help text below the field: "The group defined for your identified registered customers.".

### Call to action

 - Save, when pressed displays the following message: "The settings have been successfully updated."
