import { useState } from "react";
import { IconArrowRight } from "./Icons.jsx";

export default function Businesses({ businesses }) {
  const [selectedBusinessId, setSelectedBusinessId] = useState("nutrition");
  const selectedIndex = businesses.findIndex(
    ({ id }) => id === selectedBusinessId,
  );
  return (
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
          <div className="wheel-rotation">
            {businesses.map((business, index) => {
              const slotIndex =
                (index - selectedIndex + businesses.length) % businesses.length;
              return (
                <article
                  className={`wedge wedge-slot-${slotIndex} ${selectedBusinessId === business.id ? "is-active" : ""}`}
                  onClick={() => setSelectedBusinessId(business.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setSelectedBusinessId(business.id);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  key={business.id}
                >
                  <span className="wedge-num">{business.number}</span>
                  <span className="wedge-icon">
                    <img src={business.logo} alt={`${business.name} logo`} />
                  </span>
                  <h5>{business.name}</h5>
                  <p>{business.description}</p>
                  <a
                    href={`/business/${business.id}`}
                    className="btn btn-teal btn-small"
                    onClick={(event) => event.stopPropagation()}
                  >
                    Explore <IconArrowRight size={14} />
                  </a>
                </article>
              );
            })}
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
  );
}
