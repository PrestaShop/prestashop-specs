---
title: Product Page
weight: 1
---
# SPECS Progress Bar Modal

- Title - Label
- Progress bar - Shows the completion progress into a bar with the percentage of completion
- warning-alert - it displays the last error message in a warning-alert
- View %x% errors - Button - Opens the Errors log. %x% is the number of errors
    - Errors log - Lists in the modal all the error message in a warning-alert
    - Back to processing - Button - Go back to the Progress bat
    - Download errors log (.txt) - Button - Download the error messages in a text file.
- Stop processing - Button - Closes the modal

The processing 

- Close - Button - Closes the modal

The modal can be closed with the cross or the close button. If the modal is closed during the process, the action is still done

The modal can be closed with the cross or the close button. If the modal is closed during the process, the action is still done

WHEN the completion is finished
| Did it result in any errors ? | Modal is oponed ? | THEN |
| --- | --- | --- |
| No | Yes | The modal is closed and it is displays an alert-success |
| No | No | It is displays an alert-success |
| Yes | Yes | It stays opened |
| Yes | No | It opens the modal  |
