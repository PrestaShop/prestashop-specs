# **SPECIFICATIONS -THEME & LOGO > THEME & LOGO PAGE**


_As a merchant, I want to be able to set up my store's look._

**44 \| Design &gt; Theme & Logo &gt; Theme & Logo**

This page refers to the issue: \#10576 The page can have extra sections if I have many themes installed, if I enable multi-store feature if I have languages who needs RTL features or if I have MBO module installed.


## Basic state

### Header

There are 4 button: Add new theme bring to =&gt; Design &gt; Theme & Logo &gt; Add new theme Export current theme =&gt; Generate a zip of the current theme used at the root of theme file Recommended modules =&gt; pop up recommended modules Help =&gt; open the help section on the page \(this section appear on many different pages

### Menu

In the menu there are 3 elements: Theme and logo page \(current page\) And those 2 pages who come from the module Theme customization. IMPROVEMENT to do : If the module is disabled, hide those 2 pages from the menu \(on 1.7.5 it’s hidden\) Configuration of home page Advanced Personnalisation

### Theme preview

This block show preview of the theme and if i click on it, it redirect me to my website

### Choose layouts button

After click on choose layouts button, we end up on a different page: Design &gt; Theme & Logo &gt; Choose layouts

### Logo and favicons

IMPROVEMENT to do : when i import a logo it’s not resized it must be to avoid the breaking of the page

**Header logo.** It should be displayed in the header, on all front office pages. PrestaShop's default theme uses the 'Classic' _my store_ logo. Once the image is saved, by clicking on the _Save_ button at the right bottom of this section, users should be able to have a preview of their logo.

**Mail & invoice logo.** PrestaShop's default theme uses the 'Classic' _my store_ logo. The mail logo should be displayed in emails' header. The invoice logo should be displayed in invoices' header. In both cases, if no mail nor invoice logo image is defined, the header logo (as the main logo image) is used. Once the image is saved, by clicking on the _Save_ button at the right bottom of this section, users should be able to have a preview of their logo.

**Favicons.** By default, the favicon is the PrestaShop logo. A light text is written below, _Use our favicon generator on PrestaShop Marketplace to boost your brand image!_, that redirects to the Addons' favicon generator - English page: https://addons.prestashop.com/en/create-favicon.php. Once the image is saved, by clicking on the _Save_ button at the right bottom of this section, users should be able to have a preview of their logo.

All logo images should be imported via the upload field, with the placeholder _Choose file(s)_ and the CTA _Browse_, all being clickable items opening the user's local files. Available logo images extensions are: .gif, .jpg, .jpeg, .jpe, .png, .svg.


### Visit the theme catalog button

The button “Visit the theme catalog” redirect to this link


## Theme installed

If i import a theme and if i select a shop a section appear on the bottom of the page after hover, a button use this theme appear,on click, the current theme is switched with the one selected and the preview of theme +used change with the theme chosen.

If i don’t select a shop and i select the group of shop this appear instead of the theme section:


## Multistore state

If i activate multi store, multi store section will appear only if i click on a shop\(here: derek ortega or testshop\) or i select the group of shop\(here: default group\) \(except all shops\)

1\) Selection: As said before i selected the shop “Derek Ortega” \(i could also select the group of shop but not “All shops”\) 2\) Multi store section: Multi store section appear on the page Theme & logo, If i click on yes it will check all checkbox of section 4 \(including logo/invoice&email logos/ favicons\) If i click on no, it will uncheck all checkbox of the section 4 and disable the add file button as seen section 5 \(including lbutton of add logo/invoice&email logos/ favicons\)


## Debug mode

3\) Reset to defaults button: The button “reset to defaults” appear next to “choose layouts” button It allows to rest to default all modification made on the page choose layouts


## RTL state

If i have language who support RTL on my store \(like Arabic or Hebrew\) even if it’s not the language selected, This section appear at the bottom of the page :

You can select a theme and generate a RTL stylesheet.

If you have Multi Store + RTL language you have a yes/no button and checkbox next to “theme to adapt” and “generate rtl stylesheet” If you check no on multistore the next to element will be disabled but if you check yes on multistore or if you check the checkbox, elements will be enabled.

## MBO

If MBO module is installed, on the footer this section will appear. Always on the bottom of the page

