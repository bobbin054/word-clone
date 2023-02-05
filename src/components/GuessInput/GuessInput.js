import React from "react";
import { checkGuess } from "../../game-helpers";

function GuessInput({ guesses, setGuesses, answer,gameComplete }) {
  const [guess, setGuess] = React.useState("");
  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(e) => {
          e.preventDefault();
          const nextGuesses = [...guesses];
          const nextGuess = nextGuesses.find((g) => g.done === false);
          if (!nextGuess) return;
          nextGuess.guess = guess;
          nextGuess.done = true;
          nextGuess.guessStatus = checkGuess(guess, answer);
          setGuesses(nextGuesses);
          setGuess("");
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          value={guess}
          required
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          disabled={gameComplete}
          onChange={(e) => {
            setGuess(e.target.value.toUpperCase());
          }}
          type="text"
        />
      </form>
    </>
  );
}

export default GuessInput;
