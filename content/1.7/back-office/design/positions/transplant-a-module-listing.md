---
title: Transplant a module
weight: 1
---
# IMPROVE > Design > Positions > Transplant a module

[Transplant a module](static/img/design-positions-transplant.png)

This functionality can be used for certain positioning of the certain module in different Prestashop UI places. Any Prestashop module can be registered on the placement operator called Hook. Thera are multiple different hook names in Prestashop, and module can be transplanted into the one of the desirable hooks.

## UI elements listing

There are different UI elements in the Positions > Transplant a module directory:

**Module** - required input element - text dropdown that sets the appropriate transplantable module name from the Prestashop gathered module list. Once the dropdown is clicked, the vertical UI dropdown will be expanded with the following module names, and search text input, where the module can be searched by typing first letters of the module name. By default, if none of the modules selected, the dropdown is substracted and set as placeholder called _Please select a module_.

**Transplant to** - required input element - text dropdown with the list of available hooks, that can be used for transplantation. Some modules contains detailed hook description in brackets, explaining where is the exact hook position in Prestashop application. Also, there are already used hooks list, meaning that the hooks are already managed and can not be used for a new transplantation of a seleted module. By default, if none of the modules above selected, this field is set to disabled, with the placeholder defined as _Select a module above before choosing from available hooks_. 

**Exceptions** - there can be a list of possible exceptions, that can be used to exclude the certain files, that could not be displayed in a desired module. There is a description before the search input:

_Please specify the files for which you do not want the module to be displayed.
Please input each filename, separated by a comma (",").
You can also click the filename in the list below, and even make a multiple selection by keeping the Ctrl key pressed while clicking, or choose a whole range of filename by keeping the Shift key pressed while clicking._

After the description, there is a **Search input**, where specific files can be set from the list below. The search input can be filled up by typing the appropriate file name. There is a possibility to type multiple files to exclude, this can be done by separating each filenames by comma. By default, the input field is signed with placeholder "E.g. address, addresses, attachment".

After the **Search input**, there is a wide vertical text selection box, where all the available filenames are listed. The available files list is generated in alphabetical way, so it can be easily accessed. The multiple filenames selections can be maintained using keyboard buttons. One or multiple filenames can be clicked by a mouse click while holding Ctrl button together and holding Cmd button together for MacOS system. 

## Notifications and messages in the UI

Once the form is filled and submitted with the empty input fields, the error message is prompted:<br>
_This module cannot be loaded._

Once the form is filled and submitted correctly, the success message is prompted:<br>
_The module transplanted successfully to the hook._

If the Exception value is typed incorrectly in form, the error is prompted:<br>
_No valid value for field exceptions has been defined._

If Exception value is typed with correct symbols, but is not found in the exceptions list, the error message is prompted:<br>
_This module has already been transplanted to this hook. _

If module, is already transplanted into certain hook, the error message is prompted:<br>
_This module has already been transplanted to this hook._

## Multistore

Multistore funcionality can be separately adjusted to the other shops and shop groups also. It means, that transplanting the hook while being on 1st multistore will affect the shop separately from the other shops.


