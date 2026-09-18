import {
  IconCup,
  IconDNA,
  IconFlask,
  IconGlobe,
  IconLaurel,
  IconMapPin,
  IconMonitor,
  IconShield,
  IconTarget,
  IconUsers,
} from "./Icons.jsx";

export default function Glance() {
  const stats = [
    // [
    //   <IconGlobe />,
    //   "12+ Countries",
    //   "Global footprint across regulated markets",
    // ],
    // [<IconShield />, "6 Global Patents", "In oncology and molecular nutrition"],
    // [<IconFlask />, "World's First", "Stage-specific onco-nutrition therapy"],
    [<IconMonitor />, "1M+ Dosages", "Delivered to patients and growing"],
    [<IconTarget />, "Multicentre Trials", "Validated across geographies"],
    [
      <IconDNA />,
      "Only Therapy of Its Kind",
      "Trialled on a real-world population",
    ],
    [
      <IconMapPin />,
      "Multi-Country Registration",
      "Under respective Ministries of Health",
    ],
    [<IconUsers />, "Institutional Trust", "AIIMS · ICMR · Apollo · Fortis"],
    [<IconLaurel />, "Global Recognition", "Multiple awards for innovation"],
    [<IconCup />, "USFDA-Affirmed", "Manufacturing facility"],
  ];
  return (
    <section className="glance" aria-labelledby="glance-title">
      <div className="glance-inner">
        <div className="glance-heading">
          <span className="eyebrow eyebrow-orange">ESPERER AT A GLANCE</span>
          <h2 id="glance-title">Credibility, at a glance.</h2>
        </div>
        <div className="glance-grid">
          {stats.map(([icon, title, text]) => (
            <article className="glance-item" key={title}>
              <div className="glance-icon" aria-hidden="true">
                {icon}
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
