// get a reference to the sms or call radio buttons
var callElement = document.querySelector(".billItemTypeWithSettings");

// get refences to all the settings fields
var callElement = document.querySelector(".callTotalSettings");
var smsElement = document.querySelector(".smsTotalSettings");
var callTotalThree = 0;
var smsTotalThree = 0;

/*
var callCostSettings = document.querySelector(".callCostSetting");
var smsCostSettings = document.querySelector(".smsCostSetting");
var warningSettings = document.querySelector(".warningLevelSetting");
var criticalSettings = document.querySelector(".criticalLevelSetting");
*/

//get a reference to the add button
var addButton = document.querySelector(".button-primary");

//get a reference to the 'Update settings' button
//var updateButton = document.querySelector(".updateSettings");

// create a variables that will keep track of all the settings


// create a variables that will keep track of all three totals.
var total = document.querySelector(".totalSettings");

function settingsBill(){
    var checkedBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    var billItemTypeWithSettings = checkedBtn.value;

    if (billItemTypeWithSettings === "call"){
        callTotalThree += 2.75;
    }else if(billItemTypeWithSettings === "sms"){
        smsTotalThree += 0.75;
    }

    callElement.innerHTML = callTotalThree.toFixed(2);
    smsElement.innerHTML = smsTotalThree.toFixed(2);
    var totalBillCost = callTotalThree + smsTotalThree;
    total.innerHTML = totalBillCost.toFixed(2);
}
addButton.addEventListener('click', settingsBill);

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
