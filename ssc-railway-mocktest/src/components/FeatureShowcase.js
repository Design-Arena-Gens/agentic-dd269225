const features = [
  {
    title: "Real Exam Interface",
    description:
      "Exact SSC aur Railway CBT format with bilingual switch, question palette aur flag-for-review options.",
    metrics: "Exam feel 100%",
  },
  {
    title: "Adaptive Performance Analytics",
    description:
      "Auto-generated subject-wise reports, accuracy vs speed graph aur peer comparison se track karo growth.",
    metrics: "AI Insights",
  },
  {
    title: "Detailed Explanations",
    description:
      "Har question ke liye step-by-step solutions + smart shortcuts Hindi-English dono mein available hain.",
    metrics: "Dual language",
  },
  {
    title: "Streak & Revision Planner",
    description:
      "Daily goal tracker, revision todo aur insta-retest feature se weak topics ko boost karo.",
    metrics: "Stay Consistent",
  },
];

export default function FeatureShowcase() {
  return (
    <section id="features" className="bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-4 text-white sm:px-6">
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
            Platform Highlights
          </span>
          <h2 className="text-3xl font-bold">Selection driven features jo aapko accelerate kare</h2>
          <p className="text-slate-300 sm:max-w-3xl">
            MockTest Guru ke saath sirf questions nahi balki poora learning flow milta hai. Performance analysis, revision tools aur live leaderboard se motivation high rakho.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900 to-slate-950 p-6 transition hover:-translate-y-1 hover:border-sky-500/40"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="relative space-y-3">
                <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-sky-300">
                  {feature.metrics}
                </span>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-sm text-slate-300">{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
