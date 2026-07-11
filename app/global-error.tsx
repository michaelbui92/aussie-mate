"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-stone-50 dark:bg-darkbg px-6">
          <div className="text-center max-w-md">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
              Critical Error
            </p>
            <h1 className="font-serif text-3xl md:text-4xl text-stone-900 dark:text-stone-100 mb-4">
              Something went wrong
            </h1>
            <p className="text-stone-500 dark:text-stone-400 mb-8 text-sm leading-relaxed">
              A critical error occurred. This is usually temporary — please try again.
            </p>
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 bg-sunset hover:bg-sunset-light text-white px-6 py-3 text-sm font-semibold rounded-full transition-all"
            >
              Try again
            </button>
            {error.digest && (
              <p className="mt-8 text-[10px] text-stone-400 dark:text-stone-500 font-mono">
                Error ID: {error.digest}
              </p>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}