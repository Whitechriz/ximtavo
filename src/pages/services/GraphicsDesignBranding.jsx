
import {
  ArrowRight,
  ArrowUpRight,
  Palette,
  PenTool,
  Layers,
  Image,
  Megaphone,
  Brush,
  CheckCircle2,
  Target,
  Package,
  Monitor,
  Printer,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const capabilities = [
  {
    icon: Palette,
    title: "Brand Identity Design",
    description:
      "Create a distinctive visual identity with carefully designed logos, colours, typography and brand elements that make your business recognisable.",
  },
  {
    icon: PenTool,
    title: "Logo Design",
    description:
      "Professional and memorable logo concepts that communicate your brand personality across digital platforms, print materials and business environments.",
  },
  {
    icon: Image,
    title: "Marketing & Advertising Graphics",
    description:
      "Eye-catching flyers, posters, banners, brochures and promotional designs that communicate your message and attract attention.",
  },
  {
    icon: Layers,
    title: "Corporate Branding Materials",
    description:
      "Consistent visual materials including business cards, letterheads, company profiles, presentation templates and branded stationery.",
  },
  {
    icon: Megaphone,
    title: "Social Media Design",
    description:
      "Creative social media posts, campaign graphics, promotional banners and reusable templates that give your online presence a consistent look.",
  },
  {
    icon: Package,
    title: "Packaging & Product Design",
    description:
      "Thoughtful product labels, packaging concepts and visual layouts that help products communicate quality and stand out in the marketplace.",
  },
];

const deliverables = [
  "Logo concepts and final logo files",
  "Complete brand identity systems",
  "Brand colour and typography guidelines",
  "Business cards and letterheads",
  "Company profiles and presentation designs",
  "Flyers, posters and promotional banners",
  "Social media templates and campaign graphics",
  "Product labels and packaging designs",
  "Event branding and promotional materials",
  "Digital and print-ready design files",
];

const process = [
  {
    number: "01",
    title: "Brand Discovery",
    description:
      "We understand your business, audience, values, competitors and the impression you want your brand to create.",
  },
  {
    number: "02",
    title: "Creative Direction",
    description:
      "We establish the visual direction, design concepts, colours and creative approach that best represent your brand.",
  },
  {
    number: "03",
    title: "Design & Refinement",
    description:
      "We develop the designs, review feedback and refine the selected concepts into professional brand assets.",
  },
  {
    number: "04",
    title: "Final Delivery",
    description:
      "We prepare and deliver approved design assets in suitable formats for digital use, printing and future brand applications.",
  },
];

const audiences = [
  "Startups and entrepreneurs",
  "Small and medium-sized businesses",
  "Hotels and hospitality brands",
  "Retail and e-commerce businesses",
  "Corporate organisations",
  "Events and entertainment brands",
  "Educational institutions",
  "Product manufacturers",
];

const benefits = [
  "A distinctive and recognisable brand identity",
  "Consistent visual communication",
  "Professional presentation across platforms",
  "Stronger customer recognition and trust",
  "Marketing materials aligned with business goals",
  "Design assets that support future growth",
];

export default function GraphicsDesignBranding() {
  return (
    <main className="overflow-hidden bg-[var(--page-bg)] text-[var(--page-text)]">

      {/* HERO */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=2000&q=85"
            alt="Black African creative professional"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/35" />
        </div>

        <div className="mx-auto grid min-h-[570px] max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:px-10">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
              <Palette size={15} />
              Graphics Design & Branding
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Design That Speaks.
              <span className="block text-[#FF6A00]">
                Branding That Lasts.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-300 md:text-lg">
              We transform ideas into powerful visual identities. From logo
              design and corporate branding to marketing graphics and creative
              campaigns, we help businesses communicate their value through
              exceptional design.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-md bg-[#FF6A00] px-7 py-4 font-bold text-white transition hover:bg-orange-600"
              >
                Start a Design Project
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
                  <p className="text-sm text-gray-300">Creative excellence</p>
                  <h3 className="mt-1 text-2xl font-bold text-white">
                    Ideas Into Identity.
                  </h3>
                </div>
                <div className="rounded-xl bg-[#FF6A00] p-3 text-white">
                  <Sparkles size={25} />
                </div>
              </div>

              <div className="space-y-5">
                {[
                  ["Creative design", "Visuals that communicate"],
                  ["Brand identity", "Consistency that builds recognition"],
                  ["Business impact", "Design with a clear purpose"],
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
            The Power of Visual Identity
          </p>

          <h2 className="text-3xl font-black leading-tight md:text-4xl">
            Your Brand Deserves
            <span className="block text-[#FF6A00]">
              More Than Just a Logo.
            </span>
          </h2>

          <p className="mt-6 leading-8 text-[var(--muted-text)]">
            A strong brand is more than an attractive design. It is the
            complete visual experience people associate with your business,
            products and services.
          </p>

          <p className="mt-4 leading-8 text-[var(--muted-text)]">
            At Ximtavo Technologies, we combine creative thinking, design
            principles and business understanding to develop visual identities
            that communicate professionalism, build recognition and create
            lasting impressions.
          </p>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
            alt="Black African woman representing creative brand photography"
            className="h-[390px] w-full rounded-2xl object-cover object-center"
          />

          <div className="absolute -bottom-7 -left-5 hidden rounded-xl border border-[var(--border-color)] bg-[var(--surface-bg)] p-6 shadow-xl sm:block">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-[#FF6A00]/10 p-3 text-[#FF6A00]">
                <Brush size={24} />
              </div>
              <div>
                <p className="font-bold">Creative Identity</p>
                <p className="text-sm text-[var(--muted-text)]">
                  Designed around your business
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
              Our Creative Capabilities
            </p>

            <h2 className="text-3xl font-black md:text-4xl">
              Complete Design & Branding Solutions
            </h2>

            <p className="mt-5 leading-7 text-[var(--muted-text)]">
              We provide creative services that help businesses establish,
              communicate and strengthen their visual identity.
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

      {/* BRANDING SHOWCASE */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
              Beyond Design
            </p>

            <h2 className="text-3xl font-black leading-tight md:text-4xl">
              Building Brands With a Consistent Visual Language
            </h2>

            <p className="mt-6 leading-8 text-[var(--muted-text)]">
              Your logo, website, social media pages, business documents and
              marketing materials should all tell the same brand story. We
              help bring these elements together through a coordinated visual
              identity system.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Brand positioning and creative direction",
                "Logo variations and usage guidelines",
                "Consistent colour and typography systems",
                "Digital and print design applications",
                "Reusable brand templates and assets",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-1 shrink-0 text-[#FF6A00]"
                  />
                  <span className="text-[var(--muted-text)]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=700&q=85"
              alt="Creative event branding and design"
              className="h-64 w-full rounded-xl object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=700&q=85"
              alt="Black African creative professionals collaborating"
              className="mt-10 h-64 w-full rounded-xl object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=700&q=85"
              alt="Creative team reviewing a branding project"
              className="-mt-10 h-64 w-full rounded-xl object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=700&q=85"
              alt="Graphic design and branding materials"
              className="h-64 w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="bg-[var(--surface-bg)] px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
              What You Receive
            </p>

            <h2 className="text-3xl font-black md:text-4xl">
              Creative Assets Ready for Your Business
            </h2>

            <p className="mt-6 leading-8 text-[var(--muted-text)]">
              We deliver organised, professional design materials prepared
              for the platforms and applications where your brand needs to
              appear.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {deliverables.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-lg border border-[var(--border-color)] bg-[var(--page-bg)] p-4"
              >
                <CheckCircle2
                  size={19}
                  className="mt-1 shrink-0 text-[#FF6A00]"
                />
                <span className="text-sm font-medium leading-6">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#0A0A0A] px-6 py-24 text-white lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
              Our Creative Process
            </p>

            <h2 className="text-3xl font-black md:text-4xl">
              From Your Idea to a Complete Brand Identity
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

      {/* INDUSTRIES & BENEFITS */}
      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
            Why Professional Branding Matters
          </p>

          <h2 className="text-3xl font-black md:text-4xl">
            Make Every Brand Interaction Count.
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
            <Target size={28} />
          </div>

          <h3 className="text-2xl font-black">Who We Work With</h3>

          <p className="mt-4 leading-7 text-[var(--muted-text)]">
            We work with businesses, organisations and individuals looking to
            build a professional identity and communicate more effectively.
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
              Let's Create Something Exceptional
            </p>

            <h2 className="text-3xl font-black leading-tight md:text-4xl">
              Ready to Give Your Brand a Powerful Identity?
            </h2>

            <p className="mt-5 leading-7 text-white/90">
              Let's turn your ideas into professional designs that tell your
              story, connect with your audience and help your business stand
              out.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-md bg-[#0A0A0A] px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#0A0A0A]"
          >
            Start Your Project <ArrowUpRight size={19} />
          </Link>
        </div>
      </section>
    </main>
  );
}
