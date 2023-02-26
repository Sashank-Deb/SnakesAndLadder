//button queries
let buttonOne= document.getElementById("buttonOne");
let buttonTwo = document.getElementById("buttonTwo");

//Creating and initialising the board 
const board= [];
for (let i=0; i<=100;i++){
  board.push(i);
}
//Setting initial postion in the board
let player1=board[0];
let player2=board[0];

//creating an array of number with which one can start the game
const starterNumbers=[1,6];

//initialising Snakes and Ladders
const snakeString= `{"36":19,"65":35,"87":32}`;
const ladderString= `{"7":33,"37":85,"51":72}`;


// The function detects whenever a snake or a ladder is encountered//
function ladderOrSnake(position){
  const ladderJSON = JSON.parse(ladderString);
  const snakeJSON = JSON.parse(snakeString);
  let resultantPosition=position;
  if(ladderString.includes(`"${position}"`)){
    resultantPosition= ladderJSON[`${position}`]
    console.log(`Well great! You Encountered a 🪜 Ladder at ${position}, You will be moved to:`, resultantPosition)
  }
  else if(snakeString.includes(`"${position}"`)){
    resultantPosition= snakeJSON[`${position}`]
    console.log(`Oops! You Encountered a Snake 🐍 at ${position}, You will be moved to:`, resultantPosition)
  }
  return resultantPosition;
}
// Snake or Ladder fucntion ends here //



function recurringMove(playerName){
  if(playerName==="Player1"){
    buttonOne.disabled=false;
    buttonTwo.disabled=true;
  }
  else if (playerName==="Player2"){
    buttonOne.disabled=true;
    buttonTwo.disabled=false;
  }
}


// Assets for Function to detect repeated Six 
//Purpose:
// 1. Call the fucntion recurringMove
// 2. Bust if its repeated 3 times 
var sixMoveCounter=0;
var firstSixMovePosition=0;

// Game Engine: The main frame lofic of the snake and ladder game 
function gameEngine(currentRoll, currentPosition, playerName){
  let newPosition=currentPosition;
  //Game Start logic: Game will only start if the Player throws 1 or 6 
  if(currentPosition===board[0] && !starterNumbers.includes(currentRoll)){
    console.log("You will have to get a 1 or 6 to start the game");
  }
  //Main functioning Logic 
  else{
    //Case 01 : First Move  
    if(currentPosition===board[0]){
      console.log(`Yay, The game has now started  for ${playerName} ! \nRoll a dice again to make the first move`);
      newPosition= board[1]
      recurringMove(playerName);
    }
    //Case 02 : Any Number from 1 to 99  
    else if (currentPosition + currentRoll<100){
      newPosition=currentPosition + currentRoll;
      //Test Case 01: If the Player encounters a Snake or a Ladder
      newPosition=ladderOrSnake(newPosition);

      //Test Case 02: If the Player makes repeated moves of Six on the Dice 
      //Purpose:
      // 1. Call the fucntion recurringMove
      // 2. Bust if its repeated 3 times 
      if (currentRoll===6){
        //Six is detected for the first time 
        if(sixMoveCounter===0){
          firstSixMovePosition=currentPosition;
          sixMoveCounter+1;
          recurringMove(playerName);
        }
        //Six is rolled three consecutive times on the dice
        else if (sixMoveCounter===2){
          newPosition= firstSixMovePosition;
          firstSixMovePosition=0;
          sixMoveCounter=0;
        }
        //Six is detected consecutive times but not thrice
        else{
          sixMoveCounter+1;
          recurringMove(playerName);
        }
      }
      //Six Move Detector end here
    }
    //Case 03 : Game Winnig Logic
    else if(currentPosition + currentRoll===100){
        currentPosition=currentPosition + currentRoll;
        console.log(`Congratulations ${playerName} have won the game 🎉 \nThe Game will now Reset`);

        //Game Reset
        setTimeout(() => {
          console.log("Current position in O for both the players, Roll a dice to start !")
        }, 100);
        newPosition=player1=player2=board[0];
    }
  }
  return newPosition;
}



console.log("Your current position in O, Roll a dice to start !")
//Player1
function snakeAndLadderGame(){
  const roll= Math.floor(Math.random() * 6 + 1);
  console.log("Current Roll is :", roll);
  //button active Logic for Player 1
  buttonOne.disabled=true;
  buttonTwo.disabled=false;
  //button active logic ends here 
  player1= gameEngine(roll, player1, "Player1");
  console.log("Current Position for Player_1:", player1,"//");
  console.log("Current Position for Player_2:", player2,"//");
  return;
}
//Player2
function snakeAndLadderGame2(){
  const roll= Math.floor(Math.random() * 6 + 1);
  console.log("Current Roll is :", roll);
  //button active Logic for Player 2
  buttonOne.disabled=false;
  buttonTwo.disabled=true;
  //button active logic ends here 
  player2= gameEngine(roll, player2,"Player2");
  console.log("Current Position for Player_1:", player1,"//");
  console.log("Current Position for Player_2:", player2,"//");
  return;
}


