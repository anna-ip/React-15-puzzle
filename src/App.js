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
  static getNewBoard() {
    return Array(NUM_TILES)
      .fill(0)
      .map((x, index) => [Math.floor(index / NUM_ROWS), index % NUM_COLS]);
  }

  static instance = null;
  static getInstance() {
    if (!GameState.instance) GameState.instance = new GameState();
    return GameState.instance;
  }
}

export const App = () => {
  return <div>Find me in src/app.js!</div>;
};
