//Actions
// Guess a number
// generate a new random number
// generate hot or cold
// generate the number of guesses

const GUESS_NUMBER = 'GUESS_NUMBER';
const guessNumber = (userNumber) => {
    type: GUESS_NUMBER,
    userNumber
};


const GENERATE_NUMBER = 'GENERATE_NUMBER';
const generateNumber = (randomNumber) => {
    type: GENERATE_NUMBER,
    randomNumber
};

const GENERATE_TEMP = 'GENERATE_TEMP';
const generateTemp = (temperature) => {
    type: GENERATE_TEMP,
    temperature
}

const GENERATE_GUESSES = 'GENERATE_GUESSES';
const generateGuesses = (numGuesses) => {
    type: GENERATE_GUESSES,
    numGuesses
};
