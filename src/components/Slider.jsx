import { useEffect, useState } from "react";
import { IconArrowRight } from "./Icons.jsx";

export default function Slider({ businesses }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const change = (direction) =>
    setIndex(
      (current) =>
        (current + direction + businesses.length) % businesses.length,
    );
  useEffect(() => {
    if (paused) return undefined;
    const id = window.setInterval(() => change(1), 3000);
    return () => window.clearInterval(id);
  }, [paused]);
  return (
    <section
      className="reference-slider"
      aria-label="Where we operate, featured businesses"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="reference-slider-heading">
        <span className="eyebrow eyebrow-orange">WHERE WE OPERATE</span>
        <h2>The frontiers of cancer care Esperer Group is redefining.</h2>
      </div>
      <div className="reference-slider-viewport" aria-live="polite">
        <div
          className="reference-slider-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {businesses.map((business, businessIndex) => (
            <article
              className={`reference-slider-slide ${businessIndex === index ? "is-active" : ""}`}
              key={business.name}
            >
              <img
                className="reference-slider-image reference-slider-image-animated"
                src={business.image}
                alt={`${business.name} feature illustration`}
              />
              <div className="reference-slider-copy">
                <span className="reference-slider-pill">
                  {business.category}
                </span>
                <h2>{business.headline}</h2>
                <p>{business.description}</p>
                <a
                  href={`/business/${business.slug}`}
                  className="reference-slider-cta"
                >
                  Explore this space <IconArrowRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="reference-slider-controls">
        <button
          type="button"
          className="reference-slider-arrow"
          onClick={() => change(-1)}
          aria-label="Previous featured business"
        >
          &#8592;
        </button>
        <div
          className="reference-slider-dots"
          role="tablist"
          aria-label="Featured businesses"
        >
          {businesses.map((business, businessIndex) => (
            <button
              type="button"
              role="tab"
              key={business.name}
              aria-label={`Show ${business.name}`}
              aria-selected={index === businessIndex}
              className={index === businessIndex ? "is-active" : ""}
              onClick={() => setIndex(businessIndex)}
            />
          ))}
        </div>
        <button
          type="button"
          className="reference-slider-arrow"
          onClick={() => change(1)}
          aria-label="Next featured business"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
}
