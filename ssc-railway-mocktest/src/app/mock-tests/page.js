import TestCard from "@/components/TestCard";
import { categories, mockTests } from "@/data/mockTests";

function filterTests(selectedCategory) {
  if (!selectedCategory || selectedCategory === "all") {
    return mockTests;
  }
  return mockTests.filter((test) => test.category === selectedCategory);
}

export default function MockTestsPage({ searchParams }) {
  const selectedCategory = searchParams?.focus ?? "all";
  const filteredTests = filterTests(selectedCategory);

  return (
    <div className="bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="space-y-4 text-center sm:text-left">
          <h1 className="text-4xl font-bold">SSC & Railway Mock Test Library</h1>
          <p className="text-sm text-slate-300">
            Latest exam pattern ke hisaab se curated bilingual mock tests. Exam specific filters use karke apna next attempt choose karo.
          </p>
        </header>
        <div className="mt-8 flex flex-wrap gap-3">
          <FilterButton label="All" value="all" active={selectedCategory === "all"} />
          {categories.map((category) => (
            <FilterButton
              key={category.id}
              label={category.name}
              value={category.id}
              active={selectedCategory === category.id}
            />
          ))}
        </div>
        <section className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTests.map((test) => (
            <TestCard key={test.slug} test={test} />
          ))}
        </section>
        {filteredTests.length === 0 && (
          <p className="mt-12 rounded-3xl border border-white/10 bg-slate-900/70 p-10 text-center text-sm text-slate-300">
            Is category ke liye naye tests jaldi add honge. Tab tak doosri categories explore karein.
          </p>
        )}
      </div>
    </div>
  );
}

function FilterButton({ label, value, active }) {
  const params = new URLSearchParams(value === "all" ? {} : { focus: value });
  return (
    <a
      href={`/mock-tests${params.toString() ? `?${params.toString()}` : ""}`}
      className={`inline-flex items-center rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${active ? "border-sky-400 bg-sky-500/20 text-sky-200" : "border-white/20 text-slate-300 hover:border-sky-400/60 hover:text-sky-200"}`}
    >
      {label}
    </a>
  );
}
