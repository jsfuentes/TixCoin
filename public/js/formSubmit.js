//Must be imported after deploy-smartcontract is imported
console.log("FORM SUBMIT ACTIVE");

var sampleEvent = {
  name: "LA Hacks",
  description: "Ok hackathon ever",
  location: "Here",
  type: "Hackathon",
  price: 0,
  count: 1000,
  date: "3/31/18",
  start: 99999998, //in UTC
  end: 99999999, //in UTC
  organizerName: "UCLA",
  organizerDescription: "the best school",
  address: "0x97ee4eac010d8e8c5577200cbfa157dfc6c551a2",
  img: "/076798b7331be39f6f2d3f6d89ed888a"
};

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
    // var $inputs = $('#eventCreation :input');
    var rawFormData = $( this ).serializeArray();
    var formDict = {};
    rawFormData.forEach(function(input) {
      formDict[input.name] = input.value;
    });

    var dateUTC = timeDateConversion(formDict['date'], formDict['time']);



    alert("Check Console, we testingggg");
    event.preventDefault();
  });
});
