import { useEffect, useState } from "react";
import MapImg from "../assets/map_img.png";
import { IconArrowRight } from "./Icons.jsx";

function AnimatedNumber({ value, suffix = "", duration = 1200 }) {
  const [displayValue, setDisplayValue] = useState(0);
  useEffect(() => {
    let frameId;
    let startTime;
    const tick = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setDisplayValue(Math.ceil(value * (1 - (1 - progress) ** 3)));
      if (progress < 1) frameId = requestAnimationFrame(tick);
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

export default function GlobalFootprint() {
  const stats = [
    [12, "+", "Countries", "Global footprint across regulated markets"],
    [6, "+", "Global Patents", "In oncology & molecular nutrition"],
    [1, "", "World's First", "Stage-specific onco-nutrition therapy."],
  ];
  return (
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
        {stats.map(([value, suffix, label, description]) => (
          <div className="stat" key={label}>
            <h3>
              <AnimatedNumber
                value={value}
                suffix={suffix}
                duration={label === "World's First" ? 1400 : 1200}
              />
            </h3>
            <p className="stat-label">{label}</p>
            <p className="stat-desc">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
