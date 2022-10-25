# **SPECIFICATIONS - SPLIT ORDER FEATURE**


## Shop general settings

Carrier #1: PrestaShop - restricted to 5x5x5 cm + 5 kg + available for all zones
Carrier #2: PrestonShop - restricted to 10x10x10 cm + 10 kg + available for the Africa zone

Option for out of range behaviors: carrier disabled


## Use case with different carriers

Product #1: Hummingbird cushion - 4x4x4 cm + 4 kg + associated only with _PrestonShop_ carrier in the product page
Product #2: Brown bear cushion - 4x4x4 cm + 4 kg + associated only with _PrestaShop_ carrier in the product page

Go to the front office, add the two products to the cart. Proceed to checkout.

= the order is split


## Use case with different zones

cf. https://github.com/PrestaShop/PrestaShop/issues/15304

Product #1: Hummingbird cushion - associated with all carriers (_PrestaShop_ & _PrestonShop_) in the product page
Product #2: Brown bear cushion - associated only with _PrestonShop_ carrier in the product page

Go to the front office, add the two products to the cart.
Set France as the delivery country and proceed to checkout.

= the order is split


## Use case with out of stock products

Deny backorders in the Shop Parameters > Product settings page.

Product #1: Hummingbird cushion - 300 units available
Product #2: Brown bear cushion - 300 unit available

Order 333 units of product #1.

= no split order

Order 1 unit of product #1 (stock is -333) and 10 units of product #2.

= no split order
