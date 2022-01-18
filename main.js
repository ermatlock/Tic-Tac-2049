/*~~~~~~~~~~~~~~QUERY SELECTORS~~~~~~~~~~~~~~~~~~*/
const gameInfo = document.getElementById('gameInfo');
const player1Wins = document.getElementById('player1Wins');
const player2Wins = document.getElementById('player2Wins');
const ticTacBox = document.getElementById('ticTacBox');
const playButton = document.getElementById('playButton')

/*~~~~~~~~~~~~~~EVENT LISTENERS~~~~~~~~~~~~~~~~~~*/
ticTacBox.addEventListener('click', function(e) {
	takeTurn(e);
});
playButton.addEventListener('click', playMusic)

/*~~~~~~~~~~~~~~~~~~~~AUDIO~~~~~~~~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~~~~FUNCTIONS~~~~~~~~~~~~~~~~~~~~*/
function playAudio() {
	backgroundMusic.play();
	backgroundMusic.loop=true;
}

function pauseAudio() {
	backgroundMusic.pause();
}

function playMusic() {
	if (playButtonStatus === false) {
		playButton.innerText = "MUSIC ON";
		playButtonStatus = true;
		playAudio()
	} else {
		playButton.innerText = "MUSIC OFF";
		playButtonStatus = false;
		pauseAudio()
	}
}

function playSoundEffect(){
  bleep.play();
}


function takeTurn(e) {
	if (currentGame.currentPlayer === 1) {
		gameInfo.innerText = "Turn: Player 2";
		currentGame.currentPlayer = 2;
		choosePosition(player1, e.target.id);
	} else if (currentGame.currentPlayer === 2) {
		gameInfo.innerText = "Turn: Player 1";
		currentGame.currentPlayer = 1;
		choosePosition(player2, e.target.id);
	}
}

function choosePosition(player, position) {
	for (var i = 0; i < currentGame.positions.length; i++) {
		if (position === currentGame.positions[i]) {
			placeToken(player, position);
			playSoundEffect()
			currentGame.positions.splice(i, 1);
			player.choices.push(position);
			checkEach(player);
		}
	}
}

function placeToken(player, position) {
	eval(position)["innerHTML"] = `<h1 class="glitch">${player.token}</h1>`
}

function switchPlayers() {
	if (currentGame.startingPlayer === 1) {
		currentGame.startingPlayer = 2;
		gameInfo.innerText = "Turn: Player 2";
		currentGame.currentPlayer = 2;
	} else {
		currentGame.startingPlayer = 1;
		gameInfo.innerText = "Turn: Player 1";
		currentGame.currentPlayer = 1;
	}
}

function checkEach(player) {
	checkForWin(player, ["a1", "a2", "a3"]);
	checkForWin(player, ["b1", "b2", "b3"]);
	checkForWin(player, ["c1", "c2", "c3"]);
	checkForWin(player, ["a1", "b1", "c1"]);
	checkForWin(player, ["a2", "b2", "c2"]);
	checkForWin(player, ["a3", "b3", "c3"]);
	checkForWin(player, ["a1", "b2", "c3"]);
	checkForWin(player, ["c1", "b2", "a3"]);
}

function checkForWin(player, winState) {
	var matches = [];
	for (var i = 0; i < player.choices.length; i++) {
		for (var j = 0; j < winState.length; j++) {
			if (player.choices[i] === winState[j]) {
				matches.push(player.choices[i]);
			}
		}
	}
	if (matches.length === 3) {
		player.wins++;
		gameInfo.innerText = `Player ${player.id} WON!`;
		ticTacBox.classList.add("block-clicks");
		var playerWins = new Audio(`./assets/sfx/player-${player.id}-wins.mp3`);
		playerWins.play()
		nextGame()
	}	else if (currentGame.positions.length === 0 && matches.length < 3) {
		gameInfo.innerText = `DRAW!`;
		draw.play();
		ticTacBox.classList.add("block-clicks");
		nextGame()
	}
}

function clearBoard() {
	gameInfo.innerText = `Turn: Player ${currentGame.startingPlayer}`;
	a1.innerText = "";
	a2.innerText = "";
	a3.innerText = "";
	b1.innerText = "";
	b2.innerText = "";
	b3.innerText = "";
	c1.innerText = "";
	c2.innerText = "";
	c3.innerText = "";
}

function updateWins() {
	player1Wins.innerText = player1.wins;
	player2Wins.innerText = player2.wins;
}

function nextGame() {
	setTimeout(function() {
		ticTacBox.classList.remove("block-clicks");
		currentGame.resetGame();
		clearBoard();
		updateWins();
		switchPlayers();
	}, 2500);
}
