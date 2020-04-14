// get a reference to the sms or call radio buttons
var callsTotalElement = document.querySelector(".billItemTypeRadio");
var smsTotalElement = document.querySelector(".billItemTypeRadio");

//get a reference to the add button
const addButtonElement = document.querySelector(".radioBillAddBtn");

//create a variable that will keep track of the total bill
var totalElement = document.querySelector(".totalTwo");

var callsTotalElement = document.querySelector(".callTotaltwo");
var smsTotalElement = document.querySelector(".smsTotalTwo");
var callsTotalTwo = 0;
var smsTotalTwo = 0;

function radioBill(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

    var billItemType = checkedRadioBtn.value
    // billItemType will be 'call' or 'sms'
    if (billItemType === "call"){
        callsTotalTwo += 2.75;
    }else if(billItemType === "sms"){
        smsTotalTwo += 0.75;
    }
    callsTotalElement.innerHTML = callsTotalTwo.toFixed(2);
    smsTotalElement.innerHTML = smsTotalTwo.toFixed(2);
    var totalCost = callsTotalTwo + smsTotalTwo;
    totalTwo.innerHTML = totalCost.toFixed(2);
}
addButtonElement.addEventListener('click', radioBill);

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
