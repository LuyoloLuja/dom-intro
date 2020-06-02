describe('The calculateBill function' , function(){
    it('Should check if call cost is equal to 2.75' , function(){
        assert.equal(calculateBill('call'), 2.75 )
    });
    it('Should  check if sms cost is equal to 0.75' , function(){
        assert.equal(calculateBill('sms'), 0.75 )
    });
    it('Should be able to add more than one call bill', function(){
        assert.equal(calculateBill('call, call, call, call, call'), 13.75)
    })
    it('Should be able to add more that one sms bill' , function(){
        assert.equal(calculateBill('sms, sms, sms, sms, sms'), 3.75 )
    });
    it('Should be able to add both call and sms' , function(){
        assert.equal(calculateBill('call, sms, call, sms, call, sms'),10.50 )
    });
});