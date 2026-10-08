import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "../config/site";
import Reveal from "./Reveal";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#F4F8F6] py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="font-latin text-xs font-bold tracking-[0.25em] text-[#00885a]">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold leading-snug text-[#092D2C] sm:text-4xl">
            সচরাচর জিজ্ঞাস্য প্রশ্ন
          </h2>
          <p className="mt-3 text-[15.5px] text-[#5a6f6b]">
            অর্ডারের আগে যা যা জানা দরকার — স্বচ্ছ উত্তর।
          </p>
        </Reveal>

        <div className="mt-8 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={Math.min(i, 4) * 60}>
                <div
                  className={`overflow-hidden rounded-2xl border transition ${
                    isOpen
                      ? "border-[#00C878]/50 bg-white shadow-[0_12px_36px_rgba(0,200,120,0.12)]"
                      : "border-[#092D2C]/10 bg-white hover:border-[#00C878]/30"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-[15.5px] font-bold leading-snug text-[#092D2C] sm:text-[16.5px]">
                      {f.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition duration-300 ${
                        isOpen ? "rotate-45 bg-[#00C878] text-[#061116]" : "bg-[#092D2C]/8 text-[#092D2C]"
                      }`}
                    >
                      <Plus className="h-4.5 w-4.5" strokeWidth={2.4} />
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${i}`}
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-[#092D2C]/8 px-5 pb-5 pt-4 text-[14.5px] leading-relaxed text-[#4b5f5c]">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
