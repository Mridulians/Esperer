import { useEffect } from "react";
import SiteFooter from "../components/SiteFooter.jsx";
import SiteHeader from "../components/SiteHeader.jsx";
import eiomsBuildingEvening from "../assets/Eioms_1.jpg";
import eiomsBuildingDay from "../assets/Eioms_2.jpg";
import "./EiomsPage.css";

const purposeAreas = [
  "Multidisciplinary research across oncology, metabolism, nutrition, microbiome science, immunology and systems biology.",
  "Strategies for precision prevention, supportive oncology and healthy longevity.",
  "Translation of research into clinical practice through implementation science and healthcare innovation.",
  "Academic capacity through fellowships, certificate programmes and continuing professional education.",
  "Collaboration across academia, healthcare institutions, industry, government and international partners.",
];

const pillars = [
  {
    number: "01",
    name: "Research",
    description:
      "Discovery science and translational research in oncology, metabolic health, nutrition and systems biology.",
  },
  {
    number: "02",
    name: "Education",
    description:
      "Academic programmes, professional fellowships and interdisciplinary learning that equip practitioners and researchers to translate evidence into practice.",
  },
  {
    number: "03",
    name: "Innovation",
    description:
      "Novel models of care, digital health solutions, clinical delivery support, and innovations across implementation frameworks.",
  },
  {
    number: "04",
    name: "Impact",
    description:
      "Partnerships with healthcare systems, policymakers and professionals to translate commitments into measurable improvements in care.",
  },
];

const platforms = [
  "Clinical Oncology & Supportive Oncology",
  "Metabolic Resilience & Systems Medicine",
  "Gut Microbiome & Host–Microbe Interactions",
  "Precision Prevention & Healthy Longevity",
  "Immunometabolism & Chronic Inflammation",
  "Nutritional & Functional Food Research",
  "AI & Data Intelligence in Digital Health",
];

const programmes = [
  {
    name: "EON Therapy",
    partner: "Esperer Nutrition",
    description:
      "Nutrition organised around the treatment journey—before, during and after therapy—to complement oncology care and support quality of life.",
  },
  {
    name: "DNL Axis",
    partner: "Esperer Nutrition",
    description:
      "Research exploring the relationship between metabolism, nutrition and cancer biology to inform precision nutrition approaches.",
  },
  {
    name: "Antibody–Drug Conjugates",
    partner: "Esperer BioResearch",
    description:
      "Targeted therapeutic research bringing together antibody science and drug delivery in the pursuit of more selective cancer treatment.",
  },
  {
    name: "Nano-Therapeutics",
    partner: "Esperer BioResearch",
    description:
      "Research into nanotechnology-enabled approaches to drug delivery and the development of next-generation therapeutics.",
  },
  {
    name: "ACM(SI)",
    partner: "Health Voitho Technologies",
    description:
      "A multidisciplinary programme connecting research, technology and clinical practice to support better-informed care.",
  },
  {
    name: "EII — Early Cancer Interception",
    partner: "Health Voitho Technologies",
    description:
      "A proposed framework for detecting and acting on early changes in cancer biology before disease progresses.",
  },
];

const learningSteps = [
  "Understand",
  "Measure",
  "Interpret",
  "Translate",
  "Transform",
];

const publications = [
  "A polyherbal and probiotic-based immunonutrient formulation for managing gut dysbiosis in colorectal cancer",
  "Communication in non-communicable diseases (NCDs) and the role of immunomodulatory nutraceuticals in their management",
  "EON Therapy: a nutritional approach to cachexia and quality of life in cancer patients",
];

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className={`eioms-section-heading${light ? " is-light" : ""}`}>
      <span className="eioms-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export default function EiomsPage({ businesses = [] }) {
  useEffect(() => {
    document.title = "EIOMS | Esperer Group";
    return () => {
      document.title = "Esperer Group";
    };
  }, []);

  return (
    <div className="page eioms-page">
      <SiteHeader />
      <main>
        <section className="eioms-hero">
          <div className="eioms-hero-copy">
            {/* <a href="/" className="eioms-back-link">
              <span aria-hidden="true">←</span> Back to Esperer Group
            </a> */}
            <span className="eioms-eyebrow">The science behind healthier futures</span>
            <h1>Esperer Institute of Oncology &amp; Metabolic Sciences</h1>
            <p>
              A multidisciplinary centre of excellence advancing research,
              education and innovation in oncology, metabolic health and
              precision prevention—translating biological discovery into
              clinical practice and population health.
            </p>
            <span className="eioms-hero-mantra">
              Reimagining healthcare through science, translation and health
              creation.
            </span>
          </div>
          <div className="eioms-hero-image">
            <img
              src={eiomsBuildingEvening}
              alt="EIOMS institute illuminated at dusk"
              fetchPriority="high"
            />
            <span className="eioms-image-caption">Research. Education. Impact.</span>
          </div>
          {/* <div className="eioms-hero-index" aria-hidden="true">
            <span>01</span>
            <span />
            <span>06</span>
          </div> */}
        </section>

        <section className="eioms-resilience eioms-section" id="purpose">
          <div className="eioms-section-inner eioms-resilience-grid">
            <div className="eioms-resilience-title">
              <span className="eioms-eyebrow">A systems view of biology</span>
              <h2>
                Health is an adaptive biological state—not merely the absence
                of disease.
              </h2>
            </div>
            <div className="eioms-resilience-copy">
              <p>
                EIOMS is built on the principle of <strong>metabolic resilience</strong>:
                the capacity of biological systems to maintain balance under
                metabolic, inflammatory, environmental and psychosocial stress.
              </p>
              <p>
                Cancer and other non-communicable diseases arise from complex
                biological pathways—metabolic dysregulation, chronic
                inflammation, immune dysfunction, microbiome alteration and
                neuroendocrine imbalance.
              </p>
              <p>
                EIOMS brings these threads together in a single, systems-based
                framework that connects molecular science with clinical
                practice and community health, advancing evidence-based
                prevention, early intervention and personalised care.
              </p>
            </div>
            <div className="eioms-resilience-note">
              <span aria-hidden="true">“</span>
              <p>One connected view of health, from biology to communities.</p>
            </div>
          </div>
        </section>

        <section className="eioms-institute eioms-section" id="institute">
          <div className="eioms-section-inner eioms-institute-grid">
            <div className="eioms-institute-image">
              <img
                src={eiomsBuildingDay}
                alt="The EIOMS institute and its welcoming campus"
                loading="lazy"
              />
              <span className="eioms-photo-index">EIOMS · A PLACE FOR DISCOVERY</span>
            </div>
            <div className="eioms-institute-copy">
              <span className="eioms-eyebrow">The institute</span>
              <h2>A home for research, education and translation under one roof.</h2>
              <p>
                EIOMS creates a shared home for the people and ideas shaping
                the next generation of oncology and metabolic science. By
                bringing discovery, learning and implementation together, the
                institute helps move promising knowledge closer to everyday
                healthcare.
              </p>
              {/* <a className="eioms-text-link" href="#what-we-do">
                Explore what we do <ArrowIcon />
              </a> */}
            </div>
          </div>
        </section>

        <section className="eioms-purpose eioms-section" id="what-we-do">
          <div className="eioms-section-inner">
            <SectionHeading
              eyebrow="What EIOMS does"
              title="Generating and translating scientific knowledge across the continuum of health and disease."
            />
            <div className="eioms-purpose-layout">
              <div className="eioms-purpose-intro">
                <span className="eioms-purpose-mark" aria-hidden="true">E</span>
                <p>
                  From foundational discovery to better-informed care, we
                  connect disciplines and partners around one scientific
                  purpose.
                </p>
              </div>
              <ul className="eioms-purpose-list">
                {purposeAreas.map((area, index) => (
                  <li key={area}>
                    <span className="eioms-list-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{area}</span>
                    {/* <span className="eioms-list-arrow" aria-hidden="true">↗</span> */}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="eioms-pillars eioms-section" id="pillars">
          <div className="eioms-section-inner">
            <SectionHeading
              eyebrow="The EIOMS framework"
              title="Interconnected pillars, one scientific purpose."
              description="A connected model for turning rigorous inquiry into meaningful, lasting progress."
            />
            <div className="eioms-pillar-grid">
              {pillars.map((pillar) => (
                <article className="eioms-pillar-card" key={pillar.name}>
                  <span className="eioms-pillar-number">{pillar.number}</span>
                  <h3>{pillar.name}</h3>
                  <p>{pillar.description}</p>
                  <span className="eioms-pillar-rule" aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="eioms-platforms eioms-section" id="platforms">
          <div className="eioms-section-inner">
            <SectionHeading
              eyebrow="Our focus areas"
              title="Platforms that connect laboratory science, clinical research, digital health and implementation."
              light
            />
            <div className="eioms-platform-grid">
              {platforms.map((platform, index) => (
                <article className="eioms-platform-card" key={platform}>
                  <span className="eioms-platform-index">
                    0{index + 1}
                  </span>
                  <h3>{platform}</h3>
                  {/* <span className="eioms-platform-arrow" aria-hidden="true">↗</span> */}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="eioms-programmes eioms-section" id="programmes">
          <div className="eioms-section-inner">
            <SectionHeading
              eyebrow="From insight to impact"
              title="From scientific insight to clinical relevance."
              description="EIOMS serves as the scientific innovation hub for research programmes carried forward by Esperer Group businesses—each following the same translational principle."
            />
            <div className="eioms-programme-table" role="list">
              {programmes.map((programme, index) => (
                <article
                  className="eioms-programme-row"
                  key={programme.name}
                  role="listitem"
                >
                  <span className="eioms-programme-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{programme.name}</h3>
                  <span className="eioms-programme-partner">{programme.partner}</span>
                  <p>{programme.description}</p>
                  {/* <span className="eioms-programme-arrow" aria-hidden="true">↗</span> */}
                </article>
              ))}
            </div>
            <p className="eioms-programme-note">
              Programmes are at different stages of development. Their
              descriptions reflect areas of investigation, not clinical
              recommendations.
            </p>
          </div>
        </section>

        <section className="eioms-academy eioms-section" id="academy">
          <div className="eioms-section-inner eioms-academy-grid">
            <div>
              <span className="eioms-eyebrow">EIOMS Academy</span>
              <h2>The educational and capacity-building arm of EIOMS.</h2>
            </div>
            <div className="eioms-academy-copy">
              <p>
                Through fellowships, executive programmes, certificate courses
                and continuing professional development, EIOMS Academy equips
                clinicians, researchers, dietitians, pharmacists, nurses and
                public health professionals with competencies in precision
                prevention, metabolic health, implementation science and
                supportive oncology.
              </p>
              <p>
                Every programme is built on the same framework: translating
                rigorous science into real-world healthcare impact.
              </p>
            </div>
            <div className="eioms-learning-path" aria-label="Learning journey">
              {learningSteps.map((step, index) => (
                <div className="eioms-learning-step" key={step}>
                  <span>0{index + 1}</span>
                  <strong>{step}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="eioms-expertise eioms-section" id="expertise">
          <div className="eioms-section-inner eioms-expertise-grid">
            <div className="eioms-expertise-title">
              <span className="eioms-eyebrow">A collaborative ecosystem</span>
              <h2>Diverse expertise converging on shared evidence.</h2>
            </div>
            <div className="eioms-expertise-copy">
              <p>
                EIOMS brings together clinicians and oncologists, physicians,
                nutritionists and dietitians, biomedical scientists and
                molecular biologists, pharmacologists, implementation and data
                scientists, public health professionals, research fellows,
                academicians, industry partners, patient advocacy groups and
                academic institutions.
              </p>
              <p>
                By connecting research, clinical practice, education and
                policy, EIOMS builds an environment where evidence is
                generated, innovation is translated, and improvements in
                patient care and population health are sustained.
              </p>
              <div className="eioms-expertise-tags" aria-label="Areas of collaboration">
                {["Research", "Clinical practice", "Education", "Industry", "Policy"].map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="eioms-publications eioms-section" id="publications">
          <div className="eioms-section-inner eioms-publications-grid">
            <div className="eioms-publications-intro">
              <span className="eioms-eyebrow">Selected publications</span>
              <h2>Peer-reviewed work behind the programmes.</h2>
              <p>
                A growing body of research informs EIOMS’ interdisciplinary
                framework for translating science into better health.
              </p>
            </div>
            <ol className="eioms-publication-list">
              {publications.map((publication, index) => (
                <li key={publication}>
                  <span className="eioms-publication-index">
                    0{index + 1}
                  </span>
                  <div>
                    <h3>{publication}</h3>
                    <span>Peer-reviewed research · EIOMS research portfolio</span>
                  </div>
                  {/* <span className="eioms-publication-mark" aria-hidden="true">↗</span> */}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="eioms-closing">
          <div className="eioms-closing-mark" aria-hidden="true">EIOMS</div>
          <span className="eioms-eyebrow">A shared commitment to better health</span>
          <h2>Where science, education and implementation converge.</h2>
          <p>
            Advancing connected thinking across oncology, metabolic science
            and the future of care.
          </p>
          {/* <div className="eioms-closing-actions">
            <a className="eioms-button eioms-button-gold" href="/#businesses">
              Visit Esperer Group <ArrowIcon />
            </a>
            <a className="eioms-button eioms-button-outline" href="/#contact">
              Collaborate with EIOMS <ArrowIcon />
            </a>
          </div> */}
        </section>
      </main>
      <SiteFooter businesses={businesses} standalone />
    </div>
  );
}
