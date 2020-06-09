describe("The text bill function", function(){
    it('Should be able to add call at 2.75', function(){
        var billType = TextBill();
        
        billType.billEntered("call");
        assert.equal(billType.callCostTotal(), 2.75);
    })
    it('Should be able to send sms at 0.75', function(){
        var billType = TextBill();
        
        billType.billEntered("sms");
        assert.equal(billType.smsCostTotal(), 0.75);
    })
    it("Should be able to return total", function(){
        var billType = TextBill();

        billType.billEntered("call");
        billType.billEntered("sms");
        assert.equal(billType.costTotal(), 3.50)
    })
    it("Should be able to add more than one call", function(){
        var billType = TextBill();

        billType.billEntered("call");
        billType.billEntered("call");
        billType.billEntered("call");
        assert.equal(billType.callCostTotal(), 8.25)
    })
    it("Should be able to add more than one sms", function(){
        var billType = TextBill();

        billType.billEntered("sms");
        billType.billEntered("sms");
        billType.billEntered("sms");
        assert.equal(billType.smsCostTotal(), 2.25)
    })
    it("Should return a class name of warning if total reached 30", function(){
        var billType  = TextBill();

        billType.billEntered("call");
        billType.billEntered("call");
        billType.billEntered("call");
        billType.billEntered("call");
        billType.billEntered("call");
        billType.billEntered("call");
        billType.billEntered("sms");
        billType.billEntered("sms");
        billType.billEntered("sms");
        billType.billEntered("sms");
        billType.billEntered("sms");
        billType.billEntered("sms");
        billType.billEntered("call");
        billType.billEntered("call");
        billType.billEntered("call");
        billType.billEntered("call");
        billType.billEntered("call");
        billType.billEntered("call");
        billType.billEntered("call");
        billType.billEntered("call");

        assert.equal(billType.levelColor(), "warning");
    })
    it("Should return a class name of critical if total reached 50", function(){
        var billType  = TextBill();

        billType.billEntered("call");
        billType.billEntered("call");
        billType.billEntered("call");
        billType.billEntered("call");
        billType.billEntered("call");
        billType.billEntered("call");
        billType.billEntered("sms");
        billType.billEntered("sms");
        billType.billEntered("sms");
        billType.billEntered("sms");
        billType.billEntered("sms");
        billType.billEntered("sms");
        billType.billEntered("call");
        billType.billEntered("call");
        billType.billEntered("call");
        billType.billEntered("call");
        billType.billEntered("call");
        billType.billEntered("call");
        billType.billEntered("call");
        billType.billEntered("call");
        billType.billEntered("sms");
        billType.billEntered("call");
        billType.billEntered("call");
        billType.billEntered("call");
        billType.billEntered("call");
        billType.billEntered("call");
        billType.billEntered("call");
        billType.billEntered("call");
        billType.billEntered("call");

        assert.equal(billType.levelColor(), "critical");
    })
})