---
title: Catalog Price Rules creation
weight: 1
---
## Specifications

The first step of this document is to detail global and generic expected behaviour for this page, both on back office and front office. The second step gives a specific definition of scenarios and behaviours involving conditions groups. The last step details specs for cases with several rules.

## Creating Price rules for catalogs

First Catalog price rule can be created by clicking on the blue button with plus on the top-right of the page - (+) Add new catalog price rule. Also, as an alternative, it can be clicked on smaller plus (+) icon in the top-right of the Catalog Price rules table.

The second user interface will lead to Catalog Price rules creation page.

![Catalog Price Rules](/static/img/catalog-price-rules.png)

## Price Rules input fields and meanings

 **Name** - text input - mandatory - the name of the Catalog price rule
 **Shop** - this field is hidden unless there is Multistore functionality enabled on Prestashop.<br>
 **Currency** - it is a dropdown selection, for choosing what countries should be involved into pricing rules. For example, it can be set that only USA customers could see the price rules for Prestahop catalogs, then it should be selected as the USD currency here. By default, the Currency dropdown will be set for "All currencies". If the default option is set, Prestashop will execute reductions orientated by the Default Prestashop currency that is set in configuration settings. <br>
 **Country** - specific country can be set for the Catalog price rules. For example, it can be set that only German customers could see the certain price rules, Germany should be set in the dropdown. By default, the Country dropdown will be set for "All countries".<br>
**Group** - Prestashop provides specific customer groups. By default, there are Visitor, Guest and Customer. Appropriate group can be selected, in order to show the price rules for that certain group of visitors in website. By default, the Group dropdown will be set for "All countries".<br>
**From quantity** - it is mandatory field, meaning that the input field is required, for further steps. It can be typed, for example, 50 and it will mean, that all the catalog items with quantity up to 50 will get the certain catalog discount rule. From the Product Page view, the From quantity is expressed by Volume table near the Add to Cart CTA button. After navigating to the Cart page and adding quantity 50 to the item, the rule will be executed and the discount will be set for the Cart. By default, the Form quantity field is seto to value 1.<br>
**Price (tax excl.)** - it is a field that can be typed, for example, 10 and it will mean, that all the catalog items with the prices up to 10 will get the certain catalog discount rule. By default, the field is gray and disabled, however if the "Leave initial price (checkbox)" is disabled, the field will be instantly enabled.<br>
**Leave initial price (checkobox)** - for certain needs, it can be checkboxed, users would get the catalog price rules from the initial original item price. By default, the checkbox is enabled.<br>
**From** - just simple date and time selection picker widged. Select the year, month, day and the time from when the catalog price rule will be executed and displayed for Prestashop items. By default the field is empty.<br>
**To** - just simple date and time selection picker widged. Select the year, month, day and the time the price rule existance should be exceeded for Prestashop items. By default the field is empty.<br>
**Reduction type** - certain discount affection will be expressed as Percentage or Amount in the Prestashop items. It can be selected by one of the types in the dropdown. By default, the field is set to "Amount".<br>
**Reduction with or without taxes** - it can be chosen, if the prices should be discounted from the prices with taxes of without taxes. So as a result, it may be different deductions from the catalog prices. By default, the field is set to "Tax excluded".<br>
**Reduction** - it is an Amount or Percentage type of input here. It can be set as certain digits here for the catalog prices to be shown. By default, the input digital value is zero.

It can be canceller by clicking **Cancel** your form and discard your changes, by clicking CANCEL button on the left, or you may just **Save** the new catalog price rule by clicking the SAVE button on the right.

### Adding several rules

Currently when several rules apply to the same product, it seems that there are different behaviours. We need to clarify them.

Ex 1 :

The test rule has the following conditions :

To the related products, a 10€ discount is automatically applied.

The test2 rule applies a 5€ discount on all product when quantity &gt;=2.

When I select a product which complies both rules, this happens in Front office :

The save 10€ label is automatically displayed, which is the expected behaviour. The discount grid is displayed on the product page according to “Rule 2” which is the expected behaviour.

## Condition Groups
There are also additional and extended Catalog price rules combinations that can be specified for your Catalog items.

![Condition Group](/static/img/condition-group.png)

**Those conditions are related to :**
- Category : the merchant can choose to apply discount only on products which belong to the chosen category. By default, the dropdown category is set to Home.
- Brand : the merchant can choose to apply a discount on a specific brand only. By default, the dropdown is set to default Prestashop brand Graphic Corner.
- Supplier : same as above. By default, the dropdown is set to Accessories supplier.
- Attributes : same as above, the merchant can choose to apply a discount on a specific attribute. To do so, he needs to choose the attribute type and a specific value. By default the dropdown value is set to Color and the next dropdown is set to Grey.
- Features : same as above.
- Value : displays the certain value expression, that can be chosen above in the form. By default, the first dropdown is set to Composition value, the next dropdown is set to Ceramic.
- AND : is an operator, which indicates that the contitional group elements are working together
- OR : is an operator, which indicates the combining fact between two conditional groups

It is possible to add several sets of conditions in the same group, but also to create different condition groups in the same rule.

1) When adding different criteria to the same group, this works as an AND relation. 
Ex : Category Women and Brand Nike - the rule will only apply to product which belong to the women category and whose brand is Nike.

2) When adding different condition groups to the same rule, this work as an OR relation between all groups. 
Ex : Group 1 : Category Men and Group 2 : Brand Adidas - the rule will apply to all products which belong to the men category or to the Adidas brand.

There does not seem to be any restriction in the number of condition groups which can be created in the same rule.

Note : currently, it is possible to create a condition group even though no criterion is selected, which does not make sense. We should disable the ‘Add a new condition group’ CTA when the current group is empty.

### Impact on Front office

- Discount applied on quantity = 1

If the merchant chooses to create a discount from 1 product, then the discount label is automatically displayed on the product and on the product page.

Ex :

Specific case : when a product already has an active specific price, the catalog price rule is not applied to it.

- Discount applied on quantity> 1

When a discount is applied only after buying more than 1 quantity of the same product, there should be no label displayed on the product. Instead, there should be a grid available on the product page detailing the discount conditions.

Ex :

When adding at least the minimum expected quantity, a discount label is added to the product page, and in the cart.

Ex:

- Discount applied on the initial price

If the initial price has been modified, it modifies the final price on each product to be paid by the user.

Adding one or several condition groups Once the basic conditions have been defined, it is possible to add one or several other condition groups to refine the rule. When clicking on “Add a new condition group”, a new block “Condition Group 1” is added above.


**Results :** If I add only one product, I will get a 10€ discount. If I add 2 products, then the discount will be of 5€ for each product. There is no combination of both rules.

Ex 2 : Same example but with 2 rules with the same minimum quantity. After a few tests, it seems that only the oldest rule will apply to the product. Other rules will have no effect on the product. Shouldn’t this be explained in the rules listing ?

## Multistore 
There is an option to configure different Catalog Rules for different separate Prestashop shops. It can be set by navigating to Catalog Cart Rules > Create new rule or Edit existing > Shop dropdown field. Selecting the appropriate shop and saving the settings will enable showing the Catalog Price rules for specific shop.

The settings and input fields can be separately managed by Multistore functionality in Prestashop. [Learn more.](https://github.com/PrestaShop/prestashop-specs/blob/master/content/1.7/back-office/shop-parameters/general/maintenance.md#multistore-behavior)
