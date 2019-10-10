**44 | Design > Theme & Logo > Theme & Logo**

 This page refers to the issue : #10576  
The page can have extra sections if I have many themes installed, if I enable multi-store feature if I have languages who needs RTL features or if I have MBO module installed.

**A) BASIC STATE**

1) Header : 
There are 4 button : 
Add new theme bring to => Design > Theme & Logo > Add new theme
Export current theme => Generate a zip of the current theme used at the root of theme file 
Recommended modules => pop up recommended modules 
Help => open the help section on the page (this section appear on many different pages 


2) Menu: 
In the menu there are 3 elements : 
Theme and logo page (current page)
And those 2 pages who come from the module Theme customization. 
IMPROVEMENT to do : If the module is disabled, hide those 2 pages from the menu (on 1.7.5 it’s hidden) 
Configuration of home page 
Advanced Personnalisation 

3) Theme preview:
This block show preview of the theme and if i click on it, it redirect me to my website 

4) Choose layouts button :
After click on choose layouts button, we end up on a different page :  
Design > Theme & Logo > Choose layouts

5) Logo and favicons :
 I can : 
import my header logo and after saving i can have preview of the header logo 
Import my logo for emails and bills (if i don’t import something it use header logo by default) 
Import my favicon (if not defined use basic favicon of Prestashop) 
IMPROVEMENT to do : when i import a logo it’s not resized it must be to avoid the breaking of the page) 

6) Visit the theme catalog button:
The button “Visit the theme catalog” redirect to this link 



**B) THEME INSTALLED**
If i import a theme and if i select a shop a section appear on the bottom of the page after hover, a button use this theme appear,on click, the current theme is switched with the one selected and the preview of theme +used change with the theme chosen.

If i don’t select a shop and i select the group of shop this appear instead of the theme section : 




**C) MULTI STORE STATE**
If i activate multi store, multi store section will appear only if i click on a shop(here : derek ortega or testshop) or i select the group of shop(here : default group) (except all shops) 


1) Selection: 
As said before i selected the shop “Derek Ortega” (i could also select the group of shop but not “All shops”) 
2) Multi store section: 
Multi store section appear on the page Theme & logo,
If i click on yes it will check all checkbox of section 4 (including logo/invoice&email logos/ favicons) 
If i  click on no, it will uncheck all checkbox of the section 4 and disable the add file button as seen section 5 (including lbutton of add logo/invoice&email logos/ favicons)
  
**D) DEBUG MODE**
3) Reset to defaults button : 
The button “reset to defaults” appear next to “choose layouts” button
It allows to rest to default all modification made on the page choose layouts 


**E) RTL STATE**
If i have language who support RTL on my store (like Arabic or Hebrew) even if it’s not the language selected, This section appear at the bottom of the page :

You can select a theme and generate a RTL stylesheet. 

If you have Multi Store + RTL language you have a yes/no button and checkbox next to “theme to adapt” and “generate rtl stylesheet” 
If you check no on multistore the next to element will be disabled but if you check yes on multistore or if you check the checkbox, elements will be enabled. 

**F) MBO**
If MBO module is installed, on the footer this section will appear. 
Always on the bottom of the page 
