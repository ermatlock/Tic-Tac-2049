class Game {
	constructor(player1, player2) {
		this.player1 = new Player(1, 'X');
		this.player2 = new Player(2, 'O');
		this.positions = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'];
		this.currentPlayer = 1;
		this.startingPlayer = 1;

	}

	resetGame() {
		this.player1.choices = []
		this.player2.choices = []
		this.positions = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'];
	}

}
