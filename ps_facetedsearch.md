**Availability options**

There are 3 options in the module configuration when the availability filter is enabled:
- Display in stock products: Yes / No 

If the option is set to Yes, display in FO “In stock”: Product quantity > 0

By default it should be on Yes


- Display available products: Yes / No

If the option is set to Yes, display in FO “Available”: Product quantity <= 0 & available for order

By default it should be on Yes


- Display out of stock products: Yes / No

If the option is set to Yes, display in FO “Out of stock”: Product quantity <= 0 & not available for order

By default it should be on No


These 3 options should also be displayed when the availability filter is disabled:

- Display in stock products: Yes / No

If the option is set to Yes, display in FO products with quantity > 0

Should be on Yes by default


- Display available products: Yes / No

If the option is set to Yes, display in FO products with quantity <= 0 but available for order

Should be on Yes by default


- Display out of stock products: Yes / No

If the option is set to Yes, display in FO products with quantity <= 0 but not available for order

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

You select `Nice` or  `Ugly` - `Steel` option should get hidden.

You select `Polished` or  `Brushed` - `Glass` option should get hidden.

<a id="sorting"></a>
**Sorting of brands in front-office**

In front-office, if brands starts with a character, so sort by ascending alphabetical order.

In front-office, if brands starts with number, so sort by increasing number and ignore other characters after number.

If the merchant selected a filter number limit, so show the X filters with the most results and sort them by ascending alphabetical order or increasing number.

Example, in brackets the number of result:

Size

38 (50)

40 (20)

42 (100)

Size

10 cm (50)

30 cm (20)

40 cm (100)

Brands

Adidas (291)

Converses (625)

Nike (406)

**Sorting of attributes values in front-office**

In front-office, attributes values are sorted by position ascending like defined in the back-office

If the merchant selected a filter number limit, so show the X filters with the most results and sort them by ascending position.

**Sorting of features values in front-office**

In front-office, if features values starts with a character, so sort by ascending alphabetical order.

In front-office, if features values starts with number, so sort by increasing number and ignore other characters after number.

If the merchant selected a filter number limit, so show the X filters with the most results and sort them by ascending alphabetical order or increasing number.

Example, in brackets the number of result:

Size

1,6 (50)

10 (20)

11,2 (100)

Size

10 cm (50)

30 cm (20)

40 cm(100)

Sleeves

Short sleeves (291)

Long sleeves (406)

Without sleeves (625)

