# SPECS FOR THE MENU TAB

## HISTORY

For the history, this page was present in 1.6 and allowed to add, edit, delete, activate / deactivate menus and reorganize them thanks to the position column.

![capture d'écran_2791](https://user-images.githubusercontent.com/13449658/93895714-6c724480-fcf0-11ea-8527-544737685059.png)

This page was deleted in 1.7.0 because merchants were removing menus and then didn't know how to re-add them because don't know how to find th the controller name.

## SPECS

The behavior in 1.7.X was:
No "menu" tab in the BO menu (as in 1.7.x)
An "access denied" message when trying to access directly to the URL controller=AdminTabs (as in 1.7.x)

In 1.7.8 a message will be added in the code to indicate to the developers how to access to this page if they want to