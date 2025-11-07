const faqs = [
  {
    question: "Mock tests Hindi mein available hain?",
    answer:
      "Haan, har mock test bilingual hai. Aap test interface par Hindi/English toggle karke apni preferred language mein attempt kar sakte hain.",
  },
  {
    question: "Solutions aur analysis kaise milta hai?",
    answer:
      "Attempt submit karte hi section wise accuracy, time spent, all-India rank aur detailed explanations mil jayenge. Weak topics par dubara attempt ke options bhi milte hain.",
  },
  {
    question: "Kya ye platform mobile friendly hai?",
    answer:
      "100% responsive interface jo mobile, tablet aur desktop sab par seamlessly chalta hai. Offline revision notes export karne ka option bhi diya gaya hai.",
  },
];

export default function FAQ() {
  return (
    <section id="faqs" className="bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
            FAQs
          </span>
          <h2 className="mt-3 text-3xl font-bold">Aksar puchte gaye sawal</h2>
        </div>
        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 p-6 transition hover:border-sky-500/40"
            >
              <summary className="flex cursor-pointer items-center justify-between text-left text-sm font-semibold text-white">
                <span>{faq.question}</span>
                <span className="text-sky-300 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-sm text-slate-300">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
