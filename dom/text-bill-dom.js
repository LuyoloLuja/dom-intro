const textBoxElement = document.querySelector(".billTypeText");

const addButtonElement = document.querySelector(".addToBillBtn");

var totalElementOne = document.querySelector(".totalOne");

var callsTotalElement = document.querySelector(".callTotalOne");
var smsTotalElementTwo = document.querySelector(".smsTotalOne");

var textBillInstance = TextBill(); 

function textBillTotal(){
    var billTypeEntered = textBoxElement.value;
    
    textBillInstance.billEntered(billTypeEntered);

    callsTotalElement.innerHTML = textBillInstance.callCostTotal().toFixed(2);
    smsTotalElementTwo.innerHTML = textBillInstance.smsCostTotal().toFixed(2);
    totalElementOne.innerHTML = textBillInstance.costTotal().toFixed(2);

    totalElementOne.classList.remove("critical");
    totalElementOne.classList.remove("warning");

    totalElementOne.classList.add(textBillInstance.levelColor());
}
addButtonElement.addEventListener('click', textBillTotal);