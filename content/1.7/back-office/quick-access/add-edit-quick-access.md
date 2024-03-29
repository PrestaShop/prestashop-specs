---
title: Add / edit quick access
weight: 1
---

# Add / edit quick access

The following fields/toggles are displayed:

- **Name**: this field is mandatory for the default language. When trying to save and if the field is empty, the following error message is displayed: "The field name is required in _default language_." The following tooltip is displayed: "Forbidden characters: <>;=#{}". This field can be translated: When several languages are installed, a drop-down next to the field is displayed with the default language selected. It allows choosing in which language the field is displayed and customizing it according to the language. Disabled languages are displayed in the drop-down. The character limit is 32, it's not possible to enter more characters in this field. 
 - **URL**: this field is mandatory. The character limit is 128, it's not possible to enter more characters in this field.
The following tooltip is displayed: "If it's a URL that comes from your back office, you MUST remove the security token".
Currently, an incorrect URL can be entered in this field. In this case, there is a redirection to the dashboard when the URL is clicked on the listing. (See issue [#27490](https://github.com/PrestaShop/PrestaShop/issues/27490))

- **Open in new window** This toggle can be enabled or disabled. By default, it is disabled.

## Call to action

- **Save:**
In the case of adding new quick access and if there is no error, the quick access is added and a success message is displayed on [the quick access listing]({{<ref "quick-access-listing.md">}} "quick access listing") : "Creation successful". In the case of editing quick access, the quick access is edited and a success message is displayed on [the quick access listing]({{<ref "quick-access-listing.md">}} "quick access listing") : "Successful update".
- **Cancel:**
The quick access is not added/edited and [the quick access listing]({{<ref "quick-access-listing.md">}} "quick access listing") is displayed.
