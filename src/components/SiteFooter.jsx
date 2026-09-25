// import { Fragment } from "react";
// import logo from "../assets/logo_with_white_text.png";

// const Icon = ({ children }) => (
//   <svg
//     width="16"
//     height="16"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.4"
//     aria-hidden="true"
//   >
//     {children}
//   </svg>
// );

// const IconArrowRight = ({ size = 13 }) => (
//   <svg
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.8"
//     aria-hidden="true"
//   >
//     <path d="M5 12h14M13 6l6 6-6 6" />
//   </svg>
// );

// const IconMail = () => (
//   <Icon>
//     <rect x="3" y="5" width="18" height="14" rx="1.5" />
//     <path d="M3 6.5l9 6.5 9-6.5" />
//   </Icon>
// );
// const IconPhone = () => (
//   <Icon>
//     <path d="M5 4h3l2 5-2.2 1.6a11 11 0 0 0 5.6 5.6L15 14l5 2v3a2 2 0 0 1-2.2 2C10.6 20.6 3.4 13.4 3 6.2 3 5 4 4 5 4Z" />
//   </Icon>
// );

// const locations = [
//   {
//     flag: "🇮🇳",
//     title: "Corporate Office",
//     lines: [
//       "4BA, 4th Floor, B Wing, Gundecha Onclave, Sakinaka, Andheri East,",
//       "Mumbai - 400072, Maharashtra, India",
//     ],
//   },
//   {
//     flag: "🇮🇳",
//     title: "Distribution Office",
//     lines: [
//       "170, First Floor, Satra Plaza Premises Co-Op. Soc Ltd, Plot No. 19 & 20, Sec-19D, Vashi,",
//       "Navi Mumbai, Maharashtra, India - 400703",
//     ],
//   },
//   {
//     flag: "🇦🇪",
//     title: "Esperer Global LLC",
//     lines: ["Office No. 20B, 18th Floor, The Regal Tower, Business Bay, Dubai, UAE"],
//   },
//   {
//     flag: "🇦🇺",
//     title: "Esperer Nutrition Australia",
//     lines: [
//       "Unit 7-12, 16 Rob Place, Vineyard NSW 2765, Australia",
//       "ACN - 697 415 311",
//     ],
//   },
//    {
//     flag: "🇺🇸",
//     title: "North America Office",
//     lines: ["Unit #11, 142 Belmont Drive, Somerset, New Jersey 08873, USA"],
//   },
// ];

// export default function SiteFooter({ businesses = [] }) {
//   return (
//     <>
//       <section className="cta" id="cta">
//         <h2>
//           Esperer Group —<br />
//           advancing cancer care from prevention to post-care.
//         </h2>
//         <a href="#businesses" className="btn btn-white">
//           Partner With Us <IconArrowRight />
//         </a>
//       </section>
//       <footer className="footer" id="contact">
//         <div className="footer-top">
//           <div className="footer-brand">
//             <img src={logo} alt="Esperer Group" className="brand-logo" />
//             <p>
//               A global oncology innovation enterprise, working across
//               prevention, early detection, treatment, nutrition and enabling
//               technology.
//             </p>
//           </div>
//           <div className="footer-col">
//             <h5>COMPANY</h5>
//             <a href="#">Home</a>
//             <a href="#breakthroughs">Breakthroughs</a>
//             <a href="#businesses">Our Businesses</a>
//             <a href="#about">About Us</a>
//             <a href="#leadership">Leadership</a>
//             {/* <a href="#contact">Contact</a> */}
//           </div>
//           <div className="footer-col">
//             <h5>OUR BUSINESSES</h5>
//             {businesses.map((business) => (
//               <a
//               // href={`/business/${business.slug || business.id}`}
//                 href={business.website || "#"}
//                 key={business.id || business.name}
//               >
//                 {business.name}
//               </a>
//             ))}
//           </div>
//           {/* <div className="footer-col">
//             <h5>RESOURCES</h5>
//             <a href="#">Awards &amp; Recognition</a>
//             <a href="#">Clinical Research</a>
//             <a href="#">Insights</a>
//           </div> */}
//           <div className="footer-col footer-contact">
//             <h5>CONTACT</h5>
//             <p className="footer-contact-email">
//               <IconMail /> businessinquiries@esperernutrition.com
//             </p>
//             <p>
//               <IconPhone /> Toll Free: 1800 890 2671
//             </p>
//           </div>
//         </div>

//         <div className="footer-locations">
//           <h5>OUR LOCATIONS</h5>
//           <div className="footer-locations-grid">
//             {locations.map((location) => (
//               <div className="footer-location" key={location.title}>
//                 <h6>
//                   <span className="footer-location-flag">{location.flag}</span>
//                   {location.title}
//                 </h6>
//                 <p>
//                   {location.lines.map((line, index) => (
//                     <Fragment key={index}>
//                       {line}
//                       {index < location.lines.length - 1 ? <br /> : null}
//                     </Fragment>
//                   ))}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="footer-bottom">
//           <div className="socials">
//             <a href="#" aria-label="LinkedIn">
//               in
//             </a>
//             <a href="#" aria-label="X">
//               x
//             </a>
//             <a href="#" aria-label="Instagram">
//               ig
//             </a>
//           </div>
//           <p>© 2026 ESPERER GROUP. ALL RIGHTS RESERVED.</p>
//         </div>
//       </footer>
//     </>
//   );
// }










import { Fragment } from "react";
import logo from "../assets/logo_with_white_text.png";
// import logo from "../assets/logo_with_black_text.png";
import locationsMap from "../assets/footer_locations_map.png";

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

const IconMapPin = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden="true"
  >
    <path d="M12 21s7-6.6 7-11.5a7 7 0 1 0-14 0C5 14.4 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.3" />
  </svg>
);

const locations = [
  {
    code: "in",
    title: "Corporate Office",
    city: "Mumbai, India",
    lines: [
      "4BA, 4th Floor, B Wing, Gundecha Onclave, Sakinaka,",
      "Andheri East, Mumbai - 400072, Maharashtra, India",
    ],
  },
  {
    code: "in",
    title: "Distribution Office",
    city: "Navi Mumbai, India",
    lines: [
      "170, First Floor, Satra Plaza Premises Co-Op. Soc Ltd, Plot No.",
      "19 & 20, Sec-19D, Vashi, Navi Mumbai, Maharashtra, India - 400703",
    ],
  },
  {
    code: "ae",
    title: "Esperer Global LLC",
    city: "Dubai, UAE",
    lines: [
      "Office No. 20B, 18th Floor, The Regal Tower, Business Bay,",
      "Dubai, UAE",
    ],
  },
  {
    code: "au",
    title: "Esperer Nutrition Australia",
    city: "Vineyard, NSW, Australia",
    lines: [
      "Unit 7-12, 16 Rob Place, Vineyard NSW 2765,",
      "Australia",
    ],
    note: "ACN - 697 415 311",
  },
  {
    code: "us",
    title: "North America Office",
    city: "Somerset, New Jersey, USA",
    lines: [
      "Unit #11, 142 Belmont Drive, Somerset,",
      "New Jersey 08873, USA",
    ],
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
        {/* ---------------- Footer Top ---------------- */}
        <div className="footer-top">
          <div className="footer-brand">
            <img
              src={logo}
              alt="Esperer Group"
              className="brand-logo"
            />

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
          </div>

          <div className="footer-col">
            <h5>OUR BUSINESSES</h5>

            {businesses.map((business) => (
              <a
                href={business.website || "#"}
                key={business.id || business.name}
              >
                {business.name}
              </a>
            ))}
          </div>

          <div className="footer-col footer-contact">
            <h5>CONTACT</h5>

            <p className="footer-contact-email">
              <IconMail />
              businessinquiries@esperernutrition.com
            </p>

            <p>
              <IconPhone />
              Toll Free: 1800 890 2671
            </p>
          </div>
        </div>

        {/* ---------------- Our Locations ---------------- */}
        <div
          className="footer-locations"
          style={{
            "--locations-map": `url(${locationsMap})`,
          }}
        >
          {/* Full-section map background */}
          <div
            className="footer-locations-bg"
            aria-hidden="true"
          />

          {/* Soft overlay to keep text readable */}
          <div
            className="footer-locations-overlay"
            aria-hidden="true"
          />

          <div className="footer-locations-inner">
            <div className="footer-locations-intro">
              <div className="footer-locations-copy">
                <span className="footer-locations-eyebrow">
                  <span className="footer-locations-eyebrow-line" />
                  GLOBAL PRESENCE
                </span>

                <h3 className="footer-locations-heading">
                  Our
                  <br />
                  Locations
                </h3>

                <p className="footer-locations-sub">
                  Different countries. One mission.
                  <br />
                  Better nutrition for a healthier tomorrow.
                </p>

                <a href="#" className="footer-locations-link">
                  <span className="footer-locations-link-icon">
                    <IconArrowRight size={14} />
                  </span>

                  Explore locations
                </a>
              </div>
            </div>

            {/* Locations */}
            <div className="footer-locations-grid">
              {locations.map((location) => (
                <div
                  className="footer-location"
                  key={location.title}
                >
                  <div className="footer-location-flagrow">
                    <img
                      className="footer-location-flag"
                      src={`https://flagcdn.com/w40/${location.code}.png`}
                      width="20"
                      height="14"
                      alt=""
                    />

                    <span className="footer-location-code">
                      {location.code.toUpperCase()}
                    </span>
                  </div>

                  <h6>{location.title}</h6>

                  <p className="footer-location-city">
                    <IconMapPin />
                    {location.city}
                  </p>

                  <p className="footer-location-address">
                    {location.lines.map((line, index) => (
                      <Fragment key={index}>
                        {line}
                        {index < location.lines.length - 1 ? (
                          <br />
                        ) : null}
                      </Fragment>
                    ))}
                  </p>

                  {location.note && (
                    <p className="footer-location-note">
                      {location.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ---------------- Footer Bottom ---------------- */}
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

          <p>
            © 2026 ESPERER GROUP. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </>
  );
}