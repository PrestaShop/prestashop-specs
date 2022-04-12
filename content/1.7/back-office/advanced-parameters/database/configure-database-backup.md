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