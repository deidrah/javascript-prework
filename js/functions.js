function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function resetScores() {
  clearMessages();
	document.getElementById('play-rock').removeAttribute('disabled');
  document.getElementById('play-paper').removeAttribute('disabled');
  document.getElementById('play-scissors').removeAttribute('disabled');
  playerWin = 0;
  aiWin = 0;
  drawsNo = 0;
  draws.textContent = drawsNo;
  wins.textContent = playerWin;
  losses.textContent = aiWin;
};