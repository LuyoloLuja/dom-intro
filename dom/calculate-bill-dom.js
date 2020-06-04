const calculateBtn = document.querySelector(".calculateBtn");
const billTotalElement = document.querySelector(".billTotal");
const billStringField = document.querySelector(".billString");
const billTotalSpanElement = document.querySelector(".total");

var calculateBillInstance = CalculateBill();

function totalPhoneBill(billString){
    var billItems = billString.split(",");
    calculateBillInstance.billType(billItems);
    calculateBillInstance.returnTotal().toFixed(2);
}

// when the button is clicked
function calculateBtnClicked(){
    var billString = billStringField.value;
    calculateBillInstance.billType(billString);
    billTotalElement.innerHTML = calculateBillInstance.returnTotal().toFixed(2);
    styleTotalColor(calculateBillInstance.returnTotal());
}
calculateBtn.addEventListener("click", calculateBtnClicked);

// color for the totals
function   styleTotalColor(){
    billTotalElement.classList.remove("critical");
    billTotalElement.classList.remove("warning");

    billTotalElement.classList.add(calculateBillInstance.color());
    
}