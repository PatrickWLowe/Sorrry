// Define the types of Sorry! cards
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

// Function to shuffle the deck
function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]]; // Swap elements to shuffle
  }
}

// Create a deck of Sorry! cards with 5 of each kind
const deckOfSorryCards = [];
for (const card of sorryCards) {
  for (let i = 0; i < 5; i++) {
    deckOfSorryCards.push(card);
  }
}

// Shuffle the deck
shuffleDeck(deckOfSorryCards);

// Function to draw a card from the deck
function drawCard(deck) {
  if (deck.length === 0) {
    console.log("No more cards in the deck.");
    return null;
  }
  return deck.pop();
}

// Get references to HTML elements
const cardDisplay = document.getElementById("cardDisplay");
const drawCardButton = document.getElementById("drawCardButton");

// Draw a card and display it when the button is clicked
drawCardButton.addEventListener("click", function () {
  const drawnCard = drawCard(deckOfSorryCards);

  if (drawnCard) {
    cardDisplay.innerHTML = `<div class="card-container">
      <p class="topnumber">${drawnCard.value}</p>
      <p class="topdesc">${drawnCard.name}</p>
      <h1 class="center">${drawnCard.value}</h1>
      <p class="btmdesc">${drawnCard.name}</p>
      <p class="btmnumber">${drawnCard.value}</p>
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
    alert("Deck refilled and reshuffled!");
  } else {
    shuffleDeck(deckOfSorryCards);
    alert("Deck reshuffled!");
  }
});
