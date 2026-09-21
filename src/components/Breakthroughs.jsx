// import breakthroughPatient from "../assets/breakthrough_01_patient.png";
// import breakthroughNutraIq from "../assets/breakthrough_02_nutra_iq.png";
// import { IconArrowRight, IconChip, IconDNA, IconShield } from "./Icons.jsx";

// export default function Breakthroughs() {
//   const items = [
//     {
//       label: "BREAKTHROUGH 01",
//       title: "Cancer-specific nutritional therapy",
//       text: "The world's first stage- and condition-specific onco-nutrition therapy — developed and validated as a clinical intervention to work alongside primary treatment and help it reach its optimal outcome.",
//       image: breakthroughPatient,
//       alt: "Patient benefiting from nutritional therapy",
//       mark: <IconDNA />,
//       features: [
//         "Stage & condition specific",
//         "Clinically validated intervention",
//         "Works alongside cancer treatment",
//       ],
//       cta: "Explore EON Therapy",
//     },
//     {
//       label: "BREAKTHROUGH 02",
//       title: "AI-powered nutritional assessment protocol",
//       text: "The world's first AI-powered nutritional assessment protocol — determining, with clinical precision, exactly what a patient's body requires at each stage of treatment.",
//       image: breakthroughNutraIq,
//       alt: "Nutra-IQ nutritional assessment interface",
//       mark: <IconChip />,
//       features: [
//         "AI-powered precision",
//         "Personalised to stage of treatment",
//         "Early risk detection & better outcomes",
//       ],
//       cta: "Explore Nutra-IQ",
//     },
//   ];
//   return (
//     <section
//       className="breakthroughs"
//       id="breakthroughs"
//       aria-labelledby="breakthroughs-title"
//     >
//       <div className="breakthroughs-heading">
//         <span className="eyebrow eyebrow-orange">OUR BREAKTHROUGHS</span>
//         <h2 id="breakthroughs-title">Our Breakthroughs</h2>
//         <p>
//           Developed within Esperer Nutrition, these two pioneering innovations
//           are redefining how nutrition supports cancer treatment — with science,
//           precision and purpose.
//         </p>
//       </div>
//       <div className="breakthrough-grid">
//         {items.map((item) => (
//           <article className="breakthrough-card" key={item.label}>
//             <div className="breakthrough-card-main">
//               <div className="breakthrough-copy">
//                 <div className="breakthrough-mark">{item.mark}</div>
//                 <span className="breakthrough-label">{item.label}</span>
//                 <h3>{item.title}</h3>
//                 <span className="breakthrough-rule" />
//                 <p>{item.text}</p>
//               </div>
//               <img src={item.image} alt={item.alt} />
//             </div>
//             <div className="breakthrough-features">
//               {item.features.map((feature) => (
//                 <span key={feature}>{feature}</span>
//               ))}
//             </div>
//             <a href="#businesses" className="btn btn-teal breakthrough-button">
//               {item.cta} <IconArrowRight />
//             </a>
//           </article>
//         ))}
//       </div>
//       <div className="breakthrough-note">
//         <IconShield />
//         <p>
//           Both breakthroughs are backed by clinical research, globally patented,
//           and aligned with international nutrition guidelines — because every
//           decision should be driven by evidence, not assumption.
//         </p>
//         <a href="#foundation" className="link-arrow teal">
//           Learn more about our science <IconArrowRight />
//         </a>
//       </div>
//     </section>
//   );
// }

import { useEffect, useState } from "react";
import breakthroughPatient from "../assets/breakthrough_01_patient.png";
import B1 from "../assets/b_1.png";
import B2 from "../assets/b_2.png";
import B3 from "../assets/b_3.png";
import B4 from "../assets/b_4.png";
import B5 from "../assets/b_5.png";
// import breakthroughNutraIq from "../assets/breakthrough_02_nutra_iq.png";
import {
  IconArrowRight,
  IconChip,
  IconDNA,
  IconShield,
  IconAxis,
  IconRadar,
  IconPulse,
  IconClose,
} from "./Icons.jsx";

const items = [
  {
    label: "BREAKTHROUGH 01",
    title: "Cancer-specific nutritional therapy",
    text: "The world's first stage- and condition-specific onco-nutrition therapy — developed and validated as a clinical intervention to work alongside primary treatment and help it reach its optimal outcome.",
    image: B1,
    // image: null,
    alt: "Patient benefiting from nutritional therapy",
    mark: <IconDNA />,
    features: [
      "Stage & condition specific",
      "Clinically validated intervention",
      "Works alongside cancer treatment",
    ],
    cta: "Explore EON Therapy",
  },
  {
    label: "BREAKTHROUGH 02",
    title: "AI-powered nutritional assessment protocol",
    text: "The world's first AI-powered nutritional assessment protocol — determining, with clinical precision, exactly what a patient's body requires at each stage of treatment.",
    image: B5,
    // image: null,
    alt: "Nutra-IQ nutritional assessment interface",
    mark: <IconChip />,
    features: [
      "AI-powered precision",
      "Personalised to stage of treatment",
      "Early risk detection & better outcomes",
    ],
    cta: "Explore Nutra-IQ",
  },
  {
    label: "BREAKTHROUGH 03",
    title: "DINI Axis",
    text: "DINI Axis is Esperer's patented scientific foundation — a breakthrough framework that decodes how nutrition interacts with the body's core control systems: the brain, the immune system and the inflammatory response, all connected through the gut. Nutrients act as bioactive signals, activating protective pathways and modulating inflammation to influence the body's whole response.",
    // image: null,
    image: B3,
    alt: "",
    mark: <IconAxis />,
    features: [
      "Gut–brain–immune connection",
      "Modulates inflammation",
      "Patented scientific framework",
    ],
    cta: "Explore DiNI Axis",
  },
  {
    label: "BREAKTHROUGH 04",
    title: "Salt Lick-AI — Cancer Risk Assessment",
    text: "An AI/ML-based platform built to flag cancer risk earlier than conventional screening allows, catching patterns that are easy to miss otherwise. Part of our push into early detection — giving clinicians a head start when intervention can make the most difference.",
    // image: null,
    image: B2,
    alt: "",
    mark: <IconRadar />,
    features: [
      "AI/ML risk detection",
      "Earlier than conventional screening",
      "Built for clinical intervention",
    ],
    cta: "Explore Salt Lick-AI",
  },
  {
    label: "BREAKTHROUGH 05",
    title: "Vital IQ — Metabolic Health Screening",
    text: "60 seconds. 20 vital signs. Zero needles. Esperer Group's Vital IQ is reinventing health screening — a clinical-grade, AI-powered scan that reads 20 vital signs in under a minute, with no wearables, no blood draw, and no clinic visit. CDSCO and USFDA licensed. Clinically validated. Built for a world that shouldn't have to choose between speed and precision.",
    // image: null,
    image: B4,
    alt: "",
    mark: <IconPulse />,
    features: [
      "60-second scan",
      "20 vital signs, zero needles",
      "CDSCO & USFDA licensed",
    ],
    cta: "Explore Vital IQ",
  },
];

export default function Breakthroughs() {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e) => e.key === "Escape" && setActiveIndex(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  const active = activeIndex !== null ? items[activeIndex] : null;

  return (
    <section
      className="breakthroughs"
      id="breakthroughs"
      aria-labelledby="breakthroughs-title"
    >
      <div className="breakthroughs-heading">
        <span className="eyebrow eyebrow-orange">OUR BREAKTHROUGHS</span>
        <h2 id="breakthroughs-title">Our Breakthroughs</h2>
        <p>
          Developed within Esperer Nutrition, these breakthroughs are redefining
          how nutrition and technology come together to support cancer care —
          with science, precision and purpose.
        </p>
      </div>

      <div className="breakthrough-grid">
        {items.map((item, index) => (
          <article
            className={`breakthrough-card${item.image ? "" : " no-image"}`}
            key={item.label}
          >
            <div className="breakthrough-card-main">
              <div className="breakthrough-copy">
                <div className="breakthrough-mark">{item.mark}</div>
                <span className="breakthrough-label">{item.label}</span>
                <h3>{item.title}</h3>
                <span className="breakthrough-rule" />
                <p className="breakthrough-text-clamp">{item.text}</p>
              </div>
              {item.image && <img src={item.image} alt={item.alt} />}
            </div>
            <div className="breakthrough-features-button">
              <div className="breakthrough-features">
                {item.features.map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
              </div>
              <button
                type="button"
                className="btn btn-teal breakthrough-button"
                onClick={() => setActiveIndex(index)}
              >
                {item.cta} <IconArrowRight />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* <div className="breakthrough-note">
        <IconShield />
        <p>
          All breakthroughs are backed by clinical research, globally
          patented, and aligned with international nutrition guidelines —
          because every decision should be driven by evidence, not
          assumption.
        </p>
        <a href="#foundation" className="link-arrow teal">
          Learn more about our science <IconArrowRight />
        </a>
      </div> */}

      {active && (
        <div
          className="breakthrough-modal-overlay"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="breakthrough-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="breakthrough-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="breakthrough-modal-close"
              onClick={() => setActiveIndex(null)}
              aria-label="Close"
            >
              <IconClose />
            </button>
            <div className="breakthrough-mark">{active.mark}</div>
            <span className="breakthrough-label">{active.label}</span>
            <h3 id="breakthrough-modal-title">{active.title}</h3>
            <span className="breakthrough-rule" />
            {active.image && (
              <img
                src={active.image}
                alt={active.alt}
                className="breakthrough-modal-image"
              />
            )}
            <p>{active.text}</p>
            <div className="breakthrough-features">
              {active.features.map((feature) => (
                <span key={feature}>{feature}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
