const calculateBtn = document.querySelector(".calculateBtn"); 

function calculateBtnClicked(){    
    const billTotalElement = document.querySelector(".billTotal");
    const billStringField = document.querySelector(".billString");
    const billTotalSpanElement = document.querySelector(".total");

    var calculateBillInstance = CalculateBill();
    var billString = billStringField.value;

    calculateBillInstance.billType(billString);
    billTotalElement.innerHTML = calculateBillInstance.returnTotal().toFixed(2);

    billTotalSpanElement.classList.remove("critical");
    billTotalSpanElement.classList.remove("warning");
    billTotalSpanElement.classList.add(calculateBillInstance.color());
}
calculateBtn.addEventListener("click", calculateBtnClicked);