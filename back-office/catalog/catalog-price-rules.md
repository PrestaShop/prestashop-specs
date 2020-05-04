## Specifications for Catalog Price rule page

User Story : As a merchant I need to be able to correctly create and edit discounts to my customers based on specific conditions, such as product quantity or category, combinations or brands.

**WHY** 
The Add/edit catalog price rule page \(Catalog &gt; Discounts &gt; Catalog price rules\) is expected to be migrated to Symfony for the 1.7.7 version, but many behaviours \(especially for complex rules\) are not well specified which may introduce regressions and bugs. We need to specify the whole behaviour of this page to make it easier to test every scenario and avoid any new bugs.

Furthermore, we have identified different issues and bugs related to this page that we should fix during the migration :

- #9881 : not reproduced so far
- #13791 : should be fixed with the migration
- #9977
- #9867

**WHAT** 
Thus, this project aims at specifying the current and expected behaviour for every scenario a merchant could be dealing with when creating a specific type of discount for his/her customers. This specification should specifically define : 
- Condition groups behaviour and compatibility 
- Compatibility between rules 
- Discounts display on front office

**SPECIFICATIONS**

The first step of this document is to detail global and generic expected behaviour for this page, both on back office and front office. The second step gives a specific definition of scenarios and behaviours involving conditions groups. The last step details specs for cases with several rules.

## Generic page operation

**Rule creation / edition on Back office

When creating or editing a catalog price rule, the first step is to create the generic conditions of the rules. Some conditions or elements are mandatory, others are optional, according to the expected target audience. Here is the list of those elements :

- Name : this is a mandatory field - every rules need to have a name. 
- Currency : the merchant can choose to apply the rule only on one of his/her currencies enabled on the website \(or all currencies\) - this is an optional criterion 
- Country : same as above, the merchant can choose all countries or only one of the enabled countries as a target audience - this is an optional criterion 
- Group : same as above, the merchant can choose only one or all created customer groups - this is an optional criterion 
- From quantity : the merchant needs to choose the minimum quantity necessary to trigger the discount - this is a mandatory field. By default, 1 is chosen. 
- Price \(tax excl.\) : by default, this field is disabled. It becomes enabled only when the merchant removes the check mark from “Leave initial price” option. The price field becomes mandatory when the option is disabled. 
- From / to : the user can choose to create a temporary discount, with a start date and/or an end date. When clicking on one field, the merchant is able to configure the day, month and year but also the hour and minute. Those 2 fields are optional. 
- Reduction type : the discount can be either in amount \(-X€\) or in percentage \(-X%\). By default the discount is preconfigured in amount.

Note : there are currently 2 issues when choosing the percentage type. 
1- It does not take into account if it is tax included or excluded. When choosing the percentage type, we should remove the option tax included / excluded, as it is for cart rules. 
2- It is possible to create a percentage discount &gt; 100%. I think we should limit it to 100%.

- Reduction with or without taxes : the discount can be considered tax excluded \(expected by default\) or tax included. 
- Reduction : in this field, the merchant needs to define the discount value. This is a mandatory field, by default its value is 0.

**Impact on Front office**

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

Those conditions are related to : 
- Category : the merchant can choose to apply discount only on products which belong to the chosen category. 
- Brand : the merchant can choose to apply a discount on a specific brand only 
- Supplier : same as above 
- Attributes : same as above, the merchant can choose to apply a discount on a specific attribute. To do so, he needs to choose the attribute type and a specific value. 
- Features : same as above.

It is possible to add several sets of conditions in the same group, but also to create different condition groups in the same rule.

1) When adding different criteria to the same group, this works as an AND relation. 
Ex : Category Women and Brand Nike - the rule will only apply to product which belong to the women category and whose brand is Nike.

2) When adding different condition groups to the same rule, this work as an OR relation between all groups. 
Ex : Group 1 : Category Men and Group 2 : Brand Adidas - the rule will apply to all products which belong to the men category or to the Adidas brand.

There does not seem to be any restriction in the number of condition groups which can be created in the same rule.

Note : currently, it is possible to create a condition group even though no criterion is selected, which does not make sense. We should disable the ‘Add a new condition group’ CTA when the current group is empty.

**Adding several rules**

Currently when several rules apply to the same product, it seems that there are different behaviours. We need to clarify them.

Ex 1 :

The test rule has the following conditions :

To the related products, a 10€ discount is automatically applied.

The test2 rule applies a 5€ discount on all product when quantity &gt;=2.

When I select a product which complies both rules, this happens in Front office :

The save 10€ label is automatically displayed, which is the expected behaviour. The discount grid is displayed on the product page according to “Rule 2” which is the expected behaviour.

Results : If I add only one product, I will get a 10€ discount. If I add 2 products, then the discount will be of 5€ for each product. There is no combination of both rules.

Ex 2 : Same example but with 2 rules with the same minimum quantity. After a few tests, it seems that only the oldest rule will apply to the product. Other rules will have no effect on the product. Shouldn’t this be explained in the rules listing ?

