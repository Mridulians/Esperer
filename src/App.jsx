import { useEffect, useState } from "react";
import SiteHeader from "./components/SiteHeader.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Slider from "./components/Slider.jsx";
import About from "./components/About.jsx";
import Breakthroughs from "./components/Breakthroughs.jsx";
import Glance from "./components/Glance.jsx";
import Continuum from "./components/Continuum.jsx";
import Businesses from "./components/Businesses.jsx";
import GlobalFootprint from "./components/GlobalFootprint.jsx";
import Leadership from "./components/Leadership.jsx";
import BusinessDetailPage from "./pages/BusinessDetailPage.jsx";
import { businessData, showcaseBusinesses } from "./data/pageData.js";
import nutritionLogo from "./assets/esperer_nutrition.png";
import bioResearchLogo from "./assets/Esperer_bioresearch.png";
import healthVoithoLogo from "./assets/health_voitho.png";
import saltLickLogo from "./assets/salt_lick.png";
import "./assets/esperer-globe.js";
import "./App.css";

function LandingPage() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "breakthroughs",
      "continuum",
      "businesses",
      "footprint",
      "leadership",
      "cta",
    ];
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(
        totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0,
      );
      let current = "home";
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= 200) current = id;
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (event, sectionId) => {
    event.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="page">
      <SiteHeader
        activeSection={activeSection}
        onNavigate={handleNavigate}
        scrollProgress={scrollProgress}
      />
      <HeroSection />
      <Slider businesses={showcaseBusinesses} />
      <About />
      <Breakthroughs />
      <Glance />
      <Continuum
        logos={{
          nutrition: nutritionLogo,
          bioResearch: bioResearchLogo,
          healthVoitho: healthVoithoLogo,
          saltLick: saltLickLogo,
        }}
      />
      <Businesses businesses={businessData} />
      <GlobalFootprint />
      <Leadership />
      <SiteFooter businesses={businessData} />
    </div>
  );
}

export default function App() {
  const route = window.location.pathname.match(/^\/business\/([^/]+)/);
  const detailBusiness = showcaseBusinesses.find(
    ({ slug }) => slug === route?.[1],
  );
  return detailBusiness ? (
    <BusinessDetailPage business={detailBusiness} businesses={businessData} />
  ) : (
    <LandingPage />
  );
}
