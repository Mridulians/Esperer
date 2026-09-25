import aiimsLogo from "../assets/aiims_logo.png";
// import icmrLogo from "../assets/icmr_logo.png";
// import icmrLogo from "../assets/images.png";
// import aiimsLogo from "../assets/aiims.png";
import icmrLogo from "../assets/icmr.png";
import apolloLogo from "../assets/apollo_logo.png";
import fortisLogo from "../assets/fortis_logo.png";

import AOI from "../assets/AOI_logo.png"
import MAX from "../assets/Max_logo.png"
import Narayan from "../assets/narayan_logo.png"
import HCG from "../assets/HCG_logo.png"

import "./BusinessLogoStrip.css";

const logos = [
  { name: "AIIMS", src: aiimsLogo },
  { name: "ICMR", src: icmrLogo },
  { name: "Apollo Hospitals", src: apolloLogo },
  { name: "Fortis Healthcare", src: fortisLogo },
  { name: "American Oncology Institute", src: AOI },
  { name: "Max Hospital", src: MAX },
  { name: "Narayan Institute", src: Narayan },
  { name: "HCG", src: HCG },
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