Forked From https://github.com/Karbovanets/Karbowanec-Blockchain-Explorer

# Turtle Blocks - A Turtle Coin Blockchain Explorer
![Turtle Coin Logo](/images/green_logo.png?raw=true "Turtle coin logo")
# This repository requires the latest dev-master of turtle coin
    The RpcServer does not output the difficulty by default on `f_blocks_list_json`
    and requires a change to the tempalte file to output it. (PR TODO)
    
    Without this update it will require an additional request to the daemon per block 
    loaded on home.html, to get each blocks difficulty. 
    
    This might not be an issue with early on with low users, but a spike in users 
    could cost extra recourses (therefore more $/£) in cloud hosting senarios 
    
# Do not forget to add your deamon IP / domain name in config.json 

Most of my changes can be viewed by searching for "NOTE"

## Changes
- Removed white version of the site, because i didnt have a pure green logo +
    nobodys eyes desrve that (could easily be re-enabled)

- Updated a foreach loop on getPoolTransactions() on homepage because it didnt
    work

- Changed the default langauge to en (also removed nav bar item "UA" due to the code
    being implement twice its better being re-written so the javascript only
    is located in one place)

- Removed date from "Transaction Pool" on homepage because it isn't included
    in the function f_on_transactions_pool_json

-  Update "Pool" page so the javascript works with the format the pools are
    returning now

##  Haven't done / problems
 - Removed alot of instances of getReadableCoins as I couldn't get it to work
   but only saw one instance where it was caused a major issue
 
