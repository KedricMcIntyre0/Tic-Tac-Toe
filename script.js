const gameBoard = document.querySelector("#game-board")
const informationDisplay = document.querySelector("#info")
const startCells = [ "", "", "", "", "", "", "", "", "",]
let go = "Circle"
informationDisplay.textContent = "Circle is first"
const restartButton = document.querySelector("button")

function startBoard() {
    startCells.forEach((_cell, index) => {
        const cellElement = document.createElement('div')
        cellElement.classList.add('square')
        cellElement.id = index
        cellElement.addEventListener("click", addGo)
        gameBoard.append(cellElement)
    })
}
startBoard()

function addGo(e) {
   const goDisplay = document.createElement("div")
   goDisplay.classList.add(go)
   e.target.append(goDisplay)
   go = go === "Circle" ? "X" : "Circle";
   informationDisplay.textContent = "It's " + go + "'s turn now"
   e.target.removeEventListener("click", addGo)
}

/*
Play against computer
number of players
scoring system   
*/ 


