let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0 
};  //after save the score in localStorage we load the score from localStorage and covert it back JSON -> json object (using JSON.parse) , using || for default values
//or
// if (!score) {
//   score = {
//     wins: 0,
//     losses: 0,
//     ties: 0
//   };
// }

// document.querySelector('.js-score').innerHTML = 
// `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`; //show the score inside the score element rather than popup
//OR calle the function updateScoreElement

updateScoreElement();





function playGame(playerMove) {
const computerMove = pickComputerMove(); //2. call pickComputerMove function //5. after completion it return back to step-1



let result =''; //compare move and get result

if (playerMove == 'scissors'){  //for scissors move
    if(computerMove == 'rock'){
  result = 'You lose';
  }
  else if(computerMove == 'paper'){
  result = 'You win';

  }
  else if(computerMove == 'scissors'){
  result = 'Tie';
  }

}
else if(playerMove == 'paper'){  //for papers move
      if(computerMove == 'rock'){
    result = 'You win';
    }
    else if(computerMove == 'paper'){
    result = 'Tie';

    }
    else if(computerMove == 'scissors'){
    result = 'You lose';
}

 } else if (playerMove == 'rock'){  //for rock mov
  if(computerMove == 'rock'){
    result = 'Tie';
  }
  else if(computerMove == 'paper'){
    result = 'You lose';

  }
  else if(computerMove == 'scissors'){
    result = 'You win';
}
}

if(result === 'You win'){  //update the score
  score.wins += 1;

} else if(result === 'You lose'){
  score.losses += 1;
} else if(result === 'Tie'){
  score.ties += 1;
  }

localStorage.setItem('score', JSON.stringify(score)); //after update the score it saved in localStorage and coverts js object -> JSON (using JSON.stringify)

updateScoreElement();
//show the results and move directly on web page instead of popup 
document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-moves').innerHTML = `You
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`;

//         alert(`you picked ${playerMove}. computer pick ${computerMove}. ${result} 
//  Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);  // for popup the score

}



function updateScoreElement() { document.querySelector('.js-score')
.innerHTML = 
`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

}

function pickComputerMove() { //3. run the code bellow

const randomNumber = Math.random(); // computer choose randomly 
let computerMove ='';

if(randomNumber >= 0 && randomNumber <1/3){
 computerMove = 'rock';
} else if(randomNumber >= 1/3 && randomNumber < 2/3){
computerMove='paper';
} else if(randomNumber >= 2/3 && randomNumber < 1) {
computerMove ='scissors';
}

return computerMove; //4. this function return to playGame function(step-2) where we called the computerMove function.


}