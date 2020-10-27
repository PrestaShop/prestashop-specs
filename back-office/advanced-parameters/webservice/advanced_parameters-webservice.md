# SPECIFICATIONS - ADVANCED PARAMETERS &gt; WEBSERVICE

## Grid

_WebserviceKeyDefinitionFactory.php_ Default action in the button: Edit Other available actions in the menu: Delete Row action: Edit

Row action does not apply to the ID's checkbox column and to columns with enable/disable actions.

## Add new / Edit webservice key

The "Add new webservice key" or "Edit webservice key" buttons redirect the user to the webservice key creation form. The form is composed of:

- Key. A unique key. 

You can either create your own, or choose to use a generated one, for instance by clicking the "Generate!" button or by using any online key generator. Generated keys are most of the time safer because they are harder to guess.

- Key description. 

A reminder of who that key is for, and what it gives access to.

- Status. 

You can disable a key anytime. This enables you to only temporarily grant access to your data from a certain key.

- Permissions. 

You do not have to share ALL your data with each key. You can choose among a wide array of permissions, either by section or by type of access. You might want some applications to only be able to view a handful of items, while some others (for instance, ones that you would use to manage the shop remotely) should be able to edit and delete just about everything. Choose wisely.

- Host check

A toggle "Host check" is displayed at the end of the form. By default, the toggle is disabled.
If enabled, a text area "Host allowed" is displayed to enter all the allowed IPs. They must be split by a comma.

If the user has enabled the "Host check" and saves the form without entering any IP, then an error is thrown, the user stays on the current page and the saving is canceled.

If saved when the user edits the web service key, all the information (list of IPS allowed and the saved configuration) must be displayed.

If the text area contains URLs and the user disables the "Host check", on the reactivation of the "Host check" the old URLs are displayed again in the text area. (Bonus, if it can't be done: the text area is cleared each time it is deactivated)

Click "Save" when you your key is ready.
Click "Cancel" when you your key is ready.

**Missing wording or wording to be challenged**:

- Host check is it enough explicit
- small text bellow the toggle "Host check"
- small text bellow the text is "Host allowed" if needed
