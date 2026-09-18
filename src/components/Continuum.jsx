import {
  IconChip,
  IconDNA,
  IconQuote,
  IconShield,
  IconSprout,
} from "./Icons.jsx";

export default function Continuum({ logos }) {
  const steps = [
    [
      "01",
      <IconShield />,
      "Prevention &\nEarly Detection",
      "Salt Lick",
      logos.saltLick,
      "https://www.saltlick.com",
    ],
    [
      "02",
      <IconDNA />,
      "Treatment",
      "Esperer BioResearch",
      logos.bioResearch,
      "https://www.espererbioresearch.com",
    ],
    [
      "03",
      <IconSprout />,
      "Molecular\nNutrition",
      "Esperer Nutrition",
      logos.nutrition,
      "https://www.esperernutrition.com",
    ],
    [
      "04",
      <IconChip />,
      "Technology",
      "Health Voitho\nTechnologies",
      logos.healthVoitho,
      "https://www.healthvoitho.com",
    ],
  ];
  return (
    <section className="continuum" id="businesses">
      <div className="continuum-left">
        <span className="eyebrow eyebrow-cream">THE CONTINUUM OF CARE</span>
        <h2>
          Every part of the cancer journey,
          <br />
          addressed by a dedicated Esperer business.
        </h2>
        <div className="continuum-steps">
          {steps.map(([num, icon, title, sub, logo, website]) => (
            <div className="continuum-step" key={num}>
              <div className="step-top">
                <span className="step-num">{num}</span>
              </div>
              <p className="step-title">
                {title.split("\n").map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
              <div className="step-sub">
                <a href={website} className="step-business-link" target="_blank" rel="noopener noreferrer">
                  <img src={logo} alt={`${sub.replace("\n", " ")} logo`} />
                  {sub.split("\n").map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="continuum-quote">
        <IconQuote />
        <p>
          Treating the cancer is only one part of curing the patient. The other
          part — helping the body carry that treatment — is what Esperer was
          built to do.
        </p>
        <span>— Dr. Raktim Chattopadhyay</span>
      </div>
    </section>
  );
}
