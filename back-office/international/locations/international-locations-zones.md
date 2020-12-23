# GENERAL SPECS ZONES BACKOFFICE

As a merchant I need to be able to manage the zone, add, edit, and/or delete them.

## WHAT

Thus, in this project we aim at the current and expected behaviours when we add, edit or delete zones.

## WHY

As a merchant, being able to manage zones will help to have my own subregions and manage my countries and shipping behaviours based on them as well.

## SPECIFICATIONS



### ZONES

The _ZONES_ section displays a table of current zones (both enabled and disabled) to the user with the ability to add, edit, and/or delete them.

#### Settings wheel

When clicking on it, three options are displayed:

1) Refresh list

After clicking on it, the page is reloaded. Sorts and searches are keeped.

2) Show SQL query

After clicking on it, the SQL query is displayed in a modal. The SQL query takes into account filters and sorts that have been done.

There are two buttons:

- Close: After clicking on it, the modal is closed
- Export to SQL Manager: After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

3) Export to SQL Manager

After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager
**Check boxes**

By using the _Check boxes_ next to each row of the first column, the user can select the desired 'zones' to apply the 'bulk actions' using the 'Bulk actions' button on the bottom left-handed side of the table.

**ID**

The _ID_ column defines the identification number for each zone from the `_db_prefix_zone` table of the database. If multi-shop feature is enabled, the zones can be assigned to desired shops and this relations will store in `_db_prefix_zone_shop` table of the database. The user can also sort the zones based on their _ID number_ (ascending/descending) using the up/down triangle icons next to the _ID_ on the first (table-header) row.

**Zone**

The _Zone_ column displays the name of the zone. The user can also sort the zones based on their _names_ (ascending/descending) using the up/down triangle icons next to the _Zone_ on the first (table-header) row.

**Enabled**

The _Enabled_ column displays the user if a zone is enabled or disabled on their shop. The user can enable or disable each zone by clicking on the green 'check' icon or the red 'remove' icon on the 'Zone' column without navigationg to the zone 'edit' page.

**Search boxes**

By using the _Search boxes_ on the second row, the user can search the zones based on _ID Number_, _Zone Names_, and/or _Enabled/Disabled Zones_. The search process will start by pressing the 'Enter' button or clicking on the 'Search' button at the end of the second row.
The search will be performed on the `_db_prefix_zone` database table and the result will be sent to the zones controller.

**Action Button**

There is an action button at the end of each row which displays the _Edit_ button by default. Clicking on edit button will navigate the user to the 'Zone' edit page. The _Edit_ action can also be performed by clicking on the line. The second action that can be performed is the _Delete_ one. Clicking on _Delete_ button will remove the zone from shop, `_db_prefix_zone`, and `_db_prefix_zone_shop` databases as well.

After clicking on _Delete_, a modal with title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?" (See issue [#17082](https://github.com/PrestaShop/PrestaShop/issues/17082))

The action can be canceled by clicking on the cross or on the cancel button.

After clicking on "Delete" button, the message is deleted and a successful message is displayed "Successful deletion."

#### Multistore

Only the zones created in the selected store or store group (through the context) are displayed in the list.

For example, let's say I have the following configuration:
- Group 1
  - Shop A
  - Shop B
- Group 2
  - Shop C

If I select group 1 as context, then the zones created in Shop A and Shop B will be displayed.

If I select Shop A as context, then the zones created in Shop A will be displayed.

If I select all shops as context, then the zones created in Shop A, Shop B and Shop C will be displayed.
**Bulk actions**

Clicking on the _Bulk actions_ button on the bottom left-handed side of the table will give the user the ability to perform bulk actions for selected zones (using the check boxes). The user can:
- Select all/Unselect all: This button will select/unselect all check boxes next to each zone row on the table.
- Enable selection/Disable selection: This button will enable/disable the selected zones using the check boxes next to each zone row.
- Delete selected: This button will delete the selected zones using the check boxes next to each row. Clicking on this button will remove the selected zones from shop, `_db_prefix_zone`, and `_db_prefix_zone_shop` tables as well.

### ADD NEW ZONE

Clicking on _Add new zone_ button will redirect the user to the new page which they can add a custom zone.

**Name**

The _Name_ field defines the zone's name for each language. This can be change later using the 'Zones' table on International > Locations > Zones page (back-office/international/international-locations-zones.md).

**Active**

The _Active_ field displays a YES/NO toggle button to define if the new zone should be activated on shop or not. By default, this option is set on YES. This can be change later using the 'Zones' table on International > Locations > Zones page (back-office/international/international-locations-zones.md).

**Cancel**

Clicking on _Cancel_ button will ignor the input fields and return to the International > Locations > Zones page (back-office/international/international-locations-zones.md) without impacting on database.

**Save**

Clicking on _Save_ button will insert the data from 'ZONES' fields into `_db_prefix_zone`, and `_db_prefix_zone_shop` tables and return to International > Locations > Zones page (back-office/international/international-locations-zones.md).

### EDIT ZONE

Clicking on _Edit_ button will redirect the user to the new page which they can edit a zone.

**Name**

The _Name_ field defines the zone's name for each language. The user can modify the name of the zone for each language separately.

**Active**

The _Active_ field displays a YES/NO toggle button to define if the zone should be activated on shop or not. By default, it display the current status of the selected zone.

**Cancel**

Clicking on _Cancel_ button will ignor the input fields and return to the International > Locations > Zones page (back-office/international/international-locations-zones.md) without impacting on database.

**Save**

Clicking on _Save_ button will modify the data from `_db_prefix_zone`, and `_db_prefix_zone_shop` tables for the selected zone and replace them with the new data received from 'ZONES' field and return to International > Locations > Zones page (back-office/international/international-locations-zones.md).

### DELETE ZONE

Clicking on _Delete_ button will `drop` the selected zone from `_db_prefix_zone`, and `_db_prefix_zone_shop` tables by searching and finding it from the zone 'ID' and return to International > Locations > Zones page (back-office/international/international-locations-zones.md). It returns a green successful message if the `drop` process is done well, otherwise it returns a red error containing the error message on the top of the page.
