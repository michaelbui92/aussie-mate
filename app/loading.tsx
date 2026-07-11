export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-sunset/30 border-t-sunset rounded-full animate-spin" />
        <p className="text-sm text-stone-400 dark:text-stone-500 animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}