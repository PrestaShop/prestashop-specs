---
title: Maintenance Mode
weight: 1
---
# **SPECIFICATIONS - MAINTENANCE MODE**

## Authorized ip addresses
_I want to be able to access the front office during maintenance mode from some ip addresses._

In the back office's Shop Parameters > Maintenance page, you can allow a set of ip v4 address to access the front office.
Since 1.7.8 you can add ip v6 addresses and ip subnet cf. issue #[16032](https://github.com/PrestaShop/PrestaShop/issues/16032). 

Ip subnet has to be in CIDR format : something like x.x.x.x/64 or xxxx:xxxx:xxxx:xxxx:0000:0000:0000:0000/64

## Logged-in employees

_As an employee, I want to be able to access the front office during maintenance._

When the 'Enable store for logged-in employees' option is enabled in the back office's Shop Parameters > Maintenance page, any logged-in employee should be able to access the front office even if the store is in maintenance, cf. _to do_ issue #[18932](https://github.com/PrestaShop/PrestaShop/issues/18932).

[TO BE COMPLETED]
