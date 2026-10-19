
import { useState } from "react";
import {
  ChevronDown,
  X,
  Menu,
  Moon,
  Sun,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { navigation, services } from "../data/navigation";

const columns = [
  services.slice(0, 5),
  services.slice(5, 9),
  services.slice(9, 13),
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  const closeMenus = () => setActiveMenu(null);

  const linkClass = `flex items-center gap-1.5 whitespace-nowrap text-[15px] font-medium transition-colors hover:text-[#FF6A00] ${
    isDark ? "text-white" : "text-[#0A0A0A]"
  }`;

  const dropdownClass = `rounded-xl p-5 shadow-2xl ${
    isDark
      ? "border border-white/10 bg-[#151515] text-white"
      : "border border-black/5 bg-white text-slate-700"
  }`;

  const renderThemeButton = (mobile = false) => (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={
        mobile
          ? `flex w-full items-center gap-3 border-t py-5 text-sm transition-colors hover:text-[#FF6A00] ${
              isDark
                ? "border-white/15 text-white"
                : "border-slate-200 text-[#0A0A0A]"
            }`
          : `flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-[#00CFFF] hover:text-[#0A0A0A] ${
              isDark
                ? "bg-white text-[#0A0A0A]"
                : "bg-[#0A0A0A] text-white"
            }`
      }
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
      {mobile && (
        <span>{isDark ? "Switch to light mode" : "Switch to dark mode"}</span>
      )}
    </button>
  );

  return (
    <>
<header
  className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
    isDark
      ? "border-white/10 bg-[#000000] text-white shadow-md"
      : "border-black/10 bg-white text-[#0A0A0A] shadow-sm"
  }`}
>
        <div className="mx-auto flex h-24 max-w-[1500px] items-center justify-between px-6 lg:px-12 xl:px-16">
          {/* Brand */}
          <Link
            to="/"
            aria-label="XimTavo homepage"
            className="flex w-28 shrink-0 flex-col items-start leading-none"
            onClick={closeMenus}
          >
            <span className="font-serif text-[43px] tracking-[-7px]">
              X<span className="relative -left-1 text-[#FF6A00]">T</span>
            </span>
            <span className="ml-1 text-xl tracking-[1px]">Ximtavo</span>
          </Link>

          {/* Desktop navigation */}
          <nav
            className="hidden items-center gap-6 lg:flex xl:gap-7"
            onMouseLeave={closeMenus}
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative flex h-24 items-center"
                onMouseEnter={() =>
                  setActiveMenu(item.dropdown ? item.label : null)
                }
              >
                <button
                  type="button"
                  aria-expanded={
                    item.dropdown ? activeMenu === item.label : undefined
                  }
                  onFocus={() =>
                    setActiveMenu(item.dropdown ? item.label : null)
                  }
                  onClick={() =>
                    item.dropdown
                      ? setActiveMenu(
                          activeMenu === item.label ? null : item.label
                        )
                      : closeMenus()
                  }
                  className={linkClass}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown
                      size={15}
                      className={`transition-transform ${
                        activeMenu === item.label ? "rotate-180" : ""
                      } ${isDark ? "text-[#00CFFF]" : "text-sky-700"}`}
                    />
                  )}
                </button>

                {/* Standard dropdown */}
                {item.dropdown &&
                  item.label !== "Our Services" &&
                  activeMenu === item.label && (
                    <div
                      className={`absolute left-0 top-[78px] w-72 ${dropdownClass}`}
                    >
                      {item.items.map((label) => (
                        <button
                          key={label}
                          type="button"
                          onClick={closeMenus}
                          className={`flex w-full items-center justify-between border-b py-3 text-left text-sm last:border-0 ${
                            isDark
                              ? "border-white/10 hover:text-[#00CFFF]"
                              : "border-sky-100 hover:text-sky-700"
                          }`}
                        >
                          {label}
                          <ArrowUpRight size={14} />
                        </button>
                      ))}
                    </div>
                  )}

                {/* Services mega menu */}
                {item.label === "Our Services" &&
                  activeMenu === "Our Services" && (
                    <div
                      className={`absolute left-1/2 top-[78px] w-[min(785px,85vw)] -translate-x-[42%] ${dropdownClass} md:p-8`}
                    >
                      <div className="grid grid-cols-3 gap-x-7">
                        {columns.map((column, columnIndex) => (
                          <div key={columnIndex}>
                            {column.map((service) => {
                              const Icon = service.icon;

                              return (
                                <button
                                  type="button"
                                  key={service.label}
                                  onClick={closeMenus}
                                  className={`group flex min-h-[61px] w-full items-center gap-2 border-b py-3 text-left text-[15px] transition-colors ${
                                    isDark
                                      ? "border-white/10 hover:text-[#00CFFF]"
                                      : "border-[#8bb5cf] hover:text-sky-600"
                                  }`}
                                >
                                  <Icon
                                    size={20}
                                    strokeWidth={1.35}
                                    className="shrink-0 text-[#FF6A00]"
                                  />
                                  <span>{service.label}</span>
                                </button>
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
              </div>
            ))}
          </nav>

          {/* Desktop controls */}
          <div className="hidden shrink-0 items-center gap-5 lg:flex">
            <button
              type="button"
              className={`flex items-center gap-2 text-sm ${
                isDark ? "text-white" : "text-[#0A0A0A]"
              }`}
              aria-label="Selected country: Nigeria"
            >
              <span className="text-xl">🇳🇬</span>
              Nigeria
              <ChevronDown
                size={15}
                className={isDark ? "text-[#00CFFF]" : "text-sky-700"}
              />
            </button>
            {renderThemeButton()}
          </div>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className={`rounded-md p-2 transition-colors hover:text-[#FF6A00] lg:hidden ${
              isDark ? "text-white" : "text-[#0A0A0A]"
            }`}
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
          >
            <Menu size={29} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <button
            type="button"
            aria-label="Close navigation backdrop"
            onClick={closeMobile}
            className="absolute inset-0 h-full w-full bg-slate-950/60 backdrop-blur-sm"
          />

          <aside
            className={`absolute inset-y-0 right-0 flex w-[88%] max-w-[430px] flex-col shadow-2xl ${
              isDark
                ? "bg-[#101010] text-white"
                : "bg-white text-[#34416f]"
            }`}
            aria-label="Mobile navigation"
          >
            <div
              className={`flex h-[90px] shrink-0 items-center justify-between border-b px-5 ${
                isDark
                  ? "border-white/10"
                  : "border-slate-200"
              }`}
            >
              <Link
                to="/"
                onClick={closeMobile}
                className="leading-none"
              >
                <span className="block font-serif text-3xl tracking-[-5px]">
                  X<span className="text-[#FF6A00]">T</span>
                </span>
                <span className="text-sm tracking-widest">Ximtavo</span>
              </Link>

              <button
                type="button"
                onClick={closeMobile}
                aria-label="Close navigation menu"
                className="p-2 transition-colors hover:text-[#FF6A00]"
              >
                <X size={25} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-6 py-2">
              {navigation.map((item) => {
                const expanded = mobileExpanded === item.label;

                return (
                  <div key={item.label}>
                    <button
                      type="button"
                      onClick={() => {
                        if (item.dropdown) {
                          setMobileExpanded(expanded ? null : item.label);
                        } else {
                          closeMobile();
                        }
                      }}
                      className={`flex min-h-[62px] w-full items-center justify-between border-b text-left text-[15px] ${
                        isDark ? "border-white/10" : "border-[#8bb5cf]"
                      }`}
                    >
                      {item.label}
                      {item.dropdown && (
                        <ChevronDown
                          size={17}
                          className={`text-[#FF6A00] transition-transform ${
                            expanded ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>

                    {expanded && (
                      <div
                        className={`px-3 py-2 ${
                          isDark ? "bg-white/[0.04]" : "bg-slate-50"
                        }`}
                      >
                        {(item.label === "Our Services"
                          ? services.map((service) => ({
                              label: service.label,
                            }))
                          : (item.items || []).map((label) => ({
                              label,
                            }))
                        ).map((link) => (
                          <button
                            key={link.label}
                            type="button"
                            onClick={closeMobile}
                            className={`block w-full border-b py-3 text-left text-sm last:border-0 ${
                              isDark
                                ? "border-white/10 hover:text-[#00CFFF]"
                                : "border-slate-200 hover:text-sky-700"
                            }`}
                          >
                            {link.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <button
                type="button"
                className={`flex w-full items-center gap-3 border-b py-5 text-sm ${
                  isDark ? "border-white/10" : "border-[#8bb5cf]"
                }`}
              >
                <span className="text-xl">🇳🇬</span>
                Nigeria
                <ChevronDown size={15} />
              </button>

              {renderThemeButton(true)}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
