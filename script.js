
//answer for first question makeing a object gameboard, and making it global so that its accessible everywhere
const globalGameBoard = {board: ["", "", "", "", "", "","", "", ""]}

// things left: victory conditions, while loop to check if the all spots are not empty, win checker.

let globalPlayer1 = prompt("Write your name: ");
let globalPlayer2 = prompt("Write your name: ");

// let move = true;



let globalSymbol = prompt("Choose a symbol for player 1: (Either X or O)");
let globalSymbol1;

if(globalSymbol === "X" || globalSymbol === "x"){
    globalSymbol = "X";
    globalSymbol1 = "O";
}else {
    globalSymbol1 = "X"
    globalSymbol = "O";
}

function globalgameStart(){

    console.log(`Player1's name is: ${globalPlayer1}, Player2's name is: ${globalPlayer2}`)


    let player1Score = 0;
    let player2Score = 0;
    let playerscore = 0;


    console.log(`Player1's symbol is: ${globalSymbol}, Player2's symbol is: ${globalSymbol1}`);
    console.log(`Player 1's score is: ${player1Score} + Player 2's score is:${player2Score}`);
    console.log(`Game Start!`);
    console.log(globalGameBoard.board);
    const globalplayer1Move = parseInt(prompt("Which position do you want to play in?"));
    while(globalGameBoard.board.includes("")){    
        const globalplayer1Move = parseInt(prompt("Which position do you want to play in?"));
        let index = globalplayer1Move - 1;
        if(globalGameBoard.board[index] === ""){
            globalGameBoard.board[index] = globalSymbol;

        } else if(globalGameBoard.board[index !== ""]){
            console.log("this position is taken try again");
            player1Move = parseInt(prompt("Which position do you want to play in?"));
            player1Move =globalGameBoard.board[index];
        }
        scoreCalculation(player1Score,player2Score);

        return function scoreCalculation(player1Score, player2Score){
            player1Score = 0;
            player2Score = 0;

            if(globalGameBoard.board[index1] === globalSymbol && globalGameBoard.board[index2] === globalSymbol && globalGameBoard.board[index3] === globalSymbol){
                player1Score++;
            } 
        }
    
        console.log(globalGameBoard.board)
        const player2 = parseInt(prompt("Which position do you want to play in?"));
    }
    // for(index in globalGameBoard.board){
    //     if(index.length[-1] != ""){
    //         console.log('calculateing')
    //     }
    // }
}
globalgameStart();


