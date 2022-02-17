
---
title: Stock
weight: 1
---
# SPECS Stock & Stock movement

## Stock

As a merchant, I want to know the remaing stock of my product

| Stock's type | Definition | When impacted |
| --- | --- | --- |
| Physical stock | Number of products that are physically in my stock. | When a merchant can add or remove physical stock, when ordered products leave or return in stock, ... |
| Reserved stock | Number of products that are part of customer orders that aren’t shipped yet. | When customers order products |
| Available stock | Number of products that are available for sale. Available stock = physical stock - reserved stock | When Physical and Reserved Stock are impacted |

## Stock movement

**User story**

As a merchant, I want to associate a stock edition with a movement type to track of the reason of a given physical stock movement.

| Stock movement | When the stock movement is generated | Impact |
| --- | --- | --- |
| Product return | When a merchant restocks a product from an Order that has been flagged as _shipped_ | The restocked quantity increases the product's physical stock, and implicitly its available stock |
| Employee edition | When the merchant edits the physical stock, without any link to a customer order | The physical stock is increased or decreased |
| Customer Order | When an order has been flagged as shipped | The physical stock is decreased from the reserved quantity |

An example of the stocks life cycle for one product:

| Action | Order | Operation | Order State | Physical stock | Reserved Stock | Available Stock | Stock movement |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Create a new product, a TV, with 10 quantities  |  | Physical stock = 10 |  | 10 | 0 | 10 | None |
| A customer orders 5 TV | Order 1 | Reserved Stock = 5 | Paid | 10 | 5 | 5 | None |
| Merchant add 20 more to the stock |  | Physical stock = Physical stock + 20 |  | 30 | 5 | 25 | Employee Edition |
| The order is sent to the customer | Order 1 | Physical stock = Physical stock - Reserved <br> Reserved = Reserved - 5 | Paid & Shipped | 25 | 0 | 25 | Customer Order |
| The customer returns 1 TV | Order 1 | Physical stock = Physical stock + 1 | Paid | 26 | 0 | 26 | Product Return |
| A customer orders 10 TV | Order 2 | Reserved Stock = 10 | Paid  | 26 | 10 | 16 | None |
| Customer cancels the order | Order 2 | Reserved Stock = 0 | Paid  | 26 | 0 | 26 | None |
| A customer orders 5 TV | Order 3 | Reserved Stock = 5 | Paid | 26 | 5 | 21 | None |
| The order is sent to the customer | Order 3 | Physical stock = Physical stock - Reserved <br> Reserved = Reserved - 5 | Paid & Shipped | 21 | 0 | 21 | None |
| The customer cancels the order | Order 3 |  | Paid & Shipped | 21 | 0 | 21 | None |
