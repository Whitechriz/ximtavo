
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Monitor,
  Laptop,
  Cpu,
  HardDrive,
  Printer,
  Network,
  Server,
  Wrench,
  Settings,
  ShieldCheck,
  Activity,
  Search,
  ClipboardCheck,
  RefreshCw,
  Headphones,
  CheckCircle2,
  Database,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Desktop & Laptop Maintenance",
    description:
      "Professional diagnosis, servicing, troubleshooting and repair of desktop computers and laptops to ensure reliable performance.",
  },
  {
    icon: Cpu,
    title: "Hardware Installation & Upgrades",
    description:
      "Installation and replacement of processors, RAM, storage devices, motherboards, power supplies and other computer components.",
  },
  {
    icon: HardDrive,
    title: "Storage & Data Solutions",
    description:
      "Hard drive and SSD installation, storage upgrades, system configuration and data backup solutions.",
  },
  {
    icon: Printer,
    title: "Printer & Peripheral Support",
    description:
      "Installation, configuration and troubleshooting of printers, scanners, UPS systems and other office peripherals.",
  },
  {
    icon: Network,
    title: "Network & Connectivity Support",
    description:
      "Computer network setup, LAN configuration, connectivity troubleshooting and support for network devices.",
  },
  {
    icon: Server,
    title: "Server & IT Infrastructure Maintenance",
    description:
      "Maintenance and support for business servers, IT infrastructure, system resources and connected equipment.",
  },
];

const maintenanceTypes = [
  {
    icon: ClipboardCheck,
    title: "Preventive Maintenance",
    description:
      "Scheduled inspections, cleaning, performance checks, updates and routine servicing designed to reduce unexpected failures.",
  },
  {
    icon: Wrench,
    title: "Corrective Maintenance",
    description:
      "Diagnosis and resolution of hardware faults, software issues, system errors and equipment failures.",
  },
  {
    icon: Activity,
    title: "Performance Optimisation",
    description:
      "System health checks, performance tuning, storage optimisation and configuration improvements.",
  },
  {
    icon: ShieldCheck,
    title: "System Security & Updates",
    description:
      "Operating system updates, security configuration, antivirus support and system protection recommendations.",
  },
];

const process = [
  {
    number: "01",
    title: "Assessment & Diagnosis",
    description:
      "We inspect your equipment, identify faults and assess the condition of your IT systems.",
  },
  {
    number: "02",
    title: "Technical Recommendations",
    description:
      "We provide practical recommendations, required repairs and suitable replacement or upgrade options.",
  },
  {
    number: "03",
    title: "Repair & Maintenance",
    description:
      "Our technical team carries out the approved servicing, repairs, installations and system configurations.",
  },
  {
    number: "04",
    title: "Testing & Verification",
    description:
      "We test equipment and verify that systems and connected devices operate as expected.",
  },
  {
    number: "05",
    title: "Ongoing Technical Support",
    description:
      "We can provide scheduled maintenance and continued technical support to help keep your business operational.",
  },
];

const industries = [
  "Corporate Offices",
  "Hotels & Hospitality",
  "Educational Institutions",
  "Healthcare Facilities",
  "Government Organisations",
  "Retail & Commercial Businesses",
  "Financial Institutions",
  "Small & Medium Enterprises",
];

const highlights = [
  "Hardware diagnosis and troubleshooting",
  "Computer servicing and repairs",
  "Hardware procurement and installation",
  "System upgrades and configuration",
  "Preventive maintenance programmes",
  "IT equipment inspection and support",
];

export default function ComputerHardwareMaintenance() {
  return (
    <main className="bg-[var(--page-bg)] text-[var(--page-text)]">

      {/* HERO */}
      <section className="relative isolate flex min-h-[620px] items-center overflow-hidden bg-[#0A0A0A] pt-28 text-white lg:min-h-[720px]">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=2200&q=85')",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/85 to-black/35" />

        <div className="mx-auto w-full max-w-[1500px] px-6 py-24 lg:px-16">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#FF6A00]" />
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#00CFFF]">
                Our Services
              </p>
            </div>

            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl">
              Computer Hardware
              <span className="block text-[#FF6A00]">
                & System Maintenance
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Reliable technology. Maximum performance. Minimal downtime.
              We provide professional computer hardware support, system
              maintenance and IT infrastructure services that keep your
              business technology operating efficiently.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-[#FF6A00] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#e85f00]"
              >
                Request Technical Support
                <ArrowRight size={18} />
              </a>

              <a
                href="#capabilities"
                className="inline-flex items-center gap-3 border border-white/40 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#00CFFF] hover:text-[#00CFFF]"
              >
                Explore Our Services
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 hidden h-1.5 w-1/3 bg-[#FF6A00] md:block" />
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto grid max-w-[1500px] gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-16 lg:py-28">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF6A00]">
            IT Support & Infrastructure
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Keeping your technology
            <span className="text-[#FF6A00]"> reliable and productive.</span>
          </h2>

          <p className="mt-7 leading-8 text-[var(--muted-text)]">
            Technology is essential to modern business operations.
            Computer failures, outdated equipment and poorly maintained
            systems can affect productivity, disrupt operations and
            increase operating costs.
          </p>

          <p className="mt-5 leading-8 text-[var(--muted-text)]">
            Ximtavo Technologies provides computer hardware support,
            maintenance and technical services designed to help
            organisations maintain dependable IT environments. We work
            to identify problems, restore functionality and improve
            the reliability of business equipment.
          </p>

          <div className="mt-8 space-y-4">
            {highlights.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-[#FF6A00]"
                />
                <span className="text-sm text-[var(--muted-text)]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1100&q=85"
            alt="Technical hardware maintenance"
            className="h-[350px] w-full object-cover sm:h-[460px]"
          />
          <div className="absolute -bottom-5 -left-5 hidden h-32 w-32 border-b-4 border-l-4 border-[#FF6A00] sm:block" />
          <div className="absolute -right-3 -top-3 h-20 w-20 border-r-4 border-t-4 border-[#00CFFF]" />
        </div>
      </section>

      {/* CORE SERVICES */}
      <section
        id="capabilities"
        className="bg-[var(--surface-bg)] px-6 py-20 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-[1350px]">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF6A00]">
              Our Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">
              Complete computer hardware support.
            </h2>

            <p className="mt-5 leading-8 text-[var(--muted-text)]">
              From individual workstations to business IT infrastructure,
              we provide technical services that support your daily
              operations.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group border border-[var(--page-text)]/10 bg-[var(--page-bg)] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#FF6A00]"
                >
                  <div className="flex h-14 w-14 items-center justify-center bg-[#FF6A00]/10 text-[#FF6A00] transition group-hover:bg-[#FF6A00] group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-7 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[var(--muted-text)]">
                    {item.description}
                  </p>

                  <ArrowUpRight
                    className="mt-7 text-[#00CFFF]"
                    size={22}
                  />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* MAINTENANCE APPROACH */}
      <section className="mx-auto max-w-[1500px] px-6 py-20 lg:px-16 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF6A00]">
              Maintenance Solutions
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
              More than repairs.
              <span className="text-[#FF6A00]">
                {" "}A proactive approach to IT.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-[var(--muted-text)]">
              Effective maintenance is not only about fixing equipment
              after it fails. It involves identifying potential issues,
              monitoring system health and taking preventive action
              before problems interrupt business operations.
            </p>

            <div className="mt-8 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1100&q=85"
                alt="IT technician inspecting technical equipment"
                className="h-[300px] w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-5">
            {maintenanceTypes.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="flex gap-5 border-b border-[var(--page-text)]/15 pb-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#00CFFF]/10 text-[#00A6D1]">
                    <Icon size={23} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted-text)]">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WORK PROCESS */}
      <section className="bg-[#0A0A0A] px-6 py-20 text-white lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1350px]">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#00CFFF]">
              Our Work Process
            </p>

            <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">
              A structured approach to technical support.
            </h2>

            <p className="mt-5 leading-8 text-white/60">
              We follow a practical process to understand your
              requirements, resolve technical issues and maintain
              dependable systems.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((item) => (
              <article
                key={item.number}
                className="border-t border-white/20 pt-6"
              >
                <span className="text-3xl font-semibold text-[#FF6A00]">
                  {item.number}
                </span>

                <h3 className="mt-5 text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="mx-auto max-w-[1500px] px-6 py-20 lg:px-16 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF6A00]">
            Industries We Support
          </p>

          <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">
            Supporting technology across business environments.
          </h2>

          <p className="mt-5 leading-8 text-[var(--muted-text)]">
            We understand that different organisations have different
            IT requirements. Our support services can be tailored to
            their equipment, operational needs and working environments.
          </p>
        </div>

        <div className="mt-12 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <div
              key={industry}
              className="flex items-center justify-between border-b border-[var(--page-text)]/15 py-6 transition hover:text-[#FF6A00] sm:px-5"
            >
              <span className="text-sm font-medium">{industry}</span>
              <ArrowUpRight size={18} className="text-[#00CFFF]" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="relative isolate overflow-hidden bg-[#FF6A00] px-6 py-20 text-white lg:px-16 lg:py-28"
      >
        <div className="absolute -right-20 -top-32 -z-10 h-96 w-96 rounded-full border-[50px] border-white/10" />

        <div className="mx-auto flex max-w-[1350px] flex-col justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/80">
              Talk to Our Technical Team
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">
              Need reliable IT support for your business?
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-white/85">
              Let Ximtavo help you maintain, upgrade and optimise your
              computer systems and IT infrastructure.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-3 self-start bg-[#0A0A0A] px-8 py-5 text-sm font-semibold text-white transition hover:bg-[#00CFFF] hover:text-[#0A0A0A] lg:self-center"
          >
            Request Technical Support
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>
    </main>
  );
}
