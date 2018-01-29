const MINIMUM_BALANCE = 0
const HEADLINE =  'date || credit || debit || balance'

function Account() {
 this._balance = MINIMUM_BALANCE;
 this._transactions = [];
}

Account.prototype.showBalance = function() {
  return this._balance;
};

Account.prototype.deposit = function(amount) {
  this._balance += amount;
};

Account.prototype.withdraw = function(amount) {
  if(this._balance > MINIMUM_BALANCE) {
    this._balance -= amount;
  } else {
    throw Error ("Not enough funds in account");
  };

};
