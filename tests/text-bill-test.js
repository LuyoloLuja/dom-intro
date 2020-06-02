describe('The text-bill function', function(){
    it('Should be able to add call at 2.75', function(){
        var billValue = textBill();
        billValue.getCallCost(2.75);
        assert.equal(2.75, billValue.getCallCost())
    })
    it('Should be able to add sms 0.75', function(){
        var billValueTwo = textBill();
        billValueTwo.getSmsCost(0.75);
        assert.equal(0.75, billValueTwo.getSmsCost())
    })
    it('Should be able to add both call and sms', function(){
        var billText = textBill();

        billText.getCallCost(2.75);
        billText.getSmsCost(0.75);

        assert.equal(2.75, billText.getCallCost());
        assert.equal(0.75, billText.getSmsCost());
    })
    it('Should be able to overall total', function(){
        var billItem = textBill();

        assert.equal(3.50, billItem.roundedTotalCost());
    })
})