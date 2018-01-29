function Bank() {
 this.balance = 0
}

Bank.prototype.showBalance = function() {
  return this.balance
};

Bank.prototype.deposit = function(amount) {
  this.balance += amount
};
