import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Guess from "../Guess/Guess";
import PrevioudGuesses from "../PrevioudGuesses/PrevioudGuesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([""]);
  return (
    <>
      <Guess guesses={guesses} setGuesses={setGuesses}></Guess>
      <PrevioudGuesses guesses={guesses}></PrevioudGuesses>
    </>
  );
}

export default Game;
