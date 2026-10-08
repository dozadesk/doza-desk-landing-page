import { Link, useParams } from "react-router-dom";

const posts = {
  "chatgpt-for-beginners": {
    category: "AI & Technology",
    title: "ChatGPT কী এবং একজন নতুন ব্যবহারকারী কীভাবে শুরু করবেন?",
    date: "৮ অক্টোবর ২০২৬",
    readTime: "৫ মিনিট",
    intro:
      "ChatGPT নিয়ে অনেকেই শুনেছেন, কিন্তু কীভাবে শুরু করবেন বা কী ধরনের প্রশ্ন করলে ভালো উত্তর পাওয়া যায়—তা অনেকেরই পরিষ্কার নয়। এই গাইডটি একদম নতুন ব্যবহারকারীদের জন্য।",

    sections: [
      {
        heading: "ChatGPT কী?",
        paragraphs: [
          "ChatGPT হলো একটি AI assistant, যার সঙ্গে স্বাভাবিক ভাষায় কথা বলে বিভিন্ন ধরনের তথ্য, ধারণা, লেখা, পরিকল্পনা ও সমস্যা সমাধানে সহায়তা নেওয়া যায়।",
          "তবে এটিকে সবসময় নির্ভুল তথ্যের উৎস হিসেবে ধরে নেওয়া উচিত নয়। গুরুত্বপূর্ণ তথ্যের ক্ষেত্রে নির্ভরযোগ্য উৎস দিয়ে যাচাই করা ভালো।",
        ],
      },
      {
        heading: "প্রথমবার কীভাবে শুরু করবেন?",
        paragraphs: [
          "প্রথমে আপনার প্রয়োজনটি সহজ ভাষায় লিখুন। আপনি কী চান এবং কোন ধরনের ফলাফল চান—এ দুটি বিষয় যত পরিষ্কারভাবে বলবেন, সাধারণত উত্তরও তত বেশি কাজে লাগবে।",
          "উদাহরণ হিসেবে শুধু ‘একটা ব্যবসার আইডিয়া দাও’ না লিখে বলতে পারেন—‘বাংলাদেশের গ্রামাঞ্চল থেকে শহরের মানুষের কাছে গুড় বিক্রি করার জন্য কম বাজেটের একটি অনলাইন ব্যবসার পরিকল্পনা তৈরি করো।’",
        ],
      },
      {
        heading: "ভালো Prompt লেখার সহজ নিয়ম",
        paragraphs: [
          "আপনার কাজ, প্রয়োজনীয় প্রেক্ষাপট এবং কাঙ্ক্ষিত ফলাফল উল্লেখ করুন। প্রয়োজনে ভাষা, দৈর্ঘ্য, audience এবং format-ও বলে দিন।",
          "একবারে নিখুঁত prompt লিখতে হবে এমন নয়। প্রথম উত্তরের পর প্রয়োজন অনুযায়ী আরও নির্দেশনা দিয়ে ফলাফল উন্নত করতে পারেন।",
        ],
      },
      {
        heading: "কী বিষয়ে সতর্ক থাকবেন?",
        paragraphs: [
          "ব্যক্তিগত password, OTP, banking information বা অন্য সংবেদনশীল তথ্য AI chat-এ দেওয়া উচিত নয়।",
          "চিকিৎসা, আইন, অর্থনীতি বা অন্য গুরুত্বপূর্ণ সিদ্ধান্তের ক্ষেত্রে AI-এর উত্তরকে সহায়ক তথ্য হিসেবে দেখুন এবং প্রয়োজন হলে qualified professional বা নির্ভরযোগ্য primary source থেকে যাচাই করুন।",
        ],
      },
    ],
  },

  "facebook-job-scam": {
    category: "Online Safety",
    title: "Facebook-এ চাকরির নামে প্রতারণা চিনবেন কীভাবে?",
    date: "৮ অক্টোবর ২০২৬",
    readTime: "৪ মিনিট",
    intro:
      "Facebook-এ আকর্ষণীয় চাকরির বিজ্ঞাপন দেখে অনেকেই দ্রুত যোগাযোগ করেন। কিন্তু কিছু বিজ্ঞাপন আসলে ব্যক্তিগত তথ্য বা টাকা হাতিয়ে নেওয়ার ফাঁদ হতে পারে।",

    sections: [
      {
        heading: "অতিরিক্ত ভালো অফার হলে সতর্ক হোন",
        paragraphs: [
          "কাজের ধরন, যোগ্যতা ও অভিজ্ঞতার তুলনায় অস্বাভাবিক বেশি বেতন দেখালে আগে প্রতিষ্ঠান ও নিয়োগ বিজ্ঞাপন যাচাই করুন।",
        ],
      },
      {
        heading: "আগে টাকা চাইলে থামুন",
        paragraphs: [
          "চাকরি নিশ্চিত করা, interview slot, registration বা training-এর নামে টাকা চাইলে বিষয়টি ভালোভাবে যাচাই না করে অর্থ পাঠাবেন না।",
        ],
      },
      {
        heading: "ব্যক্তিগত তথ্য সুরক্ষিত রাখুন",
        paragraphs: [
          "OTP, password, card PIN বা অপ্রয়োজনীয় ব্যক্তিগত তথ্য কোনো অপরিচিত ব্যক্তি বা সন্দেহজনক page-কে দেবেন না।",
        ],
      },
    ],
  },

  "digital-services": {
    category: "Digital Guide",
    title: "ডিজিটাল সেবা নিতে গিয়ে যে ভুলগুলো এড়িয়ে চলবেন",
    date: "৮ অক্টোবর ২০২৬",
    readTime: "৪ মিনিট",
    intro:
      "অনলাইন form, document, print বা অন্য কোনো digital service নেওয়ার সময় সামান্য অসতর্কতাও পরে সমস্যার কারণ হতে পারে।",

    sections: [
      {
        heading: "তথ্য দেওয়ার আগে যাচাই করুন",
        paragraphs: [
          "আপনার document বা personal information কার কাছে এবং কেন দেওয়া হচ্ছে তা বুঝে নিন।",
        ],
      },
      {
        heading: "Final submission-এর আগে সবকিছু দেখুন",
        paragraphs: [
          "নাম, জন্মতারিখ, মোবাইল নম্বর, ঠিকানা এবং অন্যান্য গুরুত্বপূর্ণ তথ্য submit করার আগে আবার যাচাই করুন।",
        ],
      },
      {
        heading: "Soft copy নিরাপদে রাখুন",
        paragraphs: [
          "গুরুত্বপূর্ণ document-এর একটি backup নিজের কাছে রাখুন এবং প্রয়োজন না হলে অপরিচিত device বা account-এ স্থায়ীভাবে সংরক্ষণ করবেন না।",
        ],
      },
    ],
  },
};

type Post = (typeof posts)[keyof typeof posts];

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? (posts as Record<string, Post>)[slug] : undefined;

  if (!post) {
    return (
      <div className="min-h-screen bg-[#061116] px-5 py-24 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[#00C878]">404</p>
          <h1 className="mt-3 text-3xl font-bold">
            Article পাওয়া যায়নি
          </h1>
          <Link
            to="/blog/"
            className="mt-8 inline-block rounded-lg bg-[#00C878] px-5 py-3 font-bold text-[#061116]"
          >
            Blog-এ ফিরে যান
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#061116] text-white">
      <article className="mx-auto max-w-3xl px-5 py-14 sm:px-8 lg:py-20">
        <Link
          to="/blog/"
          className="text-sm font-semibold text-[#00C878]"
        >
          ← Blog-এ ফিরে যান
        </Link>

        <header className="mt-8 border-b border-white/10 pb-8">
          <p className="text-sm font-semibold text-[#00C878]">
            {post.category}
          </p>

          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">
            {post.title}
          </h1>

          <div className="mt-5 flex flex-wrap gap-4 text-sm text-white/50">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <p className="mt-7 text-lg leading-8 text-white/70">
            {post.intro}
          </p>
        </header>

        <div className="mt-10 space-y-10">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-bold">
                {section.heading}
              </h2>

              <div className="mt-4 space-y-4 text-base leading-8 text-white/70">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <Link
            to="/blog/"
            className="inline-flex rounded-lg border border-[#00C878]/40 px-5 py-3 font-semibold text-[#00C878] transition hover:bg-[#00C878] hover:text-[#061116]"
          >
            ← সব Article দেখুন
          </Link>
        </div>
      </article>
    </div>
  );
}

