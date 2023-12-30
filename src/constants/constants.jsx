import { FaFigma } from "react-icons/fa";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobeindesign,
} from "react-icons/si";
import Corel from "../icons/coreldraw-icon.svg?react";

export const SKILLS = [
  {
    icon: <FaFigma className="w-[90px] h-[90px] " />,
    title: "FIGMA",
  },
  {
    icon: <SiAdobeillustrator className="w-[90px] h-[90px] " />,
    title: "AI",
  },
  {
    icon: <SiAdobephotoshop className="w-[90px] h-[90px]" />,
    title: "PS",
  },
  {
    icon: <SiAdobeindesign className="w-[90px] h-[90px]" />,
    title: "ID",
  },
  {
    icon: <Corel className="w-[90px] h-[90px]" />,
    title: "Corel",
  },
];

export const PROJECTS = [
  {
    image: "/images/logoBakery.png",
    text: "Development of a corporate identity for the bakery 'Confectionery Raccoon'.",
    techStack: `The process involved:\nAdobe Photoshop and Illustrator`,
  },
  {
    image: "/images/logoAsgard.png",
    text: "Design of the visual concept of the site layout for the fitness club 'Asgard'. Note that this is a textual representation of the design elements.",
    techStack: `The process involved:\nFigma and Adobe Illustrator`,
  },
  {
    image: "/images/logo.png",
    text: "Design and creation of a vector logo for the client, with practical application. ",
    techStack: `The process involved:\nAdobe Illustrator`,
  },
  {
    image: "/images/logoArtStudio.png",
    text: "Design and artistic development of a print-ready certificate and stamp layout for an art studio.",
    techStack: `The process involved:\nAdobe Illustrator and Photoshop`,
  },
  {
    image: "/images/logoUkraine.png",
    text: "Creative design and development of a landing page for the client.",
    techStack: `The process involved:\nAdobe Illustrator and Photoshop`,
  },
  {
    image: "/images/logoOnedun.png",
    text: "Test task: development of an electronic newsletter layout in the style of the website (logo by another designer provided for practical execution).",
    techStack: `The process involved:\nFigma`,
  },
];
