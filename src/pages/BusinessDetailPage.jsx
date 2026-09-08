import { useEffect } from "react";
import SiteFooter from "../components/SiteFooter.jsx";
import SiteHeader from "../components/SiteHeader.jsx";

const IconArrowRight = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function BusinessDetailPage({ business, businesses = [] }) {
  useEffect(() => {
    document.title = `${business.name} | Esperer Group`;
    return () => {
      document.title = "Esperer Group";
    };
  }, [business.name]);

  return (
    <div className="page business-detail-page">
      <SiteHeader activeSection="businesses" />
      <main>
        <section
          className="business-detail-hero"
          style={{ "--detail-hero-color": business.detail.heroColor }}
        >
          <div className="business-detail-inner">
            <a href="/" className="business-detail-back">
              &#8592; BACK TO ESPERER GROUP
            </a>
            <span className="business-detail-eyebrow">{business.detail.eyebrow}</span>
            <h1>{business.detail.headline}</h1>
            <p>{business.detail.intro}</p>
            <span className="business-detail-rule" aria-hidden="true" />
          </div>
        </section>
        <section className="business-detail-content">
          <div className="business-detail-inner">
            <span className="business-detail-section-label">WHY THIS SPACE MATTERS</span>
            <p>{business.detail.whyFirst}</p>
            <p>{business.detail.whySecond}</p>
            <span className="business-detail-section-label">ESPERER'S BUSINESS IN THIS SPACE</span>
            <article className="business-detail-card">
              <img src={business.logo} alt={`${business.name} logo`} />
              <p>{business.detail.cardDescription}</p>
              <a href="/#businesses" className="business-detail-link">
                KNOW MORE ABOUT {business.name.toUpperCase()} <IconArrowRight size={13} />
              </a>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter businesses={businesses} />
    </div>
  );
}
