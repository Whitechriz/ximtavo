
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  ClipboardList,
  Target,
  Network,
  Database,
  ShieldCheck,
  BarChart3,
  Users,
  Lightbulb,
  Workflow,
  Settings,
  Search,
  FileCheck,
  CalendarDays,
  Gauge,
  Building2,
  GraduationCap,
  Landmark,
  Stethoscope,
  ShoppingBag,
  CheckCircle2,
  Rocket,
  MonitorCog,
  Presentation,
} from "lucide-react";

const consultingServices = [
  {
    icon: Lightbulb,
    title: "ICT Strategy & Advisory",
    description:
      "We help organisations evaluate their technology needs, define ICT priorities and develop practical strategies aligned with their business objectives.",
  },
  {
    icon: Workflow,
    title: "Digital Transformation Consulting",
    description:
      "We identify opportunities to improve business processes through digital tools, automation, modern systems and technology adoption.",
  },
  {
    icon: Network,
    title: "IT Infrastructure Consulting",
    description:
      "We assess existing IT environments and recommend suitable infrastructure, networking, hardware and systems improvements.",
  },
  {
    icon: MonitorCog,
    title: "Technology Assessment & Auditing",
    description:
      "We review technology assets, systems and operational processes to identify gaps, risks, inefficiencies and opportunities for improvement.",
  },
  {
    icon: Database,
    title: "Systems Integration Advisory",
    description:
      "We help businesses evaluate how their software, platforms, databases and technology infrastructure can work together more effectively.",
  },
  {
    icon: ShieldCheck,
    title: "IT Governance & Risk Advisory",
    description:
      "We provide guidance on technology governance, operational controls, access management and practical IT risk management.",
  },
];

const projectCapabilities = [
  {
    icon: ClipboardList,
    title: "Project Planning & Definition",
    description:
      "Defining project objectives, scope, requirements, deliverables, schedules and implementation plans.",
  },
  {
    icon: CalendarDays,
    title: "Project Scheduling & Coordination",
    description:
      "Coordinating project activities, resources, milestones and stakeholder responsibilities.",
  },
  {
    icon: Users,
    title: "Stakeholder & Team Management",
    description:
      "Facilitating communication, collaboration, accountability and alignment among project stakeholders.",
  },
  {
    icon: BarChart3,
    title: "Monitoring & Performance Reporting",
    description:
      "Tracking progress, evaluating performance and communicating project status against agreed objectives.",
  },
  {
    icon: Gauge,
    title: "Risk & Quality Management",
    description:
      "Identifying project risks, managing dependencies and maintaining appropriate quality controls.",
  },
  {
    icon: Rocket,
    title: "Implementation & Delivery",
    description:
      "Coordinating implementation, testing, deployment, handover and project closure activities.",
  },
];

const methodology = [
  {
    number: "01",
    icon: Search,
    title: "Assessment & Discovery",
    description:
      "We understand your business objectives, existing systems, challenges and project requirements.",
  },
  {
    number: "02",
    icon: Target,
    title: "Strategy & Planning",
    description:
      "We define the project scope, objectives, resources, timelines, deliverables and implementation approach.",
  },
  {
    number: "03",
    icon: Workflow,
    title: "Execution & Coordination",
    description:
      "We coordinate project activities, manage stakeholders and support the implementation process.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Monitoring & Evaluation",
    description:
      "We track milestones, assess performance, manage risks and communicate progress.",
  },
  {
    number: "05",
    icon: FileCheck,
    title: "Delivery & Handover",
    description:
      "We support project completion, documentation, knowledge transfer and operational handover.",
  },
];

const industries = [
  {
    icon: Building2,
    title: "Corporate Organisations",
  },
  {
    icon: ShoppingBag,
    title: "Retail & Commerce",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
  },
  {
    icon: GraduationCap,
    title: "Education",
  },
  {
    icon: Landmark,
    title: "Government & Public Sector",
  },
  {
    icon: BriefcaseBusiness,
    title: "Financial Services",
  },
  {
    icon: Network,
    title: "Telecommunications",
  },
  {
    icon: MonitorCog,
    title: "Technology Companies",
  },
];

const benefits = [
  "Clear project objectives and defined deliverables",
  "Better coordination of people and resources",
  "Improved visibility into project progress",
  "Structured technology implementation",
  "Identification and management of project risks",
  "Technology decisions aligned with business goals",
];

export default function ProjectManagementICTConsulting() {
  return (
    <main className="bg-[var(--page-bg)] text-[var(--page-text)]">

      {/* HERO */}
      <section className="relative isolate flex min-h-[620px] items-center overflow-hidden bg-[#0A0A0A] pt-28 text-white lg:min-h-[720px]">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2200&q=85')",
          }}
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/85 to-black/40" />

        <div className="mx-auto w-full max-w-[1500px] px-6 py-24 lg:px-16">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#FF6A00]" />
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#00CFFF]">
                Our Services
              </p>
            </div>

            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl">
              Project Management
              <span className="block text-[#FF6A00]">
                & ICT Consulting
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Strategic thinking. Smarter execution. Measurable results.
              We help organisations plan technology initiatives, manage
              ICT projects and make informed decisions that drive
              operational efficiency and business growth.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#consulting"
                className="inline-flex items-center gap-3 bg-[#FF6A00] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#e85f00]"
              >
                Explore Our Services
                <ArrowRight size={18} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 border border-white/40 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#00CFFF] hover:text-[#00CFFF]"
              >
                Discuss Your Project
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
            Technology & Business Strategy
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Turning technology initiatives into business outcomes.
          </h2>

          <p className="mt-7 leading-8 text-[var(--muted-text)]">
            Technology projects require more than equipment, software
            and technical expertise. They require clear objectives,
            thoughtful planning, effective coordination and disciplined
            execution.
          </p>

          <p className="mt-5 leading-8 text-[var(--muted-text)]">
            Ximtavo Technologies helps organisations navigate technology
            decisions and implementation challenges. From ICT strategy
            and infrastructure assessments to project planning and
            implementation coordination, we bring structure and
            direction to technology initiatives.
          </p>

          <p className="mt-5 leading-8 text-[var(--muted-text)]">
            Our goal is to help businesses make informed decisions,
            use resources effectively and align technology investments
            with their operational and strategic priorities.
          </p>

          <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-[#FF6A00]">
            <CheckCircle2 size={20} />
            Technology decisions driven by business objectives
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1100&q=85"
            alt="Business and technology project planning meeting"
            className="h-[350px] w-full object-cover sm:h-[460px]"
          />
          <div className="absolute -bottom-5 -left-5 hidden h-32 w-32 border-b-4 border-l-4 border-[#FF6A00] sm:block" />
          <div className="absolute -right-3 -top-3 h-20 w-20 border-r-4 border-t-4 border-[#00CFFF]" />
        </div>
      </section>

      {/* ICT CONSULTING */}
      <section
        id="consulting"
        className="bg-[var(--surface-bg)] px-6 py-20 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-[1350px]">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF6A00]">
              ICT Consulting
            </p>

            <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">
              Make smarter technology decisions.
            </h2>

            <p className="mt-5 leading-8 text-[var(--muted-text)]">
              We provide technology advisory and consulting services
              that help organisations assess their current capabilities,
              identify opportunities and determine practical ways to
              improve their IT environments.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {consultingServices.map((item) => {
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

      {/* PROJECT MANAGEMENT */}
      <section className="mx-auto max-w-[1500px] px-6 py-20 lg:px-16 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF6A00]">
              Project Management
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
              From project concept
              <span className="text-[#FF6A00]">
                {" "}to successful delivery.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-[var(--muted-text)]">
              Successful technology projects depend on clear
              responsibilities, realistic timelines, coordinated
              resources and consistent monitoring.
            </p>

            <p className="mt-5 leading-8 text-[var(--muted-text)]">
              We provide structured project management support to help
              organisations move initiatives from planning through
              implementation, monitoring and delivery.
            </p>

            <div className="mt-8 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1100&q=85"
                alt="Project performance and reporting dashboard"
                className="h-[300px] w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-5">
            {projectCapabilities.map((item) => {
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

      {/* METHODOLOGY */}
      <section className="bg-[#0A0A0A] px-6 py-20 text-white lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1350px]">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#00CFFF]">
              Our Methodology
            </p>

            <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">
              A structured path from idea to implementation.
            </h2>

            <p className="mt-5 leading-8 text-white/60">
              We use a clear, collaborative approach to help keep
              technology projects focused, organised and aligned
              with agreed objectives.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {methodology.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="border-t border-white/20 pt-6"
                >
                  <span className="text-3xl font-semibold text-[#FF6A00]">
                    {item.number}
                  </span>

                  <div className="mt-5 text-[#00CFFF]">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-4 text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/60">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BUSINESS BENEFITS */}
      <section className="mx-auto grid max-w-[1500px] gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-16 lg:py-28">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF6A00]">
            Business Value
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
            Bringing clarity, control and direction to your projects.
          </h2>

          <p className="mt-6 leading-8 text-[var(--muted-text)]">
            Effective technology consulting and project management
            help organisations understand what needs to be done,
            how it should be delivered and how success should be
            measured.
          </p>

          <div className="mt-8 space-y-4">
            {benefits.map((item) => (
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
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1100&q=85"
            alt="Modern professional business workspace"
            className="h-[350px] w-full object-cover sm:h-[460px]"
          />
          <div className="absolute -bottom-5 -right-5 hidden h-32 w-32 border-b-4 border-r-4 border-[#00CFFF] sm:block" />
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-[var(--surface-bg)] px-6 py-20 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1350px]">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF6A00]">
              Industries We Serve
            </p>

            <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">
              Technology guidance across industries.
            </h2>

            <p className="mt-5 leading-8 text-[var(--muted-text)]">
              We support organisations across different sectors,
              tailoring our consulting and project management
              approach to their operational environments and
              technology objectives.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="flex items-center gap-4 border border-[var(--page-text)]/10 bg-[var(--page-bg)] p-6 transition hover:border-[#FF6A00]"
                >
                  <Icon size={25} className="shrink-0 text-[#FF6A00]" />
                  <span className="text-sm font-semibold">
                    {item.title}
                  </span>
                </article>
              );
            })}
          </div>
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
              Let's Move Your Project Forward
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">
              Have a technology project in mind?
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-white/85">
              Whether you need ICT guidance, project planning or
              implementation support, Ximtavo Technologies is ready
              to help you take the next step.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-3 self-start bg-[#0A0A0A] px-8 py-5 text-sm font-semibold text-white transition hover:bg-[#00CFFF] hover:text-[#0A0A0A] lg:self-center"
          >
            Discuss Your Project
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>
    </main>
  );
}
