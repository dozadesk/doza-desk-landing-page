import { useState, type FormEvent } from "react";
import { Send, MessageCircle, Loader2, TriangleAlert } from "lucide-react";
import { waLink } from "../config/site";
import Reveal from "./Reveal";

const projectTypes = [
  "Short Film",
  "Drama",
  "Story",
  "YouTube Video",
  "Reels/Shorts",
  "Advertisement",
  "AI Video Prompt",
  "Other",
];
const languages = ["বাংলা", "English", "বাংলা + English (Mixed)"];
const budgets = ["৳300 – ৳800", "৳800 – ৳1,500", "৳1,500 – ৳5,000", "৳5,000+", "আলোচনা সাপেক্ষে"];

type FormState = {
  name: string;
  whatsapp: string;
  projectType: string;
  language: string;
  genre: string;
  duration: string;
  description: string;
  budget: string;
  deliveryDate: string;
};

const initial: FormState = {
  name: "",
  whatsapp: "",
  projectType: "",
  language: "",
  genre: "",
  duration: "",
  description: "",
  budget: "",
  deliveryDate: "",
};

export default function ProjectForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const set = (k: keyof FormState, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "আপনার নাম লিখুন";
    if (!form.whatsapp.trim()) e.whatsapp = "WhatsApp নম্বর দিন";
    else if (!/^(\+?880|0)?1[3-9]\d{8}$/.test(form.whatsapp.replace(/[\s-]/g, "")))
      e.whatsapp = "সঠিক বাংলাদেশি মোবাইল নম্বর দিন (যেমন 01XXXXXXXXX)";
    if (!form.projectType) e.projectType = "প্রজেক্ট টাইপ বেছে নিন";
    if (!form.language) e.language = "ভাষা বেছে নিন";
    if (!form.description.trim() || form.description.trim().length < 10)
      e.description = "প্রজেক্ট সম্পর্কে অন্তত ১০ অক্ষরে লিখুন";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    setStatus("idle");
    if (!validate()) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    const lines = [
      "আসসালামু আলাইকুম! আমি Doza Desk-এ একটি প্রজেক্টের জন্য ইনকয়ারি করছি।",
      "",
      `নাম: ${form.name.trim()}`,
      `WhatsApp নম্বর: ${form.whatsapp.trim()}`,
      `প্রজেক্ট টাইপ: ${form.projectType}`,
      `ভাষা: ${form.language}`,
      form.genre.trim() ? `জনরা: ${form.genre.trim()}` : null,
      form.duration.trim() ? `ভিডিও ডিউরেশন: ${form.duration.trim()}` : null,
      form.budget ? `বাজেট রেঞ্জ: ${form.budget}` : null,
      form.deliveryDate ? `ডেলিভারি তারিখ: ${form.deliveryDate}` : null,
      "",
      `বিস্তারিত: ${form.description.trim()}`,
    ].filter(Boolean) as string[];

    try {
      const url = waLink(lines.join("\n"));
      window.open(url, "_blank", "noopener,noreferrer");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  const inputCls = (bad?: string) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-[#092D2C] placeholder:text-[#8aa19d] outline-none transition focus:border-[#00C878] focus:ring-2 focus:ring-[#00C878]/25 ${
      bad ? "border-red-400" : "border-[#092D2C]/15"
    }`;

  const labelCls = "mb-1.5 block text-[14px] font-bold text-[#092D2C]";

  return (
    <section id="contact" className="relative overflow-hidden bg-[#061116] py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-160px] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#00C878]/12 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="font-latin text-xs font-bold tracking-[0.25em] text-[#00C878]">
            CUSTOM PROJECT INQUIRY
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-snug text-white sm:text-4xl">
            আপনার প্রজেক্ট সম্পর্কে বলুন
          </h2>
          <p className="mt-3 text-[15.5px] text-[#9FB3AE]">
            ফর্মটি পূরণ করুন — সাবমিট করলেই আপনার তথ্যসহ WhatsApp চ্যাট খুলে যাবে।
          </p>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="mt-8 rounded-3xl border border-white/10 bg-[#F4F8F6] p-5 shadow-2xl sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="f-name" className={labelCls}>
                  নাম <span className="text-[#00885a]">*</span>
                </label>
                <input
                  id="f-name"
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                  placeholder="আপনার নাম"
                  className={inputCls(errors.name)}
                  autoComplete="name"
                />
                {errors.name && <p className="mt-1 text-[12.5px] font-semibold text-red-500">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="f-wa" className={labelCls}>
                  WhatsApp নম্বর <span className="text-[#00885a]">*</span>
                </label>
                <input
                  id="f-wa"
                  value={form.whatsapp}
                  onChange={(e) => set("whatsapp", e.target.value)}
                  placeholder="01XXXXXXXXX"
                  inputMode="tel"
                  className={inputCls(errors.whatsapp)}
                  autoComplete="tel"
                />
                {errors.whatsapp && (
                  <p className="mt-1 text-[12.5px] font-semibold text-red-500">{errors.whatsapp}</p>
                )}
              </div>
              <div>
                <label htmlFor="f-type" className={labelCls}>
                  প্রজেক্ট টাইপ <span className="text-[#00885a]">*</span>
                </label>
                <select
                  id="f-type"
                  value={form.projectType}
                  onChange={(e) => set("projectType", e.target.value)}
                  className={inputCls(errors.projectType)}
                >
                  <option value="">— বেছে নিন —</option>
                  {projectTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                {errors.projectType && (
                  <p className="mt-1 text-[12.5px] font-semibold text-red-500">{errors.projectType}</p>
                )}
              </div>
              <div>
                <label htmlFor="f-lang" className={labelCls}>
                  পছন্দের ভাষা <span className="text-[#00885a]">*</span>
                </label>
                <select
                  id="f-lang"
                  value={form.language}
                  onChange={(e) => set("language", e.target.value)}
                  className={inputCls(errors.language)}
                >
                  <option value="">— বেছে নিন —</option>
                  {languages.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                {errors.language && (
                  <p className="mt-1 text-[12.5px] font-semibold text-red-500">{errors.language}</p>
                )}
              </div>
              <div>
                <label htmlFor="f-genre" className={labelCls}>
                  জনরা <span className="font-medium text-[#8aa19d]">(ঐচ্ছিক)</span>
                </label>
                <input
                  id="f-genre"
                  value={form.genre}
                  onChange={(e) => set("genre", e.target.value)}
                  placeholder="যেমন: থ্রিলার, রোমান্টিক, কমেডি…"
                  className={inputCls()}
                />
              </div>
              <div>
                <label htmlFor="f-duration" className={labelCls}>
                  ভিডিও ডিউরেশন <span className="font-medium text-[#8aa19d]">(ঐচ্ছিক)</span>
                </label>
                <input
                  id="f-duration"
                  value={form.duration}
                  onChange={(e) => set("duration", e.target.value)}
                  placeholder="যেমন: ৫ মিনিট / ৩০ সেকেন্ড"
                  className={inputCls()}
                />
              </div>
              <div>
                <label htmlFor="f-budget" className={labelCls}>
                  বাজেট রেঞ্জ <span className="font-medium text-[#8aa19d]">(ঐচ্ছিক)</span>
                </label>
                <select
                  id="f-budget"
                  value={form.budget}
                  onChange={(e) => set("budget", e.target.value)}
                  className={inputCls()}
                >
                  <option value="">— বেছে নিন —</option>
                  {budgets.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="f-date" className={labelCls}>
                  প্রত্যাশিত ডেলিভারি তারিখ <span className="font-medium text-[#8aa19d]">(ঐচ্ছিক)</span>
                </label>
                <input
                  id="f-date"
                  type="date"
                  value={form.deliveryDate}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => set("deliveryDate", e.target.value)}
                  className={inputCls()}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="f-desc" className={labelCls}>
                  প্রজেক্টের সংক্ষিপ্ত বর্ণনা <span className="text-[#00885a]">*</span>
                </label>
                <textarea
                  id="f-desc"
                  value={form.description}
                  onChange={(e) => set("description", e.target.value)}
                  placeholder="আপনার গল্পের আইডিয়া, ভিডিওর উদ্দেশ্য, দর্শক — সংক্ষেপে লিখুন…"
                  rows={4}
                  className={`${inputCls(errors.description)} resize-y`}
                />
                {errors.description && (
                  <p className="mt-1 text-[12.5px] font-semibold text-red-500">{errors.description}</p>
                )}
              </div>
            </div>

            {status === "done" && (
              <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-[#00885a]/30 bg-[#e6f6ef] p-4 text-[14px] text-[#1d3a38]">
                <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#00885a]" />
                <p>
                  <span className="font-bold">WhatsApp খুলে গেছে!</span> চ্যাটে আপনার তথ্য আগে থেকেই
                  লেখা আছে — শুধু Send চাপুন। যদি চ্যাট না খুলে থাকে, সরাসরি{" "}
                  <span className="font-bold">01937-744520</span> নম্বরে মেসেজ করুন।
                </p>
              </div>
            )}
            {status === "error" && Object.keys(errors).length > 0 && (
              <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-red-300 bg-red-50 p-4 text-[14px] text-red-700">
                <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0" />
                <p>লাল চিহ্নিত ঘরগুলো ঠিক করে আবার সাবমিট করুন।</p>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#00C878] px-6 py-4 text-[17px] font-bold text-[#061116] shadow-[0_10px_36px_rgba(0,200,120,0.35)] transition hover:bg-[#00a566] hover:text-white disabled:cursor-wait disabled:opacity-70"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  WhatsApp খোলা হচ্ছে…
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" strokeWidth={2.2} />
                  WhatsApp-এ পাঠান
                </>
              )}
            </button>
            <p className="mt-3 text-center text-[12.5px] text-[#5a6f6b]">
              সাবমিট করলে কোনো সার্ভারে তথ্য জমা হয় না — শুধু WhatsApp মেসেজ তৈরি হয়। অপ্রয়োজনীয়
              ব্যক্তিগত তথ্য দেবেন না।
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
