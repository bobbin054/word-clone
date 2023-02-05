import React from "react";

function GameResult({ gameResult, noOfGuesses, answer }) {
  const winMessage = (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in <strong>{`${noOfGuesses} guesses`} </strong>.
      </p>
    </div>
  );
  const loseMessage = (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );

  return (
    <>
      {gameResult === "Won" && winMessage}
      {gameResult === "Lost" && loseMessage}
    </>
  );
}

export default GameResult;
