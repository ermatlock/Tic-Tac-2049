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
function playMusic() {
	if (playButtonStatus === false) {
		playButton.innerText = "MUSIC ON";
		playButtonStatus = true;
		backgroundMusic.play();
		backgroundMusic.loop=true;
	} else {
		playButton.innerText = "MUSIC OFF";
		playButtonStatus = false;
		backgroundMusic.pause();
	}
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
			bleep.play();
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
	check1 = checkForWin(player, winStates1)
	check2 = checkForWin(player, winStates2)
	check3 = checkForWin(player, winStates3)
	check4 = checkForWin(player, winStates4)
	check5 = checkForWin(player, winStates5)
	check6 = checkForWin(player, winStates6)
	check7 = checkForWin(player, winStates7)
	check8 = checkForWin(player, winStates8)
	if (check1 || check2 || check3 || check4 || check5 || check6 || check7 || check8) {
		win(player);
	} else {
		checkForDraw();
	}
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
		return true;

	} else {
		return false;
	}
}

function win(player) {
	player.wins++;
	gameInfo.innerText = `Player ${player.id} WON!`;
	ticTacBox.classList.add("block-clicks");
	var playerWins = new Audio(`./assets/sfx/player-${player.id}-wins.mp3`);
	playerWins.play()
	nextGame()
}

function checkForDraw() {
	if (currentGame.positions.length === 0) {
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
