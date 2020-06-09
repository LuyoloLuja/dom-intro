describe('The calculateBill function' , function(){
    it('Should check if call cost is equal to 2.75' , function(){
        var billItemType = CalculateBill();
        billItemType.billType("call");

        assert.equal(billItemType.returnCall(), 2.75 );
    });
    it('Should  check if sms cost is equal to 0.75' , function(){
        var billItemType = CalculateBill();
        billItemType.billType("sms");

        assert.equal(billItemType.returnSms(), 0.75 );
    });
    it('Should be able to add more than one call bill', function(){
        var billItemType = CalculateBill();
        billItemType.billType("call");
        billItemType.billType("call");
        billItemType.billType("call");

        assert.equal(billItemType.returnCall(), 8.25);
    })
    it('Should be able to add more that one sms bill' , function(){
        var billItemType = CalculateBill();
        billItemType.billType("sms");
        billItemType.billType("sms");
        billItemType.billType("sms");

        assert.equal(billItemType.returnSms(), 2.25 );
    });
    it('Should be able to add both call and sms and return total' , function(){
        var billItemType = CalculateBill();
        billItemType.billType("call");
        billItemType.billType("sms");

        assert.equal(billItemType.returnTotal(), 3.50);
    });
    it('Should return a class name of warning if total reached 20', function(){
        var billItemType = CalculateBill();

        billItemType.billType("call");
        billItemType.billType("call");
        billItemType.billType("call");
        billItemType.billType("sms");
        billItemType.billType("sms");
        billItemType.billType("sms");
        billItemType.billType("call");
        billItemType.billType("call");
        billItemType.billType("call");
        billItemType.billType("sms");
        billItemType.billType("sms");
        billItemType.billType("sms");

        assert.equal(billItemType.color(), "warning");
    })
    it('Should return a class name of warning if total reached 30', function(){
        var billItemType = CalculateBill();

        billItemType.billType("call");
        billItemType.billType("call");
        billItemType.billType("call");
        billItemType.billType("sms");
        billItemType.billType("sms");
        billItemType.billType("sms");
        billItemType.billType("call");
        billItemType.billType("call");
        billItemType.billType("call");
        billItemType.billType("sms");
        billItemType.billType("sms");
        billItemType.billType("sms");
        billItemType.billType("call");
        billItemType.billType("call");
        billItemType.billType("call");
        billItemType.billType("call");
        billItemType.billType("call");
        billItemType.billType("call");

        assert.equal(billItemType.color(), "critical");
    })
});