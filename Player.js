class Player {
	constructor(id, token, tokenName) {
		this.id = id;
		this.token = token;
		this.tokenName = tokenName;
		this.choices = [];
		this.wins = 0;
		this.winner = false;
	}

	addWins(player) {
		this.wins++;
	}
}
