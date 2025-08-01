let score=JSON.parse(localStorage.getItem('score')) || {
            wins:0,
            loses:0,
            ties:0
            };  // || fonction comme 'ou'


             
            

      function pickComputerMove() {

         let computerMove = '';
            const randomNumber = Math.random();
            if (randomNumber >= 0 && randomNumber < 1 / 3) {
                computerMove = 'rock';
            } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
                computerMove = 'paper';
            } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
                computerMove = 'scissors';
            }

            return computerMove;

      }


      function playGame(player){

        computerMove = pickComputerMove() ;
        let result = '';


        if (player === 'scissors') {
             if (computerMove === 'rock') {
                result = 'You lose.';
            } else if (computerMove === 'paper') {
                result = 'You win.';
            } else if (computerMove === 'scissors') {
                result = 'Tie.';
            }

            

             if (result === 'You win.') {
                score.wins+=1;
                
            }
            else if( result === 'You lose.'){
                score.loses+=1;
            }
            else if (result === 'Tie.') {
                score.ties+=1;
                
            }

        localStorage.setItem('score', JSON.stringify(score));  //because localStorage only supports strings we have to stringify our objects
                   updateScoreElement();
                    displayScoreAndMoves(result, player, computerMove);
           

        }

        if (player === 'paper') {
             if (computerMove === 'rock') {
                result = 'You win.';
            } else if (computerMove === 'paper') {
                result = 'Tie.';
            } else if (computerMove === 'scissors') {
                result = 'You lose.';
            }

             if (result=== 'You win.') {
                score.wins++;
                
            }
            else if( result === 'You lose.'){
                score.loses++;
            }
            else if (result === 'Tie.') {
                score.ties++;
                
            }
            localStorage.setItem('score', JSON.stringify(score));
                          updateScoreElement();
                           displayScoreAndMoves(result, player, computerMove);
            
            
        }

        if (player === 'rock') {
             if (computerMove === 'rock') {
                    result = 'Tie.';
                } else if (computerMove === 'paper') {
                    result = 'You lose.';
                } else if (computerMove === 'scissors') {
                    result = 'You win.';
                }
             if (result=== 'You win.') {
                score.wins++;
                
            }
            else if( result === 'You lose.'){
                score.loses++;
            }
            else if (result === 'Tie.') {
                score.ties++;
                
            }
            localStorage.setItem('score', JSON.stringify(score));

               updateScoreElement();

               displayScoreAndMoves(result,player,computerMove);


            
            
        }
               
      }

      function updateScoreElement(){
        document.querySelector('.js-score')
               .innerHTML = `Wins:${score.wins}, Loses:${score.loses},Ties:${score.ties}`;
      }

    function displayScoreAndMoves(result, player, computerMove){
        document.querySelector('.js-result').innerHTML = result;
        document.querySelector('.js-moves')
        .innerHTML = `  You
        <img class="move-icon" src="icons/${player}-emoji.png" alt="">
        <img class="move-icon" src="icons/${computerMove}-emoji.png" alt="">
        <img class="move-icon" src="" alt="">
        Computer`;
    }

    