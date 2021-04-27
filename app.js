let allCards = [...document.querySelectorAll(".card")]
let firstClick
let secondClick

console.log(allCards)

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

