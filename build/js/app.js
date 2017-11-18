(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AgeCalculator = exports.AgeCalculator = function () {
  function AgeCalculator(dob) {
    _classCallCheck(this, AgeCalculator);

    this.secondsInOneYear = 31536000; // 60 * 60 * 24 * 365
    this.dob = dob; // Date object
    this.lifeExpectancy = Math.random() * (82 - 76) + 76; //life expectancy between the ages of 76 and 81 in earth years
  }

  _createClass(AgeCalculator, [{
    key: "convertAgeToSeconds",
    value: function convertAgeToSeconds() {
      //Converting given bodInput to seconds

      var currentDate = new Date();
      return parseInt(currentDate.setTime(this.dob.getTime()) / 1000); //divide by 1000 as the getTime returns milliseconds
    }
  }, {
    key: "ageInYears",
    value: function ageInYears() {
      //converting age in yearToSeconds

      var age = parseInt(this.convertAgeToSeconds() / this.secondsInOneYear);
      return age;
    }
  }, {
    key: "lifeExpOnEarth",
    value: function lifeExpOnEarth() {
      //caliculating life expectancy on earth

      var lifeExpOnEarth = parseInt(this.lifeExpectancy - this.ageInYears());
      return lifeExpOnEarth;
    }
  }, {
    key: "ageOnMercury",
    value: function ageOnMercury() {

      var mercuryAge = parseInt(this.ageInYears() / 0.24);
      return mercuryAge;
    }
  }, {
    key: "ageOnVenus",
    value: function ageOnVenus() {
      var venusAge = parseInt(this.ageInYears() / 0.62);
      return venusAge;
    }
  }, {
    key: "ageOnMars",
    value: function ageOnMars() {
      var marsAge = parseInt(this.ageInYears() / 1.88);
      return marsAge;
    }
  }, {
    key: "ageOnJupiter",
    value: function ageOnJupiter() {
      var jupiterAge = parseInt(this.ageInYears() / 11.86);
      return jupiterAge;
    }
  }, {
    key: "yearsOnMercury",
    value: function yearsOnMercury() {
      var lifeExpOnMercury = parseInt(this.lifeExpOnEarth() / 0.24);
      return lifeExpOnMercury;
    }
  }, {
    key: "yearsOnVenus",
    value: function yearsOnVenus() {
      var lifeExpOnVenus = parseInt(this.lifeExpOnEarth() / 0.62);
      return lifeExpOnVenus;
    }
  }, {
    key: "yearsOnMars",
    value: function yearsOnMars() {
      var lifeExpOnMars = parseInt(this.lifeExpOnEarth() / 1.88);
      return lifeExpOnMars;
    }
  }, {
    key: "yearsOnJupiter",
    value: function yearsOnJupiter() {
      var lifeExpOnJupiter = parseInt(this.lifeExpOnEarth() / 11.86);
      return lifeExpOnJupiter;
    }

    // lifeOverExpectancy(){
    //   let lifeOverExpectancy = this.ageInYears - this.lifeExpOnEarth;
    //   return lifeOverExpectancy;
    // }


  }, {
    key: "isAlive",
    value: function isAlive() {
      if (this.ageInYears() >= this.lifeExpectancy) {
        return true;
      }
      return false;
    }
  }]);

  return AgeCalculator;
}();

},{}],2:[function(require,module,exports){
'use strict';

var _AgeCalculator = require('./../js/AgeCalculator.js');

$(document).ready(function () {
    $('#formOne').submit(function (event) {
        event.preventDefault();
        var dob = new Date($("#dob").val());
        var calculator = new _AgeCalculator.AgeCalculator(dob);

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

},{"./../js/AgeCalculator.js":1}]},{},[2]);
