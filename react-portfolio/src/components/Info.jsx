import React, { useState } from "react";

function Info() {
  const [stage, setStage] = useState(0); // Manage text stages
  const [vibrate, setVibrate] = useState(false);

  const handleButtonClick = () => {
    setStage((prevStage) => (prevStage + 1) % 3); // Cycle through stages
    setVibrate(true); // Trigger vibration effect
    setTimeout(() => setVibrate(false), 500); // Remove vibration effect after animation
  };

  return (
    <div className="main-info">
      <div className={`info ${vibrate ? "vibrate" : ""}`}>
        {stage === 0 && (
          <p>
            Some mysteries are better left untold... but since you're curious,
            here's a button for a brief glimpse:
          </p>
        )}
        {stage === 1 && (
          <p className="secondary-text">
            I'm a junior front-end developer, learning, working, and progressing every day to achieve my lifelong dream of crafting beautiful, functional websites.
          </p>
        )}
        {stage === 2 && (
          <p className="secondary-text">
            Are you still reading? Check the links above – let's connect and create something amazing!
          </p>
        )}
      </div>
      <div className="click-btn">
        <button className="text-btn" onClick={handleButtonClick}>
          {stage === 2 ? "Start Over" : "More?"}
        </button>
      </div>
    </div>
  );
}

export default Info;
