
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import {
    ArrowRight,
    ArrowUpRight,
    Target,
    Eye,
    ShieldCheck,
    Lightbulb,
    Users,
    GraduationCap,
    Code2,
    MonitorCog,
    Sparkles,
    CheckCircle2,
    Workflow,
} from "lucide-react";

const values = [
    {
        number: "01",
        title: "Innovation",
        description:
            "We explore better ways to solve problems, combining creative thinking with practical technology.",
        icon: Lightbulb,
    },
    {
        number: "02",
        title: "Quality",
        description:
            "We aim to deliver thoughtful, dependable work with attention to detail and the needs of every client.",
        icon: ShieldCheck,
    },
    {
        number: "03",
        title: "People First",
        description:
            "We believe technology creates greater value when it empowers people, strengthens skills and improves everyday experiences.",
        icon: Users,
    },
    {
        number: "04",
        title: "Continuous Growth",
        description:
            "We embrace learning, adaptability and improvement as technology and customer needs continue to evolve.",
        icon: Sparkles,
    },
];

const services = [
    {
        title: "Digital Skills & ICT Training",
        description:
            "Building practical digital capabilities through technology training and skills development.",
        icon: GraduationCap,
        to: "/services/ict-digital-skills-training",
    },
    {
        title: "Web & App Development",
        description:
            "Creating digital experiences and software solutions designed around real needs.",
        icon: Code2,
        to: "/services/website-app-development",
    },
    {
        title: "Systems & Technology Support",
        description:
            "Supporting computer systems, hardware and technology infrastructure.",
        icon: MonitorCog,
        to: "/services/computer-hardware-maintenance",
    },
];

const approach = [
    {
        step: "01",
        title: "Understand",
        description:
            "We begin by understanding the challenge, the people involved and the outcome that matters.",
    },
    {
        step: "02",
        title: "Plan",
        description:
            "We identify a suitable approach, define priorities and map out the work required.",
    },
    {
        step: "03",
        title: "Build",
        description:
            "We bring the plan to life through practical solutions, collaboration and careful execution.",
    },
    {
        step: "04",
        title: "Improve",
        description:
            "We value feedback, ongoing learning and opportunities to make solutions work better.",
    },
];

function SectionLabel({ children }) {
    return (
        <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#FF6A00]" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#FF6A00]">
                {children}
            </span>
        </div>
    );
}

export default function About() {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    return (
        <main
            className={`overflow-hidden transition-colors duration-300 ${isDark
                ? "bg-[#0B1019] text-white"
                : "bg-white text-[#111111]"
                }`}
        >
            {/* HERO */}
            <section className="relative isolate bg-[#080B12] text-white">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -z-10"
                >
                    <div className="absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full bg-[#00CFFF]/10 blur-[100px]" />
                    <div className="absolute -bottom-32 left-[15%] h-[300px] w-[300px] rounded-full bg-[#FF6A00]/15 blur-[90px]" />
                    <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:52px_52px]" />
                </div>

                <div className="mx-auto grid min-h-[590px] max-w-[1440px] items-center gap-12 px-6 pb-20 pt-36 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-16 lg:pb-24">
                    <div className="max-w-3xl">
                        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-semibold tracking-wide text-white/80">
                            <span className="h-2 w-2 rounded-full bg-[#00CFFF]" />
                            GET TO KNOW XIMTAVO
                        </div>

                        <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
                            Technology with
                            <span className="block text-[#00CFFF]">
                                purpose.
                            </span>
                            Solutions that move you forward.
                        </h1>

                        <p className="mt-7 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
                            We bring technology, creativity and practical skills together
                            to help people and organisations navigate a digital world.
                        </p>

                        <div className="mt-9 flex flex-wrap gap-4">
                            <Link
                                to="/services/website-app-development"
                                className="inline-flex items-center gap-3 rounded-full bg-[#FF6A00] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-orange-600"
                            >
                                Explore our services
                                <ArrowRight size={17} />
                            </Link>

                            <a
                                href="#our-story"
                                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[#00CFFF] hover:text-[#00CFFF]"
                            >
                                Discover our story
                                <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Decorative technology composition */}
                    <div className="relative mx-auto flex min-h-[350px] w-full max-w-[470px] items-center justify-center lg:min-h-[440px]">
                        <div className="absolute h-[300px] w-[300px] rounded-full border border-white/10 sm:h-[380px] sm:w-[380px]" />
                        <div className="absolute h-[235px] w-[235px] rounded-full border border-[#00CFFF]/25 sm:h-[300px] sm:w-[300px]" />
                        <div className="absolute h-[170px] w-[170px] rounded-full border border-[#FF6A00]/35 sm:h-[220px] sm:w-[220px]" />

                        <div className="relative flex h-36 w-36 items-center justify-center rounded-[2rem] border border-white/15 bg-white/[0.07] shadow-2xl shadow-[#00CFFF]/10 backdrop-blur-xl sm:h-44 sm:w-44">
                            <span className="font-serif text-7xl tracking-[-12px] sm:text-8xl">
                                X<span className="relative -top-1 text-[#FF6A00]">T</span>
                            </span>
                            <span className="absolute -bottom-7 text-xs font-semibold tracking-[0.35em] text-white/65">
                                XIMTAVO
                            </span>
                        </div>

                        <div className="absolute left-0 top-[15%] flex items-center gap-3 rounded-2xl border border-white/10 bg-[#151923]/90 p-4 shadow-xl sm:left-2">
                            <Code2 className="text-[#00CFFF]" size={23} />
                            <div>
                                <p className="text-sm font-semibold">Digital solutions</p>
                                <p className="mt-1 text-xs text-white/50">Build for purpose</p>
                            </div>
                        </div>

                        <div className="absolute bottom-[13%] right-0 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#151923]/90 p-4 shadow-xl sm:right-0">
                            <GraduationCap className="text-[#FF6A00]" size={24} />
                            <div>
                                <p className="text-sm font-semibold">Skills & learning</p>
                                <p className="mt-1 text-xs text-white/50">Grow with technology</p>
                            </div>
                        </div>

                        <div className="absolute right-[3%] top-[13%] h-3 w-3 rounded-full bg-[#FF6A00] shadow-[0_0_24px_#FF6A00]" />
                        <div className="absolute bottom-[17%] left-[9%] h-2.5 w-2.5 rounded-full bg-[#00CFFF] shadow-[0_0_20px_#00CFFF]" />
                    </div>
                </div>

                <div className="border-t border-white/10">
                    <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 px-6 py-5 text-xs text-white/55 sm:px-10 lg:px-16">
                        <span>ABOUT XIMTAVO</span>
                        <span>Technology · Creativity · Capability</span>
                    </div>
                </div>
            </section>

            {/* COMPANY INTRODUCTION */}
            <section
                id="our-story"
                className="scroll-mt-24 py-20 sm:py-28"
            >
                <div className="mx-auto grid max-w-[1280px] gap-12 px-6 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-16">
                    <div>
                        <SectionLabel>Who we are</SectionLabel>
                        <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                            Making technology more useful, accessible and impactful.
                        </h2>
                    </div>

                    <div className="space-y-6 text-base leading-8 text-slate-600">
                        <p>
                            Ximtavo is a technology-focused brand bringing together digital
                            services, technical solutions, creative work and skills
                            development. Our aim is to help turn ideas and challenges into
                            practical opportunities through technology.
                        </p>
                        <p>
                            From web and application development to ICT training, systems
                            maintenance, digital marketing, branding and other technology
                            services, our service offering is designed around the many ways
                            people and organisations use technology to learn, create and grow.
                        </p>
                        <p>
                            We believe good technology is about more than the tools
                            themselves. It is about understanding people, solving the right
                            problems and making the result useful in the real world.
                        </p>

                        <a
                            href="#our-services"
                            className="inline-flex items-center gap-2 pt-2 text-sm font-bold text-[#111111] transition hover:text-[#FF6A00]"
                        >
                            See what we do
                            <ArrowUpRight size={17} />
                        </a>
                    </div>
                </div>
            </section>

            {/* MISSION AND VISION */}
            <section
                className={`py-20 transition-colors duration-300 sm:py-24 ${isDark ? "bg-[#101722]" : "bg-[#F5F7FA]"
                    }`}
            >
                <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
                    <SectionLabel>Our direction</SectionLabel>

                    <div className="grid gap-6 md:grid-cols-2">
                        <article className="group relative overflow-hidden rounded-3xl bg-[#0B1019] p-8 text-white sm:p-10">
                            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#00CFFF]/10 blur-2xl transition group-hover:bg-[#00CFFF]/20" />
                            <div className="relative">
                                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00CFFF]/10 text-[#00CFFF]">
                                    <Target size={28} />
                                </div>
                                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#00CFFF]">
                                    Our mission
                                </p>
                                <h3 className="max-w-md text-3xl font-semibold leading-snug sm:text-4xl">
                                    To deliver practical technology solutions that empower people
                                    and help organisations move forward.
                                </h3>
                                <p className="mt-5 max-w-lg leading-7 text-white/60">
                                    We focus on useful services, accessible learning and
                                    solutions shaped around real needs.
                                </p>
                            </div>
                        </article>

                        <article className={`group relative overflow-hidden rounded-3xl border p-8 transition-colors duration-300 sm:p-10 ${isDark
                            ? "border-white/10 bg-[#151D29] text-white"
                            : "border-slate-200 bg-white text-[#111111]"
                            }`}>
                            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#FF6A00]/10 blur-2xl transition group-hover:bg-[#FF6A00]/20" />
                            <div className="relative">
                                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-[#FF6A00]">
                                    <Eye size={28} />
                                </div>
                                <p className={`mt-5 max-w-lg leading-7 ${isDark ? "text-slate-300" : "text-slate-600"
                                    }`}>
                                    Our vision
                                </p>
                                <h3 className="max-w-md text-3xl font-semibold leading-snug sm:text-4xl">
                                    A future where technology creates more opportunities for
                                    people, businesses and communities.
                                </h3>
                                <p className={`mt-5 max-w-lg leading-7 ${isDark ? "text-slate-300" : "text-slate-600"
                                    }`}>
                                    We aspire to contribute to a more capable, connected and
                                    digitally enabled society.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section
                id="our-services"
                className="scroll-mt-24 py-20 sm:py-28"
            >
                <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
                    <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <div className="max-w-2xl">
                            <SectionLabel>What we do</SectionLabel>
                            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                                Technology services for real-world needs.
                            </h2>
                            <p className="mt-5 max-w-xl leading-7 text-slate-600">
                                Our service areas bring together technical expertise,
                                creativity and learning to support different digital needs.
                            </p>
                        </div>

                        <Link
                            to="/services/website-app-development"
                            className="inline-flex shrink-0 items-center gap-2 text-sm font-bold transition hover:text-[#FF6A00]"
                        >
                            Explore services
                            <ArrowRight size={17} />
                        </Link>
                    </div>

                    <div className="grid gap-5 md:grid-cols-3">
                        {services.map((service) => {
                            const Icon = service.icon;

                            return (
                                <Link
                                    key={service.to}
                                    to={service.to}
                                    className={`group rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 hover:border-[#FF6A00]/50 sm:p-8 ${isDark
                                        ? "border-white/10 bg-[#151D29] text-white hover:shadow-xl hover:shadow-black/20"
                                        : "border-slate-200 bg-white text-[#111111] hover:shadow-xl hover:shadow-slate-200/50"
                                        }`}
                                >
                                    <div className="mb-8 flex items-center justify-between">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF2E8] text-[#FF6A00]">
                                            <Icon size={27} strokeWidth={1.7} />
                                        </div>
                                        <ArrowUpRight
                                            size={21}
                                            className="text-slate-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#FF6A00]"
                                        />
                                    </div>

                                    <h3 className="text-xl font-semibold leading-snug">
                                        {service.title}
                                    </h3>
                                    <p className={`mt-4 text-sm leading-7 ${isDark ? "text-slate-300" : "text-slate-600"
                                        }`}>
                                        {service.description}
                                    </p>
                                    <span className="mt-7 inline-block text-xs font-bold uppercase tracking-wider text-[#FF6A00]">
                                        Learn more
                                    </span>
                                </Link>
                            );
                        })}
                    </div>

                    <div className={`mt-5 rounded-3xl p-7 transition-colors duration-300 sm:p-9 ${isDark ? "bg-[#151D29]" : "bg-[#F5F7FA]"
                        }`}>
                        <p className={`text-sm leading-7 ${isDark ? "text-slate-300" : "text-slate-600"
                            }`}>
                            Our wider service offering also includes digital marketing,
                            software and enterprise solutions, ICT consultancy, project
                            management, construction technology, real estate, graphics
                            design, branding, CCTV installation and AI automation.
                        </p>
                    </div>
                </div>
            </section>

            {/* VALUES */}
            <section className="bg-[#0B1019] py-20 text-white sm:py-28">
                <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
                    <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
                        <div>
                            <SectionLabel>What guides us</SectionLabel>
                            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                                Our values shape how we work.
                            </h2>
                            <p className="mt-6 max-w-md leading-8 text-white/60">
                                The way we approach our work matters. These principles
                                represent the standards we aim to bring to our services,
                                relationships and decisions.
                            </p>
                            <div className="mt-8 flex items-center gap-3 text-sm text-white/80">
                                <CheckCircle2 className="text-[#00CFFF]" size={19} />
                                Practical thinking. People-focused solutions.
                            </div>
                        </div>

                        <div className="grid gap-x-8 sm:grid-cols-2">
                            {values.map((value) => {
                                const Icon = value.icon;

                                return (
                                    <article
                                        key={value.number}
                                        className="border-t border-white/15 py-7"
                                    >
                                        <div className="mb-6 flex items-center justify-between">
                                            <span className="text-sm font-semibold text-[#00CFFF]">
                                                {value.number}
                                            </span>
                                            <Icon
                                                size={23}
                                                strokeWidth={1.5}
                                                className="text-[#FF6A00]"
                                            />
                                        </div>
                                        <h3 className="text-xl font-semibold">{value.title}</h3>
                                        <p className="mt-3 text-sm leading-7 text-white/60">
                                            {value.description}
                                        </p>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW WE WORK */}
            <section className="py-20 sm:py-28">
                <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
                    <div className="mx-auto mb-14 max-w-2xl text-center">
                        <div className="flex justify-center">
                            <SectionLabel>Our approach</SectionLabel>
                        </div>
                        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                            From a challenge to a practical solution.
                        </h2>
                        <p className="mt-5 leading-7 text-slate-600">
                            Every project is different. Our approach starts with
                            understanding the need and stays focused on creating something
                            useful.
                        </p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {approach.map((item, index) => (
                            <article key={item.step} className="relative">
                                {index !== approach.length - 1 && (
                                    <div className="absolute left-12 top-6 hidden h-px w-[calc(100%-24px)] bg-slate-200 lg:block" />
                                )}
                                <div className="relative mb-7 flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-bold text-[#FF6A00]">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                <p className={`mt-5 leading-7 ${isDark ? "text-slate-300" : "text-slate-600"
                                    }`}>
                                    {item.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CLOSING CTA */}
            <section className="px-6 pb-20 sm:px-10 sm:pb-28 lg:px-16">
                <div className="relative mx-auto max-w-[1408px] overflow-hidden rounded-[2rem] bg-[#FF6A00] px-7 py-14 text-white sm:px-12 sm:py-16 lg:px-16">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-10 -top-32 h-80 w-80 rounded-full border-[50px] border-white/10"
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute bottom-[-120px] right-[20%] h-64 w-64 rounded-full bg-black/10 blur-2xl"
                    />

                    <div className="relative flex flex-col justify-between gap-9 lg:flex-row lg:items-center">
                        <div className="max-w-2xl">
                            <div className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                                <Workflow size={17} />
                                Let’s move forward
                            </div>
                            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                                Have an idea or a challenge to solve?
                            </h2>
                            <p className="mt-5 max-w-xl leading-7 text-white/85">
                                Explore our technology services and discover how we could
                                help you take your next step.
                            </p>
                        </div>

                        <Link
                            to="/services/ict-digital-skills-training"
                            className="inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-full bg-[#0B1019] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#171F2D] lg:self-center"
                        >
                            Explore our services
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
