import {
  Lightbulb,
  Languages,
  ClipboardList,
  Wallet,
  PhoneCall,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { whyChoose } from "../config/site";
import Reveal from "./Reveal";

const iconMap: Record<string, LucideIcon> = {
  lightbulb: Lightbulb,
  languages: Languages,
  clipboardList: ClipboardList,
  wallet: Wallet,
  phoneCall: PhoneCall,
  shieldCheck: ShieldCheck,
};

export default function WhyChoose() {
  return (
    <section className="relative bg-[#F4F8F6] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-latin text-xs font-bold tracking-[0.25em] text-[#00885a]">WHY DOZA DESK</p>
          <h2 className="mt-3 text-3xl font-bold leading-snug text-[#092D2C] sm:text-4xl">
            কেন Doza Desk বেছে নেবেন?
          </h2>
          <p className="mt-3 text-[16px] text-[#5a6f6b]">
            আমরা ভাইরালের গ্যারান্টি দিই না — দিই যত্নে লেখা, প্রোডাকশন-রেডি স্ক্রিপ্ট।
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 sm:mt-12 lg:grid-cols-3">
          {whyChoose.map((w, i) => {
            const Icon = iconMap[w.icon] ?? Lightbulb;
            return (
              <Reveal key={w.title} delay={(i % 3) * 90}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-[#092D2C]/10 bg-white p-6 shadow-[0_2px_20px_rgba(9,45,44,0.06)] transition hover:-translate-y-1 hover:border-[#00C878]/50 hover:shadow-[0_14px_40px_rgba(0,200,120,0.15)]">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00C878]/12">
                    <Icon className="h-6 w-6 text-[#00885a]" strokeWidth={2} />
                  </span>
                  <div>
                    <h3 className="text-[17px] font-bold leading-snug text-[#092D2C]">{w.titleBn}</h3>
                    <p className="font-latin text-[11.5px] font-semibold tracking-wide text-[#00885a]">
                      {w.title}
                    </p>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-[#4b5f5c]">{w.desc}</p>
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
