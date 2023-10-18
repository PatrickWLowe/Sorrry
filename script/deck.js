const sorryCards = [
  { name: "Move Forward 1 Space", action: "MoveForward", value: 1 },
  { name: "Move Forward 2 Spaces", action: "MoveForward", value: 2 },
  { name: "Move Forward 3 Spaces", action: "MoveForward", value: 3 },
  { name: "Move Backwards 4 Spaces", action: "MoveBackward", value: 4 },
  { name: "Move Forward 5 Spaces", action: "MoveForward", value: 5 },
  {
    name: "Move Forward 7 Spaces, or Split between two Pawns",
    action: "MoveForward",
    value: 7,
  },
  { name: "Move Forward 8 Spaces", action: "MoveForward", value: 8 },
  {
    name: "Move Forward 10 Spaces, or backwards 1",
    action: "MoveForward",
    value: 10,
  },
  {
    name: "Swap Position with Another Player or move forward 11 spaces",
    action: "SwapPosition",
    value: 11,
  },
  { name: "Move Forward 12 Spaces", action: "MoveForward", value: 12 },
  {
    name: "Take a pawn from start and switch places with an opponent. Then bump the opponent back to their start or move forward 4 spaces",
    action: "MoveForward",
    value: "Sorry!",
  },
];

const deckOfSorryCards = [];
const discardPile = [];
const maxDiscardPileSize = 3; // Maximum number of cards to display in the discard pile

function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]]; // Swap elements to shuffle
  }
}

function drawCard(deck) {
  if (deck.length === 0) {
    console.log("No more cards in the deck.");
    return null;
  }
  const randomIndex = Math.floor(Math.random() * deck.length);
  return deck.splice(randomIndex, 1)[0]; // Draw a card randomly
}

const cardDisplay = document.getElementById("cardDisplay");
const discardPileDisplay = document.getElementById("discardPileDisplay"); // Get the discard pile element
const discardStack = document.querySelector(".card-stack"); // Get the card stack container

let currentCard = null;

drawCardButton.addEventListener("click", function () {
  if (currentCard) {
    if (discardPile.length >= maxDiscardPileSize) {
      // Remove the oldest card from the display
      discardStack.removeChild(discardStack.lastChild);
    }

    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");
    cardContainer.innerHTML = `
      <p class="topnumber">${currentCard.value}</p>
      <p class="topdesc">${currentCard.name}</p>
      <h1 class="center">${currentCard.value}</h1>
      <p class="btmdesc">${currentCard.name}</p>
      <p class="btmnumber">${currentCard.value}</p>
    `;

    discardStack.prepend(cardContainer); // Add the current card to the top of the stack
  }

  currentCard = drawCard(deckOfSorryCards);

  if (currentCard) {
    cardDisplay.innerHTML = `<div class="card-container">
        <p class="topnumber">${currentCard.value}</p>
        <p class="topdesc">${currentCard.name}</p>
        <h1 class="center">${currentCard.value}</h1>
        <p class "btmdesc">${currentCard.name}</p>
        <p class="btmnumber">${currentCard.value}</p>
      </div>`;
  }
});

const reshuffleButton = document.getElementById("reshuffleButton");

reshuffleButton.addEventListener("click", function () {
  if (deckOfSorryCards.length === 0) {
    for (const card of sorryCards) {
      for (let i = 0; i < 5; i++) {
        deckOfSorryCards.push(card);
      }
    }
    shuffleDeck(deckOfSorryCards);
    discardPile.length = 0; // Clear the discard pile
    discardStack.innerHTML = ""; // Clear the display of discarded cards
    alert("Deck refilled and reshuffled!");
  } else {
    shuffleDeck(deckOfSorryCards);
    alert("Deck reshuffled!");
  }
});
