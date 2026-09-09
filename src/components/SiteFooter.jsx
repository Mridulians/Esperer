import logo from "../assets/logo_with_white_text.png";

const Icon = ({ children }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    {children}
  </svg>
);

const IconArrowRight = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const IconMapPin = () => <Icon><path d="M12 21s7-6.6 7-11.5a7 7 0 1 0-14 0C5 14.4 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.3" /></Icon>;
const IconMail = () => <Icon><rect x="3" y="5" width="18" height="14" rx="1.5" /><path d="M3 6.5l9 6.5 9-6.5" /></Icon>;
const IconPhone = () => <Icon><path d="M5 4h3l2 5-2.2 1.6a11 11 0 0 0 5.6 5.6L15 14l5 2v3a2 2 0 0 1-2.2 2C10.6 20.6 3.4 13.4 3 6.2 3 5 4 4 5 4Z" /></Icon>;

export default function SiteFooter({ businesses = [] }) {
  return (
    <footer className="footer" id="contact">
      <div className="footer-top">
        <div className="footer-brand">
          <img src={logo} alt="Esperer Group" className="brand-logo" />
          <p>
            A global oncology innovation enterprise, working across prevention,
            early detection, treatment, nutrition and enabling technology.
          </p>
        </div>
        <div className="footer-col">
          <h5>COMPANY</h5>
          <a href="#about">About Us</a>
          <a href="#leadership">Leadership</a>
          <a href="#contact">Careers</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-col">
          <h5>OUR BUSINESSES</h5>
          {businesses.map((business) => (
            <a href={`/business/${business.slug || business.id}`} key={business.id || business.name}>
              {business.name}
            </a>
          ))}
        </div>
        <div className="footer-col">
          <h5>RESOURCES</h5>
          <a href="#">Awards &amp; Recognition</a>
          <a href="#">Clinical Research</a>
          <a href="#">Insights</a>
        </div>
        <div className="footer-col footer-contact">
          <h5>CONTACT</h5>
          <p><IconMapPin /> Mumbai (HQ):<br />Gundecha Onclave, Sakinaka, Andheri East</p>
          <p><IconMail /> info@esperernutrition.com</p>
          <p><IconPhone /> Toll Free: 1800 890 2671</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="socials">
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="X">x</a>
          <a href="#" aria-label="Instagram">ig</a>
        </div>
        <p>© 2026 ESPERER GROUP. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}
