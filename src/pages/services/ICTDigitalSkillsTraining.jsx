
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Monitor,
  Laptop,
  Network,
  Database,
  ShieldCheck,
  BrainCircuit,
  Palette,
  BriefcaseBusiness,
  Smartphone,
  GraduationCap,
  Users,
  Building2,
  Lightbulb,
  ClipboardCheck,
  BookOpen,
  Target,
  Rocket,
  CheckCircle2,
  Presentation,
} from "lucide-react";

const programmes = [
  {
    icon: Monitor,
    title: "Computer Appreciation & Digital Literacy",
    description:
      "Build essential computer skills, including operating systems, file management, internet usage, email, online collaboration and digital workplace tools.",
    level: "Beginner",
  },
  {
    icon: Code2,
    title: "Web Design & Development",
    description:
      "Learn how to design and develop modern websites using HTML, CSS, JavaScript, React and other relevant web technologies.",
    level: "Beginner to Advanced",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Understand mobile application development, interface design, application logic and the fundamentals of building mobile experiences.",
    level: "Intermediate",
  },
  {
    icon: Database,
    title: "Software & Database Development",
    description:
      "Develop programming, database design, data management and software development skills for practical business applications.",
    level: "Intermediate",
  },
  {
    icon: Network,
    title: "Computer Networking",
    description:
      "Learn networking fundamentals, network configuration, connectivity troubleshooting, IP addressing and infrastructure basics.",
    level: "Beginner to Intermediate",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Awareness",
    description:
      "Understand digital security, safe computing practices, password protection, cyber threats and responsible information handling.",
    level: "Beginner",
  },
  {
    icon: Palette,
    title: "Graphics & Digital Design",
    description:
      "Develop visual communication skills, graphic design fundamentals, branding concepts and digital content creation.",
    level: "Beginner to Intermediate",
  },
  {
    icon: BriefcaseBusiness,
    title: "Digital Productivity & Office Tools",
    description:
      "Build practical skills in word processing, spreadsheets, presentations, workplace collaboration and business productivity tools.",
    level: "Beginner to Intermediate",
  },
  {
    icon: BrainCircuit,
    title: "AI & Emerging Technologies",
    description:
      "Explore practical applications of artificial intelligence, digital automation, productivity tools and emerging technologies.",
    level: "Beginner to Intermediate",
  },
];

const learningBenefits = [
  {
    icon: Target,
    title: "Practical Learning",
    description:
      "Learn through hands-on exercises, demonstrations and real-world technology applications.",
  },
  {
    icon: Lightbulb,
    title: "Industry-Relevant Skills",
    description:
      "Develop skills aligned with modern digital tools, technologies and workplace requirements.",
  },
  {
    icon: ClipboardCheck,
    title: "Project-Based Training",
    description:
      "Apply your knowledge through practical assignments and projects that demonstrate your abilities.",
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    description:
      "Build confidence through teamwork, instructor guidance and interactive learning experiences.",
  },
];

const audiences = [
  {
    icon: GraduationCap,
    title: "Students & Graduates",
    description:
      "Prepare for technology careers and develop practical digital skills that complement academic education.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Working Professionals",
    description:
      "Upgrade existing skills, improve productivity and adapt to changing digital workplace requirements.",
  },
  {
    icon: Building2,
    title: "Businesses & Organisations",
    description:
      "Equip teams with the technical and digital capabilities required to operate more effectively.",
  },
  {
    icon: Laptop,
    title: "Aspiring Technology Professionals",
    description:
      "Build a foundation for careers in software development, IT support, networking and other technology fields.",
  },
];

const steps = [
  {
    number: "01",
    title: "Identify Learning Goals",
    description:
      "We understand your current skills, interests and the capabilities you want to develop.",
  },
  {
    number: "02",
    title: "Choose a Training Programme",
    description:
      "We recommend a suitable programme based on your learning objectives and experience level.",
  },
  {
    number: "03",
    title: "Learn Through Practice",
    description:
      "Participate in structured lessons, practical exercises, demonstrations and guided projects.",
  },
  {
    number: "04",
    title: "Build & Demonstrate Skills",
    description:
      "Apply what you have learned through assignments and practical projects.",
  },
];

export default function ICTDigitalSkillsTraining() {
  return (
    <main className="bg-[var(--page-bg)] text-[var(--page-text)]">

      {/* HERO */}
      <section className="relative isolate flex min-h-[620px] items-center overflow-hidden bg-[#0A0A0A] pt-28 text-white lg:min-h-[720px]">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=2200&q=85')",
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
              ICT & Digital Skills
              <span className="block text-[#FF6A00]">
                Training
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Learn. Build. Innovate. Lead. We empower individuals,
              professionals and organisations with practical technology
              skills to thrive in a digitally driven world.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#programmes"
                className="inline-flex items-center gap-3 bg-[#FF6A00] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#e85f00]"
              >
                Explore Training Programmes
                <ArrowRight size={18} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 border border-white/40 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#00CFFF] hover:text-[#00CFFF]"
              >
                Enquire About Training
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
            Building Digital Capabilities
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Technology skills for a world that never stops evolving.
          </h2>

          <p className="mt-7 leading-8 text-[var(--muted-text)]">
            Digital technology continues to transform how people learn,
            work, communicate and do business. Having practical ICT
            knowledge is increasingly important for individuals and
            organisations that want to remain productive and competitive.
          </p>

          <p className="mt-5 leading-8 text-[var(--muted-text)]">
            At Ximtavo Technologies, our training programmes are designed
            to make technology accessible through structured learning,
            practical demonstrations and hands-on experience. We help
            learners develop useful digital capabilities and build
            confidence in applying technology to real-world challenges.
          </p>

          <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-[#FF6A00]">
            <CheckCircle2 size={20} />
            Learn skills. Create solutions. Build opportunities.
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1100&q=85"
            alt="Students participating in technology training"
            className="h-[350px] w-full object-cover sm:h-[460px]"
          />
          <div className="absolute -bottom-5 -left-5 hidden h-32 w-32 border-b-4 border-l-4 border-[#FF6A00] sm:block" />
          <div className="absolute -right-3 -top-3 h-20 w-20 border-r-4 border-t-4 border-[#00CFFF]" />
        </div>
      </section>

      {/* PROGRAMMES */}
      <section
        id="programmes"
        className="bg-[var(--surface-bg)] px-6 py-20 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-[1350px]">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF6A00]">
              Our Training Programmes
            </p>

            <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">
              Develop skills that move you forward.
            </h2>

            <p className="mt-5 leading-8 text-[var(--muted-text)]">
              Explore practical learning areas designed to introduce,
              strengthen and advance your technology capabilities.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programmes.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group border border-[var(--page-text)]/10 bg-[var(--page-bg)] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#FF6A00]"
                >
                  <div className="flex h-14 w-14 items-center justify-center bg-[#FF6A00]/10 text-[#FF6A00] transition group-hover:bg-[#FF6A00] group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-[var(--muted-text)]">
                    {item.description}
                  </p>

                  <span className="mt-6 inline-flex border border-[#00CFFF]/40 px-3 py-1.5 text-xs font-medium text-[#00A6D1]">
                    {item.level}
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* LEARNING APPROACH */}
      <section className="mx-auto max-w-[1500px] px-6 py-20 lg:px-16 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF6A00]">
              The Ximtavo Learning Experience
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
              Learning by doing.
              <span className="text-[#FF6A00]">
                {" "}Skills for real life.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-[var(--muted-text)]">
              We believe effective technology education should go
              beyond theory. Our approach combines instructor guidance,
              practical exercises and project-based learning to help
              learners understand how technology works and how to use
              it to solve problems.
            </p>

            <div className="mt-8 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1100&q=85"
                alt="Practical digital skills learning"
                className="h-[300px] w-full object-cover"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {learningBenefits.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="border border-[var(--page-text)]/10 p-7 transition hover:border-[#FF6A00]"
                >
                  <div className="flex h-12 w-12 items-center justify-center bg-[#00CFFF]/10 text-[#00A6D1]">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--muted-text)]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHO WE TRAIN */}
      <section className="bg-[#0A0A0A] px-6 py-20 text-white lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1350px]">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#00CFFF]">
              Who We Train
            </p>

            <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">
              Digital skills for every stage of growth.
            </h2>

            <p className="mt-5 leading-8 text-white/60">
              Whether you are taking your first steps into technology
              or upgrading the capabilities of an established team,
              our training can be structured around your needs.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="border border-white/15 p-7 transition hover:border-[#FF6A00]"
                >
                  <Icon size={30} className="text-[#FF6A00]" />

                  <h3 className="mt-6 text-xl font-semibold">
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

      {/* TRAINING PROCESS */}
      <section className="mx-auto max-w-[1500px] px-6 py-20 lg:px-16 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF6A00]">
            How It Works
          </p>

          <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">
            Your learning journey starts here.
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <article
              key={item.number}
              className="border-t border-[var(--page-text)]/20 pt-6"
            >
              <span className="text-3xl font-semibold text-[#FF6A00]">
                {item.number}
              </span>

              <h3 className="mt-5 text-lg font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[var(--muted-text)]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CORPORATE TRAINING */}
      <section className="bg-[var(--surface-bg)] px-6 py-20 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-[1350px] gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF6A00]">
              Corporate & Institutional Training
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
              Build a more digitally capable workforce.
            </h2>

            <p className="mt-6 leading-8 text-[var(--muted-text)]">
              Organisations need teams that can confidently use
              technology to perform their responsibilities. Ximtavo
              provides customised ICT and digital skills training
              designed around organisational objectives, employee
              responsibilities and operational requirements.
            </p>

            <ul className="mt-7 space-y-4">
              {[
                "Customised training programmes",
                "Staff digital literacy development",
                "Practical workplace technology training",
                "Technical skills development",
                "Group and institutional training arrangements",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#FF6A00]" size={19} />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="mt-9 inline-flex items-center gap-3 bg-[#FF6A00] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#e85f00]"
            >
              Request Corporate Training
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1100&q=85"
              alt="Team participating in corporate training"
              className="h-[350px] w-full object-cover sm:h-[450px]"
            />
            <div className="absolute -bottom-4 -right-4 hidden h-24 w-24 border-b-4 border-r-4 border-[#00CFFF] sm:block" />
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
              Start Your Digital Journey
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">
              Your next opportunity begins with a new skill.
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-white/85">
              Take the next step in your digital journey. Connect with
              Ximtavo Technologies to explore our training programmes
              or arrange customised training for your organisation.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-3 self-start bg-[#0A0A0A] px-8 py-5 text-sm font-semibold text-white transition hover:bg-[#00CFFF] hover:text-[#0A0A0A] lg:self-center"
          >
            Enquire About Training
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>
    </main>
  );
}
