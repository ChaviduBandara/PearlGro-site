"use client";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ reset }: ErrorPageProps) {
  return (
    <main className="mx-auto flex w-full max-w-[1120px] flex-col items-start px-6 py-[120px]">
      <p className="font-mono text-[13px] uppercase tracking-[1.5px] text-muted">
        Error
      </p>
      <h1 className="pt-4 font-heading text-[clamp(40px,6vw,88px)] font-bold tracking-tight text-text">
        Something went wrong
      </h1>
      <p className="max-w-[520px] pt-6 text-[17px] leading-[1.7] text-muted">
        An unexpected error occurred. Please try again.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-10 inline-flex h-[45px] cursor-pointer items-center justify-center rounded-full bg-accent px-6 text-[14px] font-semibold text-accent-ink shadow-[0_0_8px_rgba(47,229,140,0.2)] transition-colors hover:bg-accent-hover"
      >
        Try again
      </button>
    </main>
  );
}
