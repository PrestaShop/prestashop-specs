---
title: Add / Edit Meta Tags Page
weight: 1
---
# **CONFIGURE > SHOP PARAMETERS > TRAFFIC & SEO > ADD / EDIT META TAGS**

![Add or Edit Meta Tags](static/img/SEO_and_URLs_configure.png)

This UI represents the function of editing or adding a new SEO & URL page, which is dedicated to Meta Tags section.

## Top UI section

- **Multishop switcher** - it is an ability to switch the available multistores while being on the current SEO page editing page, and to view the shop Front-Office homepage by redirection.
- **Breadcrumbs, page title, Recommended modules and Help CTA's** - default Prestashop UI in the top position, helping administrators to improve the navigation - to view the current Title of the page, see the level of the navigation.
- **Tabs** - there are 3 tabs in the Traffic & SEO section:
  - **SEO & URLs** - the current opened tab.
  - **Search Engines** 
  - **Referrers**

## Table UI section

- **Meta tags** - table title.
- **Page name** - required field - there is a dropdown selection, of available page names, that can be selected for SEO edition. Once the dropdown is clicked, a box is dropped-down with the list of page names, and the text input field, for searching the desired page name. If there are few letters typed, search will show the appropriate results according to the input. The search result strings are generated from 2 segments divided with the dash "-" character:
  - **Module name**
  - **Page name string**
There is an explanation placeholder _Name of the related page._ right below the input field. By default, the first page name _pdf-invoice_ is automatically selected in this field.
- **Page title** - by default this field is empty. A new page Title can be stored in this text field. The text can be stored in different languages, according to ones that are installed in the webshop. The language can be selected using the **language dropdown**, where all the available languages are listed. This input field has no character limit. There is a small description _Title of this page. Invalid characters: <>={}_ right down the input field, indicating, what this field is used for and what characters should be used.
- **Meta description** - by default this field is empty. A new Meta description can be stored in this text field. The text can be stored in different languages, according to ones that are installed in the webshop. The language can be selected using the **language dropdown**, where all the available languages are listed. This input field has no character limit. There is a small description _A short description of your shop. Invalid characters: <>={}_ right down the input field, indicating, what this field is used for and what characters should be used.
- **Meta keywords** - by default this field is empty. Only a placeholder _Add tag_ is displayed in the input field. New Meta tags can be stored continuously, each separated by typing a single comma "," character or just pressing Enter in the keyboard. The text can be stored in different languages, according to ones that are installed in the webshop. The language can be selected using the **language dropdown**, where all the available languages are listed. This input field has no character limit. There is a small description _List of keywords for search engines. To add tags, click in the field, write something, and then press the "Enter" key. Invalid characters: <>={}_ right down the input field, indicating, what this field is used for and what characters should be used.
- **Rewritten URL** - required field - by default this field is empty. The URL can be changed with a new URL for a specific Page name, so that the URL will be shown as rewritten in the URL path. The text can be stored in different languages, according to ones that are installed in the webshop. The language can be selected using the **language dropdown**, where all the available languages are listed. This input field has no character limit. There is a small description _For instance, "contacts" for http://example.com/shop/contacts to redirect to http://example.com/shop/contact-form.php Only letters and hyphens are allowed._ right down the input field, indicating, what this field is used for and what characters should be used. Once, there is a mistake or invalid character typed in the URL, after the form submission, the user will be notified by the error below the _Rewrite URL_ field - _"{invalid text}" is invalid. - {showing the language, where the error is coming from}_ 
- **Save CTA button** - saves the configuration, that was created. After the page refreshes, there is a success notification _Successful creation._ in top of UI.
- **Cancel ghost CTA button** - quits the configuration page and redirects it to the main SEO and URLs configuration page.
