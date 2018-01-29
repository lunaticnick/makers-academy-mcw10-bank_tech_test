describe("Bank", function() {
  var bank;

  beforeEach(function() {
    bank = new Bank();
  });

  describe("#balance", function() {

    it("should be able to display a balance", function() {
      expect(bank.showBalance()).toEqual(0);
    });

  });

});
