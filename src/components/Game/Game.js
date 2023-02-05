import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GameResult from "../GameResult/GameResult";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const initialGuesses = range(NUM_OF_GUESSES_ALLOWED).map((id) => ({
    value: "     ",
    id: Math.random(),
    done: false,
    guessStatus: [],
  }));
  const [guesses, setGuesses] = React.useState(initialGuesses);
  let gameResult = "Playing";
  if (guesses.some((guess) => guess.value === answer)) {
    gameResult = "Won";
  } else if (guesses.every((predicate) => predicate.done === true)) {
    gameResult = "Lost";
  }
  const noOfGuesses = guesses.filter((guess) => guess.done === true).length;
const gameComplete = gameResult !== "Playing";
  return (
    <>
      <GuessInput guesses={guesses} setGuesses={setGuesses} answer={answer} gameComplete={gameComplete}></GuessInput>
      <GuessResults guesses={guesses}></GuessResults>
      <GameResult gameResult={gameResult} noOfGuesses={noOfGuesses} answer={answer}></GameResult>
    </>
  );
}

export default Game;
