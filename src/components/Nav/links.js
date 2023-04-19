import { FaAward, FaHome } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { RiFilePaper2Fill } from "react-icons/ri";
import { BsFillFileEarmarkPersonFill, BsGlobe2 } from "react-icons/bs";

export const links = [
  { id: "home", path: "/collapse", title: "HOME", icon: <FaHome /> },
  {
    id: "awards",
    path: "/awards",
    title: "AWARDS",
    icon: <FaAward />,
  },
  {
    id: "education",
    path: "/education",
    title: "EDUCATION",
    icon: <HiAcademicCap />,
  },
  {
    id: "humanrights",
    path: "/humanrights",
    title: "HUMAN RIGHTS",
    icon: <RiFilePaper2Fill />,
  },
  {
    id: "bio",
    path: "/bio",
    title: "BIO",
    icon: <BsFillFileEarmarkPersonFill />,
  },
  {
    id: "malta",
    path: "https://www.maltaconferencesfoundation.org",
    title: "MALTA",
    icon: <BsGlobe2 />,
  },
  // { id: "outreach", path: "/outreach", title: "Outreach" },
  // { id: "gallery", path: "/gallery", title: "Gallery" },
  // { id: "contact", path: "/contact", title: "Contact" },
];
