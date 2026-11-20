
import { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  Code2,
  Cpu,
  GraduationCap,
  Laptop,
  Menu,
  Monitor,
  Palette,
  Play,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  X,
  Zap,
} from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Frontend Web Development",
    category: "Development",
    level: "Beginner to Intermediate",
    duration: "12 Weeks",
    mode: "Online / Physical",
    icon: Code2,
    color: "orange",
    description:
      "Learn to design and build modern, responsive websites and interactive web applications.",
    skills: ["HTML & CSS", "JavaScript", "React", "Tailwind CSS"],
    outcome: "Build and deploy professional web applications.",
    popular: true,
  },
  {
    id: 2,
    title: "Backend Development",
    category: "Development",
    level: "Intermediate",
    duration: "12 Weeks",
    mode: "Online / Physical",
    icon: Cpu,
    color: "cyan",
    description:
      "Understand server-side development, APIs, databases and the architecture behind modern applications.",
    skills: ["Node.js", "Express", "REST APIs", "PostgreSQL"],
    outcome: "Develop and connect functional application backends.",
  },
  {
    id: 3,
    title: "Full-Stack Software Development",
    category: "Development",
    level: "Intermediate",
    duration: "20 Weeks",
    mode: "Online / Physical",
    icon: Laptop,
    color: "orange",
    description:
      "Learn how to develop complete software applications from frontend interfaces to backend systems.",
    skills: ["React", "Node.js", "Databases", "Deployment"],
    outcome: "Build complete, deployable software projects.",
    popular: true,
  },
  {
    id: 4,
    title: "Python Programming",
    category: "Development",
    level: "Beginner",
    duration: "10 Weeks",
    mode: "Online / Physical",
    icon: Code2,
    color: "cyan",
    description:
      "Build a strong programming foundation using Python and explore its practical applications.",
    skills: ["Python Basics", "OOP", "Automation", "APIs"],
    outcome: "Create useful Python applications and scripts.",
  },
  {
    id: 5,
    title: "Artificial Intelligence & Generative AI",
    category: "AI & Data",
    level: "Beginner",
    duration: "8 Weeks",
    mode: "Online / Physical",
    icon: BrainCircuit,
    color: "orange",
    description:
      "Explore AI concepts, generative tools, prompt engineering and practical business applications.",
    skills: ["AI Fundamentals", "Prompt Engineering", "AI Tools", "Automation"],
    outcome: "Apply AI tools to practical tasks and workflows.",
    popular: true,
  },
  {
    id: 6,
    title: "Data Analysis & Visualisation",
    category: "AI & Data",
    level: "Beginner to Intermediate",
    duration: "10 Weeks",
    mode: "Online / Physical",
    icon: Zap,
    color: "cyan",
    description:
      "Transform raw information into meaningful insights using data analysis and visualisation tools.",
    skills: ["Excel", "SQL", "Python", "Power BI"],
    outcome: "Analyse data and communicate business insights.",
  },
  {
    id: 7,
    title: "Graphics Design & Digital Creativity",
    category: "Creative",
    level: "Beginner",
    duration: "8 Weeks",
    mode: "Online / Physical",
    icon: Palette,
    color: "orange",
    description:
      "Develop visual communication skills and create professional digital and brand designs.",
    skills: ["Design Principles", "Canva", "Photoshop", "Brand Identity"],
    outcome: "Create a portfolio of professional design work.",
  },
  {
    id: 8,
    title: "UI/UX Design",
    category: "Creative",
    level: "Beginner to Intermediate",
    duration: "8 Weeks",
    mode: "Online / Physical",
    icon: Monitor,
    color: "cyan",
    description:
      "Learn to research, plan and design intuitive digital experiences for websites and applications.",
    skills: ["User Research", "Wireframing", "Figma", "Prototyping"],
    outcome: "Design user-friendly interfaces and prototypes.",
  },
  {
    id: 9,
    title: "Cybersecurity Fundamentals",
    category: "IT & Infrastructure",
    level: "Beginner",
    duration: "8 Weeks",
    mode: "Online / Physical",
    icon: ShieldCheck,
    color: "orange",
    description:
      "Understand digital security, common threats, safe computing and foundational security practices.",
    skills: ["Security Basics", "Network Security", "Threat Awareness", "Best Practices"],
    outcome: "Recognise threats and apply foundational security practices.",
  },
  {
    id: 10,
    title: "Computer Hardware & Networking",
    category: "IT & Infrastructure",
    level: "Beginner",
    duration: "10 Weeks",
    mode: "Online / Physical",
    icon: Cpu,
    color: "cyan",
    description:
      "Develop practical knowledge of computer systems, hardware components and computer networks.",
    skills: ["Computer Hardware", "Troubleshooting", "Networking", "System Maintenance"],
    outcome: "Diagnose basic hardware and networking problems.",
  },
  {
    id: 11,
    title: "Digital Literacy & Productivity",
    category: "Digital Skills",
    level: "Beginner",
    duration: "6 Weeks",
    mode: "Online / Physical",
    icon: Laptop,
    color: "orange",
    description:
      "Build essential digital skills for education, business and the modern workplace.",
    skills: ["Computer Basics", "Microsoft Office", "Internet Skills", "Digital Safety"],
    outcome: "Use everyday digital tools confidently.",
  },
  {
    id: 12,
    title: "Database & SQL Fundamentals",
    category: "Development",
    level: "Beginner to Intermediate",
    duration: "8 Weeks",
    mode: "Online / Physical",
    icon: BookOpen,
    color: "cyan",
    description:
      "Learn how to organise, query and manage structured data using relational databases.",
    skills: ["Database Design", "SQL", "PostgreSQL", "Data Modelling"],
    outcome: "Design databases and write practical SQL queries.",
  },
];

const categories = [
  "All Courses",
  "Development",
  "AI & Data",
  "Creative",
  "IT & Infrastructure",
  "Digital Skills",
];

const learningSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Identify your interests, learning goals and the technology skills you want to develop.",
  },
  {
    number: "02",
    title: "Learn",
    description:
      "Build knowledge through structured lessons, guided instruction and practical exercises.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Apply your knowledge through real-world projects and hands-on assignments.",
  },
  {
    number: "04",
    title: "Grow",
    description:
      "Develop your portfolio, improve your confidence and prepare for new opportunities.",
  },
];

const benefits = [
  {
    icon: Laptop,
    title: "Practical Learning",
    description:
      "Learn by doing, with exercises and projects that connect classroom knowledge to real applications.",
  },
  {
    icon: Users,
    title: "Guided Instruction",
    description:
      "Learn with structured guidance, feedback and opportunities to ask questions.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Career Development",
    description:
      "Build practical skills, a portfolio and an understanding of professional technology environments.",
  },
  {
    icon: BrainCircuit,
    title: "Emerging Technologies",
    description:
      "Explore modern tools, AI applications and evolving technology practices.",
  },
];

const faqs = [
  {
    question: "Do I need previous programming experience?",
    answer:
      "No. Several programmes are designed for beginners. Each course clearly identifies its recommended entry level so you can choose a suitable starting point.",
  },
  {
    question: "Are courses available online and physically?",
    answer:
      "Our course listings indicate the intended learning modes. Availability of physical and online classes will be confirmed during registration.",
  },
  {
    question: "Will I work on practical projects?",
    answer:
      "Yes. Practical exercises and projects are important parts of the learning approach. The specific projects depend on the course you choose.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Certificate arrangements depend on the programme and its completion requirements. Please confirm the certificate details with the Academy before enrolling.",
  },
  {
    question: "How do I register for a course?",
    answer:
      "Choose a course, click Register Now, complete the registration form and submit your interest. The Academy can then follow up with programme details and enrolment arrangements.",
  },
  {
    question: "Can organisations arrange training for their teams?",
    answer:
      "Yes. Organisations can contact Ximtavo to discuss tailored digital skills and technology training programmes for their teams.",
  },
];

function RegistrationModal({ course, onClose }) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    learningMode: "Online",
    experience: "Beginner",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function updateField(event) {
    setForm((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Ximtavo Academy Course Registration - ${course.title}`
    );

    const body = encodeURIComponent(
      `NEW COURSE REGISTRATION REQUEST

Course: ${course.title}
Category: ${course.category}

Full Name: ${form.fullName}
Email: ${form.email}
Phone: ${form.phone}
Preferred Learning Mode: ${form.learningMode}
Experience Level: ${form.experience}

Additional Information:
${form.message || "None"}

Please follow up with this prospective student.`
    );

    setSubmitted(true);

    // Opens the visitor's email application with a prepared registration.
    // Replace the address below with the official Academy email.
    const academyEmail = "academy@ximtavo.com";

    window.location.href = `mailto:${academyEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="relative my-auto w-full max-w-2xl rounded-xl border border-white/10 bg-[#10161e] text-white shadow-2xl">
        <div className="flex items-start justify-between border-b border-white/10 p-6 sm:p-8">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ff6a00]">
              <GraduationCap size={17} />
              Academy Registration
            </div>
            <h2 className="text-2xl font-black sm:text-3xl">
              Start your learning journey.
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Selected course: <span className="font-semibold text-[#00cfff]">{course.title}</span>
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close registration"
            className="rounded-full border border-white/10 p-2 text-gray-400 transition hover:bg-white/10 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {submitted ? (
          <div className="p-10 text-center">
            <CheckCircle2 size={52} className="mx-auto text-[#00cfff]" />
            <h3 className="mt-5 text-2xl font-bold">Your email application is opening.</h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-gray-400">
              Please send the prepared registration email from your email
              application to complete your enquiry. The Academy has not yet
              received your details until that email is sent.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-7 bg-[#ff6a00] px-7 py-3 font-bold text-white"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-300">
                  Full Name *
                </label>
                <input
                  required
                  name="fullName"
                  value={form.fullName}
                  onChange={updateField}
                  placeholder="Enter your full name"
                  className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-[#ff6a00]"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-300">
                  Email Address *
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={updateField}
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-[#ff6a00]"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-300">
                  Phone Number *
                </label>
                <input
                  required
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={updateField}
                  placeholder="+234..."
                  className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-[#ff6a00]"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-300">
                  Preferred Learning Mode
                </label>
                <select
                  name="learningMode"
                  value={form.learningMode}
                  onChange={updateField}
                  className="w-full rounded-md border border-white/10 bg-[#18212c] px-4 py-3 text-sm outline-none focus:border-[#ff6a00]"
                >
                  <option>Online</option>
                  <option>Physical</option>
                  <option>Hybrid</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-xs font-semibold text-gray-300">
                  Current Experience Level
                </label>
                <select
                  name="experience"
                  value={form.experience}
                  onChange={updateField}
                  className="w-full rounded-md border border-white/10 bg-[#18212c] px-4 py-3 text-sm outline-none focus:border-[#ff6a00]"
                >
                  <option>Beginner</option>
                  <option>Some experience</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-xs font-semibold text-gray-300">
                  Anything else we should know? (Optional)
                </label>
                <textarea
                  rows={3}
                  name="message"
                  value={form.message}
                  onChange={updateField}
                  placeholder="Tell us about your learning goals..."
                  className="w-full resize-none rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-[#ff6a00]"
                />
              </div>
            </div>

            <p className="text-xs leading-6 text-gray-500">
              By submitting, you agree that Ximtavo may contact you about this
              course enquiry. Sending the prepared email is required to deliver
              your registration request.
            </p>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-md bg-[#ff6a00] px-6 py-4 font-bold text-white transition hover:bg-[#e85d00]"
            >
              Submit Registration Request
              <ArrowRight size={18} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function Academy() {
  const [activeCategory, setActiveCategory] = useState("All Courses");
  const [search, setSearch] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory =
        activeCategory === "All Courses" ||
        course.category === activeCategory;

      const searchText =
        `${course.title} ${course.description} ${course.skills.join(" ")}`.toLowerCase();

      return matchesCategory && searchText.includes(search.toLowerCase());
    });
  }, [activeCategory, search]);

  return (
    <main className="overflow-hidden bg-[var(--page-bg)] text-[var(--page-text)]">

      {/* HERO */}
      <section className="relative isolate flex min-h-[650px] items-center overflow-hidden bg-[#080d13] text-white">
        <div className="absolute inset-0 -z-20">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2000&q=90"
            alt="Technology education and collaboration"
            className="h-full w-full object-cover opacity-30"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#080d13] via-[#080d13]/95 to-[#080d13]/45" />
        <div className="absolute -right-32 top-10 -z-10 h-96 w-96 rounded-full bg-[#ff6a00]/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 -z-10 h-72 w-72 rounded-full bg-[#00cfff]/10 blur-[110px]" />

        <div className="mx-auto w-full max-w-7xl px-6 py-28 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#00cfff]">
              <GraduationCap size={16} />
              Ximtavo Tech Academy
            </div>

            <h1 className="text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Learn Today.
              <span className="block text-[#ff6a00]">Build Tomorrow.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              Develop practical technology skills, unlock new opportunities
              and prepare for a digital world that never stops evolving.
              Your journey into technology starts here.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#academy-courses"
                className="inline-flex items-center justify-center gap-3 rounded-md bg-[#ff6a00] px-7 py-4 font-bold text-white transition hover:bg-[#e85d00]"
              >
                Explore Our Courses <ArrowRight size={18} />
              </a>
              <a
                href="#about-academy"
                className="inline-flex items-center justify-center gap-3 rounded-md border border-white/25 px-7 py-4 font-bold transition hover:border-[#00cfff] hover:text-[#00cfff]"
              >
                Discover the Academy <Play size={16} />
              </a>
            </div>

            <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00cfff]" />
                Practical learning
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00cfff]" />
                Industry-relevant skills
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00cfff]" />
                Project-based approach
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section id="about-academy" className="px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#ff6a00]">
              About the Academy
            </p>

            <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Empowering people through{" "}
              <span className="text-[#ff6a00]">technology education.</span>
            </h2>

            <p className="mt-7 leading-8 text-[var(--muted-text)]">
              Ximtavo Tech Academy is the learning and development arm of
              Ximtavo Technologies. Our focus is to help individuals develop
              the practical digital skills and technical understanding needed
              to participate confidently in today's digital economy.
            </p>

            <p className="mt-5 leading-8 text-[var(--muted-text)]">
              From foundational computer knowledge to software development,
              artificial intelligence, creative technology and IT
              infrastructure, our programmes are designed around learning,
              application and continuous growth.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-5">
              <div className="border-l-2 border-[#ff6a00] pl-4">
                <h3 className="font-bold">Our Mission</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted-text)]">
                  Make practical technology education accessible and relevant.
                </p>
              </div>
              <div className="border-l-2 border-[#00cfff] pl-4">
                <h3 className="font-bold">Our Vision</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted-text)]">
                  Develop capable people who contribute to digital innovation.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=85"
              alt="Technology education classroom"
              className="relative z-10 h-[440px] w-full object-cover"
            />
            <div className="absolute -bottom-5 -right-5 z-20 bg-[#ff6a00] p-6 text-white shadow-xl sm:p-8">
              <GraduationCap size={30} />
              <p className="mt-3 text-xl font-black">Learn by doing.</p>
              <p className="mt-1 text-sm text-white/80">Grow with purpose.</p>
            </div>
            <div className="absolute -left-5 -top-5 h-28 w-28 border-l-4 border-t-4 border-[#00cfff]" />
          </div>
        </div>
      </section>

      {/* LEARNING BENEFITS */}
      <section className="bg-[var(--surface-bg)] px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#ff6a00]">
              The Ximtavo Difference
            </p>
            <h2 className="text-3xl font-black sm:text-4xl">
              Skills that move you forward.
            </h2>
            <p className="mt-4 leading-7 text-[var(--muted-text)]">
              A learning experience designed to help you understand,
              practise and apply technology with confidence.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="border border-[var(--border-color)] bg-[var(--page-bg)] p-7 transition hover:-translate-y-1 hover:border-[#ff6a00]"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center bg-[#ff6a00]/10 text-[#ff6a00]">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-extrabold">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted-text)]">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section id="academy-courses" className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#ff6a00]">
                Explore Our Programmes
              </p>
              <h2 className="text-3xl font-black sm:text-4xl lg:text-5xl">
                Find the course that moves you forward.
              </h2>
              <p className="mt-5 leading-8 text-[var(--muted-text)]">
                Discover learning opportunities across software development,
                creative technology, AI, digital skills and IT infrastructure.
              </p>
            </div>

            <div className="relative w-full lg:max-w-sm">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted-text)]"
              />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search courses..."
                className="w-full border border-[var(--border-color)] bg-[var(--surface-bg)] py-4 pl-11 pr-4 text-sm outline-none transition focus:border-[#ff6a00]"
              />
            </div>
          </div>

          <div className="mt-10 flex gap-2 overflow-x-auto pb-4">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-full border px-5 py-3 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "border-[#ff6a00] bg-[#ff6a00] text-white"
                    : "border-[var(--border-color)] text-[var(--muted-text)] hover:border-[#ff6a00] hover:text-[#ff6a00]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course) => {
              const Icon = course.icon;

              return (
                <article
                  key={course.id}
                  className="group flex flex-col border border-[var(--border-color)] bg-[var(--surface-bg)] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between border-b border-[var(--border-color)] p-6">
                    <div className={`flex h-12 w-12 items-center justify-center ${
                      course.color === "orange"
                        ? "bg-[#ff6a00]/10 text-[#ff6a00]"
                        : "bg-[#00cfff]/10 text-[#00a6c9]"
                    }`}>
                      <Icon size={25} />
                    </div>
                    {course.popular && (
                      <span className="inline-flex items-center gap-1 bg-[#ff6a00]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#ff6a00]">
                        <Sparkles size={12} /> Featured
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#ff6a00]">
                      {course.category}
                    </span>

                    <h3 className="mt-3 text-xl font-extrabold leading-snug">
                      {course.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[var(--muted-text)]">
                      {course.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {course.skills.map((skill) => (
                        <span
                          key={skill}
                          className="border border-[var(--border-color)] px-2.5 py-1 text-[10px] font-semibold text-[var(--muted-text)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 space-y-3 border-t border-[var(--border-color)] pt-5 text-xs text-[var(--muted-text)]">
                      <div className="flex items-center gap-2">
                        <Clock3 size={15} className="text-[#ff6a00]" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap size={15} className="text-[#ff6a00]" />
                        {course.level}
                      </div>
                      <div className="flex items-center gap-2">
                        <Monitor size={15} className="text-[#ff6a00]" />
                        {course.mode}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedCourse(course)}
                      className="mt-7 flex w-full items-center justify-center gap-3 bg-[#ff6a00] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#e85d00]"
                    >
                      View & Register <ArrowRight size={17} />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          {filteredCourses.length === 0 && (
            <div className="border border-[var(--border-color)] p-12 text-center">
              <Search size={32} className="mx-auto text-[var(--muted-text)]" />
              <h3 className="mt-4 text-lg font-bold">No courses found</h3>
              <p className="mt-2 text-sm text-[var(--muted-text)]">
                Try another search or select a different course category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All Courses");
                }}
                className="mt-5 font-bold text-[#ff6a00]"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* LEARNING JOURNEY */}
      <section className="bg-[#090d12] px-6 py-24 text-white lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#00cfff]">
              Your Learning Journey
            </p>
            <h2 className="text-3xl font-black sm:text-4xl">
              From curiosity to capability.
            </h2>
            <p className="mt-5 leading-7 text-gray-400">
              A structured path that encourages steady development and practical application.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-4">
            {learningSteps.map((step, index) => (
              <div key={step.number} className="relative border-t border-white/20 pt-8">
                <span className="text-4xl font-black text-[#ff6a00]">
                  {step.number}
                </span>
                <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {step.description}
                </p>
                {index !== learningSteps.length - 1 && (
                  <ChevronRight className="absolute right-0 top-10 hidden text-[#00cfff] md:block" size={23} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT BASED LEARNING */}
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=85"
              alt="Students working on technology projects"
              className="h-[430px] w-full object-cover"
            />
            <div className="absolute bottom-5 left-5 flex items-center gap-3 bg-[#090d12] px-5 py-4 text-white">
              <Laptop className="text-[#00cfff]" size={24} />
              <span className="text-sm font-bold">Learn. Practise. Build.</span>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#ff6a00]">
              Beyond the Classroom
            </p>
            <h2 className="text-3xl font-black leading-tight sm:text-4xl">
              Knowledge becomes powerful when you put it to work.
            </h2>
            <p className="mt-6 leading-8 text-[var(--muted-text)]">
              At Ximtavo Tech Academy, learning is intended to go beyond
              memorising concepts. Students are encouraged to experiment,
              solve problems and develop practical projects that demonstrate
              what they have learned.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Practical exercises and guided assignments",
                "Individual and collaborative projects",
                "Portfolio development and project presentation",
                "Feedback and continuous improvement",
                "Exposure to modern technology tools",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-[#ff6a00]" />
                  <span className="text-sm leading-6">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO CAN JOIN */}
      <section className="bg-[var(--surface-bg)] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#ff6a00]">
              Learning for Everyone
            </p>
            <h2 className="text-3xl font-black sm:text-4xl">
              There is a place for you here.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Students & Graduates", "Build practical skills and explore technology career pathways."],
              ["Career Changers", "Develop new capabilities and transition into digital roles."],
              ["Working Professionals", "Upgrade your skills and adapt to changing technology."],
              ["Businesses & Teams", "Develop digital capabilities across your organisation."],
            ].map(([title, description], index) => (
              <div key={title} className="border border-[var(--border-color)] bg-[var(--page-bg)] p-7">
                <span className="text-3xl font-black text-[#ff6a00]">
                  0{index + 1}
                </span>
                <h3 className="mt-5 text-lg font-extrabold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted-text)]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#ff6a00]">
              Frequently Asked Questions
            </p>
            <h2 className="text-3xl font-black leading-tight sm:text-4xl">
              Everything you need to know before getting started.
            </h2>
            <p className="mt-5 leading-8 text-[var(--muted-text)]">
              Have another question about a course or programme? Contact
              the Academy and our team can help clarify the details.
            </p>
            <a
              href="/contact"
              className="mt-7 inline-flex items-center gap-3 font-bold text-[#ff6a00]"
            >
              Contact Ximtavo <ArrowRight size={18} />
            </a>
          </div>

          <div className="divide-y divide-[var(--border-color)] border-y border-[var(--border-color)]">
            {faqs.map((faq, index) => (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  aria-expanded={openFaq === index}
                  className="flex w-full items-center justify-between gap-5 py-6 text-left"
                >
                  <span className="font-bold">{faq.question}</span>
                  <ChevronDown
                    size={19}
                    className={`shrink-0 text-[#ff6a00] transition ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <p className="max-w-2xl pb-6 text-sm leading-7 text-[var(--muted-text)]">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#090d12] px-6 py-24 text-white lg:px-10">
        <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-[#ff6a00]/15 blur-[110px]" />
        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center bg-[#ff6a00]/10 text-[#ff6a00]">
            <GraduationCap size={34} />
          </div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#00cfff]">
            Your Future Starts Here
          </p>
          <h2 className="text-3xl font-black leading-tight sm:text-5xl">
            The next step in your journey
            <span className="block text-[#ff6a00]">starts with learning.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
            Explore our programmes, choose a learning path and take a step
            towards developing skills that can create new opportunities.
          </p>
          <a
            href="#academy-courses"
            className="mt-9 inline-flex items-center gap-3 bg-[#ff6a00] px-8 py-4 font-bold text-white transition hover:bg-[#e85d00]"
          >
            Explore Courses <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {selectedCourse && (
        <RegistrationModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </main>
  );
}
