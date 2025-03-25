let player1;
let player2;

const gameBoard = {
    board: [null, null, null, null, null, null, null, null, null]
};

const Player = function (name, marker) {
    this.name = name;
    this.marker = marker;
};

const game = {
    players: [],
    currentPlayerIndex: 0,

    gameLogic: function (move) {
        const player = this.players[this.currentPlayerIndex];

        if (gameBoard.board[move] !== null) {
            return "Cell is occupied!";
        }

        gameBoard.board[move] = player.marker;

        if (this.checkWin(player.marker)) {
            return `${player.name} has won the game!`;
        }

        if (gameBoard.board.every(cell => cell !== null)) {
            return "It's a tie!";
        }

        this.currentPlayerIndex = 1 - this.currentPlayerIndex;
        return `${player.name}'s move. It's now ${this.players[this.currentPlayerIndex].name}'s turn.`;
    },

    winCombos: [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ],

    checkWin: function (marker) {
        return this.winCombos.some(combo => 
            combo.every(index => gameBoard.board[index] === marker)
        );
    }
};

const cells = document.querySelectorAll(".cell");

cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
        if (cell.textContent === "") {
            const result = game.gameLogic(index);

            
            cell.textContent = game.players[game.currentPlayerIndex].marker;

            if (result.includes("won")) {
                alert(result);
                resetGame(); 
            } else if (result.includes("tie")) {
                alert(result);
                resetGame(); 
            }
        }
    });
});

function resetGame() {
    gameBoard.board = [null, null, null, null, null, null, null, null, null];
    cells.forEach(cell => {
        cell.textContent = "";
    });
    game.currentPlayerIndex = 0;
}

const start = document.querySelector("#start");
start.addEventListener("click", () => {
    const player1NameInput = document.querySelector("#player_name1");
    const player2NameInput = document.querySelector("#player_name2");

    
    player1 = new Player(player1NameInput.value || "Player 1", "x");
    player2 = new Player(player2NameInput.value || "Player 2", "o");
    game.players = [player1, player2];

    
    resetGame();
});

const restart = document.querySelector("#restart");
restart.addEventListener("click", () => {
    resetGame(); 
});
