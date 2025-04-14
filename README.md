# rock-paper-scissors
<html>
      <head>
         <title>ROCK-PAPER-SCISSOR</title>
         <link rel="stylesheet" href="rock-paper-scissors.css">
      </head>
      <body>
         <p class="title">rock paper scissors</p>

         <button onclick="playerGame('rock')" class="move-icon"><img src="rock-emoji.png" class="icon"></button>

         <button onclick="playerGame('paper')" class="move-icon"><img src="paper-emoji.png" class="icon"></button>

         <button onclick="playerGame('scissor')" class="move-icon"><img src="scissor-emoji.png" class="icon"></button>

         <button onclick="
         score.wins=0;
         score.losses=0;
         score.ties=0;
         localStorage.removeItem('score');
         updateScore();
         " class="reset">reset</button>

         <p class="pinscore"></p>
         <p class="pinresult"></p>
         <p class="pinmoves"></p>

         <script src="rock-paper-scissors.js"></script>
      </body>
   </html>
