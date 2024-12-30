import React, { useState } from "react";

const About = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  const roles = {
    Receptionist: `
      Responsible for guest check-in, check-out, and billing. 
      Ensures high-quality assistance and provides information to international guests during their stay.`,
    "Tour Guide": `
      Provided engaging tours with a focus on cultural and historical landmarks. 
      Delivered exceptional customer experiences to groups of varying sizes.`,
    "Customer Support Agent": `
      Handles inquiries via phone, chat, and email. Resolves complaints, manages back-office issues, 
      and delivers proactive customer satisfaction solutions.`,
    "Project Lead Advisor": `
  Responsible for overseeing and guiding a team of 15-20 agents, ensuring they deliver exceptional customer service. 
  The Lead Advisor collaborates closely with the Team Manager to handle daily operational tasks, including attendance tracking, 
  conducting quality assessments, performance reviews, providing feedback, and organizing coaching sessions. 
  The role also involves taking on ad-hoc responsibilities to support the team and enhance their performance, 
  ensuring a seamless customer journey and high-quality service delivery.`,

    "Project Team Leader": `
      Oversees and supports a team of agents, ensuring exceptional service delivery. 
      Manages quality assessments, performance reviews, and coaching sessions.`,
    "Support Developer - Current": `
      Customizes Shopify applications using CSS, JavaScript, and React. Diagnoses technical issues 
      and ensures seamless app functionality tailored to business needs.`,
  };

  return (
    <div className="about-page">
      <h1>About Me</h1>
      <p>
        Hello! My name is <strong>Dzenan Polutak</strong>, and I am 28 years
        old. I currently work as a <strong>Support Developer</strong>,
        specializing in Shopify applications. My skills continue to grow as I
        work diligently toward becoming a full-fledged Front-End Developer.
      </p>
      <p>
        Over the years, I’ve gained valuable experience in a variety of roles,
        allowing me to build a diverse skill set. Feel free to explore my skills
        by clicking on <strong>Skills</strong> in the navigation bar.
      </p>

      <div className="positions">
        <h2>My Career Journey</h2>
        <ul>
          {Object.keys(roles).map((role) => (
            <li
              key={role}
              className={role === selectedRole ? "current-position" : ""}
              onClick={() =>
                setSelectedRole(role === selectedRole ? null : role)
              }
            >
              {role}
            </li>
          ))}
        </ul>
        {selectedRole && (
          <div className="role-description">
            <h3>{selectedRole}</h3>
            <p>{roles[selectedRole]}</p>
          </div>
        )}
      </div>

      <div className="future-plans">
        <h2>Future Plans</h2>
        <p>
          I am actively working hard to become a dedicated Front-End Developer.
          I am passionate about improving my skills every day, tackling new
          challenges, and growing in the field of web development.
        </p>
      </div>

      <div className="cv-download">
        <button className="download-btn">
          <a href="/Dzenan_Polutak_CV.docx" download>
            Download My CV
          </a>
        </button>
      </div>
    </div>
  );
};

export default About;
