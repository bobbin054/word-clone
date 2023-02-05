import React from "react";
import { checkGuess } from "../../game-helpers";
import { answer } from "../Game/Game";

function Guess({ guess, id }) {
  return (
    <p className="guess">
      {guess.guess.split("").map((letter, id) => {
        const guessStatus = guess.done ? checkGuess(guess.guess, answer) : null;
        const letterStatus = guessStatus ? guessStatus[id].status : "";

        return (
          <span className={"cell " + letterStatus} key={id}>
            {letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
