//Must be imported after deploy-smartcontract is imported
console.log("FORM SUBMIT ACTIVE");

var submitted = false;

function timeDateConversion(date, time){
  var timeSplit = time.split(' ');
  var hour = timeSplit[0];
  var minute = timeSplit[2];
  var era = timeSplit[3];

  if(era === "PM") {
    if(hour !== 12){
      hour = parseInt(hour) + 12;
    }
  } else if (era === "AM") {
    if(hour === 12) {
      hour = parseInt(hour) = 0;
    }
  }
  var parsedD = Date.parse(date);
  var myDate = new Date(parsedD);

  myDate.setHours(hour, minute);
  var dateUTC = myDate.getTime();
  return dateUTC;
}

$(document).ready(function(){
  $("#eventCreation").submit(function( event ) {
    //early exit and submitting if already made smart contract, needed cuz I already figured out how to send images thorugh the form
    if(submitted){
      console.log("Submitting Form");
      return;
    }

    // var $inputs = $('#eventCreation :input');
    var rawFormData = $( this ).serializeArray();
    var formDict = {};
    rawFormData.forEach(function(input) {
      formDict[input.name] = input.value;
    });

    var dateUTC = timeDateConversion(formDict['date'], formDict['time']);
    console.log(formDict);

    console.log("Deploying Contract");
    //Deploy Contract will submit the form when the address is complete
    DeployContract(formDict.name, 'ttt', formDict.count, formDict.location, "empty description", dateUTC, dateUTC, formDict.price, formDict.organizer, formDict.organizerInfo);

    submitted = true;
    // alert("Check Console, we testingggg");
    event.preventDefault();
  });
});
