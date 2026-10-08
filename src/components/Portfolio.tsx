import { useEffect, useState } from "react";
import { X, Eye, Film, FileText, MessageCircle } from "lucide-react";
import { projects, waLink, type Project } from "../config/site";
import Reveal from "./Reveal";

export default function Portfolio() {
  const [active, setActive] = useState<Project | null>(null);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section id="portfolio" className="relative overflow-hidden bg-[#061116] py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-100px] top-10 h-[360px] w-[360px] rounded-full bg-[#00C878]/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-latin text-xs font-bold tracking-[0.25em] text-[#00C878]">PORTFOLIO</p>
          <h2 className="mt-3 text-3xl font-bold leading-snug text-white sm:text-4xl">
            আমাদের সৃজনশীলতার কিছু নমুনা
          </h2>
          <p className="mt-3 text-[15px] text-[#9FB3AE]">
            নিচের কাজগুলো নমুনা কনসেপ্ট — আপনার প্রজেক্টের ধরন বোঝাতে এগুলো দেখুন।
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 sm:mt-12">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 110}>
              <article className="group overflow-hidden rounded-3xl border border-white/10 bg-[#092D2C]/50 transition duration-300 hover:-translate-y-1.5 hover:border-[#00C878]/40 hover:shadow-[0_20px_60px_rgba(0,200,120,0.15)]">
                <div className="relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.title} — ${p.genre}`}
                    loading="lazy"
                    className="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061116]/80 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#061116]/75 px-3 py-1 font-latin text-[11px] font-bold tracking-widest text-[#00C878] backdrop-blur">
                    {p.genre.toUpperCase()}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white">{p.title}</h3>
                  <p className="mt-1 flex items-center gap-1.5 font-latin text-[12.5px] font-semibold tracking-wide text-[#9FB3AE]">
                    <FileText className="h-3.5 w-3.5 text-[#00C878]" />
                    {p.deliverable}
                  </p>
                  <p className="clamp-3 mt-3 text-[14.5px] leading-relaxed text-[#c4d4d0]">{p.synopsis}</p>
                  <button
                    onClick={() => setActive(p)}
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#00C878]/40 bg-[#00C878]/10 px-5 py-3 text-[15px] font-bold text-[#00C878] transition hover:bg-[#00C878] hover:text-[#061116]"
                  >
                    <Eye className="h-4.5 w-4.5" strokeWidth={2.2} />
                    নমুনা দেখুন
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center">
          <p className="mx-auto max-w-3xl text-[13.5px] leading-relaxed text-[#9FB3AE]">
            <Film className="mr-1.5 inline h-4 w-4 text-[#00C878]" />
            এই প্রজেক্টগুলো স্যাম্পল কনসেপ্ট হিসেবে উপস্থাপন করা হয়েছে। ক্লায়েন্টের অনুমতি ছাড়া কোনো
            বাস্তব প্রজেক্ট এখানে প্রকাশ করা হয় না — আপনার কাজও থাকবে সম্পূর্ণ গোপন।
          </p>
        </Reveal>
      </div>

      {/* Detail modal */}
      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} sample`}
        >
          <div
            className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-white/15 bg-[#0a1a1b] shadow-2xl sm:rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img src={active.image} alt={active.title} className="aspect-[16/8] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a1b] via-[#0a1a1b]/30 to-transparent" />
              <button
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-[#00C878] hover:text-[#061116]"
                aria-label="Close sample"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="absolute bottom-4 left-5 right-5">
                <p className="font-latin text-[11px] font-bold tracking-[0.2em] text-[#00C878]">
                  {active.genre.toUpperCase()}
                </p>
                <h3 className="text-3xl font-bold text-white">{active.title}</h3>
              </div>
            </div>

            <div className="p-5 sm:p-7">
              <div className="flex flex-wrap gap-2">
                {active.meta.map((m) => (
                  <span
                    key={m.label}
                    className="rounded-full border border-white/12 bg-white/[0.05] px-3 py-1 text-[12.5px] text-white/80"
                  >
                    <span className="font-bold text-[#00C878]">{m.label}:</span> {m.value}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-[15px] leading-relaxed text-[#c4d4d0]">{active.synopsis}</p>

              {/* script excerpt in screenplay style */}
              <div className="mt-5 overflow-hidden rounded-2xl border border-[#00C878]/25">
                <p className="border-b border-[#00C878]/20 bg-[#00C878]/10 px-4 py-2.5 font-latin text-[12px] font-bold tracking-widest text-[#00C878]">
                  {active.excerptTitle}
                </p>
                <div className="space-y-3 bg-[#F4F8F6] px-5 py-5 font-mono text-[13.5px] leading-relaxed text-[#1d2f2d]">
                  {active.excerpt.map((line, idx) => (
                    <p key={idx} className={idx === 0 ? "font-bold tracking-wide" : ""}>
                      {line}
                    </p>
                  ))}
                  <p className="pt-1 text-center text-[12px] italic text-[#5a6f6b]">
                    — নমুনা অংশ এখানে শেষ —
                  </p>
                </div>
              </div>

              <a
                href={waLink(
                  `আসসালামু আলাইকুম! আমি "${active.title}" (${active.genre}) স্যাম্পলটি দেখেছি। এরকম একটি ${active.deliverable} লিখিয়ে নিতে চাই।`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#00C878] px-6 py-3.5 text-[16px] font-bold text-[#061116] transition hover:bg-[#00e086]"
              >
                <MessageCircle className="h-5 w-5" strokeWidth={2.4} />
                এরকম স্ক্রিপ্ট অর্ডার করুন
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
