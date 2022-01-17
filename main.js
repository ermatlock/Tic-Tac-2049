var a1 = document.getElementById('a1');
var a2 = document.getElementById('a2');
var a3 = document.getElementById('a3');
var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
var b3 = document.getElementById('b3');
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');

a1.addEventListener('click', function () {takeTurn('a1')});
a2.addEventListener('click', function () {takeTurn('a2')});
a3.addEventListener('click', function () {takeTurn('a3')});
b1.addEventListener('click', function () {takeTurn('b1')});
b2.addEventListener('click', function () {takeTurn('b2')});
b3.addEventListener('click', function () {takeTurn('b3')});
c1.addEventListener('click', function () {takeTurn('c1')});
c2.addEventListener('click', function () {takeTurn('c2')});
c3.addEventListener('click', function () {takeTurn('c3')});


function takeTurn(position) {
	console.log('thisisthecurrentplayer ' + currentGame.currentPlayer)
	// if (currentGame.positions.length === 9) {
	// 	choosePosition(player1, position);
	 if (currentGame.currentPlayer === 1) {
		console.log('takeTurn player1')
		choosePosition(player1, position);
	} else if (currentGame.currentPlayer === 2) {
		console.log('takeTurn player2')
		choosePosition(player2, position);
	}
}

function choosePosition(player, position) {
	console.log('choosePosition')
	for(var i = 0; i < currentGame.positions.length; i++) {
		if (position === currentGame.positions[i]) {
			console.log("position available")
			placeToken(player, position);
			currentGame.positions.splice(i, 1);
			player.choices.push(position);
			checkEach(player);
		}
	}
}

function placeToken(player, position) {
	console.log(position)
	console.log(player)
	position.innerText = player.token
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
		checkForWin(player, ['a1', 'a2', 'a3']);
		checkForWin(player, ['b1', 'b2', 'b3']);
		checkForWin(player, ['c1', 'c2', 'c3']);
		checkForWin(player, ['a1', 'b1', 'c1']);
		checkForWin(player, ['a2', 'b2', 'c2']);
		checkForWin(player, ['a3', 'b3', 'c3']);
		checkForWin(player, ['a1', 'b2', 'c3']);
		checkForWin(player, ['c1', 'b2', 'a3']);
		switchPlayers();
}

function checkForWin(player, winState) {
	var matches = [];
	for(var i = 0; i < player.choices.length; i++) {
		for(var j = 0 ; j < winState.length; j++) {
			if(player.choices[i] === winState[j]) {
				matches.push(player.choices[i]);
				console.log('current' + matches)
			}
		}
	}
	if (matches.length === 3) {
		console.log('winning ' + matches)
		player.wins ++
		console.log(`${player.id} WON!`)
		currentGame.resetGame();
		return `${player.id} WON!`;
	}
	if (currentGame.positions.length === 0) {
		console.log('player1 ' + player1.choices)
		console.log('player2 ' + player2.choices)
		console.log('DRAW!')
		currentGame.resetGame();
		return 'DRAW!'
	}
}

// function nextGame() {
// 	console.log('nextGame')
// 	// player1.choices = [];
// 	// player2.choices = [];
// 	// currentGame.positions = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'];
// 	// currentGame.currentPlayer = 1
// 	// console.log(player1.choices + player2.choices + currentGame.positions + currentGame.currentPlayer)
// }
