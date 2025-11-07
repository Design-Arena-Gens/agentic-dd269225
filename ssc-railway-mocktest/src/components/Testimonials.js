const testimonials = [
  {
    name: "Anjali Sharma",
    exam: "SSC CGL 2023",
    message:
      "MockTest Guru ke Tier-I mocks exactly exam jaisa feel dete hain. Detailed solutions aur post test analytics se mujhe weak topics turant mil gaye.",
  },
  {
    name: "Rahul Verma",
    exam: "RRB NTPC",
    message:
      "Time management improve karne ke liye leaderboard aur timer ka combo bohot helpful hai. Har attempt ke baad speed/accuracy track ho jati hai.",
  },
  {
    name: "Priya Singh",
    exam: "Foundation Series",
    message:
      "Daily booster tests aur revision planner ne meri consistency build ki. Hindi explanations se concepts clear ho gaye.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-900 py-16 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
            Student Stories
          </span>
          <h2 className="text-3xl font-bold">Learners jo hamare mock tests par trust karte hain</h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote
              key={item.name}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800/60 to-slate-900 p-6"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-400" />
              <p className="text-sm text-slate-300">“{item.message}”</p>
              <footer className="mt-6 text-sm font-semibold text-white">
                {item.name}
                <span className="block text-xs font-normal text-sky-300">{item.exam}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
