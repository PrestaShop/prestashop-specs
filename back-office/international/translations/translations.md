# Translations

#### Conceptual vocabulary

- **Wordings:** original texts found throughout the software. Although these messages are written in English, they are actually only tokens to be translated into any language, including English variations (eg. British, American).
- **Translations:** wordings translated to a given language.
- **Translation domain:** named logic group of wordings. Any given wording is attached to one and only one translation domain. Two identical wordings attached to two different translation domains are considered as two different wordings.
- Translation catalogue: A collection of translation domains containing translations for a given language, stored physically in a support like files or on a database.
- **Default catalogue:** The master translation catalogue that contains the wordings but not its translations. It's [included in the GitHub project](https://github.com/PrestaShop/PrestaShop/tree/1.7.6.0/app/Resources/translations/default).

## Modify translations section

This section allows the user to modify all translations used in PrestaShop.

In order to modify translations, the user must first choose which translation type they want to edit, then the language they want to edit it for (eg. French).

The translation types are as follows:

- Back office translations
- Front office translations
- Installed modules translations
- Email translations
- Other translations

Once you click on the "Modify" button, you go to the translation interface.

### Particular cases

- When the user chooses "Front office translations", a list of all the installed themes except "classic" + a special item called "Core translations" is displayed as well.
- When the user chooses "Installed modules translations", a list of all the installed modules is displayed as well.
- When the user chooses "Email translations", a list containing "Subject" and "Body" is displayed as well.
  - If the user chooses "Body", a list of all the installed themes + "Core" is displayed as well.
  - This type sends the user to the legacy translation interface instead of the one described below.

## Translation interface

This interface displays two columns. In the left, there's a tree of translation domains according to the translation type the user chose before. 

The tree is composed by separating translation domain parts using dots. Eg:

```
Admin
├── Actions
├── AdvParameters
│   ├── Feature
│   ├── Help
│   └── Notification
└── Global
```

The tree above represents the following translation domains:

- Admin.Actions
- Admin.AdvParameters.Feature
- Admin.AdvParameters.Help
- Admin.AdvParameters.Notification
- Admin.Global

Only the leaves of this tree are clickable. On the right, the list of  wordings belonging to the currently selected domain are shown, each followed by a text field containing its translation to the selected language.

The user can edit translations by filling out the fields, and save them.

On the top of the page, there's a search box. When the user searches for a wording, the list is filtered, meaning that wordings not matching the search expression are no longer shown on the list and domains containing no matching wording are grayed out.

### Translation sources & storage

This section covers where wordings are sourced from and where translations are stored to according to the translation type chosen.

#### Generalities

Usually and unless specified otherwise:

- Wordings are sourced from XLF files stored somewhere, one file per translation domain.
- User-edited translations are stored in the database

#### Back office translations

Wordings are sourced from the Core's _default catalogue_, which is stored as physical XLF files (one per translation domain) in `app/Resources/translations/default`. This catalogue is to be filtered by keeping only the translation domains whose name starts with **"Admin"**.

Translations are retrieved from two sources: 

1. The core: XLF translation files for the chosen language, stored in `app/Resources/translations/{locale_code}`, one per domain.
2. The database: if translations were customized previously through this interface.

If the same wording is translated in both core files and database, the database translation is shown.

#### Front office translations

This translation type has two different subcases:

**i. If the user chooses "Core translations".**

The behavior is exactly like "back office translations", only that translation domains are filtered by domains starting with **"Shop"** instead.

**ii. If the user chooses a theme.**

In this case, wordings are sourced by analyzing all the theme's files. Since this process is slow, the result of this analysis is stored as XLF files in local filesystem cache. If the cache is found, then wordings are read from there. The user can refresh this cache by clicking on the "Find new wordings" button at the top of the page.

Translations are sourced from XLF files within the theme in its `translations/{locale_code}` directory, one per domain. These files may or may not be present.

User-edited translations are stored in database. To avoid collisions, theme translations must be kept associated to the theme they belong. If a theme redefines a Core translation (ie. same domain, same wording), then the redefined translation should only be used when the FO is using that theme (eg. in case of multishop with different themes for each shop, each theme should use the its own translation even if they both use the same given wording/domain pair). Redefined core translations should only be saved if they're different than the ones defined when not in the theme's context.

#### Installed module translations

Note: modules have to opt-in for this feature (see [documentation](https://devdocs.prestashop.com/1.7/modules/creation/module-translation/new-system/#translating-your-module)).

Wordings are pulled from a sequence of sources:

First, the Core's _default catalogue_, which is stored as physical XLF files (one per translation domain) in `app/Resources/translations/default`. This catalogue is to be filtered by keeping only the translation domains whose name starts with **"Modules.Nameofthemodule"**.

> Note: this is the case of native modules which have their catalogue integrated in the core

If no file is found, then wordings are sourced by analyzing all the module's files. Since this process is slow, the result of this analysis is stored as XLF files in local filesystem cache. If the cache is found, then wordings are read from there. The user can refresh this cache by clicking on the "Find new wordings" button at the top of the page.

Translations are retrieved from a list of sources:

1. The core: XLF translation files for the chosen language, stored in `app/Resources/translations/{locale_code}`, one per domain.
2. The module: XLF translations files for the chosen language, stored within the module in the `translations/{locale_code}` directory, one per domain.
3. The module's legacy files: PHP translation files for the chosen language, stored within the module in the `translations/` directory, one per language code.
4. The database: if translations were customized previously through this interface.

If the module uses Core translations, they are not shown on this interface.

If the same wording is translated in the core, the module files and the database, the database translation is shown.

#### Email translations (subject)

The behavior is exactly like "back office translations", but using only the domain called **"Emails.Subject"**.

#### Email translations (body)

The behavior is exactly like "back office translations", but using only the domain called **"Emails.Body"**.

After saving the translations, the email templates must be regenerated for the translated language.

#### Other translations

The behavior is exactly like "back office translations", but using only the domain called **"messages"**.


## Workflow

Each source mentioned in the previous parts represents a level in the translation workflow:

1. the default catalog is the translation basis;
2. it is overwritten by the translation files when downloaded through a localization pack or this interface ('Add / Update a language' section);
3. it is overwritten by the database if the translation has been customized, still through this interface ('Modify translations' section).

It works the same for the modules that have their own translation files:

1. the default catalog is the translation basis;
2. it is overwritten by the translation files when downloaded through a localization pack or this interface ('Add / Update a language' section);
3. it is overwritten by the module's translation files, cf _1.7.8_ issue [#14968](https://github.com/PrestaShop/PrestaShop/issues/14968).
4. it is overwritten by the database if the translation has been customized, still through this interface ('Modify translations' section).


## Export translations section

This feature allows the user to export translations in a given language. The user is given a list of options to choose what kind of translations they want to export:

- **PrestaShop translations** 
  When chosen, the following checkboxes appear below this option:
  - Back Office
  - Front Office
  - Email
  - Other
- **Theme translations**
  When chosen, a select box containing the installed themes appears below.
- **Installed modules translations**
  When chosen, a select box containing the installed modules appears below.

<img src="../../../img/back-office/international/translations/export-ps.png" alt="PrestaShop translations" style="zoom:50%;" />

<img src="../../../img/back-office/international/translations/export-theme.png" alt="PrestaShop translations" style="zoom:50%;" />

<img src="../../../img/back-office/international/translations/export-module.png" alt="PrestaShop translations" style="zoom:50%;" />

When the user clicks on "Export", a zip file is generated and downloaded. 

### The exported package

The generated zip contains exported translation domains, stored as XLF files (one per domain), each one containing of all the domain's wordings and their translation to the target language.

**Note:** If a given wording is not translated, then the original wording should be used as translation in the exported file.

The domains that are included in the export package depend on the combination of options chosen in the form, as described below.

#### Export PrestaShop translations

Each translation type roughly matches the translation sources described in the "Translation sources & storage" section above:

- **Back office:** Translations are sourced in the same way as specified in "Back office translations".
- **Front office:** Translations are sourced in the same way as specified in "Front office - Core translations".
- **Email:** Translations are sourced in the same way as specified in "Email translations" (subject & body)
- **Other:** Translations are sourced in the same way as specified in "Other translations".

The exported package should include all XLF files stored under a language directory, like so:

```
fr-FR
├── AdminActions.fr-FR.xlf
├── AdminAdvparametersFeature.fr-FR.xlf
├── AdminAdvparametersHelp.fr-FR.xlf
└── ...
```

#### Export Theme translations

Translations are sourced in the same way as specified in "Front office - theme".

**Note:** this export may include core translation domains if they are used by the theme's files. However, only the wordings used by the theme are to be included in the exported file.

The exported package should include all XLF files stored under a language directory, like so:

```
fr-FR
├── ShopMytheme.fr-FR.xlf
├── ShopNavigation.fr-FR.xlf
├── ShopNotificationsError.fr-FR.xlf
└── ...
```

#### Export Installed module translations

Translations are sourced in the same way as specified in "Installed module translations".

**Note:** this export may include core translation domains if they are used by the module's files. However, only the wordings used by the module are to be included in the exported file.

The exported package should include all XLF files stored under a language directory, like so:

```
fr-FR
├── ModulesymoduleAdmin.fr-FR.xlf
├── ModuleMymoduleShop.fr-FR.xlf
├── ShopNotificationsError.fr-FR.xlf
└── ...
```

### XLF file name convention

Exported XLF files should respect the following file name convention:

```
<DOMAIN_NAME>.<IETF_LTAG>.xlf
```

Where:

- **DOMAIN_NAME:** Translation domain name, without dots. Example for "Admin.Advparameters.Feature":  "AdminAdvparametersFeature"
- **IETF_LTAG:** IETF language tag. Example for Mexican Spanish: "es-MX"

Composed example:

```
AdminAdvparametersFeature.es-MX.xlf
```
