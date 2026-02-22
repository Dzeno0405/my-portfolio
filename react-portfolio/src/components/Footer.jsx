import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const SOCIALS = [
  {
    icon: faGithub,
    href: "https://github.com/dzeno0405",
    label: "GitHub",
  },
  {
    icon: faLinkedin,
    href: "https://www.linkedin.com/in/dzenan-polutak-28098b168/",
    label: "LinkedIn",
  },
  {
    icon: faInstagram,
    href: "https://www.instagram.com/dzeno0405/",
    label: "Instagram",
  },
  {
    icon: faFacebook,
    href: "https://www.facebook.com/dpolutak/",
    label: "Facebook",
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          &copy; {new Date().getFullYear()}{" "}
          <strong>Dženan Polutak</strong>. All rights reserved.
        </div>
        <div className="footer-right">
          {SOCIALS.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
              aria-label={label}
            >
              <FontAwesomeIcon icon={icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
