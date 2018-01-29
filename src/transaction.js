function Transaction() {
};

Transaction.prototype.recordCredit = function(amount) {

  var transaction = []
  var date = new Date().toLocaleDateString();
  var debit = "    "
  transaction.push(date)
  transaction.push(amount)
  transaction.push(debit)
  return transaction
};
