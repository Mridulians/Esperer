import { useEffect, useRef } from "react";
import { IconArrowRight } from "./Icons.jsx";
import KnowledgePartnerStrip from "./KnowledgePartnerStrip.jsx";
import nutritionLogo from "../assets/esperer_nutrition.png";
import bioResearchLogo from "../assets/Esperer_bioresearch.png";
import healthVoithoLogo from "../assets/health_voitho.png";
import saltLickLogo from "../assets/salt_lick.png";

// Update each business name, logo, or destination here.
const heroBusinesses = [
  {
    name: "Esperer Nutrition",
    logo: nutritionLogo,
    website: "https://www.esperernutrition.com",
  },
  {
    name: "Esperer BioResearch",
    logo: bioResearchLogo,
    website: "https://www.espererbioresearch.com",
  },
  {
    name: "Health Voitho Technologies",
    logo: healthVoithoLogo,
    website: "https://www.healthvoitho.com",
  },
  {
    name: "Salt Lick Healthcare",
    logo: saltLickLogo,
    website: "https://www.saltlick.com",
  },
];

function EspererGlobe() {
  const globeRef = useRef(null);

  useEffect(() => {
    if (!globeRef.current || typeof window.EspererGlobe !== "function")
      return undefined;
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

export default function HeroSection1() {
  return (
    <section className="hero hero-business-layout" id="home">
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
        <a href="#businesses" className="btn btn-teal">
          Explore Our Businesses <IconArrowRight />
        </a>
      </div>
      <div className="hero-image">
        <EspererGlobe />
      </div>

      <nav className="hero-businesses" aria-label="Our business websites">
        <h2 className="hero-businesses-heading">Our Businesses</h2>
        <ul className="hero-business-list">
          {heroBusinesses.map(({ name, logo, website }) => (
            <li key={website}>
              <a
                className="hero-business-link"
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${name} (opens in a new tab)`}
              >
                <img className="hero-business-logo" src={logo} alt="" />
                <span className="hero-business-name">{name}</span>
                <IconArrowRight />
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <KnowledgePartnerStrip />
    </section>
  );
}
