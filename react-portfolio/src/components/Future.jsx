import React from "react";
import { GiCrossedSwords } from "react-icons/gi";
import { MdKeyboard, MdCake } from "react-icons/md";
import { FaRobot } from "react-icons/fa";

const PLANS = [
  {
    status: "done",
    icon: <GiCrossedSwords color="#34d399" size={20} />,
    title: "Airsoft Club Website",
    badge: "shipped",
    desc: "A fully functional site for ASK Rendzeri, featuring an activities feed, photo gallery with Swiper slideshows, contact form via EmailJS, and smooth animated page transitions.",
  },
  {
    status: "done",
    icon: <MdKeyboard color="#34d399" size={22} />,
    title: "Virtual Keyboard App",
    badge: "shipped",
    desc: "A browser-based keyboard supporting both physical keystrokes and on-screen clicks, with orientation detection and a clean text display.",
  },
  {
    status: "done",
    icon: <FaRobot color="#a78bfa" size={20} />,
    title: "AI Email Classifier & Auto-Responder",
    badge: "new",
    desc: "An intelligent email processing tool powered by a FastAPI backend and a React + MUI frontend. Classifies emails as Support, Sales or Feedback and generates contextual auto-responses, with a live cost estimator. Note: the API runs on ngrok, so it won't be active for visitors — but the idea is there and it works great when the API is live.",
  },
  {
    status: "upcoming",
    icon: <MdCake color="#03a9f4" size={22} />,
    title: "Birthday Venue Booking App",
    badge: "soon",
    desc: "A full-stack booking platform for birthday venues — browse venues, check real-time availability, reserve a date, and manage your booking end-to-end. Built with React, JSX and a proper database backend.",
  },
];

const Future = () => {
  return (
    <div className="future-page">
      <h1>
        Future <span>Plans</span>
      </h1>
      <p className="future-intro">
        Projects I've shipped and what's next on the roadmap. Always building,
        always learning.
      </p>

      <div className="future-grid">
        {PLANS.map((plan, i) => (
          <div key={i} className="future-card">
            <div className={`future-status-icon ${plan.status}`}>
              {plan.icon}
            </div>
            <div className="future-card-body">
              <div className="future-card-title">
                <h2>{plan.title}</h2>
                {plan.badge && (
                  <span className={`badge badge-${plan.badge}`}>
                    {{ shipped: "Shipped", new: "New", soon: "Coming Soon" }[plan.badge]}
                  </span>
                )}
              </div>
              <p>{plan.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Future;
