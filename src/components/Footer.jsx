import { Link } from "react-router-dom";

import {
  ArrowUpRight,
  ArrowUp,
  Mail,
} from "lucide-react";

import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaGithub,
} from "react-icons/fa";

const navigation = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

const socialLinks = [
  {
    label: "Instagram",
    icon: FaInstagram,
    href: "https://instagram.com/",
  },
  {
    label: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://linkedin.com/",
  },
  {
    label: "Facebook",
    icon: FaFacebookF,
    href: "https://facebook.com/",
  },
  {
    label: "GitHub",
    icon: FaGithub,
    href: "https://github.com/",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0A0A0A] text-white">
      {/* Ambient brand accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-[#FF6A00]/10 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#00CFFF]/[0.07] blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-16 sm:px-8 lg:px-12 lg:pt-20">
        {/* Main footer */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link
              to="/"
              aria-label="XimTavo home"
              className="group inline-flex items-center gap-3"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF6A00] text-xl font-black text-white transition-transform duration-300 group-hover:rotate-[-6deg]">
                X
              </span>

              <span className="text-2xl font-extrabold tracking-tight">
                Xim<span className="text-[#FF6A00]">Tavo</span>
                <span className="text-[#00CFFF]">.</span>
              </span>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/60 sm:text-base">
              Thoughtful digital experiences. Modern technology. Bold ideas
              built to move your next chapter forward.
            </p>

            <Link
              to="/contact"
              className="group mt-7 inline-flex items-center gap-2 rounded-full border border-[#FF6A00]/50 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-[#FF6A00] hover:bg-[#FF6A00] hover:text-white"
            >
              Let's talk
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-[#00CFFF]">
              Explore
            </h3>

            <ul className="mt-6 space-y-4">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="group inline-flex items-center gap-2 text-sm text-white/60 transition-colors duration-200 hover:text-white"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#FF6A00] opacity-0 transition-opacity group-hover:opacity-100" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-[#00CFFF]">
              Get in touch
            </h3>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
              Have a question, an idea, or a project in mind? Let's start a
              conversation.
            </p>

            <Link
              to="/contact"
              className="group mt-5 inline-flex items-center gap-3 text-sm font-semibold text-white transition-colors hover:text-[#FF6A00]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition-all group-hover:border-[#FF6A00]/50 group-hover:bg-[#FF6A00]/10">
                <Mail size={17} className="text-[#FF6A00]" />
              </span>
              Contact our team
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              {socialLinks.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-[#00CFFF]/50 hover:bg-[#00CFFF]/10 hover:text-[#00CFFF]"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Accent divider */}
        <div className="mt-14 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:mt-16" />

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-6 text-white/40">
            © {year}{" "}
            <span className="font-semibold text-white/70">XimTavo</span>.
            All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              to="/privacy"
              className="text-xs text-white/40 transition-colors hover:text-white"
            >
              Privacy
            </Link>

            <Link
              to="/terms"
              className="text-xs text-white/40 transition-colors hover:text-white"
            >
              Terms
            </Link>

            <button
              type="button"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              aria-label="Back to top"
              className="group inline-flex items-center gap-2 text-xs font-semibold text-white/60 transition-colors hover:text-[#FF6A00]"
            >
              Back to top
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-[#FF6A00]/50 group-hover:bg-[#FF6A00]/10">
                <ArrowUp size={15} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}