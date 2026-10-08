import { MessageCircle } from "lucide-react";
import { waLink, defaultWaMessage } from "../config/site";

export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink(defaultWaMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#00C878] text-[#061116] shadow-[0_10px_36px_rgba(0,200,120,0.5)] transition hover:scale-105 hover:bg-[#00e086] sm:bottom-6 sm:right-6"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#00C878]/30 [animation-duration:2.4s]" />
      <MessageCircle className="relative h-6.5 w-6.5" strokeWidth={2.2} />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-[#061116] px-3 py-2 text-[13px] font-bold text-white opacity-0 shadow-xl ring-1 ring-white/15 transition group-hover:opacity-100 sm:block">
        WhatsApp-এ মেসেজ করুন
      </span>
    </a>
  );
}
