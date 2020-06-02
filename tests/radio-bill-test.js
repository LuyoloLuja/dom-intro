describe('The radio-bill function', function(){
    it('Should be able to add call at 2.75', function(){
        var itemType = radioBill();
        itemType.getCall(2.75);
        assert.equal(2.75, itemType.getCall())
    })
    it('Should be able to add sms 0.75', function(){
        var itemTypeTwo = radioBill();
        itemTypeTwo.getSms(0.75);
        assert.equal(0.75, itemTypeTwo.getSms())
    })
    it('Should be able to add both call and sms', function(){
        var billRadio = radioBill();

        billRadio.getCall(2.75);
        billRadio.getSms(0.75);

        assert.equal(2.75, billRadio.getCall());
        assert.equal(0.75, billRadio.getSms());
    })
    it('Should be able to overall total', function(){
        var radioBillItem = radioBill();

        assert.equal(3.50, radioBillItem.getTotal());
    })
})