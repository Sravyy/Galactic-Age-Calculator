import {AgeCalculator} from './../js/AgeCalculator.js';

$(document).ready(function() {
  $('#formOne').submit(function(event) {
    event.preventDefault();
    let dob = new Date($("#dob").val());
    let calculator = new AgeCalculator(dob);

    $("#output").show();
    $('#age-in-seconds').text(calculator.convertAgeToSeconds());

    $('#mercury').text(calculator.ageOnMercury());
    $('#venus').text(calculator.ageOnVenus());
    $('#mars').text(calculator.ageOnMars());
    $('#jupiter').text(calculator.ageOnJupiter());

    $('#mercuryLife').text(calculator.yearsOnMercury());
    $('#venusLife').text(calculator.yearsOnVenus());
    $('#marsLife').text(calculator.yearsOnMars());
    $('#jupiterLife').text(calculator.yearsOnJupiter());

  });
});
