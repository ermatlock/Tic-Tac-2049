/*~~~~~~~~~~~~~~QUERY SELECTORS~~~~~~~~~~~~~~~~~~*/
const gameInfo = document.getElementById("gameInfo");
const player1Box = document.getElementById("p1");
const player2Box = document.getElementById("p2");
const player1Wins = document.getElementById("player1Wins");
const player2Wins = document.getElementById("player2Wins");
const ticTacBox = document.getElementById("ticTacBox");
const playButton = document.getElementById("playButton");
const startButton = document.getElementById("startButton");
const startBox = document.querySelector(".start-box");

/*~~~~~~~~~~~~~~EVENT LISTENERS~~~~~~~~~~~~~~~~~~*/
ticTacBox.addEventListener("click", function (e) {
  takeTurn(e);
});
playButton.addEventListener("click", playMusic);
startButton.addEventListener("click", startGame);

/*~~~~~~~~~~~~~~~~~~FUNCTIONS~~~~~~~~~~~~~~~~~~~~*/
window.onload = () => {
  add(ticTacBox, "block-clicks");
};

function add(element, selector) {
  element.classList.add(selector);
}

function remove(element, selector) {
  element.classList.remove(selector);
}

function startGame() {
  remove(ticTacBox, "block-clicks");
  add(startBox, "hidden");
  player1Start.play();
  playMusic();
}

function playMusic() {
  if (playButtonStatus === false) {
    playButton.innerText = "MUSIC ON";
    remove(playButton, "button-off");
    playButtonStatus = true;
    backgroundMusic.play();
    backgroundMusic.loop = true;
  } else {
    playButton.innerText = "MUSIC OFF";
    add(playButton, "button-off");
    playButtonStatus = false;
    backgroundMusic.pause();
  }
}

function updateGameInfo(string) {
  gameInfo.innerText = string;
}

/*~~~~~~~~~~~~~~~~~~GAME FUNCTIONS~~~~~~~~~~~~~~~~~~~~*/
function takeTurn(e) {
  if (currentGame.currentPlayer === 1) {
    currentGame.choosePosition(player1, e.target.id);
  } else if (currentGame.currentPlayer === 2) {
    currentGame.choosePosition(player2, e.target.id);
  }
}

function placeToken(player, position) {
  var currentPosition = eval(position);
  currentPosition.innerHTML = `<h1 class="grid-token glitch">${player.token}</h1>`;
}

function updateWins() {
  player1Wins.innerText = player1.wins;
  player2Wins.innerText = player2.wins;
}

function switchPlayerView(activePlayerId, inactivePlayerId) {
  updateGameInfo(`Turn: Player ${activePlayerId}`);
  add(eval(`player${activePlayerId}Box`), "active");
  remove(eval(`player${inactivePlayerId}Box`), "active");
  eval(`player${activePlayerId}Start`).play();
}

function clearBoard() {
  for (var i = 0; i < currentGame.currentPositions.length; i++) {
    var gridId = eval(currentGame.currentPositions[i]);
    gridId.innerText = "";
  }
}
