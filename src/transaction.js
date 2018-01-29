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

Transaction.prototype.recordDebit = function(amount) {

  var transaction = []
  var date = new Date().toLocaleDateString();
  var credit = "    "

  transaction.push(date)
  transaction.push(credit)
  transaction.push(amount)

  return transaction
};
