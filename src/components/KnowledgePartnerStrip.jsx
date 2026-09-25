import { IconArrowRight } from "./Icons.jsx";
// import EiomLogo from "../assets/EiomLogo2.png";
// import EiomLogo from "../assets/Eioms_new_logo.png";
import EiomLogo from "../assets/eioms.png";
import "./KnowledgePartnerStrip.css";

export default function KnowledgePartnerStrip() {
  return (
    <aside className="knowledge-partner-strip" aria-label="EIOMS knowledge partner">
      <div className="knowledge-partner-identity">
        <div className="knowledge-partner-brand">
          {/* Temporary logo until the original EIOMS asset is supplied. */}
          <img src={EiomLogo} alt="Eioms" width="40" height="40" />
          {/* <span>EIOMS</span> */}
        </div>
        <span className="knowledge-partner-divider" aria-hidden="true" />
        <span className="knowledge-partner-label">Knowledge Partner</span>
      </div>
      <a
        className="knowledge-partner-link"
        href="https://mridul.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit EIOMS (opens in a new tab)"
      >
        Visit EIOMS
        <span className="knowledge-partner-icons" aria-hidden="true">
          <IconArrowRight size={16} />
          {/* <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 3h7v7M21 3 11 13M10 5H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
          </svg> */}
        </span>
      </a>
    </aside>
  );
}
