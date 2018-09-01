


let guessNumber = parseInt(prompt("Guess a number between 1 and 10"));  
let randomNumber = Math.floor(Math.random() * 10) + 1; 
 let numberOfGuesses = 0; 

function resultCompare() {
  
  
  for (var i = 0; i < 10; i++) {
      
    if (randomNumber == guessNumber) {
      console.log("Congrats, bro. Dead on!"); 
      break;
     
  } else if (guessNumber > randomNumber) {
    numberOfGuesses += 1;  
    console.log("Too high, bro" + " You have guessed " + numberOfGuesses + " times so far");
    console.log("The number was " + randomNumber); 
    let guessNumber = parseInt(prompt("Guess a number between 1 and 10"));  
    
  } else  (guessNumber < randomNumber) {
    numberOfGuesses += 1; 
    console.log("Too low, bro" + " You have guessed " + numberOfGuesses + " times so far");
    console.log("The number was " + randomNumber); 
    let guessNumber = parseInt(prompt("Guess a number between 1 and 10"));  
  } 
 }//for loop
  
}
  

let newNum = (resultCompare()); 
console.log(newNum); 




