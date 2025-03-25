const gameBoard = {
    
   board : [null,null,null,null,null,null,null,null,null]
   
}

const Player = function (name,marker) {

    this.name = name;
    this.marker = marker;
    
    return `${name}'s marker is ${marker}`
}



const player1 = new Player("Tsotz","x");
const player2 = new Player("Yggy","o");


const game = {

    players : [player1, player2],
    currentPlayerIndex:0,

    gameLogic : function (move) 
    {
        
        const player = this.players[this.currentPlayerIndex];

        if (gameBoard.board[move] !== null) 
        {
            return "Cell is occupied!";
        }
        
        gameBoard.board[move] = player.marker;
         

         if (this.checkWin(player.marker)) 
        { 
            return `${player.name} has won the game`
        }

        if (gameBoard.board.every(cell => cell !== null)) {return "It's a tie!"}
        
         this.currentPlayerIndex = 1-this.currentPlayerIndex;        
         return `${player.name} have moved. It's now ${this.players[this.currentPlayerIndex].name}'s turn`
         
    },
     
    winCombos :[ [0, 1, 2], [3, 4, 5], [6, 7, 8],
                [0, 3, 6], [1, 4, 7], [2, 5, 8], 
                [0, 4, 8], [2, 4, 6] ],


    checkWin : function (marker) {

        return this.winCombos.some (combo => 
            combo.every(index => gameBoard.board [index] === marker)
        );

    }




}


console.log(game.gameLogic(0));
console.log(game.gameLogic(3));
console.log(game.gameLogic(1));
console.log(game.gameLogic(4));
console.log(game.gameLogic(2));







