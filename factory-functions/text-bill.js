function TextBill(){
    var callValue = 0;
    var smsValue = 0;
    var totalValue = 0;

    const warningValue = 30;
    const criticalValue = 50;

    function callCostTotal(){
        return callValue;
    }

    function smsCostTotal(){
        return smsValue;
    }

    function costTotal(){
        totalValue = callValue + smsValue;
        return totalValue;
    }

    function billEntered(enteredBill){
        if(enteredBill === "call"){
            callValue += 2.75;
        } else if(enteredBill === "sms"){
            smsValue += 0.75;
        }
    }

    function levelColor(){
        if(costTotal() >= warningValue && costTotal() < criticalValue){
            return "warning";
        } else if(costTotal() >= criticalValue){
            return "critical";
        }
    }

    return {
        callCostTotal,
        smsCostTotal,
        costTotal,
        billEntered,
        levelColor
    }
}