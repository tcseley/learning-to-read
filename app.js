let allCards = [...document.querySelectorAll(".card")]
let firstClick
let secondClick

// console.log(allCards)

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
    
    // else if (firstClick !== undefined && secondClick !== undefined) {
    //     firstClick = undefined;
    //     secondClick = undefined;
    // }
})

//write function for card match on line 14
//what happens next? point?
//Think aobut how this is working ... is this true? and then is this true? Line by line, what's happening.
//Game engine almost there.