/*~~~~~~~~~~~~~~QUERY SELECTORS~~~~~~~~~~~~~~~~~~*/
var gameInfo = document.getElementById("gameInfo");
var player1Box = document.getElementById("p1");
var player2Box = document.getElementById("p2");
var player1Wins = document.getElementById("player1Wins");
var player2Wins = document.getElementById("player2Wins");
var ticTacBox = document.getElementById("ticTacBox");
var playButton = document.getElementById("playButton");
var startButton = document.getElementById("startButton");
var startBox = document.querySelector(".start-box");
var startText = document.querySelector(".start-text");

/*~~~~~~~~~~~~~~EVENT LISTENERS~~~~~~~~~~~~~~~~~~*/
ticTacBox.addEventListener("click", function (e) {
  takeTurn(e);
});
playButton.addEventListener("click", playMusic);
startButton.addEventListener("click", startGame);

/*~~~~~~~~~~~~~~~~~~FUNCTIONS~~~~~~~~~~~~~~~~~~~~*/
window.onload = () => {
  add(ticTacBox, "block-clicks");
  add(playButton, "block-clicks");
};

function add(element, selector) {
  element.classList.add(selector);
}

function remove(element, selector) {
  element.classList.remove(selector);
}

function startGame() {
  remove(ticTacBox, "block-clicks");
  remove(playButton, "block-clicks");
  remove(startButton, "scale-in-center");
  remove(startText, "scale-in-center");
  add(startButton, "scale-out-center");
  add(startText, "scale-out-center");
  add(startBox, "fade-out");
  setTimeout(function () {
  add(startBox, "hidden");
  }, 1000);

  player1Start.play();
  playMusic();
}

function playMusic() {
  if (playButtonStatus === false) {
    playButton.innerText = "MUSIC ON";
    remove(playButton, "button-off");
    playButtonStatus = true;

    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }

    backgroundMusicSource = audioContext.createBufferSource();
    backgroundMusicSource.buffer = backgroundMusicBuffer;
    backgroundMusicSource.connect(audioContext.destination);
    backgroundMusicSource.loop = true;
    backgroundMusicSource.start(0);
  } else {
    playButton.innerText = "MUSIC OFF";
    add(playButton, "button-off");
    playButtonStatus = false;

    if (backgroundMusicSource) {
      backgroundMusicSource.stop();
      backgroundMusicSource = null;
    }
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

function placeToken  (player, position) {
  var currentPosition = eval(position);
  currentPosition.innerHTML = `<img class="grid-token glitch" src="${player.token}" alt="token ${player.tokenName}"></img>`;
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
