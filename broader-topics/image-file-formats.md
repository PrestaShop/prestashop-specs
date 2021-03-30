# **SPECIFICATIONS - IMAGE FILE FORMATS**


_As a merchant, I want to be able to use the best web suitable images on my store, such as .png, .svg, or .webp._

## Introduction

Several issues have been brought to our attention on GitHub, especially on the need for PrestaShop to support more image formats. Indeed, images have great business value for online stores and their formats have quite evolved since the release of PrestaShop 1.7.

So it is time for us to define the image formats we want to support and take this opportunity to specify behaviors! Goal here is to add missing useful formats, not to remove already supported ones to avoid breaking changes.

:point_right: https://github.com/PrestaShop/PrestaShop/issues/18518


## Context

In the core of PrestaShop, image formats that are currently supported are: .gif, .jpg, .jpeg and .png. All formats supported are mentioned in the [ImageManager file](https://github.com/PrestaShop/PrestaShop/blob/7633be8294d90148d2bdfe3fd1c2d403e72ec91b/classes/ImageManager.php), and defined by MIME / Library GD.

GD support theses formats: https://www.php.net/manual/en/intro.image.php

What defines an image format? Both its MIME type and its extension are checked because GD needs a correct MIME type and the extension is needed for a correct URL. A MIME type represents a file type - you can put any extension in any file type.

Images are uploaded right where they need to appear, on the page concerned, they are not handled by any media center accessible in the back office.


## PrestaShop

Below is the list of the BO pages where images can be uploaded:

- Brands
- Categories
- Files
- Products
- Stores
- Suppliers

- Header logo
- Mail / Invoice logo
- Favicon

As for modules, images are requested for:

- Banner
- Image Slider
- Block Reassurance

Regarding the FO, images can be uploaded though:

- Contact form
- Customized product page


## Add SVG & WEBP support

### Back office & modules

**SVG.** Decision has been made to first focus on all images upload available in the back office, except for the favicon and the email logos in the Design > Theme & Logo page.

Favicons are a specific case using precise image formats and it should be addressed later. And the email support for SVG format is too limited for now.

**WEBP.** Decision has been made to first focus on all images upload available in the back office, except for the favicon, the email, and the invoice logos in the Design > Theme & Logo page.

Favicons are a specific case using precise image formats and it should be addressed later. Same for the email and PDF documents that do not enough support WebP images for now.


### Front office 

Customers can upload images in two places in the front office: in the contact form and on a customized product page. Images formats allowed are: .png, .jpg, and .gif. Expected behavior should be to **add the .svg format to this list** since one of its great advantages is that it allows resizing with limited loss of quality.

As for the .webp format, it does not seem very relevant to add it to this list. Indeed, **the use case is not adapted** to poor email support nor prone to improving performance.
