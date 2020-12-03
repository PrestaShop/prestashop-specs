# **SPECIFICATIONS - CUSTOMER ACCOUNT**


[TO BE COMPLETED]

## Personal information


**Birthdate.** If the merchant has enabled the 'Ask for birth date' option in the Customer Settings > Customers page of the back office, logged-in customers should be able to see this date field once in their 'Personal information' section. A placeholder is here to help customers know how to fill in this field, 'MM/DD/YYYY', and a help text is displayed just below the field to give an example: `(E.g.: %date_format%)` (with the date '05/31/1970' taken as a model) in `Shop.Forms.Help`.

Only numbers and the slash (/) punctuation mark can be typed in the field. Month and day numbers cannot be reversed. Otherwise, an error notification is displayed when attempting to save: `Format should be %s.` (with the same date '05/31/1970' taken as a model) in `Shop.Forms.Error`.

**Receive offers from our partners.** If the merchant has set the 'Enable partner offers' option to 'Yes' in the Customer Settings > Customers page of the back office, logged-in customers should be able to see this checkbox once in their 'Personal information' section.


## Order history and details

_As a customer, I want to be able to access my order documents in my personal account._

Logged-in customers should view and download their invoices and delivery slips in their language (= in the language used by the customers in the front office).
