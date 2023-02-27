# SnakesAndLadder
This repository contains code examples and resources for working with vanilla JavaScript. Vanilla JavaScript refers to the use of pure JavaScript without any additional frameworks or libraries.

## Getting Started
To get started with vanilla JavaScript, you need to have a basic understanding of HTML, CSS, and JavaScript. If you are new to programming, it's recommended that you start with HTML and CSS before moving on to JavaScript.

## Installation
To use JavaScript in your project, you don't need to install anything as it is already built into the web browser. However, you can install a text editor or integrated development environment (IDE) to make writing and testing your code easier.

Some popular text editors and IDEs for JavaScript development include:

Visual Studio Code
Sublime Text
Atom

## Problem Statement
A simple console application, which simulates the playing of a Snakes & Ladders game.
Board: There are 100 cells on a Snakes & Ladders board from 01, 02... all the way to 100. However, your starting
position is 00, which is outside the board.

Assumptions:
● Assume that the game has 4 snakes and 4 ladders of varying lengths dispersed on the board.
● You can choose to initialize / define where these snakes and ladders will be on the board and how long each of them
are. For e.g, a ladder could be at cell 07 and it could take you ahead to 33. Or a snake could be at 87 and bring you
back to 32. It's your choice.
Sample ladder position:
Ladder foot Ladder top
07 33
37 85
51 72
Sample snake position:
Snake head Snake tail
36 19
65 35
87 32

## Inputs and Outputs for your program:
The input to your program will be any number between 1 to 6 (...the numbers on a dice...), and your current position
on the board
The output of your program will be your new position on the board.
End of game: The game ends as soon as you reach exactly 100. However, if the output comes out to be more than
100, then the piece will remain in the current position.

## Test cases:

1. Increment based on Roll(Anything between 1-6)
2. Reset values after winning the game.
3. Winning Logic: The game ends as soon as you reach exactly 100.
4. Game Engine Logic:
   -  The Player can start the game if he has rolled "0" or "6"
   -  The Player gets recurring changes ones the game starts for the first move or he rolls a Six
   -  If the output comes out to be more than 100, then the piece will remain in the current position
5. Handled Multiplayer where the game engine is called with currentPosition passed as attribute for different players
   - Each Player gets one chance to roll a dice unless he rolls a six
## Edge Case:
1. If a dice is roll 6 three consecutive times it should reset to the position before first roll.
