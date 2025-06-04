let currentPlayer = 'X';
const board = Array(9).fill(null);
const boardDiv = document.getElementById("board");

function createBoard() {
  boardDiv.innerHTML = '';
  board.forEach((_, idx) => {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.addEventListener("click", () => makeMove(idx));
    cell.textContent = board[idx];
    boardDiv.appendChild(cell);
  });
}

function makeMove(index) {
  if (board[index]) return;
  board[index] = currentPlayer;
  if (checkWinner()) {
    setTimeout(() => alert(`${currentPlayer} wins!`), 100);
    return;
  }
  if (board.every(cell => cell)) {
    setTimeout(() => alert(`It's a draw!`), 100);
    return;
  }
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  createBoard();
}

function checkWinner() {
  const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  return winPatterns.some(p => 
    board[p[0]] && board[p[0]] === board[p[1]] && board[p[1]] === board[p[2]]
  );
}

function resetGame() {
  board.fill(null);
  currentPlayer = 'X';
  createBoard();
}

createBoard();
