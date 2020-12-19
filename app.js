// import functions and grab DOM elements
import { compareNumbers } from './gameUtils.js';
const gameBox = document.querySelector('.game-box');
const triesRemaining = document.querySelector('.tries-remaining');
const hint = document.querySelector('.hint');
const usersGuess = document.querySelector('.users-guess');
const submitButton = document.querySelector('.submit-button');
const winResults = document.querySelector('.win-results');
const ohNoResults = document.querySelector('.oh-no-results');

// initialize state
// choose random number 
let number = Math.ceil(Math.random() * 20);

let tries = 3;

// set event listeners to update state and DOM
submitButton.addEventListener("click", () => {
	let usersNumber = Number(usersGuess.value);

	let guessResponse = compareNumbers(usersNumber, number);

	if (guessResponse === 1) {
		hint.textContent = 'Oops, too high!';
		tries--;
		triesRemaining.textContent = `You have ${tries} remaining`;

		if (tries <= 0) {
			ohNoResults.classList.remove("hidden");
			gameBox.classList.add("hidden");
		}

	} else if (guessResponse === -1) {
		hint.textContent = 'Oops, too low!';
		tries--;
		triesRemaining.textContent = `You have ${tries} remaining`;

		if (tries <= 0) {
			ohNoResults.classList.remove("hidden");
			gameBox.classList.add("hidden");
		}

	} else if (guessResponse === 0) {
		console.log('you win');
		gameBox.classList.add("hidden");
		winResults.classList.remove("hidden");
	}
})
