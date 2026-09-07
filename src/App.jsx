import { useEffect, useRef, useState } from "react";
import {
  insightFlasks,
  insightAI,
  insightMicroscope,
} from "./assets/images.js";
import logo from "./assets/logo_with_black_text.png";
import Woman from "./assets/woman.png";
import MapImg from "./assets/map_img.png";
import nutritionLogo from "./assets/esperer_nutrition.png";
import bioResearchLogo from "./assets/Esperer_bioresearch.png";
import healthVoithoLogo from "./assets/health_voitho.png";
import saltLickLogo from "./assets/salt_lick.png";
import breakthroughPatient from "./assets/breakthrough_01_patient.png";
import breakthroughNutraIq from "./assets/breakthrough_02_nutra_iq.png";
import FounderImg from "./assets/founder_img.jpeg";
import "./assets/esperer-globe.js";
import "./App.css";

/* ---------- Icons (inline SVG, thin-line style) ---------- */

const IconLeaf = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
  >
    <path d="M5 21c8-1 13-6 14-14-8 1-13 6-14 14Z" />
    <path d="M5 21c1-5 4-9 9-11" />
  </svg>
);

const IconUsers = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
  >
    <circle cx="9" cy="8" r="3" />
    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    <circle cx="17" cy="9" r="2.4" />
    <path d="M15.5 14.2c2.6.4 4.5 2.6 4.5 5.3" />
  </svg>
);

const IconTarget = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
  >
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

const IconShield = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
  >
    <path d="M12 3l7 3v6c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6l7-3Z" />
  </svg>
);

const IconDNA = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
  >
    <path d="M7 3c0 5 10 5 10 10s-10 5-10 10" />
    <path d="M17 3c0 5-10 5-10 10s10 5 10 10" />
    <path d="M8 7h8M7.5 12h9M8 17h8" />
  </svg>
);

const IconSprout = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
  >
    <path d="M12 21V11" />
    <path d="M12 12C12 8 9 6 5 6c0 4 3 6 7 6Z" />
    <path d="M12 10c0-3.5 2.5-5.5 6-5.5.2 3.7-2.3 6-6 5.5Z" />
  </svg>
);

const IconChip = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
  >
    <rect x="6" y="6" width="12" height="12" rx="1.5" />
    <path d="M9 6V3M15 6V3M9 21v-3M15 21v-3M6 9H3M6 15H3M21 9h-3M21 15h-3" />
    <circle cx="12" cy="12" r="2.2" />
  </svg>
);

const IconCup = () => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
  >
    <path d="M5 8h11v5a5.5 5.5 0 0 1-5.5 5.5A5.5 5.5 0 0 1 5 13V8Z" />
    <path d="M16 9h1.5a2.5 2.5 0 0 1 0 5H16" />
    <path d="M9 3c-.8.8-.8 1.6 0 2.4M12 3c-.8.8-.8 1.6 0 2.4" />
  </svg>
);

const IconFlask = () => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
  >
    <path d="M9 3h6M10 3v6l-5.2 8.8A1.5 1.5 0 0 0 6.1 20h11.8a1.5 1.5 0 0 0 1.3-2.2L14 9V3" />
    <path d="M8 15h8" />
  </svg>
);

const IconMonitor = () => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
  >
    <rect x="3" y="4" width="18" height="12" rx="1.5" />
    <path d="M8 21h8M12 16v5" />
    <path d="M7 13l3-3 2 2 4-4" />
  </svg>
);

const IconQuote = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.5 6C6.5 7 4.5 9.7 4.5 13c0 2.5 1.7 4.2 3.8 4.2 1.9 0 3.3-1.4 3.3-3.2 0-1.7-1.1-2.9-2.7-3-.1-1.7 1-3.2 2.8-4l-2.2-1Zm9 0c-3 1-5 3.7-5 7 0 2.5 1.7 4.2 3.8 4.2 1.9 0 3.3-1.4 3.3-3.2 0-1.7-1.1-2.9-2.7-3-.1-1.7 1-3.2 2.8-4l-2.2-1Z" />
  </svg>
);

const IconArrowRight = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
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
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" />
  </svg>
);

const IconLaurel = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.1"
  >
    <path d="M6 20C3 15 3 9 6 4" />
    <path d="M18 20c3-5 3-11 0-16" />
    <path d="M6 6c2 0 3 1 3 2M6 9c2 0 3 1 3 2M6 12c2 0 3 1 3 2M6 15c2 0 3 1 3 2" />
    <path d="M18 6c-2 0-3 1-3 2M18 9c-2 0-3 1-3 2M18 12c-2 0-3 1-3 2M18 15c-2 0-3 1-3 2" />
    <path d="M9 20h6" />
  </svg>
);

const IconMapPin = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
  >
    <path d="M12 21s7-6.6 7-11.5a7 7 0 1 0-14 0C5 14.4 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.3" />
  </svg>
);

const IconMail = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
  >
    <rect x="3" y="5" width="18" height="14" rx="1.5" />
    <path d="M3 6.5l9 6.5 9-6.5" />
  </svg>
);

const IconPhone = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
  >
    <path d="M5 4h3l2 5-2.2 1.6a11 11 0 0 0 5.6 5.6L15 14l5 2v3a2 2 0 0 1-2.2 2C10.6 20.6 3.4 13.4 3 6.2 3 5 4 4 5 4Z" />
  </svg>
);

const IconLinkedIn = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM9.5 9H13v1.7h.05c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.6V21h-4v-5.7c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.8h-4z" />
  </svg>
);

const IconX = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7l-5.5-7.2L4.4 22H1.3l8.1-9.3L1 2h7.2l5 6.6L18.9 2Zm-1.2 18h1.7L7.4 3.9H5.6L17.7 20Z" />
  </svg>
);

const IconInstagram = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
  </svg>
);

/* ---------- Data ---------- */

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "Our Businesses", id: "businesses" },
  { label: "Leadership", id: "leadership" },
  // { label: "Insights", id: "insights" },
  { label: "Contact Us", id: "contact" },
];

const continuumSteps = [
  {
    num: "01",
    icon: <IconShield />,
    title: "Prevention &\nEarly Detection",
    sub: "Salt Lick",
    logo: saltLickLogo,
  },
  {
    num: "02",
    icon: <IconDNA />,
    title: "Treatment",
    sub: "Esperer BioResearch",
    logo: bioResearchLogo,
  },
  {
    num: "03",
    icon: <IconSprout />,
    title: "Molecular\nNutrition",
    sub: "Esperer Nutrition",
    logo: nutritionLogo,
  },
  {
    num: "04",
    icon: <IconChip />,
    title: "Technology",
    sub: "Health Voitho\nTechnologies",
    logo: healthVoithoLogo,
  },
];

const insights = [
  {
    img: insightFlasks,
    date: "MAY 10, 2025",
    title: "The role of molecular nutrition in improving cancer outcomes.",
  },
  {
    img: insightAI,
    date: "APR 25, 2025",
    title: "AI and machine learning in the future of oncology.",
  },
  {
    img: insightMicroscope,
    date: "APR 15, 2025",
    title: "Why early detection can change everything.",
  },
];

const awards = [
  "Task Force Member,\nNutraceutical Council,\nOffice of the Principal\nScientific Advisor,\nGovernment of India",
  "Top 20\nHealthcare\nLeaders\nAward",
  "Most Innovative\nHealthcare\nCompany\nAward",
];

const globalStats = [
  {
    value: 12,
    suffix: "+",
    label: "Countries",
    description: "Global footprint across regulated markets",
  },
  {
    value: 6,
    suffix: "+",
    label: "Global Patents",
    description: "In oncology & molecular nutrition",
  },
  {
    value: 1,
    suffix: "",
    label: "World's First",
    description: "Stage-specific onco-nutrition therapy.",
  },
];

const glanceStats = [
  {
    icon: <IconGlobe />,
    title: "12+ Countries",
    text: "Global footprint across regulated markets",
  },
  {
    icon: <IconShield />,
    title: "6 Global Patents",
    text: "In oncology and molecular nutrition",
  },
  {
    icon: <IconFlask />,
    title: "World's First",
    text: "Stage-specific onco-nutrition therapy",
  },
  {
    icon: <IconMonitor />,
    title: "1M+ Dosages",
    text: "Delivered to patients and growing",
  },
  {
    icon: <IconTarget />,
    title: "Multicentre Trials",
    text: "Validated across geographies",
  },
  {
    icon: <IconDNA />,
    title: "Only Therapy of Its Kind",
    text: "Trialled on a real-world population",
  },
  {
    icon: <IconMapPin />,
    title: "Multi-Country Registration",
    text: "Under respective Ministries of Health",
  },
  {
    icon: <IconUsers />,
    title: "Institutional Trust",
    text: "AIIMS · ICMR · Apollo · Fortis",
  },
  {
    icon: <IconLaurel />,
    title: "Global Recognition",
    text: "Multiple awards for innovation",
  },
  {
    icon: <IconCup />,
    title: "USFDA-Affirmed",
    text: "Manufacturing facility",
  },
];

const businessData = [
  {
    id: "nutrition",
    number: "01",
    name: "Esperer Nutrition",
    logo: nutritionLogo,
    icon: <IconCup />,
    description:
      "Globally patented nutrition therapy that works alongside cancer treatment.",
    headline: "Molecular nutrition for stronger treatment outcomes.",
  },
  {
    id: "bioresearch",
    number: "02",
    name: "Esperer BioResearch",
    logo: bioResearchLogo,
    icon: <IconFlask />,
    description:
      "Bringing innovative anti-cancer drugs to the patients who need them.",
    headline: "Precision oncology research built for real-world impact.",
  },
  {
    id: "technologies",
    number: "03",
    name: "Health Voitho Technologies",
    logo: healthVoithoLogo,
    icon: <IconMonitor />,
    description:
      "Medtech — medical devices, technology and machine learning applied to healthcare.",
    headline: "Connected technology that improves cancer care delivery.",
  },
  {
    id: "saltlick",
    number: "04",
    name: "Salt Lick",
    logo: saltLickLogo,
    icon: <IconShield />,
    description: "AI-enabled cancer risk assessment and prevention platform.",
    headline: "Early risk detection and prevention powered by AI.",
  },
];

const showcaseBusinesses = [
  {
    name: "Esperer Nutrition",
    logo: nutritionLogo,
    headline: "Treatment Works. Nutrition Is What Lets It Keep Working.",
    description:
      "The world's first stage- and condition-specific onco-nutrition therapy, globally patented — because the body carrying the treatment deserves as much science as the treatment itself.",
  },
  {
    name: "Esperer BioResearch",
    logo: bioResearchLogo,
    headline: "Science That Doesn't Stop At Discovery.",
    description:
      "From research to real medicine — advancing the innovative drugs used directly in the treatment of cancer.",
  },
  {
    name: "Health Voitho Technologies",
    logo: healthVoithoLogo,
    headline: "Where Machine Intelligence Meets The Fight Against Cancer.",
    description:
      "The infrastructure behind better cancer care — devices and applied ML that make risk assessment, detection and monitoring sharper across the entire journey.",
  },
  {
    name: "Salt Lick Healthcare",
    logo: saltLickLogo,
    headline: "Cancer, Caught Early Enough, Is Often Cancer That Can Be Cured.",
    description:
      "Patented risk assessment through simple screening — identifying cancer risk well before it becomes cancer to treat.",
  },
];

function AnimatedNumber({ value, suffix = "", duration = 1200 }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let frameId;
    let startTime;

    const tick = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      const nextValue = Math.ceil(value * eased);
      setDisplayValue(nextValue);

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [value, duration]);

  return (
    <>
      {displayValue}
      {suffix}
    </>
  );
}

function EspererGlobe() {
  const globeRef = useRef(null);

  useEffect(() => {
    if (!globeRef.current || typeof window.EspererGlobe !== "function") {
      return undefined;
    }

    const globe = window.EspererGlobe(globeRef.current, {
      nodes: 340,
      dot: "#000000",
      line: "0,0,0",
      halo: "56,177,179",
      blobs: true,
      spin: 0.00013,
      parallax: true,
    });

    return () => globe.destroy();
  }, []);

  return <div ref={globeRef} className="esperer-globe" aria-hidden="true" />;
}

function App() {
  const [selectedBusinessId, setSelectedBusinessId] = useState("nutrition");
  const [rotation, setRotation] = useState(0);
  const [showcaseIndex, setShowcaseIndex] = useState(0);
  const [showcasePaused, setShowcasePaused] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  const selectedBusiness =
    businessData.find((business) => business.id === selectedBusinessId) ??
    businessData[0];

  const sectionIds = [
    "home",
    "about",
    "continuum",
    "businesses",
    "footprint",
    "leadership",
    "cta",
  ];

  const handleBusinessClick = (businessId) => {
    if (businessId === selectedBusinessId) {
      return;
    }

    const currentIndex = businessData.findIndex(
      (business) => business.id === selectedBusinessId,
    );
    const targetIndex = businessData.findIndex(
      (business) => business.id === businessId,
    );
    const delta = (currentIndex - targetIndex) * 90;

    setRotation((previous) => previous + delta);
    setSelectedBusinessId(businessId);
  };

  const changeShowcaseSlide = (direction) => {
    setShowcaseIndex(
      (currentIndex) =>
        (currentIndex + direction + showcaseBusinesses.length) %
        showcaseBusinesses.length,
    );
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const totalScroll = documentHeight - windowHeight;
      const progress = totalScroll > 0 ? (scrollTop / totalScroll) * 100 : 0;
      setScrollProgress(progress);

      // Determine active section
      let currentActive = "home";
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            currentActive = id;
          }
        }
      });
      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showcasePaused) {
      return undefined;
    }

    const autoplayId = window.setInterval(() => {
      changeShowcaseSlide(1);
    }, 5000);

    return () => window.clearInterval(autoplayId);
  }, [showcasePaused]);

  return (
    <div className="page">
      {/* Progress bar */}

      <div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Utility bar */}
        <div className="utility-bar">
          <p>
            A global oncology innovation enterprise, working across prevention,
            early detection, treatment, nutrition and enabling technology.
          </p>
          <div className="utility-right">
            <span>
              India&nbsp;·&nbsp;UAE&nbsp;·&nbsp;Australia&nbsp;·&nbsp;USA
            </span>
            <IconGlobe />
          </div>
        </div>
      </div>

      {/* Nav */}
      <header className="navbar">
        <div className="brand">
          <img src={logo} alt="Esperer Group" className="brand-logo" />
        </div>
        <nav className="nav-links">
          {navLinks.map((link) => (
            <a
              href="#"
              key={link.id}
              onClick={(e) => handleNavClick(e, link.id)}
              className={activeSection === link.id ? "active" : ""}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button className="btn btn-teal">
          Explore Our Businesses <IconArrowRight />
        </button>
      </header>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-copy">
          <span className="eyebrow eyebrow-orange">ESPERER GROUP</span>
          <h1>
            <span>Advancing</span>
            <span>the full continuum</span>
            <span>
              of <span className="teal-text">cancer care.</span>
            </span>
          </h1>
          <p className="hero-desc">
            A global oncology innovation enterprise, working across prevention,
            early detection, treatment, nutrition and enabling technology.
          </p>
          <button className="btn btn-teal">
            Explore Our Businesses <IconArrowRight />
          </button>
          {/* <div className="hero-tagline">
            <span className="tagline-rule" />
            <p>
              TWO BREAKTHROUGHS.
              <br />
              ONE DISCIPLINE.
              <br />
              ZERO GUESSWORK.
            </p>
          </div> */}
        </div>
        <div className="hero-image">
          <EspererGlobe />
        </div>
      </section>

      {/* Business showcase */}
      {/* <section className="business-showcase" aria-label="Where we operate">
        <div className="showcase-heading">
          <span className="eyebrow eyebrow-orange">WHERE WE OPERATE</span>
          <h2>
            The frontiers of cancer care
            <br />
            Esperer Group is redefining.
          </h2>
        </div>
        <div className="showcase-glow" aria-hidden="true" />
        <div
          className="showcase-viewport"
          aria-live="polite"
          onMouseEnter={() => setShowcasePaused(true)}
          onMouseLeave={() => setShowcasePaused(false)}
        >
          <div
            className="showcase-track"
            style={{ transform: `translateX(-${showcaseIndex * 100}%)` }}
          >
            {showcaseBusinesses.map((business) => (
              <article className="showcase-slide" key={business.name}>
                <div className="showcase-logo">
                  <img src={business.logo} alt={`${business.name} logo`} />
                </div>
                <p className="showcase-name">{business.name}</p>
                <h3>{business.headline}</h3>
                <p className="showcase-description">{business.description}</p>
                <a href="#businesses" className="showcase-cta">
                  Explore this space <IconArrowRight />
                </a>
              </article>
            ))}
          </div>
        </div>
        <div className="showcase-controls">
          <button
            type="button"
            className="showcase-arrow"
            onClick={() => changeShowcaseSlide(-1)}
            aria-label="Previous business"
          >
            <span aria-hidden="true">&#8592;</span>
          </button>
          <div className="showcase-counter">
            <span>{String(showcaseIndex + 1).padStart(2, "0")}</span>
            <span className="showcase-counter-divider">/</span>
            <span>04</span>
          </div>
          <div className="showcase-dots" role="tablist" aria-label="Businesses">
            {showcaseBusinesses.map((business, index) => (
              <button
                type="button"
                role="tab"
                key={business.name}
                aria-label={`Show ${business.name}`}
                aria-selected={showcaseIndex === index}
                className={showcaseIndex === index ? "is-active" : ""}
                onClick={() => setShowcaseIndex(index)}
              />
            ))}
          </div>
          <button
            type="button"
            className="showcase-arrow"
            onClick={() => changeShowcaseSlide(1)}
            aria-label="Next business"
          >
            <span aria-hidden="true">&#8594;</span>
          </button>
        </div>
      </section> */}

      {/* Business showcase redesign */}
      <section
        className="showcase-redesign"
        aria-label="Where we operate, alternate view"
      >
        <div className="showcase-redesign-heading">
          <span className="eyebrow">WHERE WE OPERATE</span>
          <h2>
            The frontiers of cancer care
            <br />
            Esperer Group is redefining.
          </h2>
        </div>
        <div
          className="showcase-redesign-viewport"
          aria-live="polite"
          onMouseEnter={() => setShowcasePaused(true)}
          onMouseLeave={() => setShowcasePaused(false)}
        >
          <div
            className="showcase-redesign-track"
            style={{ transform: `translateX(-${showcaseIndex * 100}%)` }}
          >
            {showcaseBusinesses.map((business) => (
              <article className="showcase-redesign-slide" key={business.name}>
                <div className="showcase-redesign-logo-wrap">
                  <span
                    className="showcase-redesign-orbit"
                    aria-hidden="true"
                  />
                  <img
                    src={business.logo}
                    alt={`${business.name} logo`}
                    className="showcase-redesign-logo"
                  />
                </div>
                <div className="showcase-redesign-content">
                  <span className="showcase-redesign-eyebrow">
                    {business.name.toUpperCase()}
                  </span>
                  <h2>{business.headline}</h2>
                  <p>{business.description}</p>
                  <a href="#businesses" className="showcase-redesign-cta">
                    Explore this space <IconArrowRight />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="showcase-redesign-controls">
          <button
            type="button"
            className="showcase-redesign-arrow"
            onClick={() => changeShowcaseSlide(-1)}
            aria-label="Previous business"
          >
            <span aria-hidden="true">&#8592;</span>
          </button>
          <div className="showcase-redesign-counter">
            <span>{String(showcaseIndex + 1).padStart(2, "0")}</span>
            <span>/</span>
            <span>04</span>
          </div>
          <div
            className="showcase-redesign-dots"
            role="tablist"
            aria-label="Business slides"
          >
            {showcaseBusinesses.map((business, index) => (
              <button
                type="button"
                role="tab"
                key={business.name}
                aria-label={`Show ${business.name}`}
                aria-selected={showcaseIndex === index}
                className={showcaseIndex === index ? "is-active" : ""}
                onClick={() => setShowcaseIndex(index)}
              />
            ))}
          </div>
          <button
            type="button"
            className="showcase-redesign-arrow"
            onClick={() => changeShowcaseSlide(1)}
            aria-label="Next business"
          >
            <span aria-hidden="true">&#8594;</span>
          </button>
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div className="about-image">
          <img src={Woman} alt="Woman looking forward with hope" />
        </div>
        <div className="about-copy">
          <span className="eyebrow eyebrow-orange">ABOUT ESPERER GROUP</span>
          <h2>
            A global enterprise,
            <br />
            built entirely around oncology.
          </h2>
          <p>
            Esperer Group is a research-driven oncology innovation enterprise,
            working across the full arc of cancer care — prevention, early
            detection, treatment, precision nutrition, and long-term
            survivorship. We bring together molecular nutrition, oncology
            pharmaceuticals, medical technology and artificial intelligence into
            a single ecosystem, built to help clinicians, healthcare
            institutions and patients make better decisions and get better
            outcomes.
          </p>
          <div className="about-features">
            <div className="feature">
              <IconLeaf />
              <h4>Science First</h4>
              <p>
                Everything we do is backed by science, research and clinical
                validation.
              </p>
            </div>
            <div className="feature">
              <IconUsers />
              <h4>Patient Centered</h4>
              <p>
                Our innovations exist to improve the quality of life and
                long-term outcomes.
              </p>
            </div>
            <div className="feature">
              <IconTarget />
              <h4>Global Impact</h4>
              <p>
                Building solutions that reach across borders and transform care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Breakthroughs */}
      <section className="breakthroughs" aria-labelledby="breakthroughs-title">
        <div className="breakthroughs-heading">
          <span className="eyebrow eyebrow-orange">OUR BREAKTHROUGHS</span>
          <h2 id="breakthroughs-title">Our Breakthroughs</h2>
          <p>
            Developed within Esperer Nutrition, these two pioneering innovations
            are redefining how nutrition supports cancer treatment — with
            science, precision and purpose.
          </p>
        </div>

        <div className="breakthrough-grid">
          <article className="breakthrough-card">
            <div className="breakthrough-card-main">
              <div className="breakthrough-copy">
                <div className="breakthrough-mark">
                  <IconDNA />
                </div>
                <span className="breakthrough-label">BREAKTHROUGH 01</span>
                <h3>Cancer-specific nutritional therapy</h3>
                <span className="breakthrough-rule" />
                <p>
                  The world’s first stage- and condition-specific onco-nutrition
                  therapy — developed and validated as a clinical intervention
                  to work alongside primary treatment and help it reach its
                  optimal outcome.
                </p>
              </div>
              <img
                src={breakthroughPatient}
                alt="Patient benefiting from nutritional therapy"
              />
            </div>
            <div className="breakthrough-features">
              <span>Stage &amp; condition specific</span>
              <span>Clinically validated intervention</span>
              <span>Works alongside cancer treatment</span>
            </div>
            <a href="#businesses" className="btn btn-teal breakthrough-button">
              Explore EON Therapy <IconArrowRight />
            </a>
          </article>

          <article className="breakthrough-card">
            <div className="breakthrough-card-main">
              <div className="breakthrough-copy">
                <div className="breakthrough-mark">
                  <IconChip />
                </div>
                <span className="breakthrough-label">BREAKTHROUGH 02</span>
                <h3>AI-powered nutritional assessment protocol</h3>
                <span className="breakthrough-rule" />
                <p>
                  The world’s first AI-powered nutritional assessment protocol —
                  determining, with clinical precision, exactly what a patient’s
                  body requires at each stage of treatment.
                </p>
              </div>
              <img
                src={breakthroughNutraIq}
                alt="Nutra-IQ nutritional assessment interface"
              />
            </div>
            <div className="breakthrough-features">
              <span>AI-powered precision</span>
              <span>Personalised to stage of treatment</span>
              <span>Early risk detection &amp; better outcomes</span>
            </div>
            <a href="#businesses" className="btn btn-teal breakthrough-button">
              Explore Nutra-IQ <IconArrowRight />
            </a>
          </article>
        </div>

        <div className="breakthrough-note">
          <IconShield />
          <p>
            Both breakthroughs are backed by clinical research, globally
            patented, and aligned with international nutrition guidelines —
            because every decision should be driven by evidence, not assumption.
          </p>
          <a href="#foundation" className="link-arrow teal">
            Learn more about our science <IconArrowRight />
          </a>
        </div>
      </section>

      {/* Esperer at a glance */}
      <section className="glance" aria-labelledby="glance-title">
        <div className="glance-inner">
          <div className="glance-heading">
            <span className="eyebrow eyebrow-orange">ESPERER AT A GLANCE</span>
            <h2 id="glance-title">Credibility, at a glance.</h2>
          </div>
          <div className="glance-grid">
            {glanceStats.map((stat) => (
              <article className="glance-item" key={stat.title}>
                <div className="glance-icon" aria-hidden="true">
                  {stat.icon}
                </div>
                <h3>{stat.title}</h3>
                <p>{stat.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Continuum of care */}
      <section className="continuum" id="continuum">
        <div className="continuum-left">
          <span className="eyebrow eyebrow-cream">THE CONTINUUM OF CARE</span>
          <h2>
            Every part of the cancer journey,
            <br />
            addressed by a dedicated Esperer business.
          </h2>
          <div className="continuum-steps">
            {continuumSteps.map((step) => (
              <div className="continuum-step" key={step.num}>
                <div className="step-top">
                  <span className="step-num">{step.num}</span>
                </div>
                <p className="step-title">
                  {step.title.split("\n").map((line, idx) => (
                    <span key={idx}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
                <div className="step-sub">
                  <img
                    src={step.logo}
                    alt={`${step.sub.replace("\n", " ")} logo`}
                  />
                  <a href="#businesses" className="step-business-link">
                    {step.sub.split("\n").map((line, idx) => (
                      <span key={idx}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="continuum-quote">
          <IconQuote />
          <p>
            Treating the cancer is only one part of curing the patient. The
            other part — helping the body carry that treatment — is what Esperer
            was built to do.
          </p>
          <span>— Dr. Raktim Chattopadhyay</span>
        </div>
      </section>

      {/* Our Businesses */}
      <section className="businesses" id="businesses">
        <div className="businesses-copy">
          <span className="eyebrow eyebrow-orange">OUR BUSINESSES</span>
          <h2>Each addressing a distinct part of the cancer care continuum</h2>
          <p>
            Every innovation we build — from clinically validated protocols to
            AI-driven platforms — is designed to make cancer care more
            personalized, improve quality of life, and put evidence-based care
            within reach of more people.
          </p>
          <a href="#" className="link-arrow">
            View all businesses <IconArrowRight />
          </a>
        </div>
        <div className="businesses-diagram">
          <div className="wheel">
            <svg className="wheel-svg" viewBox="0 0 520 520">
              <line
                x1="77.5"
                y1="77.5"
                x2="442.5"
                y2="442.5"
                className="wheel-divider"
              />
              <line
                x1="442.5"
                y1="77.5"
                x2="77.5"
                y2="442.5"
                className="wheel-divider"
              />
              <path
                d="M260,260 L77.5,77.5 A258,258 0 0 1 442.5,77.5 Z"
                className="wheel-glow"
              />
            </svg>

            <div
              className="wheel-rotation"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <button
                type="button"
                className={`wedge wedge-01 ${selectedBusinessId === "nutrition" ? "is-active" : ""}`}
                onClick={() => handleBusinessClick("nutrition")}
                aria-pressed={selectedBusinessId === "nutrition"}
                style={{ "--slot-rotation": `${-rotation}deg` }}
              >
                <span className="wedge-num">01</span>
                <span className="wedge-icon">
                  <img
                    src={businessData[0].logo}
                    alt="Esperer Nutrition logo"
                  />
                </span>
                <h5>{businessData[0].name}</h5>
                <p>{businessData[0].description}</p>
                <span className="btn btn-teal btn-small">
                  Explore <IconArrowRight size={14} />
                </span>
              </button>

              <button
                type="button"
                className={`wedge wedge-02 ${selectedBusinessId === "bioresearch" ? "is-active" : ""}`}
                onClick={() => handleBusinessClick("bioresearch")}
                aria-pressed={selectedBusinessId === "bioresearch"}
                style={{ "--slot-rotation": `${-rotation}deg` }}
              >
                <span className="wedge-num">02</span>
                <span className="wedge-icon">
                  <img
                    src={businessData[1].logo}
                    alt="Esperer BioResearch logo"
                  />
                </span>
                <h5>{businessData[1].name}</h5>
                <p>{businessData[1].description}</p>
                <span className="btn btn-teal btn-small">
                  Explore <IconArrowRight size={14} />
                </span>
              </button>

              <button
                type="button"
                className={`wedge wedge-03 ${selectedBusinessId === "technologies" ? "is-active" : ""}`}
                onClick={() => handleBusinessClick("technologies")}
                aria-pressed={selectedBusinessId === "technologies"}
                style={{ "--slot-rotation": `${-rotation}deg` }}
              >
                <span className="wedge-num">03</span>
                <span className="wedge-icon">
                  <img
                    src={businessData[2].logo}
                    alt="Health Voitho Technologies logo"
                  />
                </span>
                <h5>{businessData[2].name}</h5>
                <p>{businessData[2].description}</p>
                <span className="btn btn-teal btn-small">
                  Explore <IconArrowRight size={14} />
                </span>
              </button>

              <button
                type="button"
                className={`wedge wedge-04 ${selectedBusinessId === "saltlick" ? "is-active" : ""}`}
                onClick={() => handleBusinessClick("saltlick")}
                aria-pressed={selectedBusinessId === "saltlick"}
                style={{ "--slot-rotation": `${-rotation}deg` }}
              >
                <span className="wedge-num">04</span>
                <span className="wedge-icon">
                  <img src={businessData[3].logo} alt="Salt Lick logo" />
                </span>
                <h5>{businessData[3].name}</h5>
                <p>{businessData[3].description}</p>
                <span className="btn btn-teal btn-small">
                  Explore <IconArrowRight size={14} />
                </span>
              </button>
            </div>

            <div className="wheel-center">
              <span className="wheel-logo-text">
                Esperer
                <span className="wheel-logo-dot" />
              </span>
              <span className="wheel-logo-sub">GROUP</span>
            </div>
          </div>
        </div>
      </section>

      {/* Global footprint */}
      <section className="footprint" id="footprint">
        <div className="footprint-copy">
          <span className="eyebrow eyebrow-orange">OUR BUSINESSES</span>
          <h2>A global footprint.</h2>
          <p>
            Our science is available across 12+ countries in some of the world's
            most tightly regulated healthcare markets.
          </p>
          <a href="#" className="link-arrow dark">
            View all locations <IconArrowRight />
          </a>
        </div>
        <div className="footprint-map">
          <img src={MapImg} alt="World map of Esperer Group footprint" />
        </div>
        <div className="footprint-stats">
          {globalStats.map((stat, index) => (
            <div className="stat" key={stat.label}>
              <h3>
                {index === 2 ? (
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={1400}
                  />
                ) : (
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={1200}
                  />
                )}
              </h3>
              <p className="stat-label">{stat.label}</p>
              <p className="stat-desc">{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Scientific Foundation */}
      <section className="foundation-section" id="foundation">
        <div className="card foundation-card">
          <span className="eyebrow eyebrow-orange">
            OUR SCIENTIFIC FOUNDATION
          </span>
          <h2>
            The DINI Axis.
            <br />
            Our foundation for intelligent oncology.
          </h2>
          <p>
            Our proprietary framework connects Diet, Inflammation, Nutrition and
            Immunity — the four biological levers that determine how the body
            responds to cancer.
          </p>
          <p>
            This is the science behind every protocol we develop and deliver.
          </p>
          <a href="#" className="link-arrow dark">
            Learn more <IconArrowRight />
          </a>
          <div className="dini-diagram">
            <svg className="dini-svg" viewBox="0 0 300 300">
              <path d="M150,35 Q232.2,67.8 265,150" className="dini-arc" />
              <path d="M265,150 Q232.2,232.2 150,265" className="dini-arc" />
              <path d="M150,265 Q67.8,232.2 35,150" className="dini-arc" />
              <path d="M35,150 Q67.8,67.8 150,35" className="dini-arc" />
            </svg>
            <div className="dini-orbit">
              <span className="dini-orbit-node dini-top">
                <span className="dini-node">DIET</span>
              </span>
              <span className="dini-orbit-node dini-left">
                <span className="dini-node">NUTRITION</span>
              </span>
              <span className="dini-orbit-node dini-right">
                <span className="dini-node">INFLAMMATION</span>
              </span>
              <span className="dini-orbit-node dini-bottom">
                <span className="dini-node">IMMUNITY</span>
              </span>
            </div>
            <span className="dini-center">
              DINI
              <br />
              AXIS
            </span>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="leadership-section" id="leadership">
        <div className="leadership-image-panel">
          <img
            src={FounderImg}
            alt="Dr. Raktim Chattopadhyay"
            className="leadership-feature-image"
          />
        </div>
        <div className="card leadership-card">
          <span className="eyebrow eyebrow-orange">LEADERSHIP</span>
          <h2>Dr. Raktim Chattopadhyay</h2>
          <p className="leadership-role">Founder, Esperer Group</p>
          <div className="leadership-body">
            <div className="leadership-quote">
              <IconQuote />
              <p>
                Dr. Raktim Chattopadhyay is a cancer researcher and healthcare
                entrepreneur with over 20 years of techno-commercial experience
                across oncology, nephrology and critical care, building and
                scaling businesses across some of the world's most tightly
                regulated healthcare markets.
              </p>
              <br />
              <p>
                He is the originator of the DiNI Axis, a globally patented
                research hypothesis examining the relationship between gut
                microbiota and cancer, which forms the scientific foundation for
                much of the Group's approach to nutrition-led oncology care.
              </p>
            </div>
          </div>
          <div className="awards">
            {awards.map((a, i) => (
              <div className="award" key={i}>
                <IconLaurel />
                <p>
                  {a.split("\n").map((line, idx) => (
                    <span key={idx}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
          {/* <a href="#" className="link-arrow dark">
            View all locations <IconArrowRight />
          </a> */}
        </div>
      </section>

      {/* Insights */}
      {/* <section className="insights">
        <div className="insights-head">
          <div>
            <span className="eyebrow eyebrow-orange">
              INSIGHTS &amp; IMPACT
            </span>
            <h2>
              Knowledge that
              <br />
              drives change.
            </h2>
          </div>
        </div>
        <div className="insights-grid">
          {insights.map((item) => (
            <article className="insight-card" key={item.title}>
              <img src={item.img} alt={item.title} />
              <span className="insight-date">{item.date}</span>
              <h4>{item.title}</h4>
              <a href="#" className="link-arrow teal">
                Read More <IconArrowRight size={14} />
              </a>
            </article>
          ))}
          <a href="#" className="link-arrow view-all">
            View all insights <IconArrowRight />
          </a>
        </div>
      </section> */}

      {/* CTA */}
      <section className="cta" id="cta">
        <h2>
          Esperer Group —<br />
          advancing cancer care from prevention to post-care.
        </h2>
        <button className="btn btn-white">
          Explore Our Businesses <IconArrowRight />
        </button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={logo} alt="Esperer Group" className="brand-logo" />
            <p>
              A global oncology innovation enterprise, working across
              prevention, early detection, treatment, nutrition and enabling
              technology.
            </p>
          </div>
          <div className="footer-col">
            <h5>COMPANY</h5>
            <a href="#">About Us</a>
            <a href="#">Leadership</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer-col">
            <h5>OUR BUSINESSES</h5>
            <a href="#">Esperer Nutrition</a>
            <a href="#">Esperer BioResearch</a>
            <a href="#">Health Voitho Technologies</a>
            <a href="#">Salt Lick</a>
            <a href="#">Esperer Global LLC</a>
            <a href="#">Esperer Nutrition Australia</a>
          </div>
          <div className="footer-col">
            <h5>RESOURCES</h5>
            <a href="#">Awards &amp; Recognition</a>
            <a href="#">Clinical Research</a>
            <a href="#">Insights</a>
          </div>
          <div className="footer-col footer-contact">
            <h5>CONTACT</h5>
            <p>
              <IconMapPin /> Mumbai (HQ):
              <br />
              Gundecha Onclave, Sakinaka, Andheri East
            </p>
            <p>
              <IconMail /> info@esperernutrition.com
            </p>
            <p>
              <IconPhone /> Toll Free: 1800 890 2671
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="socials">
            <a href="#">
              <IconLinkedIn />
            </a>
            <a href="#">
              <IconX />
            </a>
            <a href="#">
              <IconInstagram />
            </a>
          </div>
          <p>© 2026 ESPERER GROUP. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
