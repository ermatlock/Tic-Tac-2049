class Game {
	constructor(player1, player2) {
		this.player1 = new Player(1, "./assets/images/x-token.svg", "X");
		this.player2 = new Player(2, "./assets/images/o-token.svg", "O");
		this.currentPositions = [
			"a1",
			"a2",
			"a3",
			"b1",
			"b2",
			"b3",
			"c1",
			"c2",
			"c3"
		];
		this.currentPlayer = 1;
		this.startingPlayer = 1;
		this.winStates = [
			["a1", "a2", "a3"],
			["b1", "b2", "b3"],
			["c1", "c2", "c3"],
			["a1", "b1", "c1"],
			["a2", "b2", "c2"],
			["a3", "b3", "c3"],
			["a1", "b2", "c3"],
			["c1", "b2", "a3"]
		];
	}

	changePlayer() {
		if (this.currentPlayer === 1) {
			updateGameInfo("Turn: Player 2");
			add(player2Box, "active");
			remove(player1Box, "active");
			this.currentPlayer = 2;
		} else {
			updateGameInfo("Turn: Player 1");
			add(player1Box, "active");
			remove(player2Box, "active");
			this.currentPlayer = 1;
		}
	}

	choosePosition(player, position) {
		for (var i = 0; i < this.currentPositions.length; i++) {
			if (position === this.currentPositions[i]) {
				this.currentPositions.splice(i, 1);
				player.choices.push(position);
				placeToken(player, position);
				bleep.play();
				this.changePlayer();
				this.checkWinOrDraw(player);
			}
		}
	}

	checkWinOrDraw(player) {
		for (var k = 0; k < this.winStates.length; k++) {
			this.checkWinStates(player, this.winStates[k]);
		}
		if (player.winner) {
			this.logWin(player);
		} else {
			this.checkForDraw();
		}
	}

	checkWinStates(player, winState) {
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

	logWin(player) {
		player.addWins();
		updateGameInfo(`Player ${player.id} WINS!`);
		add(ticTacBox, "block-clicks");
		var currentWinner = eval(`player${player.id}Wins`);
		var playerWins = new Audio(`./assets/sfx/player-${player.id}-wins.mp3`);
		playerWins.play();
		this.nextGame();
	}

	checkForDraw() {
		if (this.currentPositions.length === 0) {
			updateGameInfo("DRAW!");
			add(ticTacBox, "block-clicks");
			draw.play();
			this.nextGame();
		}
	}

	nextGame() {
		setTimeout(function() {
			this.currentGame.resetGame();
			this.currentGame.switchStartingPlayer();
			remove(ticTacBox, "block-clicks");
			clearBoard();
			updateWins();
		}, 3000);
	}

	switchStartingPlayer() {
		if (this.startingPlayer === 1) {
			this.startingPlayer = 2;
			this.currentPlayer = 2;
			switchPlayerView(2, 1);
		} else {
			this.startingPlayer = 1;
			this.currentPlayer = 1;
			switchPlayerView(1, 2);
		}
	}

	resetGame() {
		this.player1.choices = [];
		this.player2.choices = [];
		this.player1.winner = false;
		this.player2.winner = false;
		this.currentPositions = [
			"a1",
			"a2",
			"a3",
			"b1",
			"b2",
			"b3",
			"c1",
			"c2",
			"c3"
		];
	}
}
