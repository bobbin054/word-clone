import React from "react";

function Guess({ guess, id }) {
  return (
    <p className="guess">
      {guess.split("").map((letter, id) => (
        <span className="cell" key={id}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
