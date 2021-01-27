## Rules of the displayed vouchers

A voucher is displayed if it follows specific restrictions:

On the table below are listed all the different cases.

| Cases | Code | Highlighted | Group restriction | User restriction | Available in the FO vouchers page? |
|-------|------|-------------|-------------------|-------------------|---------------------------|
| 1     | X    | Yes         | X                 | X                 | Yes                       |
| 2     | X    | X           | X                 | Yes               | Yes                       |
| 3     | Yes  | No          | No                | No                | No                        |
| 4     | No   | No          | Yes               | No                | Yes                       |
| 5     | No   | No          | No                | No                | Yes                       |
| 6     | Yes  | No          | Yes               | No                | No                        |

When there is no voucher for the customer, the page displays: "You do not have any vouchers." 

If the customer has vouchers, it is listed on the table with the following information:
- the voucher's Code if there is any. It leaves a blank if it is a voucher with no code.
- The Description of the voucher. It stands for the name of the cart rule.
- The Quantity available for the customer.
- The voucher's Value.  
It displays the value of the percentage (ex:20%), the amount (ex:50), "free shipping" if the vouchers is a free shipping voucher or the product gift's name ex: T-SHIRT IMPRIMÉ COLIBRI: Size - S)
If the voucher is composed of differents cart rules' actions, it aggregates the values with "+" between them.  
Ex: if the voucher reduced 20 euro tax excluded, add free shipping and give The adventure begins: Dimension - 40x60cm as gift, the Value column displays: "€20.00 VAT excluded + Free shipping + Affiche encadrée The adventure begins: Dimension - 40x60cm"
- Cumulative, if the voucher is not Cumulative, it displays "No" otherwise displays "Yes". 
- Expiration date, displays the expiration date of the voucher.

__Voucher displayed on the Your voucher page.__

![Voucher](https://github.com/PrestaShop/prestashop-specs/blob/master/img/list_vouchers_FO.png)
