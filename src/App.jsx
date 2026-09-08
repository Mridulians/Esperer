import { useEffect, useRef, useState } from "react";
import {
  insightFlasks,
  insightAI,
  insightMicroscope,
} from "./assets/images.js";
import logo from "./assets/logo_with_black_text.png";
import Woman from "./assets/woman.png";
import MapImg from "./assets/map_img.png";
import nutritionLogo from "./assets/esperer_nutrition.png";
import bioResearchLogo from "./assets/Esperer_bioresearch.png";
import healthVoithoLogo from "./assets/health_voitho.png";
import saltLickLogo from "./assets/salt_lick.png";
import SliderImg from "./assets/Slider_img.png";
import SliderImg2 from "./assets/Slider_img2.png";
import SliderImg3 from "./assets/Slider_img3.png";
import SliderImg4 from "./assets/Slider_img4.png";
import breakthroughPatient from "./assets/breakthrough_01_patient.png";
import breakthroughNutraIq from "./assets/breakthrough_02_nutra_iq.png";
import FounderImg from "./assets/founder_img.jpeg";
import SiteFooter from "./components/SiteFooter.jsx";
import SiteHeader from "./components/SiteHeader.jsx";
import BusinessDetailPage from "./pages/BusinessDetailPage.jsx";
import "./assets/esperer-globe.js";
import "./App.css";

/* ---------- Icons (inline SVG, thin-line style) ---------- */

const IconLeaf = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
  >
    <path d="M5 21c8-1 13-6 14-14-8 1-13 6-14 14Z" />
    <path d="M5 21c1-5 4-9 9-11" />
  </svg>
);

const IconUsers = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
  >
    <circle cx="9" cy="8" r="3" />
    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    <circle cx="17" cy="9" r="2.4" />
    <path d="M15.5 14.2c2.6.4 4.5 2.6 4.5 5.3" />
  </svg>
);

const IconTarget = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
  >
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

const IconShield = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
  >
    <path d="M12 3l7 3v6c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6l7-3Z" />
  </svg>
);

const IconDNA = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
  >
    <path d="M7 3c0 5 10 5 10 10s-10 5-10 10" />
    <path d="M17 3c0 5-10 5-10 10s10 5 10 10" />
    <path d="M8 7h8M7.5 12h9M8 17h8" />
  </svg>
);

const IconSprout = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
  >
    <path d="M12 21V11" />
    <path d="M12 12C12 8 9 6 5 6c0 4 3 6 7 6Z" />
    <path d="M12 10c0-3.5 2.5-5.5 6-5.5.2 3.7-2.3 6-6 5.5Z" />
  </svg>
);

const IconChip = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
  >
    <rect x="6" y="6" width="12" height="12" rx="1.5" />
    <path d="M9 6V3M15 6V3M9 21v-3M15 21v-3M6 9H3M6 15H3M21 9h-3M21 15h-3" />
    <circle cx="12" cy="12" r="2.2" />
  </svg>
);

const IconCup = () => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
  >
    <path d="M5 8h11v5a5.5 5.5 0 0 1-5.5 5.5A5.5 5.5 0 0 1 5 13V8Z" />
    <path d="M16 9h1.5a2.5 2.5 0 0 1 0 5H16" />
    <path d="M9 3c-.8.8-.8 1.6 0 2.4M12 3c-.8.8-.8 1.6 0 2.4" />
  </svg>
);

const IconFlask = () => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
  >
    <path d="M9 3h6M10 3v6l-5.2 8.8A1.5 1.5 0 0 0 6.1 20h11.8a1.5 1.5 0 0 0 1.3-2.2L14 9V3" />
    <path d="M8 15h8" />
  </svg>
);

const IconMonitor = () => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
  >
    <rect x="3" y="4" width="18" height="12" rx="1.5" />
    <path d="M8 21h8M12 16v5" />
    <path d="M7 13l3-3 2 2 4-4" />
  </svg>
);

const IconQuote = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.5 6C6.5 7 4.5 9.7 4.5 13c0 2.5 1.7 4.2 3.8 4.2 1.9 0 3.3-1.4 3.3-3.2 0-1.7-1.1-2.9-2.7-3-.1-1.7 1-3.2 2.8-4l-2.2-1Zm9 0c-3 1-5 3.7-5 7 0 2.5 1.7 4.2 3.8 4.2 1.9 0 3.3-1.4 3.3-3.2 0-1.7-1.1-2.9-2.7-3-.1-1.7 1-3.2 2.8-4l-2.2-1Z" />
  </svg>
);

const IconArrowRight = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const IconGlobe = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" />
  </svg>
);

const IconLaurel = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.1"
  >
    <path d="M6 20C3 15 3 9 6 4" />
    <path d="M18 20c3-5 3-11 0-16" />
    <path d="M6 6c2 0 3 1 3 2M6 9c2 0 3 1 3 2M6 12c2 0 3 1 3 2M6 15c2 0 3 1 3 2" />
    <path d="M18 6c-2 0-3 1-3 2M18 9c-2 0-3 1-3 2M18 12c-2 0-3 1-3 2M18 15c-2 0-3 1-3 2" />
    <path d="M9 20h6" />
  </svg>
);

const IconMapPin = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
  >
    <path d="M12 21s7-6.6 7-11.5a7 7 0 1 0-14 0C5 14.4 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.3" />
  </svg>
);

const IconMail = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
  >
    <rect x="3" y="5" width="18" height="14" rx="1.5" />
    <path d="M3 6.5l9 6.5 9-6.5" />
  </svg>
);

const IconPhone = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
  >
    <path d="M5 4h3l2 5-2.2 1.6a11 11 0 0 0 5.6 5.6L15 14l5 2v3a2 2 0 0 1-2.2 2C10.6 20.6 3.4 13.4 3 6.2 3 5 4 4 5 4Z" />
  </svg>
);

const IconLinkedIn = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM9.5 9H13v1.7h.05c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.6V21h-4v-5.7c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.8h-4z" />
  </svg>
);

const IconX = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7l-5.5-7.2L4.4 22H1.3l8.1-9.3L1 2h7.2l5 6.6L18.9 2Zm-1.2 18h1.7L7.4 3.9H5.6L17.7 20Z" />
  </svg>
);

const IconInstagram = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
  </svg>
);

/* ---------- Data ---------- */

const continuumSteps = [
  {
    num: "01",
    icon: <IconShield />,
    title: "Prevention &\nEarly Detection",
    sub: "Salt Lick",
    logo: saltLickLogo,
  },
  {
    num: "02",
    icon: <IconDNA />,
    title: "Treatment",
    sub: "Esperer BioResearch",
    logo: bioResearchLogo,
  },
  {
    num: "03",
    icon: <IconSprout />,
    title: "Molecular\nNutrition",
    sub: "Esperer Nutrition",
    logo: nutritionLogo,
  },
  {
    num: "04",
    icon: <IconChip />,
    title: "Technology",
    sub: "Health Voitho\nTechnologies",
    logo: healthVoithoLogo,
  },
];

const insights = [
  {
    img: insightFlasks,
    date: "MAY 10, 2025",
    title: "The role of molecular nutrition in improving cancer outcomes.",
  },
  {
    img: insightAI,
    date: "APR 25, 2025",
    title: "AI and machine learning in the future of oncology.",
  },
  {
    img: insightMicroscope,
    date: "APR 15, 2025",
    title: "Why early detection can change everything.",
  },
];

const awards = [
  "Task Force Member,\nNutraceutical Council,\nOffice of the Principal\nScientific Advisor,\nGovernment of India",
  "Top 20\nHealthcare\nLeaders\nAward",
  "Most Innovative\nHealthcare\nCompany\nAward",
];

const globalStats = [
  {
    value: 12,
    suffix: "+",
    label: "Countries",
    description: "Global footprint across regulated markets",
  },
  {
    value: 6,
    suffix: "+",
    label: "Global Patents",
    description: "In oncology & molecular nutrition",
  },
  {
    value: 1,
    suffix: "",
    label: "World's First",
    description: "Stage-specific onco-nutrition therapy.",
  },
];

const glanceStats = [
  {
    icon: <IconGlobe />,
    title: "12+ Countries",
    text: "Global footprint across regulated markets",
  },
  {
    icon: <IconShield />,
    title: "6 Global Patents",
    text: "In oncology and molecular nutrition",
  },
  {
    icon: <IconFlask />,
    title: "World's First",
    text: "Stage-specific onco-nutrition therapy",
  },
  {
    icon: <IconMonitor />,
    title: "1M+ Dosages",
    text: "Delivered to patients and growing",
  },
  {
    icon: <IconTarget />,
    title: "Multicentre Trials",
    text: "Validated across geographies",
  },
  {
    icon: <IconDNA />,
    title: "Only Therapy of Its Kind",
    text: "Trialled on a real-world population",
  },
  {
    icon: <IconMapPin />,
    title: "Multi-Country Registration",
    text: "Under respective Ministries of Health",
  },
  {
    icon: <IconUsers />,
    title: "Institutional Trust",
    text: "AIIMS · ICMR · Apollo · Fortis",
  },
  {
    icon: <IconLaurel />,
    title: "Global Recognition",
    text: "Multiple awards for innovation",
  },
  {
    icon: <IconCup />,
    title: "USFDA-Affirmed",
    text: "Manufacturing facility",
  },
];

const businessData = [
  {
    id: "nutrition",
    number: "01",
    name: "Esperer Nutrition",
    logo: nutritionLogo,
    icon: <IconCup />,
    country: "India",
    badge: "PATENTED · GLOBAL FIRST",
    description:
      "Globally patented onco-nutrition portfolio; first to launch cancer condition- and stage-specific nutrition, designed to work alongside treatment for optimal outcomes.",
    headline: "Molecular nutrition for stronger treatment outcomes.",
  },
  {
    id: "saltlick",
    number: "02",
    name: "Salt Lick",
    logo: saltLickLogo,
    icon: <IconShield />,
    country: "India",
    badge: "PATENTED · GLOBAL FIRST",
    description:
      "Risk assessment and early detection. A patented system that performs cancer risk assessment well in advance through simple screening.",
    headline: "Early risk detection and prevention powered by AI.",
  },
  {
    id: "bioresearch",
    number: "03",
    name: "Esperer BioResearch",
    logo: bioResearchLogo,
    icon: <IconFlask />,
    country: "India",
    description:
      "Bringing innovative anti-cancer drugs to the patients who need them.",
    headline: "Precision oncology research built for real-world impact.",
  },
  {
    id: "technologies",
    number: "04",
    name: "Health Voitho Technologies",
    logo: healthVoithoLogo,
    icon: <IconMonitor />,
    country: "India",
    description:
      "Medtech — medical devices, technology and machine learning applied to healthcare.",
    headline: "Connected technology that improves cancer care delivery.",
  },
  {
    id: "global",
    number: "05",
    name: "Esperer Global",
    logo: nutritionLogo,
    icon: <IconGlobe />,
    country: "Dubai, UAE",
    description:
      "The Group's international access and commercialization arm, extending Esperer's science to healthcare partners worldwide.",
    headline: "Global access for better cancer care.",
  },
  {
    id: "australia",
    number: "06",
    name: "Esperer Nutrition Australia",
    logo: nutritionLogo,
    icon: <IconGlobe />,
    country: "Australia",
    description:
      "Extending Esperer Nutrition's globally patented onco-nutrition science to patients across Australia and Oceania.",
    headline: "Onco-nutrition science across Australia and Oceania.",
  },
  {
    id: "united-states",
    number: "07",
    name: "Esperer Nutrition USA",
    logo: nutritionLogo,
    icon: <IconGlobe />,
    country: "United States",
    description:
      "Extending Esperer Nutrition's globally patented onco-nutrition science to patients across the United States.",
    headline: "Patented nutrition science in the United States.",
  },
];

const showcaseBusinesses = [
  {
    name: "Esperer Nutrition",
    slug: "esperer-nutrition",
    category: "MOLECULAR NUTRITION",
    logo: nutritionLogo,
    detail: {
      heroColor: "#38b1b3",
      eyebrow: "MOLECULAR NUTRITION",
      headline:
        "The body carrying the treatment deserves as much science as the treatment itself.",
      intro:
        "Chemotherapy, radiation and surgery all place enormous demand on a patient's body. This space exists to make sure the body can meet that demand — and complete the treatment it's been given.",
      whyFirst:
        "Malnutrition and treatment intolerance are significant factors in oncology outcomes — a patient too depleted to continue treatment cannot benefit from even the best therapy available. Nutrition, approached with the right precision, is not a wellness add-on; it is a clinical variable in whether treatment succeeds.",
      whySecond:
        "This space treats nutrition as its own discipline — specific to cancer type, stage and treatment phase — designed to run alongside active treatment, not follow it.",
      cardDescription:
        "Holds a globally patented portfolio in onco-nutrition, and was first to introduce cancer condition- and stage-specific nutrition therapy — designed to work alongside cancer treatment to help patients achieve its best possible outcome.",
    },
    image: SliderImg,
    headline: "Treatment Works. Nutrition Is What Lets It Keep Working.",
    description:
      "The world's first stage- and condition-specific onco-nutrition therapy, globally patented — because the body carrying the treatment deserves as much science as the treatment itself.",
  },
  {
    name: "Esperer BioResearch",
    slug: "esperer-bioresearch",
    category: "TREATMENT",
    logo: bioResearchLogo,
    detail: {
      heroColor: "#38b1b3",
      eyebrow: "TREATMENT",
      headline:
        "Bringing the world's most innovative anti-cancer medicines to the patients who need them.",
      intro:
        "Discovering a therapy is only half the work. This space exists to bring genuinely innovative anti-cancer medicines to the patients who need them.",
      whyFirst:
        "Every advance in oncology research means little until it reaches an actual patient as real medicine — safe, regulated and genuinely innovative. Treatment is where scientific discovery becomes a therapy a patient can receive.",
      whySecond:
        "This space is where Esperer Group researches and brings forward innovative anti-cancer pharmaceuticals — advancing the medicines used directly in the treatment of cancer, built to the same standards of clinical rigor as every other business in the Group.",
      cardDescription:
        "Brings innovative anti-cancer drugs to patients — advancing the medicines used directly in the treatment of cancer.",
    },
    image: SliderImg2,
    headline: "Science That Doesn't Stop At Discovery.",
    description:
      "From research to real medicine — advancing the innovative drugs used directly in the treatment of cancer.",
  },
  {
    name: "Health Voitho Technologies",
    slug: "health-voitho-technologies",
    category: "TECHNOLOGY",
    logo: healthVoithoLogo,
    detail: {
      heroColor: "#38b1b3",
      eyebrow: "TECHNOLOGY",
      headline:
        "Technology, devices and machine learning — applied directly to cancer care.",
      intro:
        "Every stage of the cancer journey — risk assessment, detection, treatment, monitoring — runs better with the right tools behind it. This space builds those tools.",
      whyFirst:
        "Cancer care depends on technology at every stage — from the devices used to screen and diagnose, to the systems used to monitor a patient through treatment. There is significant opportunity to bring the latest advances in machine learning and device technology directly into that journey.",
      whySecond:
        "This space applies medical devices and machine learning directly to healthcare delivery, built to make the rest of the cancer care continuum more precise and more accessible.",
      cardDescription:
        "Operates in the medtech space — developing medical devices and applying technology and machine learning across healthcare.",
    },
    image: SliderImg3,
    headline: "Where Machine Intelligence Meets The Fight Against Cancer.",
    description:
      "The infrastructure behind better cancer care — devices and applied ML that make risk assessment, detection and monitoring sharper across the entire journey.",
  },
  {
    name: "Salt Lick Healthcare",
    slug: "salt-lick-healthcare",
    category: "PREVENTION & EARLY DETECTION",
    logo: saltLickLogo,
    detail: {
      heroColor: "#38b1b3",
      eyebrow: "RISK ASSESSMENT & EARLY DETECTION",
      headline:
        "Cancer, caught early enough, is often cancer that can be cured.",
      intro:
        "Most cancer care begins after diagnosis. This space exists to move earlier than that — assessing risk, and catching disease, well before it becomes harder to treat.",
      whyFirst:
        "Cancer outcomes are shaped long before a diagnosis is made, and stage at detection is one of the strongest predictors of survival in oncology — which makes early risk assessment one of the most valuable additions to the cancer care journey.",
      whySecond:
        "This space brings risk assessment and early detection together as one continuous effort: identifying who carries elevated cancer risk, and catching cancer itself at the earliest possible stage — because the earlier cancer is found, the more treatment options remain, and the better the odds of a cure.",
      cardDescription:
        "A patented system that performs cancer risk assessment well in advance, through simple screening — built on the understanding that cancer, when caught early, is far more likely to be treated successfully.",
    },
    image: SliderImg4,
    headline: "Cancer, Caught Early Enough, Is Often Cancer That Can Be Cured.",
    description:
      "Patented risk assessment through simple screening — identifying cancer risk well before it becomes cancer to treat.",
  },
];

function AnimatedNumber({ value, suffix = "", duration = 1200 }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let frameId;
    let startTime;

    const tick = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      const nextValue = Math.ceil(value * eased);
      setDisplayValue(nextValue);

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [value, duration]);

  return (
    <>
      {displayValue}
      {suffix}
    </>
  );
}

function EspererGlobe() {
  const globeRef = useRef(null);

  useEffect(() => {
    if (!globeRef.current || typeof window.EspererGlobe !== "function") {
      return undefined;
    }

    const globe = window.EspererGlobe(globeRef.current, {
      nodes: 340,
      dot: "#000000",
      line: "0,0,0",
      halo: "56,177,179",
      blobs: true,
      spin: 0.00013,
      parallax: true,
    });

    return () => globe.destroy();
  }, []);

  return <div ref={globeRef} className="esperer-globe" aria-hidden="true" />;
}

function App() {
  const businessRoute = window.location.pathname.match(/^\/business\/([^/]+)/);
  const detailBusiness = showcaseBusinesses.find(
    (business) => business.slug === businessRoute?.[1],
  );

  if (detailBusiness) {
    return (
      <BusinessDetailPage business={detailBusiness} businesses={businessData} />
    );
  }

  const [selectedBusinessId, setSelectedBusinessId] = useState("nutrition");
  const [showcaseIndex, setShowcaseIndex] = useState(0);
  const [showcasePaused, setShowcasePaused] = useState(false);
  const [referenceSliderIndex, setReferenceSliderIndex] = useState(0);
  const [referenceSliderPaused, setReferenceSliderPaused] = useState(false);
  const [fullBleedSliderIndex, setFullBleedSliderIndex] = useState(0);
  const [fullBleedSliderPaused, setFullBleedSliderPaused] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  const selectedBusiness =
    businessData.find((business) => business.id === selectedBusinessId) ??
    businessData[0];

  const sectionIds = [
    "home",
    "about",
    "continuum",
    "businesses",
    "footprint",
    "leadership",
    "cta",
  ];

  const handleBusinessClick = (businessId) => {
    if (businessId === selectedBusinessId) {
      return;
    }
    setSelectedBusinessId(businessId);
  };

  const changeShowcaseSlide = (direction) => {
    setShowcaseIndex(
      (currentIndex) =>
        (currentIndex + direction + showcaseBusinesses.length) %
        showcaseBusinesses.length,
    );
  };

  const changeReferenceSlider = (direction) => {
    setReferenceSliderIndex(
      (currentIndex) =>
        (currentIndex + direction + showcaseBusinesses.length) %
        showcaseBusinesses.length,
    );
  };

  const changeFullBleedSlider = (direction) => {
    setFullBleedSliderIndex(
      (currentIndex) =>
        (currentIndex + direction + showcaseBusinesses.length) %
        showcaseBusinesses.length,
    );
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const totalScroll = documentHeight - windowHeight;
      const progress = totalScroll > 0 ? (scrollTop / totalScroll) * 100 : 0;
      setScrollProgress(progress);

      // Determine active section
      let currentActive = "home";
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            currentActive = id;
          }
        }
      });
      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showcasePaused) {
      return undefined;
    }

    const autoplayId = window.setInterval(() => {
      changeShowcaseSlide(1);
    }, 5000);

    return () => window.clearInterval(autoplayId);
  }, [showcasePaused]);

  useEffect(() => {
    if (referenceSliderPaused) {
      return undefined;
    }

    const autoplayId = window.setInterval(() => {
      changeReferenceSlider(1);
    }, 5000);

    return () => window.clearInterval(autoplayId);
  }, [referenceSliderPaused]);

  useEffect(() => {
    if (fullBleedSliderPaused) {
      return undefined;
    }

    const autoplayId = window.setInterval(() => {
      changeFullBleedSlider(1);
    }, 6000);

    return () => window.clearInterval(autoplayId);
  }, [fullBleedSliderPaused]);

  return (
    <div className="page">
      <SiteHeader
        activeSection={activeSection}
        onNavigate={handleNavClick}
        scrollProgress={scrollProgress}
      />

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-copy">
          <span className="eyebrow eyebrow-orange">ESPERER GROUP</span>
          <h1>
            <span>Advancing</span>
            <span>the full continuum</span>
            <span>
              of <span className="teal-text">cancer care.</span>
            </span>
          </h1>
          <p className="hero-desc">
            A global oncology innovation enterprise, working across prevention,
            early detection, treatment, nutrition and enabling technology.
          </p>
          <button className="btn btn-teal">
            Explore Our Businesses <IconArrowRight />
          </button>
          {/* <div className="hero-tagline">
            <span className="tagline-rule" />
            <p>
              TWO BREAKTHROUGHS.
              <br />
              ONE DISCIPLINE.
              <br />
              ZERO GUESSWORK.
            </p>
          </div> */}
        </div>
        <div className="hero-image">
          <EspererGlobe />
        </div>
      </section>

      {/* Business showcase */}
      {/* <section className="business-showcase" aria-label="Where we operate">
        <div className="showcase-heading">
          <span className="eyebrow eyebrow-orange">WHERE WE OPERATE</span>
          <h2>
            The frontiers of cancer care
            <br />
            Esperer Group is redefining.
          </h2>
        </div>
        <div className="showcase-glow" aria-hidden="true" />
        <div
          className="showcase-viewport"
          aria-live="polite"
          onMouseEnter={() => setShowcasePaused(true)}
          onMouseLeave={() => setShowcasePaused(false)}
        >
          <div
            className="showcase-track"
            style={{ transform: `translateX(-${showcaseIndex * 100}%)` }}
          >
            {showcaseBusinesses.map((business) => (
              <article className="showcase-slide" key={business.name}>
                <div className="showcase-logo">
                  <img src={business.logo} alt={`${business.name} logo`} />
                </div>
                <p className="showcase-name">{business.name}</p>
                <h3>{business.headline}</h3>
                <p className="showcase-description">{business.description}</p>
                  <a
                    href={`/business/${business.slug}`}
                    className="showcase-cta"
                  >
                  Explore this space <IconArrowRight />
                </a>
              </article>
            ))}
          </div>
        </div>
        <div className="showcase-controls">
          <button
            type="button"
            className="showcase-arrow"
            onClick={() => changeShowcaseSlide(-1)}
            aria-label="Previous business"
          >
            <span aria-hidden="true">&#8592;</span>
          </button>
          <div className="showcase-counter">
            <span>{String(showcaseIndex + 1).padStart(2, "0")}</span>
            <span className="showcase-counter-divider">/</span>
            <span>04</span>
          </div>
          <div className="showcase-dots" role="tablist" aria-label="Businesses">
            {showcaseBusinesses.map((business, index) => (
              <button
                type="button"
                role="tab"
                key={business.name}
                aria-label={`Show ${business.name}`}
                aria-selected={showcaseIndex === index}
                className={showcaseIndex === index ? "is-active" : ""}
                onClick={() => setShowcaseIndex(index)}
              />
            ))}
          </div>
          <button
            type="button"
            className="showcase-arrow"
            onClick={() => changeShowcaseSlide(1)}
            aria-label="Next business"
          >
            <span aria-hidden="true">&#8594;</span>
          </button>
        </div>
      </section> */}

      {/* Business showcase redesign */}
      <section
        className="showcase-redesign"
        aria-label="Where we operate, alternate view"
      >
        <div className="showcase-redesign-heading">
          <span className="eyebrow">WHERE WE OPERATE</span>
          <h2>
            The frontiers of cancer care
            <br />
            Esperer Group is redefining.
          </h2>
        </div>
        <div
          className="showcase-redesign-viewport"
          aria-live="polite"
          onMouseEnter={() => setShowcasePaused(true)}
          onMouseLeave={() => setShowcasePaused(false)}
        >
          <div
            className="showcase-redesign-track"
            style={{ transform: `translateX(-${showcaseIndex * 100}%)` }}
          >
            {showcaseBusinesses.map((business) => (
              <article className="showcase-redesign-slide" key={business.name}>
                <div className="showcase-redesign-logo-wrap">
                  <span
                    className="showcase-redesign-orbit"
                    aria-hidden="true"
                  />
                  <img
                    src={business.logo}
                    alt={`${business.name} logo`}
                    className="showcase-redesign-logo"
                  />
                </div>
                <div className="showcase-redesign-content">
                  <span className="showcase-redesign-eyebrow">
                    {business.name.toUpperCase()}
                  </span>
                  <h2>{business.headline}</h2>
                  <p>{business.description}</p>
                  <a
                    href={`/business/${business.slug}`}
                    className="showcase-redesign-cta"
                  >
                    Explore this space <IconArrowRight />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="showcase-redesign-controls">
          <button
            type="button"
            className="showcase-redesign-arrow"
            onClick={() => changeShowcaseSlide(-1)}
            aria-label="Previous business"
          >
            <span aria-hidden="true">&#8592;</span>
          </button>
          <div className="showcase-redesign-counter">
            <span>{String(showcaseIndex + 1).padStart(2, "0")}</span>
            <span>/</span>
            <span>04</span>
          </div>
          <div
            className="showcase-redesign-dots"
            role="tablist"
            aria-label="Business slides"
          >
            {showcaseBusinesses.map((business, index) => (
              <button
                type="button"
                role="tab"
                key={business.name}
                aria-label={`Show ${business.name}`}
                aria-selected={showcaseIndex === index}
                className={showcaseIndex === index ? "is-active" : ""}
                onClick={() => setShowcaseIndex(index)}
              />
            ))}
          </div>
          <button
            type="button"
            className="showcase-redesign-arrow"
            onClick={() => changeShowcaseSlide(1)}
            aria-label="Next business"
          >
            <span aria-hidden="true">&#8594;</span>
          </button>
        </div>
      </section>

      {/* Reference-style business slider */}
      <section
        className="reference-slider"
        aria-label="Where we operate, featured businesses"
        onMouseEnter={() => setReferenceSliderPaused(true)}
        onMouseLeave={() => setReferenceSliderPaused(false)}
      >
        <div className="reference-slider-heading">
          <span className="eyebrow eyebrow-orange">WHERE WE OPERATE</span>
          <h2>The frontiers of cancer care Esperer Group is redefining.</h2>
        </div>
        <div className="reference-slider-viewport" aria-live="polite">
          <div
            className="reference-slider-track"
            style={{ transform: `translateX(-${referenceSliderIndex * 100}%)` }}
          >
            {showcaseBusinesses.map((business) => (
              <article className="reference-slider-slide" key={business.name}>
                <img
                  className="reference-slider-image"
                  src={business.image}
                  alt={`${business.name} feature illustration`}
                />
                <div className="reference-slider-copy">
                  <span className="reference-slider-pill">
                    {business.category}
                  </span>
                  <h2>{business.headline}</h2>
                  <p>{business.description}</p>
                  <a
                    href={`/business/${business.slug}`}
                    className="reference-slider-cta"
                  >
                    Explore this space <IconArrowRight />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
        {/* <button
          type="button"
          className="reference-slider-side-arrow reference-slider-side-arrow-left"
          onClick={() => changeReferenceSlider(-1)}
          aria-label="Previous featured business"
        >
          &#8592;
        </button>
        <button
          type="button"
          className="reference-slider-side-arrow reference-slider-side-arrow-right"
          onClick={() => changeReferenceSlider(1)}
          aria-label="Next featured business"
        >
          &#8594;
        </button> */}
        <div className="reference-slider-controls">
          <button
            type="button"
            className="reference-slider-arrow"
            onClick={() => changeReferenceSlider(-1)}
            aria-label="Previous featured business"
          >
            &#8592;
          </button>
          <div
            className="reference-slider-dots"
            role="tablist"
            aria-label="Featured businesses"
          >
            {showcaseBusinesses.map((business, index) => (
              <button
                type="button"
                role="tab"
                key={business.name}
                aria-label={`Show ${business.name}`}
                aria-selected={referenceSliderIndex === index}
                className={referenceSliderIndex === index ? "is-active" : ""}
                onClick={() => setReferenceSliderIndex(index)}
              />
            ))}
          </div>
          <button
            type="button"
            className="reference-slider-arrow"
            onClick={() => changeReferenceSlider(1)}
            aria-label="Next featured business"
          >
            &#8594;
          </button>
        </div>
      </section>

      {/* Full-bleed business slider */}
      {/* <section
        className="full-bleed-slider"
        aria-label="Where we operate, full-bleed view"
        onMouseEnter={() => setFullBleedSliderPaused(true)}
        onMouseLeave={() => setFullBleedSliderPaused(false)}
      >
        <div
          className="full-bleed-slider-track"
          style={{ transform: `translateX(-${fullBleedSliderIndex * 100}%)` }}
        >
          {showcaseBusinesses.map((business) => (
            <article
              className="full-bleed-slide"
              key={business.name}
              style={{ backgroundImage: `url(${SliderImg3})` }}
            >
              <div className="full-bleed-slide-overlay" aria-hidden="true" />
              <div className="full-bleed-slide-content">
                <span className="eyebrow eyebrow-orange">WHERE WE OPERATE</span>
                <span className="full-bleed-slide-pill">
                  {business.category}
                </span>
                <h2>{business.headline}</h2>
                <p>{business.description}</p>
                <a
                  href={`/business/${business.slug}`}
                  className="full-bleed-slide-cta"
                >
                  Explore this space <IconArrowRight />
                </a>
              </div>
            </article>
          ))}
        </div>
        <button
          type="button"
          className="full-bleed-arrow full-bleed-arrow-left"
          onClick={() => changeFullBleedSlider(-1)}
          aria-label="Previous business"
        >
          &#8592;
        </button>
        <button
          type="button"
          className="full-bleed-arrow full-bleed-arrow-right"
          onClick={() => changeFullBleedSlider(1)}
          aria-label="Next business"
        >
          &#8594;
        </button>
        <div className="full-bleed-controls">
          <button
            type="button"
            className="full-bleed-control-arrow"
            onClick={() => changeFullBleedSlider(-1)}
            aria-label="Previous business"
          >
            &#8592;
          </button>
          <div
            className="full-bleed-dots"
            role="tablist"
            aria-label="Business slides"
          >
            {showcaseBusinesses.map((business, index) => (
              <button
                type="button"
                role="tab"
                key={business.name}
                aria-label={`Show ${business.name}`}
                aria-selected={fullBleedSliderIndex === index}
                className={fullBleedSliderIndex === index ? "is-active" : ""}
                onClick={() => setFullBleedSliderIndex(index)}
              />
            ))}
          </div>
          <button
            type="button"
            className="full-bleed-control-arrow"
            onClick={() => changeFullBleedSlider(1)}
            aria-label="Next business"
          >
            &#8594;
          </button>
        </div>
      </section> */}

      {/* About */}
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
            detection, treatment, precision nutrition, and long-term
            survivorship. We bring together molecular nutrition, oncology
            pharmaceuticals, medical technology and artificial intelligence into
            a single ecosystem, built to help clinicians, healthcare
            institutions and patients make better decisions and get better
            outcomes.
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
                Our innovations exist to improve the quality of life and
                long-term outcomes.
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

      {/* Breakthroughs */}
      <section className="breakthroughs" aria-labelledby="breakthroughs-title">
        <div className="breakthroughs-heading">
          <span className="eyebrow eyebrow-orange">OUR BREAKTHROUGHS</span>
          <h2 id="breakthroughs-title">Our Breakthroughs</h2>
          <p>
            Developed within Esperer Nutrition, these two pioneering innovations
            are redefining how nutrition supports cancer treatment — with
            science, precision and purpose.
          </p>
        </div>

        <div className="breakthrough-grid">
          <article className="breakthrough-card">
            <div className="breakthrough-card-main">
              <div className="breakthrough-copy">
                <div className="breakthrough-mark">
                  <IconDNA />
                </div>
                <span className="breakthrough-label">BREAKTHROUGH 01</span>
                <h3>Cancer-specific nutritional therapy</h3>
                <span className="breakthrough-rule" />
                <p>
                  The world’s first stage- and condition-specific onco-nutrition
                  therapy — developed and validated as a clinical intervention
                  to work alongside primary treatment and help it reach its
                  optimal outcome.
                </p>
              </div>
              <img
                src={breakthroughPatient}
                alt="Patient benefiting from nutritional therapy"
              />
            </div>
            <div className="breakthrough-features">
              <span>Stage &amp; condition specific</span>
              <span>Clinically validated intervention</span>
              <span>Works alongside cancer treatment</span>
            </div>
            <a href="#businesses" className="btn btn-teal breakthrough-button">
              Explore EON Therapy <IconArrowRight />
            </a>
          </article>

          <article className="breakthrough-card">
            <div className="breakthrough-card-main">
              <div className="breakthrough-copy">
                <div className="breakthrough-mark">
                  <IconChip />
                </div>
                <span className="breakthrough-label">BREAKTHROUGH 02</span>
                <h3>AI-powered nutritional assessment protocol</h3>
                <span className="breakthrough-rule" />
                <p>
                  The world’s first AI-powered nutritional assessment protocol —
                  determining, with clinical precision, exactly what a patient’s
                  body requires at each stage of treatment.
                </p>
              </div>
              <img
                src={breakthroughNutraIq}
                alt="Nutra-IQ nutritional assessment interface"
              />
            </div>
            <div className="breakthrough-features">
              <span>AI-powered precision</span>
              <span>Personalised to stage of treatment</span>
              <span>Early risk detection &amp; better outcomes</span>
            </div>
            <a href="#businesses" className="btn btn-teal breakthrough-button">
              Explore Nutra-IQ <IconArrowRight />
            </a>
          </article>
        </div>

        <div className="breakthrough-note">
          <IconShield />
          <p>
            Both breakthroughs are backed by clinical research, globally
            patented, and aligned with international nutrition guidelines —
            because every decision should be driven by evidence, not assumption.
          </p>
          <a href="#foundation" className="link-arrow teal">
            Learn more about our science <IconArrowRight />
          </a>
        </div>
      </section>

      {/* Esperer at a glance */}
      <section className="glance" aria-labelledby="glance-title">
        <div className="glance-inner">
          <div className="glance-heading">
            <span className="eyebrow eyebrow-orange">ESPERER AT A GLANCE</span>
            <h2 id="glance-title">Credibility, at a glance.</h2>
          </div>
          <div className="glance-grid">
            {glanceStats.map((stat) => (
              <article className="glance-item" key={stat.title}>
                <div className="glance-icon" aria-hidden="true">
                  {stat.icon}
                </div>
                <h3>{stat.title}</h3>
                <p>{stat.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Continuum of care */}
      <section className="continuum" id="continuum">
        <div className="continuum-left">
          <span className="eyebrow eyebrow-cream">THE CONTINUUM OF CARE</span>
          <h2>
            Every part of the cancer journey,
            <br />
            addressed by a dedicated Esperer business.
          </h2>
          <div className="continuum-steps">
            {continuumSteps.map((step) => (
              <div className="continuum-step" key={step.num}>
                <div className="step-top">
                  <span className="step-num">{step.num}</span>
                </div>
                <p className="step-title">
                  {step.title.split("\n").map((line, idx) => (
                    <span key={idx}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
                <div className="step-sub">
                  <img
                    src={step.logo}
                    alt={`${step.sub.replace("\n", " ")} logo`}
                  />
                  <a href="#businesses" className="step-business-link">
                    {step.sub.split("\n").map((line, idx) => (
                      <span key={idx}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="continuum-quote">
          <IconQuote />
          <p>
            Treating the cancer is only one part of curing the patient. The
            other part — helping the body carry that treatment — is what Esperer
            was built to do.
          </p>
          <span>— Dr. Raktim Chattopadhyay</span>
        </div>
      </section>

      {/* Our Businesses */}
      <section className="businesses" id="businesses">
        <div className="businesses-copy">
          <span className="eyebrow eyebrow-orange">OUR BUSINESSES</span>
          <h2>Each addressing a distinct part of the cancer care continuum</h2>
          <p>
            Every innovation we build — from clinically validated protocols to
            AI-driven platforms — is designed to make cancer care more
            personalized, improve quality of life, and put evidence-based care
            within reach of more people.
          </p>
          {/* <a href="#businesses-grid" className="link-arrow">
            View all businesses <IconArrowRight />
          </a> */}
        </div>
        <div className="businesses-diagram">
          <div className="wheel">
            <svg className="wheel-svg" viewBox="0 0 520 520">
              <line
                x1="77.5"
                y1="77.5"
                x2="442.5"
                y2="442.5"
                className="wheel-divider"
              />
              <line
                x1="442.5"
                y1="77.5"
                x2="77.5"
                y2="442.5"
                className="wheel-divider"
              />
              <path
                d="M260,260 L77.5,77.5 A258,258 0 0 1 442.5,77.5 Z"
                className="wheel-glow"
              />
            </svg>

            <div className="wheel-rotation">
              {businessData.map((business, index) => {
                const selectedIndex = businessData.findIndex(
                  (item) => item.id === selectedBusinessId,
                );
                const slotIndex =
                  (index - selectedIndex + businessData.length) %
                  businessData.length;

                return (
                  <article
                    className={`wedge wedge-slot-${slotIndex} ${selectedBusinessId === business.id ? "is-active" : ""}`}
                    onClick={() => handleBusinessClick(business.id)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        handleBusinessClick(business.id);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    key={business.id}
                  >
                    <span className="wedge-num">{business.number}</span>
                    <span className="wedge-icon">
                      <img src={business.logo} alt={`${business.name} logo`} />
                    </span>
                    <h5>{business.name}</h5>
                    <p>{business.description}</p>
                    <a
                      href={`/business/${business.id}`}
                      className="btn btn-teal btn-small"
                      onClick={(event) => event.stopPropagation()}
                    >
                      Explore <IconArrowRight size={14} />
                    </a>
                  </article>
                );
              })}
            </div>

            <div className="wheel-center">
              <span className="wheel-logo-text">
                Esperer
                <span className="wheel-logo-dot" />
              </span>
              <span className="wheel-logo-sub">GROUP</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Businesses: all business cards */}
      <section
        className="businesses businesses-cards-section"
        id="businesses-grid"
      >
        <div className="businesses-copy businesses-cards-copy">
          <span className="eyebrow eyebrow-orange">OUR BUSINESSES</span>
          <h2>Each addressing a distinct part of the cancer care continuum</h2>
          <p>
            Every innovation we build — from clinically validated protocols to
            AI-driven platforms — is designed to make cancer care more
            personalized, improve quality of life, and put evidence-based care
            within reach of more people.
          </p>
        </div>
        <div className="businesses-grid">
          {businessData.map((business) => (
            <article className="business-card" key={business.id}>
              <div className="business-card-logo">
                <img src={business.logo} alt={`${business.name} logo`} />
              </div>
              {business.badge && (
                <span className="business-card-badge">{business.badge}</span>
              )}
              <span className="business-card-country">{business.country}</span>
              <h3>{business.name}</h3>
              <p>{business.description}</p>
              <a href="#contact" className="business-card-link">
                KNOW MORE <IconArrowRight size={13} />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Global footprint */}
      <section className="footprint" id="footprint">
        <div className="footprint-copy">
          <span className="eyebrow eyebrow-orange">OUR BUSINESSES</span>
          <h2>A global footprint.</h2>
          <p>
            Our science is available across 12+ countries in some of the world's
            most tightly regulated healthcare markets.
          </p>
          <a href="#" className="link-arrow dark">
            View all locations <IconArrowRight />
          </a>
        </div>
        <div className="footprint-map">
          <img src={MapImg} alt="World map of Esperer Group footprint" />
        </div>
        <div className="footprint-stats">
          {globalStats.map((stat, index) => (
            <div className="stat" key={stat.label}>
              <h3>
                {index === 2 ? (
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={1400}
                  />
                ) : (
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={1200}
                  />
                )}
              </h3>
              <p className="stat-label">{stat.label}</p>
              <p className="stat-desc">{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Scientific Foundation */}
      {/* <section className="foundation-section" id="foundation">
        <div className="card foundation-card">
          <span className="eyebrow eyebrow-orange">
            OUR SCIENTIFIC FOUNDATION
          </span>
          <h2>
            The DINI Axis.
            <br />
            Our foundation for intelligent oncology.
          </h2>
          <p>
            Our proprietary framework connects Diet, Inflammation, Nutrition and
            Immunity — the four biological levers that determine how the body
            responds to cancer.
          </p>
          <p>
            This is the science behind every protocol we develop and deliver.
          </p>
          <a href="#" className="link-arrow dark">
            Learn more <IconArrowRight />
          </a>
          <div className="dini-diagram">
            <svg className="dini-svg" viewBox="0 0 300 300">
              <path d="M150,35 Q232.2,67.8 265,150" className="dini-arc" />
              <path d="M265,150 Q232.2,232.2 150,265" className="dini-arc" />
              <path d="M150,265 Q67.8,232.2 35,150" className="dini-arc" />
              <path d="M35,150 Q67.8,67.8 150,35" className="dini-arc" />
            </svg>
            <div className="dini-orbit">
              <span className="dini-orbit-node dini-top">
                <span className="dini-node">DIET</span>
              </span>
              <span className="dini-orbit-node dini-left">
                <span className="dini-node">NUTRITION</span>
              </span>
              <span className="dini-orbit-node dini-right">
                <span className="dini-node">INFLAMMATION</span>
              </span>
              <span className="dini-orbit-node dini-bottom">
                <span className="dini-node">IMMUNITY</span>
              </span>
            </div>
            <span className="dini-center">
              DINI
              <br />
              AXIS
            </span>
          </div>
        </div>
      </section> */}

      {/* Leadership */}
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
            {awards.map((a, i) => (
              <div className="award" key={i}>
                <IconLaurel />
                <p>
                  {a.split("\n").map((line, idx) => (
                    <span key={idx}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
          {/* <a href="#" className="link-arrow dark">
            View all locations <IconArrowRight />
          </a> */}
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="cta">
        <h2>
          Esperer Group —<br />
          advancing cancer care from prevention to post-care.
        </h2>
        <button className="btn btn-white">
          Explore Our Businesses <IconArrowRight />
        </button>
      </section>

      <SiteFooter businesses={businessData} />
    </div>
  );
}

export default App;
