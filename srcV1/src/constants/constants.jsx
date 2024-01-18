import { FaTelegram, FaFigma } from "react-icons/fa";
import {
  SiGmail,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobeindesign,
} from "react-icons/si";
import Corel from "../icons/coreldraw-icon.svg?react";
import { FaInstagram } from "react-icons/fa6";

export const SKILLS = [
  {
    icon: <FaFigma className="w-[100%] h-[100%]" />,
    title: "FIGMA",
  },
  {
    icon: <SiAdobeillustrator className="w-[100%] h-[100%]" />,
    title: "AI",
  },
  {
    icon: <SiAdobephotoshop className="w-[100%] h-[100%]" />,
    title: "PS",
  },
  {
    icon: <SiAdobeindesign className="w-[100%] h-[100%]" />,
    title: "ID",
  },
  {
    icon: <Corel className="w-[100%] h-[100%]" />,
    title: "Corel",
  },
];

export const PROJECTS = [
  {
    image: "/images/logoBakery.png",
    text: "Development of a corporate identity for the bakery 'Confectionery Raccoon'.",
    techStack: ["Adobe Photoshop", "Illustrator"],
    link: "https://www.figma.com/file/Sql4ZHeeiSUEHovNJBqPUD/Untitled?type=design&node-id=0%3A1&mode=design&t=iMDwUUfcuXMcWZDF-1",
  },
  {
    image: "/images/logoAsgard.png",
    text: "Design of the visual concept of the site layout for the fitness club 'Asgard'. Note that this is a textual representation of the design elements.",
    techStack: ["Figma", "Adobe Illustrator"],
    link: "https://www.figma.com/file/VPDcOyxS4H6eUU5Tp6me0U/maket?type=design&node-id=0%3A1&mode=design&t=AhSCzerKmRgBCCVG-1",
  },
  {
    image: "/images/logo.png",
    text: "Design and creation of a vector logo for the client, with practical application. ",
    techStack: ["Adobe Illustrator"],
    link: "https://www.figma.com/file/GRTHgfLBtsECllzCUrMw4d/logo?type=design&node-id=0%3A1&mode=design&t=71JRAzMzzUbalpN6-1",
  },
  {
    image: "/images/logoCertificate.png",
    text: "Design and artistic development of a print-ready certificate and stamp layout for an art studio.",
    techStack: ["Adobe Illustrator", "Photoshop"],
    link: "https://www.figma.com/file/XgXlfeSRM4vPw9KuLqwjE7/certificate?type=design&node-id=0%3A1&mode=design&t=8YXfTAtflsvXWHOV-1",
  },
  {
    image: "/images/logoUkraine.png",
    text: "Creative design and development of a landing page for the client.",
    techStack: ["Adobe Illustrator", "Photoshop"],
    link: "https://www.figma.com/file/aUkeBcmVRielGlD2kEY8W0/Landing-Page?type=design&node-id=0%3A1&mode=design&t=zAb5BEC5k4uSv6N1-1",
  },
  {
    image: "/images/logoOnedun.png",
    text: "Test task: development of an electronic newsletter layout in the style of the website (logo by another designer provided for practical execution).",
    techStack: ["Figma"],
    link: "https://www.figma.com/file/qy2f3520dRLJv2xD282Vmg/Project?type=design&node-id=0%3A1&mode=design&t=y1kdQm48v9raMdo4-1",
  },
];

export const CONTACTS = [
  {
    icon: <FaInstagram className="w-[100%] h-[100%]" />,
    text: "Instagram",
    link: "https://www.instagram.com/sashabrinyk?igsh=am9qN2E3eXZibDh6",
  },
  {
    icon: <FaTelegram className="w-[100%] h-[100%]" />,
    text: "Telegram",
    link: "https://t.me/sashabryniuk",
  },
  {
    icon: <SiGmail className="w-[100%] h-[100%]" />,
    text: "Gmail",
    link: "mailto:sashabrinyk@gmail.com",
  },
  {
    text: "Freelancehunt",
    link: "https://freelancehunt.com/freelancer/sashabrynyuk.html",
  },
];
