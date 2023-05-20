//create two variables, firstcard and second card
//set their values to a random number between 2-11

//create a variable, sum and set it to the sum of the two cards
let cards= []// array- ordered list of items
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = " "

let messageEl = document.getElementById("message-el")
//store the sum paragraph in a variable called sumEl
//another way to display the sum in the display is
//let sumEl = document.getElementById("#sum-el")
let sumEL = document.getElementById("sum-el")
//store the cards paragraph in a variable called cardsEl
let cardsEl = document.getElementById("cards-el")
//create a new funtion called startGame() that calls rendercalls()
let player = {
    Name:"Per",
    Chips:200,
    sayHello: function() {
        console.log("Prajval K P")
    }
}

let playerEl= document.getElementById("player-el")
playerEl.textContent=player.Name + ": $"+ player.Chips

function getRandomCard() {
    let RandomNumber =Math.floor( Math.random()*13) + 1//0-12
    if (RandomNumber>10) {
        return 10
    }
    else if (RandomNumber===1) {
        return 11
    }
    else {
        return RandomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards= [firstCard, secondCard]
    sum = firstCard + secondCard 
    renderGame()
}
function renderGame() {
    //render out firstCard and secondCard
    cardsEl.textContent = "Cards:"
    //Create a for loop that renders out all the cards instead of just two
    for (let i=0; i<cards.length;i++)
    {
        cardsEl.textContent+=cards[i]+ " "
    }
    //render out all the cards we have
    sumEL.textContent = "Sum:" +" "+ sum 
    if (sum <= 20) {
        message="do you want draw a new card? "
    }
     else if (sum === 21) 
     {
        message="Wohoo! You've got Blackjack!"
        hasBlackJack = true
    }
    
    else if (sum > 21)
    {
        message="You're out of the game!"
        isAlive =false
    }
    
    messageEl.textContent = message
}

function newCard() {
    //create a card variable, and hard code its value to a number (2-11)
    //add the new card to the sum variable
    //call startGame
    if (isAlive=== true && hasBlackJack=== false) {
        let card =getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    } 
    
}
