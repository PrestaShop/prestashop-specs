# international-tax-tax-rules-list-add-edit 


> BO > IMPROVE > International > VAT (page) > Tax Rules (Tab) 

## Note 
* all examples are based on Prestashop 1.7.7.2 
* data are based on an O3T image 


## Why 


## Current page design 
* Screenshot based on V1.7.7.1
 
![image](https://user-images.githubusercontent.com/79218263/110769969-0f942780-8259-11eb-9559-57aea9d9348d.png)


## User story list 
* Note : design team work on persona specification, "BO user" is a dummy persona 

### Command 
#### Enabled/Disabled  
#### Add One 


Add VAT (one, many ? ) 

#### Delete One

Delete One 
Delete Many

Remove VAT (one, many ? ) 

### Query 
#### Filter 
* Notice : filters can combine
  * ex : filter by status AND by name
     
#### User Story 001 
   

```
AS A     BO User 
I WANT   filter Tax Rules by status (Enabled/Disabled)    
SO THAT  I can see only actives (or not actives) Tax Rules 
```

#### User Story 002 
```
AS A     BO User 
I WANT   filter Tax Rules by ID    
SO THAT  I can't scroll on Tax Rules List to find one Tax Rules  
```
  
* Question  : 
   * why use like (not =) for filter on ID ? 
   * why where 1 AND ? 
```sql 
SELECT SQL_CALC_FOUND_ROWS a.* 
FROM `ps_tax_rules_group` a 
WHERE     1 
      AND a.deleted = 0 
      AND a.`id_tax_rules_group` LIKE '%1%' 
      AND a.`active` = 1 
ORDER BY a.id_tax_rules_group ASC 
LIMIT 0, 50
```

![image](https://user-images.githubusercontent.com/79218263/110779979-7a972b80-8264-11eb-9881-1dce1538d0a0.png)




```
Scenario: Filter by existing  ID / no filter active  
    Given all filter all disabled 
    When BO user set existing ID on ID filter textfied 
    Then      Tax Rules only show Tax Rules that correspond to this ID
         AND  ALL Other are hiden
```
![image](https://user-images.githubusercontent.com/79218263/110777152-19218d80-8261-11eb-9382-4c570419ab55.png)


```
Scenario: Filter by non existing  ID / no filter active 
    Given all filter all disabled 
    When BO user set non existing ID on ID filter textfied 
    Then Show Tax Rules list without any lines 
```         
![image](https://user-images.githubusercontent.com/79218263/110776099-f773d680-825f-11eb-8d10-342b787d58e8.png)


```
Scenario: Filter by non existing  ID / filter active  
    Given one or mor filter all enabled 
    When BO user set non existing ID on ID filter textfied 
    Then Show Tax Rules list without any lines  
```

```
Scenario: Filter by existing  ID / filter active  
    Given one or more filter all enabled 
    When      BO user set existing ID on ID filter textfied 
         AND  ID Tax Rules line is include in filter active
    Then      Tax Rules only show Tax Rules that correspond to this ID
         AND  ALL Other are hiden 
```

```
Scenario: Filter by existing  ID / filter active  
    Given one or more filter all enabled 
    When      BO user set existing ID on ID filter textfied 
         AND  ID Tax Rules line is not include in filter(s) active 
    Then      Then Show Tax Rules list without any lines 
```

#### User Story 003
```
AS A     BO User 
I WANT   filter Tax Rules by Name    
SO THAT  I can't scroll on Tax Rules List to find one Tax Rules  
```


#### User Story 004
```
AS A     BO User 
I WANT   reset filter    
SO THAT  I can't disabled all filter textfield and/or select to remove all filters
         I shure I'm not forget to remove one filter 
```






### Technical U.S. 
Refresh 
Show SQL query 
Export to SQL Manager 



```
AS A     BO User 
I WANT   refresh the Tax Rules Tab    
SO THAT  I get last Tax Rules state   
```

* Just a basic JS location.reload()

```
AS A     BO User 
I WANT   show SQL Query use to filter current tab state    
SO THAT  ?????
```




```
AS A     BO User 
I WANT   export SQL Query (use to filter) to SQL Manager   
SO THAT  ?????
```

```
AS A     BO User 
I WANT   switch on several Tax Rule   
SO THAT 
```



## User story 1 



## 





## ISSUES RELATED


