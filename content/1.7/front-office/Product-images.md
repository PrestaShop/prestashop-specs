---
title: Product Images
weight: 1
---
# Managing product images in front-office #

**Current context**
In 1.7.7, it has been decided to introduce a change in behaviour in product thumbnails following a topwatchers issue : [#12241] (https://github.com/PrestaShop/PrestaShop/issues/12241). To ensure this change did not impact developers' modules, we have also let the possibility to override the image used as cover. 
The following specs aim at detailing what are the different behaviours, in back-office and front office listings and product pages.


**1/ Behaviour in BO**
When creating a “simple” product in back-office, it is possible to add images and define a cover image (which is the default / main image of the product).
This cover image is : 
- automatically assigned for products with only one photo
- editable thanks to an option to change it when the product has several photos attached to it


When creating a product with combinations, it is possible to distinguish photos related to the product and photos related to a specific combination. 
For instance, if a merchant adds 4 photos to his product and then creates a combination, he has several options :
- Select no photo (among the 4 uploaded photos)
- Select one photo  (among the 4 uploaded photos)
- Select several photos  (among the 4 uploaded photos)

![Product images](/img/product-images.PNG)

Product > Combinations > Edit

According to the chosen option, there will be differences in images displayed on front-office, on product listings and product pages. 

The following paragraph aims at detailing all different scenarios. 


**2/ Front-office product listing**
- For a simple product with no combination, the product cover image will always be displayed in product listings.

- For a product with combinations, product listings will display the product cover image by default. 
  - Default behavior uses the cover image
  - It is possible to override the image used as cover thanks to the `actionGetProductPropertiesAfter`


**3/ Front-office product page**
- For a simple product (no combination), its product page will display all images that were uploaded on the back-office: the cover image as the first image and all other images saved for the product in thumbnails

- For a product with combinations, different images can be displayed according to the option chosen (detailed in the previous paragraph) :
  - If no image is selected in the product combination, the behavior will be the same as for simple products: all product images will be displayed, the cover image as the first image and all other images saved for the product in thumbnails

  - If only one photo is chosen for a specific combination, then when going to the combination URL, only this image will be displayed.

  - If several images are chosen for a specific combination, then when going to the combination URL, all selected images will be displayed, the 1st image in the list as the main image and all other images in thumbnails.


- For the canonical URL of a product with combinations, the same images are displayed as the default product combination

