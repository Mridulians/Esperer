import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo_with_black_text.png";
import { showcaseBusinesses } from "../data/pageData.js";
import "./SiteHeader.css";

const businessWebsites = {
  "esperer-nutrition": "https://www.esperernutrition.com",
  "esperer-bioresearch": "https://www.espererbioresearch.com",
  "health-voitho-technologies": "https://www.healthvoitho.com",
  "salt-lick-healthcare": "www.saltlickhealthcare.com",
};

const countryWebsites = [
  { name: "India", code: "in", href: "https://mridul.com" },
  { name: "UAE", code: "ae", href: "https://mridul.com" },
  { name: "Australia", code: "au", href: "https://mridul.com" },
  { name: "USA", code: "us", href: "https://mridul.com" },
];

const navLinks = [
  { label: "Home", id: "home" },
  { label: "Our Businesses", id: "businesses" },
  { label: "Breakthroughs", id: "breakthroughs" },
  { label: "About Us", id: "about" },
  { label: "Leadership", id: "leadership" },
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

export default function SiteHeader({
  activeSection = "home",
  onNavigate,
  scrollProgress = 0,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [businessMenuOpen, setBusinessMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const businessTriggerRef = useRef(null);
  const mobileTriggerRef = useRef(null);

  const closeMenus = () => {
    setBusinessMenuOpen(false);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsidePointer = (event) => {
      if (!headerRef.current?.contains(event.target)) {
        setBusinessMenuOpen(false);
        setMobileMenuOpen(false);
      }
    };
    const breakpoint = window.matchMedia("(max-width: 900px)");
    const handleBreakpoint = () => {
      setBusinessMenuOpen(false);
      setMobileMenuOpen(false);
    };
    document.addEventListener("pointerdown", handleOutsidePointer);
    breakpoint.addEventListener("change", handleBreakpoint);
    return () => {
      document.removeEventListener("pointerdown", handleOutsidePointer);
      breakpoint.removeEventListener("change", handleBreakpoint);
    };
  }, []);

  const handleClick = (event, sectionId) => {
    closeMenus();
    if (onNavigate) onNavigate(event, sectionId);
  };

  const handleKeyDown = (event) => {
    if (event.key !== "Escape") return;
    if (businessMenuOpen) {
      event.preventDefault();
      setBusinessMenuOpen(false);
      businessTriggerRef.current?.focus();
    } else if (mobileMenuOpen) {
      event.preventDefault();
      setMobileMenuOpen(false);
      mobileTriggerRef.current?.focus();
    }
  };

  return (
    <>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="utility-bar">
        <p>
          A global oncology innovation enterprise, working across prevention,
          early detection, treatment, nutrition and enabling technology.
        </p>
        <div className="utility-right">
          <nav className="utility-countries" aria-label="Country websites">
            {countryWebsites.map((country) => (
              <a
                key={country.code}
                className="utility-country-link"
                href={country.href}
                aria-label={`${country.name} website`}
              >
                <img
                  className="utility-country-flag"
                  src={`https://flagcdn.com/w40/${country.code}.png`}
                  width="20"
                  height="14"
                  alt=""
                />
                {country.name}
              </a>
            ))}
          </nav>
          <IconGlobe />
        </div>
      </div>
      
      <header
        ref={headerRef}
        className={`navbar site-header ${mobileMenuOpen ? "menu-open" : ""}`}
        onKeyDown={handleKeyDown}
      >
        <div className="brand">
          <a href="/">
            <img src={logo} alt="Esperer Group" className="brand-logo" />
          </a>
        </div>

        <nav id="primary-navigation" className="nav-links" aria-label="Primary navigation">
          {navLinks.map((link) =>
            link.id === "businesses" ? (
              <div
                className="header-business-menu"
                key={link.id}
                onPointerEnter={(event) => {
                  if (
                    event.pointerType === "mouse" &&
                    window.matchMedia("(min-width: 901px)").matches
                  ) setBusinessMenuOpen(true);
                }}
                onPointerLeave={(event) => {
                  if (
                    event.pointerType === "mouse" &&
                    window.matchMedia("(min-width: 901px)").matches &&
                    !event.currentTarget.contains(document.activeElement)
                  ) setBusinessMenuOpen(false);
                }}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setBusinessMenuOpen(false);
                  }
                }}
              >
                <button
                  ref={businessTriggerRef}
                  type="button"
                  className={`header-business-trigger ${activeSection === link.id ? "active" : ""}`}
                  aria-expanded={businessMenuOpen}
                  aria-controls="header-business-dropdown"
                  onClick={() => setBusinessMenuOpen((open) => !open)}
                >
                  {link.label}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div
                  id="header-business-dropdown"
                  className="header-business-dropdown"
                  hidden={!businessMenuOpen}
                >
                  <div className="header-business-inner">
                    {/* <p className="header-business-eyebrow">OUR BUSINESSES</p> */}
                    <ul className="header-business-grid">
                      {showcaseBusinesses.map((business) => (
                        <li key={business.slug}>
                          <a
                            className="header-business-card"
                            href={businessWebsites[business.slug]}
                            onClick={closeMenus}
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <span className="header-business-logo">
                              <img src={business.logo} alt="" />
                            </span>
                            {/* <span className="header-business-name">{business.name}</span>
                            <span className="header-business-visit">
                              Know More <IconArrowRight size={16} />
                            </span> */}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <a
                href={onNavigate ? `#${link.id}` : `/#${link.id}`}
                key={link.id}
                onClick={(event) => handleClick(event, link.id)}
                className={activeSection === link.id ? "active" : ""}
              >
                {link.label}
              </a>
            )
          )}
        </nav>
        <a
          href={onNavigate ? "#businesses" : "/#businesses"}
          className="btn btn-teal"
        >
          Explore Our Businesses <IconArrowRight />
        </a>
        <button
          ref={mobileTriggerRef}
          type="button"
          className="mobile-menu-toggle"
          aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => {
            setMobileMenuOpen((open) => !open);
            setBusinessMenuOpen(false);
          }}
        >
          <span />
          <span />
          <span />
        </button>
      </header>
    </>
  );
}
