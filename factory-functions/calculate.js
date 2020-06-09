function CalculateBill(){
  var call = 0;
  var sms = 0;
  var overallTotal = 0;

  var warningValue = 20;
  var criticalValue = 30;

  function returnCall(){
    return call;
  }

  function returnSms(){
    return sms;
  }

  function returnTotal(){
    overallTotal = call + sms;
    return overallTotal;
  }

  function billType(bill){
    var billItems = bill.split(",");
    
    for(var i = 0; i < billItems.length; i++){
      var billItem = billItems[i].trim();

      if(billItem === "call"){
        call += 2.75;
      } else if(billItem === "sms"){
        sms += 0.75;
      }
    }
  }

  function color(){
    if(returnTotal() >= warningValue && returnTotal() < criticalValue){
      return "warning";
    } else if(returnTotal() >= criticalValue){
      return "critical";
    }
  }

  return {
    returnCall,
    returnSms,
    returnTotal,
    billType,
    color
  }
}