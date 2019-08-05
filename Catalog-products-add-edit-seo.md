**As a merchant I want to be able to manage my SEO information for my products.**

Here is the list of the elements of SEO tab:

- **SEO preview**: It is a preview of your search engine result, it allows to see how your product page will appear in search engines results. If the meta title field is empty, the product name is displayed. If I edit the product name and if there is nothing in the meta title field, it’s displayed directly in the preview. If I change the name of the product, the preview will not change until the meta title field is complete. 
If the meta description field is empty, the product description is displayed. If I click on Basic Settings, change the description, save, refresh the page and return to SEO, the description of the preview has changed. When you start to complete meta title, meta description  and friendly URL fields, it’s displayed directly in the preview. The preview is displayed in the selected language. Issue 14984

- **Meta title**: There is a placeholder: “To have a different title from the product name, enter it here.” This data is displayed in the code of the page in the <title> tag. If the field is empty, the product name will be used. A counter indicates the number of characters used on 70 characters recommended. A drop-down next to the field is displayed when there are several languages installed and enabled. It allows to choose in which language the field is displayed. Also, in the case of multilanguage, if an error occurs, then I must be warned in the message which language is problematic. 

- **Meta description**: There is a placeholder: “To have a different description than your product summary in search results pages, write it here.” This data is displayed in the code of the page in the <meta name="description"> tag. If the field is empty, the product description will be used. A counter indicates the number of characters used on 160 characters recommended. A drop-down next to the field is displayed when there are several languages installed and enabled. It allows to choose in which language the field is displayed. Also, in the case of multilanguage, if an error occurs, then I must be warned in the message which language is problematic. 

- **Friendly URL**: This field is automatically field when you enter the product name. The spaces are replaced by dashes. A drop-down next to the field is displayed when there are several languages installed and enabled. It allows to choose in which language the field is displayed. Also, in the case of multilanguage, if an error occurs, then I must be warned in the message which language is problematic. 

- **Reset URL**: This buttons allows to reset the friendly URL field as it was before the last change. 

- **Information message**: Friendly URLs are currently disabled. To enable it, go to SEO and URLs. Friendly URLs are currently enabled. To disable it, go to SEO and URLs. SEO and URLs link is opened in a new tab.

- **Redirection when offline**: Dropdown with 5 options:
  1) Permanent redirection to a category (301): When my product is offline, I choose a category to redirect to. This is a "definitive" redirection and therefore this parameter is saved in the browser cache and even when I reactivate the product, the redirection can still be effective until the browser cache is cleared.
  2) Temporary redirection to a category (302): When my product is offline, I can choose a category to which my current product is redirected. The new category will only be displayed when my product is offline, it is not saved in the browser cache
  3) Permanent redirection to a product (301): When my product is offline, I choose another product to redirect to. This is a "definitive" redirection and therefore this parameter is saved in the browser cache and even when I reactivate the product, the redirection can still be effective until the browser cache is cleared.
  4) Temporary redirection to a product (302): When my product is offline, I can choose a product to which my current product is redirected. The new product sheet will only be displayed when my product is offline, it is not saved in the browser cache
  5) No redirection (404): When my product is offline,, if I try to accede to the product in font-office a message is displayed: “This product is no longer available.” and the product isn’t displayed.. If I click on Preview, I can see the product but a message is displayed “This product is not visible to your customers.”

- **Target category**: This search field is displayed if you select in the dropdown Permanent redirection to a category or Temporary redirection to a category. There is a placeholder: “To which category the page should redirect ?” If no category is selected, the Main Category is used. You can search by category name. When you start typing, if there are results, they are displayed under and you can click on it. Then, the selected category is displayed under the field. 

- **Target product**: This search field is displayed if you select in the dropdown Permanent redirection to a product or Temporary redirection to a product. There is a placeholder: “To which product the page should redirect ?” You can search by product name or reference. When you start typing, if there are results, they are displayed under and you can click on it. Then, the selected product is displayed under the field. 
Delete selected category or product: You can remove the selected product or category by clicking on the cross. When you click on it, you have a modal to cancel or confirm the action.

- **Information message**: No redirection (404) = Do not redirect anywhere and display a 404 "Not Found" page.
Permanent redirection (301) = Permanently display another product or category instead.
Temporary redirection (302) = Temporarily display another product or category instead.
