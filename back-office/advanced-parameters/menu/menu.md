# SPECS FOR THE MENU TAB

## HISTORY

For the history, this page was present in 1.6 and allowed to add, edit, delete, activate / deactivate menus and reorganize them thanks to the position column.

![capture d'écran_2791](https://user-images.githubusercontent.com/13449658/93895714-6c724480-fcf0-11ea-8527-544737685059.png)

This page was removed in 1.7.0 because users were deleting menu entries but did not know how to re-add them with the controller name.

## SPECS

The behavior in 1.7.X is:

No "menu" tab in the BO menu (as in 1.7.x)

An "access denied" message when trying to access directly to the URL controller=AdminTabs (as in 1.7.x)

In 1.7.8 a message will be added in the code to indicate to the developers how to access to this page if they want to:

"You reached a page that is not accessible in the 1.7.x version anymore, except if you know the AdminTabs controller. A decision has been made to remove it from the software because it was causing critical issues to many users as it requires a few technical skills. Only the back office access is blocked, the file remains present for the developers who would like to use it as they used to."
