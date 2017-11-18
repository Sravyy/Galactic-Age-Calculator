import {AgeCalculator} from './../js/AgeCalculator.js';

$(document).ready(function() {
  $('#formOne').submit(function(event) {
    event.preventDefault();
    let date = new Date($("#dob").val());
    let calculator = new AgeCalculator(date);
    $('#mercury').text(calculator.ageOnMercury());
    $('#venus').text(calculator.ageOnVenus());
    $('#mars').text(calculator.ageOnMars());
    $('#jupiter').text(calculator.ageOnJupiter());

  });
});
});
