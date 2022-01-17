var a1 = document.getElementById('a1');
var a2 = document.getElementById('a2');
var a3 = document.getElementById('a3');
var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
var b3 = document.getElementById('b3');
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');
var gameInfo = document.getElementById('gameInfo')
var player1Wins = document.getElementById('player1Wins')
var player2Wins = document.getElementById('player2Wins')

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
	console.log('current player ' + currentGame.currentPlayer);
	console.log('current position ' + currentGame.currentPlayer);
	if (currentGame.currentPlayer === 1) {
		gameInfo.innerText = 'Turn: Player 2'
		choosePosition(player1, position);
	} else if (currentGame.currentPlayer === 2) {
		gameInfo.innerText = 'Turn: Player 1'
		choosePosition(player2, position);
	}
}

function choosePosition(player, position) {
	console.log(`choosePosition ${player.id} at ${position}`)

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
	console.log(`Place Token ${player.token} at ${position}`)
 	console.log(eval(position))
	eval(position)['innerText'] = player.token
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
			}
		}
	}
	if (matches.length === 3) {
		player.wins ++
		gameInfo.innerText = `Player ${player.id} WON!`;
		setTimeout(function() {currentGame.resetGame()}, 2500);
		setTimeout(function() {clearBoard()}, 2500);
		setTimeout(function() {updateWins()}, 2500);


	}
	else if (currentGame.positions.length === 0 && matches.length !== 3) {
		gameInfo.innerText = 'DRAW!'
		setTimeout(function() {currentGame.resetGame()}, 2500);
		setTimeout(function() {clearBoard()}, 2500);
		setTimeout(function() {updateWins()}, 2500);
	}
}

function clearBoard() {
	gameInfo.innerText = `Turn: Player ${currentGame.startingPlayer}`
	a1.innerText = ''
	a2.innerText = ''
	a3.innerText = ''
	b1.innerText = ''
	b2.innerText = ''
	b3.innerText = ''
	c1.innerText = ''
	c2.innerText = ''
	c3.innerText = ''
}

function updateWins() {
	player1Wins.innerText = player1.wins;
	player2Wins.innerText = player2.wins;
}

// function nextGame() {
// 	console.log('nextGame')
// 	// player1.choices = [];
// 	// player2.choices = [];
// 	// currentGame.positions = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'];
// 	// currentGame.currentPlayer = 1
// 	// console.log(player1.choices + player2.choices + currentGame.positions + currentGame.currentPlayer)
// }
