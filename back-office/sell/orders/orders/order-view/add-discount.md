# SPECIFICATIONS - Adding discount from "order view" page


Merchant is in "order view" page (/sell/orders/orders/6/view).

Merchant clicks on "Add a discount button".

Merchant is given a modal with a form.



## The form

Form contains 3 inputs.

* Name
* Type
* Value

and 2 buttons (Save and cancel).

#### Name
1- This is a text input field.

2 -It has a label : "Name".

4- Validation: 

* client-side : this field should not be empty.
* server-side : do not accept empty, or not safe values.


#### Type
1- This is a select input with 3 options.

2  Options are named : "Percent", "Amount" and "Free Shipping" strings.

3- Default option is "Percent".

4- Validation: 

* client-side : None
* server-side : do not accept values out of the above list.



### value

1- This appears only if selected type is "Percent" or "Amount.

2- This is an input for numeric values.

3 - It has a label : "Value".

4 - It contains 2 parts:
 * a symbol "%" if selected type is "Percent" and "$" if selected type is "Amount".
 * a numeric input with up/down arrows. 

5 - Validation:
* client-side : this field is required if selected type is "Percent" or "Amount",  else, non required.
* server-side : if selected type is "Percent" value should be between 0 and 100, if selected type is "Amount" value should be between 0 and total.

### cancel button
Closes the modal, equivalent to clicking outside the form.



### save button
Redirects to "order view" page (full redirection and not modal closing).