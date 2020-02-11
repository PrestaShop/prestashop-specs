# SPECIFICATIONS - THEME CLASSIC - CART VOUCHERS SECTION

The cart voucher section contains the list of the cart rules that are applied to the current cart.
## positionning
The cart vouchers section exists inside the cart summary block, just between cart totals and cart promo code:

![Cart details](../../.gitbook/assets/themes/front/classic-theme/cart-summary-section-in-cart-page.png)


## The display
The cart vouchers section is a list.

![Cart Vouchers List](../../.gitbook/assets/themes/front/classic-theme/cart-vouchers-section-in-cart-page.png)

Each line of the list contains 2 parts: the name and the discount.
#### The name of the cart rule
The string of the cart rule name as entered in BO in Cart Rule>Information tab.
#### The discount of the cart rule
This discount can either be:
* The string "Free Shipping" if the cart rule has no actions other than free shipping.
* The amount of reduction in all other cases (when cart rule has actions other than free shipping).
This amount is a string.
The formatting is the concatenation of 3 parts: Minus sign, to the amount number and the currency. (e.g -3.75$)

