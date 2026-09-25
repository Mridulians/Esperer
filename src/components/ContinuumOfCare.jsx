import { Fragment } from "react";
import saltLickLogo from "../assets/salt_lick.png";
import bioResearchLogo from "../assets/Esperer_bioresearch.png";
import nutritionLogo from "../assets/esperer_nutrition.png";
import healthVoithoLogo from "../assets/health_voitho.png";
import "./ContinuumOfCare.css";

/* ---------------- Local icons (self-contained for this component) ---------------- */
const IconShieldHeart = () => (
  <svg className="coc-node-glyph" viewBox="0 0 48 48" fill="none" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="cocShieldGradient" x1="8" y1="5" x2="40" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4fc9cb" />
        <stop offset="1" stopColor="#0d8b8e" />
      </linearGradient>
    </defs>
    <path
      d="M24 4.2 40.6 11v11.7c0 10-6.7 17.3-16.6 20.6C14.1 40 7.4 32.7 7.4 22.7V11L24 4.2Z"
      fill="url(#cocShieldGradient)"
      opacity="0.22"
    />
    <path
      d="M24 4.2 40.6 11v11.7c0 10-6.7 17.3-16.6 20.6C14.1 40 7.4 32.7 7.4 22.7V11L24 4.2Z"
      stroke="url(#cocShieldGradient)"
      strokeWidth="2.4"
      strokeLinejoin="round"
    />
    <path
      d="M24 32.6c-4.9-3.2-8.1-6-8.1-9.8 0-2.5 1.9-4.4 4.3-4.4 1.6 0 2.9.8 3.8 2.1.9-1.3 2.2-2.1 3.8-2.1 2.4 0 4.3 1.9 4.3 4.4 0 3.8-3.2 6.6-8.1 9.8Z"
      fill="url(#cocShieldGradient)"
    />
  </svg>
);

const IconHelix = () => (
  <svg className="coc-node-glyph" viewBox="0 0 48 48" fill="none" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="cocHelixGradient" x1="14" y1="4" x2="34" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4fc9cb" />
        <stop offset="1" stopColor="#0d8b8e" />
      </linearGradient>
    </defs>
    <g transform="rotate(-32 24 24)" stroke="url(#cocHelixGradient)" strokeWidth="2.3" strokeLinecap="round">
      <path d="M17.5 3.5c0 10.3 13 10.3 13 20.5s-13 10.2-13 20.5" />
      <path d="M30.5 3.5c0 10.3-13 10.3-13 20.5s13 10.2 13 20.5" />
      <path d="M19.4 10.6h9.2M17.6 16.4h12.8M17.6 31.6h12.8M19.4 37.4h9.2" strokeWidth="1.9" />
    </g>
  </svg>
);


const IconMint = () => (
  <svg className="coc-node-glyph" viewBox="0 0 48 48" fill="none" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="cocMintGradient" x1="12" y1="8" x2="36" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#5fd0cd" />
        <stop offset="1" stopColor="#0d8b8e" />
      </linearGradient>
    </defs>
    <path d="M24 44V15.5" stroke="url(#cocMintGradient)" strokeWidth="2.3" strokeLinecap="round" />
    <path
      d="M23.2 21.4C23.2 13.7 17.4 8.6 8.6 8.6c0 8 5.8 13.1 14.6 12.8Z"
      fill="url(#cocMintGradient)"
      fillOpacity="0.28"
      stroke="url(#cocMintGradient)"
      strokeWidth="1.9"
      strokeLinejoin="round"
    />
    <path
      d="M24.8 19.4c0-6.7 5-11.1 12.4-11.1.2 7.2-4.8 11.4-12.4 11.1Z"
      fill="url(#cocMintGradient)"
      fillOpacity="0.28"
      stroke="url(#cocMintGradient)"
      strokeWidth="1.9"
      strokeLinejoin="round"
    />
    <path d="M24 34.6c-4.6-.4-8-3.4-9.2-8.4 4.7-.5 8.3 2.2 9.2 8.4Z" fill="url(#cocMintGradient)" />
  </svg>
);

const IconCircuit = () => (
  <svg className="coc-node-glyph" viewBox="0 0 48 48" fill="none" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="cocCircuitGradient" x1="13" y1="13" x2="36" y2="36" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4fc9cb" />
        <stop offset="1" stopColor="#0d8b8e" />
      </linearGradient>
    </defs>
    <rect x="13" y="13" width="22" height="22" rx="4.5" stroke="url(#cocCircuitGradient)" strokeWidth="2.3" />
    <rect x="19" y="19" width="10" height="10" rx="2.4" fill="url(#cocCircuitGradient)" />
    <g stroke="url(#cocCircuitGradient)" strokeWidth="2.2" strokeLinecap="round">
      <path d="M18.5 13V6.5M24 13V6.5M29.5 13V6.5M18.5 41.5V35M24 41.5V35M29.5 41.5V35" />
      <path d="M13 18.5H6.5M13 24H6.5M13 29.5H6.5M35 18.5h6.5M35 24h6.5M35 29.5h6.5" />
    </g>
  </svg>
);

/* ---------------- Content ---------------- */
const CONTINUUM_EYEBROW = "THE CONTINUUM OF CARE";
const CONTINUUM_HEADING =
  "Every part of the cancer journey, addressed by a dedicated Esperer business.";

/* `logoHeight` is each mark's height inside the shared logo band. The stylesheet
   scales these together through --coc-logo-scale as the viewport narrows. */
const continuumBusinesses = [
  {
    number: "01",
    title: ["Cancer Risk Assesment "],
    name: ["Salt Lick"],
    icon: <IconShieldHeart />,
    logo: saltLickLogo,
    logoHeight: 140,
    website: "www.saltlickhealthcare.com",
  },
  {
    number: "02",
    title: ["Cancer Treatment with Pharmaceutical Interventions "],
    name: ["Esperer BioResearch"],
    icon: <IconHelix />,
    logo: bioResearchLogo,
    // logoHeight: 72,
    logoHeight: 120,
    website: "https://www.espererbioresearch.com",
  },
  {
    number: "03",
    title: ["Cancer Nutrition as Complementary Care "],
    name: ["Esperer Nutrition"],
    icon: <IconMint />,
    logo: nutritionLogo,
    logoHeight: 90,
    website: "https://www.esperernutrition.com",
  },
  {
    number: "04",
    title: ["Healthtech in Cancer "],
    name: ["Health Voitho", "Technologies"],
    icon: <IconCircuit />,
    logo: healthVoithoLogo,
    // logoHeight: 74,
    logoHeight: 120,
    website: "https://www.healthvoitho.com",
  },
];

/* Flowing teal line: crests sit exactly under the four step markers, troughs
   between them, with flat tails continuing to either edge of the section.
   (Desktop / tablet only — the single-column mobile layout has no line.) */
const CONTINUUM_WAVE_PATH =
  "M0 76C50 76 100 48 150 48C200 48 250 76 300 76C350 76 400 48 450 48C500 48 550 76 600 76C650 76 700 48 750 48C800 48 850 76 900 76C950 76 1000 48 1050 48C1100 48 1150 76 1200 76";

const ArcMark = () => (
  <svg className="coc-node-arc" viewBox="0 0 152 152" aria-hidden="true" focusable="false">
    <path
      d="M66.1 19.9A57 57 0 0 0 20.9 61.2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <circle cx="20.9" cy="61.2" r="3.1" fill="currentColor" />
  </svg>
);

const renderLines = (lines) =>
  lines.map((line, index) => (
    <Fragment key={line}>
      {line}
      {index < lines.length - 1 ? <br /> : null}
    </Fragment>
  ));

export default function ContinuumOfCare({ backgroundImage = null }) {
  return (
    <section className="coc" id="businesses" aria-labelledby="continuum-title">
      <div className="coc-bg" aria-hidden="true">
        {backgroundImage ? (
          <span
            className="coc-bg-art"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        ) : (
          <>
            <span className="coc-bg-cell" />
            <span className="coc-bg-bubble coc-bg-bubble-1" />
            <span className="coc-bg-bubble coc-bg-bubble-2" />
            <span className="coc-bg-bubble coc-bg-bubble-3" />
          </>
        )}
      </div>

      <div className="coc-inner">
        <div className="coc-head">
          <span className="coc-eyebrow">{CONTINUUM_EYEBROW}</span>
          <h2 className="coc-heading" id="continuum-title">
            {CONTINUUM_HEADING}
          </h2>
        </div>

        <div className="coc-track-wrap">
          <svg
            className="coc-wave"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d={CONTINUUM_WAVE_PATH}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <ol className="coc-track">
            {continuumBusinesses.map((item) => (
              <li className="coc-step" key={item.number}>
                <div className="coc-node-wrap">
                  <div className="coc-node">
                    {/* <span className="coc-node-number">{item.number}</span> */}
                    {/* <ArcMark /> */}
                    <span className="coc-node-icon">{item.icon}</span>
                  </div>
                  <span className="coc-stem" aria-hidden="true" />
                </div>

                <div className="coc-step-body">
                  <p className="coc-step-title">{renderLines(item.title)}</p>

                  <a
                    className="coc-partner"
                    href={item.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.name.join(" ")} — visit website (opens in a new tab)`}
                  >
                    <img
                      src={item.logo}
                      alt={`${item.name.join(" ")} logo`}
                      style={{ "--coc-logo-height": `${item.logoHeight}px` }}
                    />
                  </a>

                  <p className="coc-partner-name">{renderLines(item.name)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
