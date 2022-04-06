---
title: Add edit zone
weight: 1
---

# Add edit zone

The following fields/toggles are displayed:

 - **Name**: this field is mandatory. When trying to save and if the field is empty, the following error message appears: "Please fillout this field". If more than 64 chars are filled the following error message appears "This field cannot be longer than 64 characters.". When trying to save and if the field is invalid, the following error message is displayed " "the entered name" is invalid." A help text is displayed: "Zone name (e.g. Africa, West Coast, Neighboring Countries)." 
 
- **Active** This toggle can be enabled or disabled. By default, it is enabled. A help text is displayed: "Allow or disallow shipping to this zone."

## Call to action

- **Save:**
In the case of adding a new zone and if there is no error, the zone is added and a success message is displayed on [zones listing]({{<ref "zones-listing.md">}} "zone listing") : "Creation successful". In the case of editing a zone, the zone is edited and a success message is displayed on [zones listing]({{<ref "zones-listing.md">}} "zone listing") : "Successful update".
- **Cancel:**
The zone is not added/edited and [zones listing]({{<ref "zones-listing.md">}} "zones listing") is displayed.

## Multistore

The shop association block is displayed when the multistore is enabled and if several shops are configured.

👉 See the [specs of the shop association block]({{<ref "../../../multistoregeneralspecs.md#shop-association-block">}} "Shop association block") 
