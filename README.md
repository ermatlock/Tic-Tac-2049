# TIC-TAC-2049: A 16-Bit Tic-Tac-Toe Experience
## Final Mod 1 Solo Project
## Project Overview
This was my final solo project for Mod 1 at Turing School of Software & Design

My objective was to create a basic Tic-Tac-Toe game with sound game logic, and give it an enticing user experience.

The theme: A 16 bit 80's arcade game, complete with original music and sound effects authentic to the era.

## Functionality
- Automatically switch between players during gameplay.
- Game tracks previous starting player and switches to the other player on each round.
- Wins are tracked for each player and updated for each round. Wins persist until the page is reloaded
- Looping background soundtrack can be enabled or disabled during gameplay to set the ambience.
- Game ties are announced as draws, and no wins are updated in the counters.
- Responsive design: no portrait mode, but game scales across different aspect ratios.

## Instructions

You can view the site [here](https://ermatlock.github.io/Tic-Tac-Toe/)

To download the repository:
- Clone the [repository](https://github.com/ermatlock/Tic-Tac-Toe) to your local machine
- `cd` into the project
- open `index.html` to play

## Loading State
The user will be greeted with the game screen consisting of player 1 stats on the left, player 2 stats on the right, and the game board in the center. Game load defaults to player 1.

![Main Screen](https://media.giphy.com/media/YcWXkrPx9TCOF6IPWT/giphy.gif)

## Background Music
Click the music button on the bottom to start playing the Tic-Tac-2049 theme. Original music by Eric Matlock.

![Music Button](https://media.giphy.com/media/Jnowf0wRhM2PiP7DMV/giphy.gif)

## Initial Gameplay
The user moves their mouse to the desired board position and clicks. The user's player token "X" or "O" will appear along with a sound effect. As soon as the token is placed, the other player will be highlighted. The other player can then execute their turn.

![Initial Play](https://media.giphy.com/media/ng9aqG5XLh0eGeYMPI/giphy.gif)

## Wins
When a player matches three of their tokens horizontally, vertically, or diagonally, The winner will update on screen and will be announced with a classic 16 bit sound effect. Gameplay is paused briefly, then the board is reset and the win is logged in the winner's respective stats.

![Wins](https://media.giphy.com/media/Em8yv9wE9jkA2JXY7a/giphy.gif)

## Draws
If the board is filled and there are no matches, a draw will be announced. After a brief pause, the board is reset, and no wins are logged.

![Draws](https://media.giphy.com/media/oLw9Yj7psdFdzmnZES/giphy.gif)

## Future Features:
* Further styling to enhance overall look and Gameplay
* Local storage for persistent game state after load.
* Seamless audio looping and lower latency sound effects using Web Audio API

## Technologies Used:
* HTML
* CSS
* JavaScript

## Contributors:
* Eric Matlock https://github.com/ermatlock
* Music: Eric Matlock [YouTube](https://www.youtube.com/channel/UCXZXbR9yT5UCEZiaFGsMFPQ)
* Sound effects: Eric Matlock
* Background image: https://tenor.com/view/god-city-bots-relax-gif-17298601

## Links:
* Deploy link: https://ermatlock.github.io/Tic-Tac-Toe/
* Repo link: https://github.com/ermatlock/Tic-Tac-Toe
