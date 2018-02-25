# Simple payment solution

What to do?
=====================
You are supposed to create a small payment application which is capable to list transactions made by the user and send money to another person. Application should use the API documented below. 

Application should run on Android or iOS or both. If cross-platform framework is used the application should run on both platforms.

We value native look and feel and good usability.

Backend
=====================

Requirements
---------------------
Node
https://nodejs.org/en/
Git
https://git-scm.com/

Installation
---------------------
> git clone https://github.com/Pyryn/profit-lab.git

> cd profit-lab\src

> npm install

> npm start

API
=====================

Get Transactions
---------------------
GET /transactions
Returns transactions for the user who can be assumed to be one with the phone number 0504567890.
```
[{
  id: number,
  transaction_type: number,
  transaction_date: date,
  amount: number,
  receiver: string (Person's phone number),
  sender: string (Person's phone number) 
}]
```

Get Transaction by id 
---------------------
GET /transactions/:id
id: number

```
{
  id: number (unique identifier),
  transaction_type: number,
  transaction_date: datetime (UTC in ISO 8601 format without timezone),
  amount: number,
  receiver: string (Person's phone number),
  sender: string (Person's phone number)
}
```

New Transaction
---------------------
POST /transactions
Creates new transaction of type "Sent". Also creates new Person if the receiver phone number is not found from the Persons list.

```
{
  amount: number,
  receiver: person
}
```

Get Transaction Types
---------------------
GET /transaction_types
Returns all possible transaction types, but for now only 0 = "Sent" and 1 = "Received" are used.

```
{
  id: number (unique identifier),
  name: string,
}
```

Get Persons
---------------------
GET /persons
Returns Persons available in app, See POST Transactions about creating new persons.

```
[{
  phone_number: string (unique identifier),
  name: string
}]
```

Get Person by phone number
---------------------
GET /persons/:phone_number
phone_number: string
```
{
  phone_number: string (unique identifier),
  name: string
}
```

