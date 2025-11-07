import Link from "next/link";
import { categories } from "@/data/mockTests";

export default function CategoryHighlights() {
  return (
    <section className="bg-slate-900 py-16 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
            Exam Categories
          </span>
          <h2 className="text-3xl font-bold">Aapke target ke hisaab se curated test library</h2>
          <p className="text-slate-300 sm:max-w-3xl">
            Har mock test ko latest exam pattern, bilingual explanations aur expert analytics ke saath design kiya gaya hai. SSC, RRB aur foundational practice sets sab ek hi jagah.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <article
              key={category.id}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900 p-6 shadow-lg transition hover:-translate-y-1 hover:border-sky-400/40"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="relative space-y-4">
                <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-sky-300">
                  {category.id}
                </div>
                <h3 className="text-2xl font-semibold text-white">{category.name}</h3>
                <p className="text-sm text-slate-300">{category.tagline}</p>
                <ul className="space-y-2 text-sm text-slate-300">
                  {category.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-sky-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/mock-tests?focus=${category.id}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300 transition hover:border-sky-400/60 hover:text-sky-200"
                >
                  Browse Tests
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
