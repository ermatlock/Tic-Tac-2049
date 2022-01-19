/*~~~~~~~~~~~~~~QUERY SELECTORS~~~~~~~~~~~~~~~~~~*/
var gameInfo = document.getElementById("gameInfo");
var player1Box = document.getElementById("p1");
var player2Box = document.getElementById("p2");
var player1Wins = document.getElementById("player1Wins");
var player2Wins = document.getElementById("player2Wins");
var ticTacBox = document.getElementById("ticTacBox");
var playButton = document.getElementById("playButton");

/*~~~~~~~~~~~~~~EVENT LISTENERS~~~~~~~~~~~~~~~~~~*/
ticTacBox.addEventListener("click", function(e) {
	takeTurn(e);
});
playButton.addEventListener("click", playMusic);

/*~~~~~~~~~~~~~~~~~~FUNCTIONS~~~~~~~~~~~~~~~~~~~~*/
function playMusic() {
	if (playButtonStatus === false) {
		playButton.innerText = "MUSIC ON";
		remove(playButton, "button-off");
		playButtonStatus = true;
		backgroundMusic.play();
		backgroundMusic.loop = true;
	} else {
		playButton.innerText = "MUSIC OFF";
		add(playButton, "button-off");
		playButtonStatus = false;
		backgroundMusic.pause();
	}
}

function add(element, selector) {
	element.classList.add(selector);
}

function remove(element, selector) {
	element.classList.remove(selector);
}

function updateGameInfo(string) {
	gameInfo.innerText = string;
}

/*~~~~~~~~~~~~~~~~~~GAME FUNCTIONS~~~~~~~~~~~~~~~~~~~~*/
function takeTurn(e) {
	if (currentGame.currentPlayer === 1) {
		choosePosition(player1, e.target.id);
	} else if (currentGame.currentPlayer === 2) {
		choosePosition(player2, e.target.id);
	}
}

function choosePosition(player, position) {
	for (var i = 0; i < currentGame.positions.length; i++) {
		if (position === currentGame.positions[i]) {
			currentGame.positions.splice(i, 1);
			player.choices.push(position);
			placeToken(player, position);
			bleep.play();
			checkWinOrDraw(player);
			changePlayer();
		}
	}
}

function changePlayer() {
	if (currentGame.currentPlayer === 1) {
		updateGameInfo("Turn: Player 2");
		add(player2Box, "active");
		remove(player1Box, "active");
		currentGame.currentPlayer = 2;
	} else if (currentGame.currentPlayer === 2) {
		updateGameInfo("Turn: Player 1");
		add(player1Box, "active");
		remove(player2Box, "active");
		currentGame.currentPlayer = 1;
	}
}

function placeToken(player, position) {
	eval(position)["innerHTML"] = `<h1 class="glitch">${player.token}</h1>`;
}

function checkWinOrDraw(player) {
	for (var k = 1; k < 9; k++) {
		winState = eval(`winState${k}`);
		checkWinStates(player, winState);
	}
	if (player.winner) {
		logWin(player);
	} else {
		checkForDraw();
	}
}

function checkWinStates(player, winState) {
	var matches = [];
	for (var i = 0; i < player.choices.length; i++) {
		for (var j = 0; j < winState.length; j++) {
			if (player.choices[i] === winState[j]) {
				matches.push(player.choices[i]);
			}
		}
	}
	if (matches.length === 3) {
		player.winner = true;
	}
}

function logWin(player) {
	player.addWins();
	updateGameInfo(`Player ${player.id} WINS!`);
	ticTacBox.classList.add("block-clicks");
	var playerWins = new Audio(`./assets/sfx/player-${player.id}-wins.mp3`);
	playerWins.play();
	nextGame();
}

function checkForDraw() {
	if (currentGame.positions.length === 0) {
		updateGameInfo("DRAW!");
		ticTacBox.classList.add("block-clicks");
		draw.play();
		nextGame();
	}
}

function updateWins() {
	player1Wins.innerText = player1.wins;
	player2Wins.innerText = player2.wins;
}

function nextGame() {
	setTimeout(function() {
		currentGame.resetGame();
		currentGame.switchStartingPlayer();
		ticTacBox.classList.remove("block-clicks");
		clearBoard();
		updateWins();
	}, 3500);
}

function switchPlayerView(activePlayerId, inactivePlayerId) {
	updateGameInfo(`Turn: Player ${activePlayerId}`);
	add(eval(`player${activePlayerId}Box`), "active");
	remove(eval(`player${inactivePlayerId}Box`), "active");
	eval(`player${activePlayerId}Start`).play();
}

function clearBoard() {
	for (var i = 0; i < positions.length; i++) {
		var gridId = eval(positions[i]);
		gridId.innerText = "";
	}
}
