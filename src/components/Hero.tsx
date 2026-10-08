import { MessageCircle, PlayCircle, BadgeCheck, PenLine, Clapperboard, MessagesSquare, Sparkles } from "lucide-react";
import { waLink, defaultWaMessage } from "../config/site";
import Reveal from "./Reveal";

const features = [
  { icon: PenLine, label: "Story Writing" },
  { icon: Clapperboard, label: "Script & Screenplay" },
  { icon: MessagesSquare, label: "Dialogue Writing" },
  { icon: Sparkles, label: "AI Video Prompts" },
];

export default function Hero() {
  return (
    <section id="home" className="grain relative overflow-hidden pt-[72px]">
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-[#00C878]/12 blur-[140px]" />
        <div className="absolute right-[-160px] top-1/3 h-[420px] w-[420px] rounded-full bg-[#0b3a39] blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#00C878]/40 to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-14 pt-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-8 lg:pb-20 lg:pt-16">
        {/* Left */}
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#00C878]/30 bg-[#00C878]/10 px-4 py-1.5 font-latin text-[11px] font-bold tracking-[0.22em] text-[#00C878] sm:text-xs">
              <span className="h-1.5 w-1.5 animate-glow rounded-full bg-[#00C878]" />
              CONTENT & SCRIPT WRITING SERVICE
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-5 text-[34px] font-bold leading-[1.25] text-white sm:text-5xl lg:text-[56px] lg:leading-[1.18]">
              আপনার গল্প আছে,
              <br />
              কিন্তু <span className="bg-gradient-to-r from-[#00C878] to-[#7dffc4] bg-clip-text text-transparent">Script নেই?</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-[#c4d4d0] sm:text-lg">
              আপনার আইডিয়া থেকে তৈরি করুন সম্পূর্ণ Short-film, Drama ও Video Script। গল্প, সংলাপ, Scene
              Breakdown থেকে AI Video Prompt—সবকিছু এক জায়গায়।
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {features.map((f) => (
                <span
                  key={f.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.06] px-3.5 py-1.5 text-[13px] font-semibold text-white/85 backdrop-blur"
                >
                  <f.icon className="h-3.5 w-3.5 text-[#00C878]" strokeWidth={2.2} />
                  {f.label}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={waLink(defaultWaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00C878] px-8 py-4 text-lg font-bold text-[#061116] shadow-[0_10px_40px_rgba(0,200,120,0.4)] transition hover:-translate-y-0.5 hover:bg-[#00e086]"
              >
                <MessageCircle className="h-5 w-5" strokeWidth={2.4} />
                এখনই অর্ডার করুন
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-8 py-4 text-lg font-semibold text-white transition hover:border-[#00C878]/60 hover:bg-white/[0.08]"
              >
                <PlayCircle className="h-5 w-5 text-[#00C878]" />
                আমাদের কাজ দেখুন
              </a>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13.5px] text-[#9FB3AE]">
              <span className="inline-flex items-center gap-1.5">
                <BadgeCheck className="h-4 w-4 text-[#00C878]" /> মৌলিক ও কপিরাইট-সেফ লেখা
              </span>
              <span className="inline-flex items-center gap-1.5">
                <BadgeCheck className="h-4 w-4 text-[#00C878]" /> মাত্র ৳৩০০ থেকে শুরু
              </span>
              <span className="inline-flex items-center gap-1.5">
                <BadgeCheck className="h-4 w-4 text-[#00C878]" /> WhatsApp-এ দ্রুত রিপ্লাই
              </span>
            </div>
          </Reveal>
        </div>

        {/* Right — cinematic image */}
        <Reveal delay={200} className="relative">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-[#00C878]/25 via-transparent to-[#00C878]/10 blur-xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/12 shadow-2xl shadow-black/60">
              <img
                src="/images/hero-workspace.jpg"
                alt="Doza Desk — cinematic script writing workspace with laptop, camera and script notes"
                className="aspect-[4/3.4] w-full object-cover sm:aspect-[16/11] lg:aspect-[4/3.6]"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061116]/85 via-transparent to-transparent" />
              {/* overlay card */}
              <div className="absolute inset-x-3 bottom-3 flex items-center gap-3 rounded-2xl border border-white/15 bg-[#061116]/80 p-3 backdrop-blur-md sm:inset-x-4 sm:bottom-4 sm:p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#00C878]/15">
                  <Clapperboard className="h-5 w-5 text-[#00C878]" />
                </span>
                <div className="min-w-0">
                  <p className="font-latin text-[11px] font-bold tracking-[0.18em] text-[#00C878]">
                    NOW WRITING
                  </p>
                  <p className="truncate text-[15px] font-semibold text-white">
                    Short-film Screenplay — Scene 12 • Final Draft
                  </p>
                </div>
                <span className="ml-auto hidden h-2 w-2 shrink-0 animate-glow rounded-full bg-[#00C878] sm:block" />
              </div>
            </div>

            {/* floating price badge */}
            <div className="absolute -top-4 right-4 rounded-2xl border border-[#00C878]/30 bg-[#092D2C]/95 px-4 py-2.5 shadow-xl backdrop-blur">
              <p className="text-[11px] font-semibold text-[#9FB3AE]">শুরুর মূল্য মাত্র</p>
              <p className="font-latin text-xl font-extrabold text-[#00C878]">৳300</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* marquee strip */}
      <div className="relative border-y border-white/10 bg-[#092D2C]/60 py-3">
        <div className="overflow-hidden">
          <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap pr-8 font-latin text-[13px] font-semibold tracking-widest text-white/60">
            {Array(2)
              .fill([
                "SHORT-FILM SCRIPT",
                "DRAMA SCRIPT",
                "STORY WRITING",
                "YOUTUBE SCRIPT",
                "REELS & SHORTS",
                "DIALOGUE",
                "AI VIDEO PROMPT",
                "SCREENPLAY",
              ])
              .flat()
              .map((t, i) => (
                <span key={i} className="flex items-center gap-8">
                  <span>{t}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00C878]/70" />
                </span>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
