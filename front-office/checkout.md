# **SPECIFICATIONS - CHECKOUT**


[TO BE COMPLETED]

## Payment step

If the store has only one payment method available, this payment method should be selected by default.


## Shipping step

If the merchant has enabled the 'Offer recycled packaging' option in the Shop Parameters > Order Settings section of the back office, a checkbox should be displayed in the _Shipping Method_ block of the checkout: `I would like to receive my order in recycled packaging.` in `Shop.Theme.Checkout`. If checked, this information must be added to the final summary, the order confirmation, and the 'order_conf' and 'new_order' emails.


## Final summary

If the merchant has enabled the 'Final summary' and 'Offer recycled packaging' options in the Shop Parameters > Order Settings section of the back office, and if the customer has decided to receive his/her order in recycled packaging, it should be mentioned in the _Shipping Method_ block of the final summary: `Recycled packaging` (localized in `Shop.Theme.Checkout`). Cf. _to do_ #[16348](https://github.com/PrestaShop/PrestaShop/issues/16348) issue.


## Order confirmation

If the merchant has enabled the 'Offer recycled packaging' option in the Shop Parameters > Order Settings section of the back office, and if the customer has decided to receive his/her order in recycled packaging, it should be mentioned on the order confirmation page in the front office: `Recycled packaging` (localized in `Shop.Theme.Checkout`) in the _Order Details_ section, just below the shipping method line. Cf. _to do_ #[16348](https://github.com/PrestaShop/PrestaShop/issues/16348) issue.
