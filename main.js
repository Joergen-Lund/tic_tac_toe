const BOARD = document.getElementById("board")
const MESSAGE = document.getElementById("message")

const TILES = []
const OCCUPIED_TILES = []
const BOARD_SIZE = 9

let circleToPlay = true
let gameOver = false
let message = ""


function createBoard() {
    for (let i = 0; i < BOARD_SIZE; i++) {
        const TILE = document.createElement("div")
        TILE.classList.add("tile")
        TILE.addEventListener("click", () => claimTile(TILE))

        TILES.push(TILE)
        BOARD.appendChild(TILE)
    }
}

createBoard()

function claimTile(TILE) {
    if (gameOver) return

    if (OCCUPIED_TILES.indexOf(TILE) !== -1) return
    
    
    if (circleToPlay) {
        TILE.innerHTML = "O"
        TILE.classList.add("circle")
        
        circleToPlay = false
        OCCUPIED_TILES.push(TILE)
        
        checkForWin()
    } else {
        TILE.innerHTML = "X"
        TILE.classList.add("cross")
        
        circleToPlay = true
        OCCUPIED_TILES.push(TILE)
        
        checkForWin()
    }


    if (OCCUPIED_TILES.length === 9 && !gameOver) return win("draw")
}

function checkForWin() {

    if (TILES[0].classList.contains("circle") || TILES[0].classList.contains("cross")) {
        
        let player = ""

        TILES[0].classList.contains("circle") ? player = "circle" : player = "cross"

        if (TILES[1].classList.contains(player) && TILES[2].classList.contains(player)) {
            return win(player)
        } else if (TILES[4].classList.contains(player) && TILES[8].classList.contains(player)) {
            return win(player)
        } else if (TILES[3].classList.contains(player) && TILES[6].classList.contains(player)) {
            return win(player)
        }

    }

    if (TILES[1].classList.contains("circle") || TILES[1].classList.contains("cross")) {
        
        let player = ""

        TILES[1].classList.contains("circle") ? player = "circle" : player = "cross"

        if (TILES[4].classList.contains(player) && TILES[7].classList.contains(player)) {
            return win(player)
        } 

    }

    if (TILES[2].classList.contains("circle") || TILES[2].classList.contains("cross")) {
        
        let player = ""

        TILES[2].classList.contains("circle") ? player = "circle" : player = "cross"

        if (TILES[4].classList.contains(player) && TILES[6].classList.contains(player)) {
            return win(player)
        } else if (TILES[5].classList.contains(player) && TILES[8].classList.contains(player)) {
            return win(player)
        }

    }

    if (TILES[3].classList.contains("circle") || TILES[3].classList.contains("cross")) {
        
        let player = ""

        TILES[3].classList.contains("circle") ? player = "circle" : player = "cross"

        if (TILES[4].classList.contains(player) && TILES[5].classList.contains(player)) {
            return win(player)
        }

    }

    if (TILES[6].classList.contains("circle") || TILES[6].classList.contains("cross")) {
        
        let player = ""

        TILES[6].classList.contains("circle") ? player = "circle" : player = "cross"

        if (TILES[7].classList.contains(player) && TILES[8].classList.contains(player)) {
            return win(player)
        }

    }

}

function win(player) {
    if (player !== "draw") {
        MESSAGE.innerHTML = `${player} wins!`
    } else {
        MESSAGE.innerHTML = `No more available tiles, it's a draw.`
    }

    gameOver = true
}
