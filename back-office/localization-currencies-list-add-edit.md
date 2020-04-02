# Localization-Currencies-List-Add-Edit

## Currency format setting

**Localization &gt; Currencies &gt; Edit/Add Page**

## USER STORY

As a merchant, I want to manage the display of my currencies in the Front Office depending on the language if needed in order to adapt my shop to my clients' visual expectations.

## WHY

We have understood there is a big complexity on the currency display choose when you shop is for B2C or B2B, or when you sell in countries sharing the same symbol currency as in Latin America countries with the pesos. Each merchant has his own currency format problematics, so we allow the merchant to custom the currency format depending on the language of their shops.

The currency format will have now be fully customizable assisted by the CLDR.

Reminder, the CLDR \(Common Locale Data Repository\) is a database containing the convention of different languages as format date, currencies and more shared by the biggest companies. It will be the main source to provide the best currencies pre-configuration to the merchant.

The merchant doesn’t have to worry about their currencies display anymore but they still can edit if needed. Their shop won’t look suspicious because of a wrong currency displayed. The currency display will adapt itself to every customer.

## SPECIFICATION

The implementation of the CLDR database and the feature to change the currency display in the FO by language is already done \(Here the first part [\#10052](https://www.google.com/url?q=https://github.com/PrestaShop/PrestaShop/issues/10052&sa=D&ust=1549966668643000)\).

Remaining improvements features of the Page Add Currency and Edit Currency in Page Currencies of Localization Category is the format setting. It allows:

* To edit currency symbol by language
* To edit symbol position by language for all the currencies
* The separating symbol of thousands and decimals is only configured by the CLDR

It’s the second part of the page currency adding and edition. It has the languages list with the currency display according to the language next to it. It will be possible for the merchant to edit the currency format or to reset it by language. By default, the format setting \(position and symbol, decimals, separating symbol\) is configured by the CLDR.

## OLD SPECIFICATION

* **10058**
* **11690**

## DETAILED SPECIFICATION

### Grid

_CurrencyGridDefinitionFactory.php_ Default action in the button: Edit Other available actions in the menu: Delete Row action: Edit

Row action does not apply to columns with enable/disable actions.

### Add a currency

When the page is loaded, the currency symbol on the language list will be displayed with X.

If the merchant selects a currency from the drop list before, it will present the example with the right currency symbol with the CLDR settings \(position and symbol, decimals, separating symbol by language\).

On the second case for custom currency, the CLDR preconfigure the position and separating symbol by language until the merchant edit the symbol and the decimal. After it, the currency symbol edited will replace the “X”.

A currency symbol position \(right, left with or without space\) saved for a language will be saved for all the currencies for the selected language.

A wording is provided to explain that the format part changes will be applied for all the currencies.

_Format setting on the bottom of the currency form._ ![Format setting on the bottom of the currency form](../.gitbook/assets/list_preview_format_currencies.png)

_Pop-in after the click on edit when no symbol was filled._ ![Pop-in after the click on edit when no symbol was filled](../.gitbook/assets/popin_edit_format_currency_with_no_symbol.PNG)

The merchant can reset the format of a language by clicking on the reset button next to the edit button.

The decimals and thousands separating format are defined by the CLDR, so for each language, the radio have an adapted the display. Any updates on the symbol input will update the 4 propositions on the radio button.

By clicking "Apply" on the popin, it will save the format currency and updates the language format table with the new format.

### Edit a currency

All the inputs are full filled with saved data from the currency to be edited. So when the user edits the format, a pop-in will open in which the user can change the currency format. The symbol and its position on the price display can be edited with a text input for the symbol and through a radio button with 4 propositions:

* just in front of the amount, X999.99
* in front with a space between the symbol and the amount, X 999.99
* just after the amount, 999.99X
* after the amount with a space between them, 999.99 X

_Pop-in full filled with the yen currency data._ ![Pop-in full filled with the yen currency data](../.gitbook/assets/edit_popin_edit_format_currency.png)

The decimals and thousands separating format are defined by the CLDR, so for each language, the radio has an adapted the display. Any updates on the symbol input will update the 4 propositions on the radio button.

By clicking "Apply" on the popin, it will save the format currency and updates the language format table with the new format.

## DESIGN

[https://projects.invisionapp.com/share/SAPYJZCCR6K\#/screens](https://projects.invisionapp.com/share/SAPYJZCCR6K#/screens)

## ISSUES RELATED

* [ ] **9714**
* [ ] **10014**
* [ ] **10017**
* [ ] **10055**
* [ ] **10054**
* [ ] **10053**
* [ ] **9885**
* [ ] **11690**

## Currency adding, editing and deleting

**Localization &gt; Currencies &gt; Edit/Add Page**

## USER STORY

As a merchant on the Currencies Page in Localization, I want to add a new official currency or a custom one not provided by Prestashop.

## WHY

The 1.6 had a custom currency creation but was limited to the international needs. Therefore on the 1.7, it was removed to prepare the development of a bigger feature more complete.

The Unicode CLDR \(Common Locale Data Repository\) is a database containing the convention of different languages as format date, currencies and more shared by the biggest companies. It will be the main source to provide the best currencies pre-configuration to the merchant.

**These features allows the merchant to have all the currency \(cryptocurrencies, local currencies...\) that he needs and responds to every customer's expectation. The merchant just has to find right paiement module adapted to their new currency.**

## SPECIFICATION

The 1rst improvements features of the Page Add Currency and Edit Currency in Page Currencies of Localization Category allow:

* Add an official new currency from the CLDR or create a custom currency.
* Edit a currency \(this is new in 1.7\)

Add/Edit currency inputs:

* Currency name \* \(mandatory\)
* Symbol \*  \(mandatory\)
* ISO code \*  \(mandatory\)
* Decimals
* Exchange rate \(1.00 by default if it is an alternative currency\)

The Symbol, Currency name, ISO code and Exchange rate are mandatory to save an official currency or a custom one.

## OLD SPECIFICATION

* **10058**
* **11690**

## DETAILED SPECIFICATION

### Add a currency

To add an currency, the user can choose from a drop list from our currency database \(CDLR\) or select the checkbox “Create new” to make a custom currency.

![new currency](../.gitbook/assets/new_currency.PNG)

Choosing a currency from the drop list will fill all the inputs automatically and make the ISO and the numeric iso code uneditable and greyed.

If the user edits the currency chosen in the drop list just before saving, the currency will be marked as “Edited” on the Currencies Page.\(cf see the Currencies Page section\)

When creating a new currency, the iso numeric code field is hidden and it enables the code iso field if it was disabled. The user has to fill all the inputs by himself and choose a new unique ISO code.

If the user selects a currency from droplist but clicks on the new currency checkbox, the fields remain pre-filled but the droplist displays "--" instead of the selected currency.

![add new currency](../.gitbook/assets/add_new_currency.PNG)

A warning is displayed, if the user choose to create his own currency by clicking on the checkbox and choose an already existing ISO code. The ISO code is an unique value used as the identification of the currency. The message warns the user that if he wants to use the currency \(displays the currency name from the ISO code\) from the ISO that he must select it from the droplist and if he still wants to create his own currency that he must find ISO code that is not used by any currencies.

Warning wording: “Oops... it looks like this ISO code already exists. If you are :

* trying to create a new currency, you must type a different ISO code
* trying to modify the %currency% currency, just go back to the list and edit it”

  \(Admin.International.Notification\)

Clicking on the save button, it saves the new currency and redirects to Currencies List. The cancel button redirects to Currencies List but doesn't save the currency.

### Edit a currency

After clicking on editing one of the currency in the list, the Edit Page is open with all the inputs already filled from the currency selected.

All the following fields can be edited:

* Currency name
* Currency Symbol
* ISO code \(only for custom currencies\)
* Decimals \(2 by default \)
* Exchange rate \(1 by default if it is an alternative currency\)

Bellow the language listing, a reset button is available to put back the initial content of all the fields. The merchant has to accept the modal confirmation to restore the configuration. The button is hidden for custom currency.

Clicking on the save button, it saves the new currency and redirects to Currencies List. The cancel button redirects to Currencies List but does'nt save the currency.

![edit currency](../.gitbook/assets/edit_currency.png)

### Currencies Page

On the Currencies Page, every edited currency will be marked as “edited” next to their name on the currencies list.

![list currencies](../.gitbook/assets/list_currency.PNG)

When an alternative currency is added the icon user from material design next to the name to symbolize this currency was created by the merchant.


NB: after the migration, the activation exchange rate is at the bottom of the list.

### Delete a currency

If I delete a currency, the currency should be hidden from the BO's currency list but it must be kept to display the orders made in the deleted currency. If no orders have been made with the currency, the currency can be definitely deleted.

## DESIGN

[https://invis.io/SAPYJZCCR6K\#/338742836\_Edit\_Currency](https://invis.io/SAPYJZCCR6K#/338742836_Edit_Currency)

## CASES

### Error/Warning case:

Saving with an ISO code already existing in the database

Exchange rate update for the custom currencies, check if it doesn't apply a default value

## ISSUES RELATED

* [ ] **9714**
* [ ] **10014**
* [ ] **10017**
* [ ] **10055**
* [ ] **10054**
* [ ] **10053**
* [ ] **9885**

## ACCEPTANCE CRITERIA

To be completed with QA and developers.

Given... \[a context\],

when... \[users does something\],

then... \[what the user should observe\]

