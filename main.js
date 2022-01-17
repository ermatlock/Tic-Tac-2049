var gameInfo = document.getElementById("gameInfo");
var player1Wins = document.getElementById("player1Wins");
var player2Wins = document.getElementById("player2Wins");
var ticTacBox = document.getElementById("ticTacBox");

ticTacBox.addEventListener("click", function(e) {
	takeTurn(e);
});

function takeTurn(e) {
	console.log(e.target.id);
	console.log("current player " + currentGame.currentPlayer);
	console.log("current position " + e.target.id);
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
	console.log(`choosePosition ${player.id} at ${position}`);

	for (var i = 0; i < currentGame.positions.length; i++) {
		if (position === currentGame.positions[i]) {
			console.log("position available");
			placeToken(player, position);
			currentGame.positions.splice(i, 1);
			player.choices.push(position);
			checkEach(player);
		}
	}
}

function placeToken(player, position) {
	console.log(`Place Token ${player.token} at ${position}`);
	console.log(eval(position));
	eval(position)["innerText"] = player.token;
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
		setTimeout(function() {
			ticTacBox.classList.remove("block-clicks");
		}, 2500);
		setTimeout(function() {
			currentGame.resetGame();
		}, 2500);
		setTimeout(function() {
			clearBoard();
		}, 2500);
		setTimeout(function() {
			updateWins();
		}, 2500);
		setTimeout(function() {
			switchPlayers();
		}, 2500);
	} else if (currentGame.positions.length === 0 && matches.length !== 3) {
		gameInfo.innerText = "DRAW!";
		ticTacBox.classList.add("block-clicks");
		setTimeout(function() {
			ticTacBox.classList.remove("block-clicks");
		}, 2500);
		setTimeout(function() {
			currentGame.resetGame();
		}, 2500);
		setTimeout(function() {
			clearBoard();
		}, 2500);
		setTimeout(function() {
			updateWins();
		}, 2500);
		setTimeout(function() {
			switchPlayers();
		}, 2500);
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

// function nextGame() {
// 	console.log('nextGame')
// 	// player1.choices = [];
// 	// player2.choices = [];
// 	// currentGame.positions = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'];
// 	// currentGame.currentPlayer = 1
// 	// console.log(player1.choices + player2.choices + currentGame.positions + currentGame.currentPlayer)
// }
