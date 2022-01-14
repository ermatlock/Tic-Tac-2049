positions = [1, 2, 3, 4, 5, 6, 7, 8, 9]
p1 = []
p2 = []

function checkEach(player) {
	checkForWin(player, [1, 2, 3])
	checkForWin(player, [4, 5, 6])
	checkForWin(player, [7, 8, 9])
	checkForWin(player, [1, 4, 7])
	checkForWin(player, [2, 5, 8])
	checkForWin(player, [3, 6, 9])
	checkForWin(player, [1, 5, 9])
	checkForWin(player, [3, 5, 7])
}

function checkForWin(player, winState) {
	var matches = [];
	for(var i = 0; i < player.length; i++) {
		for(var j = 0 ; j < winState.length; j++) {
			if(player[i] === winState[j]) {
				matches.push(player[i]);
			}
		}
	}
	if(matches.length === 3) {

		console.log('WIN!');
	}
}

function playNumber(player, number) {
	for(var i = 0; i < positions.length; i++) {
		if (number === positions[i]) {
			splice(i, 1);
			player.push(number);
			checkEach(player);
		}
	}
}

function gameReset() {
	positions = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	p1 = []
	p2 = []
}

// 1 2 3
// 4 5 6
// 7 8 9

// Start player 1
// Player 1 play any number
// if (gameBoard.includes[i])
// gameBoard.splice(i)
// p1.push(i)
// if p1.includes(winState1-8)
// win!
// else switch p2

// Player 2 play any number that still exists in gameBoard
// if (gameBoard.includes[i])
// gameBoard.splice(i)
// p2.push(i)
// if p1.includes(winState1-8)
// win!
// else switch p1

// Player 1 play any number that still exists in gameBoard
// if (gameBoard.includes[i])
// gameBoard.splice(i)
// p2.push(i)
// if p1.includes(winState1-8)
// win!
// else switch p2

// if p1.includes(winstate)
// WIN!
// p1.wins ++

// if p1.includes(winstate)
// WIN!
// p2.wins ++

// if gameBoard = [] and !p1.includes(winstate) and !p2.includes(winstate)
// DRAW!



// game reset:
// gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9]
