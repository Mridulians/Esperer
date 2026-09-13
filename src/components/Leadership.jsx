import FounderImg from "../assets/founder_img.jpeg";
import { IconLaurel, IconQuote } from "./Icons.jsx";

export default function Leadership() {
  const awards = [
    "Task Force Member,\nNutraceutical Council,\nOffice of the Principal\nScientific Advisor,\nGovernment of India",
    "Top 20\nHealthcare\nLeaders\nAward",
    "Most Innovative\nHealthcare\nCompany\nAward",
  ];
  return (
    <section className="leadership-section" id="leadership">
      <div className="leadership-image-panel">
        <img
          src={FounderImg}
          alt="Dr. Raktim Chattopadhyay"
          className="leadership-feature-image"
        />
      </div>
      <div className="card leadership-card">
        <span className="eyebrow eyebrow-orange">LEADERSHIP</span>
        <h2>Dr. Raktim Chattopadhyay</h2>
        <p className="leadership-role">Founder, Esperer Group</p>
        <div className="leadership-body">
          <div className="leadership-quote">
            <IconQuote />
            <p>
              Dr. Raktim Chattopadhyay is a cancer researcher and healthcare
              entrepreneur with over 20 years of techno-commercial experience
              across oncology, nephrology and critical care, building and
              scaling businesses across some of the world's most tightly
              regulated healthcare markets.
            </p>
            <br />
            <p>
              He is the originator of the DiNI Axis, a globally patented
              research hypothesis examining the relationship between gut
              microbiota and cancer, which forms the scientific foundation for
              much of the Group's approach to nutrition-led oncology care.
            </p>
          </div>
        </div>
        <div className="awards">
          {awards.map((award) => (
            <div className="award" key={award}>
              <IconLaurel />
              <p>
                {award.split("\n").map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
