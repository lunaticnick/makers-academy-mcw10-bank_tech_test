function Bank() {
 this.balance = 0
}

Bank.prototype.showBalance = function() {
  return this.balance
};

Bank.prototype.deposit = function(amount) {
  this.balance += amount
};

Bank.prototype.withdraw = function(amount) {
  if(this.balance > 0) {
    this.balance -= amount
  } else {
    throw Error ("Not enough funds in account");
  }

};
