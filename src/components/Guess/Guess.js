import React from "react";

function Guess({ guesses, setGuesses }) {
  const [guess, setGuess] = React.useState("");
  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Guess: ", guess);
          const nextGuesses = [...guesses, { guess, id: Math.random() }];
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

export default Guess;
