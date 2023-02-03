import React from "react";
import Guess from "../Guess/Guess";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ guess, id }) => (
        <div className="guess-results" key={id}>
          <Guess guess={guess}></Guess>
        </div>
      ))}
    </div>
  );
}

export default GuessResults;
