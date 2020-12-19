// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { compareNumbers } from '../gameUtils.js'

const test = QUnit.test;

test('tests that compare numbers returns 1, 0, -1 if the number is too high, correct, or too low', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const userGuess1 = 1;
    const userGuess2 = 5;
    const userGuess3 = 8;
    const actualNumber = 5

    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = compareNumbers(userGuess1, actualNumber);
    const actual2 = compareNumbers(userGuess2, actualNumber);
    const actual3 = compareNumbers(userGuess3, actualNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, -1);
    expect.equal(actual2, 0);
    expect.equal(actual3, 1);
});
