import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import portrait from "../img/meme.jpg";

const ROLES = [
  "Support Developer",
  "Junior Full-Stack Dev (in progress)",
  "React Developer",
  "Shopify Developer",
];

function Profile() {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    } else {
      const speed = isDeleting ? 45 : 90;
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? current.slice(0, displayText.length - 1)
            : current.slice(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="hero">
      <div className="hero-text">
        <span className="hero-greeting">Hello, World!</span>
        <h1 className="hero-name">Dženan Polutak</h1>
        <p className="hero-role">
          {displayText}
          <span className="cursor" aria-hidden="true" />
        </p>
        <p className="hero-bio">
          I build fast, beautiful web experiences. Currently working as a
          Support Developer specialising in Shopify — passionate about clean
          code, great UI, and shipping things that actually work.
        </p>
        <div className="hero-cta">
          <Link to="/projects" className="btn-primary">
            View My Work
          </Link>
          <a
            href="/Dzenan_Polutak_CV.docx"
            download
            className="btn-secondary"
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={portrait} alt="Dženan Polutak" className="portrait" />
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <div className="scroll-hint-dot" />
        <div className="scroll-hint-dot" />
        <div className="scroll-hint-dot" />
      </div>
    </section>
  );
}

export default Profile;
