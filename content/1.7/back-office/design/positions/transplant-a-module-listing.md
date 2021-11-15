---
title: Transpland a module
weight: 1
---
# Design > Positions > Transplant a module

This functionality can be used for certain positioning of the certain module in different Prestashop UI places. Any Prestashop module can be registered on the placement operator called Hook. Thera are multiple different hook names in Prestashop, and module can be transplanted into the one of the desirable hooks.

There are different UI elements in the Positions > Transplant a module directory:

**Module** - required input element - text dropdown that sets the appropriate transplantable module name from the Prestashop gathered module list. Once the dropdown is clicked, the vertical UI dropdown will be expanded with the following module names, and search text input, where the module can be searched by typing first letters of the module name. By default, the dropdown is substracted and set as placeholder called "Please select a module".

**Transplant to** - required input element - text dropdown with the list of available hooks, that can be used for transplantation. Also, there are already used hooks list, meaning that the hooks are already used and can not be used for a new transplantation of a seleted module. 
