class Game {
	constructor(player1, player2) {
		this.player1 = new Player(player1, '🟢');
		this.player2 = new Player(player2, '🔴');
		this.positions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		this.currentPlayer = 1;

	}

	// checkEach(player) {
	// 	this.checkForWin(player, [1, 2, 3])
	// 	this.checkForWin(player, [4, 5, 6])
	// 	this.checkForWin(player, [7, 8, 9])
	// 	this.checkForWin(player, [1, 4, 7])
	// 	this.checkForWin(player, [2, 5, 8])
	// 	this.checkForWin(player, [3, 6, 9])
	// 	this.checkForWin(player, [1, 5, 9])
	// 	this.checkForWin(player, [3, 5, 7])
	// }
	//
	// checkForWin(player, winState) {
	// 	var matches = [];
	// 	for(var i = 0; i < player.length; i++) {
	// 		for(var j = 0 ; j < winState.length; j++) {
	// 			if(player[i] === winState[j]) {
	// 				matches.push(player[i]);
	// 			}
	// 		}
	// 	}
	// 	if (matches.length === 3) {
	// 		console.log(`${player} WON!`);
	// 		player.wins ++
	// 	}
	// 	if (this.positions.length === 0) {
	// 		console.log('DRAW!')
	// 	}
	// }

	// switchPlayers() {
	// 	if (this.currentPlayer === 1) {
	// 		this.currentPlayer = 2;
	// 		console.log('switch to player2')
	// 	} else {
	// 		this.currentPlayer = 1;
	// 		console.log('switch to player1')
	// 	}
	// }

	// choosePosition(player, position) {
	// 	for(var i = 0; i < this.positions.length; i++) {
	// 		if (position === this.positions[i]) {
	// 			console.log(this.positions)
	// 			this.positions.splice(i, 1);
	// 			this[player].choices.push(position);
	// 			this.switchPlayers();
	// 			this.checkEach(player);
	// 			console.log(this.player1)
	// 			console.log(this.player2)
	// 		}
	// 	}
	// }

	// nextGame() {
	// 	this.player1.choices = [];
	// 	this.player2.choices = [];
	// 	this.positions = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	// }


}
