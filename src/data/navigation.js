
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
            "About Ximtavo",
            "Mission, Vision & Values",
            "Leadership",
            "Partners",
            "Careers",
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
        items: [],
    },
    {
        label: "Community",
        dropdown: true,
        items: [
            "Corporate Social Responsibility",
            "Events",
        ],
    },
    {
        label: "Insights",
        dropdown: false,
        items: [],
    },
];

export const services = [
    {
        label: "ICT & Digital Skills Training",
        icon: GraduationCap,
    },
    {
        label: "Website & App Design and Development",
        icon: Code2,
    },
    {
        label: "Computer Hardware & Systems Maintenance",
        icon: MonitorCog,
    },
    {
        label: "Digital Marketing & Social Media",
        icon: Megaphone,
    },
    {
        label: "Software & Enterprise Solutions",
        icon: Blocks,
    },
    {
        label: "Project Management & ICT Consultations",
        icon: ClipboardList,
    },
    {
        label: "Construction Technology & Real Estate",
        icon: Building2,
    },
    {
        label: "Graphics Design & Branding",
        icon: Palette,
    },
    {
        label: "CCTV Installation",
        icon: Cctv,
    },
    {
        label: "AI Automation & Solutions",
        icon: BrainCircuit,
    },
];
