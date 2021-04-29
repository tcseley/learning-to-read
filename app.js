// variables in memory
let cardContainer = document.querySelector("#card-container");
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

for (let i = 0; i <= 1; i++) {
  // Looping twice

  for (let x = 0; x <= cardData.length - 1; x++) {
    let card = document.createElement("div");
    card.classList.add(cardData[x].class);
    card.innerHTML = cardData[x].text;
    card.setAttribute("data-key", cardData[x].key);

    // add card to page
    allCards.push(card);
  }
}

allCards = shuffle(allCards);
for (let a = 0; a <= allCards.length - 1; a++) {
  cardContainer.appendChild(allCards[a]);
}

//Click events to tell for matching pairs
cardContainer.addEventListener("click", function (event) {
  const key = event.target.hasAttribute("data-key");

  event.target.firstElementChild.setAttribute("style", "visibility: visible;");

  if (firstClick === undefined && key) {
    console.log("firstClick");
    firstClick = event.target;
  } else if (
    firstClick !== undefined &&
    secondClick === undefined &&
    key &&
    firstClick !== event.target
  ) {
    console.log("secondClick");

    secondClick = event.target;
    if (firstClick.getAttribute("data-key") === secondClick.getAttribute('data-key')) {
        firstClick = undefined;
        secondClick = undefined;
        matchCard++
    } else {
        setTimeout(() => {
            firstClick.firstElementChild.style = "";
            secondClick.firstElementChild.style = "";
            firstClick = undefined;
            secondClick = undefined;
        },250)

    }
    


  }
});

// // Fisher-Yates shuffle fuction:
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

// function scoreCount()
//     if (firstClick.classList["1"] === secondClick.classList["1"]) {
//         score += 5
//     }
//     console.log(scoreCount)
// }

//Add score count - runnig totals(?)
//~~grab the array content and pass it into ...another array?~~
//write function for card match on line 14
//what happens next? point?
//Think about how this is working ... is this true? and then is this true? Line by line, what's happening.
//Game engine almost there.

//The journey continues...place true and false statement is winning condition (create as function)
//then add score to said function
//display score somewhere readable
//Instruction to play
//shuffle cards (Math.random - will this work? Or do I <i>really</i> need an array?)
//making shuffle function more of an aray passthrough to handle entire array - right now it shuffles each set of eaight
//after for loop creates dom card elements, appends properties, put that into array
//
