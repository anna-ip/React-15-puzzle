import React from "react";

const NUM_ROWS = 4;
const NUM_COLS = 4;
const NUM_TILES = NUM_ROWS * NUM_COLS;
const EMPTY_INDEX = NUM_TILES - 1; //the index of the empty tile
const SHUFFLE_MOVES_RANGE = [60, 80]; //defines the minimum & maximum number of random moves
const MOVE_DIRECTIONS = ["up", "down", "left", "right"];

const rand = (min, max) => {
  return min + Math.floor(Math.random() * (max - min + 1));
};

class GameState {
  //generates a board
  static getNewBoard() {
    return Array(NUM_TILES)
      .fill(0)
      .map((x, index) => [Math.floor(index / NUM_ROWS), index % NUM_COLS]);
  }
  //stores the solved state of the board
  static solvedBoard = GameState.getNewBoard();

  static instance = null;
  static getInstance() {
    if (!GameState.instance) GameState.instance = new GameState();
    return GameState.instance;
  }

  //change this to hooks and this will be the onClick function to shuffle a new board.
  constructor() {
    this.startNewGame();
  }

  startNewGame() {
    this.moves = 0; // [moves setMoves] = useState(0)
    this.board = GameState.getNewBoard(); //[board, setBoard] = GmaeState.getNewBoard() ?
    this.stack = []; //[stack , setStack] = useState([])
    this.shuffle(); // [shuffle, setShuffle] = useState()
  }

  // shuffle function?
  shuffle() {
    this.shuffling = true; //[shuffling, setShuffling] = useState(true)

    // this.shuffling = false;
  }

  canMoveTile(index) {
    //if tile index is invalid we cant move it
    if (index < 0 || index >= NUM_TILES) return false;
    //current position of the tile & the empty tile
    const tilePos = this.board[index];
    const emptyPos = this.board[EMPTY_INDEX];
    //if theay are in the same row, then the diff in their column have to be 1

    if (tilePos[0] === emptyPos[0])
      return Math.abs(tilePos[1] - emptyPos[1]) === 1;
    //if they are in the same column, the diff in their row indeces must be 1
    else if (tilePos[1] === emptyPos[1])
      return Math.abs(tilePos[0] - emptyPos[0]) === 1;
    else return false;
  }
}

export const App = () => {
  return <div>Find me in src/app.js!</div>;
};
