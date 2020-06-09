describe('The radio-bill function', function(){
    it('Should be able to add call at 2.75', function(){
        var itemType = RadioBill();

        itemType.radioButtons("call");
        assert.equal(itemType.getCall(), 2.75);
    })
    it('Should be able to send sms at 0.75', function(){
        var itemType = RadioBill();

        itemType.radioButtons("sms");
        assert.equal(itemType.getSms(), 0.75)
    })
    it('Should be able to return total', function(){
        var itemType = RadioBill();

        itemType.radioButtons("call");
        itemType.radioButtons("sms");
        assert.equal(itemType.getTotal(), 3.50);
    })
    it('Should be able to add more than one call', function(){
        var itemType = RadioBill();

        itemType.radioButtons("call");
        itemType.radioButtons("call");
        itemType.radioButtons("call");
        assert.equal(itemType.getCall(), 8.25);
    })
    it('Should be able to send more than one sms', function(){
        var itemType = RadioBill();

        itemType.radioButtons("sms");
        itemType.radioButtons("sms");
        itemType.radioButtons("sms");
        assert.equal(itemType.getSms(), 2.25)
    })
    it('Should return a class name of warning if total reached 30', function(){
        var itemType = RadioBill();

        itemType.radioButtons("sms");
        itemType.radioButtons("sms");
        itemType.radioButtons("sms");
        itemType.radioButtons("sms");
        itemType.radioButtons("sms");
        itemType.radioButtons("sms");
        itemType.radioButtons("sms");
        itemType.radioButtons("sms");
        itemType.radioButtons("sms");
        itemType.radioButtons("call");
        itemType.radioButtons("call");
        itemType.radioButtons("call");
        itemType.radioButtons("call");
        itemType.radioButtons("call");
        itemType.radioButtons("call");
        itemType.radioButtons("call");
        itemType.radioButtons("call");
        itemType.radioButtons("call");
        assert.equal(itemType.totalClassName(), "warning");
    })
    it('Should return a class name of critical if total reached 50', function(){
        var itemType = RadioBill();

        itemType.radioButtons("sms");
        itemType.radioButtons("sms");
        itemType.radioButtons("sms");
        itemType.radioButtons("sms");
        itemType.radioButtons("sms");
        itemType.radioButtons("sms");
        itemType.radioButtons("sms");
        itemType.radioButtons("sms");
        itemType.radioButtons("sms");
        itemType.radioButtons("call");
        itemType.radioButtons("call");
        itemType.radioButtons("call");
        itemType.radioButtons("call");
        itemType.radioButtons("call");
        itemType.radioButtons("call");
        itemType.radioButtons("call");
        itemType.radioButtons("call");
        itemType.radioButtons("call");
        itemType.radioButtons("sms");
        itemType.radioButtons("sms");
        itemType.radioButtons("sms");
        itemType.radioButtons("sms");
        itemType.radioButtons("sms");
        itemType.radioButtons("sms");
        itemType.radioButtons("sms");
        itemType.radioButtons("sms");
        itemType.radioButtons("sms");
        itemType.radioButtons("call");
        itemType.radioButtons("call");
        itemType.radioButtons("call");
        itemType.radioButtons("call");
        itemType.radioButtons("call");
        itemType.radioButtons("call");
        itemType.radioButtons("call");
        itemType.radioButtons("call");
        itemType.radioButtons("call");
        assert.equal(itemType.totalClassName(), "critical");
    })
})