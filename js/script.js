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

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/* f(randomNumber == 1){
  computerMove = 'kamień';
} else if(randomNumber == 2){
  computerMove = 'papier';
} else if(randomNumber == 3){
  computerMove = 'nożyce';
} */

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/*
if(playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == 2) {
  playerMove = 'papier';
} else if (playerInput == 3) {
  playerMove = 'nożyce';
} */

printMessage('Twój ruch to: ' + playerMove);

function displayResult(argComputerMove, argPlayerMove) {
  if( argComputerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  } else if ( argComputerMove == 'papier' && argPlayerMove == 'kamień') {
    printMessage('Przegrałeś :(');
  } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
    printMessage('Ty wygrywasz!'); 
  } else if ( argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
    printMessage('Przegrałeś :('); 
  } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
    printMessage('Przegrałeś :('); 
  } else if ( argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
    printMessage('Ty wygrywasz!'); 
  } else if ( argComputerMove == 'papier' && argPlayerMove == 'papier') {
    printMessage('Remis'); 
  } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
    printMessage('Remis'); 
  } else if ( argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
    printMessage('Remis'); 
  } else {
    printMessage('nieznany ruch');
  } 
}

displayResult(computerMove, playerMove);

