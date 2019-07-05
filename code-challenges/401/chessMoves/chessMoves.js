'use strict';

function checkRook(moat, pieces){
  const [rookRow, rookCol] = pieces.get('R');

  moat.forEach( entry => {
    const row = entry.position[0];
    const col = entry.position[1];
    if(row >= 0 && row === rookRow) entry.safe = false;
    if(col >= 0 && col === rookCol) entry.safe = false;
  });
}

function checkBishop(moat, pieces){
  const [bishopRow, bishopCol] = pieces.get('B');

  moat.forEach( entry => {
    const row = entry.position[0];
    const col = entry.position[1];
    if( row >= 0 && col >= 0) {
      if(Math.abs(row - bishopRow) === Math.abs(col - bishopCol)) entry.safe = false;
    }
  });
}

function checkKnight(moat, pieces){
  const [knightRow, knightCol] = pieces.get('Kn');
  const moves = [
    [knightRow +1, knightCol +2],
    [knightRow +1, knightCol -2],
    [knightRow -1, knightCol +2],
    [knightRow -1, knightCol -2],
    [knightRow +2, knightCol +1],
    [knightRow +2, knightCol -1],
    [knightRow -2, knightCol +1],
    [knightRow -2, knightCol -1],    
  ];

  moat.forEach( entry => {
    const row = entry.position[0];
    const col = entry.position[1];
    moves.forEach( move => {
      if(move[0] === row && move[1] === col) entry.safe = false;
    });
  });
}

function checkQueen(moat, pieces){
  const [queenRow, queenCol] = pieces.get('Q');

  moat.forEach( entry => {
    const row = entry.position[0];
    const col = entry.position[1];
    if(row >= 0 && row === queenRow) entry.safe = false;
    if(col >= 0 && col === queenCol) entry.safe = false;
    if( row >= 0 && col >= 0) {
      if(Math.abs(row - queenRow) === Math.abs(col - queenCol)) entry.safe = false;
    }
  });
}

function kingsMoat(pieces){
  const [kingRow, kingCol] = pieces.get('K');

  const moat = [
    { position: [kingRow -1, kingCol - 1], safe: true },
    { position: [kingRow -1, kingCol], safe: true },
    { position: [kingRow -1, kingCol + 1], safe: true },
    { position: [kingRow, kingCol - 1], safe: true },
    { position: [kingRow, kingCol + 1], safe: true },
    { position: [kingRow + 1, kingCol - 1], safe: true},
    { position: [kingRow + 1, kingCol], safe: true },
    { position: [kingRow + 1, kingCol + 1], safe: true },
  ];

  checkRook(moat, pieces);
  checkBishop(moat, pieces);
  checkKnight(moat, pieces);
  checkQueen(moat, pieces);
  
  return moat.every(entry => !entry.safe);
}


function checkForCheck(board) {
  const pieces = new Map;

  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[i].length; j++){
      if(board[i][j]) {
        pieces.set(board[i][j], [i, j]);
      }
    }
  }
  return kingsMoat(pieces);
}

module.exports = checkForCheck;