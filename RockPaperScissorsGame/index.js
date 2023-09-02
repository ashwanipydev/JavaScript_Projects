const button = document.querySelectorAll("button")
const resultEl = document.getElementById("result")
const playScoreEl = document.getElementById("user-score")
const computerScoreEl = document.getElementById("computer-score")


let playScore = 0
let computerScore = 0

button.forEach(button=>{
    button.addEventListener("click", ()=>{
       const result = playRound(button.id, computerPlay())
       resultEl.innerText = result
    })
})


function computerPlay(){
    const choices = ['rock','paper','scissors']
    const randomChoices = Math.floor(Math.random() * choices.length)
    return choices[randomChoices]
}


function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){

        return `It's a tie!`
    }else if(
        (playerSelection === 'rock' && computerSelection === 'scissors')||
        (playerSelection === "paper" && computerSelection === "rock")||
        (playerSelection === "scissors" && computerSelection === "paper")
    ){  
        playScore++
        playScoreEl.innerText = playScore
        return `you win! ${playerSelection} beats ${computerSelection}`
    }else{
        computerScore++
        computerScoreEl.innerText = computerScore
        return `you lose! ${computerSelection} beats ${playerSelection}`
    }
}