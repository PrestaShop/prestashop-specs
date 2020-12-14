# SPECIFICATIONS - ECOTAX

## WHAT IS THE ECOTAX

The ecotax is a contribution in France to finance the collect, the recycling and the depollution of a piece of furniture or used electrical and electronic equipment. 
The ecotax is not a tax per se, but a fixed mandatory contribution (the actual term is "eco-participation") that must be paid by the customer.
Then it’s donated by the seller to a collection agency. 

The amount of the ecotax is fixed and does not depend on the product price.
The ecotax is subject to VAT.

## WHERE IS THE ECOTAX IN PRESTASHOP

The ecotax can be toggled in the "Tax Options" section from the _International > Taxes_ page.
Once enabled, a new drop-down is displayed containing all the tax rules, allowing the merchant to choose the VAT rate that will be applied on the ecotax.
If the ecotax is enabled, then a field is displayed in the Back Office's "add / edit product" page, so that the merchant can input the amount of included ecotax in the product's price.
However, ecotax only applies for physical products, so it should never be displayed for virtual products. 

If the ecotax is filled in the back-office for a product, then it's displayed in the front-office product page under the product price: “Including €X.XX for ecotax”. 

## HOW DOES THE ECOTAX WORK

The ecotax is already included in the product's price, tax excluded. The ecotax field in the product page exists exclusively to provide information about the amount of ecotax that is already included in the product's price.

The ecotax is provided for information purposes and does not affect the final price because it is already included in it.

The ecotax is subject to VAT at the same rate applicable to the product.

The ecotax amount has to be paid in full by the customer and can never be reduced. The ecotax (and its VAT amount if applicable) must also be displayed and paid in the case of a gift product.

## Example

Product price tax excl with ecotax: 10€

VAT 20% = 2€

Product price tax incl with ecotax: 12€

> As you can see, the ecotax is already included in the price, so it has no impact in the calculation.

Ecotax tax excl: 2€

Ecotax VAT 20% = 0,40€

Ecotax tax incl: 2,40€


VAT paid by the merchant: 2 + 0,40 = 2,40€

Ecotax paid by the merchant: 2€

Earnings for the merchant: 12 - (2,40 + 2) = 7,60€

### If there is a discount, it should be applied on the product price ecotax excluded

Product price tax incl with ecotax: 12€

Ecotax tax incl: 2,40€

Product price tax incl without ecotax: 9,60€

Price with 30% discount : 9,60 x (100-30) / 100 = 6,72€

Price after reduction + ecotax tax incl = 6,72€ + 2,40 = 9,12€
