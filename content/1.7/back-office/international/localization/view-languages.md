---
title: Languages
weight: 1
---

# Languages

### Multistore

If multistore is enabled, firstly, a message is shown: "Note that this page is available in all shops context only, this is why your context has just switched.".

Below a message is shown: "When you delete a language, all related translations in the database will be deleted.".

## Languages

### Settings wheel

When clicking on the settings wheel, the following options are displayed:

1) Refresh list

After clicking on it, the page is reloaded. Sorts and searches are kept.

2) Show SQL query

After clicking on it, the SQL query is displayed in a modal. The SQL query takes into account filters and sorts that have been done.

3) Export to SQL Manager

After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

There are two buttons:

- Close: After clicking on it, the modal is closed
- Export to SQL Manager: After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

### Bulk actions

Clicking on the _Bulk actions_ button allows performing bulk actions for the selected attributes (using the checkboxes). A user can:

- Enable selection: this button will enable all the selected languages.
- Disable selection: this button will disable all the selected languages.
- Delete selected: This button will delete the selected language. 
After clicking on "Delete selected", a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?" (See issue [#14462](https://github.com/PrestaShop/PrestaShop/issues/14462)). The action can be canceled by clicking on the cross or on the cancel button.
After clicking on "Delete" button, the language will be deleted, a successful message is displayed "The selection has been successfully deleted."

### Collumns

The page displays the language list with the following columns:

1) ID

It's possible to sort by id asc or desc and search by id.

2) Flag

Flag of the language is displayed.

3) Name

It's possible to sort by name asc or desc and search by name. It's possible to press on the language, when pressed will redirect to the [specs of the add/edit language]({{<ref "add-edit-language.md">}} "Add/edit language") 

4) ISO code

It's possible to sort by ISO code asc or desc and search by name.

5) Language code

It's possible to sort by language code asc or desc and search by name.

6) Date format

It's possible to sort by date format asc or desc and search by name.

7) Date format (full)

It's possible to sort by date format (full) asc or desc and search by name.

8) Enabled

Can be sorted by "Yes" or "No".

9) Actions

**Edit.** The language can be edited as often as necessary.

👉 See the [specs of the add/edit language]({{<ref "add-edit-language.md">}} "Add/edit language") 

**Delete.** The language can be deleted by clicking on this button. After clicking on "Delete", a modal with the title "Delete selection" is opened asking to confirm or cancel the action: "Are you sure you want to delete the selected item(s)?"
The action can be canceled by clicking on the cross or on the cancel button.
After clicking on "Delete" button, the language is deleted, a successful message is displayed "Successful deletion."
