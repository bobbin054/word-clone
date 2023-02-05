import React from "react";
import Guess from "../Guess/Guess";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess) => (
        <div className="guess-results" key={guess.id}>
          <Guess guess={guess}></Guess>
        </div>
      ))}
    </div>
  );
}

export default GuessResults;
