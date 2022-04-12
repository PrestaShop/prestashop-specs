---
title: DB Backup
weight: 1
---

# ADVANCED PARAMETERS > DATABASE > DB BACKUP

![Database Backup UI](static/img/configure-db-backup.png)

This UI displays the webshop Databse backuping functionality features.

## Top UI section

- **Multishop switcher** - it is an ability to switch the available multistores while being on the current Database backup page, and to view the shop Front-Office homepage by redirection.
- **Breadcrumbs, page title, Recommended modules and Help CTA's** - default Prestashop UI in the top position, helping administrators to improve the navigation - to view the current Title of the page, see the level of the navigation.
- **Tabs** - there are 2 tabs in the DB Backup section:
  - **SQL Manager**
  - **DB Backup** - highlighted tab.

## Top notifications

First blue-boxed **notification**, that informs about All Shops context - _Note that this feature is available in all shops context only. It will be added to all your stores._, meaning, that the Database backups will be taken from all the shops at the same time, not related to single webshop. 

**Disclaimer** - effective reminding plan for webshop administrator, before creating a Database backup. The disclaimer is printed out in yellow box notification, with warning symbol - exclamation mark in yellow triangle. The text is:

```
Disclaimer before creating a new backup

    1. PrestaShop is not responsible for your database, its backups and/or recovery.
    2. PrestaShop is open-source software. You are using it at your own risk under the license agreement.
    3. You should back up your data on a regular basis (both files and database).
    4. This function only backs up your database, not your files.
    5. By default, your existing database tables will be dropped during the backup recovery (see "Backup options" below).
    6. Always verify the quality and integrity of your backup files!
    7. Always verify that your backup files are complete, up-to-date and valid, even if you had a success message appear during the backup process.
    8. Always check your data.
    9. Never restore a backup on a live site.
```
- **PrestaShop is not responsible for your database, its backups and/or recovery.** - meaning, that all the database entries are unique, when there are design or code development modifications in Prestashop application, the shop administrator should take the responsibility about the data saving for himself.
- **PrestaShop is open-source software. You are using it at your own risk under the license agreement.** - meaning, that Prestashop can be modified by the custom development, and many developers or other software development roles can contribute to the Prestashop software. More information about the licence can be accessed in the Prestashop's ![FAQ page](https://www.prestashop.com/en/faq).
- **You should back up your data on a regular basis (both files and database)** - meaning, that the webshop database and files copy should be saved to the cloud or server space regulary in order to have a secure backup, in case there is something broken in the Prestashop.
- **This function only backs up your database, not your files.** - meaning, that there will ba a SQL format dump created only except the files copy.
- **By default, your existing database tables will be dropped during the backup recovery (see "Backup options" below)** - meaning, that during the database backup process, the old database information will be wiped off, and the backuped data only will be inserted into the Prestashop.
- **Always verify the quality and integrity of your backup files!** - meaning, that the database dump should be verified by techincal team member, to verify the quality of the database file, in other cases, if the database dump file is somehow corrupted, it could permanently damage the Prestashop application during the finish of recovery.
- **Always verify that your backup files are complete, up-to-date and valid, even if you had a success message appear during the backup process.** - means, that before the files backup process, files needs to be reviewed by a member of technical team, in order to check if the files are not corrupted.
- **Always check your data.** - means, that the information of the database should be double checked.
- **Never restore a backup on a live site.** - means, that the owner of the shop should not restore database backup right on the live production website, because if there is a failure in backuping process, huge amount of site visitors can be lost.

- **CTA button "I have read the disclaimer. Please create a new backup." with a Save material icon** - once clicked, the Prestashop initiates the database file creation in background, until there is a green successful notification message with green checkmark icon, and text called _It appears the backup was successful, however you must download and carefully verify the backup file before proceeding_, meaning that the creation succeeded. Right after the notification, a material-style cloud icon and the title _Download_ section appears. The section contains:
  - **CTA Download the backup file ({size of file} MB)** - initiates the .bz2 archive file download process.
  - _Tip: You can also download this file from your FTP server. Backup files are located in the "/adminXXXX/backups" directory._

Easy steps plan in blue notification block with information material icon, contains an understandable self-explanatory steps to process for webshop owner:

```
How to restore a database backup in 10 easy steps

1. Set "Enable Shop" to "No" in the "Maintenance" page under the "Preferences" menu.
2. Download the backup from the list below or from your FTP server (in the folder "admin/backups").
3. Check the backup integrity: Look for errors, incomplete file, etc... Be sure to verify all of your data.
4. Please ask your hosting provider for "phpMyAdmin" access to your database.
5. Connect to "phpMyAdmin" and select your current database.
6. Unless you enabled the "Drop existing tables" option, you must delete all tables from your current database.
7. At the top of the screen, please select the "Import" tab
8. Click on the "Browse" button and select the backup file from your hard drive.
9. Check the maximum filesize allowed (e.g. Max: 16MB)
10.If your backup file exceeds this limit, contact your hosting provider for assistance.
11.Click on the "Go" button and please wait patiently for the import process to conclude. This may take several minutes. 
```

## DB Backup section

- **Title and the total backups in brackets**
- **Bulk actions dropdown** - it is disabled by default, once there is a Database backup element selected, Bulk actions become enabled. The only action is **Delete** action.
- **Checkboxes** - enables ability to select desired backups.
- **Date** - actual timestamp, when the database file is created - the format is MM/DD/YYYY HH:MM:SS.
- **Age** - counts the time that passed from the database file creation.
- **Filename** - exact database archive file name stored.
- **Filesize** - exact database archive file size displayed.
- **Material cloud-style download icon** - once clicked, it initiates the archive download.
- **Three-dot menu** - once clicked, the dropdown will be shown with the only option - **Delete** the database file.

## Backup options

Section contains 2 toggle buttons:

- **Ignore statistics tables** - required option, by default, the toggle button is disabled. If button is enabled - drops the following tables during the backup of the database - _ps_connections, ps_connections_page ps_connections_source, ps_guest, ps_statssearch_. The description text is - _Drop existing tables during import.
ps_connections, ps_connections_page ps_connections_source, ps_guest, ps_statssearch_.
- **Drop existing tables during import** - required option, by default, the toggle button is enabled, the database backup process will drop all the database tables, and then initiate the new backuped restoration. The description text is - _If enabled, the backup script will drop your tables prior to restoring data. (ie. "DROP TABLE IF EXISTS")_.

## Multistore functionality

Database backuping functionality is available in All Shops or in separate shop context. The backup or restore will be done for all the Shops simultaneously.
