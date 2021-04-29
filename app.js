// variables in memory
let cardContainer = document.querySelector("#card-container");
let allCards = [];
let firstClick;
let secondClick;

//Data array for objects:
let cardData = [
    {class:"card", text:"&AMP;", key:"amp"},
    {class:"card", text:"&numero;", key:"numero"},
    {class:"card", text:"&circledR;", key:"cicle"},
    {class:"card", text:"&para;", key:"para"},
    {class:"card", text:"&quest;", key:"quest"},
    {class:"card", text:"&Hat;", key:"hat"},
    {class:"card", text:"&checkmark;", key:"check"},
    {class:"card", text:"&ctdot;", key:"dot"}
]

for(let i = 0; i <= 1; i++) { // Looping twice
   
    for(let x = 0; x <= cardData.length - 1; x++) {
        
        let card = document.createElement('div');
        card.classList.add(cardData[x].class);
        card.innerHTML = cardData[x].text;
        card.setAttribute('data-key', cardData[x].key);

        // add card to page
        allCards.push(card);
    }
}

allCards = shuffle(allCards);
for(let a = 0; a <= allCards.length - 1; a++) {
    cardContainer.appendChild(allCards[a]);
}

//Click events to tell for mathcing pairs
cardContainer.addEventListener("click", function(event){
    const key = event.target.hasAttribute('data-key');

    if (firstClick === undefined && key) {
        console.log("firstClick");
        firstClick = event.target;
    } else if (firstClick !== undefined && secondClick === undefined && key && firstClick !== event.target) {
        console.log("secondClick")
        secondClick = event.target.getAttribute('data-key');
        console.log(firstClick.getAttribute('data-key') === secondClick)
        firstClick = undefined;
        secondClick = undefined;
    }
});

// // Fisher-Yates shuffle fuction:
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex--);
      temporaryValue = array[currentIndex];
      allCards[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

   return allCards;
};





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
