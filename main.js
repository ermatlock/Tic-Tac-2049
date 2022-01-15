var a1 = document.getElementById('a1');
var a2 = document.getElementById('a2');
var a3 = document.getElementById('a3');
var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
var b3 = document.getElementById('b3');
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');

a1.addEventListener('click', function () {takeTurn(1)});
a2.addEventListener('click', function () {takeTurn(2)});
a3.addEventListener('click', function () {takeTurn(3)});
b1.addEventListener('click', function () {takeTurn(4)});
b2.addEventListener('click', function () {takeTurn(5)});
b3.addEventListener('click', function () {takeTurn(6)});
c1.addEventListener('click', function () {takeTurn(7)});
c2.addEventListener('click', function () {takeTurn(8)});
c3.addEventListener('click', function () {takeTurn(9)});


function takeTurn(position) {
	console.log(currentGame.currentPlayer)
	if (currentGame.currentPlayer === 1) {
		console.log('takeTurn player1')
		choosePosition(player1, position);
	} else {
		console.log('takeTurn player2')
		choosePosition(player2, position);
	}
}

function choosePosition(player, position) {
	console.log('choosePosition')
	for(var i = 0; i < currentGame.positions.length; i++) {
		if (position === currentGame.positions[i]) {
			console.log(currentGame.positions)
			currentGame.positions.splice(i, 1);
			player.choices.push(position);
			checkEach(player);
			switchPlayers();
		}
	}
}

function switchPlayers() {
	console.log('switchPlayers')
	if (currentGame.currentPlayer === 1) {
		currentGame.currentPlayer = 2;
		console.log('switch to player2')
	} else {
		currentGame.currentPlayer = 1;
		console.log('switch to player1')
	}
}

function checkEach(player) {
	this.checkForWin(player, [1, 2, 3])
	this.checkForWin(player, [4, 5, 6])
	this.checkForWin(player, [7, 8, 9])
	this.checkForWin(player, [1, 4, 7])
	this.checkForWin(player, [2, 5, 8])
	this.checkForWin(player, [3, 6, 9])
	this.checkForWin(player, [1, 5, 9])
	this.checkForWin(player, [3, 5, 7])
}

function checkForWin(player, winState) {
	var matches = [];
	for(var i = 0; i < player.choices.length; i++) {
		for(var j = 0 ; j < winState.length; j++) {
			if(player.choices[i] === winState[j]) {
				matches.push(player.choices[i]);
			}
		}
	}
	if (matches.length === 3) {
		console.log('winning' + matches)
		player.wins ++
		console.log(`${player.id} WON!`)
		return `${player.id} WON!`;
	}
	if (currentGame.positions.length === 0) {
		console.log('player1' + player1.choices)
		console.log('player2' + player2.choices)
		console.log('DRAW')
		return 'DRAW'
	}
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
