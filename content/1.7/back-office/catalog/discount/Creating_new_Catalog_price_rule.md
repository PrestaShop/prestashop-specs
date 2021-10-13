---
title: Catalog Price Rules creation
weight: 1
---
## Specifications

The first step of this document is to detail global and generic expected behaviour for this page, both on back office and front office. The second step gives a specific definition of scenarios and behaviours involving conditions groups. The last step details specs for cases with several rules.

## Creating Price rules for catalogs

If you want to create first Catalog Price rule, click on the blue button with plus on the top-right of the page - (+) Add new catalog price rule. Also, as an alternative, you can click on smaller plus (+) icon in the top-right of the Catalog Price rules table.

After that, you will be navigated to the Catalog Price rules creation page.
![image](https://user-images.githubusercontent.com/29095235/136797959-3a97e049-00a4-42f5-97b2-af1c6d152a80.png)

## Price Rules input fields and meanings

 **Name** - this input field is marked with asterisk sign, meaning that this feald is required. Give it a name for your first price rule.<br>
 **Currency** - it is a dropdown selection, for choosing what countries should be involved into pricing rules. For example, if you want, that only USA customers could see the price rules for Prestahop catalogs, you should select the USD currency here.<br>
 **Country** - you can select a specific country for the Catalog price rules. For example, if you want, that only German customers could see the certain price rules, you should select the Germany in the dropdown.<br>
**Group** - Prestashop provides specific customer groups. By default, there are Visitor, Guest and Customer. You can select the appropriate Group, in order to show the price rules for that certain group of visitors in your website.<br>
**From quantity** - as you can see, it is marked with asterisk, meaning that the input field is required, for further steps. You can type, for example, 50 and it will mean, that all the catalog items with quantity up to 50 will get the certain catalog discount rule.<br>
**Price (tax excl.)** - it is a field that you can type, for example, 10 and it will mean, that all the catalog items with the prices up to 10 will get the certain catalog discount rule.<br>
**Leave initial price (checkobox)** - for your needs, you can simply checkbox this, if you want that your merchants would get the catalog price rules from the initial original item price.<br>
**From** - in this place, you can be already familiar with the date boxes. Just simply select the time of the date picker. Select the year, month, day and the time from when the catalog price rule will be executed and displayed for Prestashop items.<br>
**To** - in this place, you can be already familiar with the date boxes as well. Just simply select the time of the date picker. Select the year, month, day and the time the price rule existance should be exceeded for Prestashop items.<br>
**Reduction type** - you can choose for your merchants, that the discount affection will be expressed as Percentage or Amount in the Prestashop items. You can select one of the types in the dropdown.<br>
**Reduction with or without taxes** - you can choose, if the prices should be discounted from the prices with taxes of without taxes. So as a result, it may be different deductions from the catalog prices.<br>
**Reduction** - it is an Amount or Percentage type of input here. You can just input the certain digits here for your catalog prices to be shown.<br><br>
You may **Cancel** your form and discard your changes, by clicking CANCEL button on the left, or you may just **Save** the new catalog price rule by clicking the SAVE button on the right.

### Adding several rules

Currently when several rules apply to the same product, it seems that there are different behaviours. We need to clarify them.

Ex 1 :

The test rule has the following conditions :

To the related products, a 10€ discount is automatically applied.

The test2 rule applies a 5€ discount on all product when quantity &gt;=2.

When I select a product which complies both rules, this happens in Front office :

The save 10€ label is automatically displayed, which is the expected behaviour. The discount grid is displayed on the product page according to “Rule 2” which is the expected behaviour.

## Condition Groups
There are also additional and extended Catalog price rules combinations you can specify for your Catalog items.

![image](https://user-images.githubusercontent.com/29095235/137093734-0d8a07b4-2531-43cc-9b38-1bacda2fc2c1.png)

**Those conditions are related to :**
- Category : the merchant can choose to apply discount only on products which belong to the chosen category. 
- Brand : the merchant can choose to apply a discount on a specific brand only 
- Supplier : same as above 
- Attributes : same as above, the merchant can choose to apply a discount on a specific attribute. To do so, he needs to choose the attribute type and a specific value. 
- Features : same as above.
- Value : displays the certain value expression, that can be chosen above in the form

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
