// variables in memory
const cardContainer = document.querySelector("#card-container");
const endGame = document.querySelector(".end-game");
let allCards = [];
let firstClick;
let secondClick;
let matchCard = 0;

//Data array for objects:
let cardData = [
  { class: "card", text: "<span>&AMP;</span>", key: "amp" },
  { class: "card", text: "<span>&numero;</span>", key: "numero" },
  { class: "card", text: "<span>&circledR;</span>", key: "cicle" },
  { class: "card", text: "<span>&para;</span>", key: "para" },
  { class: "card", text: "<span>&quest;</span>", key: "quest" },
  { class: "card", text: "<span>&Hat;</span>", key: "hat" },
  { class: "card", text: "<span>&checkmark;</span>", key: "check" },
  { class: "card", text: "<span>&ctdot;</span>", key: "dot" },
];

//Looping twice to collect 16 cards
for (let i = 0; i <= 1; i++) {
  for (let x = 0; x <= cardData.length - 1; x++) {
    let card = document.createElement("div");
    card.classList.add(cardData[x].class);
    card.innerHTML = cardData[x].text;
    card.setAttribute("data-key", cardData[x].key);

//Adding cards to the page
    allCards.push(card);
  }
}
//Cards get shuffled
allCards = shuffle(allCards);
for (let a = 0; a <= allCards.length - 1; a++) {
  cardContainer.appendChild(allCards[a]);
}

//Click events to tell for matching pairs
cardContainer.addEventListener("click", function (event) {
  const key = event.target.hasAttribute("data-key");
  event.target.firstElementChild.classList.add("cardVisible")
  console.log("firstClick");

  if (firstClick === undefined && key) {
    firstClick = event.target;
  } else if (
    firstClick !== undefined &&
    secondClick === undefined &&
    key &&
    firstClick !== event.target
  ) {
    //console.log("secondClick");
    secondClick = event.target;
    if (firstClick.getAttribute("data-key") === secondClick.getAttribute('data-key')) {
        firstClick = undefined;
        secondClick = undefined;
        matchCard++
        if (matchCard === cardData.length){
            endGame.classList.add("congrats");
            setTimeout(() => {
              window.location.reload();
            },4000)
        }
    } else {
        setTimeout(() => {
            firstClick.firstElementChild.classList.remove("cardVisible")
            secondClick.firstElementChild.classList.remove("cardVisible")
            firstClick = undefined;
            secondClick = undefined;
        },250)
    }
  }
});

//Fisher-Yates shuffle fuction:
function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex--);
    temporaryValue = array[currentIndex];
    allCards[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return allCards;
}




