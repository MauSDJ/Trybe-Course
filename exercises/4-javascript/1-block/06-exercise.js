let chessPiece = "BIShOp";
chessPiece = chessPiece.toLowerCase();

if(chessPiece === "pawn") {
    console.log("move vertically forward one square");
} else if(chessPiece === "knight") {
    console.log("move in an ‘L’ shape");
} else if(chessPiece ==="bishop") {
    console.log("move diagonally any number of squares");
} else if(chessPiece === "rook") {
    console.log("move horizontally or vertically any number of squares");
} else if(chessPiece === "queen") {
    console.log("move diagonally, horizontally, or vertically any number of squares");
} else if(chessPiece === "king") {
    console.log("move one square in any direction");
} else {
    console.log("that chess piece does not exist")
}