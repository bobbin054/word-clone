import React from "react";

function GuessInput({ guesses, setGuesses }) {
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
          setGuesses(nextGuesses);
          setGuess("");
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          value={guess}
          minLength="5"
          maxLength="5"
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
