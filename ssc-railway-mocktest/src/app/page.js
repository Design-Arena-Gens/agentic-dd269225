import Hero from "@/components/Hero";
import CategoryHighlights from "@/components/CategoryHighlights";
import FeatureShowcase from "@/components/FeatureShowcase";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import TestCard from "@/components/TestCard";
import { mockTests } from "@/data/mockTests";
import Link from "next/link";

export default function Home() {
  const featuredTests = mockTests.slice(0, 3);

  return (
    <div className="space-y-0">
      <Hero />
      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
                Trending Mock Tests
              </span>
              <h2 className="text-3xl font-bold">Aaj hi attempt karo top performing tests</h2>
              <p className="max-w-2xl text-sm text-slate-300">
                Real exam level difficulty ke saath curated mocks jo toppers ne recommend kiye hain. Attempt karo, solutions dekho aur performance improve karo.
              </p>
            </div>
            <Link
              href="/mock-tests"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300 transition hover:border-sky-400/60 hover:text-sky-200"
            >
              View All Tests
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredTests.map((test) => (
              <TestCard key={test.slug} test={test} />
            ))}
          </div>
        </div>
      </section>
      <CategoryHighlights />
      <FeatureShowcase />
      <Testimonials />
      <FAQ />
    </div>
  );
}
