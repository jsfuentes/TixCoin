# Tokenmaster

## Inspiration
Ticketmaster has a virtual monopoly on the event ticketing industry and takes advantage of its position by scalping its own tickets and charging high fees. People constantly complain about Ticketmaster, but must use it by necessity. We hope to offer an alternative to these centralized authorities now and in the future using the blockchain. Not only can we allow event organizers to easily create ticket tokens, but fraud is cryptographically impossible and anyone can access all our data on the blockchain.

## What it does
We have completely streamlined the process of event creation and distribution through the blockchain. A user-friendly interface allows event organizers to deploy smart contracts for simple event distribution. These smart contracts create a single token for each ticket using the erc20 standard allowing people to own and trade tickets easily through the blockchain. Simply sending ether to an address ensures you get the token representing a ticket. All the tickets created from our website are listed in a beautiful marketplace and shoppers can easily add multiple tickets to their shopping cart and check out at the end. By using Metamask, all these features don't even require an account with us. This website was created to be as decentralized and private as possible. We don't store any user data or your ethereum information at all. Our website is practically just a UI to create event tickets and display the information already on the blockchain. Any other company or consumer can access and use all the information for the ticket-contract smart contract on the blockchain and add their own.

## How We built it
We used solidity to deploy smart contracts on the Ethereum blockchain. NodeJS with express handled all the back end with a Mongodb database. Html+Css+JS (w/bootstrap) handles stuff on the client side. Simplecart and jquery were particularly useful on the frontend. We took advantage of Truffle, Ganache-cli, OpenZeppelin, Metamask to achieve targets pertaining to smart contracts.

## Challenges We ran into
Making sure the smart contract wasn’t vulnerable to Sybil attacks and other security flaws one of the biggest challenge. Cutting down on gas by using efficient solidity practices was a learning experience. Making sure the webstack integrates properly with smart contract (using web3.js and metamask) was a challenge too. Creating a shopping cart across the site while not storing or requiring any user data was a challenge.

## Accomplishments that we are proud of
This was the first experience for our team using solidity and the blockchain. We learned the theory, but this was a great chance to put it into action. In the end, we achieved our main goals.

## What's next for TokenMaster
The real purpose of this product is creating an open source, open environment for ticket exchange. We would hope to create a standard contract for this purpose so other businesses and users can build their own products adding to and inspecting tickets on blockchain. Also, we would like to have more payment (crypto+fiat) options by including Coinbase and Chaingelly/ShapeShift APIs. The next step for Tokenmaster would first be focusing on marketing and getting the word out about our awesome decentralized ticket selling website.
