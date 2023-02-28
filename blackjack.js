// Document Elements:
let cards = document.getElementById("cards-el");
let sumOfCards = document.getElementById("sum-el");
let resultMessage = document.getElementById("message-el");

let cardsList = [];
let sum = 0;
let message = "";
let isAlive = false;
let hasBlackjack = false;

let player = {
  name: "Gio",
  chips: 200,
};

let playerEl = document.getElementById("player-el");

playerEl.textContent = `${player.name}: $${player.chips}`;

// Functions:

function getCards() {
  let drawCard = Math.floor(Math.random() * 13) + 1;
  if (drawCard === 1) return 11;
  else if (drawCard > 10) return 10;
  else return drawCard;
}

function startGame() {
  isAlive = true;
  hasBlackjack = false;
  let firstCard = getCards();
  let secondCard = getCards();
  cardsList = [firstCard, secondCard];
  sum = firstCard + secondCard;
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
    hasBlackjack = true;
  } else {
    message = `You're out of the game! 😢`;
    isAlive = false;
  }

  resultMessage.textContent = message;
}

function newCard() {
  if (isAlive && !hasBlackjack) {
    let card = getCards();
    cardsList.push(card);
    sum += card;
    renderGame();
  }
}
