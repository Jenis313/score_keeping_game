const p1 = {
	currentScore : 0,
	button : document.querySelector('#playerOneBtn'),
	display:  document.querySelector('#p1Display')
}
const p2 = {
	currentScore : 0,
	button : document.querySelector('#playerTwoBtn'), 
	display:  document.querySelector('#p2Display')
}

let gameOverScore = 1;
let isGameOver = false; 
const input = document.querySelector('#gameOverScore');
const resetBtn = document.querySelector('#resetBtn');
input.addEventListener('input', () => {
	overScore = parseInt(input.value);
	if(overScore<1){
		alert("Please enter above 1");
		gameOverScore = 1;
		input.value = 1;
	}else {
		gameOverScore = overScore;
	}
	reset();
})


function updateScores(player, opponent){
	if(!isGameOver){
		player.currentScore += 1;
		if(player.currentScore === gameOverScore){
			isGameOver = true;
			player.display.setAttribute('class', 'makeGreen');
			opponent.display.setAttribute('class', 'makeRed');
		}
		player.display.innerText = player.currentScore;

	}
}
p1.button.addEventListener('click', (e) => {
	updateScores(p1,p2);
	e.preventDefault();
});
p2.button.addEventListener('click', (e) => {
	updateScores(p2,p1);
	e.preventDefault();
});

resetBtn.addEventListener('click', (e) => {
	reset();
	gameOverScore = 1;
	input.value = 1;
	e.preventDefault();
});
function reset(){
	p1.currentScore = 0;
	p2.currentScore = 0;
	isGameOver = false;
	p1.display.innerText = 0;
	p2.display.innerText = 0;
	p1.display.removeAttribute("class");
	p2.display.removeAttribute("class");
}