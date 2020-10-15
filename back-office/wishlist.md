# Wishlist native module functional specifications

## Feature 1: Add to favorites 

### US 1: Add a product to a favorites list
##### As a logged-in user, I can add a product to my favorites from the product sheet or any other product listing page with product blocks in a favorites list
Several cases: 
- Connected users 
- Non-logged-in users 
- Products with combinations & customizations

Functional rules: 
What type of users can add products to their favorites?  
Only logged-in users can add a product to their favorites - provided that they click on the heart icon on the product page or product block from a navigation page.

![wishlist screen 1](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-1.png)


Which products can be added to favorites? 
All products can be added as favorites:  
- Products in and out of stock  
- Standard products
- Products with combinations
- Product packs
- Virtual products
- Customizable products (text or file)

What product information do I need to retrieve for favorites?
All product information:  
- Price excl. VAT or incl. VAT + special offers,  
- Photos,  
- Quantity (selected by the customer),  
- Combinations,
- Customization (if the product can be customized).

Product information (stocks, prices, etc.) is variable and must be updated each time the Favorites page is loaded.

Rules for quantities when adding to favorites:
- If the user chooses a quantity > 1, the product added in favorites has the same quantity as the one on the product sheet.
- By default, the product is added to the favorites singly. If the product can only be purchased with a minimum of X units, then the product is added to the favorites with its minimum quantity.
- If the product is out of stock (stock = 0 ou stock < 0) with denying order option: it is saved in favorites with 1 product quantity but the product block is disabled and the visitor cannot add the product to the cart.

Products with combinations:
- When a user adds a product from a listing page (where he/she cannot select any combination), the product added to the wishlist is the "default" product combination. That is, the product is added with its default combination and quantity.  
- If the user selects a combination from the product page, then this combination is added and not the "default" product combination.

Customizable products: 
- Whether the user has filled his customization or not, when he adds a customizable product to his favorites, it is saved without the customization. 
- If the product requires customization, then the user will not be able to add this product to cart without going back to the product page (see US Add to cart) > he will have to click on the CTA 'Customize in order' to be redirected to the product page, fill in the customization, and add it to cart.

Since the customization is not registered in the wishlist, it will not be possible to add the same product twice but with different customizations. The product only appears once in the wishlist. 

Logged-in users:  
For a logged-in user, clicking on the heart icon displays an in-page pop-up that offers the option to add this product to:  
-	the default favorites list,
-	a previously created list (if the user does not have created lists previously, the default list is displayed - see below > the pop-up has a min. size),

![wishlist screen 2](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-2.png)

-	a new list that can be created by clicking 'Create New wishlist'.
![wishlist screen 3](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-3.png)

The user can only select one list, so the product can be added to only one list.  

What happens in each case?
1.	When no list has already been created: the logged-in user can add the item(s) to the default favorites list or create a new list.
2.	When at least one list has been created: the logged-in user can add the item(s) to the default favorites list, one of the existing lists, or create a new list.
3.	When more than X lists have been created: the logged-in user can scroll down to see all the lists created.

Users can create as many lists as they want.

The heart icon turns full once the product added to a favorites list.

Heart icon for combinations: in the listing pages, the heart will not be full if the default combination is not selected.

![wishlist screen 4](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-4.png)

If the user clicks on the full heart again, the product is removed from the wishlist. And if the product is deleted by the seller meanwhile, it should no longer appear in the user's favorites lists.

Non-logged-in users:
For a non-logged-in user: clicking on the heart icon displays an in-page pop-up that informs he/she must log in to proceed.

![wishlist screen 5](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-5.png)

When clicking on "Sign in", the user is redirected to the login page. Once the connection is made, the user is redirected to his/her product or listing page.

Special login features:
-	add a go-back setting to the URL so that, once the user is logged in, he/she can be redirected to the page he/she was on (any page)
-	the user is then asked to select the favorites list in which he/she wants to save the product

### US 2: View my favorite products  
##### As a logged-in user, I can view and sort my favorite products

Functional rules:  
What type of users can add products to their favorites?
A logged-in user

For non-logged-in users:  
As a non-logged-in user, I cannot access my favorite products.

For logged-in users:  
As a logged-in user, I can access my favorite products by:  
- Going to my account  
- Clicking on "Wishlists"
![wishlist screen 6](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-6.png)

- I arrive on the page with all my favorites lists (default one + created lists)
![wishlist screen 7](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-7.png)

- When I click on one of the lists, it brings me to a page that lists my previously added products  

- The number of products in the list is displayed to the left of the list name  
This means that it accounts for all the idproduct allocated
For example, if there are 3 variations of the same product it counts as 3 products.
In the case of a product pack, this counts as 1 pack and not the number of products in the pack

![wishlist screen 8](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-8.png)

I can view the products and I can sort them as follows:  
- Last added (default sorting)  
- Price highest to lowest
- Price lowest to highest 

In all three cases, keep the discount price in mind  
![wishlist screen 9](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-9.png)

Please note that if a product is deleted or deactivated from the catalog, the product automatically disappears from the list.  

For each product, you have to go back to the information listed in US n°1.
As a logged-in user, I can see how many unique favorite products are in a list.  

What type of users can add products to their favorites?
Only logged-in users, since the Favorites list is displayed in My Account.  

When I access the page with the my favorites lists, I can see the number of products in each of the lists.  

### US 3: Edit and/or delete a favorite product
##### As a logged-in user, I can edit and/or delete a favorite product  
Different cases:
- Products in stock
- Products out of stock
- from the product sheet
- from a favorites list

Functional rules:
I can modify the quantity, the combinations and the customization of all my favorite products (in stock, out of stock) by clicking on the Pencil in my favorite products list.

When I click on the Pencil, I am redirected to the product sheet to make my modifications. Once the changes are made, you will have to click on the heart to add the new product as a favorite. At this point, the new quantity, combination and / or customization will overwrite the original product in the favorites list.

![wishlist screen 10](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-10.png)

I can permanently remove a favorite product from the list by clicking on remove and a pop-up appears confirming that the product has been removed from the list.  

You can remove a product from the favorites directly within the product sheet or a product listing, by clicking on the heart (which becomes empty).  

Products with several options:
- if I delete my product from the product sheet: the product with combinations X and quantity Y will be deleted
- if I delete my product from a product listing (where I don't have any combination options), it deletes only the product with the default combination if it was added. Otherwise, if I have added a combination as a favorite that isn't the default one, then the product block in the listing will not have the heart filled. The heart is filled only if the merchant has added the product with its default combination. 

Exemple : if I didn't added the product with the default combination in my favorite list
For example I have a tshirt with following combinations:
* Red (default combination)
* Black
* White
I add the black and the white to one of my favorite list. It will be impossible to remove these products of the wishlist from the product list because the heart is empty

### US 4: Add a favorite product to the cart  
##### As a logged-in user, I can add a favorite product to the shopping cart

Specific case:
-	customized products cannot be added directly to the cart from the list of favorite products

Functional rules:
A logged-in user can add one of their favorites to the cart (except customized products) if the product is in stock or out of stock but with the allow order option checked), by clicking on Add to cart.

![wishlist screen 11](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-11.png)

If the product is Out of stock with the option "Deny order" and cannot be added to the cart: 
-	a message is displayed informing the user that the product is no longer available: "Product out of stock".
-	the "Add to cart" CTA is disable and the product cannot be added to cart

![wishlist screen 12](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-12.png)

If order of out of stock products is denied and if the selected combination is out of stock and if there are other available combination (in stock or out of stock with allowed order) for the same product: 
-	a message tells the user that the product is available in other options "Product available with different options"
-	the product image and the Add to cart CTA are disabled

![wishlist screen 13](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-13.png)

For a customized product :
* If the customization is required and as the customization is always not defined (since it is impossible to save the customization as a wishlist), the user will not be able to add this product to the cart directly from the favorites list. The "Add to cart" CTA is replaced by "Customize". When clicking on the CTA, the user is redirected to the product sheet in order to customize the product, and if it is already filled in, they can add this product to the cart. 
* If the customization is not required, the product can be added to the cart directly.
![wishlist screen 14](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-14.png)

Only non-customized products, with stock or out of stock with allow order option, can be added to the cart. If the product is out of stock and if order of out of stock products is denied, the user will not be able to add it to the shopping cart, as is currently the case in the PrestaShop Core.

Specific case : Let's say order of out of stock product is denied. There are 2 products in stock. I add 2 products to my favorite and they are ordered by someone else, so the stock is 0 (I stayed on my favorite page and didn't refresh the page, so the button is enabled)
If I click on the add to cart button, the products are added to cart. When the user go to cart page, an error message is displayed "The product is no longer available in this quantity."

## Feature 2: Storing favorites - Create and manage your favorites lists
### US 5: Create a list 
##### As a logged-in user, I can create a favorites list in the "Wishlists" area in My Account by clicking on "Create Favorites List" 

Functional rules:
Who can benefit from this feature?
Only logged-in users can create a favorites list
1.	Click on New wishlist
2.	A pop-in appears with a text field to fill in the name of the desired list. 
3.	Option to cancel a list creation 
4.	Validate the creation by clicking on Create

![wishlist screen 15](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-15.png)

Once the list has been created, it will appear at the bottom of the lists 

##### As a logged-in user, I can create a favorites list from the product sheet or from any other product listing page with product blocks

Functional rules:
Steps for creating a list:
1.	Log in 
2.	Click on the heart to add the product to your favorites
3.	A "box" is displayed with all the favorite lists.
4.	Click on "Create a new list"
5.	A pop-up appears with a field for the List Name to be created
6.	Click on "Create a new list" to validate the creation of the list (you can cancel if you decide that you do not wish to create a new list)
7.	The list is created, the pop-up disappears, and the product is directly added to the newly created list 


### US 6: Renaming/modifying/deleting a list 
##### As a logged-in user, I can edit a favorites list that has been created, unless if it is the default favorites list. 

Functional rules: 
All lists except the default list can be edited 

To modify/rename a list: 
1.	Go to "My Account"
2.	Click on "My Favorites"
3.	The created lists will be displayed
4.	By clicking on the three small dots, a small box appears that allows you to: 
a.	Rename the list 
b.	Share the list
5.	Click on Rename
6.	A pop-up opens with a pre-filled text field with the title to be modified. 
7.	A Rename CTA is used to validate the action and close the pop-up 
8.	An "Cancel" CTA cancels the action and closes the pop-up 

![wishlist screen 16](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-16.png)

When a user changes the name of the list and clicks on Rename, the pop-up window disappears and an information message is displayed in their favorites list indicating that the name change has been taken into account (the growl message). 

To delete a list, simply click on the recycle bin icon, a validation pop-up appears, once the action is confirmed, the list is deleted

![wishlist screen 17](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-17.png)

When the user confirms that they want to delete the list, an info message is displayed to inform the user that the list has been successfully deleted. 

For the default favorites list, the recycle bin icon and the three little dots are not dislayed and we only have the share button, see below

![wishlist screen 18](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-18.png)


### US 7: Share your list
##### As a logged-in user, I can obtain a link that allows me to share a list

Functional rules:
To share a list you need to: 
1.	Go to "My Account"
2.	Click on "My Favorites" 
3.	The created lists will be displayed
4.	By clicking on the three small dots, a small box appears that allows you to: 
a.	Rename the list
b.	Share the list
9.	Click on "Share List" 
10.	A pop-up with a share link will appear 
11.	Click on "Copy link" to copy it (so we can shut down the pop-up window and share the link)
12.	Click "Cancel" to close thee pop-up 

![wishlist screen 19](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-19.png)

a user who accesses the shared link cannot modify the products, they can only add them to their shopping cart (if enabled) > Read-only view 
It is not an option in the module configuration.

Once a user has copied the link, the "Copy link" CTA changes to "Link copied" and the user can close the pop-up. 

To share the default list, simply click on the share icon and a pop-up is displayed with a path to share the list.

![wishlist screen 18](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-18.png)


##### As a user (logged in or not), I can open another user's list via a special link

Functional rules: 
A user does not need to be logged in to view the shared link > an "ephemeral" page is created with a product listing outside the users account, without the option to delete or modify the list > model need 

## Feature 3: Bookmarks - Back office
### US 8: Set up the module and view statistics in back office 
##### As a seller, I can modify the wording in back office 
- Name of my Favorites section 
- Title 
- Create a list CTA

A multi-language field for each field allows to translate them

![wishlist screen 21](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-21.png)

##### As a seller, I can view statistics regarding favorites in back office 

![wishlist screen 22](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-22.png)

available statistics: 
Provide a cache for queries with calculations for large catalogs! (some sellers have more than 30,000 products)

Here are the caches you need, depending on the timing: 
-	All time & Year: 1 month cache
-	Month: one week cache 
-	Day: one day cache 

A "Refresh" CTA; when a user changes the timing, they will have to click on Refresh to update their data. 

1.	A top 10 of the most bookmarked products over a given period (via the PREFIX_wishlist_product_basket table)

For each product, you should provide: 
- Product image
- a clickable product title that refers the user to the product sheet in back office
- product reference 
- Main category
- Price excl. VAT 
- Quantity available 
- a conversion rate (= the number of times the product has been purchased after being listed as a favorite) 

You can display the results: 
-	for that day, 
-	for the current month 

PS: contrary to the model, no filter is needed for the year and "All time" because the loading time is too long

2.	Total number of created and active lists (still online) 

+	Retrieve customers' favorites lists to put them in the customer page > update the layout 

## Multishop rules 
In the case of a multi-shop without a shop group : 
- the wishlists will be different 
- the statistics table in the back office will be different depending on if  you are in shop A or shop B. It will not be a question of having global statistics including data from shop A and shop B.

In the case of a multi-boutique shop with a group of shops then : 
- even if there is a sharing of accounts and products, the visitor will not share his Wishlist: he will have specific wishlists according to the shop he is in. 
- the statistics are global statistics: include data from shops belonging to the same group 
