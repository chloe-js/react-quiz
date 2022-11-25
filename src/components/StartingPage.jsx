import React from "react";
import Card from "./Card";

import "./StartingPage.css";

const StartingPage = ({
  setShowStartingPage,
  setShowQuestionsPage,
  topScore,
  username,
  setUsername,
}) => {
  const startGame = async () => {
    if (username.trim().length > 0) {
      setShowStartingPage(false);
      setShowQuestionsPage(true);
    }
  };

  return (
    <Card>
      <h1 className="header">welcome to the quiz</h1>
      <h3 className="primary_text">please enter your username</h3>
      <input
        type="text"
        className="username_input"
        placeholder="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      
      <button className="start_btn" onClick={startGame}>
        let's play
      </button>

      <p className="top_score">
        top score: <span>{topScore}</span>
      </p>
    </Card>
  );
};

export default StartingPage;
