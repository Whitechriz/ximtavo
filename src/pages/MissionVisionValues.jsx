
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const coreValues = [
  {
    number: "01",
    symbol: "✦",
    title: "Excellence",
    description:
      "We pursue high standards in every project, interaction, and solution. Excellence means paying attention to the details, continually improving our work, and delivering outcomes that create meaningful value for our clients.",
    practice:
      "We focus on quality, consistency, accountability, and continuous improvement.",
  },
  {
    number: "02",
    symbol: "◇",
    title: "Integrity",
    description:
      "We believe strong business relationships are built on honesty and trust. We communicate transparently, act responsibly, and strive to do what is right even when it is not the easiest option.",
    practice:
      "We value honest communication, responsible decisions, and clear expectations.",
  },
  {
    number: "03",
    symbol: "↗",
    title: "Innovation",
    description:
      "We remain open to new ideas, emerging technologies, and better ways of working. By approaching challenges with curiosity, we seek practical solutions that help businesses adapt, improve, and move forward.",
    practice:
      "We question outdated approaches and look for smarter, more effective solutions.",
  },
  {
    number: "04",
    symbol: "◎",
    title: "Customer Focus",
    description:
      "Our work begins with understanding the people and businesses we serve. We listen carefully, consider individual needs, and aim to provide solutions that address real challenges rather than simply completing tasks.",
    practice:
      "We listen, communicate clearly, and measure success by the value we create.",
  },
  {
    number: "05",
    symbol: "⇄",
    title: "Collaboration",
    description:
      "We recognize that meaningful progress is rarely achieved alone. We value different perspectives, encourage constructive communication, and work with clients and partners to turn shared goals into practical results.",
    practice:
      "We encourage teamwork, knowledge sharing, mutual respect, and shared ownership.",
  },
  {
    number: "06",
    symbol: "⌁",
    title: "Adaptability",
    description:
      "Business needs and technologies continue to evolve. We embrace learning, respond thoughtfully to change, and remain willing to refine our approach as new challenges and opportunities emerge.",
    practice:
      "We learn continuously, respond to change, and improve through experience.",
  },
];

const principles = [
  {
    title: "Understand before acting",
    description:
      "We take time to understand the challenge, the desired outcome, and the people affected before deciding on an approach.",
  },
  {
    title: "Build with purpose",
    description:
      "We aim to ensure that our work serves a clear objective and contributes to practical, measurable progress.",
  },
  {
    title: "Communicate with clarity",
    description:
      "We value open communication, realistic expectations, and constructive feedback throughout the working relationship.",
  },
  {
    title: "Improve continuously",
    description:
      "We treat every project and experience as an opportunity to learn, refine our methods, and raise our standards.",
  },
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function MissionVisionValues() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const sectionBg = isDark ? "bg-[#101722]" : "bg-[#F5F7FA]";
  const cardBg = isDark
    ? "border-white/10 bg-[#151D29]"
    : "border-slate-200 bg-white";
  const mutedText = isDark ? "text-slate-300" : "text-slate-600";
  const subtleText = isDark ? "text-slate-400" : "text-slate-500";
  const borderColor = isDark ? "border-white/10" : "border-slate-200";

  return (
    <main
      className={`overflow-hidden transition-colors duration-300 ${
        isDark
          ? "bg-[#0B1019] text-white"
          : "bg-white text-[#111111]"
      }`}
    >
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#101722] px-6 py-24 text-white sm:py-32 lg:px-10">
        <div className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-orange-500/15 blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 -z-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-orange-400">
            What guides us
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            Our Mission, Vision
            <span className="block text-orange-400">
              &amp; Values
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Purpose gives us direction. Vision inspires our future.
            Values shape every step we take. Discover the principles
            that guide how XimTavo thinks, works, and creates value.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#our-mission"
              className="inline-flex items-center gap-3 rounded-full bg-orange-500 px-7 py-3.5 font-semibold text-white transition hover:bg-orange-600"
            >
              Discover Our Purpose <ArrowIcon />
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-3.5 font-semibold text-white transition hover:border-orange-400 hover:text-orange-400"
            >
              Talk to Our Team
            </Link>
          </div>

          <div className="mt-16 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
            {[
              ["Our Mission", "Why we exist"],
              ["Our Vision", "Where we aspire to go"],
              ["Our Values", "How we choose to work"],
            ].map(([title, description]) => (
              <div key={title} className="py-2">
                <p className="font-semibold">{title}</p>
                <p className="mt-1 text-sm text-slate-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-16 sm:py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Our foundation
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Purpose behind every step forward.
            </h2>
          </div>

          <div className={`text-base leading-8 ${mutedText}`}>
            <p>
              At XimTavo, we believe meaningful progress begins with
              a clear purpose and a commitment to doing things well.
              Our mission, vision, and values provide a shared
              foundation for the way we approach opportunities,
              solve problems, and build relationships.
            </p>
            <p className="mt-5">
              They help us remain focused on what matters, make
              thoughtful decisions, and work toward a future in which
              businesses and the people behind them can achieve more.
              They are not simply statements on a page; they are
              principles we aim to put into practice every day.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section
        id="our-mission"
        className={`px-6 py-20 transition-colors duration-300 sm:py-24 lg:px-10 ${sectionBg}`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Our direction
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              What drives us and where we are going
            </h2>
            <p className={`mt-5 leading-7 ${mutedText}`}>
              Our mission defines the work we set out to do. Our
              vision describes the future we want that work to help
              create.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article
              className={`rounded-3xl border p-8 sm:p-10 ${cardBg}`}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-2xl text-orange-500">
                ◎
              </div>

              <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
                Our Mission
              </p>

              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                To create meaningful value through purposeful
                solutions.
              </h3>

              <p className={`mt-5 leading-8 ${mutedText}`}>
                Our mission is to help businesses and individuals
                navigate challenges, identify opportunities, and
                achieve their objectives through thoughtful service,
                practical solutions, and a commitment to quality.
              </p>

              <p className={`mt-4 leading-8 ${mutedText}`}>
                We aim to understand the needs of those we serve,
                approach each challenge with care, and deliver work
                that supports efficiency, strengthens relationships,
                and contributes to sustainable progress.
              </p>

              <div className={`mt-8 border-t pt-6 ${borderColor}`}>
                <p className="font-semibold">What this means in practice</p>
                <ul className={`mt-4 space-y-3 text-sm leading-6 ${mutedText}`}>
                  <li>• Listen carefully and understand the real need.</li>
                  <li>• Develop practical, purpose-driven solutions.</li>
                  <li>• Work responsibly and uphold high standards.</li>
                  <li>• Focus on outcomes that create lasting value.</li>
                </ul>
              </div>
            </article>

            <article
              className={`rounded-3xl border p-8 sm:p-10 ${cardBg}`}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-2xl text-orange-500">
                ↗
              </div>

              <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
                Our Vision
              </p>

              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                To be a trusted force for progress, innovation, and
                growth.
              </h3>

              <p className={`mt-5 leading-8 ${mutedText}`}>
                Our vision is to build a respected and forward-looking
                organization known for its reliability, adaptability,
                and commitment to helping the people and businesses
                it serves move confidently toward their goals.
              </p>

              <p className={`mt-4 leading-8 ${mutedText}`}>
                We aspire to grow through meaningful partnerships,
                continuous learning, responsible innovation, and
                a consistent focus on delivering useful and
                dependable solutions in a changing world.
              </p>

              <div className={`mt-8 border-t pt-6 ${borderColor}`}>
                <p className="font-semibold">The future we are working toward</p>
                <ul className={`mt-4 space-y-3 text-sm leading-6 ${mutedText}`}>
                  <li>• Strong, lasting relationships built on trust.</li>
                  <li>• Smarter approaches to evolving challenges.</li>
                  <li>• Sustainable growth through continuous learning.</li>
                  <li>• Positive impact through purposeful work.</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section id="our-values" className="px-6 py-20 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Our core values
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              The principles behind our work
            </h2>
            <p className={`mt-5 leading-8 ${mutedText}`}>
              Our values shape how we make decisions, treat people,
              approach challenges, and define success. They provide
              a consistent standard for the way we work and grow.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value) => (
              <article
                key={value.number}
                className={`group rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-500/60 ${cardBg}`}
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-xl text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                    {value.symbol}
                  </span>
                  <span className={`text-sm font-semibold ${subtleText}`}>
                    {value.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold">
                  {value.title}
                </h3>

                <p className={`mt-4 text-sm leading-7 ${mutedText}`}>
                  {value.description}
                </p>

                <div className={`mt-6 border-t pt-5 ${borderColor}`}>
                  <p className="text-xs font-bold uppercase tracking-wider text-orange-500">
                    In practice
                  </p>
                  <p className={`mt-2 text-sm leading-6 ${mutedText}`}>
                    {value.practice}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE PUT OUR VALUES INTO ACTION */}
      <section className={`px-6 py-20 sm:py-24 lg:px-10 ${sectionBg}`}>
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              From principle to practice
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Values matter most when they guide our actions.
            </h2>
            <p className={`mt-5 leading-8 ${mutedText}`}>
              A strong culture is built through everyday choices.
              We aim to translate our principles into the way we
              listen, plan, collaborate, solve problems, and respond
              to changing needs.
            </p>
          </div>

          <div className="space-y-0">
            {principles.map((item, index) => (
              <div
                key={item.title}
                className={`flex gap-5 border-b py-6 first:pt-0 last:border-b-0 ${borderColor}`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10 font-bold text-orange-500">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className={`mt-2 text-sm leading-7 ${mutedText}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="bg-[#101722] px-6 py-20 text-white sm:py-24 lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
            Our commitment
          </p>

          <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Clear purpose. Shared values.
            <span className="block text-orange-400">
              A future built together.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-300">
            We believe meaningful progress is built through trust,
            thoughtful action, and a willingness to keep improving.
            As XimTavo grows, our commitment is to remain guided by
            our purpose, grounded in our values, and focused on
            creating value through the work we do.
          </p>

          <Link
            to="/contact"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
          >
            Let’s Work Together <ArrowIcon />
          </Link>
        </div>
      </section>
    </main>
  );
}
