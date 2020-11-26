# GENERAL SPECS ZONES BACKOFFICE

As a merchant I need to be able to manage the zone, add, edit, and/or delete them.

## WHAT

Thus, in this project we aim at the current and expected behaviours when we add, edit or delete zones.

## WHY

As a merchant, being able to manage zones will help to have my own subregions and manage my countries and shipping behaviours based on them as well.

## SPECIFICATIONS



### ZONES

The _ZONES_ section displays a table of current zones (both enabled and disabled) to the user with the ability to add, edit, and/or delete them.

**Check boxes**

By using the _Check boxes_ next to each row of the first column, the user can select the desired 'zones' to apply the 'bulk actions' using the 'Bulk actions' button on the bottom left-handed side of the table.

**ID**

The _ID_ column defines the identification number for each zone from the `_db_prefix_zone` table of the database. If multi-shop feature is enabled, the zones can be assigned to desired shops and this relations will store in `_db_prefix_zone_shop` table of the database. The user can also sort the zones based on their _ID number_ (ascending/descending) using the up/down triangle icons next to the _ID_ on the first (table-header) row.

**Zone**

The _Zone_ column displays the name of the zone. The user can also sort the zones based on their _names_ (ascending/descending) using the up/down triangle icons next to the _Zone_ on the first (table-header) row.

**Enabled**

The _Enabled_ column displays the user if a zone is enabled or disabled on their shop. The user can enable or disable each zone by clicking on the green 'check' icon or the red 'remove' icon on the 'Zone' column without navigationg to the zone 'edit' page.

**Search boxes**

By using the _Search boxes_ on the second row, the user can search and sort the zones based on _ID Number_, _Zone Names_, and/or _Enabled/Disabled Zones_. The search process will start by pressing the 'Enter' button or clicking on the 'Search' button at the end of the second row.
The search will be performed on the `_db_prefix_zone` database table and the result will be sent to the zones controller.

**Action Button**

There is an action button at the end of each row which displays the _Edit_ button by default. Clicking on edit button will navigate the user to the 'Zone' edit page. There is a button with 'carret-down' icon next to the 'Edit' button that displays the _Delete_ button on click. Clicking on _Delete_ button will remove the zone from shop, `_db_prefix_zone`, and `_db_prefix_zone_shop` databases as well.

**Bulk actions**

Clicking on the _Bulk actions_ button on the bottom left-handed side of the table will give the user the ability to perform bulk actions for selected zones (using the check boxes). The user can:
- Select all/Unselect all: This button will select/unselect all check boxes next to each zone row on the table.
- Enable selection/Disable selection: This button will enable/disable the selected zones using the check boxes next to each zone row.
- Delete selected: This button will delete the selected zones using the check boxes next to each row. Clicking on this button will remove the selected zones from shop, `_db_prefix_zone`, and `_db_prefix_zone_shop` databases as well.
