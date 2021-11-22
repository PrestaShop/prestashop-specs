---
title: View positions
weight: 1
---
# IMPROVE > Design > Positions 

This UI of Prestashop application stands for the whole list of Positioning Hooks.

[Positions listing](static/img/design-positions.png)

The following elements of this page are:
- **Show All Modules dropdown** - once clicked, the dropdown element appears with the vertical list of all the modules installed in Prestashop. For faster searching capability, there is a search input field right at the top of module list. Typing first letters of the module name will throw search results and appropriate module. By default, the dropdown is set to _All modules_ state.
- **Search for hook** - input text field, that is used for searching available hooks by naming them and writing the beginning of the name phrase. Once there are some letters typed in, the list instantly will respond to the required matching search results.
- **Display non-positionable hooks checkbox** - this checkbox enables while checkboxed, and disables while uncheckboxed the availability to view the hooks, that can not be positional in the certain module. By default, the checkbox is not marked.
- **Enable or Disable toggle switch button and hook name** - there is a function, using toggle button to enable or disable the positioning hook for certain modules, that are wraped in the hook. By default, the hook toggle button is enabled.
- **Checkbox with the quantity of modules** - this checkbox is bulk-action style functionality that selects or unselects all the modules in the list.
- **Selection UI element** - by default, UI element is hidden, and it is prompted once there are some modules selected from the listing. The UI table contains checkmark icon, title with the naming _Selection_, total amount of selected modules and CTA button _Unhook the selection_. Clicking the CTA button will unhook the selected modules from the selected hook.
