import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
export const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  
  const initialGuesses = range(NUM_OF_GUESSES_ALLOWED).map((id) => ({
    guess: "     ",
    id:Math.random(),
    done:false
  }));
  const [guesses, setGuesses] = React.useState(initialGuesses);

  return (
    <>
    
      <GuessInput guesses={guesses} setGuesses={setGuesses}></GuessInput>
      <GuessResults guesses={guesses}></GuessResults>
    </>
  );
}

export default Game;
