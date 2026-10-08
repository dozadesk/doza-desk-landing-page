import {
  Clapperboard,
  Drama,
  BookOpen,
  MonitorPlay,
  Smartphone,
  Fingerprint,
  Megaphone,
  Layers,
  MessagesSquare,
  Sparkles,
  ArrowUpRight,
  Check,
  type LucideIcon,
} from "lucide-react";
import { services, waLink } from "../config/site";
import Reveal from "./Reveal";

const iconMap: Record<string, LucideIcon> = {
  clapperboard: Clapperboard,
  drama: Drama,
  bookOpen: BookOpen,
  youtube: MonitorPlay,
  smartphone: Smartphone,
  fingerprint: Fingerprint,
  megaphone: Megaphone,
  layers: Layers,
  messages: MessagesSquare,
  sparkles: Sparkles,
};

export default function Services() {
  return (
    <section id="services" className="relative bg-[#F4F8F6] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-latin text-xs font-bold tracking-[0.25em] text-[#00885a]">
            OUR SERVICES
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-snug text-[#092D2C] sm:text-4xl">
            আমাদের কনটেন্ট রাইটিং ও স্ক্রিপ্ট রাইটিং সার্ভিস
          </h2>
          <p className="mt-3 text-[16px] text-[#5a6f6b]">
            আপনার ভাবনাকে রূপ দিন আকর্ষণীয় গল্প ও ভিডিও কনটেন্টে।
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] ?? Clapperboard;
            const msg = `আসসালামু আলাইকুম! আমি Doza Desk-এর "${s.titleBn}" সার্ভিসটি সম্পর্কে জানতে চাই। আমার প্রজেক্ট নিয়ে কথা বলতে চাই।`;
            return (
              <Reveal key={s.id} delay={(i % 3) * 90}>
                <article className="group flex h-full flex-col rounded-2xl border border-[#092D2C]/10 bg-white p-6 shadow-[0_2px_20px_rgba(9,45,44,0.06)] transition duration-300 hover:-translate-y-1.5 hover:border-[#00C878]/50 hover:shadow-[0_16px_44px_rgba(0,200,120,0.18)]">
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#092D2C] to-[#0b3a39] shadow-md transition group-hover:from-[#00C878] group-hover:to-[#00885a]">
                      <Icon className="h-6 w-6 text-white transition group-hover:text-[#061116]" strokeWidth={2} />
                    </span>
                    <span className="font-latin text-[11px] font-bold tracking-widest text-[#9FB3AE]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-[#092D2C]">{s.titleBn}</h3>
                  <p className="font-latin text-[12px] font-semibold tracking-wide text-[#00885a]">
                    {s.titleEn}
                  </p>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-[#4b5f5c]">{s.description}</p>
                  <ul className="mt-4 space-y-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-[13.5px] text-[#334644]">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#00C878]" strokeWidth={3} />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={waLink(msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#092D2C]/15 bg-[#F4F8F6] px-4 py-2.5 text-[14px] font-bold text-[#092D2C] transition group-hover:border-[#00C878] group-hover:bg-[#00C878] group-hover:text-[#061116]"
                  >
                    এই সার্ভিস নিয়ে জানুন
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2.4} />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
