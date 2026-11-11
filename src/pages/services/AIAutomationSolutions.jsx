
import React from "react";
import {
  BrainCircuit,
  Bot,
  Workflow,
  MessageSquareText,
  Database,
  FileSearch,
  BarChart3,
  Sparkles,
  Zap,
  Code2,
  Cloud,
  ShieldCheck,
  Settings,
  Headphones,
  Search,
  ClipboardList,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Building2,
  ShoppingCart,
  Hotel,
  Users,
  Mail,
  Cpu,
  Network,
} from "lucide-react";
import { Link } from "react-router-dom";

const capabilities = [
  {
    icon: BrainCircuit,
    title: "AI Integration & Implementation",
    description:
      "Integration of AI technologies into existing applications and business processes to improve productivity, decision-making and operational efficiency.",
  },
  {
    icon: Bot,
    title: "AI Chatbots & Virtual Assistants",
    description:
      "Intelligent conversational assistants that help businesses handle enquiries, provide information, support customers and automate routine interactions.",
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    description:
      "Automation of repetitive business activities, approval processes, notifications and administrative workflows to reduce manual effort.",
  },
  {
    icon: MessageSquareText,
    title: "Conversational AI Solutions",
    description:
      "AI-powered communication systems that understand user requests and support natural interactions across websites and digital platforms.",
  },
  {
    icon: FileSearch,
    title: "Intelligent Document Processing",
    description:
      "AI-assisted extraction, classification and processing of information from business documents, forms and digital records.",
  },
  {
    icon: BarChart3,
    title: "AI-Powered Data Insights",
    description:
      "Intelligent data analysis and reporting solutions that help organisations identify patterns, understand performance and make informed decisions.",
  },
];

const automationSolutions = [
  {
    icon: Mail,
    title: "Email & Communication Automation",
    description:
      "Automate routine email responses, notifications, customer communications and internal business updates.",
  },
  {
    icon: ClipboardList,
    title: "Workflow & Approval Automation",
    description:
      "Create structured digital workflows for requests, approvals, task assignments and operational coordination.",
  },
  {
    icon: Database,
    title: "Data Entry & Processing Automation",
    description:
      "Reduce repetitive data handling through automated extraction, validation, transfer and processing workflows.",
  },
  {
    icon: Users,
    title: "Customer Support Automation",
    description:
      "Use intelligent assistants and automated workflows to improve enquiry handling, customer engagement and service response.",
  },
  {
    icon: ShoppingCart,
    title: "Sales & Lead Automation",
    description:
      "Support lead capture, enquiry routing, follow-ups and customer relationship workflows through connected automation tools.",
  },
  {
    icon: Network,
    title: "System & Application Automation",
    description:
      "Connect applications and automate information exchange between business systems through APIs and integration platforms.",
  },
];

const industries = [
  {
    icon: Hotel,
    title: "Hospitality & Tourism",
    description:
      "Guest enquiries, reservation assistance, customer communication and operational workflow automation.",
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-commerce",
    description:
      "Customer support, product enquiries, order updates and sales process automation.",
  },
  {
    icon: Building2,
    title: "Corporate Organisations",
    description:
      "Administrative workflows, document processing, reporting and internal process automation.",
  },
  {
    icon: Users,
    title: "Education & Training",
    description:
      "Student enquiries, learning support, administrative automation and digital learning assistance.",
  },
  {
    icon: Database,
    title: "Financial Services",
    description:
      "Document workflows, customer engagement and data processing support, subject to appropriate controls.",
  },
  {
    icon: Network,
    title: "Technology Companies",
    description:
      "AI integration, developer productivity tools, application automation and intelligent systems.",
  },
];

const developmentProcess = [
  {
    number: "01",
    icon: Search,
    title: "Business Assessment",
    description:
      "We examine existing processes, identify repetitive tasks and understand where AI or automation can create meaningful value.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Solution Design",
    description:
      "We define the automation workflow, AI capabilities, integrations, data requirements and expected outcomes.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Development & Integration",
    description:
      "We configure automation tools, integrate relevant AI services and develop custom software components where required.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Testing & Deployment",
    description:
      "We test workflows, validate outputs, review access permissions and deploy the solution with appropriate safeguards.",
  },
  {
    number: "05",
    icon: Settings,
    title: "Monitoring & Improvement",
    description:
      "We monitor performance, address issues and refine the solution as business requirements and technology evolve.",
  },
];

const benefits = [
  "Reduced repetitive manual work",
  "Faster business processes",
  "Improved customer response",
  "Better access to business information",
  "More consistent workflows",
  "Improved operational visibility",
  "Scalable digital operations",
  "Better use of available resources",
];

const AIAutomationSolutions = () => {
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
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2000&q=85"
            alt="Artificial intelligence technology concept"
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
              AI &{" "}
              <span className="text-[#FF6A00]">
                Automation Solutions
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-300">
              Intelligent technology. Automated processes. Smarter business
              operations. We help organisations harness artificial intelligence
              and automation to work more efficiently and unlock new
              opportunities.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-md bg-[#FF6A00] px-7 py-4 font-bold text-white transition hover:bg-[#e85e00]"
              >
                Explore AI Solutions
                <ArrowRight size={18} />
              </Link>

              <a
                href="#capabilities"
                className="rounded-md border border-white/30 px-7 py-4 font-semibold transition hover:border-[#00CFFF] hover:text-[#00CFFF]"
              >
                Discover Our Capabilities
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="ml-auto max-w-md border border-white/20 bg-white/[0.07] p-8 backdrop-blur-md">
              <BrainCircuit size={48} className="mb-8 text-[#FF6A00]" />

              <h2 className="text-2xl font-bold">
                Make Intelligence Work for Your Business
              </h2>

              <p className="mt-4 leading-7 text-gray-300">
                Connect intelligent technologies with everyday business
                activities to simplify operations, support decisions and
                improve customer experiences.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/20 pt-6">
                <div>
                  <p className="text-2xl font-black text-[#00CFFF]">
                    AI-Powered
                  </p>
                  <p className="mt-1 text-sm text-gray-400">
                    Business Solutions
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-black text-[#00CFFF]">
                    Automated
                  </p>
                  <p className="mt-1 text-sm text-gray-400">
                    Workflows
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
            Intelligent Digital Transformation
          </p>

          <h2 className="text-3xl font-black leading-tight md:text-4xl">
            Transform the Way Your Business Works
          </h2>

          <p
            className="mt-6 leading-8"
            style={{ color: "var(--muted-text)" }}
          >
            Businesses spend significant time managing repetitive activities,
            processing information and coordinating daily operations.
            Artificial intelligence and automation provide new ways to simplify
            these activities and improve how organisations deliver services.
          </p>

          <p
            className="mt-4 leading-8"
            style={{ color: "var(--muted-text)" }}
          >
            Ximtavo Technologies helps businesses identify opportunities for
            intelligent automation and implement practical AI-powered
            solutions. From conversational assistants to connected workflows,
            we focus on technology that addresses real operational challenges.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Automate repetitive business activities",
              "Connect existing applications and systems",
              "Improve customer engagement and response",
              "Turn business information into useful insights",
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
            src="https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&w=1100&q=85"
            alt="Artificial intelligence and digital technology"
            className="h-[430px] w-full object-cover"
          />

          <div className="absolute -bottom-5 -left-5 hidden bg-[#FF6A00] p-7 text-white sm:block">
            <Sparkles size={34} />
            <p className="mt-3 text-xl font-bold">Intelligent Automation</p>
            <p className="mt-1 text-sm text-white/80">
              Less routine. More possibilities.
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
              Our AI & Automation Capabilities
            </h2>

            <p
              className="mt-5 leading-7"
              style={{ color: "var(--muted-text)" }}
            >
              Practical artificial intelligence and automation services
              designed to improve business processes and digital experiences.
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

      {/* AUTOMATION SOLUTIONS */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
              Intelligent Business Operations
            </p>

            <h2 className="text-3xl font-black leading-tight md:text-4xl">
              Automate Processes. Connect Systems. Improve Productivity.
            </h2>

            <p
              className="mt-6 leading-8"
              style={{ color: "var(--muted-text)" }}
            >
              Automation helps organisations move beyond disconnected
              applications and repetitive manual processes. We design
              connected workflows that help teams complete routine tasks
              more consistently and efficiently.
            </p>

            <div className="mt-9 space-y-6">
              {automationSolutions.map((item) => {
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
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1100&q=85"
              alt="Artificial intelligence and robotics"
              className="h-[570px] w-full object-cover"
            />

            <div className="absolute bottom-6 left-6 right-6 bg-black/80 p-6 text-white backdrop-blur-sm">
              <p className="text-sm font-bold uppercase tracking-widest text-[#00CFFF]">
                Intelligent Workflows
              </p>

              <p className="mt-2 text-xl font-bold">
                Let technology handle routine tasks while your team focuses
                on higher-value work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI APPLICATIONS */}
      <section
        className="py-20"
        style={{ background: "var(--surface-bg)" }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
              Practical AI Applications
            </p>

            <h2 className="text-3xl font-black md:text-4xl">
              Where Artificial Intelligence Creates Value
            </h2>

            <p
              className="mt-5 leading-7"
              style={{ color: "var(--muted-text)" }}
            >
              AI can support different parts of an organisation when
              implemented with clear objectives, appropriate data and
              suitable human oversight.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Bot,
                title: "Virtual Assistants",
                description:
                  "Answer common questions, guide customers and assist employees with routine information requests.",
              },
              {
                icon: FileSearch,
                title: "Document Intelligence",
                description:
                  "Extract and organise information from invoices, forms, reports and other business documents.",
              },
              {
                icon: BarChart3,
                title: "Data Intelligence",
                description:
                  "Analyse business information, identify trends and support reporting and decision-making.",
              },
              {
                icon: Zap,
                title: "Task Automation",
                description:
                  "Trigger actions, route requests and coordinate repetitive activities across connected applications.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="border p-7 transition hover:-translate-y-1 hover:border-[#FF6A00]"
                  style={{
                    background: "var(--page-bg)",
                    borderColor:
                      "var(--border-color, rgba(128,128,128,0.2))",
                  }}
                >
                  <Icon size={32} className="text-[#FF6A00]" />

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

      {/* IMPLEMENTATION PROCESS */}
      <section className="bg-[#0A0A0A] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
              How We Work
            </p>

            <h2 className="text-3xl font-black md:text-4xl">
              From Business Challenges to Intelligent Solutions
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              We follow a structured implementation approach to ensure every
              AI and automation solution addresses a genuine business need.
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
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1100&q=85"
            alt="Business team collaborating with technology"
            className="h-[430px] w-full object-cover"
          />

          <div className="absolute bottom-6 left-6 bg-[#FF6A00] p-6 text-white">
            <Rocket size={32} />
            <p className="mt-3 text-xl font-bold">Move Forward</p>
            <p className="mt-1 text-sm text-white/80">
              Work smarter with AI
            </p>
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
            Business Value
          </p>

          <h2 className="text-3xl font-black leading-tight md:text-4xl">
            Make More of Your Time, Data and Resources
          </h2>

          <p
            className="mt-6 leading-8"
            style={{ color: "var(--muted-text)" }}
          >
            The value of AI and automation goes beyond adopting new
            technologies. It comes from applying the right tools to the right
            business challenges and measuring the improvements they deliver.
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
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
              Industries We Serve
            </p>

            <h2 className="text-3xl font-black md:text-4xl">
              Intelligent Solutions Across Industries
            </h2>

            <p
              className="mt-5 leading-7"
              style={{ color: "var(--muted-text)" }}
            >
              We help organisations identify practical opportunities to
              introduce AI and automation into their daily operations.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* RESPONSIBLE AI */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-10 border p-8 md:p-12 lg:grid-cols-[1fr_1.2fr] lg:items-center"
          style={{
            background: "var(--surface-bg)",
            borderColor: "var(--border-color, rgba(128,128,128,0.2))",
          }}
        >
          <div>
            <div className="mb-5 flex h-14 w-14 items-center justify-center bg-[#00CFFF]/10 text-[#00A9D0]">
              <ShieldCheck size={30} />
            </div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
              Responsible Technology
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight">
              Intelligent Automation With Human Oversight
            </h2>
          </div>

          <div>
            <p
              className="leading-8"
              style={{ color: "var(--muted-text)" }}
            >
              Effective AI implementation requires more than connecting an
              AI model to a business application. It requires appropriate
              data handling, access controls, output validation and clear
              accountability.
            </p>

            <p
              className="mt-4 leading-8"
              style={{ color: "var(--muted-text)" }}
            >
              We consider security, privacy, reliability and human review
              when designing AI-enabled workflows. Critical business
              decisions should retain suitable human supervision.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#FF6A00] px-6 py-20 text-white md:px-10">
        <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full border-[45px] border-white/10" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/80">
              Let's Work Smarter
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
              Ready to Bring AI and Automation Into Your Business?
            </h2>

            <p className="mt-4 leading-7 text-white/90">
              Talk to Ximtavo Technologies about intelligent automation,
              AI integration and custom solutions that help your business
              move forward.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-3 bg-[#0A0A0A] px-8 py-4 font-bold text-white transition hover:bg-[#222]"
          >
            Discuss Your AI Project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AIAutomationSolutions;
