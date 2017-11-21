import {AgeCalculator} from './../js/AgeCalculator.js';

describe('AgeCalculator', function() {
  it('should test whether age become seconds is true', function() {
    var calculator = new AgeCalculator(1994, 12, 10)
    expect(calculator.convertAgeToSeconds()).toEqual(1511296302 )
  });

    it('should test whether years in mercury is true', function() {
      var calculator = new AgeCalculator(1994, 12, 10)
      expect(calculator.ageOnMercury()).toEqual(195)
    });

    it('should test whether years in venus is true', function() {
      var calculator = new AgeCalculator(1994, 12, 10)
      expect(calculator.ageOnVenus()).toEqual(75)
    });

    it('should test whether years in mars is true', function() {
      var calculator = new AgeCalculator(1994, 12, 10)
      expect(calculator.ageOnMars()).toEqual(25)
    });

    it('should test whether years in jupiter is true', function() {
      var calculator = new AgeCalculator(1994, 12, 10)
      expect(calculator.ageOnJupiter()).toEqual(3)
    });

    it('should test whether remaining years in earth is true', function() {
      var calculator = new AgeCalculator(1994, 12, 10)
      expect(calculator.lifeExpOnEarth()).toEqual(33)
    });

    it('should test whether remaining years in mercury is true', function() {
      var galacticCheck = new AgeCalculator(1994, 12, 10)
      expect(galacticCheck.yearsOnMercury()).toEqual(137)
    });

    it('should test whether remaining years in venus is true', function() {
      var galacticCheck = new AgeCalculator(1994, 12, 10)
      expect(galacticCheck.yearsOnVenus()).toEqual(53)
    });

    it('should test whether remaining years in mars is true', function() {
      var galacticCheck = new AgeCalculator(1994, 12, 10)
      expect(galacticCheck.yearsOnMars()).toEqual(17)
    });

    it('should test whether remaining years in jupiter is true', function() {
      var galacticCheck = new AgeCalculator(1994, 12, 10)
      expect(galacticCheck.yearsOnJupiter()).toEqual(2)
    });
});
