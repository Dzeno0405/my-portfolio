import React, { useState, useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact } from "react-icons/fa";

const Skills = () => {
  const [animate, setAnimate] = useState(false);

  const skills = [
    { name: "HTML", level: 90, icon: <FaHtml5 color="#E34F26" size={30} /> },
    { name: "CSS", level: 90, icon: <FaCss3Alt color="#1572B6" size={30} /> },
    { name: "Bootstrap", level: 50, icon: <FaBootstrap color="#7952B3" size={30} /> },
    { name: "JavaScript", level: 65, icon: <FaJs color="#F7DF1E" size={30} /> },
    { name: "React", level: 45, icon: <FaReact color="#61DAFB" size={30} /> },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100); // Small delay before animation starts
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div className={`skills-container ${animate ? "animate" : ""}`}>
      <h1>Skills</h1>
      <p className="skills-intro">
        I am currently working hard to improve my skills and expand my knowledge. 
        My goal is to become proficient in these technologies by dedicating time 
        to learning and practicing every day. I am constantly pushing myself to 
        grow as a developer.
      </p>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`skill-item ${animate ? "fade-in" : ""}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="skill-info">
              {skill.icon}
              <span className="skill-name">{skill.name}</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress"
                style={{
                  width: `${skill.level}%`,
                  backgroundColor: skill.name === "React" ? "#61DAFB" : "#03a9f4",
                }}
              >
                <span className="progress-text">{skill.level}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
