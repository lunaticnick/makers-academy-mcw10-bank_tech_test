describe("Bank", function() {
  var bank;

  beforeEach(function() {
    bank = new Bank();
  });

  describe("#showBalance", function() {

    it("should be able to display a balance", function() {
      expect(bank.showBalance()).toEqual(0);
    });

  });

  describe("#deposit", function() {

    it("should be able to deposit money to the account", function() {
      bank.deposit(100)
      expect(bank.showBalance()).toEqual(100);
    });

  });

});
