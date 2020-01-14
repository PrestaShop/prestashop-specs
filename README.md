## About PrestaShop-specs

PrestaShop-specs contains the specifications of the [PrestaShop](https://github.com/PrestaShop/PrestaShop) software, starting from the PrestaShop 1.7 version.

[PrestaShop](https://github.com/PrestaShop/) being an Open Source project, transparency is one of our Core Values, and it is important for us to make specifications accessible to the community.

Our goal is to have clear and structured specifications available to all. To have a history of the software’s evolutions and to help the people who will be working on it in the future to better understand why we built it this way.

These specifications might help:
- developers who want to understand the expected behaviors of a feature to build,
- developers and users who want to verify if a behavior they are experiencing is normal or is a bug,
- the team maintaining the project, in order to know why some product decisions have been made and to have an overview of the current state of the software,
- anyone who is interested in the project and want to know it better.

The repository is mainained by the [Product team](https://github.com/orgs/PrestaShop/teams/prestashop-product-team/members) at PrestaShop.

For the moment not all specifications are in this repository. They will be created and added progressively. [You can contribute]() !

## What are specifications?

To quote [Joel Spolsky](https://www.joelonsoftware.com/2000/10/03/painless-functional-specifications-part-2-whats-a-spec/),

- A *functional* specification describes how a product will work entirely from the user’s perspective. It doesn’t care how the thing is implemented. It talks about features. It specifies screens, menus, dialogs, and so on.
- A *technical* specification describes the internal implementation of the program. It talks about data structures, relational database models, choice of programming languages and tools, algorithms, etc.

Having specifications is critical when building a new feature.
But it is also useful to save them and to be able to browse them later, to understand how a feature is working and what are the expected behaviors.
That is why we decided to create this repository.

Our specifications at PrestaShop are mostly functional, but includes some technical information too, when needed.

Advanced technical concepts are convered in the [Developer Documentation](https://devdocs.prestashop.com).


## How does this repository work?

To easily track all specifications evolutions in the future we decided to use the [Git data model](https://git-scm.com/about/info-assurance).

Each addition or modification of a spec file must be done through the creation of a Pull Request (PR) in which the reasons for such modification must be detailed.

It is thus possible to check how was the specs a feature before, by using git tools to compare the differences in content. And to know why it was modified in the Pull Request description.

(The use of branches to have up-to-date specs for each version is under consideration.)


### Process when working on a new feature or an improvement

Everytime a developper works on PrestaShop, he/she is assigned or self-assigned n development issue. Each issue corresponds to a task.
These development issues are located in the [PrestaShop repository](https://github.com/PrestaShop/PrestaShop) `github.com/PrestaShop/PrestaShop`.

In order to solve the task, a developer needs specifications.
These specifications are located here in this repository.

So in each development issues we add a link to the correponding specification.

If the development issue is about a new feature, then the specifications must be written and validated by the Product team first.
Following the use of PR detailed in the previous part, the specification must be located in the corresponding file or files in a PR. The link in the development issue must be link to the specifications in the PR.

The specifications PR can be merged only when the developer is done, and the new feature has been merged into the PrestaShop develop branch in the repo PrestaShop/PrestaShop.

![Management of PrestaShop specifications](/img/prestashop-specs-management.jpg)


### Process when working on a bug

Two cases:
- If the corresponding specification exists
Then add a link in the development issue to the specification.


- If the specification doesn't exist
Then, first you need to validate the right behavior that should be specified with the Product team.
Then, you need to follow the same process as for a new feature or improvement by creating a PR. The difference is that here the PR can be merge directly.


## Specification structure

This is the main template to follow to write specifications.

![Usual specification structure](/img/prestashop-specs-template.jpg)

When possible, each file corresponds to a page.

When not possible, template can be adadpted, but it is important to have all the information listed in the template.


## Repository tree

The repository has 3 main directories, Back-office, Front-office and images.

The Back-office directory follows the back-office structure.

The Front-office directory list the pages in the Front-office and shared behaviors.


General FO

General BO
text

UI Kit

*  [Symfony Migration](https://github.com/PrestaShop/prestashop-specs/blob/master/symfony-migration.md)


 \* \* \*Dashboard

Orders
Orders

*  [List Page](https://github.com/PrestaShop/prestashop-specs/Order-List.md)
*  [Add/Edit Page](https://github.com/PrestaShop/prestashop-specs/Order-Add.md)

Invoices

*  [List Page](https://github.com/PrestaShop/prestashop-specs/Order-List.md)
*  [Add/Edit Page](https://github.com/PrestaShop/prestashop-specs/Order-Add.md)

Credit Slips

*  [List Page](https://github.com/PrestaShop/prestashop-specs/Order-List.md)
*  [Add/Edit Page](https://github.com/PrestaShop/prestashop-specs/Order-Add.md)

Delivery Slips

*  [List Page](https://github.com/PrestaShop/prestashop-specs/Order-List.md)
*  [Add/Edit Page](https://github.com/PrestaShop/prestashop-specs/Order-Add.md)

Shopping Carts

*  [List Page](https://github.com/PrestaShop/prestashop-specs/Order-List.md)
*  [Add/Edit Page](https://github.com/PrestaShop/prestashop-specs/Order-Add.md)


Products
Products

*  [Add / edit product page](https://github.com/PrestaShop/prestashop-specs/blob/master/Catalog-products-add-edit.md)

Categories

*  [List Page](https://github.com/PrestaShop/prestashop-specs/Order-List.md)
*  [Add/Edit Page](https://github.com/PrestaShop/prestashop-specs/Order-Add.md)

Monitoring

*  [List Page](https://github.com/PrestaShop/prestashop-specs/Order-List.md)
*  [Add/Edit Page](https://github.com/PrestaShop/prestashop-specs/Order-Add.md)

Attributes & Features

*  [List Page](https://github.com/PrestaShop/prestashop-specs/Order-List.md)
*  [Add/Edit Page](https://github.com/PrestaShop/prestashop-specs/Order-Add.md)

Brands & Suppliers

*  [List Page](https://github.com/PrestaShop/prestashop-specs/Order-List.md)
*  [Add/Edit Page](https://github.com/PrestaShop/prestashop-specs/Order-Add.md)

Files

*  [List Page](https://github.com/PrestaShop/prestashop-specs/Order-List.md)
*  [Add/Edit Page](https://github.com/PrestaShop/prestashop-specs/Order-Add.md)

Discounts

*  [Cart rules](https://github.com/PrestaShop/prestashop-specs/Order-List.md)
*  [Catalog Price rules](https://github.com/PrestaShop/prestashop-specs/blob/master/catalog-price-rules.md)

Stocks

*  [List Page](https://github.com/PrestaShop/prestashop-specs/Order-List.md)
*  [Add/Edit Page](https://github.com/PrestaShop/prestashop-specs/Order-Add.md)


Customers
Customers

*  [List Page](https://github.com/PrestaShop/prestashop-specs/blob/master/Customers-Customers.md)
*  [Add/Edit Page](./)

Addresses

*  [List Page](https://github.com/PrestaShop/prestashop-specs/Order-List.md)
*  [Add/Edit Page](https://github.com/PrestaShop/prestashop-specs/Order-Add.md)


Customer Service
Customer Service

*  [List Page](https://github.com/PrestaShop/prestashop-specs/Order-List.md)
*  [Add/Edit Page](https://github.com/PrestaShop/prestashop-specs/Order-Add.md)

Order Messages

*  [List Page](https://github.com/PrestaShop/prestashop-specs/Order-List.md)
*  [Add/Edit Page](https://github.com/PrestaShop/prestashop-specs/Order-Add.md)

Merchandise Returns

*  [List Page](https://github.com/PrestaShop/prestashop-specs/Order-List.md)
*  [Add/Edit Page](https://github.com/PrestaShop/prestashop-specs/Order-Add.md)


Stats
Modules
Module Catalog

*  [List Page](https://github.com/PrestaShop/prestashop-specs/Order-List.md)
*  [Add/Edit Page](https://github.com/PrestaShop/prestashop-specs/Order-Add.md)

Module Manager

*  [List Page](https://github.com/PrestaShop/prestashop-specs/Order-List.md)
*  [Add/Edit Page](https://github.com/PrestaShop/prestashop-specs/Order-Add.md)

Modules

*  [Faceted search](https://github.com/PrestaShop/prestashop-specs/blob/master/ps_facetedsearch.md)

&lt;/details&gt;


Design
 Theme & Logo Theme Catalog Pages Positions Image Settings Link Widget &lt;/details&gt;


Shipping
 Carriers Preferences &lt;/details&gt;


Payment
 Payment Methods Preferences &lt;/details&gt;


International
 Localization Locations Taxes Translations &lt;/details&gt;


Shop Parameters
 General Order Settings Product Settings Customer Settings Contact Traffic & SEO Search Merchant Expertise &lt;/details&gt;


Advanced Parameters
 Information Performance Administration E-mail Import Team Database Logs Webservice &lt;/details&gt;



## Learn more about PrestaShop

You can visit the [PrestaShop](https://github.com/PrestaShop/PrestaShop) repository to learn more about the project, the [Developer Documentation](https://devdocs.prestashop.com/1.7/basics/introduction/) and the [user Documentation](http://doc.prestashop.com/).
