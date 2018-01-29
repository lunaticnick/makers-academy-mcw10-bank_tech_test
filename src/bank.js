const MINIMUM_BALANCE = 0

function Account() {
 this._balance = MINIMUM_BALANCE;
 this._transactions = ["   Date      ||     Credit    ||     Debit     ||     Balance"];
}

Account.prototype.showBalance = function() {
  return this._balance;
};

Account.prototype.deposit = function(amount) {
  var transaction = new Transaction();
  this._balance += amount;
  var depositTransaction = transaction.recordCredit(amount);
  depositTransaction.push(this.showBalance());
  // depositTransaction.push("\n")
  var transactionString = depositTransaction.join("    ||    ")
  this._transactions.push(transactionString)
};

Account.prototype.withdraw = function(amount) {
  if(this._balance > MINIMUM_BALANCE) {
    var transaction = new Transaction();
    this._balance -= amount;
    var withdrawTransaction = transaction.recordDebit(amount);
    // withdrawTransaction.unshift("||");
    withdrawTransaction.push(this.showBalance());
    // withdrawTransaction.push("\n");
    var transactionString = withdrawTransaction.join("    ||    ");
    this._transactions.push(transactionString);

  } else {
    throw Error ("Not enough funds in account");
  };

};


Account.prototype.showBankStatement = function () {
  var transactions = this._transactions;
  var string = ""
  for (var i =0; i<transactions.length; i++) {
    string = string + transactions[i] + "\n"
  }
  return string
};
