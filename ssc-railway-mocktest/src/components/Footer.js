import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <h3 className="text-xl font-semibold">MockTest Guru</h3>
          <p className="mt-1 text-sm text-slate-400">
            SSC, Railway, aur foundation exams ke liye ready-to-deploy mock test platform.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-300">
          <Link href="/mock-tests" className="hover:text-sky-300">
            Mock Tests
          </Link>
          <Link href="#features" className="hover:text-sky-300">
            Features
          </Link>
          <Link href="#faqs" className="hover:text-sky-300">
            FAQs
          </Link>
        </div>
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} MockTest Guru. All rights reserved.</p>
      </div>
    </footer>
  );
}
