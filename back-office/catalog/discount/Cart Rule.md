
## Specs 


**User need (merchant):**
- As a merchant, I want to be able to display or not the vouchers that will be available on the customer account (FO).

**Specs:**
- It would be a checkbox with the wording “Display the voucher on the customer account” (wording still to be defined by @Julievrz). 
- If the date is a later date, the checkbox will be displayed. 
- If the date is an earlier date or the same day, the checkbox won’t be displayed.
- If the date that was a later date becomes an earlier date or the same day, the checkbox won’t be displayed.

**Design:**

Step 1: Enter the later dates
![Cart Rules - conditions valid future](https://user-images.githubusercontent.com/54888056/99830376-e773a200-2b5d-11eb-8b5d-e3529474939b.png)

Step 2: See the "Display" option
![Cart Rules - conditions valid future hidden](https://user-images.githubusercontent.com/54888056/99830384-eb072900-2b5d-11eb-83c7-2eee1268b662.png)

Step 3: Check the "Display" option
![Cart Rules - conditions valid future display](https://user-images.githubusercontent.com/54888056/99830393-ee9ab000-2b5d-11eb-8853-b0b9a278343a.png)

#### Additional context


## Cart Rule 

**when 2 vouchers applied to a cart have free shipping.**

2 vouchers should be applied but the shipping should be deducted once. 

If I applied 2 vouchers in a cart:
- Voucher 1: Free Shipping + 5%
- Voucher 2: Free Shipping + Gift

Then 

Free shipping is applied once with a 5 % discount and a gift.

---

**When a discount is applied for the cheapest product** then the discount summary displays the value of the discount and not the percentage.
