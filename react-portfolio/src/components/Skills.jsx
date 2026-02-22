import React, { useState, useEffect, useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaShopify,
  FaNodeJs,
  FaPython,
  FaRobot,
} from "react-icons/fa";
import { SiTypescript, SiVite, SiSupabase, SiFirebase, SiFastapi, SiOpenai } from "react-icons/si";
import { GiBrain } from "react-icons/gi";

const CATEGORIES = [
  {
    label: "Frontend",
    skills: [
      { name: "HTML5",      level: 92, icon: <FaHtml5     color="#E34F26" size={20} /> },
      { name: "CSS3",       level: 90, icon: <FaCss3Alt   color="#1572B6" size={20} /> },
      { name: "JavaScript", level: 75, icon: <FaJs        color="#F7DF1E" size={20} /> },
      { name: "React",      level: 72, icon: <FaReact     color="#61DAFB" size={20} /> },
      { name: "TypeScript", level: 42, icon: <SiTypescript color="#3178C6" size={20} /> },
      { name: "Bootstrap",  level: 62, icon: <FaBootstrap color="#7952B3" size={20} /> },
    ],
  },
  {
    label: "Backend & Cloud",
    skills: [
      { name: "Node.js",  level: 50, icon: <FaNodeJs   color="#339933" size={20} /> },
      { name: "Python",   level: 60, icon: <FaPython   color="#3776AB" size={20} /> },
      { name: "FastAPI",  level: 55, icon: <SiFastapi  color="#009688" size={20} /> },
      { name: "Supabase", level: 50, icon: <SiSupabase color="#3ECF8E" size={20} /> },
      { name: "Firebase", level: 45, icon: <SiFirebase color="#FFCA28" size={20} /> },
    ],
  },
  {
    label: "AI & APIs",
    skills: [
      { name: "OpenAI API",         level: 72, icon: <SiOpenai color="#74aa9c" size={20} /> },
      { name: "Prompt Engineering", level: 68, icon: <GiBrain  color="#a78bfa" size={20} /> },
      { name: "AI App Development", level: 65, icon: <FaRobot  color="#f59e0b" size={20} /> },
    ],
  },
  {
    label: "Tools & Platforms",
    skills: [
      { name: "Git",     level: 75, icon: <FaGitAlt  color="#F05032" size={20} /> },
      { name: "Shopify", level: 72, icon: <FaShopify color="#96BF48" size={20} /> },
      { name: "Vite",    level: 68, icon: <SiVite    color="#646CFF" size={20} /> },
    ],
  },
];

const Skills = () => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimate(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  let globalIndex = 0;

  return (
    <div className="skills-page" ref={ref}>
      <h1>
        My <span>Skills</span>
      </h1>
      <p className="skills-subtitle">
        Technologies I work with daily — built up through real projects,
        professional experience, and continuous learning.
      </p>

      {CATEGORIES.map((cat) => (
        <div key={cat.label}>
          <p className="skills-category-label">{cat.label}</p>
          <div className="skills-grid">
            {cat.skills.map((skill) => {
              const delay = globalIndex++ * 0.08;
              return (
                <div
                  key={skill.name}
                  className={`skill-row${animate ? " visible" : ""}`}
                  style={{ transitionDelay: `${delay}s` }}
                >
                  <div className="skill-label">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                  <div className="skill-bar-track">
                    <div
                      className={`skill-bar-fill${animate ? " animated" : ""}`}
                      style={{
                        "--level": `${skill.level}%`,
                        transitionDelay: `${delay + 0.25}s`,
                      }}
                    />
                  </div>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
