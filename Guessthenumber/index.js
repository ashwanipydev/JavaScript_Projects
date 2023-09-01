let random = parseInt(Math.random()*100+1)

 const submit = document.querySelector('#subt')
 const userInput = document.querySelector('#guessField')
 const guessSlot = document.querySelector('.guesses')
 const remaining = document.querySelector('.lastResult')
 const lowOrHi = document.querySelector('.lowOrHi')
 const startOver = document.querySelector('.resultParas')


 const p = document.createElement('p')
 
 let prevGuess = []
 let numGuess = 1
 let playGame = true

 //* "First, we take a guess and pass it into the validateGuess() function."
 if(playGame){
    submit.addEventListener("click", (e)=>{
     e.preventDefault()
     const guess = parseInt(userInput.value)
     validateGuess(guess)
    })
  }
  /** *"In the validateGuess() function, we first check if the guess is a number and whether it is greater than 1 and less than 100. In the else part, we perform another check to see if the number of attempts the user has left. If there are no attempts left, we display a message to end the game. If not, we display the guess and also clear the message using the clearGuess() function." */
 function validateGuess(guess){
    if(isNaN(guess)){
        alert("Pleas enter a valid Number")
    }else if(guess < 1){
        alert("Pleas enter a number more than 1")
    }else if(guess > 100){
        alert("Pleas enter a number less than 100")
    }else{
        prevGuess.push(guess)
        if(numGuess === 10){
            clearGuess(guess)
            displayMessage(`Game Over > Random number was ${random}`)
            endGame()
        }else{
            clearGuess(guess)
            checkGuess(guess)
        }
    }
 }

 function checkGuess(guess){
    if(guess === random){
        displayMessage(`You guessed it Right`)
    }else if(guess < random){
        displayMessage(`Number is Too low`)
    }else if(guess > random){
        displayMessage(`Number is Too High`)
    }
 }

 function clearGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML +=  `${guess} ,`
    numGuess++;
    remaining.innerHTML = `${10 - numGuess}`
 }

 function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
 }

 function endGame(){
    userInput.value =''
    userInput.setAttribute("disabled", "")
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
 }

 function newGame(){
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener("click",function(){
        random = parseInt(Math.random()*100+1)
        prevGuess = []
        newGame = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${10 - numGuess}`
        userInput.removeAttribute("disabled")
        startOver.removeChild(p)
        playGame = true
    })
 }

