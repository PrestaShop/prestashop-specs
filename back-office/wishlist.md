# Wishlist native module functional specifications

## Feature 1: Add to favorites 

### US 1: Add a product to a favorites list
##### As a logged-in user, I can add a product to my favourites from the product sheet or any other navigation page with product blocks in a favourites list
Several cases: 
- Connected users 
- Non logged-in users 
- Products with variations & customisations

Functional rules: 
What type of users can add products to their favourites?  
Only logged-in users can add a product to their favourites - provided they click on the heart on the product sheet or a product block from a navigation page

![wishlist screen 1](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-1.png)


Which products can be added to favourites? 
All products can be added as favourites:  
- products in and out of stock  
- product packs
- virtual products
- customisable products (text or file)

What product information do I need to retrieve for favourites?
All product information:  
- Price excl. VAT or incl. VAT + special offers,  
- Photos,  
- Quantity (selected by the customer),  
- Variations,
- Customisation (if the product can be customised)

Product information (stocks, prices, etc.) is variable and must be updated each time the Favorites page is loaded.

Rules for quantities when adding to favorites :
- If the user has chosen a quantity > 1 the product added in favorites has the same quantity as the one on the product sheet
- By default, the product is added to the favourites by unit, unless the product can only be purchased with a minimum of X units, in which case, the product is added to the favourites with its minimum quantity
- If the product is out of stock: it is saved in favorites with the stock noted as 0

Products with variations:
- When a user adds a product from a list page (where they cannot select a variation), the product added to the wishlist is the "base" product. That is, the product is added with its default variation and quantity.  
- If the user selects a variation in the product sheet, then this variation is added, not the "basic" product

Customisable products
- If the user has selected the desired customisation before adding the item to their favorites, the product is will be added with the selected customisation
- If the user has not selected a customisation before adding the product to their favorites, the product is added to the wishlist without any type of customisation.  
- in both cases, they will not be able to add this product to the basket without going back to the product sheet (see US Add to basket)  

Logged-in user:  
For a logged-in user, when clicking on the heart, a pop-in is displayed offering them the option to add this product to:  
-	the default favourites list
-	one of the previously created lists (if the user does not have a previously created list, the default list is displayed - see below > the pop-up has a min. size),
![wishlist screen 2](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-2.png)

-	a new list that can be created by clicking Create New wishlist
![wishlist screen 3](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-3.png)

The user can only select one list at a time.  

What happens in each case?
1.	When no list has been created: the logged-in user has the option to add the item(s) to the default list or create a new list  
2.	When at least one list has been created: the logged-in user has the option to add the item(s) to the default favourites list, their existing lists or a new list.
3.	When more than X lists have been created: the logged-in user can scroll down to see all the lists created.

A maximum of 100 lists is allowed.

The heart is filled in once the product is added to a favourites list  

Favourites heart for variations: in the list pages, the heart will not be filled in if the default variation is not selected
![wishlist screen 4](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-4.png)

If the user clicks on the filled-in heart again, the product is removed from the wishlist. If the product is deleted the seller, it should no longer appear in the users' favourites lists.

For a non-logged-in user:
For a non-logged-in user: when they click on the heart, a login pop-up opens informing them that they need to be logged in to add a product to their favourites:
![wishlist screen 5](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-5.png)


When clicking on "Sign in", the user is redirected to the login page. Once the connection is made, the user is directly redirected to the page they were on.

Special login pop-up features:
-	add a go-back setting to the URL so that, once the user is logged in, they are redirected to the page they were on (any page)
-	the user is then asked to select the favourites list in which he/she wants to save the product.

### US 2: View my favourite products  
##### As a logged-in user, I can view and sort my favourite products

Functional rules:  
What type of users can add products to their favourites?
A logged-in user

For non-logged-in users:  
Non-logged-in users cannot access their favourites list  

For logged-in users:  
As a logged-in user, I can access my favourite products by:  
- Going to my account  
- Clicking on the favourites lists or favourites 
![wishlist screen 6](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-6.png)

- I come to the page with the favourites lists (+create lists)
![wishlist screen 7](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-7.png)

- When I click on one of the lists, it brings me to a page that lists my previously added products  

- The number of unique products in the list is displayed to the left of the list name  
![wishlist screen 8](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-8.png)

I can view the products and re-arrange them I can arrange them as follows:  
- Last added (default sorting)  
- Price highest to lowest
- Price lowest to highest 
In all three cases, keep the discount price in mind  
![wishlist screen 9](https://github.com/PrestaShop/prestashop-specs/blob/master/img/wishlist-screen-9.png)

Please note that if a product is deleted or deactivated from the catalogue, the product automatically disappears from the list.  

For each product, you have to go back to the information listed in US n°1.
As a logged-in user, I can see how many unique favourite products are in a list.  

What type of users can add products to their favourites?
Only logged-in users, since the Favourites list is displayed in My Account.  

When I access the page with the my favourites lists, I can see the number of products in each of the lists.  

### US 3: Edit and/or delete a favorite product










