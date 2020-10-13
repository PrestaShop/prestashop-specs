# **SPECIFICATIONS - SEO & URLS PAGE**


## Grid

_MetaGridDefinitionFactory.php_ Default action in the button: Edit Other available actions in the menu: Delete Row action: Edit

Row action does not apply to the ID's checkbox column.


## URLs set up

[TO BE COMPLETED]

**Force update of friendly URL.** At first, this option was only available for products, in the Shop Parameters > Product Settings page but it has been decided to make it available for all URLs. So it is now a SEO & URLs parameter to be found in this dedicated section of the back office, cf. _to do_ issue #[21386](https://github.com/PrestaShop/PrestaShop/issues/21386).

A friendly URL is generated from the page/item name. By default, it is disabled. Enabling this option will **automatically regenerate it every time the merchant modifies it and saves a new name**. As a consequence, it automatically updates the friendly URL column in the 'SEO & URLs' listing of the page.

:pushpin: Example: the merchant edits the name of a product, he/she turns 'Mug the best is yet to come' into 'Mug the best has gone' - sad story, I know.

Case 1, this option stays disabled: the product name has changed but the URL still contains `rewrite=mug-the-best-is-yet-to-come`.</br>
Case 2, this option is enabled: the product name has changed and the URL now contains `rewrite=mug-the-best-has-gone`.
