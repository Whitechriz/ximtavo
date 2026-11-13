
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Code2,
  GraduationCap,
  Handshake,
  Lightbulb,
  MessageCircle,
  Sparkles,
  Trophy,
  UsersRound,
  Globe2,
} from "lucide-react";
import { Link } from "react-router-dom";

const communityPillars = [
  {
    number: "01",
    title: "Ximtavo Tech Academy",
    description:
      "Develop practical digital skills through technology education, hands-on learning, mentorship and continuous improvement.",
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1000&q=85",
    tags: ["Digital Skills", "Training", "Mentorship"],
    link: "/community/academy",
  },
  {
    number: "02",
    title: "Developers & Tech Network",
    description:
      "Connect with developers, designers and technology enthusiasts to exchange ideas, solve problems and build together.",
    icon: Code2,
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=85",
    tags: ["Collaboration", "Networking", "Innovation"],
    link: "/community/developers",
  },
  {
    number: "03",
    title: "Events & Workshops",
    description:
      "Take part in learning sessions, technology conversations, practical workshops and business-focused events.",
    icon: CalendarDays,
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=85",
    tags: ["Workshops", "Webinars", "Meetups"],
    link: "/community/events",
  },
  {
    number: "04",
    title: "Business & Innovation Network",
    description:
      "Bring entrepreneurs, startups and organisations together to explore technology, partnerships and new opportunities.",
    icon: Lightbulb,
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
    tags: ["Entrepreneurship", "Partnerships", "Growth"],
    link: "/community/business",
  },
  {
    number: "05",
    title: "Career & Opportunities",
    description:
      "Discover pathways to professional development, internships, career opportunities and meaningful collaborations.",
    icon: BriefcaseBusiness,
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
    tags: ["Careers", "Internships", "Collaboration"],
    link: "/community/opportunities",
  },
  {
    number: "06",
    title: "Community Stories",
    description:
      "Discover the people, ideas, achievements and projects contributing to a more connected digital future.",
    icon: Trophy,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85",
    tags: ["Success Stories", "Projects", "Highlights"],
    link: "/community/stories",
  },
];

const values = [
  {
    icon: UsersRound,
    title: "People First",
    description:
      "We believe meaningful technology begins with people, their ideas and their potential.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "We encourage curiosity, knowledge sharing and the confidence to explore new possibilities.",
  },
  {
    icon: Handshake,
    title: "Stronger Together",
    description:
      "We create opportunities for people and businesses to connect, collaborate and grow.",
  },
];

const activities = [
  {
    icon: BookOpen,
    title: "Learn Something New",
    description:
      "Explore practical technology knowledge and build skills that can make a difference.",
  },
  {
    icon: MessageCircle,
    title: "Share Ideas",
    description:
      "Exchange experiences, ask questions and contribute to conversations that move technology forward.",
  },
  {
    icon: Globe2,
    title: "Create Opportunities",
    description:
      "Meet people, discover opportunities and find partners for your next big idea.",
  },
];

export default function Community() {
  return (
    <main className="overflow-hidden bg-[var(--page-bg)] text-[var(--page-text)]">

      {/* HERO */}
      <section className="relative isolate flex min-h-[620px] items-center overflow-hidden bg-[#090d12] text-white">
        <div className="absolute inset-0 -z-20">
          <img
            src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=2000&q=90"
            alt="People connecting and collaborating"
            className="h-full w-full object-cover opacity-30"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#080c12] via-[#080c12]/95 to-[#080c12]/55" />
        <div className="absolute -right-32 top-20 -z-10 h-96 w-96 rounded-full bg-[#ff6a00]/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 -z-10 h-64 w-64 rounded-full bg-[#00cfff]/10 blur-[100px]" />

        <div className="mx-auto w-full max-w-7xl px-6 py-28 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#00cfff]">
              <Sparkles size={15} />
              The Ximtavo Community
            </div>

            <h1 className="text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Together, We
              <span className="block text-[#ff6a00]">Build the Future.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              A growing network of learners, developers, entrepreneurs and
              forward-thinking individuals connected by one shared ambition:
              creating opportunities through technology.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-md bg-[#ff6a00] px-7 py-4 font-bold text-white transition hover:bg-[#e85d00]"
              >
                Become Part of the Community
                <ArrowRight size={18} />
              </Link>

              <a
                href="#community-pillars"
                className="inline-flex items-center justify-center gap-3 rounded-md border border-white/25 px-7 py-4 font-bold text-white transition hover:border-[#00cfff] hover:text-[#00cfff]"
              >
                Explore Our Community
                <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00cfff]" />
                Learn and grow
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00cfff]" />
                Connect and collaborate
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00cfff]" />
                Create opportunities
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#ff6a00]">
              More Than Technology
            </p>

            <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              A community built around{" "}
              <span className="text-[#ff6a00]">possibilities.</span>
            </h2>

            <p className="mt-7 leading-8 text-[var(--muted-text)]">
              At Ximtavo, we believe technology creates its greatest impact
              when people have the knowledge, connections and opportunities
              to use it meaningfully.
            </p>

            <p className="mt-5 leading-8 text-[var(--muted-text)]">
              Our community brings together people from different backgrounds
              and industries to learn, exchange ideas, develop practical
              solutions and contribute to a more digitally empowered future.
            </p>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-3 font-bold text-[#ff6a00] transition hover:gap-5"
            >
              Discover Ximtavo <ArrowRight size={18} />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -left-5 -top-5 h-28 w-28 border-l-4 border-t-4 border-[#ff6a00]" />
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
              alt="A diverse team working together"
              className="relative z-10 h-[420px] w-full rounded-sm object-cover"
            />
            <div className="absolute -bottom-5 -right-5 h-28 w-28 border-b-4 border-r-4 border-[#00cfff]" />
          </div>
        </div>
      </section>

      {/* COMMUNITY PILLARS */}
      <section
        id="community-pillars"
        className="bg-[var(--surface-bg)] px-6 py-24 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#ff6a00]">
              Explore the Community
            </p>

            <h2 className="text-3xl font-black sm:text-4xl lg:text-5xl">
              Find Your Place. <span className="text-[#ff6a00]">Make an Impact.</span>
            </h2>

            <p className="mt-5 leading-8 text-[var(--muted-text)]">
              Whether you want to learn, connect, build a business or explore
              new opportunities, there is a place for you in the Ximtavo
              ecosystem.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {communityPillars.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group overflow-hidden border border-[var(--border-color)] bg-[var(--page-bg)] transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                    <span className="absolute left-5 top-5 rounded-sm bg-[#ff6a00] px-3 py-1 text-xs font-black text-white">
                      {item.number}
                    </span>

                    <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center bg-[#00cfff] text-[#080c12]">
                      <Icon size={23} />
                    </div>
                  </div>

                  <div className="p-7">
                    <h3 className="text-xl font-extrabold">{item.title}</h3>

                    <p className="mt-4 min-h-[90px] text-sm leading-7 text-[var(--muted-text)]">
                      {item.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-[var(--border-color)] px-2.5 py-1 text-[10px] font-semibold text-[var(--muted-text)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#ff6a00] transition group-hover:gap-4"
                    >
                      Get Involved <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMMUNITY EXPERIENCE */}
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#ff6a00]">
                The Community Experience
              </p>

              <h2 className="text-3xl font-black leading-tight sm:text-4xl">
                Connect with people.
                <span className="block text-[#ff6a00]">
                  Grow beyond boundaries.
                </span>
              </h2>

              <p className="mt-6 leading-8 text-[var(--muted-text)]">
                The Ximtavo Community is designed to encourage meaningful
                relationships and practical participation. We want every
                interaction to create room for learning, collaboration and
                progress.
              </p>

              <div className="mt-9 space-y-7">
                {activities.map((activity) => {
                  const Icon = activity.icon;

                  return (
                    <div key={activity.title} className="flex gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#ff6a00]/10 text-[#ff6a00]">
                        <Icon size={22} />
                      </div>

                      <div>
                        <h3 className="font-bold">{activity.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-[var(--muted-text)]">
                          {activity.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=85"
                alt="Professionals sharing ideas at a meeting"
                className="h-[520px] w-full object-cover"
                loading="lazy"
              />

              <div className="absolute -bottom-6 -left-5 max-w-xs border-l-4 border-[#ff6a00] bg-[#0a0a0a] p-6 text-white shadow-xl sm:-left-8">
                <Sparkles className="mb-3 text-[#00cfff]" size={25} />
                <p className="text-lg font-bold leading-7">
                  Great things happen when people build together.
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-gray-400">
                  The Ximtavo Community
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="bg-[#0a0a0a] px-6 py-24 text-white lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#00cfff]">
              What We Stand For
            </p>
            <h2 className="text-3xl font-black sm:text-4xl">
              The values that bring us together.
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="border-t border-white/20 pt-8"
                >
                  <div className="mb-7 flex items-center justify-between">
                    <Icon size={34} className="text-[#ff6a00]" />
                    <span className="text-sm font-bold text-white/30">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold">{value.title}</h3>
                  <p className="mt-4 text-sm leading-8 text-gray-400">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden px-6 py-24 lg:px-10">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#ff6a00]/10 blur-[110px]" />

        <div className="relative mx-auto max-w-5xl border border-[var(--border-color)] bg-[var(--surface-bg)] px-7 py-16 text-center sm:px-14">
          <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center bg-[#ff6a00]/10 text-[#ff6a00]">
            <UsersRound size={30} />
          </div>

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#ff6a00]">
            Your Journey Starts Here
          </p>

          <h2 className="text-3xl font-black leading-tight sm:text-5xl">
            Be Part of Something
            <span className="block text-[#ff6a00]">Bigger.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-[var(--muted-text)]">
            Whether you are a student, developer, business owner or technology
            enthusiast, we invite you to connect with Ximtavo and become part
            of a community driven by ideas, innovation and opportunity.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 bg-[#ff6a00] px-8 py-4 font-bold text-white transition hover:bg-[#e85d00]"
            >
              Join the Community <ArrowRight size={18} />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-3 border border-[var(--border-color)] px-8 py-4 font-bold transition hover:border-[#00cfff] hover:text-[#00cfff]"
            >
              Explore Our Services <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
