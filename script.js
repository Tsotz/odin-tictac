const gameBoard = {
    
   board : [null,null,null,null,null,null,null,null,null]
   
}

const Player = function (name,marker) {

    this.name = name;
    this.marker = marker;
    
    return `${name}'s marker is ${marker}`
}





const gameLogic = function (player,move) {

   if (gameBoard.board[move] === null) 
    {
    gameBoard.board[move] = player.marker;
    } else {

        return "Cell is occupied!";

    }

};

const player1 = new Player("Tsotz","x");
const player2 = new Player("Yggy","o");


gameLogic(player1, 0); 
gameLogic(player2, 0);  
console.log(gameLogic());
console.log(gameBoard.board);

