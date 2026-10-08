import { MessageCircle, FileText } from "lucide-react";
import { waLink } from "../config/site";
import Reveal from "./Reveal";

export default function FinalCta() {
  return (
    <section className="grain relative overflow-hidden bg-[#061116] py-20 sm:py-28">
      {/* emerald stage lighting */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-200px] h-[440px] w-[820px] -translate-x-1/2 rounded-full bg-[#00C878]/18 blur-[120px]" />
        <div className="absolute bottom-[-180px] left-[8%] h-[300px] w-[300px] rounded-full bg-[#00C878]/10 blur-[100px]" />
        <div className="absolute bottom-[-180px] right-[8%] h-[300px] w-[300px] rounded-full bg-[#0b3a39] blur-[100px]" />
        {/* spotlight beams */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-[180px] rotate-[18deg] bg-gradient-to-b from-[#00C878]/25 to-transparent" />
        <div className="absolute left-1/2 top-0 h-full w-[2px] translate-x-[180px] rotate-[-18deg] bg-gradient-to-b from-[#00C878]/25 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <p className="font-latin text-xs font-bold tracking-[0.3em] text-[#00C878]">
            LIGHTS • CAMERA • SCRIPT
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
            আপনার গল্প এবার পর্দায় আসুক।
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[17px] leading-relaxed text-[#c4d4d0]">
            আপনার আইডিয়া, আমাদের স্ক্রিপ্ট—শুরু হোক নতুন একটি গল্প।
          </p>
        </Reveal>
        <Reveal delay={140}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={waLink("আসসালামু আলাইকুম! আমি Doza Desk-এর সাথে WhatsApp-এ আমার প্রজেক্ট নিয়ে কথা বলতে চাই।")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#00C878] px-8 py-4 text-[17px] font-bold text-[#061116] shadow-[0_12px_44px_rgba(0,200,120,0.45)] transition hover:-translate-y-0.5 hover:bg-[#00e086] sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={2.4} />
              WhatsApp-এ কথা বলুন
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.05] px-8 py-4 text-[17px] font-bold text-white backdrop-blur transition hover:border-[#00C878]/60 hover:bg-white/[0.1] sm:w-auto"
            >
              <FileText className="h-5 w-5 text-[#00C878]" />
              কাস্টম কোটেশন নিন
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
