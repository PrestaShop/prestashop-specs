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


**Sorting of brands in fornt-office**

In front-office, brands are sorted by ascending alphabetical order.

If brands are numbers, they are sorted by increasing number.


**Sorting of attributes values in front-office**

In front-office, attributes values are sorted by position ascending like defined in the back-office


**Sorting of features values in front-office**

In front-office, features values are sorted by ascending alphabetical order

If features values are numbers, they are sorted by increasing number

