#Mini Wikipedia (Countries edition)

>Creating a mini wikipedia where users can post information about countries; the biggest city and its population.


#***Features of the app:***

- access by multiple users via client
- store all the data being input in JSON
- retrieve the data from storage by the username.



##**Client / Server Communication**
* * *
###***Server side***
Server starts by running the server.js

```bash
node server.js
```
* * *
###***Client Side***
Client connects to a server through telnet by typing the server's IP address and port.
```bash
telnet 127.0.0.1 8124
```
In our case multiple users can use 1 client to be connected to a server, but we should identify each user.
All users are able to create their entries.
If a user wants to pull his/her information, they will need to provide their name.
When server is on and client is connected, ask a user for a name so his/her entry can be identified and pulled from storage.
To create an entry, user types in the following format:
```bash
entry - anya - New York - USA - 20,464,000
```
Then this data will be stored. If users didn't follow the format, he/she will be prompted with an error.

* * *
###***JSON***
Json will store the data in 1 massive array.
Each user's data will be stored as objects.

###***User's Side***

User can access his/her entries by typing his name. For example
```bash
anya
```
The following information will be given to the user:

```bash
-----------------------
ANYA's entry found:
-----------------------
CITY: Tokyo
COUNTRY: Japan
POPULATION: 37,126,000

-----------------------
ANYA's entry found:
-----------------------
CITY: Jakarta
COUNTRY: Indonesia
POPULATION: 26,063,000

-----------------------
ANYA's entry found:
-----------------------
CITY: New York
COUNTRY: USA
POPULATION: 20,464,000
```
