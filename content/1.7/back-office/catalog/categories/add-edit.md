---
title: Category Page
weight: 1
---
# SPECS CATEGORY PAGE

As a merchant I need to be able to correctly create, edit and delete my categories.

## SPECIFICATIONS

When I disable a category, I expect it to still be present in as a parent in the category tree _\(issue 14790\)_

### Group access
When I add a category, all the customers groups should be selected by default, even the one created by the merchant  _\(issue 20691\)_


 

- **Bottom description:**

| Properties |  Values | Error message |
| --- | --- | --- |
| Type field | Text Area |  |
| Allowed Caracters | All |  |
| Default value | Empty |  |
| Help Text | N/A |  |
| Upper limit | 21844 |  |
| Behavior | - WHEN fullfilled THEN it displays bottom category description.<br>- WHEN it is empty THEN the block is not displayed in the Front Office. |  |
