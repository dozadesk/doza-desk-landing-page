import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, Clapperboard } from "lucide-react";
import { siteConfig, waLink, defaultWaMessage } from "../config/site";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#packages", label: "Packages" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#061116]/90 backdrop-blur-xl"
          : "border-b border-transparent bg-gradient-to-b from-[#061116] to-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-3" aria-label="Doza Desk home">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#00C878] to-[#00885a] shadow-[0_0_24px_rgba(0,200,120,0.35)]">
            <Clapperboard className="h-6 w-6 text-[#061116]" strokeWidth={2.2} />
          </span>
          <span className="leading-tight">
            <span className="block font-latin text-lg font-extrabold tracking-tight text-white">
              Doza Desk
            </span>
            <span className="block text-[11px] font-medium tracking-wide text-[#9FB3AE]">
              {siteConfig.brand.tagline}
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-latin text-[13.5px] font-semibold tracking-wide text-white/75 transition hover:text-[#00C878]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={waLink(defaultWaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#00C878] px-6 py-2.5 text-[15px] font-bold text-[#061116] shadow-[0_8px_30px_rgba(0,200,120,0.35)] transition hover:-translate-y-0.5 hover:bg-[#00e086] hover:shadow-[0_12px_36px_rgba(0,200,120,0.45)]"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2.4} />
            অর্ডার করুন
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-b border-white/10 bg-[#061116]/97 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-1 px-4 py-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 font-latin text-[15px] font-semibold text-white/85 transition hover:bg-white/5 hover:text-[#00C878]"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={waLink(defaultWaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#00C878] px-6 py-3 text-base font-bold text-[#061116]"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={2.4} />
              অর্ডার করুন
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
