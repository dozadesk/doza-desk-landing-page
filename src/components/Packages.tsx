import { Check, MessageCircle, Info, Crown } from "lucide-react";
import { packages, pricingNote, waLink, packageWaMessage } from "../config/site";
import Reveal from "./Reveal";

export default function Packages() {
  return (
    <section id="packages" className="relative bg-[#F4F8F6] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-latin text-xs font-bold tracking-[0.25em] text-[#00885a]">
            PACKAGES & PRICING
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-snug text-[#092D2C] sm:text-4xl">
            আপনার প্রয়োজন অনুযায়ী প্যাকেজ বেছে নিন
          </h2>
          <p className="mt-3 text-[16px] text-[#5a6f6b]">
            স্বচ্ছ মূল্য, স্পষ্ট ডেলিভারেবল — লুকানো চার্জ নেই।
          </p>
        </Reveal>

        <div className="mt-10 grid items-stretch gap-6 sm:mt-12 lg:grid-cols-3">
          {packages.map((p, i) => (
            <Reveal key={p.id} delay={i * 100} className="h-full">
              <article
                className={`relative flex h-full flex-col overflow-hidden rounded-3xl p-7 transition duration-300 hover:-translate-y-1.5 sm:p-8 ${
                  p.highlighted
                    ? "border border-[#00C878]/40 bg-[#061116] shadow-[0_24px_70px_rgba(0,200,120,0.25)]"
                    : "border border-[#092D2C]/12 bg-white shadow-[0_2px_24px_rgba(9,45,44,0.08)] hover:shadow-[0_18px_50px_rgba(9,45,44,0.14)]"
                }`}
              >
                {p.highlighted && (
                  <>
                    <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#00C878]/25 blur-3xl" />
                    <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-[#00C878] px-3 py-1 text-[12px] font-bold text-[#061116]">
                      <Crown className="h-3.5 w-3.5" strokeWidth={2.4} />
                      {p.badge}
                    </span>
                  </>
                )}
                <p
                  className={`font-latin text-xs font-bold tracking-[0.2em] ${
                    p.highlighted ? "text-[#00C878]" : "text-[#00885a]"
                  }`}
                >
                  {p.name}
                </p>
                <h3 className={`mt-1 text-2xl font-bold ${p.highlighted ? "text-white" : "text-[#092D2C]"}`}>
                  {p.nameBn}
                </h3>
                <p className={`mt-1 text-[14px] ${p.highlighted ? "text-[#9FB3AE]" : "text-[#5a6f6b]"}`}>
                  {p.tagline}
                </p>

                <div className="mt-5 flex items-end gap-2">
                  <span className={`text-[13px] font-semibold ${p.highlighted ? "text-[#9FB3AE]" : "text-[#5a6f6b]"}`}>
                    শুরু মাত্র
                  </span>
                </div>
                <p className="flex items-baseline gap-1">
                  <span className={`font-latin text-5xl font-extrabold tracking-tight ${p.highlighted ? "text-white" : "text-[#092D2C]"}`}>
                    ৳{p.price.toLocaleString("en-US")}
                  </span>
                  <span className={`text-[13px] font-semibold ${p.highlighted ? "text-[#9FB3AE]" : "text-[#5a6f6b]"}`}>
                    থেকে
                  </span>
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[14.5px]">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          p.highlighted ? "bg-[#00C878]/20" : "bg-[#00C878]/15"
                        }`}
                      >
                        <Check className="h-3 w-3 text-[#00C878]" strokeWidth={3.2} />
                      </span>
                      <span className={p.highlighted ? "text-white/90" : "text-[#334644]"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(packageWaMessage(p))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-7 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-[16px] font-bold transition ${
                    p.highlighted
                      ? "bg-[#00C878] text-[#061116] shadow-[0_10px_36px_rgba(0,200,120,0.4)] hover:bg-[#00e086]"
                      : "bg-[#092D2C] text-white hover:bg-[#00C878] hover:text-[#061116]"
                  }`}
                >
                  <MessageCircle className="h-5 w-5" strokeWidth={2.4} />
                  অর্ডার করুন
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        {/* pricing note */}
        <Reveal>
          <div className="mx-auto mt-8 flex max-w-4xl items-start gap-3 rounded-2xl border border-[#00885a]/25 bg-[#e6f6ef] p-5 text-left">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#00885a]" />
            <p className="text-[14px] leading-relaxed text-[#2c3f3d]">
              <span className="font-bold">গুরুত্বপূর্ণ নোট: </span>
              {pricingNote}
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-6 text-center">
          <p className="text-[15px] text-[#5a6f6b]">
            বড় বা ভিন্ন ধরনের প্রজেক্ট?{" "}
            <a
              href={waLink(
                "আসসালামু আলাইকুম! আমার একটি কাস্টম প্রজেক্ট আছে (লং স্ক্রিপ্ট / মাল্টি-এপিসোড / কমার্শিয়াল)। কাস্টম কোটেশন চাই।"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#00885a] underline decoration-[#00C878]/50 decoration-2 underline-offset-4 hover:text-[#00C878]"
            >
              কাস্টম কোটেশনের জন্য WhatsApp করুন
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
