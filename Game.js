class Game {
	constructor(player1, player2) {
		this.player1 = new Player(player1, '🟢');
		this.player2 = new Player(player2, '🔴');
		this.positions = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'];
		this.currentPlayer = 1;

	}

	resetGame() {
		this.player1.choices = []
		this.player2.choices = []
		this.positions = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'];
		this.currentPlayer = 1;		
	}

	// player1.choices = [];
	// player2.choices = [];
	// currentGame.positions = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'];
	// currentGame.currentPlayer = 1
	// console.log(player1.choices + player2.choices + currentGame.positions + currentGame.currentPlayer)

	// checkEach(player) {
	// 	this.checkForWin(player, ['a1', 'a2', 'a3'])
	// 	this.checkForWin(player, ['b1', 'b2', 'b3'])
	// 	this.checkForWin(player, ['c1', 'c2', 'c3'])
	// 	this.checkForWin(player, ['a1', 'b1', 'c1'])
	// 	this.checkForWin(player, ['a2', 'b2', 'c2'])
	// 	this.checkForWin(player, ['a3', 'b3', 'c3'])
	// 	this.checkForWin(player, ['a1', 'b2', 'c3'])
	// 	this.checkForWin(player, ['c1', 'b2', 'a3'])
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
