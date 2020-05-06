# SPECS MULTISTORE LINKLIST MODULE

As a merchant I need to be able to display different links in the front office depending on my stores

## WHAT

Thus, this project aims at specifying the current and expected behaviour of the module when the multistore is enabled and when there are several stores.

## SPECIFICATIONS

### Multisotre header
The multistore header is displayed, the specifications of this component are described in the multistore general specs in back-office/multistoregeneralspecs.md

### Shop association block
When a new block is added, the merchant can choose to which shop(s) the block will be associated thanks to the “shop association block” component.<br/>
The specifications of this block are described in the multistore general specs in back-office/multistoregeneralspecs.md

### Listing
The position column is displayed only in a specific shop context.<br/>
Changing the position of a block is possible only in a specific shop context.
