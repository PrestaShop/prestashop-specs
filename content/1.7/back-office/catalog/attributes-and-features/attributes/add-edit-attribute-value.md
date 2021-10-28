---
title: Add / edit attribute value
weight: 1
---
# Add / edit attribute value

While adding or editing an attribute value, the following fields / toggles / parameters are displayed:

1) Attribute group

This drop-down lists all the attributes and is mandatory. In the case of multistore, it lists only the attributes associated with the store(s) selected as context. 
When the label is hovered, a tooltip is displayed: "Choose the attribute group for this value."

2) Value 

This field is mandatory and can be translated: When several languages are installed, a drop-down next to the field is displayed. It allows choosing in which language the field is displayed and customizing it according to the language. Disabled languages are displayed in the drop-down.
If the save button is pressed and if this field is empty for the default language, the following error message is displayed: "The field value is required at least in _default language_"
When the label is hovered, a tooltip is displayed: "Invalid characters: <>;=#{}".

3) URL 

This field is displayed only when the facetedsearch module is enabled. It allows searching for the value more precisely. 
This field can be translated: When several languages are installed, a drop-down next to the field is displayed. It allows choosing in which language the field is displayed and customizing it according to the language. Disabled languages are displayed in the drop-down. 
There is a help-text under this field: "When the Faceted Search module is enabled, you can get more detailed URLs by choosing the word that best represents this attribute. By default, PrestaShop uses the attribute's name, but you can change that setting using this field."
When the label is hovered, a tooltip is displayed: "Invalid characters: <>;=#{}_".

4) Meta title 

This field is displayed only when the facetedsearch module is enabled. It allows searching for the value more precisely. 
This field can be translated: When several languages are installed, a drop-down next to the field is displayed. It allows choosing in which language the field is displayed and customizing it according to the language. Disabled languages are displayed in the drop-down. 
There is a help-text under this field: "When the Faceted Search module is enabled, you can get more detailed page titles by choosing the word that best represents this attribute. By default, PrestaShop uses the attribute's name, but you can change that setting using this field."

5) Shop association 
 
The shop association block is displayed when the multistore is enabled and if several shops are configured.

:point_right: See the [specs of the shop association block](../../../multistoregeneralspecs.md#shop-association-block)

6) Color

**This color picker is displayed only if the selected attribute is of type color or texture.**
When the label is hovered, a tooltip is displayed: "Choose a color with the color picker, or enter an HTML color (e.g. "lightblue", "#CC6600"".
The color can be filled in the input or selected with the color picker.
If the color filled in the field is incorrect, while clicking on save, an error message is displayed: "The color field is invalid."

7) Texture

**This field is displayed only if the selected attribute is of type color or texture.**
It allows uploading a texture/picture. When clicking on the "Add file" button, a pop-up is opened and allows to choose a file to upload. Only the following formats are allowed to be uploaded: .gif, .jpg, .png.
If a texture is uploaded and if the color is filled, the texture is used and not the color.
When the label is hovered, a tooltip is displayed: "Upload an image file containing the color texture from your computer. This will override the HTML color.".
When trying to upload an incorrect format file and trying to save, shows the following message: "Image format not recognized, allowed formats are: .gif, .jpg, .png"

8) Current texture

Current texture when no texture displays "None", but when a texture is added, it then displays the texture which is added, also a delete button below the texture appears.
If pressing "delete", the texture disappears, a message appears saying: "The image was successfully deleted."

## Call to action

3 call to actions are displayed at the bottom of this page:

- Save then add another value:
In the case of adding an attribute value, the attribute value is added and the add form is opened and a success message is displayed: "Successful creation.". In the case of editing an attribute value, the attribute value is edited and the add form is opened and a success message is displayed: "Successful update."

- Save:
In the case of adding an attribute value, the attribute value is added and a success message is displayed on the attribute values listing: "Successful creation.". In the case of editing an attribute value, the attribute value is edited and a success message is displayed on the attribute values listing: "Successful update.".
👉 When pressed, redirects back to the features values page, shows the message: "Successful creation."
