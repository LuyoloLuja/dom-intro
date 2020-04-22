//get a reference to the add button
const radioBillButton = document.querySelector(".radioBillAddBtn");
//create a variable that will keep track of the total bill
var totalElement = document.querySelector(".totalTwo");

var callTotalElement = document.querySelector(".callTotalTwo");
var smsTotalElement = document.querySelector(".smsTotalTwo");
var callsTotalTwo = 0;
var smsTotalTwo = 0;

function radioBill(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

    var billItemType = checkedRadioBtn.value;
    if (billItemType === "call"){
        callsTotalTwo += 2.75;
    }else if(billItemType === "sms"){
        smsTotalTwo += 0.75;
    }
    callTotalElement.innerHTML = callsTotalTwo.toFixed(2);
    smsTotalElement.innerHTML = smsTotalTwo.toFixed(2);
    var totalCost = callsTotalTwo + smsTotalTwo;
    totalElement.innerHTML = totalCost.toFixed(2);

    billTotalSpanElement.classList.remove("danger");
    billTotalSpanElement.classList.remove("warning");
    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalElement.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalElement.classList.add("warning");
    }
}
radioBillButton.addEventListener('click', radioBill);
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
