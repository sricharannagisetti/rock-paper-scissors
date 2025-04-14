let score = JSON.parse(localStorage.getItem('score'));

      if(score === null){
            score = {
               wins: 0,
               losses: 0,
               ties: 0,
                
            };
      }

      updateScore();

      
   function playerGame(playerMove){

   const randomNumber = Math.random();

      let computerMove = '';

      if (randomNumber >=0 && randomNumber < 1/3){
      computerMove = 'rock';  
      }else if(randomNumber >= 1/3 && randomNumber < 2/3){
      computerMove = 'paper';
      }else if (randomNumber >= 2/3 && randomNumber <1){
      computerMove ='scissor';
      }

      result='';

      if(computerMove===playerMove){
      result = 'tie.';
      }else if((computerMove==='scissor' && playerMove==='paper') ||
               (computerMove==='rock' && playerMove==='scissor')||
               (computerMove==='paper' && playerMove==='rock')){
      result = 'you lose.';
      }else{
      result = 'you win.';
      }

      if(result === 'you win.'){
      score.wins +=1;
      }else if(result === 'you lose.'){
      score.losses +=1;
      }else if(result === 'tie.'){
      score.ties +=1;
      }

      localStorage.setItem('score',JSON.stringify(score));

      updateScore();

      document.querySelector('.pinmoves')
      .innerHTML = `you picked <img src="${playerMove}-emoji.png" class="move-icon"><img src="${computerMove}-emoji.png" class="move-icon">computer picked`;

      document.querySelector('.pinresult')
      .innerHTML = (`${result}`);

   }
   
   function updateScore(){
      document.querySelector('.pinscore')
       .innerHTML = (`wins: ${score.wins}. losses: ${score.losses}. ties: ${score.ties}.`);
   }