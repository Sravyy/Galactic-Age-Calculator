import {Haiku} from './../js/haiku.js';

describe('Haiku', function() {

  it('should test whether there are 3 lines in a haiku', function() {

    let userInput = new Haiku("one", "two", "three");

    expect(userInput.CheckLines()).toEqual(true)
  });
});

describe('Haiku', function() {

  it('should test whether there are not 3 lines in a haiku', function() {

    let userInput = new Haiku("one", "two", "");
    console.log()
    expect(userInput.CheckLines()).toEqual(false)

  });
});

describe('Haiku', function() {

  it('should test whether lines have the correct syllable count', function() {

    let userInput = new Haiku("start off with five lines", "another seven right here", "Now another five");

    expect(userInput.CheckSyllables()).toEqual(true)
  });
});
