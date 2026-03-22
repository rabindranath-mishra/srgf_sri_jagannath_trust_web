import jagannathImg from "../assets/jagannath-temple2.jpg";
import communityImg from "../assets/gallery_1.jpg";
import carouselImg1 from "../assets/gallery/1.jpg";
import carouselImg2 from "../assets/gallery/2.jpg";
import carouselImg3 from "../assets/gallery/3.jpg";
import carouselImg4 from "../assets/gallery/4.jpg";
import carouselImg5 from "../assets/gallery/5.jpg";
import carouselImg6 from "../assets/gallery/6.jpg";
import carouselImg7 from "../assets/gallery/7.jpg";
import carouselImg8 from "../assets/gallery/8.jpg";
import anupDashImg from "../assets/committee/0_Anup_Dash.jpeg";
import saritaSourashriImg from "../assets/committee/1_Sarita_Sourashri.jpeg";
import praveenOjhaImg from "../assets/committee/2_Praveen_Ojha.jpeg";
import rashmitParidaImg from "../assets/committee/3_Rashmit_Parida.jpeg";
import bismayaSamantarayaImg from "../assets/committee/5_Bismaya_Samantaraya.jpeg";
import bijayMohantyImg from "../assets/committee/6_Bijay_Mohanty.jpg";
import bidhanMishraImg from "../assets/committee/7_Bidhan_Mishra.jpeg";
import rabindranathMishraImg from "../assets/committee/8_Rabindranath_Mishra.jpg";
import rathYatraVideo from "../assets/srgf_rathajatra.mp4";

export const TRUST_NAME = "SRGF Sri Jagannath Trust";
export const TAGLINE = "Rooted in Odia heritage, open to all.";
export const MISSION_STATEMENT = "To celebrate Odia and Jagannath culture while creating an inclusive platform that brings together all residents of Shriram Greenfield through spirituality, cultural exchange, service, and joyful participation.";

export const COLORS = {
  primary: "saffron",
  secondary: "maroon",
  accent: "gold",
  background: "off-white",
};

export const NAVIGATION = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Events", href: "#events" },
  { name: "Gallery", href: "#gallery" },
  { name: "Get Involved", href: "#get-involved" },
  { name: "Contact", href: "#contact" },
];

export const IMPACT_CARDS = [
  {
    title: "Inclusive",
    description: "Community platform for all SRGF residents",
    icon: "Users",
  },
  {
    title: "Culture and Seva",
    description: "Tradition, devotion, and service together",
    icon: "Heart",
  },
  {
    title: "Family-Centered",
    description: "Programs for children, youth, adults, and seniors",
    icon: "Home",
  },
];

export const MISSION_CARDS = [
  "Preserve and celebrate Odia and Jagannath culture",
  "Create an inclusive platform for all residents",
  "Encourage harmony, friendship, seva, and shared celebrations",
  "Help children and youth stay connected to values, tradition, and cultural diversity",
];

export const EVENTS = [
  {
    title: "Rath Yatra 2026",
    description: "Festival Itinerary:",
    itinerary: [
      "Day_1",
      "Day_2",
      "Day_3",
      "Day_4",
      "Day_5",
      "Day_6",
      "Day_7",
      "Day_8",
      "Day_9",
      "Day_10"
    ]
  },
  {
    title: "Daily Puja",
    description: "Offer Prasad, Devotional singing and spiritual gathering.",
  },
  {
    title: "Cultural Program",
    description: "Engaging youth through traditional arts and values.",
  },
];

export const GALLERY_IMAGES = [
  {
    url: jagannathImg,
    title: "Temple Heritage",
    type: "image",
  },
  {
    url: rathYatraVideo,
    title: "Rath Yatra Celebration",
    type: "video",
  },
  {
    url: communityImg,
    title: "Community Unity",
    type: "image",
  },
];

export const CAROUSEL_IMAGES = [
  carouselImg1,
  carouselImg2,
  carouselImg3,
  carouselImg4,
  carouselImg5,
  carouselImg6,
  carouselImg7,
  carouselImg8,
];

export const LEADERSHIP = [
  { role: "Managing Trustee", name: "Anup Dash", photo: anupDashImg },
  { role: "Trustee", name: "Sarita Sourashri", photo: saritaSourashriImg },
  { role: "Trustee", name: "Praveen Ojha", photo: praveenOjhaImg },
  { role: "Trustee", name: "Rashmit Parida", photo: rashmitParidaImg },
  { role: "Trustee", name: "Pradeep Das", photo: null },
  { role: "Trustee", name: "Bismaya Samantaray", photo: bismayaSamantarayaImg },
  { role: "Trustee", name: "Bijay Mohanty", photo: bijayMohantyImg },
  { role: "Trustee", name: "Bidhan Mishra", photo: bidhanMishraImg },
  { role: "Trustee", name: "Rabindranath Mishra", photo: rabindranathMishraImg },
];

export const CONTACT_INFO = {
  address: "Shriram Greenfield, Budigere Cross, Bengaluru, Karnataka 560049",
  email: "managing.trustee@srgfsrijagannathtrust.in",
  phone: "+91 6366602452",
  whatsapp: "+91 XXXXXXXXXX",
  registrationNumber: "BDH-4-00016-2023-24",
  accountNumber: "50200081382727",
  ifscCode: "HDFC0003637",
};
