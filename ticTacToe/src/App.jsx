import { useState } from 'react';

// Komponen Square (Kotak)
function Square({ value, onSquareClick }) {
  return <button className="square" onClick={onSquareClick}>{value}</button>;
}

// Komponen Board (Papan)
function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (!squares || squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status = winner ? `${winner} is the Winner!` : `Next Player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <>
      <div className="status">{status}</div>
      <div className="board">
        {squares.map((value, i) => (
          <Square key={i} value={value} onSquareClick={() => handleClick(i)} />
        ))}
      </div>
    </>
  );
}

// Komponen Game (Induk)
function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);

  const currentSquares = history[stepNumber] || Array(9).fill(null);

  function handlePlay(nextSquares) {
    const newHistory = history.slice(0, stepNumber + 1);
    setHistory([...newHistory, nextSquares]);
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  }

  function jumpTo(step) {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  }

  const moves = history.map((_, move) => {
    let description = move > 0 ? `Go to Move #${move}` : 'Go to Game Start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

// Fungsi untuk mengecek pemenang
function calculateWinner(squares) {
  if (!squares) return null;
  
  const rulsWinner = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertikal
    [0, 4, 8], [2, 4, 6]  // Diagonal
  ];

  for (let i = 0; i < rulsWinner.length; i++) {
    const [a, b, c] = rulsWinner[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;
