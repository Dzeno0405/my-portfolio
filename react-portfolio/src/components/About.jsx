import React, { useState } from "react";

const ROLES = {
  Receptionist:
    "Responsible for guest check-in, check-out, and billing. Ensured high-quality assistance and provided information to international guests during their stay.",
  "Tour Guide":
    "Provided engaging tours focused on cultural and historical landmarks. Delivered exceptional customer experiences to groups of varying sizes.",
  "Customer Support Agent":
    "Handled inquiries via phone, chat, and email. Resolved complaints, managed back-office issues, and delivered proactive customer satisfaction solutions.",
  "Project Lead Advisor":
    "Managed a team of 15–20 agents, ensuring exceptional customer service. Worked with the Team Manager on attendance, quality checks, performance reviews, feedback, and coaching sessions.",
  "Project Team Leader":
    "Oversaw and supported a team of agents, ensuring exceptional service delivery. Managed quality assessments, performance reviews, and coaching sessions.",
  "Support Developer":
    "Customises Shopify applications using CSS, JavaScript, and React. Diagnoses technical issues and ensures seamless app functionality tailored to business needs.",
};

const About = () => {
  const [selected, setSelected] = useState(null);

  const handleClick = (role) => {
    setSelected(selected === role ? null : role);
  };

  return (
    <div className="about-page">
      <h1>
        About <span>Me</span>
      </h1>
      <p className="about-intro">
        Hi — I'm <strong>Dženan Polutak</strong>, a junior full-stack developer (in progress)
        with a focus on React, Python, and AI-powered web apps. By day I work
        as a Support Developer building and customising Shopify applications;
        outside of that I build full-stack projects — from FastAPI backends and
        Supabase databases to React frontends and OpenAI integrations. I've
        worked across multiple industries, which gives me a unique blend of
        technical skills and people-first thinking.
      </p>

      <p className="about-section-title">Career Journey</p>
      <div className="career-list">
        {Object.keys(ROLES).map((role) => (
          <div
            key={role}
            className={`career-item${selected === role ? " active" : ""}`}
            onClick={() => handleClick(role)}
          >
            {role === "Support Developer" ? `${role} — Current` : role}
          </div>
        ))}
      </div>

      {selected && (
        <div className="career-description">
          <h3>{selected}</h3>
          <p>{ROLES[selected]}</p>
        </div>
      )}

      <div className="cv-section">
        <p className="about-section-title">Resume</p>
        <a
          href="/Dzenan_Polutak_CV.docx"
          download
          className="btn-primary"
          style={{ display: "inline-flex" }}
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default About;
