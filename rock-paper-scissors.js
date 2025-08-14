let playerMove = "";
function player (move){
if(move === 'rock'){
  playerMove = 'rock';
}else if (move === 'paper'){
playerMove = 'paper';
}else if (move === 'scissors'){
playerMove = 'scissors';
}
console.log(move);

}

let computerMove = "";
function computer(){

Com = Math.random();
  if (Com < 1/3){
    computerMove = 'rock'
console.log('Computer picked rock')
  }else if (Com < 2/3){
    computerMove = 'paper';
console.log('Computer picked paper')
  }else if (Com < 3/3){
    computerMove = 'scissors'
console.log('computer picked scissors')
  }
}

let result = "";
  function results1(){
  if (result === playerMove === 'rock' || computerMove === 'rock'  ){
alert('Draw')
  }else if ( result === playerMove === 'rock' || computerMove === 'paper'){
alert('You Lose')
  } else if ( result === playerMove === 'rock' || computerMove === 'scissors'){
alert('You Win')
  }
  }
  function results2(){
    if (result === playerMove === 'paper' || computerMove === 'paper'  ){
alert('Draw')
  }else if ( result === playerMove === 'paper' || computerMove === 'scissors'){
alert('You Lose')
  } else if ( result === playerMove === 'paper' || computerMove === 'rock'){
alert('You Win')
  }
  }
  function results3(){
    if (result === playerMove === 'scissors' || computerMove === 'scissors'  ){
alert('Draw')
  }else if ( result === playerMove === 'scissors' || computerMove === 'rock'){
alert('You Lose')
  } else if ( result === playerMove === 'scissors' || computerMove === 'paper'){
alert('You Win')
  }
  }