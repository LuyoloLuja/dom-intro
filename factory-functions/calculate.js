function CalculateBill(){
  var call = 0;
  var sms = 0;
  var overallTotal = 0;

  var warningValue = 0;
  var criticalValue = 0;

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
    if(bill === "call"){
      call += 2.75;
    } else if(bill === "sms"){
      sms += 0.75
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