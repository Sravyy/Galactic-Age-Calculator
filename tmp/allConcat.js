import {Haiku} from './../js/haiku.js';

// $(function(){
// $(".formOne").submit(function(event){
//   event.preventDefault();
//
//   var userInput = $("#input").val().toUpperCase();
//   let match;
//   const lineCheck = userInput.match(/\r|\n/g);
//   if (lineCheck === null)
//   {
//     match = 0;
//   } else {
//     match = lineCheck.length;
//   }
//
//   if(match === 2){
//
//     var haikuChecker = new Haiku();
//     var output=haikuChecker.checkHaiku(userInput);
//     $("#output").text("It is a Haiku!!!");
//     }
//   else {
//     alert("Not a Haiku");
//   }
//
// });
// });


$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    let lineOne = $("#lineOne").val();
    let lineTwo = $("#lineTwo").val();
    let lineThree = $("#lineThree").val();

  let userInput = new Haiku(lineOne, lineTwo, lineThree);
  let resultLine = userInput.CheckLines();
  let resultSyllables = userInput.CheckSyllables();

  $("#output").text("Congrats! This is a Haiku.");

  if (resultLine == true && resultSyllables == true ) {
  } else {
    $("#output").text("I am sorry. This is not a proper Haiku. Better luck next time :)");
  }
  });
});

import {HaikuGen} from './../js/HaikuGenerator.js';

$(document).ready(function() {
  $("button#newHaiku").submit(function(event) {
    event.preventDefault();


    var autoHaiku = new HaikuGen();
    let ipAddress = autoHaiku.GenerateIP();


    let newHaiku = autoHaiku.DecodeIP(ipAddress);

    $("#output").text(newHaiku);

  });

});
