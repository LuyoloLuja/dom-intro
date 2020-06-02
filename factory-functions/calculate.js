function calculateBill(billElement) {
    var billItems = billElement;
    var billType = billItems.split(',');
    var call = 0;
    var sms = 0;
  
    for (var i = 0; i < billType.length; i++) {
      var bill = billType[i].trim();
      if (bill === 'call') {
        call += 2.75;
      }
      else if (bill === 'sms') {
        sms += 0.75;
      }
    }
    var total = call + sms;
    return total.toFixed(2);
}