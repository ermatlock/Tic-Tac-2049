var currentGame = new Game("player1", "player2");
var player1 = currentGame.player1;
var player2 = currentGame.player2;
var playButtonStatus = false;

// Web Audio API setup
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
let backgroundMusicBuffer = null;
let backgroundMusicSource = null;

// Load background music
async function loadBackgroundMusic() {
    try {
        const response = await fetch("./assets/music/Tic-Tac-2049-theme.mp3");
        const arrayBuffer = await response.arrayBuffer();
        backgroundMusicBuffer = await audioContext.decodeAudioData(arrayBuffer);
    } catch (error) {
        console.error('Error loading background music:', error);
    }
}

// Initialize audio
loadBackgroundMusic();

// Other sound effects
var bleep = new Audio("./assets/sfx/compu-bleep.wav");
var draw = new Audio("./assets/sfx/draw.mp3");
var player1Start = new Audio("./assets/sfx/player-1-start.mp3");
var player2Start = new Audio("./assets/sfx/player-2-start.mp3");
