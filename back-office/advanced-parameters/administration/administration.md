# **SPECIFICATIONS - ADMINISTRATION PAGE**


## General

_As a user, I want to be able to turn my online store into a products catalog._

**Addons API stability channel.** Available **in development environment only**, starting from PrestaShop 1.7.8, cf. issue #[18273](https://github.com/PrestaShop/PrestaShop/issues/18273). It is a dropdown selector containing three options to **let the users choose what kind of stability level they want to use for their Addons modules**:

_Stable_<br>
_Alpha_<br>
_Beta_

By default, the _Stable_ option is selected. A tooltip is available, _Choose a stability level for the modules downloaded from Addons Marketplace. All zips pushed on Addons are in stable state unless stated otherwise._ in `Admin.Advparameters.Help`.

In a production environment, this feature can only be modified in the database to prevent less technical users from a bad configuration that could affect the store.
