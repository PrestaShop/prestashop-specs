
---
title: Stock
weight: 1
---

  
# SPECS Stock & Stock movement

## Stock

  
| Stock's typeæ | Definition | When impacted | 
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Physical stock | Number of products that are physically in my stock.| When a merchant can add or remove physical stock 
| Reserved stock | Number of products that are part of customer orders that aren’t shipped yet.| When client's merchant order products |
| Available stock | Number of products that are available for sale. Available stock = physical stock - reserved stock | When Physical and Reserved Stock are impacted


## Stock movement

**User story**

 As a merchant, I want to associate a stock edition with a movement type in order to keep track of the reason of a given physical stock movement.

  Stock movement | When the stock movement is saved | Impact
|:--------:| :-------------|:-------------|
Product return | When a user re-stock a product from an Order that has been flag as _shipped_ | The quantity re-stocked increases the product's physical stock | 
Employee edition | When the physical stock is edited without being linked to a customer order | The physical stock is increased or decreased
Customer Order | When an order has been flag as _shipped_ | The physical stock is decreased from the reserved quantity

