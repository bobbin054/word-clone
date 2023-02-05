import React from "react";

function Guess({ guess, guessStatus }) {
  return (
    <p className="guess">
      {guess.value.split("").map((letter, id) => {
        let letterStatus ="";
        if (guess.guessStatus.length === 5) {
          letterStatus = guess.guessStatus[id].status;
        }
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
