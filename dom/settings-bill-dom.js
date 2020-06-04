var callElement = document.querySelector(".callTotalSettings");
var smsElement = document.querySelector(".smsTotalSettings");

//  settings variables
var callCostElement = document.querySelector(".callCostSetting");
var smsCostElement = document.querySelector(".smsCostSetting");
var warningSettings = document.querySelector(".warningLevelSetting");
var criticalSettings = document.querySelector(".criticalLevelSetting");


//get a reference to the add button
var addButton = document.querySelector(".checkedButton");

//  get a reference to the 'Update settings' button
var updateButton = document.querySelector(".updateSettings");

// create a variables that will keep track of all three totals.
var total = document.querySelector(".totalSettings");

var settingsBillInstance = BillWithSettings();

// update settings function
function settingsBill(){
    settingsBillInstance.setCallCost(Number(callCostElement.value));
    settingsBillInstance.setSmsCost(Number(smsCostElement.value));
    settingsBillInstance.setWarningLevel(Number(warningSettings.value));
    settingsBillInstance.setCriticalLevel(Number(criticalSettings.value));

    totalColor();
}
updateButton.addEventListener('click', settingsBill);

function radioSettings(){
    var checkedBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");

        if(checkedBtn){
            var billItemTypeWithSettings = checkedBtn.value;
            if(billItemTypeWithSettings === "call"){
                settingsBillInstance.makeCall();
        }
            if(billItemTypeWithSettings === "sms"){
                settingsBillInstance.sendSms();
        }
    }
        
    callElement.innerHTML = settingsBillInstance.getTotalCallCost().toFixed(2);
    smsElement.innerHTML = settingsBillInstance.getTotalSmsCost().toFixed(2);
    total.innerHTML = settingsBillInstance.getTotalCost().toFixed(2);
    
    totalColor();
}
addButton.addEventListener('click', radioSettings);

//  color function
function totalColor(){
    total.classList.remove("critical");
    total.classList.remove("warning");
    total.classList.add(settingsBillInstance.totalClassName());
}