---
title: Add or Edit Order Messages
weight: 1
---

## SELL > CUSTOMER SERVICE > Order Messages > Add / Edit Order Message

![Order Messages editing UI](static/img/add-edit-order-message.png)

This UI shows the Order Message adding or editing form.

## Top UI section of Adding or Editing message

- **Multishop switcher** - it is an ability to switch the available multistores while being on the current Order messages editing page, and to view the shop Front-Office homepage by redirection.
- **Breadcrumbs, page title, Recommended modules and Help CTA's** - default Prestashop UI in the top position, helping administrators to improve the navigation - to view the current Title of the page, see the level of the navigation. Page title is **Add new**, if adding new entry or **Edit:{name of the editing message}**, if editing the existing entry.

There is a blue information message with _i_ icon, displaying the text _Note that this feature is available in all shops context only. It will be added to all your stores._

## Order messages section

- **Name** - required input field, where desired Name would be set for the specific Order message. The value should be 128 characters maximum. If the input text is too long typed in default Prestashop language, there will be an error with exclamation mark icon - _This value is too long. It should have 128 characters or less. - Language: English (English)_. If the input is saved empty, there will be a message _The field name is required at least in your default language._ prompted. If there is the same Name in the list already, the error message with the exclamation mark will be prompted - _An order message with the same name already exists in English (English)._
- **Language dropdown for Name** - if there is a need to input the Name on specific language, dropdown with the appropriate language inicials can be selected. Languages in the list will be shown only those, that are installed in webshop.
- **Message** - required input field, where desired Message text will be set for the specific Order message. The value should be 1200 characters maximum. If the input text is too long typed in default Prestashop language, there will be an error with exclamation mark icon - _This value is too long. It should have 1200 characters or less. - Language: English (English)_. If the input is saved empty, there will be a message _The field name is required at least in your default language._ prompted.
- **Language dropdown for Message** - if there is a need to input the Message on specific language, dropdown with the appropriate language inicials can be selected. Languages in the list will be shown only those, that are installed in webshop.
- **Save CTA button** - saves the form with the successful green notification message _Successful update._ or _Successful creation._
- **Cancel CTA button** - redirects back to the Order messages listing page.

## Multistores functionality

The eiditing form is displayed the same for all the available Multistores in webshop, switching the Multistores shows the same editing form UI.
