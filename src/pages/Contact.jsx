
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MessageCircle,
  Phone,
  MapPin,
  Clock,
  Send,
  Globe,
  CheckCircle2,
  Headphones,
  BriefcaseBusiness,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

// IMPORTANT: Replace this with Ximtavo's real WhatsApp number.
// Use international format without +, spaces or dashes.
// Example: 2348012345678
const WHATSAPP_NUMBER = "2348067212894";

const services = [
  "Website & App Design and Development",
  "Computer Hardware & System Maintenance",
  "ICT & Digital Skills Training",
  "Project Management & ICT Consulting",
  "Construction, Technology & Real Estate",
  "CCTV Installation & Security Surveillance",
  "Software & Enterprise Solutions",
  "AI & Automation Solutions",
  "Digital Marketing & Social Media",
  "Graphics Design & Branding",
  "Other / General Enquiry",
];

const contactOptions = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Send an enquiry directly to our business WhatsApp.",
    action: "Chat with us",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
  {
    icon: Globe,
    title: "Our Reach",
    description:
      "We support businesses, organisations and individuals across Nigeria and beyond.",
    action: "Explore our sectors",
    href: "/sectors",
  },
  {
    icon: BriefcaseBusiness,
    title: "Our Services",
    description:
      "Discover the technology and digital solutions we provide.",
    action: "Explore services",
    href: "/about",
  },
];

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const company = formData.get("company") || "Not provided";
    const service = formData.get("service");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const whatsappMessage = `
Hello Ximtavo Technologies,

I would like to make a business enquiry.

CONTACT DETAILS
Name: ${name}
Email: ${email}
Phone: ${phone}
Company / Organisation: ${company}

ENQUIRY DETAILS
Service of Interest: ${service}
Subject: ${subject}

Message:
${message}

I look forward to hearing from your team.

Sent through the Ximtavo Technologies website.
    `.trim();

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");

    form.reset();
  };

  return (
    <main className="overflow-hidden bg-[var(--page-bg)] text-[var(--page-text)]">

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#0A0A0A]">
        <div className="absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full border-[90px] border-[#FF6A00]/10" />
        <div className="absolute -bottom-64 -left-40 h-[550px] w-[550px] rounded-full border-[90px] border-[#00CFFF]/10" />

        <div className="relative mx-auto grid min-h-[450px] max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:px-10">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FF6A00]/40 bg-[#FF6A00]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
              <MessageCircle size={15} />
              Contact Ximtavo
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Let's Talk About
              <span className="block text-[#FF6A00]">
                Your Next Big Idea.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-300 md:text-lg">
              Have a project, a business challenge or an idea you want to
              bring to life? We are ready to listen, understand your needs
              and explore how technology can help you move forward.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-3 rounded-md bg-[#FF6A00] px-7 py-4 font-bold text-white transition hover:bg-orange-600"
              >
                Send an Enquiry
                <ArrowRight size={18} />
              </a>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 px-7 py-4 font-bold text-white transition hover:border-[#00CFFF] hover:text-[#00CFFF]"
              >
                Explore Solutions
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
              alt="Business professionals collaborating on a project"
              className="ml-auto h-[340px] w-full max-w-lg rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
            Start a Conversation
          </p>

          <h2 className="text-3xl font-black leading-tight md:text-4xl">
            Tell Us What You Have in Mind.
          </h2>

          <p className="mt-5 leading-8 text-[var(--muted-text)]">
            Whether you need a website, enterprise software, IT support,
            business automation, creative branding or technology consulting,
            our team would be glad to hear from you.
          </p>
        </div>
      </section>

      {/* CONTACT FORM AND DETAILS */}
      <section
        id="contact-form"
        className="bg-[var(--surface-bg)] px-6 py-20 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr]">

          {/* FORM */}
          <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--page-bg)] p-7 shadow-sm md:p-10">
            <div className="mb-8">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
                Send Us a Message
              </p>

              <h2 className="text-2xl font-black md:text-3xl">
                How Can We Help You?
              </h2>

              <p className="mt-3 text-sm leading-7 text-[var(--muted-text)]">
                Complete the form below. Your enquiry will be prepared and
                opened in our WhatsApp chat for a direct conversation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* NAME AND EMAIL */}
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Full Name *
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Enter your full name"
                    className="w-full rounded-lg border border-[var(--border-color)] bg-[var(--surface-bg)] px-4 py-3.5 text-sm outline-none transition placeholder:text-[var(--muted-text)] focus:border-[#FF6A00] focus:ring-2 focus:ring-[#FF6A00]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Email Address *
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-[var(--border-color)] bg-[var(--surface-bg)] px-4 py-3.5 text-sm outline-none transition placeholder:text-[var(--muted-text)] focus:border-[#FF6A00] focus:ring-2 focus:ring-[#FF6A00]/10"
                  />
                </div>
              </div>

              {/* PHONE AND COMPANY */}
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Phone Number *
                  </label>

                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+234 800 000 0000"
                    className="w-full rounded-lg border border-[var(--border-color)] bg-[var(--surface-bg)] px-4 py-3.5 text-sm outline-none transition placeholder:text-[var(--muted-text)] focus:border-[#FF6A00] focus:ring-2 focus:ring-[#FF6A00]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-company"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Company / Organisation
                  </label>

                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    placeholder="Company name (optional)"
                    className="w-full rounded-lg border border-[var(--border-color)] bg-[var(--surface-bg)] px-4 py-3.5 text-sm outline-none transition placeholder:text-[var(--muted-text)] focus:border-[#FF6A00] focus:ring-2 focus:ring-[#FF6A00]/10"
                  />
                </div>
              </div>

              {/* SERVICE */}
              <div>
                <label
                  htmlFor="contact-service"
                  className="mb-2 block text-sm font-semibold"
                >
                  Service of Interest *
                </label>

                <select
                  id="contact-service"
                  name="service"
                  required
                  defaultValue=""
                  className="w-full rounded-lg border border-[var(--border-color)] bg-[var(--surface-bg)] px-4 py-3.5 text-sm outline-none transition focus:border-[#FF6A00] focus:ring-2 focus:ring-[#FF6A00]/10"
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* SUBJECT */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-semibold"
                >
                  Subject *
                </label>

                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="What is your enquiry about?"
                  className="w-full rounded-lg border border-[var(--border-color)] bg-[var(--surface-bg)] px-4 py-3.5 text-sm outline-none transition placeholder:text-[var(--muted-text)] focus:border-[#FF6A00] focus:ring-2 focus:ring-[#FF6A00]/10"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-semibold"
                >
                  Tell Us About Your Project *
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Describe what you need, the challenge you are facing or the project you would like us to discuss..."
                  className="w-full resize-y rounded-lg border border-[var(--border-color)] bg-[var(--surface-bg)] px-4 py-3.5 text-sm outline-none transition placeholder:text-[var(--muted-text)] focus:border-[#FF6A00] focus:ring-2 focus:ring-[#FF6A00]/10"
                />
              </div>

              {/* PRIVACY NOTE */}
              <div className="flex items-start gap-3 rounded-lg bg-[var(--surface-bg)] p-4">
                <ShieldCheck className="mt-0.5 shrink-0 text-[#FF6A00]" size={20} />

                <p className="text-xs leading-6 text-[var(--muted-text)]">
                  Your enquiry details will be included in the WhatsApp
                  message you choose to send to Ximtavo Technologies.
                  Please avoid submitting passwords or sensitive personal
                  information.
                </p>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#FF6A00] px-7 py-4 font-bold text-white transition hover:bg-orange-600"
              >
                <MessageCircle size={19} />
                Send Enquiry via WhatsApp
                <ArrowUpRight size={18} />
              </button>

              <p className="text-center text-xs leading-6 text-[var(--muted-text)]">
                You will be redirected to WhatsApp to review and send your
                enquiry.
              </p>
            </form>
          </div>

          {/* CONTACT INFORMATION */}
          <aside className="space-y-7">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
                Get in Touch
              </p>

              <h2 className="text-2xl font-black md:text-3xl">
                Let's Connect.
              </h2>

              <p className="mt-4 leading-7 text-[var(--muted-text)]">
                We believe great projects begin with meaningful
                conversations. Reach out to discuss your requirements,
                request information or explore a possible collaboration.
              </p>
            </div>

            {/* WHATSAPP CARD */}
            <div className="rounded-2xl bg-[#0A0A0A] p-7 text-white">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-[#25D366]/15 p-4 text-[#25D366]">
                  <MessageCircle size={29} />
                </div>

                <div>
                  <h3 className="text-xl font-bold">Chat on WhatsApp</h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Connect with our team directly.
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-7 text-gray-300">
                Have a quick question or need to discuss a project? Start a
                WhatsApp conversation with Ximtavo Technologies.
              </p>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[#25D366] px-6 py-4 font-bold text-[#0A0A0A] transition hover:bg-white"
              >
                <MessageCircle size={19} />
                Start WhatsApp Chat
                <ArrowUpRight size={17} />
              </a>
            </div>

            {/* CONTACT OPTIONS */}
            <div className="space-y-4">
              {contactOptions.map((item) => {
                const Icon = item.icon;
                const isInternal = item.href.startsWith("/");

                return (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-xl border border-[var(--border-color)] bg-[var(--page-bg)] p-5"
                  >
                    <div className="h-fit rounded-lg bg-[#FF6A00]/10 p-3 text-[#FF6A00]">
                      <Icon size={22} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold">{item.title}</h3>

                      <p className="mt-2 text-sm leading-6 text-[var(--muted-text)]">
                        {item.description}
                      </p>

                      {isInternal ? (
                        <Link
                          to={item.href}
                          className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#FF6A00]"
                        >
                          {item.action}
                          <ArrowRight size={15} />
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#FF6A00]"
                        >
                          {item.action}
                          <ArrowRight size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* AVAILABILITY */}
            <div className="rounded-xl border border-[var(--border-color)] p-6">
              <div className="flex items-center gap-3">
                <Clock className="text-[#FF6A00]" size={22} />
                <h3 className="font-bold">Business Enquiries</h3>
              </div>

              <p className="mt-3 text-sm leading-7 text-[var(--muted-text)]">
                Send us your enquiry at any time through our website.
                Our team will respond as soon as possible during business
                hours.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="relative overflow-hidden bg-[#FF6A00] px-6 py-20 text-white lg:px-10">
        <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full border-[45px] border-white/10" />
        <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full border-[45px] border-white/10" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-white/80">
              Ximtavo Technologies
            </p>

            <h2 className="text-3xl font-black leading-tight md:text-4xl">
              Your Next Move Starts With a Conversation.
            </h2>

            <p className="mt-5 leading-7 text-white/90">
              Let's discuss your ideas and discover how the right technology
              can make a difference to your business.
            </p>
          </div>

          <a
            href="#contact-form"
            className="inline-flex shrink-0 items-center gap-3 rounded-md bg-[#0A0A0A] px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#0A0A0A]"
          >
            Send an Enquiry
            <ArrowUpRight size={19} />
          </a>
        </div>
      </section>
    </main>
  );
}
