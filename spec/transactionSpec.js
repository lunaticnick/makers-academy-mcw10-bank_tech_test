describe("Transaction", function() {

  it("Transaction should be created when a credit is made to the account", function() {
    transaction = new Transaction();
    expect(transaction.recordCredit(5) instanceof Array).toEqual(true);
  });

  it("Transaction should record when a credit is made to the account", function() {
    transaction = new Transaction();
    expect(transaction.recordCredit(5)).toEqual(["29/01/2018", 5, "    "]);
  });



});
