function radioBill(){
    var callValue = 2.75;
    var smsValue = 0.75;
    var totalCost = (callValue + smsValue).toFixed(2)

    function getCall(){
        return callValue;
    }

    function getSms(){
        return smsValue;
    }

    function getTotal(){
        return totalCost;
    }

    return {
        getCall,
        getSms,
        getTotal
    }
}