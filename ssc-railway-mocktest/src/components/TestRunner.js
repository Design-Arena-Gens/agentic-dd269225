"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

export default function TestRunner({ test }) {
  const questions = useMemo(
    () =>
      test.sections.flatMap((section) =>
        section.questions.map((question) => ({
          ...question,
          section: section.name,
        })),
      ),
    [test.sections],
  );

  const totalQuestions = questions.length;
  const totalDuration = test.duration * 60;
  const [timeLeft, setTimeLeft] = useState(totalDuration);
  const [activeIndex, setActiveIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [marked, setMarked] = useState(new Set());
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    if (isSubmitted) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsSubmitted(true);
          setShowSummary(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isSubmitted]);

  const marksPerQuestion = test.totalMarks / totalQuestions;

  const formattedTime = useMemo(() => {
    const minutes = Math.floor(timeLeft / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(timeLeft % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  }, [timeLeft]);

  function selectOption(questionId, optionIndex) {
    if (isSubmitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  }

  function handleMarkToggle(questionId) {
    setMarked((prev) => {
      const next = new Set(prev);
      if (next.has(questionId)) {
        next.delete(questionId);
      } else {
        next.add(questionId);
      }
      return next;
    });
  }

  function handleSubmit() {
    setIsSubmitted(true);
    setShowSummary(true);
  }

  const currentQuestion = questions[activeIndex];
  const attemptedCount = Object.keys(answers).length;
  const correctCount = questions.filter(
    (question) => answers[question.id] === question.answerIndex,
  ).length;
  const score = correctCount * marksPerQuestion;
  const accuracy = totalQuestions ? Math.round((correctCount / totalQuestions) * 100) : 0;

  const visitedIds = useMemo(() => {
    const set = new Set(Object.keys(answers));
    marked.forEach((id) => set.add(id));
    return set;
  }, [answers, marked]);
  const notVisitedCount = Math.max(totalQuestions - visitedIds.size, 0);

  return (
    <div className="min-h-screen bg-slate-950 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:flex-row">
        <aside className="lg:w-72">
          <div className="sticky top-24 space-y-4">
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
              <p className="text-sm text-slate-300">Remaining Time</p>
              <p className={`mt-2 text-3xl font-semibold ${timeLeft < 60 ? "text-amber-400" : "text-sky-300"}`}>
                {formattedTime}
              </p>
              <p className="mt-4 text-xs text-slate-400">
                {test.title} • {test.duration} min • {totalQuestions} questions
              </p>
              <button
                onClick={handleSubmit}
                disabled={isSubmitted}
                className="mt-6 w-full rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:bg-slate-600"
              >
                {isSubmitted ? "Submitted" : "Submit Test"}
              </button>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
              <h3 className="text-sm font-semibold text-slate-200">Question Palette</h3>
              <p className="mt-2 text-xs text-slate-400">
                Click to jump. Purple = Marked for review, Green = Answered.
              </p>
              <div className="mt-4 grid grid-cols-5 gap-2 text-xs">
                {questions.map((question, index) => {
                  const answered = answers[question.id] !== undefined;
                  const isMarked = marked.has(question.id);
                  return (
                    <button
                      key={question.id}
                      onClick={() => setActiveIndex(index)}
                      className={`h-9 rounded-full font-semibold transition ${
                        index === activeIndex
                          ? "bg-sky-500 text-white"
                          : answered
                          ? "bg-emerald-500/80 text-white"
                          : isMarked
                          ? "bg-violet-500/70 text-white"
                          : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                      }`}
                    >
                      {index + 1}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 text-xs text-slate-300">
              <p>• Answered: {attemptedCount}</p>
              <p>• Marked for review: {marked.size}</p>
              <p>• Not visited: {notVisitedCount}</p>
            </div>
          </div>
        </aside>
        <section className="flex-1 space-y-6">
          <header className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-sky-300">{currentQuestion.section}</p>
                <h1 className="text-lg font-semibold text-white">
                  Question {activeIndex + 1} of {totalQuestions}
                </h1>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <button
                  className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.3em] text-sky-300 transition hover:border-sky-400/60 hover:text-sky-200"
                  onClick={() => handleMarkToggle(currentQuestion.id)}
                >
                  {marked.has(currentQuestion.id) ? "Unmark" : "Mark"}
                </button>
                <span className="rounded-full bg-white/10 px-3 py-1">
                  {test.difficulty}
                </span>
              </div>
            </div>
            <p className="mt-4 text-base text-slate-100">{currentQuestion.question}</p>
          </header>
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 text-sm text-slate-200">
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                const isSelected = answers[currentQuestion.id] === index;
                const showCorrect = isSubmitted && index === currentQuestion.answerIndex;
                const showIncorrect =
                  isSubmitted && isSelected && index !== currentQuestion.answerIndex;

                return (
                  <button
                    key={option}
                    onClick={() => selectOption(currentQuestion.id, index)}
                    className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left transition ${
                      showCorrect
                        ? "border-emerald-500/60 bg-emerald-500/20"
                        : showIncorrect
                        ? "border-rose-500/60 bg-rose-500/20"
                        : isSelected
                        ? "border-sky-400/70 bg-sky-500/20"
                        : "border-white/10 bg-slate-900 hover:border-sky-400/40"
                    }`}
                    disabled={isSubmitted}
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-slate-800 text-xs font-semibold">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span>{option}</span>
                  </button>
                );
              })}
            </div>
            {isSubmitted && (
              <div className="mt-6 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-xs text-emerald-200">
                <strong className="block text-sm text-emerald-100">Explanation</strong>
                {currentQuestion.explanation}
              </div>
            )}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs text-slate-400">
              Save and Next par click karke next question par jao. Mark option revision ke liye use karo.
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setActiveIndex((prev) => Math.max(prev - 1, 0))}
                disabled={activeIndex === 0}
                className="rounded-full border border-white/20 px-4 py-2 text-sm transition hover:border-sky-400/60 hover:text-sky-200 disabled:cursor-not-allowed disabled:border-white/10"
              >
                Previous
              </button>
              <button
                onClick={() =>
                  setActiveIndex((prev) => Math.min(prev + 1, totalQuestions - 1))
                }
                disabled={activeIndex === totalQuestions - 1}
                className="rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:bg-slate-700"
              >
                Save & Next
              </button>
            </div>
          </div>
        </section>
      </div>
      {showSummary && (
        <div className="mt-10 bg-slate-950">
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-slate-900/70 p-8 text-sm text-white">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-white">Performance Snapshot</h2>
                <p className="text-xs text-slate-300">
                  Score and accuracy automatically calculated based on correct answers.
                </p>
              </div>
              <Link
                href="/mock-tests"
                className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300 transition hover:border-sky-400/60 hover:text-sky-200"
              >
                Attempt Another Test
              </Link>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-4">
              <SummaryCard title="Score" value={`${score.toFixed(1)} / ${test.totalMarks}`} accent="bg-sky-500/30" />
              <SummaryCard title="Accuracy" value={`${accuracy}%`} accent="bg-emerald-500/30" />
              <SummaryCard title="Attempted" value={`${attemptedCount} / ${totalQuestions}`} accent="bg-indigo-500/30" />
              <SummaryCard title="Correct" value={String(correctCount)} accent="bg-amber-500/30" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SummaryCard({ title, value, accent }) {
  return (
    <div className={`rounded-3xl border border-white/10 ${accent} p-6`}>
      <p className="text-xs uppercase tracking-[0.3em] text-slate-200">{title}</p>
      <p className="mt-3 text-2xl font-semibold text-white">{value}</p>
    </div>
  );
}
