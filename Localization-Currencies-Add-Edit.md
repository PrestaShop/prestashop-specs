* * *
# Currency format setting
**Localization > Currencies > Edit/Add Page**

# USER STORY

As a merchant, I want to manage the display of my currencies in the Front Office depending on the language if needed in order to adapt my shop to my clients' visual expectations.

# WHY

We have understood there is a big complexity on the currency display choose when you shop is for B2C or B2B, or when you sell in countries sharing the same symbol currency as in Latin America countries with the pesos. Each merchant has his own currency format problematics, so we allow the merchant to custom the currency format depending on the language of their shops.

The currency format will have now be fully customizable assisted by the CLDR.

Reminder, the CLDR (Common Locale Data Repository) is a database containing the convention of different languages as format date, currencies and more shared by the biggest companies. It will be the main source to provide the best currencies pre-configuration to the merchant.

The merchant doesn’t have to worry about their currencies display anymore but they still can edit if needed. Their shop won’t look suspicious because of a wrong currency displayed. The currency display will adapt itself to every customer.

# SPECIFICATION

The implementation of the CLDR database and the feature to change the currency display in the FO  by language is already done (Here the first part [#10052](https://www.google.com/url?q=https://github.com/PrestaShop/PrestaShop/issues/10052&sa=D&ust=1549966668643000)).

Remaining improvements features of the Page Add Currency and Edit Currency in Page Currencies of Localization Category is the format setting. It allows:

*   To edit currency symbol by language
*   To edit symbol position by language for all the currencies
*   The separating symbol of thousands and decimals is only configured by the CLDR

It’s the second part of the page currency adding and edition. It has the languages list with the currency display according to the language next to it. It will be possible for the merchant to edit the currency format or to reset it by language. By default, the format setting (position and symbol, decimals, separating symbol) is configured by the CLDR.

# OLD SPECIFICATION

*   #10058
*   #11690

# DETAILED SPECIFICATION

## Add a currency

When the page is loaded, the currency symbol on the language list will be displayed with X.

If the merchant selects a currency from the drop list before, it will present the example with the right currency symbol with the CLDR settings (position and symbol, decimals, separating symbol by language).

On the second case for custom currency, the CLDR preconfigure the position and separating symbol by language until the merchant edit the symbol and the decimal. After it, the currency symbol edited will replace the “X”.

A currency symbol position (right, left with or without space) saved for a language will be saved for all the currencies for the selected language.

A wording is provided to explain that the format part changes will be applied for all the currencies.

Format setting on the bottom of the currency form.![image3](images/List_preview_format_currencies.png)

pop-in after the click on edit when no symbol was filled.![image2](images/Popin_edit_format_currency.png)

The merchant can reset the format of a language by clicking on the reset button next to the edit button.

## Edit a currency

All the inputs is full filled by saved data. So when the user edits the format, a pop-in will open in which the user can change the symbol and its position on the price display through a radio button.

![image1](images/image1.png)

The decimals and thousands separating format are defined by the CLDR, so for each language, the radio have an adapted display. The currency symbol in the radio is also displaying the symbol of currency that the user is editing.

# DESIGN

[https://projects.invisionapp.com/d/main#/console/16335086/338742836/preview](https://projects.invisionapp.com/d/main%23/console/16335086/338742836/preview&sa=D&ust=1549966668646000)

## Failing cases

## Error/Warning case:

# ISSUES RELATED

*   #9714
*   #10014
*   #10017
*   #10055
*   #10054
*   #10053
*   #9885
*   #11690

# ACCEPTANCE CRITERIA

To be completed with QA and developers.

Given... [a context],

when... [users does something],

then... [what the user should observe]

* * *
# Currency adding and editing
**Localization > Currencies > Edit/Add Page**

# USER STORY

As a merchant on the Currencies Page in Localization, I want to add a new official currency or a custom one not provided by Prestashop. 

# WHY

The 1.6 had a custom currency creation but was limited to the international needs. Therefore on the 1.7, it was removed to prepare the development of a bigger feature more complete. 

The Unicode CLDR (Common Locale Data Repository) is a database containing the convention of different languages as format date, currencies and more shared by the biggest companies. It will be the main source to provide the best currencies pre-configuration to the merchant. 

**This features allows the merchant to have all the currency (cryptocurrencies, local currencies...) that he needs and responds to every customers expectations.
The merchant just has to find right paiement module adapted to their new currency.**

# SPECIFICATION

The 1rst improvements features of the Page Add Currency and Edit Currency in Page Currencies of Localization Category allow:

 - Add an official new currency with the CLDR or create a custom
   currency. 
 - Edit a currency (this is new in 1.7)

Add/Edit currency inputs:

- Currency name * (mandatory)
- Symbol *  (mandatory)
- ISO code *  (mandatory)
- Decimals
- Exchange rate (1.00 by default)

The Symbol, Currency name, ISO code and Exchange rate are mandatory to save an official currency or a custom one.

# OLD SPECIFICATION 

- #10058
- #11690

# DETAILED SPECIFICATION

## Add a currency

The user can choose from a drop list from our currency database (CDLR) or select the checkbox “Create new” to make a custom currency.

![new currency](img/new_currency.PNG)
      
Choosing a currency from the drop list will fill all the inputs automatically and make the ISO code uneditable.

If the user edits the currency chosen in the drop list just before saving , the currency will be marked as “Edited” on the Currencies Page.

And by checking “Create new”, the user has to fill all the inputs by himself and choose an new unique ISO code.

![add new currency](img/add_new_currency.PNG)

A warning should be display, if the user choose to create his own custom currency and choose an ISO code already existing. The ISO code is an unique value used as the identification of the currency.

Warning wording: “This ISO code already exists. You cannot create two states with the same ISO code.” in Admin/International/Notification”

Ajouter un commentaire en dessous de ISO qu’il s’agit d’une valeure unique

**Edit a currency** 

After clicking on editing one of the currency in the list, the Edit Page is open with all the inputs already filled from the currency selected.

All the following fields can be edited:

- Currency name 
- Currency Symbol 
- ISO code (only for custom currencies)
- Decimals (2 by default)
- Exchange rate (1 by default)

Bellow these fields, a reset button is available to put back the initial content of all the fields. The button is hidden for custom currency.

![edit currency](img/edit_currency.PNG)

## Currencies Page

On the Currencies Page, every edited currency will be mark as “edited” next to their name on the currencies list.

![list currencies](img/list_currency.PNG)

NB: after the migration, the activation exchange rate is on the bottom of the list.

# DESIGN

[https://projects.invisionapp.com/d/main#/console/16335086/338742836/preview](https://projects.invisionapp.com/d/main#/console/16335086/338742836/preview)

# CASES

## Error/Warning case: 

Saving with an ISO code already existing in the database

Exchange rate update for the custom currencies, check if it doesn't apply a default value

# ISSUES RELATED

 - [ ] #9714
 - [ ] #10014
 - [ ] #10017
 - [ ] #10055
 - [ ] #10054
 - [ ] #10053
 - [ ] #9885

# ACCEPTANCE CRITERIA

To be completed with QA and developers.

Given... [a context],

when... [users does something],

then... [what the user should observe]

