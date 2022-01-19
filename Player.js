class Player {
	constructor(id, token) {
		this.id = id;
		this.token = token;
		this.choices = [];
		this.wins = 0;
		this.winner = false;
	}

	addWins(player) {
		this.wins++;
	}
}
