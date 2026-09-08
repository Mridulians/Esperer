import { useState } from "react";
import logo from "../assets/logo_with_black_text.png";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "Our Businesses", id: "businesses" },
  { label: "About Us", id: "about" },
  { label: "Leadership", id: "leadership" },
  { label: "Contact Us", id: "contact" },
];

const IconArrowRight = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden="true"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const IconGlobe = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" />
  </svg>
);

export default function SiteHeader({ activeSection = "home", onNavigate, scrollProgress = 0 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = (event, sectionId) => {
    if (onNavigate) {
      onNavigate(event, sectionId);
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${scrollProgress}%` }} />
      </div>
      <div className="utility-bar">
        <p>
          A global oncology innovation enterprise, working across prevention,
          early detection, treatment, nutrition and enabling technology.
        </p>
        <div className="utility-right">
          <span>India&nbsp;·&nbsp;UAE&nbsp;·&nbsp;Australia&nbsp;·&nbsp;USA</span>
          <IconGlobe />
        </div>
      </div>
      <header className={`navbar ${mobileMenuOpen ? "menu-open" : ""}`}>
        <div className="brand">
          <a href="/">
            <img src={logo} alt="Esperer Group" className="brand-logo" />
          </a>
        </div>
        <nav className="nav-links" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              href={onNavigate ? "#" : `/#${link.id}`}
              key={link.id}
              onClick={(event) => handleClick(event, link.id)}
              className={activeSection === link.id ? "active" : ""}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a href={onNavigate ? "#businesses" : "/#businesses"} className="btn btn-teal">
          Explore Our Businesses <IconArrowRight />
        </a>
        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>
    </>
  );
}
