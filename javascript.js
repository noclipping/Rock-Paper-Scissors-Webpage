ps="";
cs="";
pp=0;
cp=0;

const rockaudio = document.querySelector(`audio[data-audio="rock"]`);
const paperaudio = document.querySelector(`audio[data-audio="paper"]`);
const scissorsaudio = document.querySelector(`audio[data-audio="scissors"]`);

function updateScore(){
    computerscore.textContent = cp;
    playerscore.textContent = pp;

}
function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
function computerSelection(){
    rps=["rock","paper","scissors"];
    selection=rps[randomInt(0,3)];
    return(selection);
  }

const computerscore=document.querySelector('#cs')
const playerscore=document.querySelector('#ps')

const reset= document.querySelector('#reset');
reset.addEventListener('click', function(e){
    cp=0;
    pp=0;
    presults.textContent="RESET!"
    updateScore();
})

const presults = document.querySelector('#presults')

//ROCK
const rock= document.querySelector('#rock');
rock.addEventListener('click', function(e){
    ps="rock";
    cs=computerSelection();
    presults.textContent = 'you chose: ' +this.id+' | computer chose: ' + cs;
    matchResults(ps,cs)
})

//PAPER
const paper= document.querySelector('#paper');
paper.addEventListener('click', function(e){
    ps="paper";
    cs=computerSelection();
    presults.textContent = 'you chose: ' +this.id+' | computer chose: ' + cs;
    matchResults(ps,cs)
})

//SCISSORS
const scissors= document.querySelector('#scissors');
scissors.addEventListener('click', function(e){
    ps="scissors"
    cs=computerSelection();
    presults.textContent = 'you chose: ' +this.id+' | computer chose: ' + cs;
    matchResults(ps,cs)
    
})
// win/loss con

function winCondition(){
    console.log("player wins");
    pp+=1;
    updateScore();
    presults.style.color = 'green';
}
function lossCondition(){
    console.log("computer wins");
     cp+=1
    updateScore();
    presults.style.color = 'red';
}

//  --------------
function matchResults(ps,cs){
   
    if(pp===5){ presults.textContent = "player wins";presults.style.color = 'green';return}
   
    else if (cp===5){presults.textContent = "computer wins";presults.style.color = 'red';return}
   
    if (ps===cs){
        console.log("tie");
        presults.style.color = 'white';
      } else if (ps === "rock" && cs === "scissors")
      {
        winCondition(); rockaudio.play();
      } else if (ps === "rock" && cs === "paper")
      {
        lossCondition(); paperaudio.play();
      } else if (ps === "scissors" && cs === "paper")
      {
        winCondition(); scissorsaudio.play();
      } else if (ps === "scissors" && cs === "rock")
      {
        lossCondition(); rockaudio.play();
      } else if (ps === "paper" && cs === "rock")
      {
        winCondition(); paperaudio.play();
      } else if (ps === "paper" && cs === "scissors")
      {
        lossCondition(); scissorsaudio.play();
      }
      if(pp===5){ presults.textContent = "player wins"; updateScore();presults.style.color = 'green';return}
      else if (cp===5){presults.textContent = "computer wins";updateScore();presults.style.color = 'red';return}
      updateScore();
}