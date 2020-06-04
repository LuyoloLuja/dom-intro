function RadioBill() {
    var callCost = 0;
    var smsCost = 0;
    var totalCost = 0;

    var warning = 30;
    var critical = 50;

    function getCall() {
        return callCost;
    }

    function getSms() {
        return smsCost;
    }

    function getTotal() {
        totalCost = callCost + smsCost;
        return totalCost;
    }

    function radioButtons(selectedBill) {
        if (selectedBill === "call") {
            callCost += 2.75;
        } else if (selectedBill === "sms") {
            smsCost += 0.75;
        }
    }

    function totalClassName() {
        if (getTotal() >= warning && getTotal() < critical) {
            return "warning";
        } else if (getTotal() >= critical) {
            return "critical";
        }
    }

    return {
        getCall,
        getSms,
        getTotal,
        radioButtons,
        totalClassName
    }
}