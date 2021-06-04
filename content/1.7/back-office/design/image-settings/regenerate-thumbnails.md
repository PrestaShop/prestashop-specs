---
title: Regenerate Thumbnails
weight: 1
---
Regenerate thumbnails might be a touchy operation for the user.

In order to emphasize the irreversibility of this action, a yellow warning notification should be displayed before the feature's two options:

_Be careful! Depending on the options selected, former manually uploaded thumbnails might be erased and replaced by automatically generated thumbnails._<br/>
_Also, regenerating thumbnails for all existing images can take several minutes, please be patient._, localized in Admin.Design.Notification


## Select an image

[TO BE COMPLETED]


## Erase previous images

In order to avoid the user to delete his previous work to by mistake, the switch button should be set to 'No' by default.

Also, when clicking on 'Regenerate thumbnails', a pop up modal window should display the following message:

`title` = _Regenerate thumbnails_ in Admin.Actions<br/>
`confirm_message` = _Are you sure you want to regenerate thumbnails for the selected images? With the erase option enabled, the previous thumbnails of your selection will be deleted._ in Admin.Design.Notification

`confirm_button_label` = _Regenerate_ in Admin.Actions<br/>
`close_button_label` = _Cancel_ in Admin.Actions
