const printMessage = function(msg){
  const div = document.createElement('div');
  div.innerHTML = msg;
  document.getElementById('messages').appendChild(div);
}

const clearMessages = function(){
	document.getElementById('messages').innerHTML = '';
}

const resetScores = function(){
  clearMessages();
  document.getElementById('play-rock').removeAttribute('disabled');
  document.getElementById('play-paper').removeAttribute('disabled');
  document.getElementById('play-scissors').removeAttribute('disabled');
}