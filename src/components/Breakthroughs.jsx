import breakthroughPatient from "../assets/breakthrough_01_patient.png";
import breakthroughNutraIq from "../assets/breakthrough_02_nutra_iq.png";
import { IconArrowRight, IconChip, IconDNA, IconShield } from "./Icons.jsx";

export default function Breakthroughs() {
  const items = [
    {
      label: "BREAKTHROUGH 01",
      title: "Cancer-specific nutritional therapy",
      text: "The world's first stage- and condition-specific onco-nutrition therapy — developed and validated as a clinical intervention to work alongside primary treatment and help it reach its optimal outcome.",
      image: breakthroughPatient,
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
      image: breakthroughNutraIq,
      alt: "Nutra-IQ nutritional assessment interface",
      mark: <IconChip />,
      features: [
        "AI-powered precision",
        "Personalised to stage of treatment",
        "Early risk detection & better outcomes",
      ],
      cta: "Explore Nutra-IQ",
    },
  ];
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
          Developed within Esperer Nutrition, these two pioneering innovations
          are redefining how nutrition supports cancer treatment — with science,
          precision and purpose.
        </p>
      </div>
      <div className="breakthrough-grid">
        {items.map((item) => (
          <article className="breakthrough-card" key={item.label}>
            <div className="breakthrough-card-main">
              <div className="breakthrough-copy">
                <div className="breakthrough-mark">{item.mark}</div>
                <span className="breakthrough-label">{item.label}</span>
                <h3>{item.title}</h3>
                <span className="breakthrough-rule" />
                <p>{item.text}</p>
              </div>
              <img src={item.image} alt={item.alt} />
            </div>
            <div className="breakthrough-features">
              {item.features.map((feature) => (
                <span key={feature}>{feature}</span>
              ))}
            </div>
            <a href="#businesses" className="btn btn-teal breakthrough-button">
              {item.cta} <IconArrowRight />
            </a>
          </article>
        ))}
      </div>
      <div className="breakthrough-note">
        <IconShield />
        <p>
          Both breakthroughs are backed by clinical research, globally patented,
          and aligned with international nutrition guidelines — because every
          decision should be driven by evidence, not assumption.
        </p>
        <a href="#foundation" className="link-arrow teal">
          Learn more about our science <IconArrowRight />
        </a>
      </div>
    </section>
  );
}
