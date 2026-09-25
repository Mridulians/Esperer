import nutritionLogo from "../assets/esperer_nutrition.png";
import bioResearchLogo from "../assets/Esperer_bioresearch.png";
import healthVoithoLogo from "../assets/health_voitho.png";
import saltLickLogo from "../assets/salt_lick.png";
import SliderImg from "../assets/Slider_img.png";
import SliderImg2 from "../assets/Slider_img2.png";
import SliderImg3 from "../assets/Slider_img3.png";
import SliderImg4 from "../assets/Slider_img4.png";
export const businessData = [
  {
    id: "nutrition",
    number: "01",
    name: "Esperer Nutrition",
    logo: nutritionLogo,
    country: "India",
    description:
      "Globally patented onco-nutrition portfolio; first to launch cancer condition- and stage-specific nutrition, designed to work alongside treatment for optimal outcomes.",
      website: "https://www.esperernutrition.com",
  },
  {
    id: "saltlick",
    number: "02",
    name: "Salt Lick",
    logo: saltLickLogo,
    country: "India",
    description:
      "Risk assessment and early detection. A patented system that performs cancer risk assessment well in advance through simple screening.",
       website: "www.saltlickhealthcare.com",
  },
  {
    id: "bioresearch",
    number: "03",
    name: "Esperer BioResearch",
    logo: bioResearchLogo,
    country: "India",
    description:
      "Bringing innovative anti-cancer drugs to the patients who need them.",
       website: "https://www.espererbioresearch.com",
  },
  {
    id: "technologies",
    number: "04",
    name: "Health Voitho Technologies",
    logo: healthVoithoLogo,
    country: "India",
    description:
      "Medtech — medical devices, technology and machine learning applied to healthcare.",
       website: "https://www.healthvoitho.com",
  },
  {
    id: "global",
    number: "05",
    name: "Esperer Global",
    logo: nutritionLogo,
    country: "Dubai, UAE",
    description:
      "The Group's international access and commercialization arm, extending Esperer's science to healthcare partners worldwide.",
       website: "https://www.esperernutrition.com",
  },
  {
    id: "australia",
    number: "06",
    name: "Esperer Nutrition Australia",
    logo: nutritionLogo,
    country: "Australia",
    description:
      "Extending Esperer Nutrition's globally patented onco-nutrition science to patients across Australia and Oceania.",
       website: "https://www.esperernutrition.com",
  },
  {
    id: "united-states",
    number: "07",
    name: "Esperer Nutrition USA",
    logo: nutritionLogo,
    country: "United States",
    description:
      "Extending Esperer Nutrition's globally patented onco-nutrition science to patients across the United States.",
       website: "https://www.esperernutrition.com",
  },
];

const createBusiness = (
  name,
  category,
  logo,
  image,
  headline,
  description,
  detailHeadline,
  intro,
  whyFirst,
  whySecond,
  cardDescription,
  website,
) => ({
  name,
  slug: name.toLowerCase().replaceAll(" ", "-"),
  category,
  logo,
  website,
  detail: {
    heroColor: "#38b1b3",
    eyebrow: category,
    headline: detailHeadline,
    intro,
    whyFirst,
    whySecond,
    cardDescription,
  },
  image,
  headline,
  description,
});

export const showcaseBusinesses = [
  createBusiness(
    "Esperer Nutrition",
    "MOLECULAR NUTRITION",
    nutritionLogo,
    SliderImg,
    "Treatment Works. Nutrition Is What Lets It Keep Working.",
    "The world's first stage- and condition-specific onco-nutrition therapy, globally patented.",
    "The body carrying the treatment deserves as much science as the treatment itself.",
    "Chemotherapy, radiation and surgery all place enormous demand on a patient's body. This space exists to make sure the body can meet that demand.",
    "Malnutrition and treatment intolerance are significant factors in oncology outcomes.",
    "This space treats nutrition as its own discipline — specific to cancer type, stage and treatment phase.",
    "Holds a globally patented portfolio in onco-nutrition.",
    "https://www.esperernutrition.com",
  ),
  createBusiness(
    "Esperer BioResearch",
    "TREATMENT",
    bioResearchLogo,
    SliderImg2,
    "Science That Doesn't Stop At Discovery.",
    "From research to real medicine — advancing the innovative drugs used directly in the treatment of cancer.",
    "Bringing the world's most innovative anti-cancer medicines to the patients who need them.",
    "Discovering a therapy is only half the work. This space exists to bring genuinely innovative anti-cancer medicines to patients.",
    "Every advance in oncology research means little until it reaches an actual patient as real medicine.",
    "This space researches and brings forward innovative anti-cancer pharmaceuticals.",
    "Brings innovative anti-cancer drugs to patients.",
    "https://www.espererbioresearch.com",
  ),
  createBusiness(
    "Health Voitho Technologies",
    "TECHNOLOGY",
    healthVoithoLogo,
    SliderImg3,
    "Where Machine Intelligence Meets The Fight Against Cancer.",
    "The infrastructure behind better cancer care — devices and applied ML across the entire journey.",
    "Technology, devices and machine learning — applied directly to cancer care.",
    "Every stage of the cancer journey runs better with the right tools behind it.",
    "Cancer care depends on technology at every stage.",
    "This space applies medical devices and machine learning directly to healthcare delivery.",
    "Operates in the medtech space.",
    "https://www.healthvoitho.com",
  ),
  createBusiness(
    "Salt Lick Healthcare",
    "PREVENTION & EARLY DETECTION",
    saltLickLogo,
    SliderImg4,
    "Cancer, Caught Early Enough, Is Often Cancer That Can Be Cured.",
    "Patented risk assessment through simple screening — identifying cancer risk well before it becomes cancer to treat.",
    "Cancer, caught early enough, is often cancer that can be cured.",
    "Most cancer care begins after diagnosis. This space exists to move earlier than that.",
    "Stage at detection is one of the strongest predictors of survival.",
    "This space brings risk assessment and early detection together.",
    "A patented system that performs cancer risk assessment well in advance.",
    "https://www.saltlick.com",
  ),
];
