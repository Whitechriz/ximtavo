
import React from "react";
import {
  Camera,
  ShieldCheck,
  Video,
  Network,
  Monitor,
  LockKeyhole,
  HardDrive,
  Cable,
  Eye,
  Building2,
  Home,
  Factory,
  ClipboardCheck,
  Settings,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Radio,
  Smartphone,
} from "lucide-react";
import { Link } from "react-router-dom";

const capabilities = [
  {
    icon: Camera,
    title: "CCTV Camera Installation",
    description:
      "Professional installation and configuration of indoor and outdoor surveillance cameras for residential, commercial and institutional environments.",
  },
  {
    icon: Video,
    title: "IP & Network Video Surveillance",
    description:
      "Modern IP camera systems designed for reliable video transmission, centralised monitoring and flexible network-based surveillance.",
  },
  {
    icon: Monitor,
    title: "Remote Video Monitoring",
    description:
      "View and monitor your security cameras through compatible computers, smartphones and monitoring stations, subject to network availability.",
  },
  {
    icon: HardDrive,
    title: "NVR & DVR Configuration",
    description:
      "Installation and configuration of recording systems, storage devices and video management equipment for dependable footage management.",
  },
  {
    icon: LockKeyhole,
    title: "Access Control Systems",
    description:
      "Technology solutions that help organisations manage and monitor entry points through electronic access control systems.",
  },
  {
    icon: Network,
    title: "Security Network Infrastructure",
    description:
      "Structured cabling, PoE networking, connectivity and supporting infrastructure for reliable surveillance system deployment.",
  },
];

const securitySolutions = [
  {
    icon: Eye,
    title: "Indoor & Outdoor Surveillance",
    description:
      "Coverage solutions for offices, entrances, corridors, parking areas, compounds and other critical locations.",
  },
  {
    icon: Radio,
    title: "Smart Surveillance Systems",
    description:
      "Compatible surveillance technologies with features such as motion detection, event notifications and intelligent video analytics.",
  },
  {
    icon: Smartphone,
    title: "Mobile Camera Access",
    description:
      "Remote camera viewing through supported mobile applications, allowing authorised users to monitor their properties.",
  },
  {
    icon: ShieldCheck,
    title: "Integrated Security",
    description:
      "Coordination of CCTV, access control and other compatible security technologies to support a more connected security environment.",
  },
];

const process = [
  {
    number: "01",
    title: "Site Survey",
    description:
      "We assess your premises, identify security requirements, inspect installation locations and evaluate potential blind spots.",
  },
  {
    number: "02",
    title: "System Design",
    description:
      "We recommend camera types, coverage locations, recording equipment, storage capacity and network infrastructure.",
  },
  {
    number: "03",
    title: "Installation",
    description:
      "Our installation process covers camera mounting, cabling, equipment setup and the configuration of supporting infrastructure.",
  },
  {
    number: "04",
    title: "Configuration & Testing",
    description:
      "We configure recording, remote access and monitoring features, then test camera views, connectivity and recording functionality.",
  },
  {
    number: "05",
    title: "Support & Maintenance",
    description:
      "We provide technical support, system checks, troubleshooting and maintenance to help keep your surveillance system operational.",
  },
];

const industries = [
  {
    icon: Home,
    title: "Residential Properties",
    description: "Homes, estates and private residential buildings.",
  },
  {
    icon: Building2,
    title: "Corporate Offices",
    description: "Office buildings, business premises and workspaces.",
  },
  {
    icon: Factory,
    title: "Industrial Facilities",
    description: "Factories, warehouses and production environments.",
  },
  {
    icon: Building2,
    title: "Hotels & Hospitality",
    description: "Hotels, restaurants, lounges and hospitality facilities.",
  },
  {
    icon: Monitor,
    title: "Retail & Commercial",
    description: "Shopping centres, supermarkets and retail outlets.",
  },
  {
    icon: ShieldCheck,
    title: "Institutions",
    description: "Schools, healthcare facilities and public institutions.",
  },
];

const CCTVInstallation = () => {
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
            src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=2000&q=85"
            alt="Modern security surveillance camera"
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
              CCTV Installation{" "}
              <span className="text-[#FF6A00]">& Security Surveillance</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-300">
              Intelligent surveillance. Reliable protection. Greater peace of
              mind. We deliver security camera and monitoring solutions that
              help protect people, properties and business operations.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-md bg-[#FF6A00] px-7 py-4 font-bold text-white transition hover:bg-[#e85e00]"
              >
                Request a Security Assessment
                <ArrowRight size={18} />
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
              <ShieldCheck size={48} className="mb-8 text-[#FF6A00]" />

              <h2 className="text-2xl font-bold">
                Security Through Intelligent Surveillance
              </h2>

              <p className="mt-4 leading-7 text-gray-300">
                From camera installation to recording infrastructure and
                remote monitoring, we help organisations establish dependable
                surveillance systems.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/20 pt-6">
                <div>
                  <p className="text-2xl font-black text-[#00CFFF]">
                    24/7
                  </p>
                  <p className="mt-1 text-sm text-gray-400">
                    Recording Capability
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-black text-[#00CFFF]">
                    Remote
                  </p>
                  <p className="mt-1 text-sm text-gray-400">
                    Camera Access
                  </p>
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
            Modern Security Infrastructure
          </p>

          <h2 className="text-3xl font-black leading-tight md:text-4xl">
            See More. Monitor Better. Protect What Matters.
          </h2>

          <p
            className="mt-6 leading-8"
            style={{ color: "var(--muted-text)" }}
          >
            Security is an essential part of every modern home, business and
            institution. A properly designed surveillance system provides
            visibility into activities across your premises and helps support
            incident detection, investigation and security management.
          </p>

          <p
            className="mt-4 leading-8"
            style={{ color: "var(--muted-text)" }}
          >
            Ximtavo Technologies provides CCTV installation and surveillance
            solutions tailored to the needs of each environment. We consider
            camera positioning, recording requirements, network infrastructure
            and monitoring access to deliver practical security systems.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Professional camera installation and configuration",
              "Reliable recording and video storage solutions",
              "Remote monitoring on supported devices",
              "Technical support and system maintenance",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2
                  size={20}
                  className="shrink-0 text-[#FF6A00]"
                />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=1100&q=85"
            alt="Security monitoring and surveillance equipment"
            className="h-[430px] w-full object-cover"
          />

          <div className="absolute -bottom-5 -left-5 hidden bg-[#FF6A00] p-7 text-white sm:block">
            <Camera size={34} />
            <p className="mt-3 text-xl font-bold">Smarter Surveillance</p>
            <p className="mt-1 text-sm text-white/80">
              Security built around your needs
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
              Our CCTV & Security Capabilities
            </h2>

            <p
              className="mt-5 leading-7"
              style={{ color: "var(--muted-text)" }}
            >
              End-to-end surveillance solutions covering system design,
              installation, configuration and ongoing technical support.
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
                    borderColor:
                      "var(--border-color, rgba(128,128,128,0.2))",
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

      {/* SECURITY SOLUTIONS */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
              Our Solutions
            </p>

            <h2 className="text-3xl font-black leading-tight md:text-4xl">
              A Complete Approach to Security Monitoring
            </h2>

            <p
              className="mt-6 leading-8"
              style={{ color: "var(--muted-text)" }}
            >
              Every property has different security requirements. We design
              surveillance solutions around your premises, operational needs
              and preferred monitoring arrangements.
            </p>

            <div className="mt-9 space-y-6">
              {securitySolutions.map((item) => {
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
              src="https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=1100&q=85"
              alt="Modern electronic security and access control"
              className="h-[570px] w-full object-cover"
            />

            <div className="absolute bottom-6 left-6 right-6 bg-black/80 p-6 text-white backdrop-blur-sm">
              <p className="text-sm font-bold uppercase tracking-widest text-[#00CFFF]">
                Connected Security
              </p>

              <p className="mt-2 text-xl font-bold">
                One system. Greater visibility. Smarter security management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INSTALLATION PROCESS */}
      <section className="bg-[#0A0A0A] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
              Our Process
            </p>

            <h2 className="text-3xl font-black md:text-4xl">
              From Site Survey to System Deployment
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              Our structured installation process helps ensure that each
              surveillance system is designed, installed and tested to meet
              the client's requirements.
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
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
              Industries We Serve
            </p>

            <h2 className="text-3xl font-black md:text-4xl">
              Security Solutions for Every Environment
            </h2>

            <p
              className="mt-5 leading-7"
              style={{ color: "var(--muted-text)" }}
            >
              From private residences to complex business facilities, we help
              clients improve visibility and security across their properties.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex gap-5 border p-6 transition hover:border-[#FF6A00]"
                  style={{
                    background: "var(--page-bg)",
                    borderColor:
                      "var(--border-color, rgba(128,128,128,0.2))",
                  }}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#FF6A00]/10 text-[#FF6A00]">
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
      </section>

      {/* MAINTENANCE */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1100&q=85"
            alt="Technical equipment inspection and maintenance"
            className="h-[420px] w-full object-cover"
          />
        </div>

        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
            Beyond Installation
          </p>

          <h2 className="text-3xl font-black leading-tight md:text-4xl">
            Keeping Your Security Systems Performing
          </h2>

          <p
            className="mt-6 leading-8"
            style={{ color: "var(--muted-text)" }}
          >
            Installing a surveillance system is only the beginning. Regular
            inspection and maintenance help identify faults, maintain
            recording functionality and support the long-term reliability of
            your security infrastructure.
          </p>

          <div className="mt-8 space-y-5">
            {[
              {
                title: "Preventive Maintenance",
                description:
                  "Routine checks of cameras, cables, connectors, recording equipment and system performance.",
              },
              {
                title: "Troubleshooting & Repairs",
                description:
                  "Diagnosis and resolution of camera faults, connectivity issues, recording failures and other technical problems.",
              },
              {
                title: "System Upgrades",
                description:
                  "Expansion, equipment replacement and upgrades to meet changing security and operational requirements.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <Wrench size={22} className="mt-1 shrink-0 text-[#FF6A00]" />
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#FF6A00] px-6 py-20 text-white md:px-10">
        <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full border-[45px] border-white/10" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/80">
              Secure What Matters
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
              Ready to Upgrade Your Security Infrastructure?
            </h2>

            <p className="mt-4 leading-7 text-white/90">
              Let Ximtavo Technologies help you plan and deploy a surveillance
              solution that fits your property, security needs and budget.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-3 bg-[#0A0A0A] px-8 py-4 font-bold text-white transition hover:bg-[#222]"
          >
            Request a Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default CCTVInstallation;
