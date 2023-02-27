// Document Elements:
let cards = document.getElementById("cards-el");
let sumOfCards = document.getElementById("sum-el");
let resultMessage = document.getElementById("message-el");

let firstCard = getCards();
let secondCard = getCards();
let cardsList = [firstCard, secondCard];

let sum = firstCard + secondCard;

let message = "";

// Functions:

function getCards() {
  let drawCard = Math.floor(Math.random() * 13) + 1;
  if (drawCard === 1) return 11;
  else if (drawCard === 11 || drawCard === 12 || drawCard === 13) return 10;
  else return drawCard;
}

function startGame() {
  renderGame();
}

function renderGame() {
  cards.textContent = `Cards: `;
  cardsList.forEach((cardDrawn) => {
    cards.textContent += `${cardDrawn} `;
  });

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
  cardsList.push(card);
  sum += card;
  renderGame();
}
