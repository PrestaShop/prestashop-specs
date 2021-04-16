# **SPECIFICATIONS CHECKLIST**


_As a contributor, I want to know how to write complete specifications._

_As a core team member, I want to deliver the most completed specifications in order to have accurate and qualitative development._

Most of the time, **each file corresponds to a specific page or a tab**, whether it comes from the back office, the front office, or a module. It might happen to have a cross-functional feature to specify, that defines wide behaviors and impacts many different pages.

If the specifications template can be shaped depending on the feature, note that **this checklist applies in any case** as it allows everyone to lean on the most thorough specifications possible and therefore bring quality to the PrestaShop project.


## Context information

Whether you are starting from scratch or specifying a use case, you might need to **add some contextual elements**. Answering the 'Why?' and 'What?' questions is an excellent start as it would help the community to understand how to read the specifications.

If the specifications are a bit long or describe several different cases, **do not hesitate to add a table of contents with anchored links** or explain how you structured the file.

Finally, **the key element is the user story**. Feel free to add it whenever it is necessary following this template: _As a [user], I want to [be able to do sthing] so that [I can achieve my outcome]._


## Functional behaviors

- [ ] **Mockups**, if there are any links to share.

- [ ] **Helper cards**, help merchants to have a better understanding of back office pages, they should be specified if there are any.

- [ ] **Empty states**, appears only when there is no value, they should be specified if there are any.

- [ ] **Components**, describe the [feature type](https://devdocs.prestashop.com/1.7/development/components/): table, drop-down selector, input field, switch button, etc. preferably right after the name of the concerned feature.

- [ ] **Default status**, indicate its default state: enable, disable, already filled, selected, etc.

- [ ] **Descriptions**, note how to use it: invalid characters, maximum length, actions triggered, etc.

- [ ] **Multilanguages**, if this component can be localized according to the store's languages.

- [ ] **Help notes**, write down the expected available tooltips, placeholders, help texts, etc.

- [ ] **Notifications**, add the warning, success, error, and information notifications displayed.

- [ ] **Issues**, link the related bugs or improvements it specified if there are any.

- [ ] **RTL**, if the page has some specifics behaviors in a right-to-left language.

- [ ] **Search & sort**, table columns often have search fields and sort, this should be specified for each column if there are.

- [ ] **Bulk actions**, table columns often have bulk-actions drop-down, this should be specified if there are.

- [ ] **Settings wheel**, tables often have a settings wheel with options, this should be specified if there are.

## Impacted pages

Do not forget to **add it to the dedicated file(s) when a feature impacts other places** in the software!

For example, the most common case is activating/deactivating a setting in the back office that automatically enables/disables a field in the front office. In this case, specify both BO and FO behaviors.


## Multistore behaviors

Behaviors **might change when the multistore mode is enabled** (Shop Parameters > General), and it is to specify as well. How is the feature supposed to work with the multistore? In a specific shop context, a group context, and an all shops context?

:point_right: [multistore general specs](./back-office/multistoregeneralspecs.md)

:point_right: [multistore general specs](./broader-topics/multistorespecialsspecs.md)


## Permission settings

Access permissions can be set, based on the various team profiles, in the Advanced Parameters > Team section of the back office. For instance, the SuperAdmin has access to all BO features and, by default, logisticians cannot reach the Orders > Shopping Carts page.

Since the 'View', 'Add', 'Edit', 'Delete', 'Configure', and 'Uninstall' rights of the pages and modules might not be granted to everyone, some **behaviors are likely to change depending on the profile accessing it**. Double-check the feature with this particularity in mind in case it needs to be added to the specifications. ;-)


## Acceptance tests

Last but not least, it will be much appreciated by the QA team if the specifications could contain user acceptance tests. Follow the GIVEN-WHEN-THEN format to write them down: _Given [the context], when [I perform this action], then [I should get this behavior]._

- [ ] **RTL**
- [ ] **Multistore**
- [ ] **Multilanguage**


## Specifications templates

Want to have a precise overview of how should your specifications look like? Browse the different files already available or check our templates in the dedicated directory! Happy contributing!

:point_right: [Specifications templates](./spec-templates)
