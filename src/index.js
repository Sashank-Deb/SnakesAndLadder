document.getElementById ("RollDice").addEventListener ("click", rollDice, false);
const board= [];
const starterNumbers=[1,6]
for (let i=0; i<=100;i++){
  board.push(i);
}
let currentPosition=board[0];
// function roll(){
//   return Math.floor(Math.random() * 6 + 1);
// }

const ladderString= `{"7":33,"37":85,"51":72}`;
const snakeString= `{"36":19,"65":35,"87":32}`;
function ladderOrSnake(position){
  const ladderJSON = JSON.parse(ladderString);
  const snakeJSON = JSON.parse(snakeString);
  let newPosition;
  if(ladderString.includes(`"${position}"`)){
    newPosition= ladderJSON[`${position}`]
    console.log(`Well great! You Encountered a 🪜 Ladder at ${position}, You will be moved to:`, newPosition)
    currentPosition= newPosition;
  }
  if(snakeString.includes(`"${position}"`)){
    newPosition= snakeJSON[`${position}`]
    console.log(`Oops! You Encountered a Snake 🐍 at ${position}, You will be moved to:`, newPosition)
    currentPosition= newPosition;
  }
}

console.log("Your current position in O, Roll a dice to start !")
function rollDice(){
  const currentRoll= Math.floor(Math.random() * 6 + 1);
  console.log("Current Roll is :", currentRoll);
  if(currentPosition===board[0] && !starterNumbers.includes(currentRoll)){
    console.log("You will have to get a 1 or 6 to start the game");
  }
  else{
    if (currentPosition + currentRoll<100){
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




