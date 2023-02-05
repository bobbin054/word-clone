import React from "react";
import Guess from "../Guess/Guess";


function GuessResults({ guesses, setGameStatus }) {
  return (
    <div className="guess-results">
      {guesses.map((guess) => {
        
        

        return (
          <div key={guess.id} className="guess-results">
            <Guess guess={guess}></Guess>
          </div>
        );
      })}
    </div>
  );
}

export default GuessResults;
