let allCards = [...document.querySelectorAll(".card")]
let firstClick
let secondClick
let score = 0

//console.log(allCards)

document.querySelector("#card-container").addEventListener("click", function(e){
    if (firstClick === undefined) {
        console.log("firstClick")
        firstClick = e.target
    } else if (firstClick !== undefined && secondClick === undefined) {
        console.log("secondClick")
        secondClick = e.target
        console.log(firstClick.classList["1"] === secondClick.classList["1"])
        firstClick = undefined;
        secondClick = undefined;
    }
})

const cardData = [
    {class:"card amp", text:"&AMP;"},
    {class:"card num", text:"&numero;"},
    {class:"card cir", text:"&circledR;"},
    {class:"card para", text:"&para;"},
    {class:"card quest", text:"&quest;"},
    {class:"card hat", text:"&Hat;"},
    {class:"card check", text:"&checkmark;"},
    {class:"card dot", text:"&ctdot;"},
    {class:"card amp", text:"&AMP;"},
    {class:"card num", text:"&numero;"},
    {class:"card cir", text:"&circledR;"},
    {class:"card para", text:"&para;"},
    {class:"card quest", text:"&quest;"},
    {class:"card hat", text:"&Hat;"},
    {class:"card check", text:"&checkmark;"},
    {class:"card dot", text:"&ctdot;"}
]

// // Fisher-Yates shuffle fuction:
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex--);
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    //cardDeck(array);
    return array;
};

console.log(shuffle(cardData))




























// function scoreCount() {
//     if (firstClick.classList["1"] === secondClick.classList["1"]) {
//         score += 5
//     }
//     console.log(scoreCount)
// }


//grab the array content and pass it into ...another array?
//write function for card match on line 14
//what happens next? point?
//Think about how this is working ... is this true? and then is this true? Line by line, what's happening.
//Game engine almost there.

//The journey continues...place true and false statement is winning condition (create as function)
//then add score to said function
//display score somewhere readable
//Instruction to play
//shuffle cards (Math.random - will this work? Or do I <i>really</i> need an array?)