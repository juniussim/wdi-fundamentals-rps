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
    return move || getInput();
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
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === computerMove) {
    	winner = 'tie';
     	return winner;
    } else if ( playerMove === 'scissors' && computerMove === 'paper') {
    	winner = 'player';
    	return winner;
    } else if ( playerMove === 'scissors' && computerMove === 'rock') {
    	winner = 'computer';
    	return winner;
    } else if ( playerMove === 'paper' && computerMove === 'scissors') {
    	winner = 'computer';
    	return winner;
    } else if ( playerMove === 'paper' && computerMove === 'rock') {
    	winner = 'player';
    	return winner;
    } else if (playerMove === 'rock' && computerMove === 'scissors') {
    	winner = 'player';
    	return winner;
    } else if (playerMove === 'rock' && computerMove === 'paper') {
    	winner = 'computer';
    	return winner;
    } 	    
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins < 5 && computerWins < 5){
    	if (getWinner(getPlayerMove(),getComputerMove()) === "player") {
    		console.log("Player wins! Player gets one point");
    		playerWins += 1;
    	} else if (getWinner(getPlayerMove(),getComputerMove()) === "computer") {
    		console.log("Computer wins! Computer gets one point");
    		computerWins +=1;
    	} else if (getWinner(getPlayerMove(),getComputerMove()) === "tie") {
    		console.log("Its a tie. No one gets any point.");
    		playerWins = playerWins;
    		computerWins = computerWins;
    	}
    }
    
    // can use a switch statement
    
    

