var currentGame = new Game("player1", "player2");
var player1 = currentGame.player1;
var player2 = currentGame.player2;
var playButtonStatus = false;

var backgroundMusic = new Audio("./assets/music/Tic-Tac-2049-theme.mp3");
var bleep = new Audio("./assets/sfx/compu-bleep.wav");
var draw = new Audio("./assets/sfx/draw.mp3");
var player1Start = new Audio("./assets/sfx/player-1-start.mp3");
var player2Start = new Audio("./assets/sfx/player-2-start.mp3");
