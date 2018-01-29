describe("Account", function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });

  describe("#showBalance", function() {

    it("should be able to display a balance", function() {
      expect(account.showBalance()).toEqual(0);
    });

  });

  describe("#deposit", function() {

    it("should be able to deposit money to the account", function() {
      account.deposit(100)
      expect(account.showBalance()).toEqual(100);
    });

  });

  describe("#withdraw", function() {

    it("should be able to withdraw money to the account", function() {
      account.deposit(100)
      account.withdraw(50)
      expect(account.showBalance()).toEqual(50);
    });

    it("should throw an error if attempt to withdrawing more money than balance", function() {
       expect(function(){ account.withdraw(5) }).toThrowError("Not enough funds in account")
    });

  });

});
