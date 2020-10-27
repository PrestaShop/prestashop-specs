# SPECIFICATIONS - ADVANCED PARAMETERS &gt; WEBSERVICE

## Grid

_WebserviceKeyDefinitionFactory.php_ Default action in the button: Edit Other available actions in the menu: Delete Row action: Edit

Row action does not apply to the ID's checkbox column and columns with enable/disable actions.

## Add new / Edit webservice key

The "Add new webservice key" or "Edit webservice key" buttons redirect the user to the webservice key creation form. The form is composed of:

- **Key***: A mandantory field limited to 32 character long that have to be unique. The webservice key can't be saved if the key is already used by another webservice account.

_Help text_: "Webservice account key."

The user can fulfill the input or choose generated it by clicking the "Generate" button. Pressing the "Generate" button if a key is already enter will replace it with a new key gerenated.
A generated keys are most of the time safer because they are harder to guess.

- **Key description**: Text area

A reminder of who that key is for, and what it gives access to.

_Help text_: "Quick description of the key: who it is for, what permissions it has, etc."

- **Status**: Toggle (YES/NON)

The toggle enabled temporarily grant access to the data for anyone who has the right key.

On top of the tabale, an information notification i displayed : "Set the resource permissions for this key:".

- **Permissions**: A check table
the first axe is the ressources and the second axe is the permission's type.
The permissions's type are: View (GET),Modify (PUT), Add (POST)	Delete (DELETE)	Fast view (HEAD).
The ressources is retrieve automa

The user can choose the access of permissions by section or permission's type. 

The list of The user can grant all the permissions type for one resource by checking the checkbox All. He can grant all resource for one permission type.


- **Host check**:

A toggle "Host check" is displayed at the end of the form. By default, the toggle is disabled.
If enabled, a text area "Host allowed" is displayed to enter all the allowed IPs. They must be split by a comma.

If the user has enabled the "Host check" and saves the form without entering any IP, then an error is thrown, the user stays on the current page and the saving is canceled.

If saved when the user edits the web service key, all the information (list of IPS allowed and the saved configuration) must be displayed.

If the text area contains URLs and the user disables the "Host check", on the reactivation of the "Host check" the old URLs are displayed again in the text area. (Bonus, if it can't be done: the text area is cleared each time it is deactivated)

Click "Save" when your key is ready.

The webservice key can't be saved if the key is already used by another key.

Click "Cancel" when your key is ready.

**Missing wording or wording to be challenged**:

- Host check is it enough explicit
- small text bellow the toggle "Host check"
- small text bellow the text is "Host allowed" if needed
