import { useEffect, useRef } from "react";
import { IconArrowRight } from "./Icons.jsx";
import KnowledgePartnerStrip from "./KnowledgePartnerStrip.jsx";

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

export default function HeroSection() {
  return (
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
        <a href="#businesses" className="btn btn-teal">
          Get in Touch <IconArrowRight />
        </a>
      </div>
      <div className="hero-image">
        <EspererGlobe />
      </div>
      <KnowledgePartnerStrip />
    </section>
  );
}
