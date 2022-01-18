var currentGame = new Game('player1', 'player2');
var player1 = currentGame.player1;
var player2 = currentGame.player2;
var playButtonStatus = false;

var backgroundMusic = new Audio('./assets/music/Tic-Tac-2049-theme.mp3');
var bleep = new Audio('./assets/sfx/compu-bleep.wav');
var draw = new Audio('./assets/sfx/draw.mp3');
// var player1Wins = new Audio('./assets/sfx/player-1-wins.mp3');
// var player2Wins = new Audio('./assets/sfx/player-2-wins.mp3');

var winStates1 = ["a1", "a2", "a3"]
var winStates2 = ["b1", "b2", "b3"]
var winStates3 = ["c1", "c2", "c3"]
var winStates4 = ["a1", "b1", "c1"]
var winStates5 = ["a2", "b2", "c2"]
var winStates6 = ["a3", "b3", "c3"]
var winStates7 = ["a1", "b2", "c3"]
var winStates8 = ["c1", "b2", "a3"]
