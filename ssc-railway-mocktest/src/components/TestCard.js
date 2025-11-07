import Link from "next/link";

export default function TestCard({ test }) {
  const totalQuestions = test.sections.reduce(
    (sum, section) => sum + section.questions.length,
    0,
  );

  return (
    <article className="flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-6 text-white shadow-lg transition hover:-translate-y-1 hover:border-sky-400/40">
      <div className="space-y-3">
        <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-sky-300">
          {test.category}
        </div>
        <h3 className="text-xl font-semibold text-white">{test.title}</h3>
        <p className="text-sm text-slate-300">{test.description}</p>
      </div>
      <dl className="mt-6 grid grid-cols-2 gap-4 text-xs text-slate-300">
        <div>
          <dt className="font-semibold text-slate-200">Duration</dt>
          <dd>{test.duration} minutes</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-200">Questions</dt>
          <dd>{totalQuestions}</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-200">Difficulty</dt>
          <dd>{test.difficulty}</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-200">Marks</dt>
          <dd>{test.totalMarks}</dd>
        </div>
      </dl>
      <Link
        href={`/mock-tests/${test.slug}`}
        className="mt-6 inline-flex items-center justify-center rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-400"
      >
        Attempt Now
      </Link>
    </article>
  );
}
