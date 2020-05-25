## About PrestaShop-specs

PrestaShop-specs contains the specifications of the [PrestaShop](https://github.com/PrestaShop/PrestaShop) software, starting from the PrestaShop 1.7 version.

[PrestaShop](https://github.com/PrestaShop/) being an Open Source project, transparency is one of our core values, and it is important for us to make specifications accessible to the community.

Our goal is to have clear and structured specifications available to all. To have a history of the software’s evolutions and to help the people who will be working on it in the future to better understand why we built it this way.

These specifications might help:
- developers who want to understand the expected behaviors of a feature to build,
- developers and users who want to verify if a behavior they are experiencing is normal or is a bug,
- the team maintaining the project, in order to know why some product decisions have been made and to have an overview of the current state of the software,
- anyone who is interested in the project and want to know it better.

The repository is mainained by the [Product team](https://github.com/orgs/PrestaShop/teams/prestashop-product-team/members) at PrestaShop.

For the moment not all specifications are in this repository. They will be created and added progressively. Contributions are Welcome!


## What are specifications?

To quote [Joel Spolsky](https://www.joelonsoftware.com/2000/10/03/painless-functional-specifications-part-2-whats-a-spec/),
- A *functional* specification describes how a product will work entirely from the user’s perspective. It doesn’t care how the thing is implemented. It talks about features. It specifies screens, menus, dialogs, and so on.
- A *technical* specification describes the internal implementation of the program. It talks about data structures, relational database models, choice of programming languages and tools, algorithms, etc.

Having specifications is critical when building a new feature.
But it is also useful to store them and to be able to browse them later, to understand how a feature is working and what are the expected behaviors.
That is why we decided to create this repository.

Our specifications at PrestaShop are mostly functional, but include some technical information too, when needed.

Advanced technical concepts are covered in the [Developer Documentation](https://devdocs.prestashop.com).


## How does this repository work?

To easily track all specifications evolutions in the future we decided to rely on the [Git data model](https://git-scm.com/about/info-assurance).
Each commit to the repository is saved, allowing anyone to navigate through a specification's history.

Moreover, each addition or modification of a spec file must be done through the creation of a Pull Request (PR) in which the reasons for such modification must be detailed.

It is thus possible to check how was the specs a feature before, by using git tools to compare the differences in content. And to know why it was modified in the Pull Request's description.

*(The use of branches to have up-to-date specs for each minor version of PrestaShop is under consideration.)*


### Relation between the specifications repository and the development repository

Everytime a developper works on PrestaShop, he/she is assigned or self-assigned a development issue. Each issue corresponds to a task.
These development issues are located in the [PrestaShop repository](https://github.com/PrestaShop/PrestaShop) `github.com/PrestaShop/PrestaShop`.

In order to complete the task, most of the time, a developer needs specifications.
These specifications are located here in this repository `github.com/PrestaShop/prestahop-specs`.

So in each development issue should be a link to the correponding specification.


### Process when working on a new feature

Considered the use of the git data model detailed in the previous part, the specification must be added to the corresponding file (or files) through a Pull Request.
If the file related to this feature doesn't exist yet, it should be created.

The specifications must then be validated by the Product team before the development begins.

Once the specs are validated, the link to this PR must then be addded in the development issue, so the developer can easily find the specifications associated with the issue.

The specifications' PR can only be merged once the development is done, and merged into the PrestaShop develop branch in the repo `PrestaShop/PrestaShop`.
This rule is made to avoid having published specifications for features that are not available yet. The published specifications must correspond to the latest Stable version available.

![Management of PrestaShop specifications](/img/prestashop-specs-management.jpg)


### Process when working on a bug

Two cases:
- If the corresponding specification exists
Then add a link in the development issue to the specification in the master branch of this repository.


- If the specification doesn't exist
Then, first you need to validate with the Product team what is the right behavior that should be specified.
Then, you can follow the same process as for a new feature or improvement, by creating a PR. The difference is that here the PR will be merge directly after validation as the specified behavior should be in the latest Stable version.


## Specification structure

This is the main template to follow to write specifications.

![Usual specification structure](/img/prestashop-specs-template.jpg)

When possible, each file corresponds to a page.

When not possible, template can be adapted, but it is important to have the information listed in the template as possible.


## Repository tree

The repository has 4 main directories, `back-office`, `front-office`, `broader-topics` and `modules`.

- The `back-office` directory mostly follows the back office structure. Most files contain the specifications for a BO page.

- The `front-office` directory lists the pages in the front office and shared behaviors throughout the pages.

- The `broader-topics` directory covers all topics and behaviours shared throughout the software, and that are not limited to the BO or FO.

- The `modules` directory includes all specifications for modules.

`img` is used to store images used in the specs and `specs-templates` to store the templates.


## How to contribute

Contributions are welcome!
To learn more, please have a look at the [CONTRIBUTING.md](/CONTRIBUTING.md) page.

## Learn more about PrestaShop

You can visit the [PrestaShop](https://github.com/PrestaShop/PrestaShop) repository to learn more about the project, the [Developer Documentation](https://devdocs.prestashop.com/1.7/basics/introduction/) and the [user Documentation](http://doc.prestashop.com/).
