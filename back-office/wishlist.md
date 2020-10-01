# Wishlist native module functional specifications

## Feature 1: Add to favorites 

### US 1: Add a product to a favorites list
##### As a logged-in user, I can add a product to my favorites from the product sheet or any other product listing page with product blocks in a favorites list
Several cases: 
- Connected users 
- Non logged-in users 
- Products with combinations & customizations

Functional rules: 
What type of users can add products to their favorites?  
Only logged-in users can add a product to their favorites - provided they click on the heart on the product sheet or a product block from a navigation page

![wishlist screen 1](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-1.png)


Which products can be added to favorites? 
All products can be added as favorites:  
- Products in and out of stock  
- Standard products
- Products with combinations
- product packs
- virtual products
- customizable products (text or file)

What product information do I need to retrieve for favorites?
All product information:  
- Price excl. VAT or incl. VAT + special offers,  
- Photos,  
- Quantity (selected by the customer),  
- Combinations,
- Customization (if the product can be customised)

Product information (stocks, prices, etc.) is variable and must be updated each time the Favorites page is loaded.

Rules for quantities when adding to favorites :
- If the user has chosen a quantity > 1 the product added in favorites has the same quantity as the one on the product sheet
- By default, the product is added to the favorites by unit, unless the product can only be purchased with a minimum of X units, in which case, the product is added to the favorites with its minimum quantity
- If the product is out of stock: it is saved in favorites with 0 product quantity

Products with combinations:
- When a user adds a product from a list page (where they cannot select a combination), the product added to the wishlist is the "default" product combination. That is, the product is added with its default combination and quantity.  
- If the user selects a combination in the product sheet, then this combination is added, not the "default" product combination

Customizable products
- If the user has selected the desired customisation before adding the item to their favorites, the product is will be added with the selected customisation
- If the user has not defined a customization before adding the product to their favorites, the product is added to the wishlist without any customization.  
- in both cases, they will not be able to add this product to the cart without going back to the product sheet (see US Add to cart)  

Logged-in user:  
For a logged-in user, when clicking on the heart, a pop-in is displayed offering them the option to add this product to:  
-	the default favorites list
-	one of the previously created lists (if the user does not have a previously created list, the default list is displayed - see below > the pop-up has a min. size),
![wishlist screen 2](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-2.png)

-	a new list that can be created by clicking Create New wishlist
![wishlist screen 3](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-3.png)

The user can only select one list.  

What happens in each case?
1.	When no list has been created: the logged-in user has the option to add the item(s) to the default list or create a new list  
2.	When at least one list has been created: the logged-in user has the option to add the item(s) to the default favorites list, their existing lists or a new list.
3.	When more than X lists have been created: the logged-in user can scroll down to see all the lists created.

There is no list limit

The heart is filled in once the product is added to a favorites list  

Favorites heart for combinations: in the list pages, the heart will not be filled in if the default combination is not selected
![wishlist screen 4](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-4.png)

If the user clicks on the filled-in heart again, the product is removed from the wishlist. If the product is deleted by the seller, it should no longer appear in the users' favorites lists.

For a non-logged-in user:
For a non-logged-in user: when they click on the heart, a login pop-up opens informing them that they need to be logged in to add a product to their favorites:
![wishlist screen 5](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-5.png)


When clicking on "Sign in", the user is redirected to the login page. Once the connection is made, the user is directly redirected to the page they were on.

Special login pop-up features:
-	add a go-back setting to the URL so that, once the user is logged in, they are redirected to the page they were on (any page)
-	the user is then asked to select the favorites list in which he/she wants to save the product.

### US 2: View my favorite products  
##### As a logged-in user, I can view and sort my favorite products

Functional rules:  
What type of users can add products to their favorites?
A logged-in user

For non-logged-in users:  
Non-logged-in users cannot access their favorites list  

For logged-in users:  
As a logged-in user, I can access my favorite products by:  
- Going to my account  
- Clicking on "Wishlists"
![wishlist screen 6](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-6.png)

- I come to the page with all my favorites lists (default one + created lists)
![wishlist screen 7](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-7.png)

- When I click on one of the lists, it brings me to a page that lists my previously added products  

- The number of unique products in the list is displayed to the left of the list name  
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

You can remove a product from the favourites directly within the product sheet or a product listing, by clicking on the heart (which becomes empty).  

Products with several options:
- if I delete my product from the product sheet: the product with combinations X and quantity Y will be deleted
- if I delete my product from a product listing (where I don't have any variation options), it deletes the product with the defaultvariation  

### US 4: Add a favorite product to the cart  
##### As a logged-in user, I can add a favorite product to the shopping cart

Specific case:
-	custom product that cannot be added directly to the basket from the list of favourite products

Functional rules:
A logged-in user can add one of their favorites to the cart, except customized products (with stock or out of stock but with the possibility to be added to the cart/allow order option), by clicking on Add to cart.

![wishlist screen 11](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-11.png)

If the product is Out of stock and cannot be added to the cart: 
-	a message is displayed informing the user that the product is no longer available: "Product out of stock".
-	the "Add to basket" CTA is greyed out and the product cannot be added to the basket

![wishlist screen 12](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-12.png)

If order of out of stock products is denied and if the selected combination is out of stock and if there are other available combination (in stock or out of stock with allowed order) for the same product: 
-	a message tells the user that the product is available in other options "Product available with different options"
-	the product image and the Add to cart CTA are disabled

![wishlist screen 13](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-13.png)

For a customized product :
If it is a custom product, the user will not be able to add this product to the basket directly from the favourites list. The "Add to basket" CTA is replaced by "Customise". 

When clicking on the CTA, the user is redirected to the product sheet in order to customise the product, and if it is already filled in, they can add this product as a favorite. 

![wishlist screen 14](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-14.png)

Only non-customized products, with stock or without stock - but with the option to add to the cart, can be added to the cart. If the product is out of stock and if order of out of stock products is denied, the user will not be able to add it to the shopping cart, as is currently the case in the PrestaShop Core.

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

##### As a logged-in user, I can create a favourites list in the product sheet or from the product blocks (in the navigation pages)

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

a user who accesses the shared link cannot modify the products, they can only add them to their shopping basket (if enabled) > Read-only view 

Once a user has copied the link, the "Copy link" CTA changes to "Link copied" and the user can close the pop-up. 

To share the default list, simply click on the share icon and a pop-up is displayed with a path to share the list.

![wishlist screen 18](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-18.png)


##### As a user (logged in or not), I can open another user's list via a special link

Functional rules: 
A user does not need to be logged in to view the shared link > an "ephemeral" page is created with a product listing outside the users account, without the option to delete or modify the list > model need 

## Feature 3: Bookmarks - Back office
### US 8: Set up the module and view statistics 
##### As a seller, I can modify the wording 
- Name of my Favorites section 
- Title 
- Create a list CTA

A multi-language field for each field allows to translate them

![wishlist screen 21](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-21.png)

##### As a seller, I can view statistics regarding favorites 

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
- a clickable product title that refers the user to the product sheet
- product reference 
- Category
- Price excl. VAT 
- Quantity available 
- a conversion rate (= the number of times the product has been purchased after being listed as a favorite) 

You can display the results: 
-	for that day, 
-	for the current month 

PS: contrary to the model, no filter is needed for the year and "All time" because the loading time is too long

2.	Total number of created and active lists (still online) 

+	Retrieve customers' favorites lists to put them in the customer page > update the layout 
