import {
  Clapperboard,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  FileText,
} from "lucide-react";

function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-7h2.6l.4-3h-3V9.1c0-.9.3-1.5 1.6-1.5h1.5V4.9c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8V11H8v3h2.7v7h2.8Z" />
    </svg>
  );
}

function YoutubeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.9C18.2 5 12 5 12 5s-6.2 0-7.8.3A2.6 2.6 0 0 0 2.4 7.2 27.4 27.4 0 0 0 2 12c0 1.6.1 3.2.4 4.8a2.6 2.6 0 0 0 1.8 1.9c1.6.3 7.8.3 7.8.3s6.2 0 7.8-.3a2.6 2.6 0 0 0 1.8-1.9c.3-1.6.4-3.2.4-4.8s-.1-3.2-.4-4.8ZM10 15.2V8.8L15.5 12 10 15.2Z" />
    </svg>
  );
}
import { siteConfig, waLink, defaultWaMessage } from "../config/site";

const serviceLinks = [
  "Short-film Script",
  "Drama Script",
  "Story Writing",
  "YouTube Video Script",
  "Reels & Shorts Script",
  "AI Video Prompt",
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-[#040c0e]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_0.9fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#00C878] to-[#00885a]">
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
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-[#9FB3AE]">
              বাংলাদেশি ক্রিয়েটরদের জন্য সৃজনশীল গল্প, প্রোডাকশন-রেডি স্ক্রিপ্ট ও AI ভিডিও প্রম্পট —
              সাধ্যের মধ্যে, যত্নে লেখা।
            </p>
            <div className="mt-5 flex gap-2.5">
              <a
                href={siteConfig.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Doza Desk Facebook page"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white/80 transition hover:border-[#00C878] hover:bg-[#00C878] hover:text-[#061116]"
              >
                <FacebookIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href={siteConfig.contact.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Doza Desk YouTube channel"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white/80 transition hover:border-[#00C878] hover:bg-[#00C878] hover:text-[#061116]"
              >
                <YoutubeIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href={waLink(defaultWaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Doza Desk WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white/80 transition hover:border-[#00C878] hover:bg-[#00C878] hover:text-[#061116]"
              >
                <MessageCircle className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Service links">
            <h3 className="font-latin text-[12px] font-bold tracking-[0.2em] text-[#00C878]">
              SERVICES
            </h3>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-[14px] text-white/70 transition hover:text-[#00C878]">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="font-latin text-[12px] font-bold tracking-[0.2em] text-[#00C878]">CONTACT</h3>
            <ul className="mt-4 space-y-3 text-[14px] text-white/70">
              <li>
                <a
                  href={waLink(defaultWaMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition hover:text-[#00C878]"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-[#00C878]" />
                  WhatsApp: {siteConfig.contact.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phoneIntl}`}
                  className="flex items-center gap-2.5 transition hover:text-[#00C878]"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#00C878]" />
                  Phone: {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2.5 transition hover:text-[#00C878]"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#00C878]" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#00C878]" />
                <span>{siteConfig.contact.address}</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-latin text-[12px] font-bold tracking-[0.2em] text-[#00C878]">LEGAL</h3>
            <ul className="mt-4 space-y-3 text-[14px] text-white/70">
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="flex items-center gap-2.5 transition hover:text-[#00C878]">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-[#00C878]" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="flex items-center gap-2.5 transition hover:text-[#00C878]">
                  <FileText className="h-4 w-4 shrink-0 text-[#00C878]" />
                  Terms & Conditions
                </a>
              </li>
            </ul>
            <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.04] p-3.5 text-[12.5px] leading-relaxed text-[#9FB3AE]">
              আপনার আইডিয়া ও তথ্য গোপন রাখা হয়। অনুমতি ছাড়া কোনো কাজ প্রকাশ করা হয় না।
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-[13px] text-[#9FB3AE]">
            © {year} Doza Desk — {siteConfig.brand.tagline}. সর্বস্বত্ব সংরক্ষিত।
          </p>
          <p className="font-latin text-[12px] tracking-wide text-white/40">
            Made with care in Natore, Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
}
