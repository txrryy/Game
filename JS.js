// Generate random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Function to check user's guess
function checkGuess() {
	// Get user's guess
	const guess = document.getElementById("guess").value;

	// Check if guess is valid
	if (guess < 1 || guess > 100 || isNaN(guess)) {
		document.getElementById("message").innerHTML = "Please enter a valid number between 1 and 100";
		return;
	}

	// Check if guess is correct
	if (guess == randomNumber) {
		document.getElementById("message").innerHTML = `Congratulations, you guessed the number ${randomNumber}!`;
	} else if (guess < randomNumber) {
		document.getElementById("message").innerHTML = "Sorry, your guess is too low. Try again.";
	} else {
		document.getElementById("message").innerHTML = "Sorry, your guess is too high. Try again.";
	}

	// Clear input field
	document.getElementById("guess").value = "";
}
