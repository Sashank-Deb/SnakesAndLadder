
//Creating and initialising the board 
const board= [];
for (let i=0; i<=100;i++){
  board.push(i);
}
//Setting initial postion in the board
let currentPosition=board[0];
//creating an array of number with which one can start the game
const starterNumbers=[1,6];

//initialising Snakes and Ladders
const snakeString= `{"36":19,"65":35,"87":32}`;
const ladderString= `{"7":33,"37":85,"51":72}`;


// The function detects whenever a snake or a ladder is encountered//
function ladderOrSnake(position){
  const ladderJSON = JSON.parse(ladderString);
  const snakeJSON = JSON.parse(snakeString);
  let newPosition;
  if(ladderString.includes(`"${position}"`)){
    newPosition= ladderJSON[`${position}`]
    console.log(`Well great! You Encountered a 🪜 Ladder at ${position}, You will be moved to:`, newPosition)
    position= newPosition;
  }
  if(snakeString.includes(`"${position}"`)){
    newPosition= snakeJSON[`${position}`]
    console.log(`Oops! You Encountered a Snake 🐍 at ${position}, You will be moved to:`, newPosition)
    position= newPosition;
  }
}
// Snake or Ladder fucntion ends here //


console.log("Your current position in O, Roll a dice to start !")
function snakeAndLadderGame(){
  const currentRoll= Math.floor(Math.random() * 6 + 1);
  console.log("Current Roll is :", currentRoll);
  if(currentPosition===board[0] && !starterNumbers.includes(currentRoll)){
    console.log("You will have to get a 1 or 6 to start the game");
  }
  else{
    if(currentPosition===board[0]){
      currentPosition=board[1]
      console.log("Yay, The game has now started ! \nRoll a dice again to make the first move");
    }
    else if (currentPosition + currentRoll<100){
      currentPosition=currentPosition + currentRoll;
      ladderOrSnake(currentPosition);
    }
    else if(currentPosition + currentRoll===100){
        currentPosition=currentPosition + currentRoll;
        console.log("Congratulations you have won the game 🎉 \nThe Game will now Reset");
        currentPosition=board[0];
        setTimeout(() => {
          console.log("Your current position in O, Roll a dice to start !")
        }, 100);
        return;
    }
  }
  console.log("Current Position is :", currentPosition,"//");
  return;
}




