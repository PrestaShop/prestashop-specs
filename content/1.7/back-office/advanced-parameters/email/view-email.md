---
title: View e-mail
weight: 1
---

# E-mail

3 separate blocks are displayed in this page

## Email 

In this section the emails, and the count of them are displayed.

### Settings wheel

When clicking on the settings wheel, the following options are displayed:

1) Import

After clicking on it, the Advanced parameters > Import page is opened.

2) Refresh list

After clicking on it, the page is reloaded. 

3) Show SQL query

After clicking on it, the SQL query is displayed in a modal. The SQL query takes into account the emails.

There are two buttons:

- Close: After clicking on it, the modal is closed
- Export to SQL Manager: After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

4) Export to SQL Manager

After clicking on it, the SQL query is opened in Advanced parameters > Database > SQL Manager

## Email

In this section 2 fields are presented:

 1) Send emails to

This is a drop-down field, that contains the following options:

 - Customer service (default option)
 - Webmaster

Help text below is shown: "Where customers send messages from the order page."

2) 3 options can be selected below the first field:

 - Use /usr/sbin/sendmail (recommended; works in most cases), this is the default option selected.
 - Set my own SMTP parameters (for advanced users ONLY), when selected, 6 additional fields below appear:
    - Email domain name, has a help text below: "Fully qualified domain name (keep this field empty if you don't know).".
    - SMTP server, by default there is "smtp." entered. Has a help text below: "IP address or server name (e.g. smtp.mydomain.com).".
    - SMTP username 
    - SMTP password, when saved the entered password disappears for security purposes.
    - Encryption, mandatory drop-down field, can select: TLS, SSL or none. Has a help text below: "SSL does not seem to be available on your server."
    - Port, by default number "25" is entered. Has a help text below: "Port number to use.".
 - Never send emails (may be useful for testing purposes)
 
3 options are listed below, only 1 can be selected:

 - Send email in HTML format
 - Send email in text format
 - Both

3) Log emails, this is a mandatory toggle switch, by default is set to "Yes."

A "Save" button is displayed at the bottom of this section, when pressed, a message appears: "The settings have been successfully updated.".

## Test your email configuration 

1 field is presented:

 - Send a test email to, displays the admin user email entered in the field.

Below there is a button: 

 - Send a test email, when pressed, if the SMTP is not setup correctly, will show the error:Error: "Please check your configuration
Connection could not be established with host smtp. :stream_socket_client(): php_network_getaddresses: getaddrinfo failed: Temporary failure in name resolution"

If the SMTP is setup correctly, when the button is pressed, this message will be shown: "A test email has been sent to the email address you provided." And the test email will be sent to the address that was input.
