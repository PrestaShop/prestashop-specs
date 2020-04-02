# Specifications related to SEO in PrestaShop


## Introduction

SEO is key when choosing an ecommerce solution. A CMS which is SEO optimized is a strategic added value for many merchants, and an important selection criterion. It’s also a key factor for brand image and differentiation with our competitors. 

In the meantime, some technical and functional choices can have a huge impact (positive or negative) on stores’ SEO. It is exactly what happened between 1.6 and 1.7, when it was chosen to change the product URL pattern in 1.7 to avoid a technical issue present in 1.6 (more information below).

Since the 1.7.4 and especially 1.7.5, we have focused on SEO improvement. A lot of SEO optimizations have been added in the template and in URLs to improve stores’ SEO (see a few examples here) without introducing breaking changes between minor versions. So it’s not possible to modify some “structuring choices” that were introduced in 1.7.


Below are listed all specifications of the current way the SEO is working or should be working on PrestaShop, for all different available pages (product, category, cms pages, etc.).


## GENERIC SEO SPECIFICATIONS

* _PrestaShop URLs and friendly URLs_

In Traffic & SEO > SEO & URLs > Set up URLs,  the merchant has different options to set up his website’s urls according to his needs. 


One recommended option is to set to YES the friendly url option.

By default, PrestaShop's deep URLs (that is, specific pages rather than online the domain name) are uninformative to both customers and search engines: a URL such as http://www.myprestashop.com/product.php?id_product=27 does not help visitors know what product is on that page. Friendly URLs are the way to achieve that and get for instance http://www.myprestashop.com/2-music-players/27-ipod-nano-green.
As you can see in the second example above, both categories and products can have a friendly URL: in the example above, id_category=2 becomes 2-music-players, and id_product=27 becomes 27-ipod-nano-green. While the ID number cannot be removed by default, the words can be either generated from the category/product name or written by hand. 
For products, categories and CMS pages, this is done directly in their own configuration page. For all other pages, friendly urls can be updated in Traffic & SEO > SEO & URLs.

When rewriting the URL after the ID (of the product, the category, or the page), there should be an automatic redirection to the canonical URL. So if a link is :
entered without www, it should redirect to www IF it is domain shop is correctly defined with www.
entered with the wrong link rewrite text, it should redirect to the correct link. 
Nevertheless, there are some specific behaviours for products (with and without combinations), which are detailed in the paragraph dedicated to products below.

2 specific cases : 
- When changing primary domain name, the friendly urls should be automatically reindexed. The #11375 issue related to this has been fixed in 1.7.5.0.
- When using multishop, it should correctly redirect to the subdomain.

* _Schema of PrestaShop URL (displayed only if friendly URLs are enabled)_

By default, route to pages are the following :
- Route to products : {category:/}{id}{-:id_product_attribute}-{rewrite}{-:ean13}.html
- Route to category : {id}-{rewrite}
- Route to category which has the "selected_filter" attribute for the "Layered Navigation" (blocklayered) module : {id}-{rewrite}{/:selected_filters}
- Route to supplier : supplier/{id}-{rewrite}
- Route to brand : brand/{id}-{rewrite}
- Route to page : content/{id}-{rewrite}
- Route to page category : content/category/{id}-{rewrite}
- Route to modules : module/{module}{/:controller}

For supplier and brand pages, this is a change that was introduced in 1.7.5, to avoid having “_” in URLs, which is a bad practice. It used to be looking like : “test.com/IDOFBRAND_BRANDNAME” and has been replaced with “test.com/brand/IDOFBRAND-BRANDNAME” and “test.com/supplier/IDOFSUPPLIER-SUPPLIER”.

You can change the way friendly URLs are generated, by changing the route to a resource in your shop. For instance, the default route to display a product's page is {category:/}{id}-{rewrite}{-:ean13}.html, which results in /summer-dresses/7-printed-chiffon-dress.html. You could change that route to {manufacturer:/}{id}-{rewrite:/} to obtain /fashion-manufacturer//7-printed-chiffon-dress/
Eight fields are available by default, and each is accompanied by a list of available keywords. Some keywords are mandatory and are indicated with a "*".
 

 
When changing the route to pages (according to what is possible), there should be an automatic redirection to the new canonical URL, for every type of page or product (with and without combinations). A bug related to this is being fixed for 1.7.6.5.



* _Titles and metatitles_

Main page configurations (product, category, cms, attribute, brand, supplier, etc.) make it possible to give the page a specific title and metatitle. The merchant can modify them according to his needs. By leaving the metatitle field empty, the title name will be used. 

In 1.7.5, the metatitle field has been added to cms pages to make it possible to differentiate the title and meta title in a cms page.  



* _PrestaShop H1...Hn & Hreflang tags_

In PrestaShop, all pages should have only one H1 tag, which is defined in the front-office template. In the classic theme, a fix was brought in 1.7.5 as there were 2 H1 tags in the category pages for the category names 


Hreflang rules : To be completed




* _PrestaShop microdata_

The Google search console should not display any errors related to microdata, as it is key for SEO and Google. Some errors (here and here) were found and fixed in 1.7.7



* _PrestaShop breadcrumbs on Front office_

On PrestaShop main pages, breadcrumbs are available on top of the page to ease the visitor’s navigation by displaying a hierarchy of the current page in relation to the website's structure. 
Some pages are missing, below is listed the list of pages with and without breadcrumbs :
- Products : OK 
- Search results : OK 
- Categories : OK 
- CMS pages : OK 
- bestsales : OK
- newproducts : OK
- pricesdrop : OK
- myaccount : OK
- password : OK
- My account : OK
- history: OK (last key was missing, fixed in 1.7.7)
- identity : OK (last key was missing, fixed in 1.7.7)
- discount : OK (last key was missing, fixed in 1.7.7)
- addresses : OK (last key was missing, fixed in 1.7.7)
- Order slip : OK (last key was missing, fixed in 1.7.7)
- Login page + registration : NOK
- stores : NOK
- sitemap : NOK
- suppliers : NOK
- basket : NOK
⇒ the following issue will be adding the missing breadcrumbs :  #15440

The current generic rule for front-office breadcrumb is the following :
- All previous elements of the breadcrumb are clickable and allow the visitor to easily go to the home page or the main category page for instance
- The last element, corresponding to the current page the user is on, is not clickable to avoid a useless redirection to the same page. This is useful for both user experience and SEO. This has no impact on structured data validity. This new behaviour has been introduced in 1.7.7.0 (issues are available here : #13083 and #15378)
- In the code source, the breadcrumb should only contain one element (the name of the current page). An issue related to this has been fixed in 1.7.7. 

 
 
## SEO FOR PRODUCT PAGES AND PRODUCT LISTINGS ##

* _Product page title_
 
Since 1.7.5, it is possible to automatically add  attributes to the product page title. This means that the page title can either be “Product name” or "Product name Attribute 1 Attribute 2... Attribute X" according to the chosen option. 
 
This option can be found in Traffic & SEO > SEO & URLs > SEO options : Display attributes in the product meta title (YES/NO).
If setting the option to yes,  the attributes must change in the metatitle, According to the combination chosen.

This option has been introduced in 1.7.5 with the following issues : #9508 and  #11927 


* _Product canonical urls_
 
There used to be a known issue which was quite critical to merchants and agencies, and was one reason explaining why many users refuse to migrate to the latest PS version.

Explanation of the issue : 

- URL in 1.6 version : www.monsite.fr/10-leproduit.html#/couleur-jaune
What comes after # (anchor) comes with the activation of the faceted search module, it is not part of the URL and is not taken into account by search bots.

- In 1.7, it has been decided to add an ID in the product URL for the corresponding attribute of the product.
URL in 1.7 version : www.monsite.fr/10-16-leproduit.html#/couleur-jaune
URL of the default product : www.monsite.fr/10-leproduit.html

Before 1.7.6, there was a problematic issue on PS 1.7 with the management of canonical urls (It’s the url that is considered by default by Google and for SEO purposes) of product combinations : PS 1.7 generated a canonical URL to the default product URL (without combination ID) and not the product combination. The canonical URL was never available nor existing when the products had combinations. There was an automatic redirection to the default combination url. 

With the example :  the canonical url for this product “www.monsite.fr/10-16-leproduit.html#/couleur-jaune” was
www.monsite.fr/10-leproduit.html instead of www.monsite.fr/10-16-leproduit.html

It means that there were several URLs for each “parent reference”. Each url of a combination had a canonical url which redirected to the parent reference url BUT this URL had a 301 redirection to the default combination URL. The parent reference URL was not visible on the website.
To fix these issues, an important update has been done on canonical urls for combination products. The current generic rule for canonical url  is the following :
the parent product URL must stay the default canonical URL (with no combination ID nor anchor) http://wandering-expert.machine-shuffle.prestashop.net/fr/hommes/1-hummingbird-printed-t-shirt.html
There is NO automatic redirection to the default combination, the URL remains available and displays the default combination
the combinations urls still work and their canonical url is the parent url.
When changing the combination on the product page, the combination url is used : http://wandering-expert.machine-shuffle.prestashop.net/fr/hommes/1-1-hummingbird-printed-t-shirt.html#/1-taille-s/8-couleur-blanc
 
This change should NOT have any impact on the URL rewrite. As explained above, even when entering the wrong link rewrite text, it should redirect to the correct URL.
 
For a simple product without combinations, it’s the same behaviour as explained before : if the url rewrite is different from the canonical url, then there should be an automatic redirection to the canonical url. 
Ex : https://myshop.com/en/art/12-mountain-fooooooox-vector-graphics.html → automatic redirection to https://myshop.com/en/art/12-mountain-fox-vector-graphics.html
 
For a product with combinations, the behaviour is slightly different :
- If the attribute ID is invalid, then there is an automatic redirection to the canonical url.
Ex : https://myshop.com/en/women/2-152-brown-bear-printed-sweater.html (the ID 152 does not exist) → automatic redirection to https://myshop.com/en/women/2-brown-bear-printed-sweater.html
- If the attribute ID is correct but the product rewrite is not, then there should be an automatic redirection to the correct combination url.
Ex : https://myshop.com/en/women/2-9-brown-beaaaaaaaar-printed-sweater.html → automatic redirection to https://myshop.com/en/women/2-9-brown-bear-printed-sweater.html
 

* _Disabling products_

When disabling a product, by default its url redirects (301 redirection) to the main category it belongs to. This can be changed and configured in the SEO tab of the product page. The merchant can either choose :
- 301 redirect to the category of his choice
- 301 redirect to the category of his choice
- 302 redirect to the category of his choice
- 302 redirect to the category of his choice
- No redirect (404)



## SEO FOR CATEGORY PAGES AND PAGINATION


Many categories or product listings can present several pages on front office if the number of products available exceeds the “products per page” number defined in Shop Parameters > Product Settings > Pagination. 

In this situation, when going to page X (after page 1), the category title block is removed. This change has been introduced in 1.7.5 to prevent duplicated content. 


