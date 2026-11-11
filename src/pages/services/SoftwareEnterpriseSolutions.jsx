
import React from "react";
import {
  Code2,
  Database,
  Workflow,
  Cloud,
  Blocks,
  MonitorCog,
  ShoppingCart,
  Hotel,
  Users,
  BarChart3,
  ShieldCheck,
  Settings,
  ClipboardList,
  Search,
  Rocket,
  Headphones,
  CheckCircle2,
  ArrowRight,
  Building2,
  Smartphone,
  Plug,
  Server,
} from "lucide-react";
import { Link } from "react-router-dom";

const capabilities = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Purpose-built software applications designed around your organisation's workflows, business objectives and operational requirements.",
  },
  {
    icon: Blocks,
    title: "Enterprise Application Development",
    description:
      "Scalable business applications that connect teams, streamline processes and support efficient enterprise operations.",
  },
  {
    icon: Database,
    title: "Database Design & Management",
    description:
      "Structured database solutions for secure data storage, efficient retrieval, reporting and reliable business information management.",
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    description:
      "Automation of repetitive business activities, approval workflows, notifications and operational processes to improve productivity.",
  },
  {
    icon: Plug,
    title: "API & Systems Integration",
    description:
      "Integration of software applications, third-party platforms and business systems to enable seamless data exchange.",
  },
  {
    icon: Cloud,
    title: "Cloud-Based Software Solutions",
    description:
      "Cloud-enabled applications and infrastructure that support accessibility, scalability and modern business operations.",
  },
];

const enterpriseSolutions = [
  {
    icon: Hotel,
    title: "Hospitality Management Systems",
    description:
      "Digital solutions for hotel reservations, front desk operations, housekeeping, billing, inventory and guest management.",
  },
  {
    icon: ShoppingCart,
    title: "Inventory & Point-of-Sale Systems",
    description:
      "Business applications for sales processing, stock control, purchasing, product tracking and transaction management.",
  },
  {
    icon: Users,
    title: "Human Resource Management Systems",
    description:
      "Tools for employee records, attendance, leave management, staff administration and workforce coordination.",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence & Reporting",
    description:
      "Reporting dashboards and data-driven tools that help organisations understand performance and make informed decisions.",
  },
  {
    icon: ClipboardList,
    title: "Enterprise Resource Planning",
    description:
      "Integrated business systems that bring key organisational functions and operational information into a coordinated platform.",
  },
  {
    icon: MonitorCog,
    title: "Workflow & Operations Management",
    description:
      "Digital platforms for task allocation, service requests, approvals, operational tracking and team collaboration.",
  },
];

const developmentProcess = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Requirements",
    description:
      "We understand your business, identify operational challenges and document the functional and technical requirements.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Planning & Architecture",
    description:
      "We define the software architecture, user experience, technology stack and implementation roadmap.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Design & Development",
    description:
      "We build the solution using appropriate technologies, with attention to functionality, usability and scalability.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Testing & Deployment",
    description:
      "We test application functionality, security, performance and integrations before deployment.",
  },
  {
    number: "05",
    icon: Headphones,
    title: "Support & Enhancement",
    description:
      "We provide technical support, maintenance and continuous improvements as business requirements evolve.",
  },
];

const industries = [
  "Hospitality & Tourism",
  "Banking & Financial Services",
  "Retail & E-commerce",
  "Healthcare",
  "Education & Training",
  "Telecommunications",
  "Real Estate & Construction",
  "Government & Public Sector",
  "Logistics & Transportation",
  "Professional Services",
];

const benefits = [
  "Improved operational efficiency",
  "Reduced repetitive manual processes",
  "Better information management",
  "Centralised business operations",
  "Improved reporting and visibility",
  "Scalable technology infrastructure",
];

const SoftwareEnterpriseSolutions = () => {
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
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&q=85"
            alt="Software development workstation"
            className="h-full w-full object-cover opacity-25"
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
              Software &{" "}
              <span className="text-[#FF6A00]">
                Enterprise Solutions
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-300">
              Intelligent software. Connected operations. Business growth.
              We develop digital solutions that simplify processes, connect
              systems and help organisations work smarter.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-md bg-[#FF6A00] px-7 py-4 font-bold text-white transition hover:bg-[#e85e00]"
              >
                Discuss Your Software Project
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
              <Code2 size={48} className="mb-8 text-[#FF6A00]" />

              <h2 className="text-2xl font-bold">
                Technology Built Around Your Business
              </h2>

              <p className="mt-4 leading-7 text-gray-300">
                From custom applications to integrated enterprise platforms,
                we create software that supports real business operations.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/20 pt-6">
                <div>
                  <p className="text-2xl font-black text-[#00CFFF]">
                    Custom
                  </p>
                  <p className="mt-1 text-sm text-gray-400">
                    Software Solutions
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-black text-[#00CFFF]">
                    Integrated
                  </p>
                  <p className="mt-1 text-sm text-gray-400">
                    Business Systems
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
            Digital Transformation
          </p>

          <h2 className="text-3xl font-black leading-tight md:text-4xl">
            Software That Solves Real Business Challenges
          </h2>

          <p
            className="mt-6 leading-8"
            style={{ color: "var(--muted-text)" }}
          >
            Every organisation has unique processes, operational demands and
            growth objectives. The right software can simplify these processes,
            improve coordination and give decision-makers better access to
            business information.
          </p>

          <p
            className="mt-4 leading-8"
            style={{ color: "var(--muted-text)" }}
          >
            Ximtavo Technologies develops software and enterprise solutions
            tailored to organisational needs. We combine application
            development, database technologies, systems integration and
            business automation to deliver practical digital solutions.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              "Business-focused development",
              "Scalable architecture",
              "Integrated applications",
              "Ongoing technical support",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2
                  size={19}
                  className="mt-0.5 shrink-0 text-[#FF6A00]"
                />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1100&q=85"
            alt="Team collaborating on software solutions"
            className="h-[430px] w-full object-cover"
          />

          <div className="absolute -bottom-5 -left-5 hidden bg-[#FF6A00] p-7 text-white sm:block">
            <Blocks size={34} />
            <p className="mt-3 text-xl font-bold">Enterprise Technology</p>
            <p className="mt-1 text-sm text-white/80">
              Designed for business growth
            </p>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
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
              Our Software Development Capabilities
            </h2>

            <p
              className="mt-5 leading-7"
              style={{ color: "var(--muted-text)" }}
            >
              From individual business applications to connected enterprise
              platforms, we build solutions around the way your organisation
              works.
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

      {/* ENTERPRISE SOLUTIONS */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
              Business Applications
            </p>

            <h2 className="text-3xl font-black leading-tight md:text-4xl">
              Enterprise Solutions for Modern Organisations
            </h2>

            <p
              className="mt-6 leading-8"
              style={{ color: "var(--muted-text)" }}
            >
              We develop and implement business applications that help
              organisations manage resources, coordinate operations and
              improve access to critical information.
            </p>

            <div className="mt-9 space-y-6">
              {enterpriseSolutions.map((item) => {
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
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1100&q=85"
              alt="Business software analytics dashboard"
              className="h-[570px] w-full object-cover"
            />

            <div className="absolute bottom-6 left-6 right-6 bg-black/80 p-6 text-white backdrop-blur-sm">
              <p className="text-sm font-bold uppercase tracking-widest text-[#00CFFF]">
                Connected Business Operations
              </p>

              <p className="mt-2 text-xl font-bold">
                Bring your business processes together through software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY APPROACH */}
      <section
        className="py-20"
        style={{ background: "var(--surface-bg)" }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
              Our Technology Approach
            </p>

            <h2 className="text-3xl font-black md:text-4xl">
              Built for Integration, Security & Growth
            </h2>

            <p
              className="mt-5 leading-7"
              style={{ color: "var(--muted-text)" }}
            >
              We consider the technology foundations that make software
              reliable, maintainable and ready to evolve with your business.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Server,
                title: "Reliable Architecture",
                description:
                  "Application structures designed around performance, maintainability and business requirements.",
              },
              {
                icon: ShieldCheck,
                title: "Security & Access Control",
                description:
                  "Appropriate authentication, permissions and data protection measures for business applications.",
              },
              {
                icon: Plug,
                title: "Seamless Integration",
                description:
                  "APIs and integrations that help applications exchange information and work together.",
              },
              {
                icon: Cloud,
                title: "Scalable Deployment",
                description:
                  "Deployment approaches that support changing workloads, accessibility and future expansion.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="border p-7"
                  style={{
                    background: "var(--page-bg)",
                    borderColor:
                      "var(--border-color, rgba(128,128,128,0.2))",
                  }}
                >
                  <Icon size={30} className="text-[#FF6A00]" />
                  <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                  <p
                    className="mt-3 text-sm leading-7"
                    style={{ color: "var(--muted-text)" }}
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
      <section className="bg-[#0A0A0A] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
              How We Work
            </p>

            <h2 className="text-3xl font-black md:text-4xl">
              From Business Requirements to Software Delivery
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              A structured development process that keeps your project
              organised, transparent and aligned with your business goals.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {developmentProcess.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="border-t border-white/20 pt-7"
                >
                  <span className="text-4xl font-black text-[#FF6A00]">
                    {item.number}
                  </span>

                  <div className="mt-5 text-[#00CFFF]">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold">{item.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-gray-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BUSINESS BENEFITS */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1100&q=85"
            alt="Business team reviewing software performance"
            className="h-[430px] w-full object-cover"
          />

          <div className="absolute bottom-6 left-6 bg-[#FF6A00] p-6 text-white">
            <Rocket size={32} />
            <p className="mt-3 text-xl font-bold">Work Smarter</p>
            <p className="mt-1 text-sm text-white/80">
              Accelerate business operations
            </p>
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
            Business Value
          </p>

          <h2 className="text-3xl font-black leading-tight md:text-4xl">
            Technology That Creates Measurable Business Value
          </h2>

          <p
            className="mt-6 leading-8"
            style={{ color: "var(--muted-text)" }}
          >
            Well-designed software does more than digitise existing activities.
            It creates opportunities to improve how teams collaborate, how
            information is managed and how business decisions are made.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {benefits.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2
                  size={19}
                  className="shrink-0 text-[#FF6A00]"
                />
                <span className="text-sm font-semibold">{item}</span>
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
                Industries We Serve
              </p>

              <h2 className="text-3xl font-black md:text-4xl">
                Software Solutions Across Industries
              </h2>

              <p
                className="mt-5 leading-8"
                style={{ color: "var(--muted-text)" }}
              >
                We work with organisations across different sectors to
                understand their operational challenges and deliver software
                solutions that support their specific requirements.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {industries.map((industry) => (
                <div
                  key={industry}
                  className="flex items-center gap-3 border p-5"
                  style={{
                    background: "var(--page-bg)",
                    borderColor:
                      "var(--border-color, rgba(128,128,128,0.2))",
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
              Let's Build Something Powerful
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
              Have a Business Idea or Software Challenge?
            </h2>

            <p className="mt-4 leading-7 text-white/90">
              Talk to Ximtavo Technologies about custom software,
              enterprise applications, business automation and digital
              transformation.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-3 bg-[#0A0A0A] px-8 py-4 font-bold text-white transition hover:bg-[#222]"
          >
            Start Your Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default SoftwareEnterpriseSolutions;
