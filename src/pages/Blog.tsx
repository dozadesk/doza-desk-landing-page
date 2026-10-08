import { Link } from "react-router-dom";

const posts = [
  {
    slug: "chatgpt-for-beginners",
    title: "ChatGPT কী এবং একজন নতুন ব্যবহারকারী কীভাবে শুরু করবেন?",
    excerpt:
      "AI নিয়ে একদম নতুন হলে ChatGPT কীভাবে ব্যবহার করবেন, কী ধরনের প্রশ্ন করবেন এবং কীভাবে ভালো ফল পাবেন—সহজভাবে জানুন।",
    category: "AI & Technology",
  },
  {
    slug: "facebook-job-scam",
    title: "Facebook-এ চাকরির নামে প্রতারণা চিনবেন কীভাবে?",
    excerpt:
      "অনলাইনে চাকরির বিজ্ঞাপন দেখলেই বিশ্বাস করবেন না। ভুয়া নিয়োগ বিজ্ঞাপন ও প্রতারণার কয়েকটি গুরুত্বপূর্ণ লক্ষণ জেনে নিন।",
    category: "Online Safety",
  },
  {
    slug: "digital-services",
    title: "ডিজিটাল সেবা নিতে গিয়ে যে ভুলগুলো এড়িয়ে চলবেন",
    excerpt:
      "অনলাইন ফর্ম, ডকুমেন্ট, প্রিন্ট ও ডিজিটাল সেবা নেওয়ার সময় তথ্য ও ফাইল নিরাপদ রাখার কিছু গুরুত্বপূর্ণ নিয়ম।",
    category: "Digital Guide",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#061116] text-white">
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#00C878]">
            Doza Desk Blog
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            জানুন, শিখুন, নিরাপদ থাকুন
          </h1>

          <p className="mt-5 text-base leading-8 text-white/65 sm:text-lg">
            AI, technology, online safety এবং দৈনন্দিন ডিজিটাল সেবা নিয়ে
            সহজ ভাষায় প্রয়োজনীয় তথ্য ও গাইড।
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-[#00C878]/40 hover:bg-white/[0.05]"
            >
              <p className="text-sm font-medium text-[#00C878]">
                {post.category}
              </p>

              <h2 className="mt-4 text-xl font-bold leading-8">
                {post.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/60">
                {post.excerpt}
              </p>

              <Link
                to={`/blog/${post.slug}/`}
                className="mt-6 inline-flex items-center font-semibold text-[#00C878] transition group-hover:gap-2"
              >
                বিস্তারিত পড়ুন →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
