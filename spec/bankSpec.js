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

  describe("#withdraw", function() {

    it("should be able to withdraw money to the account", function() {
      bank.deposit(100)
      bank.withdraw(50)
      expect(bank.showBalance()).toEqual(50);
    });

    it("should throw an error if attempt to withdrawing more money than balance", function() {
       expect(function(){ bank.withdraw(5) }).toThrowError("Not enough funds in account")
    });

  });

});
