import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../Guess/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  return (
    <>
      <GuessInput guesses={guesses} setGuesses={setGuesses}></GuessInput>
      <GuessResults guesses={guesses}></GuessResults>
    </>
  );
}

export default Game;
