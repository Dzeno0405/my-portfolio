import React, { useEffect, useState } from "react";
import portrait from "../img/meme.jpg";

function ProfilePortrait() {
  const [imageLanded, setImageLanded] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    // Start image animation
    const timer1 = setTimeout(() => setImageLanded(true), 200); // Image lands after 1 second
    const timer2 = setTimeout(() => setShowWelcome(true), 2500); // Show welcome popup
    const timer3 = setTimeout(() => setShowName(true), 3500); // Show name popup
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="profile-portrait-container">
      <div
        className={`portrait-image ${imageLanded ? "landed" : "flying"}`}
      >
        <img src={portrait} alt="Your Portrait" className="portrait" />
      </div>
      <div className="popups">
        {showWelcome && (
          <div className={`profile ${showWelcome ? "landed" : ""}`}>
            <h1 className="creator-desc">Hi there</h1>
          </div>
        )}
        {showName && (
          <div className={`profile-name ${showName ? "landed" : ""}`}>
            <h1 className="creator-name">I am Dzenan. Welcome</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfilePortrait;
