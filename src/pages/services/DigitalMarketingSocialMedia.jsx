
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Camera,
  CheckCircle2,
  Globe,
  Megaphone,
  MessageCircle,
  MousePointerClick,
  PenTool,
  Search,
  Share2,
  Target,
  TrendingUp,
  Users,
  Video,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const capabilities = [
  {
    icon: Megaphone,
    title: "Social Media Management",
    description:
      "Build a consistent and engaging brand presence across Facebook, Instagram, LinkedIn, X and other relevant social platforms.",
  },
  {
    icon: PenTool,
    title: "Content Creation & Strategy",
    description:
      "Develop compelling graphics, captions, marketing messages and content plans that communicate your brand's value.",
  },
  {
    icon: Target,
    title: "Digital Advertising",
    description:
      "Plan and manage targeted advertising campaigns designed to reach relevant audiences and generate meaningful enquiries.",
  },
  {
    icon: Search,
    title: "Search Engine Optimisation",
    description:
      "Improve your website's visibility through keyword research, on-page optimisation, technical SEO and quality content.",
  },
  {
    icon: Video,
    title: "Video & Visual Marketing",
    description:
      "Create engaging promotional videos, short-form content and visual campaigns that help your business stand out.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Performance Reporting",
    description:
      "Measure campaign performance, understand audience behaviour and use data to improve marketing decisions.",
  },
];

const solutions = [
  "Social media account setup and optimisation",
  "Monthly content calendars and publishing",
  "Brand identity and promotional graphics",
  "Facebook and Instagram advertising",
  "Google Ads campaign management",
  "Website traffic and lead generation campaigns",
  "Email marketing and customer engagement",
  "Campaign tracking and performance reporting",
];

const process = [
  {
    number: "01",
    title: "Discover & Understand",
    description:
      "We learn about your business, products, audience, competitors and marketing objectives.",
  },
  {
    number: "02",
    title: "Plan & Strategise",
    description:
      "We develop a practical digital marketing strategy with clear channels, content themes and measurable goals.",
  },
  {
    number: "03",
    title: "Create & Execute",
    description:
      "We create content, configure campaigns and manage the activities that bring your strategy to life.",
  },
  {
    number: "04",
    title: "Measure & Improve",
    description:
      "We review performance, identify opportunities and continuously refine campaigns for better results.",
  },
];

const audiences = [
  "Small and medium-sized businesses",
  "Hotels, restaurants and hospitality brands",
  "Retail and e-commerce businesses",
  "Educational institutions",
  "Professional service providers",
  "Startups and growing organisations",
];

const benefits = [
  "Stronger online brand visibility",
  "Consistent communication with customers",
  "Better audience targeting",
  "More qualified enquiries and leads",
  "Measurable marketing performance",
  "A more competitive digital presence",
];

export default function DigitalMarketingSocialMedia() {
  return (
    <main className="overflow-hidden bg-[var(--page-bg)] text-[var(--page-text)]">
      {/* HERO */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=85"
            alt="Digital marketing analytics displayed on a computer"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
        </div>

        <div className="mx-auto grid min-h-[570px] max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:px-10">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
              <Megaphone size={15} />
              Digital Marketing & Social Media
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Make Your Brand
              <span className="block text-[#FF6A00]">
                Impossible to Ignore.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-300 md:text-lg">
              We help businesses build a powerful digital presence through
              strategic marketing, creative content, social media management
              and data-driven campaigns that connect brands with customers.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-md bg-[#FF6A00] px-7 py-4 font-bold text-white transition hover:bg-orange-600"
              >
                Discuss Your Project
                <ArrowRight size={18} />
              </Link>

              <a
                href="#our-capabilities"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 px-7 py-4 font-bold text-white transition hover:border-[#00CFFF] hover:text-[#00CFFF]"
              >
                Explore Our Services
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="ml-auto max-w-md rounded-2xl border border-white/15 bg-white/10 p-7 shadow-2xl backdrop-blur-md">
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-300">Digital growth</p>
                  <h3 className="mt-1 text-2xl font-bold text-white">
                    Strategy. Reach. Results.
                  </h3>
                </div>
                <div className="rounded-xl bg-[#FF6A00] p-3 text-white">
                  <TrendingUp size={25} />
                </div>
              </div>

              <div className="space-y-5">
                {[
                  ["Brand visibility", "Build recognition"],
                  ["Audience engagement", "Create connections"],
                  ["Lead generation", "Attract opportunities"],
                ].map(([title, description]) => (
                  <div
                    key={title}
                    className="flex items-center gap-4 border-b border-white/10 pb-5 last:border-0 last:pb-0"
                  >
                    <div className="rounded-lg bg-[#00CFFF]/15 p-3 text-[#00CFFF]">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{title}</h4>
                      <p className="mt-1 text-sm text-gray-400">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-10">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
            Grow Your Digital Influence
          </p>
          <h2 className="text-3xl font-black leading-tight md:text-4xl">
            Your Customers Are Online.
            <span className="block text-[#FF6A00]">
              Your Business Should Be Too.
            </span>
          </h2>
          <p className="mt-6 leading-8 text-[var(--muted-text)]">
            Having a social media account is only the beginning. Businesses
            need a clear strategy, valuable content and consistent engagement
            to turn online attention into meaningful customer relationships.
          </p>
          <p className="mt-4 leading-8 text-[var(--muted-text)]">
            Ximtavo Technologies combines creativity, technology and marketing
            insight to help organisations communicate effectively, reach their
            target audiences and grow their digital footprint.
          </p>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=85"
            alt="Marketing team collaborating on a campaign"
            className="h-[390px] w-full rounded-2xl object-cover"
          />
          <div className="absolute -bottom-7 -left-5 hidden rounded-xl border border-[var(--border-color)] bg-[var(--surface-bg)] p-6 shadow-xl sm:block">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-[#FF6A00]/10 p-3 text-[#FF6A00]">
                <Share2 size={24} />
              </div>
              <div>
                <p className="font-bold">Connected Marketing</p>
                <p className="text-sm text-[var(--muted-text)]">
                  Strategy across digital channels
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section
        id="our-capabilities"
        className="bg-[var(--surface-bg)] px-6 py-24 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
              What We Do
            </p>
            <h2 className="text-3xl font-black md:text-4xl">
              Digital Marketing That Moves Your Business Forward
            </h2>
            <p className="mt-5 leading-7 text-[var(--muted-text)]">
              From building your brand presence to running measurable
              campaigns, we provide the capabilities your business needs to
              compete online.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="group rounded-xl border border-[var(--border-color)] bg-[var(--page-bg)] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#FF6A00]/60 hover:shadow-xl"
                >
                  <div className="mb-6 inline-flex rounded-xl bg-[#FF6A00]/10 p-4 text-[#FF6A00] transition group-hover:bg-[#FF6A00] group-hover:text-white">
                    <Icon size={27} />
                  </div>
                  <p className="mb-3 text-xs font-bold tracking-widest text-[#00A9D6]">
                    0{index + 1}
                  </p>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted-text)]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
            Our Marketing Solutions
          </p>
          <h2 className="text-3xl font-black leading-tight md:text-4xl">
            Everything You Need to Build a Stronger Online Presence
          </h2>
          <p className="mt-6 leading-8 text-[var(--muted-text)]">
            Our solutions are designed around your business goals. Whether
            you are launching a new brand or improving an existing digital
            presence, we help you choose the right channels and execute with
            purpose.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-3 font-bold text-[#FF6A00] transition hover:gap-5"
          >
            Talk to Our Team <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {solutions.map((solution) => (
            <div
              key={solution}
              className="flex items-start gap-3 rounded-lg border border-[var(--border-color)] bg-[var(--surface-bg)] p-5"
            >
              <CheckCircle2
                size={19}
                className="mt-1 shrink-0 text-[#FF6A00]"
              />
              <span className="text-sm font-medium leading-6">{solution}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#0A0A0A] px-6 py-24 text-white lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
              How We Work
            </p>
            <h2 className="text-3xl font-black md:text-4xl">
              A Clear Strategy. Consistent Execution. Measurable Progress.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div
                key={item.number}
                className="border-t border-white/20 pt-7"
              >
                <span className="text-4xl font-black text-[#FF6A00]">
                  {item.number}
                </span>
                <h3 className="mt-6 text-xl font-bold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS & AUDIENCE */}
      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
            Why Ximtavo
          </p>
          <h2 className="text-3xl font-black md:text-4xl">
            Marketing With Purpose, Not Just Posts.
          </h2>
          <div className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <CheckCircle2
                  size={20}
                  className="shrink-0 text-[#FF6A00]"
                />
                <span className="text-[var(--muted-text)]">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-[var(--surface-bg)] p-8 md:p-10">
          <div className="mb-6 inline-flex rounded-xl bg-[#00CFFF]/10 p-4 text-[#00A9D6]">
            <Users size={28} />
          </div>
          <h3 className="text-2xl font-black">Who We Work With</h3>
          <p className="mt-4 leading-7 text-[var(--muted-text)]">
            We support organisations at different stages of growth, adapting
            our marketing approach to their audience, industry and objectives.
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {audiences.map((audience) => (
              <div
                key={audience}
                className="flex items-start gap-3 text-sm"
              >
                <CheckCircle2
                  size={17}
                  className="mt-0.5 shrink-0 text-[#FF6A00]"
                />
                <span>{audience}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#FF6A00] px-6 py-20 text-white lg:px-10">
        <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full border-[45px] border-white/10" />
        <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full border-[45px] border-white/10" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-white/80">
              Let's Grow Together
            </p>
            <h2 className="text-3xl font-black leading-tight md:text-4xl">
              Ready to Take Your Brand Further?
            </h2>
            <p className="mt-5 leading-7 text-white/90">
              Let's build a digital marketing strategy that connects your
              business with the right audience and creates room for growth.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-md bg-[#0A0A0A] px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#0A0A0A]"
          >
            Get Started <ArrowUpRight size={19} />
          </Link>
        </div>
      </section>
    </main>
  );
}
