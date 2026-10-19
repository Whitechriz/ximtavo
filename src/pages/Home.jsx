import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

function CountUp({ target, suffix = "", duration = 2000 }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let animationFrame;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const progress = Math.min(
                (currentTime - startTime) / duration,
                1
            );

            // Ease-out animation
            const easedProgress = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easedProgress * target));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(target);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [target, duration]);

    return (
        <>
            {String(count).padStart(2, "0")}
            {suffix}
        </>
    );
}
export default function Home() {

    const { theme } = useTheme();
    const isDark = theme === "dark";
    const heroImages = [
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2400&q=85",
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?cs=tinysrgb&dpr=1&w=500",
    ];

    const [activeImage, setActiveImage] = useState(0);
    const [activeCourse, setActiveCourse] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveImage((current) => (current + 1) % heroImages.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCourse((current) =>
                (current + 1) % featuredCourses.length
            );
        }, 6000);

        return () => clearInterval(interval);
    }, []);


    const statistics = [
        { target: 4, label: "Operation Hubs", pad: true },
        { target: 23, label: "Partnerships", pad: true },
        { target: 26, suffix: "+", label: "Countries" },
        { target: 50, suffix: "+", label: "Awards" },
    ];

    const featuredCourses = [
        {
            number: "01",
            title: "Cybersecurity",
            category: "ADVANCED PROFESSIONAL TRAINING",
            description:
                "Develop practical skills to identify cyber threats, protect digital systems, manage vulnerabilities, and strengthen organisational security.",
            image:
                "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=85",
            duration: "Professional Skills",
        },
        {
            number: "02",
            title: "Cloud Computing",
            category: "CLOUD & INFRASTRUCTURE",
            description:
                "Learn cloud infrastructure, virtualisation, deployment, storage, and the foundations of managing scalable modern IT environments.",
            image:
                "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85",
            duration: "Technical Training",
        },
        {
            number: "03",
            title: "Artificial Intelligence",
            category: "AI & EMERGING TECHNOLOGY",
            description:
                "Explore AI tools, machine learning fundamentals, intelligent automation, and practical ways to apply AI to real business challenges.",
            image:
                "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85",
            duration: "Future-Ready Skills",
        },
        {
            number: "04",
            title: "Full Stack Website Development",
            category: "SOFTWARE ENGINEERING",
            description:
                "Build modern web applications by learning frontend development, backend programming, database integration, APIs, and deployment.",
            image:
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85",
            duration: "Hands-on Development",
        },
        {
            number: "05",
            title: "Data Analytics & Business Intelligence",
            category: "DATA & DECISION INTELLIGENCE",
            description:
                "Turn raw data into useful insights through data analysis, visualisation, reporting, and business intelligence techniques.",
            image:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
            duration: "Practical Analytics",
        },
    ];


    return (
        <main className="relative isolate min-h-screen overflow-hidden bg-[#0A0A0A] text-white">
            {/* Replace this image URL with /images/hero-bg.jpg later */}
            {/* Rotating hero backgrounds */}
            {heroImages.map((image, index) => (
                <div
                    key={image}
                    aria-hidden="true"
                    className={`absolute inset-0 -z-20 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out ${activeImage === index ? "opacity-100" : "opacity-0"
                        }`}
                    style={{
                        backgroundImage: `url("${image}")`,
                    }}
                />
            ))}

            {/* Dark overlay for readable text */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/65 to-black/35" />
            <div className="absolute inset-0 -z-10 bg-[#061a37]/25" />

            {/* Hero content */}
            <section className="relative mx-auto flex min-h-screen max-w-[1500px] flex-col justify-center px-6 pb-44 pt-32 lg:px-12 xl:px-16">
                <div className="max-w-3xl">
                    <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-[#00CFFF]">
                        Technology for Africa
                    </p>

                    <h1 className="text-4xl font-light leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                        We Are Positioning Africa to Maximize the Future
                    </h1>

                    <p className="mt-7 max-w-xl text-sm leading-7 text-white/90 sm:text-base">
                        We have over two decades of immense contribution to the
                        Information Communication Technology Sector across Africa.
                    </p>

                    <a
                        href="/services"
                        className="mt-8 inline-flex items-center gap-3 bg-[#FF6A00] px-6 py-3 font-medium text-white transition hover:bg-[#e85f00]"
                    >
                        Explore Our Services
                        <span aria-hidden="true">↗</span>
                    </a>
                </div>


                {/* Bottom statistics */}
                <div className="absolute inset-x-6 bottom-7 grid grid-cols-2 gap-6 text-center sm:grid-cols-4 lg:inset-x-12">
                    {statistics.map(({ target, suffix = "", label }) => (
                        <div key={label}>
                            <p className="text-4xl font-light tabular-nums text-[#FF6A00] sm:text-5xl">
                                <CountUp target={target} suffix={suffix} duration={2200} />
                            </p>

                            <p className="mt-1 text-sm text-white/90">
                                {label}
                            </p>
                        </div>
                    ))}
                </div>
            </section>


            {/* COMPANY OVERVIEW */}
            <section
                className={`relative overflow-hidden px-6 py-20 sm:py-28 lg:px-12 transition-colors duration-300 ${isDark
                    ? "bg-[#111111] text-white"
                    : "bg-[#F5F4F0] text-[#0A0A0A]"
                    }`}
            >
                <div className="mx-auto grid max-w-[1500px] items-center gap-14 lg:grid-cols-2 lg:gap-20">

                    <div>
                        <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#FF6A00]">
                            Who We Are
                        </p>

                        <h2 className="max-w-2xl text-3xl font-light leading-tight sm:text-4xl lg:text-5xl">
                            Technology that moves businesses and communities forward.
                        </h2>

                        <p className={`mt-7 max-w-xl text-base leading-8 ${isDark ? "text-white/70" : "text-black/65"
                            }`}>
                            XimTavo brings together technology, innovation, and practical
                            digital solutions to help organisations operate smarter,
                            connect better, and prepare for the future.
                        </p>

                        <p className={`mt-4 max-w-xl text-base leading-8 ${isDark ? "text-white/70" : "text-black/65"
                            }`}>
                            From digital platforms to technology infrastructure, our focus
                            is on turning business challenges into opportunities for growth.
                        </p>

                        <a
                            href="/company"
                            className="group mt-8 inline-flex items-center gap-3 border-b-2 border-[#FF6A00] pb-2 text-sm font-semibold transition-colors hover:text-[#FF6A00]"
                        >
                            Discover XimTavo
                            <span className="transition-transform group-hover:translate-x-1">
                                ↗
                            </span>
                        </a>
                    </div>

                    <div className="relative">
                        <div className="absolute -right-4 -top-4 h-32 w-32 border-r-2 border-t-2 border-[#FF6A00]/70 sm:-right-6 sm:-top-6" />

                        <img
                            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85"
                            alt="Modern collaborative business workspace"
                            className="relative z-10 h-[320px] w-full object-cover sm:h-[430px]"
                            loading="lazy"
                        />

                        <div className="absolute -bottom-5 -left-3 z-20 max-w-[250px] bg-[#0A0A0A] p-5 text-white sm:-left-6 sm:p-7">
                            <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#00CFFF]">
                                Our Approach
                            </span>
                            <p className="text-lg font-medium leading-snug">
                                Innovation with purpose. Technology with impact.
                            </p>
                        </div>
                    </div>

                </div>
            </section>


            {/* XIMTAVO TECH ACADEMY — ADVANCED COURSES */}
            <section
                className={`overflow-hidden px-6 py-20 transition-colors duration-300 sm:py-28 lg:px-12 ${isDark
                        ? "bg-[#111111] text-white"
                        : "bg-[#F5F4F0] text-[#0A0A0A]"
                    }`}
            >
                <div className="mx-auto max-w-[1500px]">

                    {/* Section heading */}
                    <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                        <div>
                            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#FF6A00]">
                                XimTavo Tech Academy
                            </p>

                            <h2 className="max-w-3xl text-3xl font-light leading-tight sm:text-4xl lg:text-5xl">
                                Advanced courses for the next generation of technology professionals.
                            </h2>

                            <p
                                className={`mt-5 max-w-2xl text-sm leading-7 sm:text-base ${isDark ? "text-white/65" : "text-black/60"
                                    }`}
                            >
                                Acquire practical, industry-relevant skills designed to
                                prepare you for opportunities in technology, business, and
                                the digital economy.
                            </p>
                        </div>

                        <div className="shrink-0">
                            <span className="text-sm font-medium text-[#FF6A00]">
                                Professional Training · Practical Skills
                            </span>
                        </div>
                    </div>

                    {/* Carousel */}

{/* Carousel: show exactly one course at a time */}
<div className="relative overflow-hidden">
    <article
        key={featuredCourses[activeCourse].number}
        className="flex w-full animate-course-slide flex-col overflow-hidden lg:flex-row"
    >
        {/* Course image */}
        <div className="relative min-h-[280px] w-full overflow-hidden sm:min-h-[400px] lg:min-h-[490px] lg:w-1/2">
            <img
                src={featuredCourses[activeCourse].image}
                alt={featuredCourses[activeCourse].title}
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

            <span className="absolute bottom-6 left-6 text-6xl font-light text-white/80 sm:bottom-8 sm:left-8 sm:text-8xl">
                {featuredCourses[activeCourse].number}
            </span>

            <span className="absolute right-5 top-5 bg-[#FF6A00] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white">
                Featured Course
            </span>
        </div>

        {/* Course information */}
        <div
            className={`flex w-full flex-col justify-center px-6 py-10 sm:px-10 sm:py-14 lg:w-1/2 lg:px-14 xl:px-20 ${
                isDark ? "bg-[#1B1B1B]" : "bg-white"
            }`}
        >
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
                {featuredCourses[activeCourse].category}
            </p>

            <h3 className="max-w-xl text-3xl font-light leading-tight sm:text-4xl xl:text-5xl">
                {featuredCourses[activeCourse].title}
            </h3>

            <p
                className={`mt-6 max-w-xl text-sm leading-7 sm:text-base sm:leading-8 ${
                    isDark ? "text-white/70" : "text-black/65"
                }`}
            >
                {featuredCourses[activeCourse].description}
            </p>

            <div
                className={`mt-7 border-t pt-5 text-sm ${
                    isDark
                        ? "border-white/15 text-white/60"
                        : "border-black/10 text-black/60"
                }`}
            >
                {featuredCourses[activeCourse].duration}
            </div>

            <div className="mt-8">
                <a
                    href="/contact"
                    className="inline-flex items-center gap-4 bg-[#FF6A00] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#e85f00]"
                >
                    Enquire About This Course
                    <span aria-hidden="true">↗</span>
                </a>
            </div>
        </div>
    </article>
</div>


                    {/* Carousel controls */}
                    <div className="mt-8 flex flex-wrap items-center justify-between gap-5">
                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                onClick={() =>
                                    setActiveCourse(
                                        (current) =>
                                            (current - 1 + featuredCourses.length) %
                                            featuredCourses.length
                                    )
                                }
                                aria-label="Previous course"
                                className={`flex h-12 w-12 items-center justify-center border text-2xl transition hover:border-[#FF6A00] hover:bg-[#FF6A00] hover:text-white ${isDark
                                        ? "border-white/20 text-white"
                                        : "border-black/15 text-[#0A0A0A]"
                                    }`}
                            >
                                ←
                            </button>

                            <button
                                type="button"
                                onClick={() =>
                                    setActiveCourse(
                                        (current) =>
                                            (current + 1) % featuredCourses.length
                                    )
                                }
                                aria-label="Next course"
                                className={`flex h-12 w-12 items-center justify-center border text-2xl transition hover:border-[#FF6A00] hover:bg-[#FF6A00] hover:text-white ${isDark
                                        ? "border-white/20 text-white"
                                        : "border-black/15 text-[#0A0A0A]"
                                    }`}
                            >
                                →
                            </button>

                            <span
                                className={`ml-3 text-sm tabular-nums ${isDark ? "text-white/60" : "text-black/60"
                                    }`}
                            >
                                {String(activeCourse + 1).padStart(2, "0")} /{" "}
                                {String(featuredCourses.length).padStart(2, "0")}
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            {featuredCourses.map((course, index) => (
                                <button
                                    key={course.number}
                                    type="button"
                                    onClick={() => setActiveCourse(index)}
                                    aria-label={`View ${course.title}`}
                                    aria-current={activeCourse === index ? "true" : undefined}
                                    className={`h-2.5 rounded-full transition-all duration-300 ${activeCourse === index
                                            ? "w-10 bg-[#FF6A00]"
                                            : isDark
                                                ? "w-2.5 bg-white/30 hover:bg-white/60"
                                                : "w-2.5 bg-black/20 hover:bg-black/50"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </section>


            {/* SOLUTIONS SECTION */}
            <section
                className={`px-6 py-20 sm:py-28 lg:px-12 transition-colors duration-300 ${isDark
                    ? "bg-[#0A0A0A] text-white"
                    : "bg-white text-[#0A0A0A]"
                    }`}
            >
                <div className="mx-auto max-w-[1500px]">

                    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <div>
                            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#FF6A00]">
                                What We Do
                            </p>

                            <h2 className="max-w-2xl text-3xl font-light leading-tight sm:text-4xl lg:text-5xl">
                                Solutions built for a changing world.
                            </h2>

                            <p className={`mt-5 max-w-2xl text-sm leading-7 sm:text-base ${isDark ? "text-white/70" : "text-black/60"
                                }`}>
                                Explore technology services designed to help businesses
                                modernise operations, improve efficiency, and embrace new
                                opportunities.
                            </p>
                        </div>

                        <a
                            href="/services"
                            className="group inline-flex shrink-0 items-center gap-3 self-start border-b-2 border-[#FF6A00] pb-2 text-sm font-semibold transition-colors hover:text-[#FF6A00] md:self-auto"
                        >
                            Explore all solutions
                            <span className="transition-transform group-hover:translate-x-1">
                                ↗
                            </span>
                        </a>
                    </div>

                    <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

                        {[
                            {
                                number: "01",
                                title: "Software & Platforms",
                                description:
                                    "Purpose-built digital products and applications that simplify processes and support business growth.",
                                image:
                                    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
                            },
                            {
                                number: "02",
                                title: "IT Infrastructure",
                                description:
                                    "Reliable technology foundations, connectivity, and infrastructure solutions for modern organisations.",
                                image:
                                    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
                            },
                            {
                                number: "03",
                                title: "Managed Services",
                                description:
                                    "Proactive technology support, maintenance, and operational assistance to keep businesses running.",
                                image:
                                    "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80",
                            },
                            {
                                number: "04",
                                title: "Digital Transformation",
                                description:
                                    "Practical digital strategies that help organisations improve workflows and adapt to new opportunities.",
                                image:
                                    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
                            },
                        ].map((service) => (
                            <a
                                key={service.number}
                                href="/services"
                                className="group relative min-h-[370px] overflow-hidden bg-[#0A0A0A] text-white"
                            >
                                <img
                                    src={service.image}
                                    alt=""
                                    loading="lazy"
                                    className="absolute inset-0 h-full w-full object-cover opacity-60 transition duration-700 group-hover:scale-110 group-hover:opacity-40"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />

                                <div className="relative flex min-h-[370px] flex-col justify-between p-6 sm:p-7">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-semibold tracking-[0.2em] text-[#00CFFF]">
                                            {service.number}
                                        </span>

                                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 transition-all duration-300 group-hover:border-[#FF6A00] group-hover:bg-[#FF6A00]">
                                            ↗
                                        </span>
                                    </div>

                                    <div>
                                        <div className="mb-4 h-1 w-10 bg-[#FF6A00] transition-all duration-300 group-hover:w-16" />

                                        <h3 className="text-xl font-semibold leading-snug">
                                            {service.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-6 text-white/75">
                                            {service.description}
                                        </p>

                                        <span className="mt-5 inline-block text-xs font-semibold uppercase tracking-wider text-[#00CFFF]">
                                            Learn more
                                        </span>
                                    </div>
                                </div>
                            </a>
                        ))}

                    </div>
                </div>
            </section>


        </main>
    );
}
