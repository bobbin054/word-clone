import React from "react";

function PrevioudGuesses({ guesses }) {
  return (
    <div class="guess-results">
      {guesses.map((guess) => (
        <p class="guess">{guess}</p>
      ))}
    </div>
  );
}

export default PrevioudGuesses;
