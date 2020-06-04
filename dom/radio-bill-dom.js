const radioBillButton = document.querySelector(".radioBillAddBtn");
var totalElement = document.querySelector(".totalTwo");

var callTotalElement = document.querySelector(".callTotalTwo");
var smsTotalElement = document.querySelector(".smsTotalTwo");

var radioBillInstance = RadioBill();

function radioBill(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

    var billItemType = checkedRadioBtn.value;

    radioBillInstance.radioButtons(billItemType);

    callTotalElement.innerHTML = radioBillInstance.getCall().toFixed(2);
    smsTotalElement.innerHTML = radioBillInstance.getSms().toFixed(2);
    totalElement.innerHTML = radioBillInstance.getTotal().toFixed(2);

    totalElement.classList.remove("critical");
    totalElement.classList.remove("warning");

    totalElement.classList.add(radioBillInstance.totalClassName());
}
radioBillButton.addEventListener('click', radioBill);
