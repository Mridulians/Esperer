import aiimsLogo from "../assets/aiims_logo.png";
import icmrLogo from "../assets/icmr_logo.png";
import apolloLogo from "../assets/apollo_logo.png";
import fortisLogo from "../assets/fortis_logo.png";

import "./BusinessLogoStrip.css";

const logos = [
  { name: "AIIMS", src: aiimsLogo },
  { name: "ICMR", src: icmrLogo },
  { name: "Apollo Hospitals", src: apolloLogo },
  { name: "Fortis Healthcare", src: fortisLogo },
];

const LogoGroup = ({ duplicate = false }) => (
  <div className="trust-group" aria-hidden={duplicate}>
    {logos.map((logo) => (
      <div className="trust-logo" key={logo.name}>
        <img src={logo.src} alt={duplicate ? "" : logo.name} />
      </div>
    ))}
  </div>
);

export default function BusinessLogoStrip() {
  return (
    <section
      className="trust-section"
      id="institutional-trust"
      aria-labelledby="trust-title"
    >
      <div className="trust-heading">

        <h2 id="trust-title">
          Backed by leading institutions
        </h2>
      </div>

      <div className="trust-marquee">
        <div className="trust-track">
          <LogoGroup />
          <LogoGroup duplicate />
          <LogoGroup duplicate />
        </div>
      </div>
    </section>
  );
}