
import React from "react";
import {
  Building2,
  HardHat,
  Cpu,
  Home,
  Network,
  ShieldCheck,
  DraftingCompass,
  ClipboardCheck,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  Building,
  Monitor,
  MapPin,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";

const capabilities = [
  {
    icon: Building2,
    title: "Construction Project Support",
    description:
      "Technology-driven support for construction projects, helping organisations coordinate resources, monitor progress and improve project delivery.",
  },
  {
    icon: DraftingCompass,
    title: "Building Planning & Design Technology",
    description:
      "Digital tools and technology solutions that support architectural planning, design coordination and modern building workflows.",
  },
  {
    icon: Cpu,
    title: "Smart Building Solutions",
    description:
      "Integration of intelligent systems that improve building automation, operational efficiency, comfort and facility management.",
  },
  {
    icon: Network,
    title: "Building ICT Infrastructure",
    description:
      "Planning and deployment of structured cabling, networking, internet connectivity and communication infrastructure for buildings.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Surveillance Systems",
    description:
      "Technology solutions for property protection, including CCTV surveillance, access control and integrated security infrastructure.",
  },
  {
    icon: Home,
    title: "Real Estate Technology Solutions",
    description:
      "Digital solutions that help property businesses manage information, improve customer engagement and streamline property operations.",
  },
];

const solutions = [
  {
    icon: Monitor,
    title: "Property Management Technology",
    description:
      "Digital systems for managing property information, maintenance activities, tenants and operational records.",
  },
  {
    icon: Lightbulb,
    title: "Smart Infrastructure",
    description:
      "Modern building technologies covering automation, energy monitoring, intelligent lighting and connected devices.",
  },
  {
    icon: Wrench,
    title: "ICT Installation & Integration",
    description:
      "Installation and integration of technology infrastructure for residential, commercial and institutional developments.",
  },
  {
    icon: ClipboardCheck,
    title: "Project Coordination",
    description:
      "Technical planning, implementation coordination, progress monitoring and delivery support for technology-related projects.",
  },
];

const process = [
  {
    number: "01",
    title: "Consultation & Assessment",
    description:
      "We understand the project, assess existing infrastructure and identify the client's technical and operational requirements.",
  },
  {
    number: "02",
    title: "Planning & Design",
    description:
      "We develop a practical technology plan, identify suitable solutions and define implementation requirements.",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "We coordinate the deployment, installation and integration of approved technology solutions.",
  },
  {
    number: "04",
    title: "Testing & Commissioning",
    description:
      "We verify system functionality, resolve technical issues and confirm that installed solutions meet agreed requirements.",
  },
  {
    number: "05",
    title: "Support & Maintenance",
    description:
      "We provide ongoing technical support and maintenance to help keep systems reliable and effective.",
  },
];

const industries = [
  "Residential Developments",
  "Commercial Buildings",
  "Real Estate Companies",
  "Construction Firms",
  "Hotels & Hospitality",
  "Corporate Offices",
  "Educational Institutions",
  "Government & Public Infrastructure",
];

const ConstructionTechnologyRealEstate = () => {
  return (
    <main
      className="min-h-screen"
      style={{
        background: "var(--page-bg)",
        color: "var(--page-text)",
      }}
    >
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0A0A0A] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85"
            alt="Modern commercial building architecture"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/35" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:px-10 lg:grid-cols-2 lg:py-32">
          <div>
            <div className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#FF6A00]">
              <span className="h-[2px] w-10 bg-[#FF6A00]" />
              Our Services
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
              Construction, Technology{" "}
              <span className="text-[#FF6A00]">& Real Estate</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-300">
              Connecting buildings, infrastructure and intelligent technology
              to create smarter, safer and more efficient environments.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-md bg-[#FF6A00] px-7 py-4 font-bold text-white transition hover:bg-[#e85e00]"
              >
                Discuss Your Project <ArrowRight size={18} />
              </Link>

              <a
                href="#capabilities"
                className="rounded-md border border-white/30 px-7 py-4 font-semibold transition hover:border-[#00CFFF] hover:text-[#00CFFF]"
              >
                Explore Our Solutions
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="ml-auto max-w-md border border-white/20 bg-white/[0.07] p-8 backdrop-blur-md">
              <Building2 size={45} className="mb-8 text-[#FF6A00]" />
              <h2 className="text-2xl font-bold">
                Building the Future Through Technology
              </h2>
              <p className="mt-4 leading-7 text-gray-300">
                We bring together construction support, ICT infrastructure,
                smart building systems and digital property solutions.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/20 pt-6">
                <div>
                  <p className="text-2xl font-black text-[#00CFFF]">Smart</p>
                  <p className="mt-1 text-sm text-gray-400">Infrastructure</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-[#00CFFF]">Connected</p>
                  <p className="mt-1 text-sm text-gray-400">Environments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
            Modern Infrastructure
          </p>
          <h2 className="text-3xl font-black leading-tight md:text-4xl">
            Transforming Spaces Through Intelligent Technology
          </h2>
          <p className="mt-6 leading-8" style={{ color: "var(--muted-text)" }}>
            The construction and real estate industries are evolving through
            technology. From connected buildings and digital infrastructure
            to property management systems, modern developments require
            reliable technology to operate efficiently.
          </p>
          <p
            className="mt-4 leading-8"
            style={{ color: "var(--muted-text)" }}
          >
            Ximtavo Technologies provides technology-focused solutions that
            support construction projects, building infrastructure and real
            estate operations. We help clients plan, deploy and maintain
            technology systems that support the way modern spaces are built
            and managed.
          </p>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1100&q=85"
            alt="Contemporary architectural building"
            className="h-[420px] w-full object-cover"
          />
          <div className="absolute -bottom-5 -left-5 hidden bg-[#FF6A00] p-7 text-white sm:block">
            <Building size={34} />
            <p className="mt-3 text-xl font-bold">Smarter Spaces</p>
            <p className="mt-1 text-sm text-white/80">
              Technology-led environments
            </p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section
        id="capabilities"
        className="py-20"
        style={{ background: "var(--surface-bg)" }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
              What We Do
            </p>
            <h2 className="text-3xl font-black md:text-4xl">
              Our Core Capabilities
            </h2>
            <p className="mt-5 leading-7" style={{ color: "var(--muted-text)" }}>
              Technology services designed to support the planning,
              development, operation and management of modern properties.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group border p-8 transition duration-300 hover:-translate-y-2 hover:border-[#FF6A00]"
                  style={{
                    background: "var(--page-bg)",
                    borderColor: "var(--border-color, rgba(128,128,128,0.2))",
                  }}
                >
                  <div className="mb-7 flex h-14 w-14 items-center justify-center bg-[#FF6A00]/10 text-[#FF6A00] transition group-hover:bg-[#FF6A00] group-hover:text-white">
                    <Icon size={27} />
                  </div>
                  <span className="text-xs font-bold tracking-widest text-[#FF6A00]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                  <p
                    className="mt-4 text-sm leading-7"
                    style={{ color: "var(--muted-text)" }}
                  >
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
              Integrated Solutions
            </p>
            <h2 className="text-3xl font-black leading-tight md:text-4xl">
              Technology That Works Beyond Construction
            </h2>
            <p className="mt-6 leading-8" style={{ color: "var(--muted-text)" }}>
              A modern building needs more than a physical structure. It needs
              dependable systems, secure connectivity and technology that
              supports everyday operations.
            </p>

            <div className="mt-9 space-y-5">
              {solutions.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#00CFFF]/10 text-[#00A9D0]">
                      <Icon size={23} />
                    </div>
                    <div>
                      <h3 className="font-bold">{item.title}</h3>
                      <p
                        className="mt-2 text-sm leading-6"
                        style={{ color: "var(--muted-text)" }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=85"
              alt="Modern commercial interior"
              className="h-[570px] w-full object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-black/80 p-6 text-white backdrop-blur-sm">
              <p className="text-sm font-bold uppercase tracking-widest text-[#00CFFF]">
                Connected Infrastructure
              </p>
              <p className="mt-2 text-xl font-bold">
                Creating environments that work smarter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#0A0A0A] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
              How We Work
            </p>
            <h2 className="text-3xl font-black md:text-4xl">
              From Planning to Project Delivery
            </h2>
            <p className="mt-5 leading-7 text-gray-400">
              A structured approach that keeps technology projects focused,
              coordinated and aligned with client requirements.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((item) => (
              <div
                key={item.number}
                className="border-t border-white/20 pt-7"
              >
                <span className="text-4xl font-black text-[#FF6A00]">
                  {item.number}
                </span>
                <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section
        className="py-20"
        style={{ background: "var(--surface-bg)" }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
                Who We Serve
              </p>
              <h2 className="text-3xl font-black md:text-4xl">
                Supporting the People Who Build and Manage Spaces
              </h2>
              <p className="mt-5 leading-8" style={{ color: "var(--muted-text)" }}>
                Our solutions support organisations and property stakeholders
                seeking dependable technology for buildings, infrastructure
                and real estate operations.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {industries.map((industry) => (
                <div
                  key={industry}
                  className="flex items-center gap-3 border p-5"
                  style={{
                    background: "var(--page-bg)",
                    borderColor: "var(--border-color, rgba(128,128,128,0.2))",
                  }}
                >
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-[#FF6A00]"
                  />
                  <span className="text-sm font-semibold">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#FF6A00] px-6 py-20 text-white md:px-10">
        <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full border-[45px] border-white/10" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/80">
              Let's Build Smarter
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
              Planning a Construction or Real Estate Technology Project?
            </h2>
            <p className="mt-4 leading-7 text-white/90">
              Talk to Ximtavo Technologies about your building infrastructure,
              smart systems and property technology requirements.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-3 bg-[#0A0A0A] px-8 py-4 font-bold text-white transition hover:bg-[#222]"
          >
            Contact Our Team <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ConstructionTechnologyRealEstate;
