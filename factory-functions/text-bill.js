function textBill(){
    var callCost = 2.75;
    var smsCost = 0.75;
    var totalCost = (callCost + smsCost).toFixed(2);

    function getCallCost(){
        return callCost;
    }

    function getSmsCost(){
        return smsCost;
    }

    function roundedTotalCost(){
        return totalCost;
    }

    function colorTotal(){
        if(totalCost >= 50){
            return "danger";
        }else if(totalCost >= 30 && totalCost < 50){
            return "warning";
        }
    }

    return {
        getCallCost,
        getSmsCost,
        roundedTotalCost,
        colorTotal
    }
}