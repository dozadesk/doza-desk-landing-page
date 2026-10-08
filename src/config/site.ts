/* ============================================================
   DOZA DESK — Site Configuration
   Edit prices, contact info, services & portfolio here.
   ============================================================ */

export const siteConfig = {
  brand: {
    name: "Doza Desk",
    tagline: "Your Local Digital Power Is Here",
  },
  contact: {
    whatsappDisplay: "01937-744520",
    whatsappIntl: "8801937744520", // used for wa.me links
    phoneDisplay: "01628-877124",
    phoneIntl: "+8801628877124",
    email: "dozadesk@gmail.com",
    address: "Tomaltola Bazar toward Natore Road, Bagatipara, Natore, Bangladesh",
    // TODO: replace with real links when available
    facebook: "https://facebook.com/dozadesk",
    youtube: "https://youtube.com/@dozadesk",
  },
};

/** Build a wa.me link with a prefilled (URL-encoded) message */
export function waLink(message: string): string {
  return `https://wa.me/${siteConfig.contact.whatsappIntl}?text=${encodeURIComponent(message)}`;
}

export const defaultWaMessage =
  "আসসালামু আলাইকুম! আমি Doza Desk থেকে একটি স্ক্রিপ্ট/কনটেন্ট লিখিয়ে নিতে চাই। আমার প্রজেক্ট সম্পর্কে কথা বলতে চাই।";

/* ------------------------------- Services ------------------------------- */

export type Service = {
  id: string;
  titleBn: string;
  titleEn: string;
  icon: string; // lucide icon key mapped in Services.tsx
  description: string;
  points: string[];
};

export const services: Service[] = [
  {
    id: "short-film",
    titleBn: "Short-film Script",
    titleEn: "Short-film Screenplay",
    icon: "clapperboard",
    description: "শুটিং-রেডি শর্টফিল্ম স্ক্রিপ্ট — গল্প থেকে ফাইনাল ডায়ালগ পর্যন্ত।",
    points: ["৩–১০ মিনিটের শর্টফিল্ম স্ক্রিপ্ট", "Scene-by-scene স্ক্রিনপ্লে", "সংলাপ ও ক্যারেক্টার অ্যাকশন"],
  },
  {
    id: "drama",
    titleBn: "Drama Script",
    titleEn: "Drama Script",
    icon: "drama",
    description: "দর্শকের মনে দাগ কাটার মতো সামাজিক, পারিবারিক ও রোমান্টিক নাটক।",
    points: ["সামাজিক, পারিবারিক, রোমান্টিক নাটক", "চরিত্রের গভীর ইন্টারঅ্যাকশন", "আবেগঘন গল্প-বিকাশ"],
  },
  {
    id: "story",
    titleBn: "Story Writing",
    titleEn: "Story Writing",
    icon: "bookOpen",
    description: "মৌলিক ছোটগল্প — ভিডিও, বই বা অডিও স্টোরির জন্য।",
    points: ["সম্পূর্ণ মৌলিক গল্প", "রোমান্টিক, রহস্য, থ্রিলার", "গ্রাম-ভিত্তিক গল্প"],
  },
  {
    id: "youtube",
    titleBn: "YouTube Video Script",
    titleEn: "YouTube Script",
    icon: "youtube",
    description: "Watch-time বাড়ানো স্ট্রাকচার্ড ইউটিউব স্ক্রিপ্ট।",
    points: ["এডুকেশনাল ও ডকুমেন্টারি", "এক্সপ্লেইনার ও স্টোরিটেলিং", "হুক + রিটেনশন স্ট্রাকচার"],
  },
  {
    id: "reels",
    titleBn: "Reels & Shorts Script",
    titleEn: "Reels & Shorts",
    icon: "smartphone",
    description: "প্রথম ৩ সেকেন্ডেই আটকে রাখার মতো শর্ট-ফর্ম স্ক্রিপ্ট।",
    points: ["শক্তিশালী হুক", "টাইট স্টোরিটেলিং", "এনগেজিং এন্ডিং + CTA"],
  },
  {
    id: "thriller",
    titleBn: "Mystery & Thriller",
    titleEn: "Mystery & Thriller",
    icon: "fingerprint",
    description: "টুইস্ট, ক্লু আর অপ্রত্যাশিত রহস্যে ভরা সাসপেন্স গল্প।",
    points: ["সাসপেন্স-ড্রিভেন প্লট", "চমকপ্রদ টুইস্ট", "ক্লু ও রিভিলেশন"],
  },
  {
    id: "ad",
    titleBn: "Advertisement Script",
    titleEn: "Ad Script",
    icon: "megaphone",
    description: "বিক্রি বাড়ানো প্রোমোশনাল স্টোরি ও বিজ্ঞাপন কনসেপ্ট।",
    points: ["প্রোডাক্ট স্টোরিটেলিং", "সার্ভিস প্রোমো কনসেপ্ট", "ব্র্যান্ড-টোন সংলাপ"],
  },
  {
    id: "screenplay",
    titleBn: "Screenplay & Scene Breakdown",
    titleEn: "Scene Breakdown",
    icon: "layers",
    description: "ডিরেক্টর ও এডিটরের জন্য প্রোডাকশন-ফ্রেন্ডলি ব্রেকডাউন।",
    points: ["সিন ডেসক্রিপশন", "ক্যামেরা শট সাজেশন", "লোকেশন ও অ্যাকশন নোট"],
  },
  {
    id: "dialogue",
    titleBn: "Dialogue Writing",
    titleEn: "Dialogue Writing",
    icon: "messages",
    description: "চরিত্র অনুযায়ী স্বাভাবিক, জীবন্ত বাংলা সংলাপ।",
    points: ["স্বাভাবিক বাংলা কথোপকথন", "চরিত্রভিত্তিক টোন", "আবেগঘন ডায়ালগ"],
  },
  {
    id: "ai-prompt",
    titleBn: "AI Video Prompt",
    titleEn: "AI Video Prompt",
    icon: "sparkles",
    description: "AI ভিডিও টুলের জন্য সিন-বাই-সিন ডিটেইলড প্রম্পট।",
    points: ["সিনভিত্তিক ভিডিও প্রম্পট", "ক্যারেক্টার কনসিস্টেন্সি গাইড", "ভিজ্যুয়াল ও ক্যামেরা ডিরেকশন"],
  },
];

/* ------------------------------- Packages ------------------------------- */

export type Pkg = {
  id: string;
  name: string;
  nameBn: string;
  price: number; // ৳ — editable
  tagline: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
};

export const packages: Pkg[] = [
  {
    id: "basic",
    name: "BASIC — Story",
    nameBn: "বেসিক — গল্প",
    price: 300,
    tagline: "যারা শুধু একটি সুন্দর, সম্পূর্ণ গল্প চান",
    features: [
      "Story concept",
      "সম্পূর্ণ ছোটগল্প",
      "আনুমানিক ৫০০–১,০০০ শব্দ",
      "১ বার রিভিশন",
    ],
  },
  {
    id: "standard",
    name: "STANDARD — Script",
    nameBn: "স্ট্যান্ডার্ড — স্ক্রিপ্ট",
    price: 800,
    tagline: "শুটিংয়ের জন্য সম্পূর্ণ স্ক্রিনপ্লে প্যাকেজ",
    highlighted: true,
    badge: "সবচেয়ে জনপ্রিয়",
    features: [
      "Story development",
      "স্ক্রিনপ্লে ও সংলাপ",
      "Scene-by-scene breakdown",
      "Character brief",
      "২ বার রিভিশন",
    ],
  },
  {
    id: "premium",
    name: "PREMIUM — Video Ready",
    nameBn: "প্রিমিয়াম — ভিডিও রেডি",
    price: 1500,
    tagline: "ক্যামেরার সামনে যাওয়ার আগের সবকিছু",
    features: [
      "সম্পূর্ণ স্ক্রিনপ্লে",
      "Scene-by-scene AI video prompt",
      "Voice-over স্ক্রিপ্ট",
      "ক্যামেরা ও ভিজ্যুয়াল ডিরেকশন",
      "SFX ও মিউজিক সাজেশন",
      "এডিটিং গাইডলাইন",
      "২ বার রিভিশন",
    ],
  },
];

export const pricingNote =
  "উপরের মূল্য নির্দেশমূলক শুরুর দাম — প্রতিটি প্রজেক্টের দৈর্ঘ্য, জনরা ও জটিলতা অনুযায়ী চূড়ান্ত কোটেশন দেওয়া হয়। লং স্ক্রিপ্ট, মাল্টি-এপিসোড, কমার্শিয়াল ও জটিল প্রজেক্টের জন্য কাস্টম কোটেশন নিন।";

export function packageWaMessage(pkg: Pkg): string {
  return `আসসালামু আলাইকুম! আমি Doza Desk-এর "${pkg.name}" প্যাকেজটি (শুরুর মূল্য ৳${pkg.price.toLocaleString("en-US")}) সম্পর্কে জানতে চাই। আমার প্রজেক্ট নিয়ে কথা বলতে চাই।`;
}

/* ------------------------------- Portfolio ------------------------------ */

export type Project = {
  id: string;
  title: string;
  genre: string;
  deliverable: string;
  image: string;
  synopsis: string;
  excerptTitle: string;
  excerpt: string[];
  meta: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    id: "hufi-files",
    title: "Hufi Files",
    genre: "Cybersecurity Thriller",
    deliverable: "Short-film Screenplay",
    image: "/images/portfolio-hufi.jpg",
    synopsis:
      "একজন তরুণ এথিক্যাল হ্যাকার হঠাৎ আবিষ্কার করে—তার নিজের শহরের একটি ব্যাংক জালিয়াতির পেছনে আছে তারই পরিচিত কেউ। সত্য বের করতে গিয়ে সে ঢুকে পড়ে এক ডিজিটাল ফাঁদে।",
    excerptTitle: "Hufi Files — দৃশ্য ৩ (নমুনা অংশ)",
    excerpt: [
      "INT. মেস রুম — রাত",
      "ঘরে শুধু মনিটরের আলো। হুফির চোখ স্ক্রিনে আটকে আছে। টার্মিনালে একের পর এক লাইন ভেসে উঠছে… ACCESS LOG: UNKNOWN DEVICE।",
      "হুফি (ফিসফিস করে): এটা… আমার নিজের IP থেকে লগইন? অসম্ভব।",
      "হঠাৎ স্ক্রিন কালো হয়ে যায়। মাঝখানে ভেসে ওঠে একটি লাইন — “তুমি যা খুঁজছো, তা তোমাকেও খুঁজছে।”",
    ],
    meta: [
      { label: "জনরা", value: "Cyber Thriller" },
      { label: "ডেলিভারেবল", value: "Screenplay + Scene Breakdown" },
      { label: "ভাষা", value: "বাংলা" },
    ],
  },
  {
    id: "gramer-prem",
    title: "গ্রামের প্রেম",
    genre: "Emotional Short Film",
    deliverable: "Short-film Script + Dialogue",
    image: "/images/portfolio-gramer-prem.jpg",
    synopsis:
      "শহরে চাকরি পাওয়া রাকিব ফিরে আসে গ্রামে—শুধু ছুটিতে নয়, ফেলে আসা এক প্রতিশ্রুতি রাখতে। পুরনো বটগাছের নিচে অপেক্ষা করছে এমন এক সত্য, যা বদলে দেবে দুটি জীবন।",
    excerptTitle: "গ্রামের প্রেম — দৃশ্য ৫ (নমুনা অংশ)",
    excerpt: [
      "EXT. বটগাছতলা, পুকুরপাড় — বিকেল",
      "সোনালি আলোয় ভাসছে পুরো গ্রাম। শিউলি দাঁড়িয়ে আছে বটগাছের ছায়ায়। দূর থেকে রাকিবের পায়ের শব্দ।",
      "শিউলি (না তাকিয়েই): পাঁচ বছর পর মনে পড়ল এই গাছটার কথা?",
      "রাকিব: গাছটার কথা প্রতিদিন মনে পড়ত। শুধু… তোমার সামনে দাঁড়ানোর সাহস ছিল না।",
    ],
    meta: [
      { label: "জনরা", value: "Emotional / Romance" },
      { label: "ডেলিভারেবল", value: "Script + Dialogue" },
      { label: "ভাষা", value: "বাংলা" },
    ],
  },
  {
    id: "last-call",
    title: "The Last Call",
    genre: "Mystery Short",
    deliverable: "Mystery Screenplay",
    image: "/images/portfolio-last-call.jpg",
    synopsis:
      "প্রতি রাত ১১:৪৭-এ একটি অচেনা নম্বর থেকে কল আসে সাংবাদিক নাঈমের ফোনে। ওপাশে শুধু নীরবতা… আর সপ্তম রাতে ভেসে আসে একটি ঠিকানা—যেখানে যাওয়ার কথা ছিল না তার।",
    excerptTitle: "The Last Call — দৃশ্য ২ (নমুনা অংশ)",
    excerpt: [
      "INT. নাঈমের বাসা — রাত ১১:৪৭",
      "ফোনের স্ক্রিনে জ্বলছে: UNKNOWN NUMBER। নাঈম কল রিসিভ করে। ওপাশে শুধু বৃষ্টির শব্দ।",
      "নাঈম: হ্যালো? কে বলছেন? হ্যালো—",
      "একটি ভাঙা কণ্ঠ ভেসে আসে: “পুরনো রেলস্টেশনের তিন নম্বর প্ল্যাটফর্ম… আগামীকাল… একা এসো।” — লাইন কেটে যায়।",
    ],
    meta: [
      { label: "জনরা", value: "Mystery / Suspense" },
      { label: "ডেলিভারেবল", value: "Screenplay + Twist Outline" },
      { label: "ভাষা", value: "বাংলা" },
    ],
  },
  {
    id: "notun-sokal",
    title: "নতুন সকাল",
    genre: "Social Drama",
    deliverable: "Drama Script",
    image: "/images/portfolio-notun-sokal.jpg",
    synopsis:
      "অভাবের সংসারে পড়াশোনা চালিয়ে যাওয়া কিশোরী মীমের স্বপ্ন—একদিন শিক্ষক হওয়া। এক সকালের একটি ছোট ঘটনা বদলে দেয় পুরো মহল্লার দৃষ্টিভঙ্গি।",
    excerptTitle: "নতুন সকাল — দৃশ্য ১ (নমুনা অংশ)",
    excerpt: [
      "EXT. মহল্লার গলি — ভোর",
      "কুয়াশা ভেদ করে প্রথম আলো পড়ছে টিনের চালায়। মীম কাঁধে পুরনো ব্যাগ নিয়ে হাঁটছে স্কুলের দিকে।",
      "মা (দরজা থেকে): মীম! টিফিনটা নিয়ে যা, মা।",
      "মীম (হাসিমুখে ফিরে): আজ দেরি হলে স্যার বকবে না, মা। আজ আমাদের ক্লাসে নতুন বই দেবে!",
    ],
    meta: [
      { label: "জনরা", value: "Social Drama" },
      { label: "ডেলিভারেবল", value: "Drama Script + Character Brief" },
      { label: "ভাষা", value: "বাংলা" },
    ],
  },
];

/* --------------------------------- FAQs --------------------------------- */

export const faqs: { q: string; a: string }[] = [
  {
    q: "আমি শুধু গল্পের আইডিয়া দিলে কি সম্পূর্ণ স্ক্রিপ্ট লিখে দিতে পারবেন?",
    a: "হ্যাঁ, অবশ্যই। এটাই আমাদের সবচেয়ে সাধারণ কাজ। আপনি শুধু আপনার আইডিয়া, টপিক বা ভিডিওর উদ্দেশ্য জানাবেন — আমরা সেটিকে পূর্ণাঙ্গ গল্প, স্ক্রিনপ্লে ও সংলাপে রূপ দেব। প্রয়োজনে WhatsApp-এ আলোচনা করে গল্পের দিকনির্দেশনা ঠিক করে নেওয়া হয়।",
  },
  {
    q: "৫ মিনিটের Short-film Script-এর দাম কত?",
    a: "আমাদের STANDARD — Script প্যাকেজের শুরুর মূল্য ৳৮০০। তবে ৫ মিনিটের স্ক্রিপ্টের চূড়ান্ত দাম নির্ভর করে জনরা, সিনের সংখ্যা, সংলাপের পরিমাণ ও ডেলিভারেবলের (যেমন AI prompt, voice-over) ওপর। সঠিক দামের জন্য WhatsApp-এ আপনার প্রজেক্টের বিস্তারিত পাঠান — আমরা দ্রুত কাস্টম কোটেশন দেব।",
  },
  {
    q: "AI Video তৈরির জন্য Scene-by-scene Prompt দেওয়া হয়?",
    a: "হ্যাঁ। আমাদের PREMIUM — Video Ready প্যাকেজে প্রতিটি সিনের জন্য ডিটেইলড AI ভিডিও প্রম্পট, ক্যারেক্টার কনসিস্টেন্সি গাইড, ভিজ্যুয়াল ও ক্যামেরা ডিরেকশন দেওয়া হয়। চাইলে শুধু AI prompt সার্ভিস হিসেবেও অর্ডার করতে পারবেন।",
  },
  {
    q: "কত দিনে কাজ সম্পন্ন হবে?",
    a: "কাজের পরিধির ওপর ডেলিভারি সময় নির্ভর করে। ছোট গল্প বা Shorts স্ক্রিপ্ট সাধারণত দ্রুত ডেলিভারি হয়, আর পূর্ণাঙ্গ শর্টফিল্ম বা ড্রামা স্ক্রিপ্টে বেশি সময় লাগে। অর্ডারের সময় আপনার ডেডলাইন জানালে আমরা বাস্তবসম্মত সময়সূচি ঠিক করে দেব — অযথা তাড়াহুড়ো করে মান নষ্ট করা হয় না।",
  },
  {
    q: "কতবার Revision করা যাবে?",
    a: "BASIC প্যাকেজে ১ বার এবং STANDARD ও PREMIUM প্যাকেজে ২ বার রিভিশন অন্তর্ভুক্ত। রিভিশন মানে হলো ড্রাফটের ওপর যৌক্তিক সংশোধন — যেমন সংলাপ বদল, সিন সাজানো বা টোন ঠিক করা। সম্পূর্ণ নতুন গল্প লেখা রিভিশনের আওতায় পড়ে না, সেটির জন্য আলাদা আলোচনা হবে।",
  },
  {
    q: "আমার গল্পের আইডিয়া কি গোপন রাখা হবে?",
    a: "হ্যাঁ, ১০০%। আপনার অপ্রকাশিত আইডিয়া, গল্প ও স্ক্রিপ্ট সম্পূর্ণ গোপন রাখা হয়। আপনার অনুমতি ছাড়া কোনো কাজ পোর্টফোলিও বা অন্য কোথাও ব্যবহার করা হয় না। চাইলে কাজ শুরুর আগে গোপনীয়তার বিষয়ে লিখিতভাবে নিশ্চিত করা যাবে।",
  },
  {
    q: "জরুরি কাজের জন্য কি অর্ডার দেওয়া যাবে?",
    a: "হ্যাঁ, স্লট খালি থাকলে জরুরি (এক্সপ্রেস) ডেলিভারি নেওয়া হয়। এক্সপ্রেস কাজের ক্ষেত্রে বাড়তি রাশ-চার্জ প্রযোজ্য হতে পারে। WhatsApp-এ আপনার ডেডলাইন জানান — আমরা স্লট ও চার্জ কনফার্ম করে দেব।",
  },
  {
    q: "বাংলা ও ইংরেজি—দুই ভাষাতেই কি কাজ করা হয়?",
    a: "হ্যাঁ। আমরা বাংলা, ইংরেজি এবং বাংলা-ইংরেজি মিশ্র (যেমন YouTube narration) — তিন ধরনেরই স্ক্রিপ্ট লিখি। অর্ডারের সময় আপনার পছন্দের ভাষা জানিয়ে দিলেই হবে।",
  },
];

/* ------------------------------ How it works ----------------------------- */

export const steps = [
  {
    no: "০১",
    title: "Share Your Idea",
    titleBn: "আপনার আইডিয়া শেয়ার করুন",
    desc: "আপনার গল্প, টপিক বা ভিডিওর প্রয়োজন WhatsApp বা ফর্মের মাধ্যমে জানান।",
  },
  {
    no: "০২",
    title: "Discuss the Project",
    titleBn: "প্রজেক্ট নিয়ে আলোচনা",
    desc: "সময়কাল, জনরা, ভাষা, দর্শক ও ডেলিভারেবল কনফার্ম করা হয়।",
  },
  {
    no: "০৩",
    title: "Script Development",
    titleBn: "স্ক্রিপ্ট ডেভেলপমেন্ট",
    desc: "গল্প, স্ক্রিনপ্লে, সংলাপ ও প্রয়োজনীয় সাপোর্ট ম্যাটেরিয়াল তৈরি হয়।",
  },
  {
    no: "০৪",
    title: "Review & Revision",
    titleBn: "রিভিউ ও রিভিশন",
    desc: "ড্রাফট দেখে প্যাকেজ অনুযায়ী রিভিশনের সুযোগ পাবেন।",
  },
  {
    no: "০৫",
    title: "Final Delivery",
    titleBn: "ফাইনাল ডেলিভারি",
    desc: "চূড়ান্ত ফাইল DOCX, PDF বা Google Docs ফরম্যাটে বুঝিয়ে দেওয়া হয়।",
  },
];

export const whyChoose = [
  {
    icon: "lightbulb",
    title: "Creative & Original Ideas",
    titleBn: "সৃজনশীল ও মৌলিক আইডিয়া",
    desc: "কপি-পেস্ট নয় — প্রতিটি গল্প আপনার প্রজেক্টের জন্য নতুন করে লেখা।",
  },
  {
    icon: "languages",
    title: "Natural Bangla Dialogue",
    titleBn: "স্বাভাবিক বাংলা সংলাপ",
    desc: "মুখস্থ-মনে হওয়া নয়, বাস্তব জীবনের মতো জীবন্ত কথোপকথন।",
  },
  {
    icon: "clipboardList",
    title: "Production-Friendly Scripts",
    titleBn: "প্রোডাকশন-ফ্রেন্ডলি স্ক্রিপ্ট",
    desc: "সিন, শট ও লোকেশনসহ সাজানো — শুটিং টিমের কাজ সহজ হয়।",
  },
  {
    icon: "wallet",
    title: "Affordable Packages",
    titleBn: "সাধ্যের মধ্যে প্যাকেজ",
    desc: "মাত্র ৳৩০০ থেকে শুরু — নতুন ক্রিয়েটরদের জন্য সহজ মূল্য।",
  },
  {
    icon: "phoneCall",
    title: "Clear Communication",
    titleBn: "স্বচ্ছ যোগাযোগ",
    desc: "WhatsApp-এ দ্রুত রিপ্লাই, প্রতিটি ধাপে আপডেট ও পরামর্শ।",
  },
  {
    icon: "shieldCheck",
    title: "Confidential Handling",
    titleBn: "আইডিয়ার গোপনীয়তা",
    desc: "আপনার অপ্রকাশিত গল্প সম্পূর্ণ গোপন রাখার নিশ্চয়তা।",
  },
];
