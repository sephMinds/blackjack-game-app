let player = {
    name: "Player Z",
    chips: 69,
    greetings: function(){
        console.log("Hello, Enjoy Playing Blackjack")
    }
};
player.greetings();
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.querySelector("#player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function startGame() {
    const cardsImgDiv = document.getElementById("cards-img-div");
    cardsImgDiv.innerHTML = ''; 
    isAlive = true;
    hasBlackJack = false;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*52 ) ;
    let cardImgSources = [
        // Ace
        "ace_of_clubs.png","2_of_clubs.png","3_of_clubs.png","4_of_clubs.png","5_of_clubs.png",
        "6_of_clubs.png", "7_of_clubs.png", "8_of_clubs.png", "9_of_clubs.png", "10_of_clubs.png", 
        "jack_of_clubs2.png", "queen_of_clubs2.png", "king_of_clubs2.png",
        // Diamonds
        "ace_of_diamonds.png","2_of_diamonds.png","3_of_diamonds.png","4_of_diamonds.png","5_of_diamonds.png",
        "6_of_diamonds.png", "7_of_diamonds.png", "8_of_diamonds.png", "9_of_diamonds.png", "10_of_diamonds.png", 
        "jack_of_diamonds2.png", "queen_of_diamonds2.png", "king_of_diamonds2.png",
        // Hearts
        "ace_of_hearts.png","2_of_hearts.png","3_of_hearts.png","4_of_hearts.png","5_of_hearts.png",
        "6_of_hearts.png", "7_of_hearts.png", "8_of_hearts.png", "9_of_hearts.png", "10_of_hearts.png", 
        "jack_of_hearts2.png", "queen_of_hearts2.png", "king_of_hearts2.png",
        // Spades
        "ace_of_spades.png","2_of_spades.png","3_of_spades.png","4_of_spades.png","5_of_spades.png",
        "6_of_spades.png", "7_of_spades.png", "8_of_spades.png", "9_of_spades.png", "10_of_spades.png", 
        "jack_of_spades2.png", "queen_of_spades2.png", "king_of_spades2.png"
    ];

    let cardSelected = cardImgSources[randomNumber];
    let newCardImg;

    newCardImg = document.createElement("img");
    newCardImg.src = "./images/PNG-cards-1.3/"+cardSelected;
    document.getElementById("cards-img-div").appendChild(newCardImg);
    
    if(cardSelected.includes("ace")){
        return 11;
    } else if(cardSelected.includes("jack") || 
        cardSelected.includes("queen") || cardSelected.includes("king")){
        return 10;
    } else {
        return parseInt(cardSelected.substring(0, cardSelected.indexOf("_")));
    }
}






