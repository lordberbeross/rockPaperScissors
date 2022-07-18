const computer_choice= document.getElementById('computer-choice');
const player_choice= document.getElementById('player-choice');
const result= document.getElementById('result');

const possibleChoices = document.querySelectorAll('button');

let user_choice;
let randomComputer_choice;
let resultX;


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {
	user_choice= e.target.id;
	player_choice.innerHTML= user_choice;
	possibleComputerChoice();
	resultShower();
	
}))
function possibleComputerChoice(){
		const randomNumber = Math.floor(Math.random() * possibleChoices.length) +1 ;

		if(randomNumber=== 1){
			randomComputer_choice="rock";
		}
		if(randomNumber=== 2){
			randomComputer_choice="paper";
		}
		if(randomNumber=== 3){
			randomComputer_choice="scissors";
		}

		computer_choice.innerHTML=randomComputer_choice


}
function resultShower(){
	if(user_choice===randomComputer_choice){
		resultX="it is a draw!"
	} if(randomComputer_choice==='rock' && user_choice==='paper'){
		resultX="Player wins!"
	} if(randomComputer_choice==='rock' && user_choice==='scissors'){
		resultX="Computer wins!"
	} if(randomComputer_choice==='scissors' && user_choice==='paper'){
		resultX="Computer wins!"
	} if(randomComputer_choice==='scissors' && user_choice==='rock'){
		resultX="Player wins!"
	} if(randomComputer_choice==='paper' && user_choice==='rock'){
		resultX="Computer wins!"
	} if(randomComputer_choice==='paper' && user_choice==='scissors'){
		resultX="Player wins!"
	}
	 result.innerHTML= resultX;
	console.log(resultX)
}