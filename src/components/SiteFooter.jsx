import { Fragment } from "react";
import logo from "../assets/logo_with_white_text.png";

const Icon = ({ children }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const IconArrowRight = ({ size = 13 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden="true"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const IconMail = () => (
  <Icon>
    <rect x="3" y="5" width="18" height="14" rx="1.5" />
    <path d="M3 6.5l9 6.5 9-6.5" />
  </Icon>
);
const IconPhone = () => (
  <Icon>
    <path d="M5 4h3l2 5-2.2 1.6a11 11 0 0 0 5.6 5.6L15 14l5 2v3a2 2 0 0 1-2.2 2C10.6 20.6 3.4 13.4 3 6.2 3 5 4 4 5 4Z" />
  </Icon>
);

const locations = [
  {
    flag: "🇮🇳",
    title: "Corporate Office",
    lines: [
      "4BA, 4th Floor, B Wing, Gundecha Onclave, Sakinaka, Andheri East,",
      "Mumbai - 400072, Maharashtra, India",
    ],
  },
  {
    flag: "🇮🇳",
    title: "Distribution Office",
    lines: [
      "170, First Floor, Satra Plaza Premises Co-Op. Soc Ltd, Plot No. 19 & 20, Sec-19D, Vashi,",
      "Navi Mumbai, Maharashtra, India - 400703",
    ],
  },
  {
    flag: "🇦🇪",
    title: "Esperer Global LLC",
    lines: ["Office No. 20B, 18th Floor, The Regal Tower, Business Bay, Dubai, UAE"],
  },
  {
    flag: "🇦🇺",
    title: "Esperer Nutrition Australia",
    lines: [
      "Unit 7-12, 16 Rob Place, Vineyard NSW 2765, Australia",
      "ACN - 697 415 311",
    ],
  },
   {
    flag: "🇺🇸",
    title: "North America Office",
    lines: ["Unit #11, 142 Belmont Drive, Somerset, New Jersey 08873, USA"],
  },
];

export default function SiteFooter({ businesses = [] }) {
  return (
    <>
      <section className="cta" id="cta">
        <h2>
          Esperer Group —<br />
          advancing cancer care from prevention to post-care.
        </h2>
        <a href="#businesses" className="btn btn-white">
          Partner With Us <IconArrowRight />
        </a>
      </section>
      <footer className="footer" id="contact">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={logo} alt="Esperer Group" className="brand-logo" />
            <p>
              A global oncology innovation enterprise, working across
              prevention, early detection, treatment, nutrition and enabling
              technology.
            </p>
          </div>
          <div className="footer-col">
            <h5>COMPANY</h5>
            <a href="#">Home</a>
            <a href="#breakthroughs">Breakthroughs</a>
            <a href="#businesses">Our Businesses</a>
            <a href="#about">About Us</a>
            <a href="#leadership">Leadership</a>
            {/* <a href="#contact">Contact</a> */}
          </div>
          <div className="footer-col">
            <h5>OUR BUSINESSES</h5>
            {businesses.map((business) => (
              <a
              // href={`/business/${business.slug || business.id}`}
                href={business.website || "#"}
                key={business.id || business.name}
              >
                {business.name}
              </a>
            ))}
          </div>
          {/* <div className="footer-col">
            <h5>RESOURCES</h5>
            <a href="#">Awards &amp; Recognition</a>
            <a href="#">Clinical Research</a>
            <a href="#">Insights</a>
          </div> */}
          <div className="footer-col footer-contact">
            <h5>CONTACT</h5>
            <p>
              <IconMail /> businessinquiries@esperernutrition.com
            </p>
            <p>
              <IconPhone /> Toll Free: 1800 890 2671
            </p>
          </div>
        </div>

        <div className="footer-locations">
          <h5>OUR LOCATIONS</h5>
          <div className="footer-locations-grid">
            {locations.map((location) => (
              <div className="footer-location" key={location.title}>
                <h6>
                  <span className="footer-location-flag">{location.flag}</span>
                  {location.title}
                </h6>
                <p>
                  {location.lines.map((line, index) => (
                    <Fragment key={index}>
                      {line}
                      {index < location.lines.length - 1 ? <br /> : null}
                    </Fragment>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="socials">
            <a href="#" aria-label="LinkedIn">
              in
            </a>
            <a href="#" aria-label="X">
              x
            </a>
            <a href="#" aria-label="Instagram">
              ig
            </a>
          </div>
          <p>© 2026 ESPERER GROUP. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </>
  );
}
