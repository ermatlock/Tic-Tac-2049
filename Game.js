class Game {
	constructor(player1, player2) {
		this.player1 = new Player(1, "X");
		this.player2 = new Player(2, "O");
		this.positions = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];
		this.currentPlayer = 1;
		this.startingPlayer = 1;
	}

	resetGame() {
		this.player1.choices = [];
		this.player2.choices = [];
		this.player1.winner = false;
		this.player2.winner = false;
		this.positions = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];
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
}
