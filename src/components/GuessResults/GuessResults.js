import React from "react";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ guess, id }) => (
        <div className="guess-results">
          <p className="guess">
          {guess.split("").map((letter, index) => (
            <span className="cell" key={index}>
              {letter}
            </span>
          ))}
          </p>
        </div>
      ))}
    </div>
  );
}

export default GuessResults;
