import React from "react";
import portrait from "../img/meme.jpg";

function ProfilePortrait() {
  return (
    <div className="profile-portrait-container">
      <div className="portrait-image">
        <img src={portrait} alt="Your Portrait" className="portrait" />
      </div>
      <div className="popups">
        <div className="profile">
          <h1 className="creator-desc">Welcome</h1>
        </div>
        <div className="profile-name">
          <h1 className="creator-name">I am Dzenan</h1>
        </div>
      </div>
    </div>
  );
}

export default ProfilePortrait;
