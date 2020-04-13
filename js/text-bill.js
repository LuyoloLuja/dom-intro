// get a reference to the textbox where the bill type is to be entered
const textBoxElement = document.querySelector(".billTypeText");

//get a reference to the add button
const addButtonElement = document.querySelector(".addToBillBtn");

// in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

function textBillTotal(){
    //create a variable that will keep track of the total bill
    var totalElement = document.querySelector(".totalOne");

    var callsTotalElement = document.querySelector(".callTotalOne");
    var smsTotalElement = document.querySelector(".smsTotalOne");
    var callsTotal = 0;
    var smsTotal = 0;

    // get the value entered in the textfield
    var billTypeEntered = textBoxElement.value.split(",");
    
    for(var i = 0; i < textBoxElement.clientHeight; i++){
        var billType = billTypeEntered[i].trim();
        if(billType === "call"){
            callsTotal += 2.75;
        }else if(billType === "sms"){
            smsTotal += 0.75;
        }
    }
    // update totals displayed on screen
    callsTotalElement.innerHTML = callsTotal.toFixed(2);
    smsTotalElement.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalElement.innerHTML = totalCost.toFixed(2);
}
//add an event listener for when the add button is pressed
addButtonElement.addEventListener('click', textBoxElement);