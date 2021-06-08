const letterBox1 = document.getElementById("letterBox1");
const checkBtn = document.getElementById("checkBtn");
const resetBtn = document.getElementById("resetBtn");
var wordInput = document.getElementById("wordInput").value;
var turn = 1;
var letterCorrect = 0;
const pageTitle = document.getElementById("Word");
var randomWord = "";
var incl = "";


function pickWord(){
	var random = Math.floor(Math.random(words)* words.length)
	console.log(words[random]);
	randomWord = words[random];
	letterBox1.innerHTML = randomWord[0];
}
function checkWord(){
	var wordInput = document.getElementById("wordInput").value;
	if(wordInput.length !== 5){
		alert("word must be 5 letters long")
	}
	letterCorrect = 0;	
	console.log(wordInput);
		var currentRow = "boxRow" + turn;
		var childSquares = document.getElementById(currentRow).getElementsByClassName("letterBox");

		for (var i = 0; i < childSquares.length; i++) {
			incl = randomWord.includes(wordInput[i]);
			childSquares[i].innerHTML = wordInput[i];

			if(randomWord[i] === wordInput[i]){
				childSquares[i].style.backgroundColor = "green";	
				letterCorrect++;
			}else if(incl === true){
				childSquares[i].style.backgroundColor = "yellow";
			}

			if(letterCorrect === 5){
				pageTitle.innerHTML = "Gefeliciteerd je hebt gewonnen";
				checkBtn.disabled = true;
			}	
		}
		turn++;
		if(turn === 6){
			pageTitle.innerHTML = "Game Over, het juiste woord was " + randomWord;
			checkBtn.disabled = true;
			}
	}

pickWord();
resetBtn.onclick = function(){
	document.location.reload();
}
checkBtn.onclick = function(){
	checkWord();
};

