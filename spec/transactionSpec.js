describe("Transaction", function() {

  describe("Deposit Transaction", function() {

    it("Transaction should be created when a credit is made to the account", function() {
      transaction = new Transaction();
      expect(transaction.recordCredit(5) instanceof Array).toEqual(true);
    });

    it("Transaction should record when a credit is made to the account", function() {
      transaction = new Transaction();
      var spy = spyOn(transaction,'recordCredit').and.returnValue(["30/01/2018", 5, ""]);
      expect(transaction.recordCredit(5)).toEqual(["30/01/2018", 5, ""]);
    });

  });

  describe("Withdrawal Transaction", function() {

    it("Transaction should be created when a debit is made to the account", function() {
      transaction = new Transaction();
      expect(transaction.recordDebit(5) instanceof Array).toEqual(true);
    });

    it("Transaction should record when a debit is made to the account", function() {
      transaction = new Transaction();
      var spy = spyOn(transaction,'recordDebit').and.returnValue(["30/01/2018","", 5]);
      expect(transaction.recordDebit(5)).toEqual(["30/01/2018","", 5]);
    });

  });
});
