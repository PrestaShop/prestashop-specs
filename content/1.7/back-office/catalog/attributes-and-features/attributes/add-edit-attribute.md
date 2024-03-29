---
title: Add / edit attribute
weight: 1
---
# Add / edit attribute

![Attribute1](/img/attribute1.png)


While adding or editing an attribute, the following fields / toggles / parameters are displayed:

1) Name (mandatory field)

This field is mandatory. If the save button is pressed and if this field is empty for the default language, the following error message is displayed: "The field name is required at least in _default language_".
When the label is hovered, a tooltip is displayed: "Your internal name for this attribute. Invalid characters: <>;=#{}"
This field can be translated: When several languages are installed, a drop-down next to the field is displayed. It allows choosing in which language the field is displayed and customizing it according to the language. Disabled languages are displayed in the drop-down. 

2) Public name (mandatory field)

This field is mandatory. If the save button is pressed and if this field is empty for the default language, the following error message is displayed: "The field public_name is required at least in _default language_".
When the label is hovered, a tooltip is displayed: "The public name for this attribute, displayed to the customers. Invalid characters: <>;=#{}"
This field can be translated: When several languages are installed, a drop-down next to the field is displayed. It allows choosing in which language the field is displayed and customizing it according to the language. Disabled languages are displayed in the drop-down. 

3) URL 

This field is displayed only when the facetedsearch module is enabled. It allows searching for the value more precisely. 
This field can be translated: When several languages are installed, a drop-down next to the field is displayed. It allows choosing in which language the field is displayed and customizing it according to the language. Disabled languages are displayed in the drop-down. 
There is a help-text under this field: "When the Faceted Search module is enabled, you can get more detailed URLs by choosing the word that best represents this attribute. By default, PrestaShop uses the attribute's name, but you can change that setting using this field."
When the label is hovered, a tooltip is displayed: "Invalid characters: <>;=#{}_".

4) Meta title 

This field is displayed only when the facetedsearch module is enabled. It allows searching for the value more precisely. 
This field can be translated: When several languages are installed, a drop-down next to the field is displayed. It allows choosing in which language the field is displayed and customizing it according to the language. Disabled languages are displayed in the drop-down. 
There is a help-text under this field: "When the Faceted Search module is enabled, you can get more detailed page titles by choosing the word that best represents this attribute. By default, PrestaShop uses the attribute's name, but you can change that setting using this field."

5) Indexable (toggle)

This toggle is displayed only when the facetedsearch module is enabled. It allows to enable or disable the use of the generated URL for faceted search. By default, this toggle is enabled. There is a help-text under the toggle: "Use this attribute in URL generated by the Faceted Search module."

6) Attribute type (mandatory drop-down list)

This drop-down is mandatory. 
When the label is hovered, a tooltip is displayed: "The way the attribute's values will be presented to the customers in the product's page."
The following options are displayed in the drop-down: 
 - Drop-down list
 - Radio buttons
 - Color or texture

7) Shop association 
 
The shop association block is displayed when the multistore is enabled and if several shops are configured.

👉 See the [specs of the shop association block]({{<ref "../../../multistoregeneralspecs.md#shop-association-block">}} "Shop association block") 

 ## Call to action 
 There are 2 buttons at the bottom of this page: 
 - Cancel: The attribute is not added/edited and the listing is displayed
 - Save: In the case of adding an attribute, the attribute is added and a success message is displayed on the listing: "Successful creation.". In the case of editing an attribute, the attribute is edited and a success message is displayed on the listing: "Successful update.".
