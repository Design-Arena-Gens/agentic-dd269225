import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-sky-300">
            SSC • RAILWAY • FOUNDATION
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            India ke sabse trusted mock tests ke saath tayari karo aur selection pakka karo.
          </h1>
          <p className="text-base text-slate-300 sm:text-lg">
            Adaptive question sets, real exam interface, bilingual explanations aur smart analytics ke saath rozana practice karo. 100+ curated mock tests for SSC CGL, CHSL, RRB NTPC aur aur bhi bahut kuch.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/mock-tests"
              className="rounded-full bg-sky-500 px-6 py-3 text-center text-sm font-semibold transition hover:bg-sky-400"
            >
              Free Mock Test Attempt Karo
            </Link>
            <Link
              href="#features"
              className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-semibold transition hover:border-white hover:text-white"
            >
              Platform Features Dekho
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 text-xs text-slate-300">
            <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
              <div className="text-2xl font-semibold text-white">50K+</div>
              <div>Learners ne humare mock tests attempt kiye</div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
              <div className="text-2xl font-semibold text-white">350+</div>
              <div>Bilingual practice sets with detailed solutions</div>
            </div>
          </div>
        </div>
        <div className="relative isolate rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/20 via-slate-950 to-slate-950 p-6 shadow-2xl">
          <div className="absolute -top-20 right-10 h-40 w-40 rounded-full bg-sky-500/30 blur-3xl" />
          <div className="absolute -bottom-24 left-0 h-48 w-48 rounded-full bg-indigo-500/30 blur-3xl" />
          <div className="relative space-y-5">
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
              <div>
                <div className="text-sm text-slate-300">Current Target</div>
                <div className="text-lg font-semibold text-white">SSC CGL 2024 Tier-I</div>
              </div>
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300">
                Confidence 78%
              </span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-4">
              <h3 className="text-sm font-semibold text-slate-200">Progress Snapshot</h3>
              <div className="mt-4 space-y-4 text-xs text-slate-400">
                <div>
                  <div className="mb-1 flex justify-between text-slate-300">
                    <span>Quantitative Aptitude</span>
                    <span>82%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800">
                    <div className="h-2 rounded-full bg-sky-400" style={{ width: "82%" }} />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-slate-300">
                    <span>Reasoning</span>
                    <span>76%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800">
                    <div className="h-2 rounded-full bg-emerald-400" style={{ width: "76%" }} />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-slate-300">
                    <span>General Awareness</span>
                    <span>61%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800">
                    <div className="h-2 rounded-full bg-amber-400" style={{ width: "61%" }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-3 text-xs text-slate-300 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                <p className="text-3xl font-semibold text-white">32</p>
                <p>Mock tests attempted</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                <p className="text-3xl font-semibold text-white">98</p>
                <p>Concept boosters completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
