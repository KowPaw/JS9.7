// button new game
var newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', newGame);

// players buutons
var pickRock = document.getElementById('js-playerPick_rock'),
    pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function() { playerPick('rock') });
pickPaper.addEventListener('click', function() { playerPick('paper') });
pickScissors.addEventListener('click', function() { playerPick('scissors') });

// initial values
var gameState = 'notStarted',
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };

// game elements
var newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement');

function setGameElements() {
  	switch(gameState) {
    	case 'started':
       		newGameElem.style.display = 'none';
       		pickElem.style.display = 'block';
       		resultsElem.style.display = 'block';
      		break;
    	case 'ended':
        	newGameBtn.innerText = 'Jeszcze raz';
    	case 'notStarted':
    	default:
        	newGameElem.style.display = 'block';
        	pickElem.style.display = 'none';
        	resultsElem.style.display = 'none';
  	}
}

setGameElements();

// new game
var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');

function newGame() {
 	player.name = prompt('Please enter your name', 'imię gracza');
  	if (player.name) {
    	player.score = computer.score = 0;
    	gameState = 'started';
    	setGameElements();
    	playerNameElem.innerHTML = player.name;
	    setGamePoints();
  	}

}

//var x = Math.random();

function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}

var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

// game logic
function checkRoundWinner(playerPick, computerPick) {
	playerResultElem.innerHTML = computerResultElem.innerHTML = '';
  	var winnerIs = 'player';
 	//var delayedEndGame = setTimeout(endGame, 10);
    if (playerPick == computerPick) {
        winnerIs = 'noone'; // remis
    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock')) {
	        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Win!";
        player.score++;
        setGamePoints();
        setTimeout(endGame, 10);
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Win!";
        computer.score++;
        setGamePoints();
        setTimeout(endGame, 10);
    }
}

function playerPick(playerPick) {
    var computerPick = getComputerPick();
    playerPickElem.innerHTML = playerPick;
	computerPickElem.innerHTML = computerPick;
    checkRoundWinner(playerPick, computerPick);
}

// score update
function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

// finish game
var winner = document.getElementById('js-winner');

function endGame () {
	if (player.score == 10) {
		gameState = 'ended';
		alert('The winner is '+player.name);
		setGameElements();
    	winner.innerHTML = 'The winner is player';
	}
	if (computer.score == 10) {
		gameState = 'ended';
		alert('The winner is computer');
		setGameElements();
    	winner.innerHTML = 'The winner is computer';
	}
}