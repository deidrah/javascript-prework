{
let playerWin = 0;
let aiWin = 0;
let drawsNo = 0;

const playGame = function(playerInput){
  clearMessages();
  const wins = document.getElementById('wins');
  const draws = document.getElementById('draws');
  const losses = document.getElementById('losses');
  function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    } 
    else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }

  const randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  const computerMove = getMoveName(randomNumber);

  printMessage('Mój ruch to: ' + computerMove);

  console.log('Gracz wpisał: ' + playerInput);

  const playerMove = getMoveName(playerInput);

  printMessage('Twój ruch to: ' + playerMove);

  const displayResult = function(argComputerMove, argPlayerMove) {
    if ((argComputerMove == 'kamień' && argPlayerMove == 'papier') || (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') || (argComputerMove == 'papier' && argPlayerMove == 'nożyce')){
      printMessage('Ty wygrywasz!');
      drawsNo++;
      playerWin++;
      draws.textContent = drawsNo;
      wins.textContent = playerWin;
    } else if ( (argComputerMove == 'papier' && argPlayerMove == 'kamień') || (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') || (argComputerMove == 'nożyce' && argPlayerMove == 'papier')){
      printMessage('Przegrałeś :(');
      drawsNo++;
      aiWin++;
      draws.textContent = drawsNo;
      losses.textContent = aiWin;
    } else if ( argComputerMove == argPlayerMove) {
      printMessage('Remis'); 
      drawsNo++;
      draws.textContent = drawsNo;
    } else {
      printMessage('nieznany ruch');
    } 
  }

  displayResult(computerMove, playerMove);
  if (playerWin == 3 || aiWin == 3) {
    document.getElementById('play-rock').setAttribute('disabled', '');
    document.getElementById('play-paper').setAttribute('disabled', '');
    document.getElementById('play-scissors').setAttribute('disabled', '');
    alert('Koniec gry, Twój wynik: ' + playerWin + ', wynik komputera: ' + aiWin );
  };
}

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});

document.getElementById('reset--scores').addEventListener('click', function(){
	resetScores();
  playerWin = 0;
  aiWin = 0;
  drawsNo = 0;
  draws.textContent = drawsNo;
  wins.textContent = playerWin;
  losses.textContent = aiWin;
});

}