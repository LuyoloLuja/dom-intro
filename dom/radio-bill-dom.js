const radioBillButton = document.querySelector(".radioBillAddBtn");
var totalElement = document.querySelector(".totalTwo");

var callTotalElement = document.querySelector(".callTotalTwo");
var smsTotalElement = document.querySelector(".smsTotalTwo");

var radioBillInstance = RadioBill();

function radioBill(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

    var billItemType = checkedRadioBtn.value;
    if (billItemType === "call"){
        radioBillInstance.getCall();
    }else if(billItemType === "sms"){
        radioBillInstance.getSms();
    }
    callTotalElement.innerHTML = radioBillInstance.getCall().toFixed(2);
    smsTotalElement.innerHTML = radioBillInstance.getSms().toFixed(2);
    totalElement.innerHTML = radioBillInstance.getTotal().toFixed(2);

    billTotalSpanElement.classList.remove("danger");
    billTotalSpanElement.classList.remove("warning");
    
    totalElement.classList.add(radioBillInstance.totalClassName())
}
radioBillButton.addEventListener('click', radioBill);