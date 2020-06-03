function RadioBill(){
    var callValue = 2.75;
    var smsValue = 0.75;
    var totalCost = (callValue + smsValue).toFixed(2)

    var warning = 30;
    var critical = 50;

    function getCall(){
        return callValue;
    }

    function getSms(){
        return smsValue;
    }

    function getTotal(){
        return totalCost;
    }

    function getWarning(){
        return warning;
    }

    function getCritical(){
        return critical;
    }

    function totalClassName(){
        if(totalCost >= warning && totalCost < critical){
            return "warning";
        }else if(totalCost >= critical){
            return "critical";
        }
    }

    return {
        getCall,
        getSms,
        getTotal,
        getWarning,
        getCritical,
        totalClassName
    }
}