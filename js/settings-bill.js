var callElement = document.querySelector(".callTotalSettings");
var smsElement = document.querySelector(".smsTotalSettings");
var callTotalThree = 0;
var smsTotalThree = 0;

//  settings variables
var callCostElement = document.querySelector(".callCostSetting");
var smsCostElement = document.querySelector(".smsCostSetting");
var warningSettings = document.querySelector(".warningLevelSetting");
var criticalSettings = document.querySelector(".criticalLevelSetting");

var callCostValue = 0;
var smsCostValue = 0;
var warningLevel = 0;
var criticalLevel = 0;

//get a reference to the add button
var addButton = document.querySelector(".checkedButton");

//  get a reference to the 'Update settings' button
var updateButton = document.querySelector(".updateSettings");

// create a variables that will keep track of all three totals.
var total = document.querySelector(".totalSettings");

// update settings function
function settingsBill(){
    callCostValue = Number(callCostElement.value);
    smsCostValue = Number(smsCostElement.value);
    warningLevel = Number(warningSettings.value);
    criticalLevel = Number(criticalSettings.value);
}
updateButton.addEventListener('click', settingsBill);

//  radio buttons function
function radioSettings(){
    var checkedBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");

        var billItemTypeWithSettings = checkedBtn.value;
            if (billItemTypeWithSettings === "call"){
                callTotalThree += callCostValue;
            }else if(billItemTypeWithSettings === "sms"){
                smsTotalThree += smsCostValue;
        }

    callElement.innerHTML = callTotalThree.toFixed(2);
    smsElement.innerHTML = smsTotalThree.toFixed(2);
    totalBillCost = callTotalThree + smsTotalThree;
    total.innerHTML = totalBillCost.toFixed(2);
    
    // adding color accordingly
    totalColor(totalBillCost);
}
addButton.addEventListener('click', radioSettings);

//  color function
function totalColor(totalBillCost){
    total.classList.remove("danger");
    total.classList.remove("warning");

    if(totalBillCost >= warningLevel && totalBillCost < criticalLevel){
        total.classList.add("warning");
    }else if(totalBillCost >= criticalLevel){
        total.classList.add("danger");
    }
    
    // prevent calls from being added when criticalLevel is exceeded
    if(totalBillCost >= criticalLevel){
        callTotalThree = undefined;
        smsTotalThree = undefined;
        totalBillCost = undefined;

        // preventing undefined from returning NaN after criticalLevel is reached
        callTotalThree = callTotalThree || 0;
        smsTotalThree = callTotalThree || 0;
        totalBillCost = totalBillCost || 0;
    }
}