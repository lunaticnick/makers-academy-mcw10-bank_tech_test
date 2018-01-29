const MINIMUM_BALANCE = 0
const HEADLINE =  'date || credit || debit || balance'

function Account() {
 this.balance = MINIMUM_BALANCE
}

Account.prototype.showBalance = function() {
  return this.balance;
};

Account.prototype.deposit = function(amount) {
  this.balance += amount;
};

Account.prototype.withdraw = function(amount) {
  if(this.balance > MINIMUM_BALANCE) {
    this.balance -= amount;
  } else {
    throw Error ("Not enough funds in account");
  };

};
