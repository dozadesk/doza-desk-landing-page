import { MessageCircle, ArrowRight } from "lucide-react";
import { steps, waLink, defaultWaMessage } from "../config/site";
import Reveal from "./Reveal";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-[#061116] py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-140px] top-20 h-[380px] w-[380px] rounded-full bg-[#00C878]/10 blur-[120px]" />
        <div className="absolute bottom-0 right-[-120px] h-[320px] w-[320px] rounded-full bg-[#0b3a39] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-latin text-xs font-bold tracking-[0.25em] text-[#00C878]">HOW IT WORKS</p>
          <h2 className="mt-3 text-3xl font-bold leading-snug text-white sm:text-4xl">
            আইডিয়া থেকে স্ক্রিপ্ট—মাত্র কয়েকটি ধাপে
          </h2>
          <p className="mt-3 text-[16px] text-[#9FB3AE]">
            জটিল কিছু নয় — আপনার আইডিয়া শেয়ার করুন, বাকিটা আমাদের দায়িত্ব।
          </p>
        </Reveal>

        <ol className="relative mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {/* connector line (desktop) */}
          <div className="absolute left-[10%] right-[10%] top-[52px] hidden h-px bg-gradient-to-r from-transparent via-[#00C878]/40 to-transparent lg:block" />
          {steps.map((s, i) => (
            <Reveal key={s.no} delay={i * 100}>
              <li className="relative h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:border-[#00C878]/40 hover:bg-white/[0.06]">
                <span className="relative z-10 flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-gradient-to-br from-[#00C878] to-[#00885a] font-latin text-lg font-extrabold text-[#061116] shadow-[0_8px_28px_rgba(0,200,120,0.35)]">
                  {s.no}
                </span>
                <p className="mt-4 font-latin text-[11px] font-bold tracking-[0.16em] text-[#00C878]">
                  STEP {i + 1} — {s.title.toUpperCase()}
                </p>
                <h3 className="mt-1.5 text-lg font-bold leading-snug text-white">{s.titleBn}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#9FB3AE]">{s.desc}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-10 text-center">
          <a
            href={waLink(defaultWaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#00C878] px-8 py-3.5 text-[16px] font-bold text-[#061116] shadow-[0_10px_40px_rgba(0,200,120,0.35)] transition hover:-translate-y-0.5 hover:bg-[#00e086]"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={2.4} />
            আপনার আইডিয়া নিয়ে কথা বলুন
            <ArrowRight className="h-4 w-4" strokeWidth={2.6} />
          </a>
          <p className="mt-3 text-[13px] text-[#9FB3AE]">সাধারণত দ্রুত রিপ্লাই পাবেন • কোনো অগ্রিম প্রতিশ্রুতি ছাড়াই আলোচনা</p>
        </Reveal>
      </div>
    </section>
  );
}
