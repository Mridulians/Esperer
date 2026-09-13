import Woman from "../assets/woman.png";
import { IconLeaf, IconTarget, IconUsers } from "./Icons.jsx";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-image">
        <img src={Woman} alt="Woman looking forward with hope" />
      </div>
      <div className="about-copy">
        <span className="eyebrow eyebrow-orange">ABOUT ESPERER GROUP</span>
        <h2>
          A global enterprise,
          <br />
          built entirely around oncology.
        </h2>
        <p>
          Esperer Group is a research-driven oncology innovation enterprise,
          working across the full arc of cancer care — prevention, early
          detection, treatment, precision nutrition, and long-term survivorship.
          We bring together molecular nutrition, oncology pharmaceuticals,
          medical technology and artificial intelligence into a single
          ecosystem, built to help clinicians, healthcare institutions and
          patients make better decisions and get better outcomes.
        </p>
        <div className="about-features">
          <div className="feature">
            <IconLeaf />
            <h4>Science First</h4>
            <p>
              Everything we do is backed by science, research and clinical
              validation.
            </p>
          </div>
          <div className="feature">
            <IconUsers />
            <h4>Patient Centered</h4>
            <p>
              Our innovations exist to improve the quality of life and long-term
              outcomes.
            </p>
          </div>
          <div className="feature">
            <IconTarget />
            <h4>Global Impact</h4>
            <p>
              Building solutions that reach across borders and transform care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
