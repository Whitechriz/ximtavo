
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  MonitorSmartphone,
  ShoppingCart,
  Smartphone,
  PanelsTopLeft,
  Palette,
  Database,
  ShieldCheck,
  Rocket,
  Search,
  Lightbulb,
  Workflow,
  CheckCircle2,
} from "lucide-react";

const capabilities = [
  {
    icon: MonitorSmartphone,
    title: "Business Websites",
    description:
      "Professional, responsive websites that communicate your brand, showcase your services and convert visitors into customers.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Platforms",
    description:
      "Online stores with product management, shopping carts, secure payment integrations and order management.",
  },
  {
    icon: PanelsTopLeft,
    title: "Web Applications",
    description:
      "Custom web-based systems, business portals, management dashboards and SaaS platforms built around your operations.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Intuitive mobile experiences that help businesses connect with customers and deliver services on the go.",
  },
];

const process = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Strategy",
    description:
      "We understand your business, objectives, audience and requirements before defining the right digital solution.",
  },
  {
    number: "02",
    icon: Palette,
    title: "UI/UX Design",
    description:
      "We transform ideas into intuitive interfaces, user journeys and engaging digital experiences.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Development",
    description:
      "Our development process turns approved designs into responsive, functional and scalable products.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Testing & Deployment",
    description:
      "We test functionality, performance and usability before launching your solution.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Support & Growth",
    description:
      "We help maintain, improve and evolve your digital product as your business grows.",
  },
];

const industries = [
  "Banking & Financial Services",
  "Healthcare",
  "Hospitality & Tourism",
  "Education & Training",
  "Retail & E-commerce",
  "Government & Public Sector",
  "Real Estate & Construction",
  "Professional Services",
];

export default function WebsiteAppDevelopment() {
  return (
    <main className="bg-[var(--page-bg)] text-[var(--page-text)]">

      {/* SERVICE HERO */}
      <section className="relative isolate flex min-h-[620px] items-center overflow-hidden bg-[#0A0A0A] pt-28 text-white lg:min-h-[720px]">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2200&q=85')",
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
              Website & App Design
              <span className="block text-[#FF6A00]">
                and Development
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Digital experiences. Intelligent solutions. Business growth.
              We design and develop modern websites and powerful applications
              that help businesses establish their digital presence,
              connect with customers and scale confidently.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-[#FF6A00] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#e85f00]"
              >
                Start a Project
                <ArrowRight size={18} />
              </a>

              <a
                href="#capabilities"
                className="inline-flex items-center gap-3 border border-white/40 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#00CFFF] hover:text-[#00CFFF]"
              >
                Explore Our Capabilities
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
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#FF6A00]">
            Digital Transformation
          </p>

          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Turning business ideas into
            <span className="text-[#FF6A00]"> digital experiences.</span>
          </h2>

          <p className="mt-7 leading-8 text-[var(--muted-text)]">
            At Ximtavo Technologies, we believe every business deserves
            digital solutions that work as hard as it does. We combine
            creativity, technology and strategic thinking to design and
            develop websites and applications that solve real business
            problems.
          </p>

          <p className="mt-5 leading-8 text-[var(--muted-text)]">
            From a professional business website to a complex web
            application or mobile platform, we bring your ideas to life
            through thoughtful design, reliable engineering and
            user-focused development.
          </p>

          <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-[#FF6A00]">
            <CheckCircle2 size={20} />
            Built around your business objectives
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1100&q=85"
            alt="Developer working on a digital product"
            className="h-[350px] w-full rounded-sm object-cover sm:h-[460px]"
          />
          <div className="absolute -bottom-5 -left-5 hidden h-32 w-32 border-b-4 border-l-4 border-[#FF6A00] sm:block" />
          <div className="absolute -right-3 -top-3 h-20 w-20 border-r-4 border-t-4 border-[#00CFFF]" />
        </div>
      </section>

      {/* CAPABILITIES */}
      <section
        id="capabilities"
        className="bg-[var(--surface-bg)] px-6 py-20 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-[1350px]">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF6A00]">
              What We Do
            </p>

            <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">
              Digital solutions designed for your next level.
            </h2>

            <p className="mt-5 leading-8 text-[var(--muted-text)]">
              We offer end-to-end design and development capabilities
              to help businesses build, launch and manage their digital
              products.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item) => {
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

                  <ArrowUpRight className="mt-7 text-[#00CFFF]" size={22} />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="mx-auto max-w-[1500px] px-6 py-20 lg:px-16 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF6A00]">
              How We Work
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
              From concept to
              <span className="text-[#FF6A00]"> reality.</span>
            </h2>

            <p className="mt-6 leading-8 text-[var(--muted-text)]">
              Great digital products are built through a clear,
              collaborative process. We work closely with you at every
              stage to ensure the final solution reflects your vision
              and delivers value.
            </p>
          </div>

          <div className="space-y-0">
            {process.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="flex gap-5 border-b border-[var(--page-text)]/15 py-7 first:pt-0"
                >
                  <div className="text-xl font-semibold text-[#FF6A00]">
                    {item.number}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <Icon className="text-[#00CFFF]" size={21} />
                      <h3 className="text-lg font-semibold">
                        {item.title}
                      </h3>
                    </div>

                    <p className="mt-3 text-sm leading-7 text-[var(--muted-text)]">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-[#0A0A0A] px-6 py-20 text-white lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1350px]">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#00CFFF]">
            Industries We Serve
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold sm:text-5xl">
            Technology that works across industries.
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-white/60">
            We create digital experiences for organisations across
            different sectors, adapting each solution to its users,
            operations and business goals.
          </p>

          <div className="mt-12 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <div
                key={industry}
                className="flex items-center justify-between border-b border-white/15 py-6 transition hover:text-[#FF6A00] sm:px-5"
              >
                <span className="text-sm font-medium">{industry}</span>
                <ArrowUpRight size={18} className="text-[#00CFFF]" />
              </div>
            ))}
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
              Let's Build Together
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">
              Have an idea? Let's build something exceptional.
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-white/85">
              Tell us what you want to build. Let's turn your vision
              into a digital product that makes a difference.
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
