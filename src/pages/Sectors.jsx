
import {
  ArrowRight,
  ArrowUpRight,
  Hotel,
  Landmark,
  ShoppingCart,
  GraduationCap,
  Building2,
  BriefcaseBusiness,
  CheckCircle2,
  Globe,
  Cpu,
  ShieldCheck,
  Workflow,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const sectors = [
  {
    number: "01",
    title: "Hospitality & Tourism",
    subtitle: "Technology for exceptional guest experiences",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=85",
    description:
      "We help hotels, resorts and hospitality businesses improve guest experiences and streamline operations through modern technology, digital platforms and integrated business systems.",
    solutions: [
      "Hotel websites and online presence",
      "Hotel Property Management Systems",
      "Booking and reservation management",
      "CCTV and security infrastructure",
      "IT infrastructure and technical support",
      "Business process automation",
    ],
    icon: Hotel,
  },
  {
    number: "02",
    title: "Financial Services & Fintech",
    subtitle: "Enabling smarter digital financial operations",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85",
    description:
      "We support financial service providers and fintech-oriented businesses with digital platforms, software development, workflow automation and technology infrastructure that improve business operations.",
    solutions: [
      "Business and customer-facing web platforms",
      "Custom software development",
      "Workflow and process automation",
      "Data management and reporting",
      "IT infrastructure support",
      "Digital brand and customer engagement",
    ],
    icon: Landmark,
  },
  {
    number: "03",
    title: "Retail, Trade & E-commerce",
    subtitle: "Connecting businesses with digital customers",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85",
    description:
      "We help retailers, distributors and growing businesses strengthen their digital presence, improve customer engagement and streamline business activities with practical technology solutions.",
    solutions: [
      "E-commerce website development",
      "Product catalogues and online storefronts",
      "Inventory and business management software",
      "Point-of-sale related solutions",
      "Digital marketing and social media",
      "Business workflow automation",
    ],
    icon: ShoppingCart,
  },
  {
    number: "04",
    title: "Education & Training",
    subtitle: "Building digital capabilities for the future",
    image:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1000&q=85",
    description:
      "We work with schools, training centres and educational organisations to support digital learning, modern ICT infrastructure and technology skills development.",
    solutions: [
      "School and educational websites",
      "Learning and training platforms",
      "ICT infrastructure and maintenance",
      "Digital skills and technology training",
      "Software and database solutions",
      "Technology consulting and support",
    ],
    icon: GraduationCap,
  },
  {
    number: "05",
    title: "Real Estate & Construction",
    subtitle: "Technology for smarter spaces and developments",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1000&q=85",
    description:
      "We support property businesses, construction firms and real estate professionals with digital platforms, smart infrastructure and technology solutions that improve visibility and operations.",
    solutions: [
      "Real estate websites and property listings",
      "Property management technology",
      "CCTV and surveillance installations",
      "Smart building technology integration",
      "ICT infrastructure planning and installation",
      "Project management and ICT consulting",
    ],
    icon: Building2,
  },
  {
    number: "06",
    title: "Public Sector, NGOs & Professional Services",
    subtitle: "Technology that improves service delivery",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
    description:
      "We help public institutions, non-governmental organisations and professional service providers improve communication, information management and operational efficiency through technology.",
    solutions: [
      "Institutional and corporate websites",
      "Custom digital platforms",
      "Document and workflow automation",
      "ICT consulting and project support",
      "Data management and reporting systems",
      "Digital communications and branding",
    ],
    icon: BriefcaseBusiness,
  },
];

const capabilities = [
  {
    icon: Globe,
    title: "Digital Platforms",
    description:
      "Websites, web applications and digital experiences that connect organisations with their customers and communities.",
  },
  {
    icon: Cpu,
    title: "Software & Enterprise Systems",
    description:
      "Practical software solutions that support business processes, information management and operational efficiency.",
  },
  {
    icon: ShieldCheck,
    title: "IT Infrastructure & Security",
    description:
      "Technology infrastructure, computer systems, CCTV surveillance and technical support for reliable operations.",
  },
  {
    icon: Workflow,
    title: "AI & Business Automation",
    description:
      "Intelligent workflows, AI integrations and automation that reduce repetitive work and improve productivity.",
  },
];

export default function Sectors() {
  return (
    <main className="overflow-hidden bg-[var(--page-bg)] text-[var(--page-text)]">

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#0A0A0A]">
        <div className="absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full border-[90px] border-[#FF6A00]/10" />
        <div className="absolute -bottom-64 -left-40 h-[550px] w-[550px] rounded-full border-[90px] border-[#00CFFF]/10" />

        <div className="relative mx-auto grid min-h-[510px] max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:px-10">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FF6A00]/40 bg-[#FF6A00]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
              <Globe size={15} />
              Industries We Serve
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Technology for Every
              <span className="block text-[#FF6A00]">
                Sector. Solutions for Growth.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-300 md:text-lg">
              Every industry has unique challenges. At Ximtavo Technologies,
              we combine software, digital platforms, IT infrastructure and
              emerging technologies to help organisations work smarter,
              connect better and move forward.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#sectors"
                className="inline-flex items-center gap-3 rounded-md bg-[#FF6A00] px-7 py-4 font-bold text-white transition hover:bg-orange-600"
              >
                Explore Our Sectors
                <ArrowRight size={18} />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 px-7 py-4 font-bold text-white transition hover:border-[#00CFFF] hover:text-[#00CFFF]"
              >
                Talk to Our Team
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm">
              <div className="mb-5 inline-flex rounded-xl bg-[#FF6A00]/15 p-3 text-[#FF6A00]">
                <Globe size={27} />
              </div>
              <h3 className="text-xl font-bold text-white">
                Industry-focused
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-400">
                Solutions shaped around the needs of different industries.
              </p>
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm">
              <div className="mb-5 inline-flex rounded-xl bg-[#00CFFF]/15 p-3 text-[#00CFFF]">
                <Cpu size={27} />
              </div>
              <h3 className="text-xl font-bold text-white">
                Technology-driven
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-400">
                Practical digital tools that support modern operations.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm">
              <div className="mb-5 inline-flex rounded-xl bg-[#00CFFF]/15 p-3 text-[#00CFFF]">
                <TrendingUp size={27} />
              </div>
              <h3 className="text-xl font-bold text-white">
                Growth-oriented
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-400">
                Helping organisations improve, adapt and scale.
              </p>
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm">
              <div className="mb-5 inline-flex rounded-xl bg-[#FF6A00]/15 p-3 text-[#FF6A00]">
                <Workflow size={27} />
              </div>
              <h3 className="text-xl font-bold text-white">
                Connected systems
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-400">
                Bringing platforms, people and processes together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
              Our Industry Approach
            </p>

            <h2 className="text-3xl font-black leading-tight md:text-4xl">
              Understanding Your Industry.
              <span className="block text-[#FF6A00]">
                Delivering the Right Technology.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-[var(--muted-text)]">
              Technology creates the greatest value when it addresses real
              business needs. That is why we approach every sector with an
              understanding of its operations, customers and opportunities.
            </p>

            <p className="mt-4 leading-8 text-[var(--muted-text)]">
              From hospitality and retail to education, real estate and
              professional services, Ximtavo brings together digital
              development, software solutions, infrastructure and consulting
              to help organisations make progress.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
              alt="Professionals collaborating on a technology project"
              className="h-[390px] w-full rounded-2xl object-cover"
            />
            <div className="absolute -bottom-6 -left-5 hidden rounded-xl border border-[var(--border-color)] bg-[var(--surface-bg)] p-6 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-[#FF6A00]/10 p-3 text-[#FF6A00]">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="font-bold">Solutions with Purpose</p>
                  <p className="text-sm text-[var(--muted-text)]">
                    Technology aligned with business needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTOR CARDS */}
      <section
        id="sectors"
        className="bg-[var(--surface-bg)] px-6 py-24 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
              Sectors We Serve
            </p>

            <h2 className="text-3xl font-black md:text-4xl">
              Technology Solutions Across Key Industries
            </h2>

            <p className="mt-5 leading-7 text-[var(--muted-text)]">
              We work across different industries, adapting our technology
              services to the unique requirements of each business
              environment.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {sectors.map((sector) => {
              const Icon = sector.icon;

              return (
                <article
                  key={sector.number}
                  className="group overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--page-bg)] transition duration-300 hover:-translate-y-1 hover:border-[#FF6A00]/60 hover:shadow-2xl"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={sector.image}
                      alt={sector.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                    <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between">
                      <div>
                        <span className="text-sm font-bold tracking-widest text-[#FF6A00]">
                          SECTOR {sector.number}
                        </span>
                        <h3 className="mt-2 text-2xl font-black text-white md:text-3xl">
                          {sector.title}
                        </h3>
                      </div>

                      <div className="rounded-xl bg-[#FF6A00] p-3 text-white">
                        <Icon size={24} />
                      </div>
                    </div>
                  </div>

                  <div className="p-7 md:p-8">
                    <p className="text-sm font-bold text-[#00A9D6]">
                      {sector.subtitle}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-[var(--muted-text)]">
                      {sector.description}
                    </p>

                    <div className="mt-7">
                      <h4 className="text-sm font-bold uppercase tracking-wider">
                        How We Support This Sector
                      </h4>

                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {sector.solutions.map((solution) => (
                          <div
                            key={solution}
                            className="flex items-start gap-2 text-sm text-[var(--muted-text)]"
                          >
                            <CheckCircle2
                              size={16}
                              className="mt-0.5 shrink-0 text-[#FF6A00]"
                            />
                            <span>{solution}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 border-t border-[var(--border-color)] pt-6">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-3 font-bold text-[#FF6A00] transition hover:gap-5"
                      >
                        Discuss Your Sector
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CROSS-SECTOR CAPABILITIES */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
            Our Technology Capabilities
          </p>

          <h2 className="text-3xl font-black md:text-4xl">
            One Technology Partner. Multiple Areas of Expertise.
          </h2>

          <p className="mt-5 leading-7 text-[var(--muted-text)]">
            Our services work together to provide technology support across
            industries, from digital presence and software to infrastructure
            and intelligent automation.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-xl border border-[var(--border-color)] bg-[var(--surface-bg)] p-7 transition hover:-translate-y-1 hover:border-[#FF6A00]/60"
              >
                <div className="mb-6 inline-flex rounded-xl bg-[#FF6A00]/10 p-4 text-[#FF6A00]">
                  <Icon size={26} />
                </div>

                <h3 className="text-lg font-bold">{item.title}</h3>

                <p className="mt-4 text-sm leading-7 text-[var(--muted-text)]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#FF6A00] px-6 py-20 text-white lg:px-10">
        <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full border-[45px] border-white/10" />
        <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full border-[45px] border-white/10" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-white/80">
              Let's Build Something Better
            </p>

            <h2 className="text-3xl font-black leading-tight md:text-4xl">
              Your Industry. Your Challenges. Our Technology.
            </h2>

            <p className="mt-5 leading-7 text-white/90">
              Tell us what your organisation needs. Let's explore how Ximtavo
              Technologies can help you improve operations, strengthen your
              digital presence and create new opportunities.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-md bg-[#0A0A0A] px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#0A0A0A]"
          >
            Talk to Ximtavo
            <ArrowUpRight size={19} />
          </Link>
        </div>
      </section>
    </main>
  );
}
