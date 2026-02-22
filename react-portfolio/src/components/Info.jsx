import React from "react";
import { FaCode, FaShopify, FaRocket } from "react-icons/fa";

const CARDS = [
  {
    icon: <FaCode color="#03a9f4" />,
    title: "Junior Full-Stack (in progress)",
    desc: "Building responsive frontends with React and JavaScript, and connecting them to backends with Python, FastAPI, and Supabase — always learning, always shipping.",
  },
  {
    icon: <FaShopify color="#96bf48" />,
    title: "Shopify Development",
    desc: "Customising Shopify apps with CSS, JavaScript and React. Diagnosing technical issues and tailoring solutions to business needs.",
  },
  {
    icon: <FaRocket color="#a78bfa" />,
    title: "Continuous Growth",
    desc: "Always learning — currently deepening expertise in TypeScript, Node.js, and modern full-stack patterns.",
  },
];

function Info() {
  return (
    <section className="what-i-do">
      <p className="section-label">What I Do</p>
      <h2 className="section-title">Skills &amp; Focus Areas</h2>
      <div className="what-i-do-grid">
        {CARDS.map((card, i) => (
          <div key={i} className="what-i-do-card">
            <div className="what-i-do-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Info;
