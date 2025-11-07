import { notFound } from "next/navigation";
import { getTestBySlug } from "@/data/mockTests";
import TestRunner from "@/components/TestRunner";

export function generateMetadata({ params }) {
  const test = getTestBySlug(params.slug);
  if (!test) {
    return {
      title: "Mock Test Not Found",
    };
  }
  return {
    title: `${test.title} | MockTest Guru`,
    description: test.description,
  };
}

export default function TestAttemptPage({ params }) {
  const test = getTestBySlug(params.slug);

  if (!test) {
    notFound();
  }

  return <TestRunner test={test} />;
}
