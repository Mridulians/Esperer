// import MapImg from "../assets/map_img.png";
import MapImg from "../assets/map_img_new.png";
import "./CredibilityFootprint.css";

/* ---------------- Local icons (self-contained for this component) ---------------- */
const IconFlask = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M9 3h6M10 3v6l-5.2 8.8A1.5 1.5 0 0 0 6.1 20h11.8a1.5 1.5 0 0 0 1.3-2.2L14 9V3" />
    <path d="M8 15h8" />
  </svg>
);

const IconTarget = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

const IconDNA = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M7 3c0 5 10 5 10 10s-10 5-10 10" />
    <path d="M17 3c0 5-10 5-10 10s10 5 10 10" />
    <path d="M8 7h8M7.5 12h9M8 17h8" />
  </svg>
);

const IconMapPin = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M12 21s7-6.6 7-11.5a7 7 0 1 0-14 0C5 14.4 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.3" />
  </svg>
);

const IconUsers = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <circle cx="9" cy="8" r="3" />
    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    <circle cx="17" cy="9" r="2.4" />
    <path d="M15.5 14.2c2.6.4 4.5 2.6 4.5 5.3" />
  </svg>
);

const IconAward = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <circle cx="12" cy="8.5" r="5.5" />
    <path d="M8.5 13.2 7 21l5-2.6 5 2.6-1.5-7.8" />
  </svg>
);

const IconShieldCheck = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M12 3l7 3v6c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6l7-3Z" />
    <path d="M9 12.2l2 2 4-4.2" />
  </svg>
);

const IconGlobe = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" />
  </svg>
);

const IconBadge = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <circle cx="12" cy="9" r="6" />
    <path d="M9 8.6l2 2 3.5-3.6" />
    <path d="M8.3 14 6.5 21l5.5-2.8L17.5 21l-1.8-7" />
  </svg>
);

/* ---------------- Data ---------------- */
const impactItems = [
  {
    icon: <IconFlask />,
    title: "1M+ Dosages",
    desc: "Delivered to patients and growing",
  },
  {
    icon: <IconTarget />,
    title: "Multicentre Trials",
    desc: "Validated across geographies",
  },
  {
    icon: <IconDNA />,
    title: "Only Therapy of Its Kind",
    desc: "Trialled on a real-world population",
  },
  {
    icon: <IconMapPin />,
    title: "Multi-Country Registration",
    desc: "Under respective Ministries of Health",
  },
  {
    icon: <IconUsers />,
    title: "Institutional Trust",
    desc: "AIIMS · ICMR · Apollo · Fortis",
  },
//   {
//     icon: <IconAward />,
//     title: "Global Recognition",
//     desc: "Multiple awards for innovation",
//   },
  {
    icon: <IconShieldCheck />,
    title: "USFDA- Affirmed",
    desc: "Manufacturing facility",
  },
];

const footerStats = [
  {
    icon: <IconGlobe />,
    value: "12+",
    label: "Countries",
    desc: "Global footprint across regulated markets",
  },
  {
    icon: <IconDNA />,
    value: "7+",
    label: "Global Patents",
    desc: "In oncology & molecular nutrition",
  },
  {
    icon: <IconBadge />,
    value: "1",
    label: "World's First",
    desc: "Stage-specific onco-nutrition therapy.",
  },
];

export default function CredibilityFootprint() {
  return (
    <section className="credibility" id="credibility">
      <div className="credibility-top">
        <div className="credibility-copy">
          <span className="credibility-eyebrow">OUR IMPACT</span>
          <h2 className="credibility-heading">
            Credibility &amp; Global Footprint<span className="credibility-dot">.</span>
          </h2>
          <p className="credibility-desc">
            Backed by strong scientific validation, strategic partnerships
            and a growing global presence, Esperer is advancing cancer care
            across borders and beyond.
          </p>

          <div className="credibility-grid">
            {impactItems.map((item) => (
              <div className="credibility-item" key={item.title}>
                <div className="credibility-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="credibility-map">
          <img src={MapImg} alt="World map of Esperer's global footprint" />
        </div>
      </div>

      <div className="credibility-footer">
        <div className="credibility-footer-intro">
          <div className="credibility-footer-icon">
            <IconGlobe />
          </div>
          <div>
            <span className="credibility-footer-label">GLOBAL FOOTPRINT</span>
            <p>
              Our science is available across 12+ countries in some of the
              world's most tightly regulated healthcare markets.
            </p>
          </div>
        </div>

        {footerStats.map((stat) => (
          <div className="credibility-footer-stat" key={stat.label}>
            <div className="credibility-footer-icon">{stat.icon}</div>
            <div>
              <h3>{stat.value}</h3>
              <p className="credibility-footer-stat-label">{stat.label}</p>
              <p className="credibility-footer-stat-desc">{stat.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
