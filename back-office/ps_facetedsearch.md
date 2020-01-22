# ps\_facetedsearch specifications

The faceted navigation displays a block with different criteria available to filter the products, mostly attributes, features, and price ranges. It is very handy to help the customers easily find a product.

The module displays a block on category pages with layered navigation filters. Layered navigation enables the customer to define cumulative criteria to filter category products, little by little providing more details in order to reduce the number of displayed products. This is a great tool for customers who know the details of what they want (color, condition, price range...), but are unsure how to find it.

When configuring the module, you are presented with 4 sections:

**- Index and caches** : this module heavily relies on database index and its own content cache.

**- Existing filter templates** : A filter template is the kind of navigation to which the customer has access to.

**- Build your own filter template** : You can build various templates, which will serve as the basis for what the customer sees.

**- Configuration** : You can further detail the way this module operates.


**Indexes and caches**
In order to work properly, layered navigation needs to be kept up-to-date with your latest products, product attributes and product prices – unless these never change. You should therefore regularly re-index the data, using the buttons provided here. They each have specific actions:

- Index all missing prices. Only adds to the index the prices that were not indexed before. Much faster than the next button.
- Rebuild entire price index. Adds to the index all the prices, whether they were already indexed before or not. Much slower than the previous button when you have many products.
- Build attribute index. Adds to the index all the product attributes.
- Build url index. Adds to the index the URLs for all the products.
You should update your indexes every time your products' data changes. As this can prove pretty painstaking or even boring, PrestaShop enables you to trigger the indexing automatically, using cron tasks. Add the provided URLs to your crontab, and you will not have to handle this yourself anymore. If you do not know about cron and crontab, ask your webhost about it.


**Existing filters templates**
Layered navigation is based on templates, or groups of criteria. There is one by default, named "My template", which makes use of all the available filters. You should create templates more adapted to your content or needs.

You can have as many templates as needed. This section enables you to edit and delete them when necessary.


**Build your own filters template**
The template builder enables you to specify what kind of filters your customers should have access to.

Creating a new template requires only three easy steps:
- Select categories. You can either create filter for the whole site, or on a per-category basis.
You could for instance have the whole site display the price filter, while some categories can have additional filters.
When choosing "Specific categories", a small window opens where you can choose in which categories this filter should be available.
Note that filters do not automatically apply to sub-categories of the selected category: if there is no product on your "Home" category, then the layered navigation will not appear there.
- Selected filters. The number of available filters depends on the content of your shop. Six default filters will appear here: price, weight, condition, manufacturer, available stock and sub-categories. Along with these are the attribute groups for all products in the selected categories (with the number of products). Check a filter's box to move if from the "Available" section to the "Selected" one. You can move the filters up and down with your mouse cursor, which will influence their display in the front-page.
Each filter has a two drop-down menu included:
1) Type of display. You can choose how the filter is displayed to the customer. The visualization depends on the type of the filter.
  - Numerical (price & weight): check-box, radio button, drop-down list. Note that only the check-box setting allows for multiple selection.
  - Alphabetical (all others): slider, inputs area, list of values.
  
  The checkbox allows to select several filters, while radio button and dropdown list only allow one choice. 
  
2) Limit. If some of your categories have too many choices for a given filters, you can limit the number of displayed items using this selector.
- Name your template. Customers will not see the name, but it will prove very useful to you when you have to edit one template among the dozen or hundred you may create in the lifespan of your shop.
Note that saving the filter will not save the whole configuration: you have to save the filter first, then click on "Save configuration".


**Configuration**
Several options are available:

- Hide filter values with no product is matching. If disabled, you will still see filters, even if they are useless because of the lack of matching product (which can make the layered navigation over-crowded with options).
- Show the number of matching products. Displays the number after the name of the filter, between brackets. If there is no matching product, it will display "(0)".
- Show products from subcategories. The filter applies to more than just the current category.
- Category filter depth (0 for no limits, 1 by default). If the above option is enabled, you risk having too many products taken into account, and lose the interest of layered navigation. The depth is of 1 by default, but you can use even deeper sub-categories.
- Use tax to filter price.
- Allow indexing robots (google, yahoo, bing, ...) to use condition/availability/manufacturer filter. These four filters help you define whether search bots should be able to browse your navigation and index it. This can prove beneficial for SEO (search engine optimization).
These options apply to all templates and filters.


**Availability options**

There are 3 options in the module configuration when the availability filter is **enabled**:

* Display in stock products: Yes / No 

If the option is set to Yes, display in FO “In stock”: Product quantity &gt; 0

By default it should be on Yes

* Display available products: Yes / No

If the option is set to Yes, display in FO “Available”: Product quantity &lt;= 0 & available for order

By default it should be on Yes

* Display out of stock products: Yes / No

If the option is set to Yes, display in FO “Out of stock”: Product quantity &lt;= 0 & not available for order

By default it should be on No

These 3 options should also be displayed when the availability filter is **disabled**:

* Display in stock products: Yes / No

If the option is set to Yes, display in FO products with quantity &gt; 0

Should be on Yes by default

* Display available products: Yes / No

If the option is set to Yes, display in FO products with quantity &lt;= 0 but available for order

Should be on Yes by default

* Display out of stock products: Yes / No

If the option is set to Yes, display in FO products with quantity &lt;= 0 but not available for order

Should be on No by default

**Hide filter values when no product is matching option**

If the option is set to Yes, then filters are hided when no products are matching

By default it should be on Yes

Example, you have following filters

_Material_

`Steel`

`Glass`

_Steel look_

`Polished`

`Brushed`

_Glass look_

`Nice`

`Ugly`

Desired behavior

You select `Steel` - Filter _Glass look_ should get hidden.

You select `Glass` - Filter _Steel look_ should get hidden.

You select `Nice` or `Ugly` - `Steel` option should get hidden.

You select `Polished` or `Brushed` - `Glass` option should get hidden.

 **Sorting of brands in front-office**

In front-office, if brands starts with a character, so sort by ascending alphabetical order.

In front-office, if brands starts with number, so sort by increasing number and ignore other characters after number.

If the merchant selected a filter number limit, so show the X filters with the most results and sort them by ascending alphabetical order or increasing number.

Example, in brackets the number of result:

Size

38 \(50\)

40 \(20\)

42 \(100\)

Size

10 cm \(50\)

30 cm \(20\)

40 cm \(100\)

Brands

Adidas \(291\)

Converses \(625\)

Nike \(406\)

**Sorting of attributes values in front-office**

In front-office, attributes values are sorted by position ascending like defined in the back-office

If the merchant selected a filter number limit, so show the X filters with the most results and sort them by ascending position.

**Sorting of features values in front-office**

In front-office, if features values starts with a character, so sort by ascending alphabetical order.

In front-office, if features values starts with number, so sort by increasing number and ignore other characters after number.

If the merchant selected a filter number limit, so show the X filters with the most results and sort them by ascending alphabetical order or increasing number.

Example, in brackets the number of result:

Size

1,6 \(50\)

10 \(20\)

11,2 \(100\)

Size

10 cm \(50\)

30 cm \(20\)

40 cm\(100\)

Sleeves

Short sleeves \(291\)

Long sleeves \(406\)

Without sleeves \(625\)

**Display of attribute group in front-office**

When you create an attribute in back-office, you have to fill the name and the public name. As a customer, in front-office I want to see the public name of the attribute group.

