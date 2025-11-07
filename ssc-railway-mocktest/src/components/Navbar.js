import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/mock-tests", label: "Mock Tests" },
  { href: "#features", label: "Features" },
  { href: "#faqs", label: "FAQs" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-sm font-medium text-slate-100 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <span className="h-9 w-9 rounded bg-sky-500/20 text-center text-xl leading-9 text-sky-400">
            MT
          </span>
          <span>MockTest Guru</span>
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1 transition hover:bg-white/10"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/mock-tests"
            className="rounded-full bg-sky-500 px-4 py-2 text-white transition hover:bg-sky-400"
          >
            Start Practicing
          </Link>
        </div>
      </nav>
    </header>
  );
}
