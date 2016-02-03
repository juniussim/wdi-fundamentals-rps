////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
 ////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {	
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.

    move = move || getInput();
    // not sure if i have to use the return statement 
     // 	Another Alternative
//     var move = prompt();
//     if (move != null) {
//     	move = move;
//     } else {
//     	move = getInput();
//     	return move;
//     }
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    move = move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === computerMove) {
    	winner = 'tie';
    } else if ( playerMove === 'scissors' && computerMove === 'paper') {
    	winner = 'player';
    } else if ( playerMove === 'scissors' && computerMove === 'rock') {
    	winner = 'computer';
    } else if ( playerMove === 'paper' && computerMove === 'scissors') {
    	winner = 'computer';
    } else if ( playerMove === 'paper' && computerMove === 'rock') {
    	winner = 'player';
    } else if (playerMove === 'rock' && computerMove === 'scissors') {
    	winner = 'player';
    } else if (playerMove === 'rock' && computerMove === 'paper') {
    	winner = 'computer';
    }		    
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    if (winner = 'player') {
    	playerWins = playerWins + 1;
    } else if ( winner ='computer') {
    	computerWins = computerWins + 1;
    } else if ( winner = 'tie') {
    	playerwWins = playerWins;
    	computerWins = computerWins;
	}
    return [playerWins, computerWins];
    if (playerWins < 5 || computerWins < 5) {
		console.log("let's play Rock, Paper, Scissors");
		getInput(); 
	} else {
		console.log("Good game. Thank you.");
}

