export class AgeCalculator {
constructor () {

}

ConvertAgeToSeconds(age) {
    //Converting given ageInput to seconds
    let year = 31,557,600;
    let yearToSeconds = age*year;

    return yearToSeconds;
  }

  CheckSyllables() {
    //Checking if Line 1 has 5 syllables, line 2 has 7 and line 3 has 5 syllables

    var syllable = require('syllable');
    let IsHaiku = false;
    let lineOne = this.lineOne;
    let lineTwo = this.lineTwo;
    let lineThree = this.lineThree;
    let lineOneSyllable = syllable(lineOne);
    let lineTwoSyllable = syllable(lineTwo);
    let lineThreeSyllable = syllable(lineThree);


    if( lineOneSyllable == 5 && lineTwoSyllable == 7 && lineThreeSyllable == 5)
    {
      IsHaiku = true;
    }
    return IsHaiku;
  }

}
