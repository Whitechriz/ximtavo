import {
  GraduationCap,
  Code2,
  MonitorCog,
  Megaphone,
  Blocks,
  ClipboardList,
  Building2,
  Palette,
  Cctv,
  BrainCircuit,
} from "lucide-react";

export const navigation = [
  {
    label: "Company",
    dropdown: true,
    items: [
      { label: "About Ximtavo", to: "/about" },
      { label: "Mission, Vision & Values", to: "/mission-vision-values" },
      { label: "Leadership", to: "/leadership" },
      { label: "Partners", to: "/partners" },
      { label: "Careers", to: "/careers" },
    ],
  },
  {
    label: "Our Services",
    dropdown: true,
    items: [],
  },
  {
    label: "Our Sectors",
    dropdown: false,
    to: "/sectors",
    items: [],
  },
  {
    label: "Community",
    dropdown: true,
    items: [
      {
        label: "Corporate Social Responsibility",
        to: "/corporate-social-responsibility",
      },
      { label: "Events", to: "/events" },
    ],
  },
  {
    label: "Insights",
    dropdown: false,
    to: "/insights",
    items: [],
  },
];

export const services = [
  {
    label: "ICT & Digital Skills Training",
    to: "/services/ict-digital-skills-training",
    icon: GraduationCap,
  },
  {
    label: "Website & App Design and Development",
    to: "/services/website-app-development",
    icon: Code2,
  },
  {
    label: "Computer Hardware & Systems Maintenance",
    to: "/services/computer-hardware-maintenance",
    icon: MonitorCog,
  },
  {
    label: "Digital Marketing & Social Media",
    to: "/services/digital-marketing-social-media",
    icon: Megaphone,
  },
  {
    label: "Software & Enterprise Solutions",
    to: "/services/software-enterprise-solutions",
    icon: Blocks,
  },
  {
    label: "Project Management & ICT Consultations",
    to: "/services/project-management-ict-consulting",
    icon: ClipboardList,
  },
  {
    label: "Construction Technology & Real Estate",
    to: "/services/construction-technology-real-estate",
    icon: Building2,
  },
  {
    label: "Graphics Design & Branding",
    to: "/services/graphics-design-branding",
    icon: Palette,
  },
  {
    label: "CCTV Installation",
    to: "/services/cctv-installation",
    icon: Cctv,
  },
  {
    label: "AI Automation & Solutions",
    to: "/services/ai-automation-solutions",
    icon: BrainCircuit,
  },
];