# Bank Tech Test

## Specification


### Requirements

* You should be able to interact with your code via a REPL like IRB or the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see



date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00


### User Stories

```
As a user,
So that I can keep my money safe,
I want to be able to deposit money into the bank
```

```
As a user,
So that I can have cash,
I would like to be able to withdraw money from the bank.
```

```
As a user,
So that I cannot go overdrawn,
I would like to be able to only withdraw money up to my available balance from the bank.
```


```
As a user,
So that I can keep track of my spending,
I would like to be able to see a statement.
```

```
As a user,
So that my statement makes sense to me,
I would like to have dates next to each entry(deposit/withdrawal).
```

```
As a user,
So I don't loose track of my spending,
I would like to be able to see my balance.
```
