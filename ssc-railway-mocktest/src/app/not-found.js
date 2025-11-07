import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-slate-950 px-4 text-center text-white">
      <div className="max-w-lg space-y-4">
        <span className="rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-sky-300">
          404
        </span>
        <h1 className="text-3xl font-bold">Oh! Requested mock test ya page nahi mila.</h1>
        <p className="text-sm text-slate-300">
          Ho sakta hai link update hua ho. Home page par wapas jaakar naya mock test choose karein.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-sky-400"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}
