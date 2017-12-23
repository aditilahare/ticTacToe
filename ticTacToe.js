let validMoveCount = 0;
let allPlayedMoves = [];
let player1Moves = [];
let player2Moves = [];

let drawXorO = function(id){
  validMoveCount++;
  if(validMoveCount%2==0){
    player2Moves.push(id);
    return "X";
  }
  player1Moves.push(id);
  return "O";
}

let decideResult=function(event) {
  cellClicked(+event.target.id);
}

let cellClicked = function(id){
  if(!allPlayedMoves.includes(id)){
    allPlayedMoves.push(id);
    document.getElementById(id).innerText = drawXorO(id);
  }
  if(validMoveCount==9){
    document.getElementById("text").innerText = " Oh !! Match Drawn....."
  }
  decideWinner(player1Moves,'O');
  decideWinner(player2Moves,'X');
}

let isSubset = function(list1,list2){
  return list1.every(function(num){
    return list2.includes(num);
  })
}

let decideWinner = function(playerMoves,symbol){
  let winningMoves = [[1,2,3],[4,5,6],[7,8,9],[1,5,9],[3,5,7],[1,4,7],[3,6,9],[2,5,8]];
  for(let index = 0; index < winningMoves.length; index++){
    if(isSubset(winningMoves[index],playerMoves)){
      document.getElementById('text').innerText = symbol+" won the game !!!";
      disableMoves();
    }
  }
}

let disableMoves = function(){
  document.getElementById("tictactoe").onclick=null;
}
