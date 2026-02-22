import React from "react";
import { GiCrossedSwords } from "react-icons/gi";
import { MdKeyboard, MdCake } from "react-icons/md";
import { FaRobot } from "react-icons/fa";

const PROJECTS = [
  {
    icon: <MdKeyboard color="#03a9f4" size={36} />,
    title: "Virtual Keyboard App",
    desc: "A browser-based virtual keyboard supporting both physical keystrokes and on-screen clicks. Features orientation detection — switches to a rotation prompt in portrait mode.",
    tech: ["React", "Vite", "CSS"],
    liveUrl: "https://dzeno-keyboard.netlify.app/",
  },
  {
    icon: <GiCrossedSwords color="#4ade80" size={36} />,
    title: "ASK Rendzeri",
    desc: "Full website for an airsoft club featuring an activities feed, a virtualized image gallery with Swiper slideshows, an EmailJS contact form, and animated page transitions.",
    tech: ["React", "Vite", "React Router", "Swiper", "EmailJS"],
    liveUrl: "https://askrendzeri.netlify.app/",
  },
  {
    icon: <FaRobot color="#a78bfa" size={34} />,
    title: "AI Email Classifier",
    desc: "Paste emails and have them automatically classified as Support, Sales or Feedback using a FastAPI backend. Generates contextual auto-responses and tracks processing costs in real time. Note: the API runs on ngrok and won't be active for visitors — but it works great when the API is live.",
    tech: ["React", "Vite", "MUI v7", "FastAPI", "Python"],
    liveUrl: "https://dzeno-secar.netlify.app/",
  },
  {
    icon: <MdCake color="#fb923c" size={36} />,
    title: "Birthday Venue Booking App",
    desc: "A full-stack booking platform for birthday venues — browse venues, check real-time availability, reserve a date, and manage your booking end-to-end.",
    tech: ["React", "Node.js", "JSX"],
    liveUrl: null,
    comingSoon: true,
  },
];

const Projects = () => {
  return (
    <div className="projects-page">
      <h1>
        My <span>Projects</span>
      </h1>
      <p className="projects-intro">
        A selection of things I've built — from real-world productivity tools
        to passion projects.
      </p>

      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <div key={project.title} className="project-card">
            <div className="project-icon">{project.icon}</div>
            <h2>{project.title}</h2>
            <p className="project-desc">{project.desc}</p>
            <div className="tech-tags">
              {project.tech.map((t) => (
                <span key={t} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>
            <div className="project-card-footer">
              {project.comingSoon ? (
                <span className="project-link-btn coming-soon">
                  🚧 In Development
                </span>
              ) : project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn primary"
                >
                  Live Demo →
                </a>
              ) : (
                <span className="project-link-btn muted">
                  Private Deployment
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
