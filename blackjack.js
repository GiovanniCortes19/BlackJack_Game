// Document Elements:
let cards = document.getElementById("cards-el");
let sumOfCards = document.getElementById("sum-el");
let resultMessage = document.getElementById("message-el");

let firstCard = getCards();
let secondCard = getCards();

let sum = firstCard + secondCard;

let message = "";

// Functions:

function getCards() {
  return Math.floor(Math.random() * (12 - 2) + 2);
}

function startGame() {
  cards.textContent = `Cards: ${firstCard} - ${secondCard}`;
  sumOfCards.textContent = `Sum: ${sum}`;

  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = `Wohoo! You've got Blackjack! 💵`;
  } else {
    message = `You're out of the game! 😢`;
  }

  resultMessage.textContent = message;
}

function newCard() {
  let card = getCards();
  sum += card;
  startGame();
  cards.textContent += ` - ${card}`;
  sumOfCards.textContent = `Sum: ${sum}`;
}
