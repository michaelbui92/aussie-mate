"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
          Error
        </p>
        <h1 className="font-serif text-3xl md:text-4xl text-stone-900 dark:text-stone-100 mb-4">
          Something went wrong
        </h1>
        <p className="text-stone-500 dark:text-stone-400 mb-8 text-sm leading-relaxed">
          This page hit an unexpected error. It&apos;s probably temporary —
          try refreshing, or head back to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 bg-sunset hover:bg-sunset-light text-white px-6 py-3 text-sm font-semibold rounded-full transition-all"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"
          >
            Go home →
          </Link>
        </div>
        {error.digest && (
          <p className="mt-8 text-[10px] text-stone-400 dark:text-stone-500 font-mono">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}