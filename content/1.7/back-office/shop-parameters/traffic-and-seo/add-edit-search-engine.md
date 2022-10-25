---
title: Add new / edit search engine
weight: 1
---
# SHOP PARAMETERS > Traffic & SEO > Add / Edit Search Engine

![Add or Edit Search Engine](static/img/traffic-and-seo-add-edit-search-engine.png)

This UI lets the administrator to edit or add Search Engine value to the list.

## Top UI elements

- **Edit and the editing Server name** - Server name.
- **Help** - a side-bar with the helpful information, how to navigate in this page.
- **Tabs** - navigation tabs for Traffic & SEO menu:
  - SEO & URLs.
  - Search Engines- highlighted tab.
  - Referrers.

## Main table UI elements

- **Refferer** - the title of the table.
- **Server** - required - input, where exact Search Engine associated Server name is defined. It can also be added as a new name. The field has notification errors, once the field is left empty, after submission - _The server field is required._ If the field has invalid characters, the UI will show the error _The server field is invalid._ The field can handle max 34 characters, up to 34 characters are not stored in database.
- **$ GET variable** - required - input, where Search Engine associated Variable name is defined. It can also be added as a new variable name. The field has notification errors, once the field is left empty, after submission - _The getvar field is required._ If the field has invalid characters, the UI will show the error _The getvar field is invalid._ The field can handle max 6 characters, up to 6 characters are not stored in database.
- **Cancel** - discards the editing or adding page, redirects ti the Sesarch Engine listing.
- **Save** - executes the submission of the adding or editing form. If the submission is successful, the UI should be redirected to the Search Engine listing page with green success notification _Successful update._

### Deletion

If the Search Engine entry is bein deleted, there should be a green success notification with the message _Successful deletion_. 

## Multistoring

Once the entry of Search Engine is added or edited in separate Multistore, it affects all the rest of Multistores in the same way. The management will be done in all Multistores simultaneously.
