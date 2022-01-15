class Game {
	constructor() {
		this.player1 = new Player('one', '🟢');
		this.player2 = new Player('two', '🔴');
		this.positions = [1, 2, 3, 4, 5, 6, 7, 8, 9]

	}

	checkEach(player) {
		checkForWin(player, [1, 2, 3])
		checkForWin(player, [4, 5, 6])
		checkForWin(player, [7, 8, 9])
		checkForWin(player, [1, 4, 7])
		checkForWin(player, [2, 5, 8])
		checkForWin(player, [3, 6, 9])
		checkForWin(player, [1, 5, 9])
		checkForWin(player, [3, 5, 7])
	}

	checkForWin(player, winState) {
		var matches = [];
		for(var i = 0; i < player.length; i++) {
			for(var j = 0 ; j < winState.length; j++) {
				if(player[i] === winState[j]) {
					matches.push(player[i]);
				}
			}
		}
		if (matches.length === 3) {
			console.log(`${player} WON!`);
			player.wins ++
		}
		if (this.positions.length === 0) {
			console.log('DRAW!')
		}
	}

  switchTurn() {
		if (this.positions.length === 9) {
			player1.
		}
	}

	playNumber(player, number) {
		for(var i = 0; i < positions.length; i++) {
			if (number === positions[i]) {
				splice(i, 1);
				player.push(number);
				checkEach(player);
			}
		}
	}

	nextGame() {
		this.player1.choices = [];
		this.player2.choices = [];
		this.positions = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	}


}
