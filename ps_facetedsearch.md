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


**Stocks of products & filters in front-office**

When a product is out of stock and not available for order, the filter is not displayed.

Example:

Tshirt Red S: 0 and available for order

Tshirt Green S: 0 and available for order

Tshirt Red M: -2 and not available for order

Tshirt Green M: -2 and not available for order

Tshirt Red L: 10

Tshirt Green L: 10

In front-office the M filter shouldn't be displayed except if the customer checked the availabiliy filter "out of stock".
If another product is available in M size, then the "M" filter is displayed but the product "Tshirt" will not appear after checking it.


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


**Sorting of brands in front-office**

In front-office, if brands starts with a character, so sort by ascending alphabetical order.

In front-office, if brands starts with number, so sort by increasing number and ignore other characters after number.

If the merchant selected a filter number limit, so show the X filters with the most results and sort them by ascending alphabetical order or increasing number.

Example, in brackets the number of result:

38 (50)
40 (20)
42 (100)

10 cm (50)
30 cm (20)
40 cm (100)

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

1,6 (50)
10 (20)
11,2 (100)

10 cm (50)
30 cm (20)
40 cm (100)

Short sleeves (291)
Long sleeves (406)
Without sleeves (625)

