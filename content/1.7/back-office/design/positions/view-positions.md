---
title: View positions
weight: 1
---
# IMPROVE > Design > Positions 

This UI of Prestashop application stands for the whole list of Positioning Hooks.

[Positions listing](static/img/design-positions.png)

## UI elements of the filtering in the top

The following elements of this page are:
- **Show All Modules dropdown** - once clicked, the dropdown element appears with the vertical list of all the modules installed in Prestashop. For faster searching capability, there is a search input field right at the top of module list. Typing first letters of the module name will throw search results and appropriate module. By default, the dropdown is set to _All modules_ state.
- **Search for hook** - input text field, that is used for searching available hooks by naming them and writing the beginning of the name phrase. Once there are some letters typed in, the list instantly will respond to the required matching search results.
- **Display non-positionable hooks checkbox** - Checked, its shows all modules that cannot be positioned to a hook. By default, the checkbox is unchecked.

## UI elements of the Positioning Hook listing

- **Enable or Disable toggle switch button and hook name** - Using toggle button to enable or disable the modules  hooked to the hook. By default, the hook toggle button is enabled.
- **Description of the hook** - some of the positioning hooks can have descriptions, and those will be displayed right above the **Enable or Disable toggle switch button and hook name**.
- **Checkbox with the quantity of modules** - this checkbox is bulk-action style functionality that selects or unselects all the modules in the list.
- **Selection UI element** - by default, UI element is hidden, and it is indicated once there are some modules selected from the listing. The UI table contains checkmark icon, title with the naming _Selection_, total amount of selected modules and CTA button _Unhook the selection_. Clicking the CTA button will unhook the selected modules from the selected hook.
- **Checkbox in the item of module listing** - enables the Selection UI element, once it is checkboxed. Also enables the managing the bulk-actions of the modules in listing.
- **Dragging dots indicator** - becomes available, once the mouse cursor is hovering the module listing item. The purpose of this element, is to make the module list draggable, and to manage the arrangement of the listings. While clicked and holded on the list, the element can be dragged to the other arranged position in the list.
- **Icon of the module** - specific icon of the module, helps visualy find the module in the hook.
- **Name of the module** - specific name of the module, helps visualy find the module in the hook.
- **Version of the module** - The version of the module indicated.
- **Description of the module** - specific paragraph of the module, helps visualy find the module in the hook.
- **Arrangement numeric value** - specific numeric value of the module arrangement, helps visualy find the module in the hook.
- **Editing icon** - Opens the transplant a module page with the module preselected. 
- **Three-dot menu** - executes the dropdown element, where the unhooking action can be executed after the clicking on link _Unhook_.

## UI Notifications after submissions

After executing the unhooking action of the selected hook, the success message is prompted instantly:<br>
_The module was successfully removed from the hook._

## Multistoring functionality

Prestashop identifies all positioning hooks from the database, so if there are several shop groups or multistores created, system displays the hook list separately from each multistore. This means, that some of the hooks are listed in Multistore 1 and the other hooks can be listed, disabled or enabled, in Multistore 2.
